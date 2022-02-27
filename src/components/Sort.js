import React from "react";
//import {Dropdown} from "semantic-ui-react";

//gonna need to be passed a callback to change the category
function Sort({handleSort}) {
    
    
    return (
        <select className="ui search selection dropdown" name="sort" onChange={(e)=>handleSort(e.target.value)}>
            <option value="none">Sort by category</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    );
    
}

export default Sort;