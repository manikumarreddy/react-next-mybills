import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

const  Layout=({children})=>{
return (
        <>
            <Nav/>                
            <div className="container">
                <main>
                    <Header />
                    {children}
                </main>
            </div>
            
        </>
    )
}

export default Layout;