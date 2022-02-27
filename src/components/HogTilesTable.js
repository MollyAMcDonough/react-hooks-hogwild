import React from "react";
import HogTile from "./HogTile";
import {Card} from "semantic-ui-react";

//gonna need hogs data to pass to hog tiles
function HogTilesTable({hogs}) {
    const hogsJsx = hogs.map((hog) => {
        return (
            <HogTile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]} />
        );
    })
    return (
        <Card.Group>
            {hogsJsx}
        </Card.Group>
    );
}

export default HogTilesTable;