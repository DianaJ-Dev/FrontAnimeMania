import PropTypes from 'prop-types';
import Logo from '../img/Logo.png'
import {Searchbar} from "./Searchbar"

export const Navbar = ({funcAux}) => {

    const onNewAnimes = (valor) => {
        funcAux(valor)
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="90" height="75" className="d-inline-block align-text-">
                        </img>
                        <span className="title" >
                            Anime Mania
                        </span>
                    </a>
                    <Searchbar
                        onNewAnime={(value) => onNewAnimes(value)}
                    />
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    funcAux: PropTypes.string.isRequired,
};
