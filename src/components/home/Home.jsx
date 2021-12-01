import Header from "./Header";
import Events from "./Events";
import Contact from "./Contact";

const home =
    <div className="home">
        <Header/>
        <Events/>
        <Contact/
    </div>;

function Home() {
    return (
        <>
            {home}
        </>
    );
}

export default Home;