import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    render() {
        const myInfor = ["ab", "c", "d"];
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfo name="Hoi Dan IT" age="30" />
                <hr />
                <DisplayInfo name={"Marcus"} age={33} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;
