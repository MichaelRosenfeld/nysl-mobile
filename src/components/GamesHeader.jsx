const gamesHeader = (
    <div className="GamesHeader">
        <h3>Fall Schedule</h3>
        <p id="SaturdayWarning">* All games take place on Saturday</p>
    </div>
);

function GamesHeader() {
    return(
        <>
        {gamesHeader}
        </>
    );
}

export default GamesHeader;