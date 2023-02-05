import MyApp from "./components/myApp";
// import store from "./store";
// import { useEffect } from "react";
// import { loadUser } from "./actions/userAction";
function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser);
  // }, []);
  return (
    <div className="App">
      <MyApp></MyApp>
    </div>
  );
}

export default App;
