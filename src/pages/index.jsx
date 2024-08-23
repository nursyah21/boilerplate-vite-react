import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_APP}</title>
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Link to="about">about</Link>
      {/* <a href="/about">about</a> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
