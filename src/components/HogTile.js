import React, {useState} from "react";
import {Card, Icon, Image} from 'semantic-ui-react';

//gonna need the hogs props data
function HogTile({name, image, specialty, greased, weight, medal}) {
    const [detailsDisplay, setDetailsDisplay] = useState(false);
    const extra = (
        <ul>
            <li>{`Highest Medal Achieved: ${medal}`}</li>
            <li>{`Specialty: ${specialty}`}</li>
            <li>{`Weight: ${weight}`}</li>
            <li>{`Greased: ${greased}`}</li>
        </ul>
    );
    return (
        <Card image={image} header={name} extra={detailsDisplay ? extra : ""} onClick={()=>setDetailsDisplay(!detailsDisplay)}>
        </Card>
    );
}

export default HogTile;