import useBearStore from "@/libs/store/bearStore";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const bears = useBearStore(state => state.bears);
  const increasePopulation = useBearStore(state => state.increasePopulation);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increasePopulation()}>count is {bears}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
