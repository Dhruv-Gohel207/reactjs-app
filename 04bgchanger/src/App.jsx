import { useState } from "react"


function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center px-2 inset-x-0 shadow-2xl shadow-slate-900" >
        <div className="fixed flex flex-wrap justify-center gap-2 rounded-3xl bg-white px-3 py-2">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor("Green")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}>Green</button>

          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}>SkyBlue</button>

          <button
            onClick={() => setColor("violet")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Violet" }}>Violet</button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}>Brown</button>

          <button
            onClick={() => setColor("Gold")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Gold" }}>Gold</button>

          <button
            onClick={() => setColor("Black")}
            className="outline-none px-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
