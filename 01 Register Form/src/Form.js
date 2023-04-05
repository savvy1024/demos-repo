import "./App.css";
import { useState, useEffect, useRef } from "react";

async function fetchData(setData) {
  const res = await fetch("http://localhost:3004/posts/1");
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch("http://localhost:3004/posts/1", {
    method: "PUT",
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

function App() {
  const [data, setData] = useState([]);
  const setDataSituation = useRef(false);

  useEffect(() => {
    fetchData(setData);
    // fetch("http://localhost:3000/posts")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (!setDataSituation.current) {
      return;
    }
    fetchSetData(data);
  }, [data]);

  return (
    <div className='App'>
      <div className=''>
        <h1>Hello World</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.note}</h2>
            <p>{post.date}</p>
            <p>{post.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// "data":[
//   {
//     "id": "001",
//     "note": "First note",
//     "date": "20203-12-12",
//     "time": "12:00"
// }

// ]
