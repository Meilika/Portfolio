import "./Experience.css";

export default function MyExperience() {
  return (
    <div id="myExperience">
        <h1>M y E x p e r i e n c e</h1>
        <div className="experience">
            <h2>Learning Experience</h2>
            <div className="exp-list"> 
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHOIi63tC8k8w/company-logo_100_100/0/1660182933061?e=1675900800&v=beta&t=m4inU8JlglB6JLp9pJqIAAHnJHtaSyL53pv64o5YbJg" alt="Dicoding Indonesia Logo" />
                <div class="experience-detail">
                  <a href="https://www.linkedin.com/in/meilika-dwi-putri/details/experience/" target="blank"><h3>Independent Study of Front-End Web Developer and Back-End </h3></a>
                  <p> <b>Dicoding Indonesia</b> - Dicoding Academy (Remote)</p>
                  <p className="exp-date"> Aug 2021 - Jan 2022 </p>
                </div>
            </div>
            <div className="exp-list"> 
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQEIu6Alk0BuZA/company-logo_100_100/0/1544679117747?e=1675900800&v=beta&t=lud2vZypu4lxe-06sp6P3OkwiOdd8vO4rVeCBi4uv80" alt="Ruangguru Logo" />
                <div class="experience-detail">
                  <a href="https://www.linkedin.com/in/meilika-dwi-putri/details/experience/" target="blank"><h3>Independent Study of Front End Engineering Bootcamp </h3></a>
                  <p> <b>Ruangguru</b> - Ruangguru CAMP (Remote)</p>
                  <p className="exp-date"> Feb 2022 - Jul 2022 </p>
                </div>
            </div>
        </div>
    </div>
  );
}
