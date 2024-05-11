import { Card } from "react-bootstrap";

function HeaderFeatureCard({ feature }) {
    const { title, body } = feature;
    return ( 
        <Card>
            <Card.Body>
                <h3>{title}</h3>
                <p>{body}</p>
            </Card.Body>
        </Card>
     );
}

export default HeaderFeatureCard;