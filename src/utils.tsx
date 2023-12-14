export function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' + imageId + size + '.jpg'
    );
}


  export default function Profile({}) {
    return (
     <>
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
     </>
    );
}
  