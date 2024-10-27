const Footer=()=>{
    return(
        <>
        <div id="footer" class="container-fluid p-5 mt-5">
            <div class="row">
                <div class="col-sm-3" id="about">
                    <h4 class="text-white ">Address</h4><br/>
                    <p class="container mt-2"><i class="fa fa-map-marker" style={{fontSize: "23px",color: "white"}}></i><span class=" p-3" style={{lineHeight: "2%",color: "white"}}>Branch-1 Chanderkanta Education and Welfare Society 19-B, Chander Nagar,Delhi Delhi East Delhi DL 110051 IN</span></p>
                    <p class="container mt-4"><i class="fa fa-map-marker" style={{fontSize: "23px",color: "white"}}></i><span class=" p-3" style={{lineHeight: "2%",color: "white"}}>Branch-2
                        Office No- 9,Building No-1 Shiv Prasad Annapurna Est Deepak Hospital Road
                        Near Madhuhans Bungalow Bhayandar East
                        Thane 401105</span></p>
                </div>
                <div class="col-sm-3">
                    <h4 class="text-white ">Contact</h4><br/>
                    <p><i class="fa fa-phone pe-2" style={{fontSize: "20px",color: "white"}}></i><span style={{color: "white"}}>8347343333</span></p>
                    <p><i class="fa fa-envelope" style={{fontSize: "20px",color: "white"}}></i><span style={{color: "white"}}> info@drpatient.com</span></p>
                    <p><i class="fa fa-envelope" style={{fontSize: "20px",color: "white"}}></i><span style={{color: "white"}}> mail@drpatient.com</span></p>
                    <i class="fa fa-twitter text-primary text-white rounded-pill p-2" style={{width: "38px", border: "1px solid white"}}></i>
                    <i class="fa fa-facebook-f text-primary text-white rounded-pill p-2" style={{width: "38px", border: "1px solid white"}}></i>
                    <i class="fa fa-youtube-play text-primary text-white rounded-pill p-2" style={{width: "38px", border: "1px solid white"}}></i>
                    <i class="fa fa-linkedin text-primary text-white rounded-pill p-2" style={{width: "38px", border: "1px solid white"}}></i>
                </div>    
                <div class="col-sm-3 link4">
                    <h4 class="text-white">Information</h4>
                    <a href="#about"><i class="fa fa-angle-right text-white" style={{fontSize: "20px"}}></i> About Us</a>
                    <a href="#contacts"><i class="fa fa-angle-right text-white" style={{fontSize: "20px"}}></i> Contact  Us</a>
                    <a href="#services"><i class="fa fa-angle-right text-white" style={{fontSize: "20px"}}></i>  Our Services</a>
                    <a href="#terms"><i class="fa fa-angle-right text-white" style={{fontSize: "20px"}}></i>  Terms & Conditions</a>
                </div>
                <div class="col-sm-3">
                    <h4 class="text-white">Instagram</h4>
                    <div class="container-fluid mt-3 image3">
                        <img class="img1" src="wing.png" width="60px" height="70px"/><img src="welcome2.jpg" width="60px" height="70px"/><img class="img2" src="dr1.jpg" width="60px" height="70px"/><br/>
                        <img class="img3" src="dr3.jpg" width="60px" height="70px"/><img src="dr4.avif" width="60px" height="70px"/><img class="img4" src="dr5.avif" width="60px" height="70px"/>
                    </div>
                </div>
            </div>
            <hr style={{color: "white"}}/>
            <p style={{float: "left", color: "white"}}><span class="text-dark">copyright</span> @2021 All rights reserved.</p>
            <p class="text-end" style={{color: "white"}}>The website designed by <strong style={{color: "black"}}>Anand</strong></p>
    
        </div>
        </>
    )
};
export default Footer;