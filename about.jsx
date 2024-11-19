function About(){

  
  
return(

  <>
  {/* Basic Page Needs
  ================================================== */}
  <meta charSet="utf-8" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="icon" href="favicon.ico" />
  <title>Timer Agency Template</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="author" content="" />
  {/* Mobile Specific Metas
  ================================================== */}
  <meta name="format-detection" content="telephone=no" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Template CSS Files
  ================================================== */}
  {/* Twitter Bootstrs CSS */}
  <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />
  {/* Ionicons Fonts Css */}
  <link rel="stylesheet" href="plugins/ionicons/ionicons.min.css" />
  {/* animate css */}
  <link rel="stylesheet" href="plugins/animate-css/animate.css" />
  {/* Hero area slider css*/}
  <link rel="stylesheet" href="plugins/slider/slider.css" />
  {/* owl craousel css */}
  <link rel="stylesheet" href="plugins/owl-carousel/owl.carousel.css" />
  <link rel="stylesheet" href="plugins/owl-carousel/owl.theme.css" />
  {/* Fancybox */}
  <link rel="stylesheet" href="plugins/facncybox/jquery.fancybox.css" />
  {/* template main css file */}
  <link rel="stylesheet" href="css/style.css" />
  {/*
  ==================================================
  Header Section Start
  ================================================== */}
  <header id="top-bar" className="navbar-fixed-top animated-header">
    <div className="container">
      <div className="navbar-header">
        {/* responsive nav button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        {/* /responsive nav button */}
        {/* logo */}
        <div className="navbar-brand">
          <a href="index.html">
            <img src="images/logo.png" alt="" />
          </a>
        </div>
        {/* /logo */}
      </div>
      {/* main menu */}
      <nav className="collapse navbar-collapse navbar-right" role="navigation">
        <div className="main-menu">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="service.html">Service</a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Pages <span className="caret" />
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Blog <span className="caret" />
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="blog-fullwidth.html">Blog Full</a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html">Blog Left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-right-sidebar.html">Blog Right sidebar</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* /main nav */}
    </div>
  </header>
  {/* 
  ================================================== 
      Global Page Section Start
  ================================================== */}
  <section className="global-page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h2>About Company</h2>
            <ol className="breadcrumb">
              <li>
                <a href="index.html">
                  <i className="ion-ios-home" />
                  Home
                </a>
              </li>
              <li className="active">About</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 
================================================== 
    Company Description Section Start
================================================== */}
  <section className="company-description">
    <div className="container">
      <div className="row">
        <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
          <img
            src="images/about/about-company.jpg"
            alt=""
            className="img-responsive"
          />
        </div>
        <div className="col-md-6">
          <div className="block">
            <h3
              className="subtitle wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="500ms"
            >
              Why We are Different
            </h3>
            <p
              className="wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="500ms"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequun. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p
              className="wow fadeInUp"
              data-wow-delay=".7s"
              data-wow-duration="500ms"
            >
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 
================================================== 
    Company Feature Section Start
================================================== */}
  <section className="about-feature clearfix">
    <div className="container-fluid">
      <div className="row">
        <div
          className="block about-feature-1 wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay=".3s"
        >
          <h2>Why Choose Us</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        <div
          className="block about-feature-2 wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay=".5s"
        >
          <h2 className="item_title">What You Get</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        <div
          className="block about-feature-3 wow fadeInDown"
          data-wow-duration="500ms"
          data-wow-delay=".7s"
        >
          <h2 className="item_title">Meet The Energy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* 
================================================== 
    Team Section Start
