

function AboutPage() {
    const avid = "Nana Yaa";
    return (
        <>
            <div>
                <header>
                    <img src="download.png" alt="A Google image"/>
                </header>
                <main>
                    <h1>My name is {avid}. These are the reasons I am excited to learn react</h1>
                    <ol>
                        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                        <li>I am more likely to get a job as a front end developer if I know React</li>
                    </ol>
                </main>
                <footer>
                    <small>&copy; Amponsah Development. All rights reserved</small>
                </footer>
            </div>
        </>
    );
}

export default AboutPage