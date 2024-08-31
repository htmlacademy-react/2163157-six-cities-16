import {offersList} from '../../mock/mocks';
import CityPlace from '../../components/cities-places-list/cities-places-list';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';

function MainPage(): JSX.Element {
  return (
    <body>
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <PlacesSorting/>
                <div className="cities__places-list places__list tabs__content">
                  {offersList.map((offerList) => <CityPlace key={offerList.id} className={'cities__card'} offersList={ offerList }/>)}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default MainPage;
