import CITTIES from '../../const';

function LocationItem({ city }) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{ city }</span>
      </a>
    </li>
  );
}


function LocationList() :JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITTIES.map((city) => <LocationItem key={city} city={city}/>)}
    </ul>
  );
}

export default LocationList;
