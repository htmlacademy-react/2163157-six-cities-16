import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import { offersList, offer } from '../../mock/mocks';
import CityPlace from '../../components/cities-places-list/cities-places-list';
import OfferWrapper from '../../components/offer-wrapper/offer-wrapper';

function OfferPage() :JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery/>
          <div className="offer__container container">
            <OfferWrapper offer={offer}/>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offersList.map((offerList) => <CityPlace key={offerList.id} className={'near-places__card'} offersList={ offerList }/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
