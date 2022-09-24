function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    function findItem(i) {
        return i === item;
    }
    const index = items.findIndex(findItem);

    if (index !== -1) {
        console.log(`your item is ${items[index]}`);
        items.splice(index, 1);
        return items;
    }    
}

export { choice, remove };



