import ItemList from './ItemList.js'

const ItemListContainer = (props) =>{
    return(
      <div className="titulo">
          <h1>{props.title}</h1>
      </div>
    );
}

export default ItemListContainer;