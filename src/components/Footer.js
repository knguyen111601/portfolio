// the component function
const Footer = (props) => {
    //The Components Returned JSX
    return <div className="Footer">
        <h1>Contact Me!</h1>
        <div className="footer">
            <a href="sms:7147573978"><img src="https://icon-library.com/images/free-phone-icon-vector/free-phone-icon-vector-27.jpg"/></a>
            <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/kenny-nguyen-3520a4219"><img src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" alt="LinkedIn"/></a>
            <a target="_blank" rel="noreferrer" href="mailto:knguyen111601@gmail.com"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google.png" alt="G-Mail"/></a>
        </div>
        <h1>Projects:</h1>
        <div class="projlinks">
            <div><a target="_blank" rel="noreferrer" href="https://kn-penguin-p2.herokuapp.com/"><img src="https://i.imgur.com/SoOkv8W.png" alt="binge"/></a></div>
            <div><a target="_blank" rel="noreferrer" href="https://github.com/knguyen111601/seir_penguin_project_1"><img src="https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png" alt="minecraft"/></a></div>
            <div><a target="_blank" rel="noreferrer" href="https://penguin-react-express-project3.netlify.app/"><img src="https://i.imgur.com/QsKGS5E.png" alt="uWish"/></a></div>
        </div>
    </div>
}

// export the component
export default Footer