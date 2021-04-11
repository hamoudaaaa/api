import React from "react";
import { Card } from "react-bootstrap";

function UserCard({ user }) {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title> id:{user.id}</Card.Title>
                    <Card.Title> Name:{user.name}</Card.Title>
                    <Card.Title> UserName:{user.username}</Card.Title>
                    {/* <Card.Title>{user.adress.street}</Card.Title> */}
                    <h6>Street : {user.address.street} </h6>
                    <h6>Suite : {user.address.suite} </h6>
                    <h6>City : {user.address.city} </h6>
                    <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserCard;
