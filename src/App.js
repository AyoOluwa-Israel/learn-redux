import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import Demo from "./components/Demo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Demo/>
      </div>
    </Provider>
  );
}

export default App;
