import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk about what I have Done</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Chat"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Users"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Fingerprint"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
        <br />
        <br />
         <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a
                  natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
            </GridItem>
          </GridContainer>
        </div>
       </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
