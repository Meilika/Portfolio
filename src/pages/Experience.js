import "./Experience.css";

export default function MyExperience() {
  return (
    <div id="myExperience">
        <h1>M y E x p e r i e n c e</h1>
        <div className="experience">
            <h2>Learning Experience</h2>
            <div className="exp-list"> 
                <img src="https://gitlab.com/uploads/-/system/group/avatar/9844065/dicoding-logo-square.png" alt="Dicoding Indonesia Logo" />
                <div class="experience-detail">
                  <a href="https://www.linkedin.com/in/meilika-dwi-putri/details/experience/" target="blank"><h3>Independent Study of Front-End Web Developer and Back-End </h3></a>
                  <p> <b>Dicoding Indonesia</b> - Dicoding Academy (Remote)</p>
                  <p className="exp-date"> Aug 2021 - Jan 2022 </p>
                </div>
            </div>
            <div className="exp-list"> 
                <img src="https://cdn-images-1.medium.com/max/1200/1*WIznmKuAneDUnNi3t_An1w.png" alt="Ruangguru Logo" />
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
