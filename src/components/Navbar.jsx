import { useRef } from 'react';

const Navbar = ({setCategory, setSearchQuery}) => {
  const searchInputRef = useRef(null);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchInputRef.current.value.trim()) {
      setSearchQuery(searchInputRef.current.value);
      setCategory('');
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark" style={{boxShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" onClick={()=> setCategory('general')} style={{cursor:'pointer', fontSize:'1.5rem'}}><span className="badge rounded-pill bg-danger text-white">📰 News World</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory('technology')} style={{cursor:'pointer'}}>💻 Technology</div>
        </li>
         <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory('health')} style={{cursor:'pointer'}}>🏥 Health</div>
        </li>
         <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory('science')} style={{cursor:'pointer'}}>🔬 Science</div>
        </li>
         <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory('entertainment')} style={{cursor:'pointer'}}>🎬 Entertainment</div>
        </li>
         <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory('sports')} style={{cursor:'pointer'}}>⚽ Sports</div>
        </li>
      </ul>
      <form className="d-flex gap-2" role="search" onSubmit={handleSearch}>
        <input ref={searchInputRef} className="form-control" type="search" placeholder="🔍 Search news..." aria-label="Search" style={{borderRadius: '20px', border: '2px solid #ff6b6b'}}/>
        <button className="btn btn-danger" type="submit" style={{borderRadius: '20px', fontWeight: 'bold'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;