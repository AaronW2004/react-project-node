const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(_dirName + "/index.html");
});

app.get("/api/gameschedule", (req, res) => {
    const gameschedule = [
        {
            team: "Atlanta Falcons",
            opponent: "New Orleans Saints",
            date: "October 20, 2024",
            time: "1:00 PM",
            place: "Mercedes-Benz Stadium",
            teamRecord: "5-3",
            opponentRecord: "4-4"
        },
        {
            team: "Atlanta Falcons",
            opponent: "Tampa Bay Buccaneers",
            date: "November 3, 2024",
            time: "4:25 PM",
            place: "Raymond James Stadium",
            teamRecord: "5-3",
            opponentRecord: "3-5"
        },
        {
            team: "Atlanta Braves",
            opponent: "Los Angeles Dodgers",
            date: "October 22, 2024",
            time: "7:00 PM",
            place: "Truist Park",
            teamRecord: "92-70",
            opponentRecord: "95-67"
        },
        {
            team: "Atlanta Braves",
            opponent: "Philadelphia Phillies",
            date: "October 24, 2024",
            time: "7:00 PM",
            place: "Citizens Bank Park",
            teamRecord: "92-70",
            opponentRecord: "90-72"
        },
        {
            team: "Atlanta Hawks",
            opponent: "Boston Celtics",
            date: "October 25, 2024",
            time: "7:30 PM",
            place: "State Farm Arena",
            teamRecord: "2-1",
            opponentRecord: "1-2"
        },
        {
            team: "Atlanta Hawks",
            opponent: "Miami Heat",
            date: "October 28, 2024",
            time: "8:00 PM",
            place: "FTX Arena",
            teamRecord: "2-1",
            opponentRecord: "3-0"
        },
        {
            team: "Atlanta United FC",
            opponent: "New York City FC",
            date: "October 28, 2024",
            time: "8:00 PM",
            place: "Mercedes-Benz Stadium",
            teamRecord: "16-10-8",
            opponentRecord: "15-11-7"
        },
        {
            team: "Atlanta United FC",
            opponent: "Orlando City SC",
            date: "November 1, 2024",
            time: "7:30 PM",
            place: "Exploria Stadium",
            teamRecord: "16-10-8",
            opponentRecord: "17-9-8"
        },
    ];
    res.send(gameschedule);
});

app.listen(3001,3000, () => {
    console.log("Listening");
});

