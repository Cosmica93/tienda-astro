import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWitdget =()=>{
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>8</span>
        </div>
    )
}