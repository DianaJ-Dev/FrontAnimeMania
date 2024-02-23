import PropTypes from 'prop-types';

export const AnimeCard = ({ title, img, score, recommendation}) => {
    return (
        <>
        <div className="card" >
            <img className="card-img-top" src={img}></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Score: {score}</li>
                    <li className="list-group-item">Recomendación: {recommendation}</li>
                </ul>
        </div>
        </>
    )
}
AnimeCard.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    recommendation: PropTypes.string.isRequired
};