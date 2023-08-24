export default function SliderCard({ movie }) {

  const { title, year, director, img } = movie;

  return (
    <div className='slide'>
      <div className="display-info">
        <h3 className='display-info__title display-info-movie'>{`${title} (${year})`}</h3>
        <p className='display-info__director display-info-movie'>{director}</p>
      </div>
      <img src={img} alt={`Poster de ${title}`} loading="lazy" />
    </div>
  )
}