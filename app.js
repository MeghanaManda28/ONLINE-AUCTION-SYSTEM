import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/auctions")
            .then(res => setAuctions(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Online Auction Platform</h1>
            {auctions.map(auction => (
                <div key={auction._id}>
                    <h3>{auction.title}</h3>
                    <p>{auction.description}</p>
                    <p>Starting Price: ${auction.startingPrice}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
