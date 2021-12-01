const staticEvents= (
    <div className="Events">
        <p className="Date">August 4</p>
        <p className="Description">NYSL Fundraiser</p>
        <p className="Date">August 16</p>
        <p className="Description">Season Kick-off: Meet the Teams</p>
        <p className="Date">September 1</p>
        <p className="Description">First Game of the Season (Check Game Schedule for details)</p>;
    </div>
);

function Events() {
    return (
        <>
            {staticEvents}
        </>
    );
}

export default Events;