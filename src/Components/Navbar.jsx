import Toggle from "./Switch";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg sticky ${props.isDark?'navbar-dark bg-dark':'navbar-light bg-light'}`}>
        <div className="container-fluid">
        <a className="navbar-brand" style={{display:"inline-flex"}}>ThinkSpace</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#info">About ISS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#missions">Past Missions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#aboutUs">About Team</a>
              </li>
              {/*<li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#issMap">2D Map</a>
              </li>*/}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#spotISS">Spot the ISS</a>
              </li>
            </ul>
            <form className="d-flex" style={{float: 'right'}}>
                <Toggle handleEvent={()=>{props.themeUpdate(!props.isDark)}} dark={props.default}/>
            </form>
          </div>
        </div>
      </nav>
    );
}
