import Item from './Item.js';

const ItemList = () =>{
    return new Promise ((resolve) => {
      setTimeout(() => {
      resolve (Item);
    }, 2000);
  });
}

ItemList() .then((items) => console.log(items));

export default ItemList;