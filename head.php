<?php
    include_once "inc/config.php"; 
    include_once "inc/drc.php"; 
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
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/general/icon_ab.png">
    <link rel="icon" type="image/png" href="assets/img/general/icon_ab.png">
    <!-- <link rel="manifest" href="favicon/site.html"> -->
    <link rel="mask-icon" href="assets/img/general/icon_ab.png" color="#0010f7">
    
    <!-- Google fonts -->
    <link rel="preconnect" href="assets/fonts.googleapis.com/index.html">
    <link rel="preconnect" href="assets/fonts.gstatic.com/index.html" crossorigin>
    
    <link rel="stylesheet" href="assets/unpkg.com/leaflet%401.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/vendors.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- <link rel="stylesheet" href="assets/css/bootstrap.css"> -->
    <link rel="stylesheet" href="assets/css/component.css">
    
    <title><?php echo $pagetitle; ?> - Terabyte</title>
    

    <!-- Page loading scripts-->
    <script src="assets/js/page-loader.js"></script>
</head>

<body class="preloader-visible" data-barba="wrapper">
    <!-- preloader start -->
    <div class="progress-container js-preloadr">
        <div class="progress-bar"></div>
    </div>
    <!-- preloader end -->

    
    <main class="main-content  " >

        
        <!-- <div class="content-wrapper  js-content-wrapper" ></div> -->