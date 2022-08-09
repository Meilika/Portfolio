import './Home.css';
import MeiPicture from '../assets/meilika.png'

export default function Home() {
    return (
        <div className='Home'>
            <div className='hero'>
                <div className='heroContent'>
                    <h1> Hi, iam Meilika Dwi Putri</h1>
                    <p>Undergraduate Informatics Engineering Student at the University of Lampung, who always expand experiences and knowledge and motivated to become a Front-End Web Developer. Excited to learn something new and always determined to finish what I start as best as possible.</p>
                    <div className='socialMedia'>
                        <ul>
                            <li><a href='https://github.com/Meilika' target="blank"><img src="https://img.icons8.com/ios-glyphs/40/5c1e21/github.png" alt='github-icon'/></a></li>
                            <li><a href='https://www.linkedin.com/in/meilika-dwi-putri/' target="blank"><img src="https://img.icons8.com/ios-glyphs/40/5c1e21/linkedin-circled--v1.png" alt='linkedin-icon'/></a></li>
                            <li><a href='mailto:meilikadwi@gmail.com' target="blank"><img src="https://img.icons8.com/ios-glyphs/40/5c1e21/new-post.png" alt='email-icon'/></a></li>
                            <li><a href='https://www.instagram.com/meilikadp/?hl=en' target="blank"><img src="https://img.icons8.com/ios-glyphs/40/5c1e21/instagram-new.png" alt='instagram-icon'/></a></li>
                        </ul>
                    </div>
                    <button>
                        <a href='https://drive.google.com/file/d/1A4TBqPJ_6Wws-Jv8XfZgctw_P1q7QXME/view?usp=sharing' target="blank"><img src="https://img.icons8.com/material-outlined/20/f5deb3/resume.png" alt='resume-icon'/> My Resume</a>
                    </button>
                    <button>
                        <img src="https://img.icons8.com/material-outlined/20/f5deb3/star--v2.png" alt='star-icon'/> My Projects
                    </button>
                </div>
                <div className='heroPic'>
                    <img src={MeiPicture} alt="/" />
                </div>
            </div>
            
        </div>
    )
}
