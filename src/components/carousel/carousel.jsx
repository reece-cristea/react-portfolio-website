import Carousel from 'react-bootstrap/Carousel';
const carousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/champ3.png' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/wordcloudtech.png' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/cce.png' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/champlain01.jpg' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/japan.jpg' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/champlain02.jpg' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{ maxWidth: "750px" }}>
                <div class="border rounded border-4 border-dark">
                    <img src='https://rcportfolioimages.s3.us-west-1.amazonaws.com/spotify.png' style={{ height: "auto", width: "100%", maxWidth: "750px" }}></img>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default carousel;