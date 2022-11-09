import "./Projects.css";
import HiCoder from "../assets/projects/HiCoder.jpg"
import SnakeGame from "../assets/projects/SnakeGame.jpg"
import AyoJogja from "../assets/projects/AyoJogja.jpg"
import HungersBite from "../assets/projects/HungersBite.jpg"
import MealFinder from "../assets/projects/MealFinder.jpg"
import BookshelfApps from "../assets/projects/BookshelfApps.jpg"

export default function MyProject() {
  return (
    <div id="myProject">
        <h1>M y P r o j e c t</h1>
        <div className="projects">
            <div className="project-box">
                <img src={HiCoder} alt="Hicoder" />
                <h2>HiCoder</h2>
                <h6>Final Project for Independent study at Ruangguru (Jul 2022)</h6>
                <p>Hicoder aims to help users to find mentors who are experienced in the IT field</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/react-native.png" alt="react-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/tailwindcss.png" alt="tailwind-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/final-project-engineering-11' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><a href='https://hicoder-apps.netlify.app/' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="project-box">
                <img src={SnakeGame} alt="/" />
                <h2>Simple Snake Game</h2>
                <h6>Software Engineering Project Assignment, Independent study at Ruangguru (Feb 2022)</h6>
                <p>Simple snake Game with 5 levels</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/html-5--v1.png" alt="html-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/css3.png" alt="css-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt="javascript-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/se-fe7-kelompok3' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><a href='meilika.github.io/se-fe7-kelompok3/' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="project-box">
                <img src={AyoJogja} alt="/" />
                <h2>Ayo Jogja</h2>
                <h6>Capstone Project for Independent study at Dicoding (Des 2021)</h6>
                <p>AyoJogja is a website that provides information about tourist attractions in Yogyakarta and its location, as well as providing PPKM information that applicable in the Yogyakarta area</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/react-native.png" alt="react-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/informasi-wisata-yogyakarta' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><a href='https://ayojogja.netlify.app/' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="project-box">
                <img src={HungersBite} alt="/" />
                <h2>Hunger's Bite</h2>
                <h6>Submission 'Menjadi Front-End Web Developer Expert' Class, Independent study at Dicoding (Nov 2021)</h6>
                <p>PWA Restaurant Catalog with Testing and Performance Optimized</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/html-5--v1.png" alt="html-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/css3.png" alt="css-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt="javascript-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/Hungers-Bite' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></li>
                    </ul>
                </div>
            </div>
            <div className="project-box">
                <img src={MealFinder} alt="/" />
                <h2>Meal Finder</h2>
                <h6>Submission 'Belajar Fundamental Front-End Web Development' Class, Independent study at Dicoding (Oct 2021)</h6>
                <p>Web Application with ES6, Custom Element, NPM, Webpack, and AJAX</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/html-5--v1.png" alt="html-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/css3.png" alt="css-icon"/></li>
                        <li><img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt="javascript-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/MealFinderWeb' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><a href='https://mealfinder-meilika.netlify.app/' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="project-box">
                <img src={BookshelfApps} alt="/" />
                <h2>Bookshelf Apps</h2>
                <h6>Submission 'Belajar Membuat Front-End Web untuk Pemula' Class, Independent study at Dicoding (Oct 2021)</h6>
                <p>Data Management Applications Using DOM and Web Storage</p>
                <div className='tech'>
                    <ul> Build with :
                        <li><img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt="javascript-icon"/></li>
                    </ul>
                </div>
                <div className='source'>
                    <ul>
                        <li><a href='https://github.com/Meilika/Bookshelf-Apps' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/github.png" alt='github-icon'/></a></li>
                        <li><a href='https://bookshelf-meilika.netlify.app/' target="blank"><img src="https://img.icons8.com/ios-glyphs/30/5c1e21/verified-account--v1.png" alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
