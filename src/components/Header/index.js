import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="logo" to="/">ReactFlix</Link>
            <Link className="favorits" to="/">Meus filmes</Link>

        </header>
    )
}
export default Header;