/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import React, { useEffect, useState } from "react";
import MDProgress from "components/MDProgress";

// Images

import team3 from "assets/images/team-3.jpg";
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Land = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <img src={image} alt={name} width={50} style={{ borderRadius: 5 }} />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium" color="text">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  // const Project = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" variant="rounded" />
  //     <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  const Popularity = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  const [isLiveMode, setIsLiveMode] = useState(true);
  const [timestamp, setTimestamp] = useState(-1);
  const [liveData, setLiveData] = useState([]);

  // const [seconds, setSeconds] = useState(1);
  // const [includebids, setIncludeBids] = useState(false);
  // const [includebids, setIncludeBids] = useState(false);

  const fetchEventsData = async () => {
    // eslint-disable-next-line global-require
    const axios = require("axios");
    axios
      .get(
        timestamp === -1
          ? "https://us-central1-jtlabs-63b31.cloudfunctions.net/event?event_type=bid_entered&collection=sandbox"
          : `https://us-central1-jtlabs-63b31.cloudfunctions.net/event?event_type=bid_entered&collection=sandbox&occured_after=${timestamp}`
      )
      .then((res) => {
        const tempLiveData = liveData;
        const asset_events = res.data.message;
        for (let i = 0; i < asset_events.length; i++) {
          const asset_event = asset_events[i];
          const { asset } = asset_event;
          if (asset != null) {
            let eventType = "Bid";
            if (asset.event_type === "successful") {
              eventType = "Sale";
            } else if (asset.event_type === "created") {
              eventType = "Listing";
            }
            tempLiveData.push({
              eventType,
              item: <Land image={asset.image_url} name={asset.name} />,
              tokenId: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {asset.token_id}
                </MDTypography>
              ),
              price: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {asset_event.total_price}
                </MDTypography>
              ),
              time: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {asset_event.event_timestamp}
                </MDTypography>
              ),
              popularity: <Popularity color="info" value={popularityValue} />,
              appraisalValue: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  100000
                </MDTypography>
              ),
            });
          }
          if (i === 0) {
            // console.log("i: ", i);
            setTimestamp(() => asset_event.event_timestamp);
          }
        }
        return tempLiveData;
      })
      .then((tempLiveData) => setLiveData(() => tempLiveData));
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   if (isLiveMode) {
    //     console.log("timestamp", timestamp);
    //     console.log("assets", liveData);
    //     fetchEventsData(timestamp);
    //   }
    // }, 1000);
    // return () => clearInterval(interval);
    fetchEventsData();
  }, []);

  return {
    columns: [
      { Header: "Event Type", accessor: "eventType", align: "left" },
      { Header: "Item + name", accessor: "item", align: "left" },
      { Header: "Token Id", accessor: "tokenId", align: "left" },
      { Header: "Price (ETH)", accessor: "price", align: "left" },
      { Header: "Time / Date", accessor: "time", align: "left" },
      { Header: "Popularity", accessor: "popularity", align: "left" },
      { Header: "Real time Appraisal value", accessor: "appraisalValue", align: "left" },
    ],

    rows: liveData,
  };

  // rows: [
  //   {
  //     eventType: "Sales",
  //     item: <Land image={team3} name="LAND (114, 180)" />,
  //     tokenId: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     price: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     time: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     popularity: <Popularity color="info" value={60} />,
  //     appraisalValue: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         100000
  //       </MDTypography>
  //     ),
  //   },
  //   {
  //     eventType: "Sales",
  //     item: <Land image={team3} name="LAND (200, 180)" />,
  //     tokenId: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     price: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     time: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     popularity: <Popularity color="info" value={40} />,
  //     appraisalValue: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         5000
  //       </MDTypography>
  //     ),
  //   },
  //   {
  //     eventType: "Listing",
  //     item: <Land image={team3} name="LAND (100, 180)" />,
  //     tokenId: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     price: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     time: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         working
  //       </MDTypography>
  //     ),
  //     popularity: <Popularity color="warning" value={10} />,
  //     appraisalValue: (
  //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //         2000
  //       </MDTypography>
  //     ),
  //   },
  // ],
}
