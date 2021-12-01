import Header from "../components/Header";
import Events from "../components/Events";
import Contact from "../components/Contact";

const home = (
    <div className="Home">
        <Header />
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