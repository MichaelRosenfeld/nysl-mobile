import Header from "../components/Header";
import NavBar from "../components/NavBar";
import GamesHeader from "../components/GamesHeader";
import FirstTable from "../components/FirstTable";
import SecondTable from "../components/SecondTable";

const games = (
  <div className="Games">
      <Header />
      <NavBar />
      <GamesHeader />
      <FirstTable />
      <SecondTable />
  </div>
);

function Games() {
    return (
      <>
          {games}
      </>
    );
}

export default Games;