function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID:id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card z-depth-3">
                <div className="card-image waves-effect waves-block waves-light ">
                    {
                        poster === 'N/A' ? (
                        <img className="activator"src={'https://via.placeholder.com/300x400?text=${title}'}/>):
                        <img className="activator" src={poster}/>
                    }
                </div>

                <div className="card-content">
                    <span className="card-title activator red-text text-darken-4">{title}</span>
                    <p><span className="">{type}</span> <span className="badge pink darken-4 white-text text-lighten-2">{year}</span></p>
                </div>
                
           </div>
}

export {Movie};