import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import Products from "./data/data";

function App() {
  return (
    <div className="app">
      <FilterableProductTable products={Products} />
    </div>
  );
}

export default App;
