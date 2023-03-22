
const Movie = (props) => {
    const {Title:title, Year:year, imbdID:id, Type:type, Poster:poster} = props;

     return (
        <div className="card movie" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
            {poster === `N/A` ? <img className="activator" alt="" src={`https://i.pinimg.com/originals/41/10/0d/41100d4d9c0e5e18787e3b27022c9743.jpg`}/> : <img className="activator" src={poster}/>}
          {/* <img className="activator" src={poster}/> */}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{year} <span className="right">{type}</span></p>
          
        </div>
      </div>
     )
}

export default Movie