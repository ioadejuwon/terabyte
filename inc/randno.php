<?php

include_once "config.php";




$j=10; //File renaming unique
$k=10; //Unique ID for new accounts 
$l=20; //Prod ID for products
$m=15; //File renaming unique
$n=5; //File renaming
$p=10; //File renaming
$r=4; //for ref_id


function getName($n) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
 
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
 
    return $randomString;
}

$uid = getName($n);
$unique_id = getName($k);