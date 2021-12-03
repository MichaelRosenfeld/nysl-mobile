const gamesHeader = (
    <div className="GamesHeader">
        <h3>Fall Schedule</h3>
        <p id="SaturdayWarning">* All games take place on Saturday</p>
    </div>
);

const firstTable = (
    <table>
        <tbody>
        <tr>
            <th className="FirstHeader">SEPTEMBER</th>
            <th>Teams</th>
            <th>Location</th>
            <th>Times</th>
        </tr>
        <tr>
            <td className="FirstId">9/01</td>
            <td>U1 and U4</td>
            <td>AJ Katzenmaier</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U3 and U2</td>
            <td>Greenbay</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">9/08</td>
            <td>U5 and U6</td>
            <td>Howard A Yeager</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U6 and U1</td>
            <td>Marjorie P Hart</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">9/15</td>
            <td>U2 and U4</td>
            <td>North</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U3 and U5</td>
            <td>AJ Katzenmaier</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">9/22</td>
            <td>U1 and U3</td>
            <td>South</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U2 and U6</td>
            <td>Howard A Yeager</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">9/29</td>
            <td>U4 and U5</td>
            <td>Greenbay</td>
            <td>9:30 a.m.</td>
        </tr>
        </tbody>
    </table>
);

const secondTable = (
    <table>
        <tbody>
        <tr>
            <th className="FirstHeader">OCTOBER</th>
            <th>Teams</th>
            <th>Location</th>
            <th>Times</th>
        </tr>
        <tr>
            <td className="FirstId">10/06</td>
            <td>U2 and U5</td>
            <td>Marjorie P Hart</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U1 and U6</td>
            <td>South</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">10/13</td>
            <td>U3 and U4</td>
            <td>Howard A Yeager</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U5 and U1</td>
            <td>Greenbay</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">10/20</td>
            <td>U6 and U3</td>
            <td>North</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U2 and U4</td>
            <td>Marjorie P Hart</td>
            <td>1:00 p.m.</td>
        </tr>
        <tr>
            <td className="FirstId">10/27</td>
            <td>U3 and U1</td>
            <td>AJ Katzenmaier</td>
            <td>9:30 a.m.</td>
        </tr>
        <tr>
            <td className="FirstId"></td>
            <td>U5 and U6</td>
            <td>Howard A Yeager</td>
            <td>1:00 p.m.</td>
        </tr>
        </tbody>
    </table>
);

const gameSchedule = (
    <>
        {gamesHeader}
        {firstTable}
        {secondTable}
    </>
);

function Games() {
    return (
      <>
          {gameSchedule}
      </>
    );
}