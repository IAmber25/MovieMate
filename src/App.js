import Footer from "./component/Footer";
import Header from "./component/Header";
import AllRoute from "./route/AllRoute";

function App() {
  return (
    <div className="text-center bg-slate-400 dark:bg-slate-900">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
