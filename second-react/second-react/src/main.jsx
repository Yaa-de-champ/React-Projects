// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './App.css';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))

function Header() {
    return (
        <header className='header'>
            <img src='vite.svg' width='40px' alt='React-logo'/>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Pricing</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Maincontent() {
    const avid = "Nana Yaa";
    return (
        <>
                <main>
                    <h1>My name is {avid}. These are the reasons I am excited to learn react</h1>
                    <ol>
                        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                        <li>I am more likely to get a job as a front end developer if I know React</li>
                    </ol>
                </main>
        </>
    );
}

function Footer() {
    return (
        <footer>
            <small>&copy; Amponsah Development. All rights reserved</small>
        </footer>
    );
}

function Page() {
    return (
        <>
            <Header/>
            <Maincontent/>
            <Footer/>
        </>
    );
}

root.render(
    <Page/>
)