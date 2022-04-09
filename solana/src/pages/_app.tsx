import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Layout } from '../components/layout';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');



















const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>Solana Scaffold Lite</title>
          </Head>



          
            <Layout>
          
         
              <Notifications />
            
                <Component {...pageProps} />
     
         
            
            </Layout>
            
          
          
          
          
        </>
    );
};

export default App;






















          {/* Main */
                        //<ContextProvider>

             // <Footer/>
              
              // <AppBar/>
              
                       // </ContextProvider>

          }



