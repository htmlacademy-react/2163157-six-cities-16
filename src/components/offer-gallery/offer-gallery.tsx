const OFFER_IMAGES = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'];

type OfferGalleryProps = {
  image: string;
}

function OfferGalleryElement({image} : OfferGalleryProps) :JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio"/>
    </div>
  );
}

function OfferGallery() :JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {OFFER_IMAGES.map((image) => <OfferGalleryElement key={image} image={image}/>)}
      </div>
    </div>
  );
}

export default OfferGallery;
