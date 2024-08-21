import "../ArrayOfObject/PointsTable.css";

export function ICCPointsTable()
{
    let data=[
               {pos:1,team:"India",played:9,won:6,lost:2,draw:1,ded:2,points:74,pct:68.52,flag:"IndianFlag.png"},
               {pos:2,team:"Australia",played:12,won:8,lost:3,draw:1,ded:2,points:90,pct:62.50,flag:"AusFlag.png"},
               {pos:3,team:"New Zealand",played:6,won:3,lost:3,draw:0,ded:2,points:96,pct:50.00,flag:"NZFlag.png"},
               {pos:4,team:"Sri Lanka",played:4,won:2,lost:2,draw:0,ded:2,points:24,pct:64.52,flag:"SLFlag.png"},
               {pos:5,team:"South Africa",played:6,won:2,lost:3,draw:1,ded:2,points:28,pct:45.76,flag:"SAFlag.png"},
               {pos:6,team:"Pakistan",played:5,won:2,lost:3,draw:0,ded:2,points:22,pct:34.19,flag:"PakFlag.png"},
               {pos:7,team:"England",played:13,won:6,lost:6,draw:1,ded:2,points:57,pct:65.43,flag:"EnFlag.png"},
               {pos:8,team:"Bangladesh",played:4,won:1,lost:3,draw:0,ded:2,points:12,pct:25.34,flag:"BanFlag.png"},
               {pos:9,team:"West Indies",played:9,won:1,lost:6,draw:2,ded:2,points:20,pct:17.23,flag:"WIFlag.png"}

            ]
    return(
        <>
            <div className="main-div position-relative">
                <h2 className="m-3 p-2 text-dark h1 heading">Standings</h2>
                <table className="table table-hover m-3 border border-1">
                    <thead className="bg-dark text-light">
                        <tr className="text-start">
                            <th className="bg-black text-light text-center">POS</th>
                            <th className="bg-black text-light">TEAM</th>
                            <th className="bg-black text-light">PLAYED</th>
                            <th className="bg-black text-light">WON</th>
                            <th className="bg-black text-light">LOST</th>
                            <th className="bg-black text-light">DRAW</th>
                            <th className="bg-black text-light">DED</th>
                            <th className="bg-black text-light">POINTS</th>
                            <th className="bg-black text-light">PCT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item=>
                                <tr key={item.team}>
                                    <td className="text-center">{item.pos}</td>
                                    <td className="teamName"><img src={item.flag} width={30}/> {item.team.toLocaleUpperCase()}</td>
                                    <td className="ps-3">{item.played}</td>
                                    <td className="ps-3">{item.won}</td>
                                    <td className="ps-3">{item.lost}</td>
                                    <td className="ps-3">{item.draw}</td>
                                    <td className="ps-3">{item.ded}</td>
                                    <td className="ps-3">{item.points}</td>
                                    <td className="ps-3">{item.pct}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}