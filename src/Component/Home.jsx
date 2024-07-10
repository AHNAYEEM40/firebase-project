import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Home = () => {
    const authinfo =useContext(AuthContext)
    console.log(authinfo);
    return (
        <div>
            <h1 className="3xl">this is home {authinfo.name}</h1>
        </div>
    );
};

export default Home;