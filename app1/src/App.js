import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";

export const BASE_URL = "http://localhost:9000";

function App() {

  const [filter, setFilter]             = useState("all");
  const [dishes, setDishes]             = useState([]);
  const [tempDishes, setTempDishes]     = useState([]);
  const [searchedFood, setSearchedFood] = useState("");
  const [displayFood, setDisplayFood]   = useState([]);

  const filtering = (filterValue)=>{
    let filteredDishes = filterValue === "all" ? dishes : dishes.filter((dish) => dish.type === filter);
    setDisplayFood(filteredDishes);
    setTempDishes(filteredDishes)
  }

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((resolve) => {
        setDishes(resolve.data)
        setTempDishes(resolve.data)
        setDisplayFood(resolve.data)
      })
      .catch((err) => console.log(`error in useEffect => ${err}`));
  }, []);

  useEffect(() => {
    filtering(filter);
  }, [filter])

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const searchHandler = (e) => {
    if(e.target.value) {
      setSearchedFood(e.target.value);
      setDisplayFood(tempDishes.filter(dish => dish.name.toLowerCase().includes(searchedFood.toLowerCase())))
    }else{
      setSearchedFood("");
      setDisplayFood(tempDishes)
    }
  };

  return (
    <div className="App">
      <Navbar
        filter={filter}
        filterHandler={filterHandler}
        searchHandler={searchHandler}
        searchedFood={searchedFood}
      />
      <Menu filter={filter} displayFood={displayFood} />
    </div>
  );
}

export default App;
