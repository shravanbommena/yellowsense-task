import { Switch, Route, Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import Jobs from "./components/Jobs";
import Job from "./components/Job";

function App() {
  return (
    <div className="relative container max-w-md bg-slate-800 min-h-screen max-h-screen mx-auto ">
      <Switch>
        <Route path="/" exact component={Jobs} />
        <Route path="/job/:id" exact component={Job} />
      </Switch>
      <nav className="w-full absolute bottom-0 left-0 border-t-2 border-slate-700 rounded-t-xl flex justify-around items-center bg-slate-900 text-white px-10 h-20">
        <div>
          <Link to="/" className="flex flex-col items-center ">
            <MdWork />
            <p>Jobs</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <MdBookmarks />
          <p>Bookmarks</p>
        </div>
      </nav>
    </div>
  );
}

export default App;
