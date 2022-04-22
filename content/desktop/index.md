<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>IITP Mess</title>

    <!-- Bootstrap Core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <!-- Custom Theme CSS -->
    <link href="css/grayscale.css" rel="stylesheet">

	
	
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">

    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
				
				<!--Here is the Login & Signup  Tag at the left-->
				
				<!--Here is the link to the animated login page (First part)-->
                <a class="navbar-brand" href="login.php#tologin">
                    <i class="fa fa-play-circle"></i>  <span class="light">Login</span>
                </a>
				
				<!--Here is the link to the animated login page (Second part)-->
				<a class="navbar-brand" href="login.php#toregister">
                    <i class="fa fa-play-circle"></i>  <span class="light">SignUp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </a>
				<i class="navbar-brand" >
                    <span  id=curTime></span> </i>
                </i>

                <a align="right" class="navbar-brand" href="getmasterinfo.php">
                    <i class="fa fa-play-circle"></i>  <span class="light">Admin</span>
                </a>
            </div>

            <!--Here the  Links to the 4 other Virtual pages at in t he main page-->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">About</a>
                    </li>
                    <li class="page-scroll">
                        <a href="search.html">Read Manual</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

	<!--<span id="logintag">Login Page</span>-->
	
	
	<!--First PAGE-->
	
	
    <section class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">MESS MANAGEMENT SYSTEM</h1>
                        <p class="intro-text">“Part of the secret of success in life is to eat what you like and let the food fight it out inside.” ― Mark Twain</p>
                        <div class="page-scroll">
                            <a href="#about" class="btn btn-circle">
                                <i class="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

	<!--Second PAGE-->
	
	
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>About This Website</h2>
                <p>This Website is a mess Website of IIT PATNA </p>
                
                <p>For the better and well defined functioning of the iitpatna mess system is the main mode of inspiration for the formation of this website</p>
            </div>
			<div class="page-scroll">
                            <a href="#page-top" class="btn btn-circle">
                                <i class="fa fa-angle-double-up animated"></i>
                            </a>
            </div>
        </div>
    </section>
    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>

</body>

</html>
