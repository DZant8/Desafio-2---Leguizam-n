import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return(
        <div className="cart" style={{fontSize:"40px"}}>
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
    );
};

export default CartWidget;