import HomeVideo from "../../assets/video-1920.mp4";

const HomePage = (props) => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={HomeVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default HomePage;
