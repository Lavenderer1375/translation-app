import { useState } from "react";
import { TranslationProvider } from "./context/TranslationProvider";
import Dashboard from "./components/Dashboard";
import PublicView from "./components/PublicView";

function App() {
  const [view, setView] = useState("pubic");

  return (
    <TranslationProvider>
      <div className="flex flex-col justify-center items-center bg-gray-100 p-4 border-4 border-red-500 min-h-screen">
        <div className="flex justify-center mb-4">
          <button onClick={() => setView("public")} className="mx-2 btn">
            Public View
          </button>
          <button onClick={() => setView("dashboard")} className="mx-2 btn">
            Dashboard
          </button>
        </div>
        {view === "public" ? <PublicView /> : <Dashboard />}
      </div>
    </TranslationProvider>
  );
}

export default App;
