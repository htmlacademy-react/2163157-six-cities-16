import mocks from '../../mock/mocks';
import CityPlace from '../cities-places-list/cities-places-list';
import Header from '../header/header';
import LocationList from '../location-list/location-list';
import PlacesSorting from '../places-sorting/places-sorting';

//type MockTypes = {title : string; type : string; price : number; isFavorite : boolean; isPremium : boolean; rating : number; previewImage : string};
//const [{ title, type, price, isFavorite, isPremium, rating, previewImage }] = mocks;

function MainPage(): JSX.Element {
  return (
    <body>
      <div className="page page--gray page--main">
        {Header()}

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              {LocationList()}
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                {PlacesSorting()}
                <div className="cities__places-list places__list tabs__content">
                  {mocks.map((mock) => <CityPlace key={mock.id} className={'cities__card'} mock={ mock }/>)}
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
