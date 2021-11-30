import Header from "./Header";
import Events from "./Events";
import Contact from "./Contact";

function Home() {
    return (
        <div className="home">
            <Header />
            <Events />
            <Contact />
       </div>
    );
}

export default Home;