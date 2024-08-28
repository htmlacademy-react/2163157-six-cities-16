function PremiumLabel({isPremium} : {isPremium : boolean}) {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
}

function FavoriteLabel({isFavorite} : {isFavorite : boolean}) {
  if (isFavorite) {
    return (
      <button className="place-card__bookmark-button button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
      </button>
    );
  } else {
    return (
      <button className="place-card__bookmark-button button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

type CityPlaceProps = {
  className: string;
  offersList: { title : string; type : string; price : number; isFavorite : boolean;
    isPremium : boolean; rating : number; previewImage : string; };
}

function CityPlace({className, offersList} : CityPlaceProps):JSX.Element {
  return (
    <article className={`${className} place-card`}>
      <PremiumLabel isPremium={offersList.isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offersList.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offersList.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteLabel isFavorite={offersList.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{offersList.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offersList.title}</a>
        </h2>
        <p className="place-card__type">{offersList.type}</p>
      </div>
    </article>
  );
}

export default CityPlace;
