import React, {useState} from "react";
import HogHeader from "./HogHeader";
import HogTilesTable from "./HogTilesTable";

function HogsDisplay({hogs}) {
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortCategory, setSortCategory] = useState("none");
    const [hogsList, setHogsList] = useState(hogs);

    function handleFilterGreased(filtered) {
        setFilterGreased(!filterGreased);
        if(filtered) {
            console.log(sortCategory)
            handleSort(sortCategory, hogs);
        } else {
            const filteredList = hogsList.filter((hog) => hog.greased);
            setHogsList(filteredList);
        }
    }

    function handleSort(category, hogsToSort=hogsList) {
        setSortCategory(category);
        console.log("hogsto sort:", hogsToSort)
        console.log("by category:", category)
        if(category!=="none") {
            const sortedHogs = [...hogsToSort];
            sortedHogs.sort((a,b) => {
                if (a[category] < b[category]) return -1;
                return 1;
            });
            console.log(sortedHogs);
           setHogsList(sortedHogs);
        }
    }
    return (
        <div>
            <HogHeader handleFilterGreased={handleFilterGreased} filtered={filterGreased} handleSort={handleSort} category={sortCategory} />
            <HogTilesTable hogs={hogsList} />
        </div>
    );
}

export default HogsDisplay;