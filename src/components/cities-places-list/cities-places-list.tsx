//import React from 'react';
//import mock from '../../mock/mock';

function PremiumLabel(isFavorite : boolean) {
  if (isFavorite) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
}

function FavoriteLabel(isFavorite : boolean) {
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

type CityPlaceType = {
  className: string;
  mock: { title : string; type : string; price : number; isFavorite : boolean;
    isPremium : boolean; rating : number; previewImage : string; };
}

function CityPlace(className : CityPlaceType['className'], mock : CityPlaceType['mock']):JSX.Element {
  return (
    <article className={`${className} place-card`}>
      {PremiumLabel(mock.isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={mock.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{mock.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {FavoriteLabel(mock.isFavorite)}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{mock.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{mock.title}</a>
        </h2>
        <p className="place-card__type">{mock.type}</p>
      </div>
    </article>
  );
}

export default CityPlace;
