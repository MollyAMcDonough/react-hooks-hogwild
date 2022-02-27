import React from "react";
import Nav from "./Nav";
import HogsDisplay from "./HogsDisplay";
import hogs from "../porkers_data";

/*
App:
|_Nav, HogsDisplay (state of greased button, sort on name or weight, passed to HogTileTable)
		|	|   										|_HogTileTable
	   	|	|_filter button (greased)					|_HogTile(hogs name and image and click event)
		|_sort category and button (name or weight)		|_(hogs specialty, weight, greased, and highest medal achieved)
 */

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsDisplay hogs={hogs}/>
		</div>
	);
}

export default App;
