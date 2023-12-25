import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Banner";
import OurMembers from "./OurMembers";


const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <OurMembers></OurMembers>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;