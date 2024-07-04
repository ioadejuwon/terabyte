<?php
    include_once "inc/config.php"; 
    include_once "inc/drc.php"; 
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Google fonts -->
    <link rel="preconnect" href="assets/fonts.googleapis.com/index.html">
    <link rel="preconnect" href="assets/fonts.gstatic.com/index.html" crossorigin>
    
    
    <link rel="stylesheet" href="assets/cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/unpkg.com/leaflet%401.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/vendors.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- <link rel="stylesheet" href="assets/css/bootstrap.css"> -->
    <link rel="stylesheet" href="assets/css/component.css">
    
    <title>TeraByte</title>
    
    <style>
    
    </style>


      <!-- Page loading scripts-->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
          const progressBar = document.querySelector(".progress-bar");
          
          let progress = 0;
          const interval = setInterval(function () {
            progress += 1; // Adjust the increment as needed
            progressBar.style.width = progress + "%";
            if (progress >= 100) {
              clearInterval(interval);
              setTimeout(function () {
                document.querySelector(".progress-container").style.display = "none";
              }, 200); // Adjust the delay as needed
            }
          }, 50); // Adjust the interval as needed
        });
    </script>
</head>

<body data-barba="wrapper">
    <!-- preloader start -->
    <div class="progress-container js-preloadr">
        <div class="progress-bar"></div>
    </div>
    <!-- preloader end -->
    
    
    <main class="main-content  " >
        
        <header data-anim="fade" data-add-bg="bg-dark-1" class="header -type-1 js-header pt-20 pb-20 mb-25" style="clear:right" >    
            <div class="container">
                <div class="row y-gap-15 justify-between items-center">
                    
                    <div class="col-auto">
                        <div class="header-left">
                            
                            <div class="header__logo ">
                                <a data-barba href="index.html">
                                    <img src="assets/img/general/logo.svg" alt="logo">
                                </a>
                            </div>
                            
                            
                            <div class="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none d-none">
                                <a href="#" class="d-flex items-center" data-el-toggle=".js-explore-toggle">
                                    <i class="icon icon-explore mr-15"></i>
                                    Explore
                                </a>
                                
                                <div class="explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle">
                                    
                                    
                                    
                                    <div class="explore__item">
                                        <a href="#" class="text-dark-1">Explore</a>
                                    </div>
                                    
                                    
                                    <div class="explore__item d-none">
                                        <a href="#" class="d-flex items-center justify-between text-dark-1">
                                            Design<div class="icon-chevron-right text-11"></div>
                                        </a>
                                        <div class="explore__subnav rounded-8">
                                            <a class="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a class="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a class="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a class="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a class="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a class="text-dark-1" href="courses-single-6.html">3D & Animation</a>
                                            <a class="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a class="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="explore__item">
                                        <a href="#" class="text-terabyte-1 underline">View All Courses</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    <div class="header-menu js-mobile-menu-toggle ">
                        <div class="header-menu__content">
                            <div class="mobile-bg js-mobile-bg"></div>
                            
                            <div class="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                                <a href="#" class="text-dark-1">Log in</a>
                                <a href="#" class="text-dark-1 ml-30">Sign Up</a>
                            </div>
                            
                            <div class="menu js-navList">
                                <ul class="menu__nav text-white -is-active">
                                    
                                    <li>
                                        <a data-barba href="#">Explore</a>
                                    </li>
                                    
                                    <li>
                                        <a data-barba href="#">Blog</a>
                                    </li>
                                    
                                    <li class="menu-item-has-children">
                                        <a data-barba href="#">
                                            Events <i class="icon-chevron-right text-13 ml-10"></i>
                                        </a>
                                        
                                        <ul class="subnav">
                                            <li class="menu__backButton js-nav-list-back">
                                                <a href="#"><i class="icon-chevron-left text-13 mr-10"></i> Events</a>
                                            </li>
                                            
                                            <li><a href="#">Event 1</a></li>
                                            
                                            
                                            
                                        </ul>
                                    </li>
                                    
                                    
                                    
                                    
                                </ul>
                            </div>
                            
                            <div class="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                                <div class="mobile-footer__number">
                                    <div class="text-17 fw-500 text-dark-1">Call us</div>
                                    <div class="text-17 fw-500 text-purple-1">800 388 80 90</div>
                                </div>
                                
                                <div class="lh-2 mt-10">
                                    <div>Lekki,<br> Lagos State, Nigeria.</div>
                                    <div>hi@terabyte.africa</div>
                                </div>
                                
                                <div class="mobile-socials mt-10">
                                    
                                    <a href="#" class="d-flex items-center justify-center rounded-full size-40">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    
                                    <a href="#" class="d-flex items-center justify-center rounded-full size-40">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    
                                    <a href="#" class="d-flex items-center justify-center rounded-full size-40">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    
                                    <a href="#" class="d-flex items-center justify-center rounded-full size-40">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
                            <div class="size-40 d-flex items-center justify-center rounded-full bg-white">
                                <div class="icon-close text-dark-1 text-16"></div>
                            </div>
                        </div>
                        
                        <div class="header-menu-bg"></div>
                    </div>
                    
                    
                    <div class="col-auto">
                        <div class="header-right d-flex items-center">
                            <div class="header-right__icons text-white d-flex items-center">
                                
                                <div class="">
                                    <button class="d-flex items-center text-white" data-el-toggle=".js-search-toggle">
                                        <i class="text-20 icon icon-search"></i>
                                    </button>
                                    
                                    <div class="toggle-element js-search-toggle">
                                        <div class="header-search pt-90 bg-white shadow-4">
                                            <div class="container">
                                                <div class="header-search__field">
                                                    <div class="icon icon-search text-dark-1"></div>
                                                    <input type="text" class="col-12 text-18 lh-12 text-dark-1 fw-500" placeholder="What do you want to learn?">
                                                    
                                                    <button class="d-flex items-center justify-center size-40 rounded-full bg-purple-3" data-el-toggle=".js-search-toggle">
                                                        <img src="assets/img/menus/close.svg" alt="icon">
                                                    </button>
                                                </div>
                                                
                                                <div class="header-search__content mt-30">
                                                    <div class="text-17 text-dark-1 fw-500">Popular Right Now</div>
                                                    
                                                    <div class="d-flex y-gap-5 flex-column mt-20">
                                                        <a href="#" class="text-dark-1">Popular Links</a>
                                                        
                                                    </div>
                                                    
                                                    <div class="mt-30">
                                                        <button class="uppercase underline">PRESS ENTER TO SEE ALL SEARCH RESULTS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="header-search__bg" data-el-toggle=".js-search-toggle"></div>
                                    </div>
                                </div>
                                
                                
                                <div class="relative ml-30 xl:ml-20 d-none">
                                    <button class="d-flex items-center text-white" data-el-toggle=".js-cart-toggle">
                                        <i class="text-20 icon icon-basket"></i>
                                    </button>
                                    
                                    <div class="toggle-element js-cart-toggle">
                                        <div class="header-cart bg-white -dark-bg-dark-1 rounded-8">
                                            <div class="px-30 pt-30 pb-10">
                                                
                                                <div class="row justify-between x-gap-40 pb-20">
                                                    <div class="col">
                                                        <div class="row x-gap-10 y-gap-10">
                                                            <div class="col-auto">
                                                                <img src="assets/img/menus/cart/1.png" alt="image">
                                                            </div>
                                                            
                                                            <div class="col">
                                                                <div class="text-dark-1 lh-15">The Ultimate Drawing Course Beginner to Advanced...</div>
                                                                
                                                                <div class="d-flex items-center mt-10">
                                                                    <div class="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                                                    <div class="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-auto">
                                                        <button><img src="assets/img/menus/close.svg" alt="icon"></button>
                                                    </div>
                                                </div>
                                                
                                                <div class="row justify-between x-gap-40 pb-20">
                                                    <div class="col">
                                                        <div class="row x-gap-10 y-gap-10">
                                                            <div class="col-auto">
                                                                <img src="assets/img/menus/cart/2.png" alt="image">
                                                            </div>
                                                            
                                                            <div class="col">
                                                                <div class="text-dark-1 lh-15">User Experience Design Essentials - Adobe XD UI UX...</div>
                                                                
                                                                <div class="d-flex items-center mt-10">
                                                                    <div class="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                                                    <div class="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-auto">
                                                        <button><img src="assets/img/menus/close.svg" alt="icon"></button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            <div class="px-30 pt-20 pb-30 border-top-light">
                                                <div class="d-flex justify-between">
                                                    <div class="text-18 lh-12 text-dark-1 fw-500">Total:</div>
                                                    <div class="text-18 lh-12 text-dark-1 fw-500">$659</div>
                                                </div>
                                                
                                                <div class="row x-gap-20 y-gap-10 pt-30">
                                                    <div class="col-sm-6">
                                                        <button class="button py-20 -dark-1 text-white -dark-button-white col-12">View Cart</button>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <button class="button py-20 -purple-1 text-white col-12">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="d-none xl:d-block ml-20">
                                    <button class="text-white items-center" data-el-toggle=".js-mobile-menu-toggle">
                                        <i class="text-11 icon icon-mobile-menu"></i>
                                    </button>
                                </div>
                                
                            </div>
                            
                            <div class="header-right__buttons d-flex items-center ml-30 md:d-none">
                                <a href="#" class="button -underline text-white">Log in</a>
                                <a href="#" class="button -sm -white text-dark-1 ml-30">Sign up</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
        
        
        <!-- <div class="content-wrapper  js-content-wrapper" ></div> -->