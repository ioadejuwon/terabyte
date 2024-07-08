<?php
    include_once "../inc/config.php"; 
    include_once "../inc/drc.php"; 
?>

<!DOCTYPE html>
<html lang="en">

<head>
    

    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="MartVille Technologies">

    <meta name="description" content="Learn the best way possible." />
    
    <meta property="og:title" content="<?php echo $pagetitle.' - Terabyte' ?>"/>
    <meta property="og:url" content="https://martville.app"/>
    <meta name="og:description" content="Learn the best way possible." />

    <meta name="twitter:site" content="@jointerabyte"/>
    <meta name="twitter:card" content="summary"/>

    <meta name="application-name" content="Terabyte"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-title" content="MartVille"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-tap-highlight" content="no"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff"/>
    <!-- <meta name="facebook-domain-verification" content="znfjwpevns3jhyzsnxuulz5q86paei"/> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="viewport" content="height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

    <!-- Google fonts -->
    <link rel="preconnect" href="../assets/fonts.googleapis.com/index.html">
    <link rel="preconnect" href="../assets/fonts.gstatic.com/index.html" crossorigin>
    <link href="../assets/fonts.googleapis.com/css2dec5.css?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">

    <link href="../assets/fonts.googleapis.com/css2f511.css?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../assets/unpkg.com/leaflet%401.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


    <!-- Stylesheets -->
    <link rel="stylesheet" href="../assets/css/vendors.css">
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <!-- <link rel="stylesheet" href="assets/css/bootstrap.css"> -->
    <link rel="stylesheet" href="../assets/css/component.css">

    <!-- Page loading scripts-->
    <script src="../assets/js/page-loader.js"></script>
    <title><?php echo $pagetitle; ?> - Terabyte</title>

    
</head>



<body class="preloader-visible" data-barba="wrapper">
     <!-- preloader start -->
     <div class="progress-container js-preloader">
        <div class="progress-bar"></div>
    </div>
    <!-- preloader end -->

    <!-- barba container start -->
    <div class="barba-container" data-barba="container">
        <main class="main-content">
