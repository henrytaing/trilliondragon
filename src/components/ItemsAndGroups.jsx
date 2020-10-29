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
    // Drag and Drop Functions
    let oldGroup;
    let itemNumber;
    const drag = (event, oldGroupIndex, itemIndex) => {
        // oldGroupIndex is assigned the original group that the item was in {number}
        oldGroup = oldGroupIndex;
        // itemIndex is assigned the item number {number}
        itemNumber = itemIndex;
        event.dataTransfer.setData('div', event.target.id);
    }
    const allowDrop = (event) => {
        event.preventDefault();
    }
    const drop = (event, newGroupIndex) => {
        event.preventDefault();
        const newState = groups.slice();
        // uses 'oldGroup' and 'itemNumber' which were assigned in drag function
        newState[oldGroup].splice(newState[oldGroup].indexOf(itemNumber), 1);
        newState[newGroupIndex].push(itemNumber);
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
                        <div className="item" id={`item${item}`} draggable="true" onDragStart={(e) => drag(e, groupIndex, item)}>
                            item {item}
                            <button onClick={() => deleteItem(item, groupIndex)}>delete</button>
                        </div>
                    )
                })
                return (
                    <div className="group" id={`group${groupIndex}`} onDrop={(e) => drop(e, groupIndex)} onDragOver={(e) => allowDrop(e)}>
                        {items}
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default ItemsAndGroups;