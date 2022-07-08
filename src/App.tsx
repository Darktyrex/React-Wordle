import Instructions from "./components/Instructions";
import Score from "./components/Score";
import { useAppSelector } from "./hooks/useAppSelector";
import Home from "./pages/Home";


const App = ()=>{
  const {darkMode, score, instructions} =  useAppSelector(state => state.ui);
  return (
    <div className={`${darkMode && "dark"} w-full min-h-screen font-roboto bg-white-100 dark:bg-dark-100`}>
      <Home />
      {instructions && <Instructions />}
      {score && <Score />}
    </div>
  );
}

export default App;
