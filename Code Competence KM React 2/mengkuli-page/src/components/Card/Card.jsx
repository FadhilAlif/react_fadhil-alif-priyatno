import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AboutCard = ({ imageUrl, title }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-warning">
          <b>{title}</b>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button href="" variant="warning">
          Selengkapnya
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
