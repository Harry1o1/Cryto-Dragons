
import Navbar from "./navbar";
import Footer from './footer';


import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'


import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from '../contexts/AutoConnectProvider';




// opbro🎉🎉🎉🎉😎😎😎😎
export default function Layout({ children }) {
    
  const { autoConnect, setAutoConnect } = useAutoConnect();
    
  return (
    <>




          
          <div className="overlay" />








  {/* Navbar top */}
  <nav id="pro_navbartop_container" className=" shadow-sm ">
    <ul id="pnt-ul">
    
    
      <li className="pnt-li pnt-li1">
        <div id="pnt-it1" className="pnt-it pnt-it1">
          <ion-icon name="menu-outline" id="pnt-in" />
          <ion-icon name="close-outline" id="pnt-in" />
        </div>
      </li>
      <li className="pnt-li pnt-li4 ">
        <div id="pnt-it5" className="pnt-it">
          <ion-icon name="sunny-outline" />
          <ion-icon name="moon-outline" />
        </div>
      </li>
      <li className="pnt-li pnt-li2 notifications-toggler">
        <div className="pnt-it" id="pnt-it2">
          <ion-icon className="pnt-it2" name="notifications-outline" id="pnt-in" />
          <ion-icon className="pnt-it2" name="close-outline" id="pnt-in" />
        </div>
        {/* <Image srcset="../public/Google.png" src="../public/Google.png" alt="../public/Google.png"> */}
      </li>
      <li className="pnt_divider pnt-li3 ">
        <div id="pnt-lg" className="pnt-it">
          {/* <Image src="./jrzy-logo.png" alt="logo"> */}
        </div>
      </li>
      <li className="pnt-li pnt-li4 ">
        <div id="pnt-it5" className="pnt-it">
        
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                  </label>
                </div>
              </li>
              <li>
                <a>Slippage (pending)</a>
              </li>
              <li>
                <a>Setting 3</a>
              </li>
            </ul>
          </div>
        
        
       
        </div>
      </li>
      <li className="pnt-li pnt-li5">
        <div id="login-toggler" className=" ">
            
            <WalletMultiButton className="btn btn-ghost mr-2" />
            
          {/* <ion-icon name="map-outline" id="pnt-in"></ion-icon> */}
          <ion-icon name="log-in-outline" />                    
        </div>
      </li>
    </ul>
  </nav>
  <div id="small-sidebar" className="close shadow-sm ">
    <ul id="ss-ul">
      {/* <li class="ss-create c">
                      
                      <ion-icon name="add-outline"></ion-icon>
                      <a href="#"> Create </a>
                      
                  </li> */}
      {/* <li class="ss-search-container c">
                      
                      
                      <ion-icon name="add-outline"></ion-icon>
                      <input type="search" name="ss-search" id="ss-search" placeholder="Search for joy">
                      <ion-icon name="add-outline"></ion-icon>
                      
                      
                  </li> */}
                  
                        <li className="ss-li" id="ss-li1">
                            
                            <ion-icon name="home-outline"></ion-icon>
                            <Link passHref href="/home">
                                
                                <a href="#">Home</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                            
                            <ion-icon name="home-outline"></ion-icon>
                            <Link passHref href="/arena">
                                
                                <a href="#">Arena</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                            
                            <ion-icon name="home-outline"></ion-icon>
                            <Link passHref href="/marketplace">
                                
                                <a href="#">Marketplace</a>
                                
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li1">
                            
                            <ion-icon name="home-outline"></ion-icon>
                            <Link passHref href="/dragon_language">
                                
                                <a href="#">Dragon Language</a>
                                
                            </Link>                            
                            
                        </li>
                        
                        <li className="ss-li" id="ss-li2">
                            
                            
                            
                            
                                
                                <ion-icon name="cash-outline"></ion-icon>
                                
                                
                            <Link passHref href="/exchange">
                                
                                <a href="#">Exchange</a>                               
                            </Link>                        
 
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                            
                            
                                <ion-icon name="diamond-outline"></ion-icon>
                            
                            <Link passHref href="/nft">
                            
                                <a href="#">Nft</a>
                                
                                
                            </Link>                            
                            
                            
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                            
                            
                                <ion-icon name="analytics-outline"></ion-icon>
                            
                            <Link passHref href="/stack">
                                <a href="#">Stack</a>
                                
                                
                            </Link>                            
                            
                            
                            
                        </li>
                        <li className="ss-li" id="ss-li2">
                            
                            
                            
                                <ion-icon name="egg-outline"></ion-icon>
                            
                            <Link passHref href="/airdrop">
                                
                            
                                <a href="#">Airdrop</a>
                                
                            </Link>                            
                            
                            </li>
                        <li className="ss-li" id="ss-li3">
                            
                            
                            
                                <ion-icon name="medal-outline"></ion-icon>
                            
                            <Link passHref href="/ido_event">
                                
                                
                            
                                <a href="#">Ido-Event</a>
                            
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li4">
                            <ion-icon name="ribbon-outline"></ion-icon>

                            <Link passHref href="/ido">

                            
                            <a href="#">Ido</a>
                            </Link>                            
                            
                        </li>
                        <li className="ss-li" id="ss-li5">
                            
                            
                            
                            
                                <ion-icon name="game-controller-outline"></ion-icon>
                            
                            <Link passHref href="/gamefi">
                                
                            
                                
                                <a href="#">GameFi</a>
                                
                            </Link>                            
                            </li>
                        <li className="ss-li" id="ss-li7">
                            
                            
                                <ion-icon name="sparkles-outline"></ion-icon>
                            
                            
                            <Link passHref href="/support_ukrane">
                                
                            
                                <a href="#">Support Ukraine</a>
                                
                            </Link>                            
                            
                            
                        </li>
      {/* <li class="line"></li> */}
      <div className="strat-line">
        <li className="st st1">
          <div className="st-main" id="st-m1">
            <ion-icon name="list-outline" />
            <a href="#">More</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">Facebook</a>
            <a href="#">Telegram</a>
          </div>
        </li>
        <li className="st st2">
          <div className="st-main" id="st-m2">
            <ion-icon name="heart-outline" />
            <a href="#">Favorite</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Exchange</a>
            <a href="#">Nft</a>
            <a href="#">Airdrop</a>
            <a href="#">Gamefi</a>
          </div>
        </li>
        <li className="st st3">
          <div className="st-main" id="st-m3">
            <ion-icon name="book-outline" />
            <a href="#">Docs</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">All</a>
            <a href="#">Assigned to me</a>
            <a href="#">Shared with me</a>
            <a href="#">Private</a>
          </div>
        </li>
        <li className="st st4">
          <div className="st-main" id="st-m4">
            <ion-icon name="bar-chart-outline" />
            {/* <ion-icon name="list-outline"></ion-icon> */}
            <a href="#">Analysis</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">Facebook</a>
            <a href="#">Telegram</a>
          </div>
        </li>
        <li className="st st5">
          <div className="st-main" id="st-m5">
            <ion-icon name="cloud-upload-outline" />
            {/* <ion-icon name="heart-outline"></ion-icon> */}
            <a href="#">Uploads</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">Exchange</a>
            <a href="#">Nft</a>
            <a href="#">Airdrop</a>
            <a href="#">Gamefi</a>
          </div>
        </li>
        <li className="st st6">
          <div className="st-main" id="st-m6">
            <ion-icon name="library-outline" />
            {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
            {/* <ion-icon name="book-outline"></ion-icon> */}
            <a href="#">Library</a>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div className="st-toggle">
            <a href="#">All</a>
            <a href="#">Assigned to me</a>
            <a href="#">Shared with me</a>
            <a href="#">Private</a>
          </div>
        </li>
      </div>
    </ul>
  </div>
  {/* Login Container */}
  <div id="login_wrapper" className="shadow-lg">
    <div id="login_header">
      <h5>Login with your wallet</h5>
      <div className="icon">
        <ion-icon name="close-outline" />
      </div>
      {/* <ion-icon name="close-outline"></ion-icon> */}
      {/* <ion-icon name="moon-outline"></ion-icon> */}
    </div>
    <div id="metamask_container" className="btn_login_metamask">
      <Image src="./pthantom.png" alt="Metamask" height={30} width={30} />
      <div className="login-text">
        Pantham
      </div>
    </div>
    {/* <div id="wallet-connect_container" class="btn_login_wallet-connect">
      <Image src="./wallet-connect.svg" alt="Wallet-connect" height="48" width="48">
      <div class="login-text">
  
          Wallet-connect
  
      </div>
  </div> */}
  </div>
  {/* Notifications Container     #notifications-container>ul#n-ul>li.n-li.n-li$**/}
  <div className="drop notifications-container">
    <div className="drop__container" id="drop-items">
      <div className="drop__card">
        <div className="drop__data">
          <Image src="./drag-drop-card/assets/img/img3.jpg" alt className="drop__img" />
          <div>
            <h1 className="drop__name">Robbie Ford</h1>
            <span className="drop__profession">Ui/Ux design</span>
          </div>
        </div>
        <div>
          <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
        </div>
      </div>
      <div className="drop__card">
        <div className="drop__data">
          <Image src="./drag-drop-card/assets/img/img3.jpg" alt className="drop__img" />
          <div>
            <h1 className="drop__name">Robbie Ford</h1>
            <span className="drop__profession">Ui/Ux design</span>
          </div>
        </div>
        <div>
          <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
        </div>
      </div>
      <div className="drop__card">
        <div className="drop__data">
          <Image src="./drag-drop-card/assets/img/img3.jpg" alt className="drop__img" />
          <div>
            <h1 className="drop__name">Robbie Ford</h1>
            <span className="drop__profession">Ui/Ux design</span>
          </div>
        </div>
        <div>
          <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
        </div>
      </div>
      <div className="drop__card">
        <div className="drop__data">
          <Image src="./drag-drop-card/assets/img/img3.jpg" alt className="drop__img" />
          <div>
            <h1 className="drop__name">Robbie Ford</h1>
            <span className="drop__profession">Ui/Ux design</span>
          </div>
        </div>
        <div>
          <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
        </div>
      </div>
      <div className="drop__card">
        <div className="drop__data">
          <Image src="./drag-drop-card/assets/img/img4.jpg" alt className="drop__img" />
          <div>
            <h1 className="drop__name">Jenny Lit</h1>
            <span className="drop__profession">Digital marketing</span>
          </div>
        </div>
        <div>
          <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
          <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
        </div>
      </div>
    </div>
  </div>

















































          
          
          
          
          
          
          
          
          
          
          
          
          {/* Main */}
          <main>
            {/* ul#pf-ul$*4>li#pf-li$.pf-li*5>a[href="#"]{ item$ } */}
            
            
            
            
            
            
            
            
            
            
            
            
            
             <div id="pro_main_container">
              {children}
            </div>
            
            
            
            
            <footer>
              <ul id="pf-ul1">
                <h1>About us</h1>
                <div id="main-link1" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Join a meetup </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ask a question</a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Help </a></li>
                </div>
              </ul>
              <ul id="pf-ul2">
                <h1>Pages</h1>
                <div id="main-link2" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Airdrop </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Nft </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Gamefi</a></li>
                  <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Stack </a></li>
                  <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> Exchange </a></li>
                </div>
              </ul>
              <ul id="pf-ul3">
                <h1>What new Events</h1>
                <div id="main-link3" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Ido drop </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ido Events drop </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Sales </a></li>
                </div>
              </ul>
              <ul id="pf-ul4">
                <h1>Join us</h1>
                <div id="main-link4" className="main-links">
                  <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Twitter </a></li>
                  <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Discord </a></li>
                  <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Facebook </a></li>
                  <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Skillshare </a></li>
                  <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> YouTube </a></li>
                </div>
              </ul>
              <div id="copyright">
                All rights reserved to  
              </div>
            </footer>



        </main>
            
            
            
            
            
            
            
            
            
            
        
        
        
        
        











   










































      {/* Testing🖖🖖🖖 */}
      
      
      <Script
        type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
      />
      
      <Script
        src="https://cdn.jsdelivr.net/gh/Harry1o1/Crypto-Dragons/solana/Jrzy/main.js"
        strategy="beforeInteractive"
      />
      
       
    <Head>
        <title>flag-network</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>
        
        
    </Head>
    </>
  );
};





//       <Script
        // type="module" src="https://cdn.jsdelivr.net/gh/Harry1o1/Demo/nextjs/education-website/assets/js/script.js"
        // strategy="beforeInteractive"
    //   />