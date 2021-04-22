import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import UserContext from "./UserContext";
import {useContext} from "react";

function Home() {

  const {currentUser} = useContext(UserContext);
  console.log(currentUser);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            {!currentUser && <h3 className="font-weight-bold">
              Welcome Back to Friender!
            </h3>
            }
            {currentUser && <h3 className="font-weight-bold">
              Welcome Back {currentUser.username}!
            </h3>
            }
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  )
}

export default Home;