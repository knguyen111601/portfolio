import {BsStars} from "react-icons/bs"

// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div>
    <h1 className="ProjHead">Projects</h1>
    <div className="Projects" id="Projects">
    <div className="Proj1">
            <h1>TINKER</h1>
            <h6 style={{marginTop: "0", color: "white"}}>Dummy Login - USER: admin PASS: admin</h6>
            <img src="https://i.imgur.com/cgq1mM3.png" alt="screenshot"/>
            <div className="hashtags">
                <div className="hash"><h1>#html</h1></div>
                <div className="hash"><h1>#scss/sass</h1></div>
                <div className="hash"><h1>#javascript</h1></div>
                <div className="hash"><h1>#reactjs</h1></div>
                <div className="hash"><h1>#masonite</h1></div>
                <div className="hash"><h1>#python</h1></div>
                <div className="hash"><h1>#postgres</h1></div>
            </div>
            <p>Tinker is an application that allows users to build a PC virtually. Tinker allows for users to create their own PCs and put them together from a list of parts as if they were actually shopping. Then, Tinker will automatically save it to their personal list and let them update or delete as they please. Tinker's frontend was made using REACTJs and the backend with Masonite and Python. Authentication was done through Masonite's user controller.</p>
            <div className="gitandvisit">
            <h3 className="git"><a target="_blank" rel="noreferrer" href="https://github.com/knguyen111601/penguin_project_4_backend">GitHub Repo</a></h3>
            <h3 className="seeMore"><a className="button" target="_blank" rel="noreferrer" href="https://angry-galileo-823324.netlify.app/">See More</a></h3>
            </div>
        </div>

        <div className="Proj1">
        <h1>uWish<BsStars/></h1>
        <h6 style={{marginTop: "0", color: "white"}}>Dummy Login - USER: kenny PASS: kenny</h6>
            <img src="https://i.imgur.com/i1vXnYC.png" alt="screenshot"/>
            <div className="hashtags">
                <div className="hash"><h1>#html</h1></div>
                <div className="hash"><h1>#scss/sass</h1></div>
                <div className="hash"><h1>#javascript</h1></div>
                <div className="hash"><h1>#reactjs</h1></div>
                <div className="hash"><h1>#express</h1></div>
                <div className="hash"><h1>#mongodb</h1></div>
                <div className="hash"><h1>#api</h1></div>
            </div>
            <p>uWish, is a shopping list application with a "widget" or "social media" dashboard design. Users can create their own accounts where they can manage their own personal "wishlists". Users can create, read, update, and delete items from their dashboard as they please. Users can also edit their own profiles with their own personalied profile pictures and biographies. This application's frontend was creted using ReactJS and the backend with express. The authentication method was through JWT Token.</p>
            <div className="gitandvisit">
            <h3 className="git"><a target="_blank" rel="noreferrer" href="https://github.com/knguyen111601/project_3_frontend">GitHub Repo</a></h3>
            <h3 className="seeMore"><a className="button" target="_blank" rel="noreferrer" href="https://penguin-react-express-project3.netlify.app/">See More</a></h3>
            </div>
        </div>

        <div className="Proj1">
            <h1>Binge</h1>
            <h6 style={{marginTop: "0", color: "white"}}>Dummy Login - USER: binge PASS: binge</h6>
            <img src="https://i.imgur.com/23NGhhA.jpg" alt="screenshot"/>
            <div className="hashtags">
                <div className="hash"><h1>#html</h1></div>
                <div className="hash"><h1>#css</h1></div>
                <div className="hash"><h1>#javascript</h1></div>
                <div className="hash"><h1>#express</h1></div>
                <div className="hash"><h1>#liquidjs</h1></div>
                <div className="hash"><h1>#mongodb</h1></div>
            </div>
            <p>Binge, is an application in which a user can browse and add movies or shows to their own personal watch list and rate them. This application was created following RESTful routes and CRUD. Also, the movies, shows, user information, and user lists are saved into their own respective databases and change with the user's actions. Liquid-express-views was the principal method in the development of the application and its processes.</p>
            <div className="gitandvisit">
            <h3 className="git"><a target="_blank" rel="noreferrer" href="https://github.com/knguyen111601/penguin_project_2">GitHub Repo</a></h3>
            <h3 className="seeMore"><a className="button" target="_blank" rel="noreferrer" href="https://kn-penguin-p2.herokuapp.com/">See More</a></h3>
            </div>
        </div>

        <div className="Proj1">
            <h1>Ultimate Minecraft Trivia</h1>
            <img src="https://i.imgur.com/C4HmVIj.jpg" alt="screenshot"/>
            <div className="hashtags">
                <div className="hash"><h1>#html</h1></div>
                <div className="hash"><h1>#css</h1></div>
                <div className="hash"><h1>#javascript</h1></div>
                <div className="hash"><h1>#mongodb</h1></div>
                <div className="hash"><h1>#api</h1></div>
            </div>
            <p>The Ultimate Minecraft Trivia Game is a special kind of trivia game. In this trivia game, you can select your character and harness their special abilities. The questions and answers in this game were generated through the utilization of an API. Also, utilizing JavaScript, CSS, and HTML, it has a very nice design inspired heavily from the game of "Minecraft" itself.</p>
            <div className="gitandvisit">
            <h3 className="git"><a target="_blank" rel="noreferrer" href="https://github.com/knguyen111601/seir_penguin_project_1">GitHub Repo</a></h3>
            <h3 className="seeMore"><a className="button" target="_blank" rel="noreferrer" href="https://seir-penguin-project-1-one.vercel.app/">See More</a></h3>
            </div>
        </div>
    </div>
    </div>
}

// export the component
export default Projects