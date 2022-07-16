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
      { Header: "Popularity", accessor: "popularity", align: "left" },
      { Header: "Real time Appraisal value", accessor: "appraisalValue", align: "left" },
      { Header: "Undervalued / overvalued", accessor: "isUndervalued", align: "left" },
    ],

    rows: [
      {
        item: <Land image={team2} name="LAND (114, 180)" />,
        tokenId: "1",
        currentPrice: 0.3,
        salePrice: 0.23,
        saleDate: "2022-07-15",
        popularity: <Popularity color="warning" value={30} />,
        appraisalValue: 0.4,
        isUndervalued: "Undervalued",
      },
      {
        item: <Land image={team2} name="LAND (200, 180)" />,
        tokenId: "1",
        currentPrice: 0.73,
        salePrice: 0.63,
        saleDate: "2022-07-15",
        popularity: <Popularity color="success" value={10} />,
        appraisalValue: 0.5,
        isUndervalued: "Overvalued",
      },
      {
        item: <Land image={team2} name="LAND (100, 180)" />,
        tokenId: "1",
        currentPrice: 0.13,
        salePrice: 0.13,
        saleDate: "2022-07-15",
        popularity: <Popularity color="info" value={70} />,
        appraisalValue: 0.2,
        isUndervalued: "Undervalued",
      },
    ],
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
