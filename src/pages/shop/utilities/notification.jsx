import { Link } from "react-router-dom"
import { CartFill } from "react-bootstrap-icons"

const notification = ({ type }) => {

    return (
        <div>
            {type} <link to={'/cart'}><CartFill /> View Cart</link>
        </div>
    )
}

export default notification