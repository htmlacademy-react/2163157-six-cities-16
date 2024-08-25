import ReviewsForm from '../reviews-form/reviews-form';
import OfferInsideList from '../offer-inside-list/offer-inside-list';

function PremiumLabel(isPremium : boolean) {
  if (isPremium) {
    return (
      <div className="offer__mark">
        <span>Premium</span>
      </div>
    );
  }
}

function FavoriteLabel(isFavorite : boolean) {
  if (isFavorite) {
    return (
      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
      </button>
    );
  } else {
    return (
      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

type OfferProps = {
  offer : [];
  title : string;
  type : string;
  price : number;
  isPremium: boolean;
  isFavorite: boolean;
  rating : number;
  previewImage : string;
  description : string;
  bedrooms : number;
  goods : [string];
  host : {name : string;
    avatarUrl : string;
    isPro : boolean;};
  images : [string];
  maxAdults : number;
}

function OfferWrapper(offer : OfferProps) :JSX.Element {
  return (
    <div className="offer__wrapper">
      {PremiumLabel (offer.isPremium)}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {offer.title}
        </h1>
        {FavoriteLabel(offer.isFavorite)}
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: '80%'}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {offer.type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
        Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <OfferInsideList/>
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
            <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
          </div>
          <span className="offer__user-name">
            {offer.host.name}
          </span>
          <span className="offer__user-status">
            {offer.host.isPro}
          </span>
        </div>
        <div className="offer__description">
          <p className="offer__text">
            {offer.description}
          </p>
          <p className="offer__text">
          An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
          </p>
        </div>
      </div>
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ul className="reviews__list">
          <li className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
              Max
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
              A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
              </p>
              <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
            </div>
          </li>
        </ul>
        <ReviewsForm/>
      </section>
    </div>
  );
}

export default OfferWrapper;
