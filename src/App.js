
import './App.css';

function App() {
  return (
    <div className="main-con">
        <div className="section1">
            <ul className="section1__nav">
              <span style={{alignSelf:"center"}}>
                <li><img src="./images/logo.svg" alt="No-image" /></li>
              </span>
              
              <span style={{display:"flex",columnGap:"2em",alignItems:"center"}}>
                <li>
                 <a href="#" style={{color:"black"}}>manage</a> 
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>solutions</a>
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>contact</a>
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>about us</a>
                </li>
                <li>
                  <button style={{backgroundColor:"transparent",border:"sold 1px",borderColor:"white"}}>Book a flight</button>
                  <button>Download app</button>
                </li>
              </span>
              
            </ul>
            <div style={{display:"flex",width:"95vw",justifyContent:"space-between",alignItems:"center",marginTop:"25em",alignSelf:"flex-end"}}>
              <div className="section1__powerBtnCon">
                <img src="./images/power.svg" alt="No-image" />
              </div>
              <h2 style={{color:"white",fontFamily:'Poppins, sans-serif',fontStyle:"normal",fontWeight: "800",fontSize: "57px",lineHeight: "86px",textTransform:"capitalize",width:"45%",transform:"translateX(1em)"}}>Let's kick the tires and light the fires</h2>
              <ul className="section1__option--con">
                <li className="section1__options">
                  <img src="./images/profile.svg" alt="" />
                </li>
                <li className="section1__options">
                  <img src="./images/message.svg" alt="" />
                </li>
                <li className="section1__options">
                  <img src="./images/fourbox.svg" alt="" />
                </li>
                <li className="section1__options">
                  <img src="./images/question.svg" alt="" />
                  </li>
                <li className="section1__options">
                  <img src="./images/questionandanswer.svg" alt="" />
                </li>
              </ul>
            </div>
        </div>
        <div className="section2">
          <div className="section2__whiteBg" style={{backgroundColor:"white",width:"100vw",height:"10%"}}>
            <div className="section2__whiteBg--titleBorder">
              <h2 className="section2__whiteBg--title">more flexibility, freedom and choice</h2>
            </div>
          </div>
          <div className="section2__blackBg">
              <h2 className="section2__blackBg--title">
                  why choose us?
              </h2>
          </div>
          <ul style={{display:"flex",columnGap:"8em",fontSize:"2.5rem",fontWeight:"bold",marginLeft:"5em",color:"white",transform:"translateY(-0.5em)",fontFamily:"Poppins, sans-serif"}}>
            <li>01</li>
            <li>02</li>
            <li>03</li>
          </ul>
          <div className="section2__slider">
            <div>
              <img style={{width:"80%"}} src="./images/image2.jpg" alt="" />
              <h3 className="section2__slider--header">You are priority </h3>
              <p className="section2__slider--text">Your safety and comfort is what we are here for and of course!, your destination</p>
            </div>

            <div>
              <img style={{width:"80%"}} src="./images/image3.jpg" alt="" />
              <h3 className="section2__slider--header">Free public lounge </h3>
              <p className="section2__slider--text">Your safety and comfort is what we are here for and of course!, your destination</p>
            </div>

            <div>
              <img style={{width:"80%"}} src="./images/image4.jpg" alt="" />
              <h3 className="section2__slider--header">Flight Price</h3>
              <p className="section2__slider--text">Your safety and comfort is what we are here for and of course!, your destination</p>
            </div>
            <div>
              <div className="section2__slider--circle">
                  <p style={{fontFamily: "Poppins, sans-serif",fontWeight:" 600"}}>
                    04
                  </p>
                  <img src="./images/arrow.svg" alt="" />
              </div>
              <div className="section2__button--seeMore">
                <p style={{fontFamily: "Poppins, sans-serif",fontWeight:" 500"}}>See More</p>
              </div>
            </div>

          </div>
        </div>
        <div className="section3">
            <div className="section3__LHS">
              <p style={{fontFamily: "Poppins, sans-serif",fontWeight:" 600"}}>shared flights</p>
              <img style={{width:"100%",position:"relative",right:"1.5em"}} src="./images/fligthdirection.svg" alt="" />
            </div>
            <div className="section3__center">
              <h2 style={{fontFamily: "Poppins, sans-serif",fontWeight:" 600",textTransform:"capitalize"}}>on-demand</h2>
              <p style={{fontFamily: "Poppins, sans-serif",fontWeight:" 400"}}>book your personal aircraft, customize your journey in all aspects</p>
            </div>
            <div className="section3__RHS">
              <p style={{marginLeft:"1.5em",color:"white",fontSize:"1.5rem",textTransform:"capitalize",fontFamily: "Poppins, sans-serif",fontWeight:"700"}}>flexible services</p>
              <div className="section3__RHS--btn"><p style={{alignSelf:"center",marginLeft:"1em",textTransform:"capitalize",fontWeight:"700",fontFamily: "Poppins, sans-serif"}}>book now</p><span style={{backgroundColor:"#004C93",borderRadius:"0px 10px 10px 0px",padding:"3px",display:"flex",justifyContent:"center"}}><img style={{width:"80%"}} src="./images/plane.svg" alt="" /></span></div>
            </div>
        </div>
        <div className="section4">
          <div className="section4___black--div">
            <div className="section4__black--LHS">
              <img className="phoneimg" src="./images/phone.svg" alt="no-image" />
            </div>
            <span className="section4__black--RHS">
              <div style={{display:"flex",flexDirection:"column",rowGap:"1em",position:"absolute;",marginLeft:"70em", transform:"translateY(5em)"}}>
                  <img style={{cursor:"pointer"}} src="./images/applestore.svg" alt="no-image" />
                  <img style={{cursor:"pointer"}} src="./images/googleplay.svg" alt="no-image" />
              </div>
              <div className="section4__btn">
                Get the app
              </div>
            </span>
          </div>
          <div className="section4__white--div">
              <h1 style={{textAlign:"center",marginTop:"3.2em",fontSize:"4rem",fontWeight:"900",fontFamily:"Roboto, sans-serif"}}>Book A Flight</h1>
          </div>
        </div>
        <footer>
          <div>
          <ul style={{ display:"flex",flexDirection:"column",rowGap:"0.5em"}}>
            <li>
              <img src="./images/logo.svg" className="footer__logo" alt="Logo" />
            </li>
            <h3 style={{fontFamily:"roboto",fontWeight:"900"}}>Follow Us</h3>
            <span style={{display:"flex",columnGap:"2em"}}>
              <li>
                <a href="#"><img src="./images/linkedin.svg" alt="linkedin-icon" /></a>
              </li>
              <li>
                  <a href=""><img src="./images/instagram.svg" alt="instagram-icon" /></a>
              </li>
              <li>
                  <a href=""><img src="./images/facebook.svg" alt="facebook-icon" /></a>
              </li>
            </span>
          </ul>
          </div>
          <div style={{width:"30%"}}>
            <ul style={{display:"flex",justifyContent:"spaceBetween",flexDirection:"column",height:"50%",paddingTop:"6em",rowGap:"15em"}}>
              <span className="footer__links--con">
                <h2 style={{fontFamily:"roboto",fontWeight:"900",textTransform:"capitalize"}}>on-demand</h2>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}>
                  <a href="#">private  aircraft</a>
                  </li>
              </span>
              <span className="footer__links--con">
                <h2 style={{fontFamily:"roboto",fontWeight:"900",textTransform:"capitalize"}}>company</h2>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">about us</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">solutions</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">news</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">contact</a></li>
              </span>
            </ul>
          </div>
          <div style={{width:"20%"}}>
            <ul style={{display:"flex",justifyContent:"spaceBetween",flexDirection:"column",height:"50%",paddingTop:"6em",rowGap:"14em"}}>
              <span className="footer__links--con">
                <h2 style={{fontFamily:"roboto",fontWeight:"900",textTransform:"capitalize"}}>shared flight</h2>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">propose a flight</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">avaliable flights</a></li>
              </span>
              <span className="footer__links--con">
                <h2 style={{fontFamily:"roboto",fontWeight:"900",textTransform:"capitalize"}}>my account</h2>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">resgister</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">login</a></li>
                <li style={{fontFamily:"roboto",fontWeight:"400"}}><a href="#">dashboard</a></li>
              
              </span>
            </ul>
          </div>
          <div style={{display:"flex",justifyContent:"center",padding:"0em 10em"}}>
            <ul style={{display:"flex",columnGap:"5em",justifyContent:"center",alignItems:"center"}}>
              <li style={{fontFamily:"roboto",fontWeight:"400"}}>
                <a href="">cookie policy</a> 
              </li>
              <li style={{fontFamily:"roboto",fontWeight:"400"}}>
                <a href="#">terms & condition</a>
              </li>
              <li style={{fontFamily:"roboto",fontWeight:"400"}}>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  );
}

export default App;
