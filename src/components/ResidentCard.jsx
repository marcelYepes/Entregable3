import useFetch from "../hooks/useFetch"

const ResidentCard = ( {url} ) => {

const resident = useFetch(url)

  return (
   <article>
        <header>
            <img src={resident?.image} alt="" />
            <div>
                <div className="cirle">                
                </div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li><span>Specie: </span>{resident?.species}</li>
                <li><span>Origin: </span>{resident?.origin.name}</li>
                <li><span>Episodes: </span>{resident?.episode.length}</li>
            </ul>
        </section>
   </article>
  )
}

export default ResidentCard