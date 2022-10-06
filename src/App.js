import './App.css';
import logo from "./img/Logo.svg"
import arrow from "./img/arrow.svg"
import pointeur from "./img/bar.png"
import ghost from "./img/ghost.png"

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
            <header>
                <div className="left">
                    <img src={logo} alt="Logo IBLIZ INC"/>
                </div>
                <div className="right">
                    <nav>
                        <a href="#">Graveyard</a>
                        <a href="#">Track Record</a>
                        <a href="#">Services</a>
                        <a href="#">Know More</a>
                        <a href="#">Support</a>
                    </nav>
                </div>
            </header>
            <div className="middle-content">
                <div className="left">
                    <div className="bloc-text">
                        <span>#2 top Best duo</span>
                        <h1>BRING BACK MY COTTON CANDY</h1>
                        <p>Adino steals his brother cotton candy and eats them all in one bite, such a hungry beast. Grahami can't hold any longer his anger to Adino.</p>
                    <div className="bloc-button">
                        <div className="boutton">
                            <a href="#">Book Now</a>
                        </div>
                        <div className="track">
                            <a href="#">Track Record</a>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="right">
                    <img src={ghost} alt="ghost image"/>
                    <div className="infos">
                        <div className="infos-bloc-left">
                            <span>Adino & Grahami</span>
                            <span>No words can describe them</span>
                        </div>
                        <div className="infos-bloc-right">
                            <img src={pointeur} alt="pointeur"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <div className="all-ghost-but">
                    <a href="#">See All Ghost</a>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
