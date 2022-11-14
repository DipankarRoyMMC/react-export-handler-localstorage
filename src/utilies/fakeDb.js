// data use to local storage manage 
const addToDb = (id) => {
    let shoppingCart;

    // get shopping cart 
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    // add quentity 
    const quentity = shoppingCart[id];
    if (quentity) {
        const newQuentity = quentity + 1;
        shoppingCart[id] = newQuentity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
export { addToDb };


// this is first code
// const addToDb = (id) => {
//     const quentity = localStorage.getItem(id, 1);
//     if (quentity) {
//         const newQuentity = parseInt(quentity) + 1;
//         localStorage.setItem(id, newQuentity)
//         console.log('alreay exits')
//     } else {
//         console.log('new item')
//         localStorage.setItem(id, 1)
//     }
// }

// export { addToDb }