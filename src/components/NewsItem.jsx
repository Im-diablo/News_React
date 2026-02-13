import image from '../assets/logo.png'

const NewsItem = ({title, description, src, url}) => {
  if(!title || !description) return null;
  
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 m-1 p-0" style={{maxWidth:'345px', minHeight:'400px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.3)', transition: 'transform 0.3s, boxShadow 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(255,107,107,0.4)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';}}>
      <img src={src || image} className="card-img-top" alt="..." onError={(e) => e.target.src = image} style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body" style={{padding: '1.5rem'}}>
        <h5 className="card-title" style={{fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem', lineHeight: '1.4'}}>{title}</h5>
        <p className="card-text" style={{fontSize: '0.95rem', color: '#bbb', marginBottom: '1rem', lineHeight: '1.5'}}>{description?description.slice(0,90):'No Description Available'}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-danger" style={{borderRadius: '8px', fontWeight: 'bold', width: '100%'}}>
        📖 Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
