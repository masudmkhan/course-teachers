const addToDb = (id) => {
    const findData = localStorage.getItem('cart');
    let cart = {};
    if (!findData) {
        cart[id] = 1;
    }
    else {
        cart = JSON.parse(findData);
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const findData = localStorage.getItem('cart');
    const parseData = JSON.parse(findData);
    let newData = {};
    delete parseData[id];
    newData = parseData;
    localStorage.setItem('cart', JSON.stringify(newData));
};

const clearDb = () => {
    localStorage.removeItem('cart');
}

export { addToDb, removeFromDb, clearDb };