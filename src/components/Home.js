import React from "react";


//displaying carousel in the home page
function Home() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mx-auto" data-ride="carousel" style={{ width: "80vw", height: "60vh" }}>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ width: "80vw", height: "60vh" }}>
                <div className="carousel-item active">
                    <img className="d-block w-100" style={{ width: "80vw", height: "60vh" }} src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" style={{ width: "80vw", height: "60vh" }} src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" style={{ width: "80vw", height: "60vh" }} src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Home;
