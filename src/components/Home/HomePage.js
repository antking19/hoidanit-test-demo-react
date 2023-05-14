import HomeVideo from "../../assets/video-1920.mp4";
import { useSelector } from "react-redux"; //hook lấy ra state của redux

const HomePage = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);

    console.log("account: ", account, "isAuthenticated: ", isAuthenticated);

    return (
        <div>
            <video autoPlay muted loop>
                <source src={HomeVideo} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title1">There's a better way to ask</div>
                <div className="title2">
                    You don't want to make a boring form. And your audience
                    won't answer one. Create a typeform instead—and make
                    everyone happy.
                </div>
                <div className="title3">
                    <button className="btn btn-dark btn-lg">
                        Get started - it's free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
