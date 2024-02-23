import PropTypes from 'prop-types';
import { useState } from "react"

export const Searchbar = ({onNewAnime}) => {
  
  const [inputValue, setInputValue] = useState('')
 
  const onInputChange = ({target}) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    
    event.preventDefault();
    onNewAnime(inputValue.trim());
    setInputValue('')
  }

  return (
    <form className="d-flex" role="search" onSubmit={onSubmit}>
      <input
        className="form-control me-2" 
        type="search"
        aria-label="Search"
        placeholder="Buscar Anime"
        value={ inputValue }
        onChange={onInputChange}
        size={40}
      />
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  )
}

Searchbar.propTypes = {
  onNewAnime: PropTypes.string.isRequired,
};