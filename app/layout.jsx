import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata ={
    title:"Promptopia",
    description:"Disover & Share AI Prompts"
}
const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>

           
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className='app'>
                <Nav/>
                {/* Gets Children from the page file. ( displays whatever u want) */}
                {children}

            </main>
            </Provider>
        </body>
      
    </html>
  )
}

export default RootLayout;
