import { Minion } from "./interfaces";

const listFavorite:string[] = [];


export function Card({minion}: {minion: Minion}){
    return(
        <div className="card">
            <img src={`src/${minion.img}`} className="card-img-top" alt={minion.name} />
            <div className="card-body">
                <h5 className="card-title">{minion.name}</h5>
                <p className="card-text">{minion.bio}</p>
                <p className="card-text">Nacimiento: {minion.birth}</p>
                <p className="card-text">{minion.side}
                  {minion.side === 'malvado' ?(
                    <img className="side" src={`src/assets/img/de los malos.PNG`} alt={minion.side}/>
                    ) : (
                      <img className="side" src={`src/assets/img/de los buenos.PNG`} alt={minion.side} />
                  )}
                </p>
                <button className="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>
                </button>
            </div>
      </div>
    );

}