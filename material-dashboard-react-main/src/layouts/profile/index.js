/* eslint-disable no-unused-vars */
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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Overview page components

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Images
import backgroundImage from "assets/images/bg-profile.jpeg";
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";

function Overview() {
  const { sales } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} mt={10} />
      <Grid container spacing={3} mb={10}>
        <Grid item xs={12} md={6} lg={6}>
          <MDBox mb={3}>
            <img
              src={backgroundImage}
              alt="img"
              width="90%"
              style={{ borderRadius: 5, marginLeft: 20 }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <MDBox mb={3} mx={3} p={3} sx={{ backgroundColor: "#EBEFF4", borderRadius: 1 }}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center">
              <MDTypography
                variant="h5"
                fontWeight="heavy"
                color="black"
                textTransform="capitalize"
              >
                Land (102, 100)
              </MDTypography>
              <MDTypography color="black" variant="h5" fontWeight="heavy">
                2 ETH
              </MDTypography>
            </MDBox>
            <MDBox display="flex" justifyContent="space-between" alignItems="center">
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                textTransform="capitalize"
              >
                10013
              </MDTypography>
              <MDTypography color="black" variant="button" fontWeight="regular">
                Current Price
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox mb={3} mx={3} p={3} sx={{ backgroundColor: "#EBEFF4", borderRadius: 1 }}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center">
              <MDTypography
                variant="h5"
                fontWeight="heavy"
                color="success"
                textTransform="capitalize"
              >
                Underpriced
              </MDTypography>
              <MDTypography color="success" variant="h5" fontWeight="heavy">
                1.5 ETH
              </MDTypography>
            </MDBox>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                textTransform="capitalize"
              >
                {" "}
              </MDTypography>
              <MDTypography color="black" variant="button" fontWeight="regular">
                Appraisal Value
              </MDTypography>
            </MDBox>
            <MDTypography color="black" variant="button" fontWeight="regular">
              This asset is trading at <b>34%</b> below its appraisal value at <b>1.2 ETH</b>
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <MDBox mb={3}>
            <ReportsLineChart
              color="success"
              title="Land Appraisal value history"
              description=""
              date="updated 4 min ago"
              chart={sales}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <MDBox mb={3}>
            <ReportsLineChart
              color="warning"
              title="Neighbourhood (within 10 radius historic sales)"
              description=""
              date="updated 1 day ago"
              chart={sales}
            />
          </MDBox>
        </Grid>
      </Grid>
      {/* <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
          </Grid>
        </Grid>
      </MDBox> */}
      <MDBox pt={2} px={2} lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium" color="text">
          Nearby land
        </MDTypography>
        {/* <MDBox mb={1}>
          <MDTypography variant="button" color="text">
            Architects design houses
          </MDTypography>
        </MDBox> */}
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={homeDecor1}
              label="Land (110, 40)"
              title="modern"
              tokenId="203400"
              appraisalValue={2.5}
              currentValue={1.5}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={homeDecor2}
              label="Land (90, 10)"
              title="scandinavian"
              // description="Music is something that everyone has their own specific opinion about."
              // action={{
              //   type: "internal",
              //   route: "/pages/profile/profile-overview",
              //   color: "info",
              //   label: "view project",
              // }}
              // authors={[
              //   { image: team3, name: "Nick Daniel" },
              //   { image: team4, name: "Peterson" },
              //   { image: team1, name: "Elena Morison" },
              //   { image: team2, name: "Ryan Milly" },
              // ]}
              tokenId="763211"
              appraisalValue={0.9}
              currentValue={1.5}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={homeDecor3}
              label="Land (100,8)"
              title="minimalist"
              tokenId="54364"
              appraisalValue={0.5}
              currentValue={0.5}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={homeDecor4}
              label="Land (100,11)"
              title="gothic"
              tokenId="10231"
              appraisalValue={4}
              currentValue={5}
            />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
