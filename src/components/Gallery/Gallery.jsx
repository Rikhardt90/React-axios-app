import "./Gallery.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Gallery({ list }) {
  return (
    <div className="gallery-div">
      {list.map((item) => (
        <figure key={item.id}>
          <Popup trigger={<img src={item.image} alt={item.name} />}>
            <div className="popup-1">
              <h3>Name: {item.name}</h3>
              <h3>Status: {item.status}</h3>
              <h3>Species: {item.species}</h3>
              <h3>Gender: {item.gender}</h3>
              </div> 
          </Popup>
          {/* <img src={item.image} alt={item.name} /> */}
          <figcaption>{item.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
