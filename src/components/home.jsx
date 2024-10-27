import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div id="home">
            <div class="welcome">
                Welcome to the Doctors Meet
                </div>
        </div>
        <div id="home2">
            <h3><u>ABOUT US</u></h3>
            <p>We practice medicine that our historical ancestors could only dream of, and we have access<br/> to amazing treatments and cures for out patients on daily basis.<br/><br/>
            We remind our fellows, residents and medical students that what we do is a privilege. People let us into the most intimate aspects of there lives, and they look to us to help guide them through very complex and delicate situations.<br/><br/>
            Here are some of our top doctors</p>
            <div class="row pt-5">
                <div class="col-sm-3">
                        <img class="rounded-pill" alt="img" src="dr1.jpg" width="60%" />
                        <h4>Dr Suryansh Sharma</h4>
                        <p>(Sr. Surgeon)<br/></p>
                </div>
                <div class="col-sm-3">
                        <img class="rounded-pill" alt="img" src="dr3.jpg" width="60%" />
                        <h4>Dr Mohit Rana</h4>
                        <p>(Sr. Psychiatrist)<br/></p>
                </div>
                <div class="col-sm-3">
                        <img class="rounded-pill" alt="img" src="dr4.avif" width="60%" />
                        <h4>Dr Nili Mehta</h4>
                        <p>(Sr. Orthopedist specialist)<br/></p>
                </div>
                <div class="col-sm-3">
                        <img class="rounded-pill" alt="img" src="dr5.avif" width="60%" />
                        <h4>Dr Rohan sachdeva</h4>
                        <p>(Sr. Physician)<br/></p>
                </div>
            </div>
            {/* <p><a href="#" onClick={()=>{navigate('/doctorslist')}}>Click </a>to see the complete list</p> */}
        </div>
        </>
    )
};
export default Home;