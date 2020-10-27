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
        // newState.push([]); -> Example application always adds items in new group
            // Seems more appropriate to add items to existing groups or just make initial group if empty
        if(!newState[newState.length - 1]) newState.push([]);
        newState[newState.length - 1].push(itemNum);
        setGroup(newState);
        const newItemNum = itemNum + 1;
        setItemNum(newItemNum);
    }
    const deleteItem = (itemId, groupId) => {
        const newState = groups.slice();
        newState[groupId].splice(newState[groupId].indexOf(itemId),1);
        setGroup(newState);
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
                        <div className="item" id={item}>
                            item {item}
                            <button onClick={() => deleteItem(item, groupIndex)}>delete</button>
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