import { useState } from "react";
import Left from "./components/left";
import Right from "./components/right";
import { TComplete } from "./types/ui";
import "./App.css";

function App() {
  const [page, setPage] = useState<TComplete[]>([]);

  return (
    <>
      <div className="w-screen h-screen grid grid-cols-12 divide-x-4">
        <div className="col-span-4">
          <Left setPage={setPage} />
        </div>
        <div className="col-span-4">
          <Right page={page} />
        </div>
      </div>
    </>
  );
}

export default App;
