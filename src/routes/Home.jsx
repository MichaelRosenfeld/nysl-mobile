import Header from "../components/Header";
import Events from "../components/Events";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

const home = (
    <div className="Home">
        <Header />
        <NavBar />
        <Events />
        <Contact />
    </div>
);

function Home() {
    return (
        <>
            {home}
        </>
    );
}

export default Home;