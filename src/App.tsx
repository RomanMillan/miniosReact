/*
Ejercico 2
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
  img: "https://i.imgur.com/7vQD0fPs.jpg"
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.img}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
*/

/*
const baseUrl = 'https://i.imgur.com/';
const person = {
name: 'Gregorio Y. Zara',
imageId: '7vQD0fP',
imageSize: 's',
theme: {
backgroundColor: 'black',
color: 'pink'
}
};


export default function TodoList({}) {
return (
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
  <img
    className="avatar"
    // src= {baseUrl + person.imageId + person.imageSize + ".jpg"}
    src = {`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
    alt={person.name}
  />
  <ul>
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>Work on the alcohol-fuelled engine</li>
  </ul>
</div>
);
}
*/
/*
import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            física y química
          </li>
          <li>
            <b>Reconocimientos: 4 </b> 
            (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)
          </li>
          <li>
            <b>Descubrió: </b>
            polonio (elemento químico)
          </li>
        </ul>
      </section>

      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            geoquímica
          </li>
          <li>
            <b>Reconocimientos: 2 </b> 
            (Premio Miyake de geoquímica, Premio Tanaka)
          </li>
          <li>
            <b>Descubrió: </b>
            un método para medir dióxido de carbono en agua de mar
          </li>
        </ul>
      </section>
      
    </div>
  );
}
*/

// Ejercicio 2 (Mostrar la importancia del elemento con &&)
/*
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} 
      {importance && <em>(Importancia: {importance})</em>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje espacial" 
        />
        <Item 
          importance={0} 
          name="Casco con hoja dorada" 
        />
        <Item 
          importance={6} 
          name="Foto de Tam" 
        />
      </ul>
    </section>
  );
}
*/

// Ejercicio 3 (Refactorizar una serie de ? : a if y variables)
function Drink({ name }) {
  let partOfPlant, caffeineContent, age;

  /*
  if (name === 'tea') {
    partOfPlant = 'hoja';
    caffeineContent = '15-70 mg/taza';
    age = '4,000+ años';
  } else {
    partOfPlant = 'grano';
    caffeineContent = '80-185 mg/taza';
    age = '1,000+ años';
  }
  */
  name === 'tea' > (partOfPlant = 'hoja', caffeineContent = '15-70 mg/taza', age = '4,000+ años') ? partOfPlant = 'grano';

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{partOfPlant}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeineContent}</dd>
        <dt>Edad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
