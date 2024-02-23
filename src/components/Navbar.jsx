import {Searchbar} from "./Searchbar"

export const Navbar = ({funcAux}) => {

    const onNewAnimes = (valor) => {
        funcAux(valor)
    }

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/src/assets/img/logo.png" alt="Logo" width="67" height="54" class="d-inline-block align-text-">
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
