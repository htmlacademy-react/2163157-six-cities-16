//import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const SORTING_ITEMS = ['Popular','Price: low to high', 'Price: high to low', 'Top rated first'] as const;

function sortingList() {
  const container = [];
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      container.push(<li className="places__option places__option--active" tabIndex={0}>{SORTING_ITEMS[0]}</li>);
    } else {
      container.push(<li className="places__option" tabIndex={0}>{SORTING_ITEMS[i]}</li>
      );
    }
  }
  return container;
}

function PlacesSorting() {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortingList()}
      </ul>
    </form>
  );
}

export default PlacesSorting;
