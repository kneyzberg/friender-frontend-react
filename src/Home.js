import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";

function Home() {


  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome Back to Friender!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  )
}

export default Home;