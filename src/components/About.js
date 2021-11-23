import {useState} from "react"
import {GrDown, GrUp} from "react-icons/gr"

const About = (props) =>{

    const [open, setOpen] = useState(null)

    const seeMore = () =>{
        return <button className="see" onClick={more}><GrDown/></button>
    }

    const seeLess = () => {
        return (
            <div>
            <button className="see" onClick={less}><GrUp/></button>
            <div className="aboutParagraph">
            <p>Hello! I am Kenny Nguyen and I am a Full Stack Developer that loves diving into difficult challenges and exploring the worlds of technology. I have completed training in mechanical engineering and psychology, but I moved into Software Engineering and Computer Science so that I can use my adaptability and problem solving skills to help companies achieve their goals in web development. </p>
        </div>
        </div>)
    }

    const more = () =>{
        setOpen(true)
    }

    const less = () =>{
        setOpen(null)
    }


    return <div className="about">
        <div className="aboutParagraph">
            <h1 style={{color: "white", marginBottom:"0"}}>About me</h1>
            {open ? seeLess() : seeMore()}
        </div>
    </div>
}

export default About