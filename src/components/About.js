import React from "react";
import { Link } from "react-router-dom";
//Taking card from the bootstrap and display it here for 15 times 

function Card() {
    return (
        <div className="card d-flex p-2 my-2" style={{ width: "18rem" }}>
            <img
                src="https://images.pexels.com/photos/17338597/pexels-photo-17338597/free-photo-of-black-bentley-continental.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                    Go somewhere
                </Link>
            </div>
        </div>
    );
}

function About() {
    // Create an array to hold 15 instances of the Card component
    const cards = Array.from({ length: 15 }, (_, index) => <Card key={index} />);

    return <div data-testid="about-content" className="card-container d-flex justify-content-around flex-wrap ">{cards}</div>;
}

export default About;
