import "./About.css";
import P5Wrapper from "./P5Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {
    return (<div  >
        <h1 className="text-center display-1">ABOUT ME </h1>
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <img
                src="https://placehold.co/300x300"
                className="rounded-circle img-fluid self-img"
                alt="IMAGE OF ME HERE"
            />
            <h2 className="text-center mt-2">Jonathan Alvarez</h2>
            <p className="text-center">Lorem ipsum odor amet, consectetuer adipiscing elit. Proin vulputate tempor viverra consequat velit; sed odio ultrices. In id nec malesuada risus ante dictumst faucibus nec. Semper primis velit ligula, tincidunt porta justo? Vestibulum ultricies potenti libero feugiat ullamcorper. Justo fermentum lacus finibus placerat semper tincidunt libero morbi auctor. Magna ultricies tellus sapien dis, eleifend senectus elementum.

                Fames curae facilisis lectus purus senectus maecenas auctor litora. Dis ultricies augue gravida quam dis dictum. Quis ridiculus mauris posuere vestibulum inceptos mollis. Fames mus montes pellentesque nostra posuere. Risus tristique interdum ridiculus maecenas nulla, rutrum senectus. Primis hac augue lacinia, nisi integer commodo eros aliquet diam. Litora nullam facilisi urna nisl magna suscipit.

                Quis viverra amet feugiat donec conubia tempor. Quis at id parturient elementum, proin libero sodales blandit. In id sociosqu varius vulputate nec. Platea facilisis ridiculus fringilla sociosqu, montes habitant massa maximus congue. Felis netus luctus senectus in vehicula. Sociosqu leo molestie ipsum himenaeos nibh; tempus fermentum vehicula. Hendrerit eu porta nostra molestie lobortis arcu consectetur. Auctor praesent id dolor nisl ipsum.

                Risus aliquam convallis dictumst massa venenatis phasellus neque. Donec mollis risus fringilla turpis iaculis arcu ligula. In pulvinar ut magnis justo facilisis enim. Natoque donec conubia cras dictumst sed sapien. Netus natoque ultrices sit himenaeos conubia. Ut ex nostra fringilla enim integer primis nostra.

                Fusce etiam tempor blandit luctus per lobortis per pretium netus. Convallis vivamus facilisi phasellus dis nunc semper? Cursus urna habitasse bibendum rhoncus justo. Rutrum luctus pellentesque ut habitasse ullamcorper interdum rhoncus. Maecenas donec dis varius turpis erat vel lectus penatibus erat. Vivamus laoreet aenean massa orci sapien a erat?
            </p>
        </div>

        {/*  <P5Wrapper /> */}
    </div >)
};

export default About;
