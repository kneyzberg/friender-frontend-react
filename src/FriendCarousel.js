import React, { useState } from "react";
import "./Carousel.css";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import FriendApplicant from "./FriendApplicant";

function FriendCarousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => setCardIdx(c => c+1);
  const goBack = () => setCardIdx(c => c-1);

  const leftVisibility = cardIdx === 0 ? 'hidden' : '';
  const rightVisibility = cardIdx === total-1 ? 'hidden' : '';

  return (
    <Card>
      <CardBody>
        <div className="Carousel">
          <h1>{props.title}</h1>
          <div className="Carousel-main">
            <i
              className={`fas fa-chevron-circle-left fa-2x ${leftVisibility}`}
              onClick={goBack}
            />
            <FriendApplicant
              caption={card.caption}
              src={card.src}
              currNum={cardIdx + 1}
              totalNum={total}
            />
            <i
              className={`fas fa-chevron-circle-right fa-2x ${rightVisibility}`}
              onClick={goForward}
            />
            {/* Buttons to either ignore or like user!  */}
          </div>
        </div>
      </CardBody>
    </Card>

    
  );
}

FriendCarousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default  FriendCarousel;
