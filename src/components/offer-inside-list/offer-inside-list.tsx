const INSIDE_LIST = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

type ElementProps = {
  element: string;
}

function OfferInsideElement({element} : ElementProps) :JSX.Element {
  return (
    <li className="offer__inside-item">
      {element}
    </li>
  );
}

function OfferInsideList() :JSX.Element {
  return (
    <ul className="offer__inside-list">
      {INSIDE_LIST.map((element) => <OfferInsideElement key={element} element={element}/>)}
    </ul>
  );
}

export default OfferInsideList;
