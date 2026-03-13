import { useState } from "react"

export default function Batesman () {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes]= useState(0)

    const handleSingles = () =>{
        const updatedRuns = runs + 1
        setRuns(updatedRuns);
    }

    const handleSixes = () => {
        const updatedRuns = runs + 6
        const updatedSixes = sixes + 1
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    const handleFours = () => {
        const updatedFours = runs + 4
        setRuns(updatedFours);
    }

    return (
        <div>
            <h3>Player: Bangladeshi Batsman</h3>

            <p><small>Sixes: {sixes}</small></p>

            {
                runs >= 100 && <p>Congratulations! You scored your maiden century.</p>
            }

            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFours}>Fours</button>
            <button onClick={handleSixes}>Sixes</button>
        </div>
    )
}