================================================== */}
  <section id="team">
    <div className="container">
      <div className="row">
        <h2 className="subtitle text-center">Meet The Team</h2>
        <div className="col-md-3">
          <div
            className="team-member wow fadeInLeft"
            data-wow-duration="500ms"
            data-wow-delay=".3s"
          >
            <div className="team-img">
              <img src="images/team/team-1.jpg" className="team-pic" alt="" />
            </div>
            <h3 className="team_name">Jonathon Andrew</h3>
            <p className="team_designation">CEO, Project Manager</p>
            <p className="team_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore{" "}
            </p>
            <p className="social-icons">
              <a href="#" className="facebook" target="_blank">
                <i className="ion-social-facebook-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-linkedin-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-googleplus-outline" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="team-member wow fadeInLeft"
            data-wow-duration="500ms"
            data-wow-delay=".5s"
          >
            <div className="team-img">
              <img src="images/team/team-2.jpg" className="team-pic" alt="" />
            </div>
            <h3 className="team_name">Jesmin Martina</h3>
            <p className="team_designation">CEO, Project Manager</p>
            <p className="team_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .
            </p>
            <p className="social-icons">
              <a href="#" className="facebook" target="_blank">
                <i className="ion-social-facebook-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-linkedin-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-googleplus-outline" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="team-member wow fadeInLeft"
            data-wow-duration="500ms"
            data-wow-delay=".7s"
          >
            <div className="team-img">
              <img src="images/team/team-3.jpg" className="team-pic" alt="" />
            </div>
            <h3 className="team_name">Deu John</h3>
            <p className="team_designation">CEO, Project Manager</p>
            <p className="team_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .
            </p>
            <p className="social-icons">
              <a href="#" className="facebook" target="_blank">
                <i className="ion-social-facebook-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-linkedin-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-googleplus-outline" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="team-member wow fadeInLeft"
            data-wow-duration="500ms"
            data-wow-delay=".9s"
          >
            <div className="team-img">
              <img src="images/team/team-4.jpg" className="team-pic" alt="" />
            </div>
            <h3 className="team_name">Anderson Martin</h3>
            <p className="team_designation">CEO, Project Manager</p>
            <p className="team_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore .
            </p>
            <p className="social-icons">
              <a href="#" className="facebook" target="_blank">
                <i className="ion-social-facebook-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-twitter-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-linkedin-outline" />
              </a>
              <a href="#" target="_blank">
                <i className="ion-social-googleplus-outline" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 
  ================================================== 
      Clients Section Start
  ================================================== */}
  <section id="clients">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2
            className="subtitle text-center wow fadeInUp animated"
            data-wow-duration="500ms"
            data-wow-delay=".3s"
          >
            Our Happy Clinets
          </h2>
          <p
            className="subtitle-des text-center wow fadeInUp animated"
            data-wow-duration="500ms"
            data-wow-delay=".5s"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            error.
          </p>
          <div id="clients-logo" className="owl-carousel">
            <div>
              <img src="images/clients/logo-1.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-2.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-3.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-4.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-5.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-1.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-2.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-3.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-4.jpg" alt="" />
            </div>
            <div>
              <img src="images/clients/logo-5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*
      ==================================================
      Call To Action Section Start
      ================================================== */}
  <section id="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block">
            <h2
              className="title wow fadeInDown"
              data-wow-delay=".3s"
              data-wow-duration="500ms"
            >
              SO WHAT YOU THINK ?
            </h2>
            <p
              className="wow fadeInDown"
              data-wow-delay=".5s"
              data-wow-duration="500ms"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              <br />
              possimus commodi, fugiat magnam temporibus vero magni recusandae?
              Dolore, maxime praesentium.
            </p>
            <a
              href="contact.html"
              className="btn btn-default btn-contact wow fadeInDown"
              data-wow-delay=".7s"
              data-wow-duration="500ms"
            >
              Contact With Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*
      ==================================================
      Footer Section Start
      ================================================== */}
  <footer id="footer">
    <div className="container">
      <div className="col-md-8">
        <p className="copyright">
          Copyright: <span /> Design and Developed by{" "}
          <a href="http://www.Themefisher.com" target="_blank">
            Themefisher
          </a>
          . <br />
          Get More
          <a
            href="https://themefisher.com/free-bootstrap-templates/"
            target="_blank"
          >
            Free Bootstrap Templates
          </a>
        </p>
      </div>
      <div className="col-md-4">
        {/* Social Media */}
        <ul className="social">
          <li>
            <a href="http://wwww.fb.com/themefisher" className="Facebook">
              <i className="ion-social-facebook" />
            </a>
          </li>
          <li>
            <a href="http://wwww.twitter.com/themefisher" className="Twitter">
              <i className="ion-social-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="Linkedin">
              <i className="ion-social-linkedin" />
            </a>
          </li>
          <li>
            <a href="http://wwww.fb.com/themefisher" className="Google Plus">
              <i className="ion-social-googleplus" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>{" "}
  {/* /#footer */}
  {/* Template Javascript Files
	================================================== */}
  {/* jquery */}
  {/* Form Validation */}
  {/* owl carouserl js */}
  {/* bootstrap js */}
  {/* wow js */}
  {/* slider js */}
  {/* Fancybox */}
  {/* template main js */}
</>
  );
}


