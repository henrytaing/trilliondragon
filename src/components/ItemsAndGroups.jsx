import React, {useState} from 'react';
import '../styles.css';

function ItemsAndGroups () {
    const [groups, setGroup] = useState([]);
    const [itemNum, setItemNum] = useState(0);
    const addGroup = () => {
        const newState = groups.slice();
        newState.push([]);
        setGroup(newState);
    }
    const addItem = () => {
        const newState = groups.slice();
        // newState.push([]);
        newState[newState.length - 1].push(itemNum);
        setGroup(newState);
        const newItemNum = itemNum + 1;
        setItemNum(newItemNum);
    }
    return (
        <>
            <button onClick={addGroup}>Add new group</button>
            <button onClick={addItem}>Add new item</button>
            <div className="container">
            {groups.map((group, groupIndex) => {
                // iterate over the items in each group
                const items = group.map((item, itemIndex) => {
                    return (
                        <div className="item">
                            item {item}
                            <button>delete</button>
                        </div>
                    )
                })
                return (
                    <div className="group" id={groupIndex}>
                        {items}
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default ItemsAndGroups;