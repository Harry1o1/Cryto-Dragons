import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";




function MyApp({ Component, pageProps }) {
    
    
    return (
        
        
        <MoralisProvider serverUrl="https://a2pko6dyqtwq.usemoralis.com:2053/server" appId="D0r1DA19TTZvr6CiWdB3sjDDE0Y71EFasRNLP12a">
            <Component {...pageProps} />
        </MoralisProvider>
       
    )
  
}

export default MyApp
