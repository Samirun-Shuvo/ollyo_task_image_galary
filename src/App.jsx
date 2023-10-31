import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("/public/data.json").then((res) => setData(res.data.gallery));
  }, []);
  return (
    <>
      <div className="bg-gray-100 h-screen flex flex-col">
        <header className="bg-blue-500 text-white py-4">
          <div className="container flex justify-start p-4">
            <h1 className="text-2xl font-bold">Gallery</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
            {data.map((item) => {
              console.log(item);
              return (
                <div key={item.id} className="border p-4">
                  <img src={item.image} alt={item.title} />
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
