



function Header() {


    const style_navbar = {marginLeft:'20px'};
    
    return (
        <nav class="navbar navbar-expand-md bg-dark navbar-dark ml-3">
    
        <a class="navbar-brand" style={style_navbar} href="/">FairuzMaya</a>
      

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      
 
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/aktivitas">1<sup>th</sup> Month Anniversary</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> */}
          </ul>
        </div>
      </nav>
    )




}



export default Header;