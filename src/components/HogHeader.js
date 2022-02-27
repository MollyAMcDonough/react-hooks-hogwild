import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";

function HogHeader({handleFilterGreased, filtered, handleSort}) {
    return (
        <div>
            <Filter handleFilterGreased={handleFilterGreased} filtered={filtered}/>
            <Sort handleSort={handleSort} />
        </div>
    )
}

export default HogHeader;