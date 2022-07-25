/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
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
import React, { useEffect, useState } from "react";
import MDProgress from "components/MDProgress";
import { Button } from "@mui/material";
import team3 from "assets/images/team-3.jpg";

// Images

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import staticTableData from "layouts/tables/data/staticTableData";
// import liveTableData from "layouts/tables/data/liveTableData";

function Land({ image, name }) {
  return (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <img src={image} alt={name} width={50} style={{ borderRadius: 5 }} />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

function Popularity({ color, value }) {
  return (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );
}

export function LiveTable() {
  // const { columns: pColumns, rows: pRows } = liveTableData();

  // const Project = ({ image, name }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" variant="rounded" />
  //     <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
  //       {name}
  //     </MDTypography>
  //   </MDBox>
  // );

  const [isLiveMode, setIsLiveMode] = useState(true);
  const [timestamp, setTimestamp] = useState(-1);
  const [liveData, setLiveData] = useState([]);
  const [seconds, setSeconds] = useState(0);

  function randomDoubleFromInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  const fetchEventsData = async (ts) => {
    // eslint-disable-next-line global-require
    const axios = require("axios");
    const tempLiveData = [];
    let tsTemp = -1;

    await axios
      .get(
        ts === -1
          ? "https://us-central1-jtlabs-63b31.cloudfunctions.net/event?collection=sandbox"
          : `https://us-central1-jtlabs-63b31.cloudfunctions.net/event?collection=sandbox&occured_after=${ts}`
      )
      .then((res) => {
        // const tempLiveData = liveData;
        const asset_events = res.data.message;
        for (let i = 0; i < asset_events.length; i++) {
          const asset_event = asset_events[i];
          const { asset } = asset_event;
          const popularityValue = Math.floor(Math.random() * 100) + 1;
          let color = "info";
          if (popularityValue > 90) {
            color = "success";
          } else if (popularityValue > 60) {
            color = "warning";
          }
          const appraisalValue = 2 * randomDoubleFromInterval(0.8, 1.25);
          if (asset != null) {
            let eventType = "Bid";
            if (asset.event_type === "successful") {
              eventType = "Sale";
            } else if (asset.event_type === "created") {
              eventType = "Listing";
            }
            const digits = 1000000000000000000;
            let price = asset_event.starting_price / digits;
            if (asset.event_type === "successful") {
              price = asset_event.total_price / digits;
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
                  {price.toString().substring(0, 4)}
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
              popularity: <Popularity color={color} value={popularityValue} />,
              appraisalValue: (
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  {appraisalValue.toString().substring(0, 4)}
                </MDTypography>
              ),
            });
          }
          if (i === 0) {
            tsTemp = asset_event.event_timestamp;
            // console.log("i: ", i);
            // setTimestamp(() => asset_event.event_timestamp);
          }
        }
        // setLiveData(() => tempLiveData);
      })
      .then(() => setTimestamp(tsTemp))
      .then(() => setLiveData((current) => [...tempLiveData, ...current]));
  };

  useEffect(() => {
    fetchEventsData(-1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchEventsData(liveData[0].event_timestamp);
    }, 10000);
    return () => clearInterval(interval);
  }, [liveData]);

  const columns = [
    { Header: "Event Type", accessor: "eventType", align: "left" },
    { Header: "Item + name", accessor: "item", align: "left" },
    { Header: "Token Id", accessor: "tokenId", align: "left" },
    { Header: "Price (ETH)", accessor: "price", align: "left" },
    { Header: "Time / Date", accessor: "time", align: "left" },
    { Header: "Popularity", accessor: "popularity", align: "left" },
    { Header: "Real time Appraisal", accessor: "appraisalValue", align: "left" },
  ];

  const rows = [
    {
      eventType: "Sales",
      item: <Land image={team3} name="LAND (114, 180)" />,
      tokenId: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      popularity: <Popularity color="info" value={60} />,
      appraisalValue: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          100000
        </MDTypography>
      ),
    },
    {
      eventType: "Sales",
      item: <Land image={team3} name="LAND (200, 180)" />,
      tokenId: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      popularity: <Popularity color="info" value={40} />,
      appraisalValue: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          5000
        </MDTypography>
      ),
    },
    {
      eventType: "Listing",
      item: <Land image={team3} name="LAND (100, 180)" />,
      tokenId: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      price: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      time: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      popularity: <Popularity color="warning" value={10} />,
      appraisalValue: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          2000
        </MDTypography>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* <Button variant="contained" onClick={onChangeMode}>
              {seconds}
            </Button> */}
            {/* <Button variant="contained" onClick={onChangeMode}>
              {timestamp}
            </Button> */}
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox> */}
              <MDBox pt={3}>
                {liveData.length > 0 && (
                  <DataTable
                    table={{ columns, rows: liveData }}
                    isSorted
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export function StaticTable() {
  const { columns, rows } = staticTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox> */}
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  entriesPerPage={false}
                  showTotalEntries={false}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
