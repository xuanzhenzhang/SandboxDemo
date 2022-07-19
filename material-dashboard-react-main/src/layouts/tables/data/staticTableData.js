/* eslint-disable no-unused-vars */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDProgress from "components/MDProgress";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import React, { useEffect, useState } from "react";
import fakeData from "./fakeData.json";

export default function data() {
  const Land = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <img src={image} alt={name} width={50} style={{ borderRadius: 5 }} />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

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

  const [timestamp, setTimestamp] = useState(-1);
  const [staticData, setStaticData] = useState([]);

  function randomDoubleFromInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  const processedFakeData = [];
  fakeData.data.forEach((dat) => {
    let appraisalValue = dat.lastPrice * randomDoubleFromInterval(0.8, 1.25);
    if (appraisalValue === 0) {
      appraisalValue = 2 * randomDoubleFromInterval(0.8, 1.25);
    }
    let currentPrice = dat.lastPrice * randomDoubleFromInterval(0.9, 1.11);
    if (currentPrice === 0 && Math.random() > 0.5) {
      currentPrice = 2 * randomDoubleFromInterval(0.9, 1.11);
    }
    processedFakeData.push({
      item: <Land image={dat.itemImg} name={dat.item} />,
      tokenId: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {dat.tokenId}
        </MDTypography>
      ),
      currentPrice: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {currentPrice === 0 ? "Not Listed" : currentPrice.toString().substring(0, 4)}
        </MDTypography>
      ),
      salePrice: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {dat.lastPrice === 0 ? "No sales" : dat.lastPrice}
        </MDTypography>
      ),
      saleDate: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {dat.lastSale}
        </MDTypography>
      ),
      // popularity: <Popularity color="warning" value={30} />,
      appraisalValue: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {appraisalValue}
        </MDTypography>
      ),
      isUndervalued: appraisalValue <= currentPrice ? "overvalued" : "undervalued",
    });
  });

  // const fetchStaticEventsData = async () => {
  //   // eslint-disable-next-line global-require
  //   const axios = require("axios");
  //   const digits = 1000000000000000000;
  //   await axios
  //     .get(
  //       timestamp < 0
  //         ? "https://us-central1-jtlabs-63b31.cloudfunctions.net/event?event_type=created&collection=sandbox"
  //         : `https://us-central1-jtlabs-63b31.cloudfunctions.net/event?event_type=created&collection=sandbox&occured_after=${timestamp}`
  //     )
  //     .then((res) => {
  //       const tempStaticData = [];
  //       const asset_events = res.data.message;
  //       for (let i = 0; i < asset_events.length; i++) {
  //         const asset_event = asset_events[i];
  //         const { asset } = asset_event;
  //         if (asset != null) {
  //           tempStaticData.push({
  //             item: <Land image={asset.image_url} name={asset.name} />,
  //             tokenId: (
  //               <MDTypography
  //                 component="a"
  //                 href="#"
  //                 variant="caption"
  //                 color="text"
  //                 fontWeight="medium"
  //               >
  //                 {asset.token_id}
  //               </MDTypography>
  //             ),
  //             currentPrice: (
  //               <MDTypography
  //                 component="a"
  //                 href="#"
  //                 variant="caption"
  //                 color="text"
  //                 fontWeight="medium"
  //               >
  //                 {asset_event.starting_price / digits}
  //               </MDTypography>
  //             ),
  //             salePrice: (
  //               <MDTypography
  //                 component="a"
  //                 href="#"
  //                 variant="caption"
  //                 color="text"
  //                 fontWeight="medium"
  //               >
  //                 {asset_event.total_price}
  //               </MDTypography>
  //             ),
  //             saleDate: (
  //               <MDTypography
  //                 component="a"
  //                 href="#"
  //                 variant="caption"
  //                 color="text"
  //                 fontWeight="medium"
  //               >
  //                 {asset_event.listing_time}
  //               </MDTypography>
  //             ),
  //             // popularity: <Popularity color="warning" value={30} />,
  //             appraisalValue: (
  //               <MDTypography
  //                 component="a"
  //                 href="#"
  //                 variant="caption"
  //                 color="text"
  //                 fontWeight="medium"
  //               >
  //                 100000
  //               </MDTypography>
  //             ),
  //             isUndervalued: "Undervalued",
  //           });
  //         }
  //         if (i === 0) {
  //           // console.log("i: ", i);
  //           // console.log("timestamp ", asset_event.event_timestamp);
  //           // setTimestamp(() => asset_event.event_timestamp);
  //         }
  //       }
  //       return tempStaticData;
  //     })
  //     .then((tempStaticData) => setStaticData(() => tempStaticData));
  // };

  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   //   if (isLiveMode) {
  //   //     console.log("timestamp", timestamp);
  //   //     console.log("assets", liveData);
  //   //     fetchEventsData(timestamp);
  //   //   }
  //   // }, 1000);
  //   // return () => clearInterval(interval);
  //   fetchStaticEventsData();
  // }, []);

  // const Author = ({ image, name, email }) => (
  //   <MDBox display="flex" alignItems="center" lineHeight={1}>
  //     <MDAvatar src={image} name={name} size="sm" />
  //     <MDBox ml={2} lineHeight={1}>
  //       <MDTypography display="block" variant="button" fontWeight="medium">
  //         {name}
  //       </MDTypography>
  //       <MDTypography variant="caption">{email}</MDTypography>
  //     </MDBox>
  //   </MDBox>
  // );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "Image & Name", accessor: "item", align: "left" },
      { Header: "Token Id", accessor: "tokenId", align: "left" },
      { Header: "Current Price (ETH)", accessor: "currentPrice", align: "left" },
      { Header: "Last sale (ETH)", accessor: "salePrice", align: "left" },
      { Header: "Last sale date", accessor: "saleDate", align: "left" },
      // { Header: "Popularity", accessor: "popularity", align: "left" },
      { Header: "Real time Appraisal value", accessor: "appraisalValue", align: "left" },
      { Header: "Undervalued / overvalued", accessor: "isUndervalued", align: "left" },
    ],

    rows: processedFakeData,

    // rows: [
    //   {
    //     item: <Land image={team2} name="LAND (114, 180)" />,
    //     tokenId: "1",
    //     currentPrice: 0.3,
    //     salePrice: 0.23,
    //     saleDate: "2022-07-15",
    //     popularity: <Popularity color="warning" value={30} />,
    //     appraisalValue: 0.4,
    //     isUndervalued: "Undervalued",
    //   },
    //   {
    //     item: <Land image={team2} name="LAND (200, 180)" />,
    //     tokenId: "1",
    //     currentPrice: 0.73,
    //     salePrice: 0.63,
    //     saleDate: "2022-07-15",
    //     popularity: <Popularity color="success" value={10} />,
    //     appraisalValue: 0.5,
    //     isUndervalued: "Overvalued",
    //   },
    //   {
    //     item: <Land image={team2} name="LAND (100, 180)" />,
    //     tokenId: "1",
    //     currentPrice: 0.13,
    //     salePrice: 0.13,
    //     saleDate: "2022-07-15",
    //     popularity: <Popularity color="info" value={70} />,
    //     appraisalValue: 0.2,
    //     isUndervalued: "Undervalued",
    //   },
    // ],
  };

  // return {
  //   columns: [
  //     { Header: "author", accessor: "author", width: "45%", align: "left" },
  //     { Header: "function", accessor: "function", align: "left" },
  //     { Header: "status", accessor: "status", align: "center" },
  //     { Header: "employed", accessor: "employed", align: "center" },
  //     { Header: "action", accessor: "action", align: "center" },
  //   ],

  //   rows: [
  //     {
  //       author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
  //       function: <Job title="Manager" description="Organization" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           23/04/18
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //     {
  //       author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
  //       function: <Job title="Programator" description="Developer" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           11/01/19
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //     {
  //       author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
  //       function: <Job title="Executive" description="Projects" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           19/09/17
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //     {
  //       author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
  //       function: <Job title="Programator" description="Developer" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           24/12/08
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //     {
  //       author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
  //       function: <Job title="Manager" description="Executive" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           04/10/21
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //     {
  //       author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
  //       function: <Job title="Programator" description="Developer" />,
  //       status: (
  //         <MDBox ml={-1}>
  //           <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
  //         </MDBox>
  //       ),
  //       employed: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           14/09/20
  //         </MDTypography>
  //       ),
  //       action: (
  //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
  //           Edit
  //         </MDTypography>
  //       ),
  //     },
  //   ],
  // };
}
