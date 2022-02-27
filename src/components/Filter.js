import React from "react";
import {Button} from "semantic-ui-react"

//will need to be passed callback function for buttonclick
function Filter({filtered, handleFilterGreased}) {
    return (
        <Button onClick={()=>handleFilterGreased(filtered)}>{filtered ? "Show All Pigs" : "Filter Greased Pigs"}</Button>
    );
}

export default Filter;