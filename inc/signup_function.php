<?php
include_once 'config.php';
include_once 'drc.php';
include_once 'randno.php';
session_start();

$error = null;

if(isset($_POST['submit'])){
    if($_POST['fname'] == '' OR $_POST['lname'] == '' OR $_POST['email'] == '' OR $_POST['pword'] == '' OR $_POST['cword'] == '' ){
        $error = "Please fill all the inputs with your details";
    } else {
        $email = trim($_POST['email']); //Get Email
        $fname = trim($_POST['fname']); //Get First Name
        $lname = trim($_POST['lname']); //Get Last Name
        $pword = $_POST['pword'];
        $cword = $_POST['cword'];
        $pwordhash = password_hash($pword, PASSWORD_BCRYPT); // Encrypt Password 
        $ref_idd = $fname.'-'.$rf_id;
        $ref_id = str_replace(' ','', $ref_idd);
        $reffered_by = $_POST['reffered_by'];
        $fullname = $fname. ' '. $lname;
        

        // $sql_ref = "SELECT ref_id FROM users WHERE ref_id = ?";
        // $stmt_ref = mysqli_prepare($conn, $sql_ref);
        // mysqli_stmt_bind_param($stmt_ref, "s", $reffered_by); // Bind the parameter to the placeholder
        // mysqli_stmt_execute($stmt_ref); // Execute the query
        // mysqli_stmt_bind_result($stmt_ref, $resultReffered); // Bind the result variable
        // mysqli_stmt_fetch($stmt_ref); // Fetch the result
        
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Validate Email Address
            $sql = "SELECT email FROM users WHERE email = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $email); // Bind the parameter to the placeholder
            mysqli_stmt_execute($stmt); // Execute the query
            mysqli_stmt_bind_result($stmt, $resultEmail); // Bind the result variable
            mysqli_stmt_fetch($stmt); // Fetch the result

            
            if ($resultEmail) { // Check if the email exists
                $error = "Looks like '".$email."' already exists. Please, try to <a href='https://web.martville.app/login'>log in</a>?"; // Email already exists in the database
                session_destroy();
            } elseif($cword != $pword){
                $error =  "Password is not the same as Confirm Password!";
                session_destroy();
            }else{
                if (!empty($reffered_by)) {
                    $sql_ref = "SELECT ref_id FROM users WHERE ref_id = ?";
                    $stmt_ref = mysqli_prepare($conn, $sql_ref);
                    mysqli_stmt_bind_param($stmt_ref, "s", $reffered_by); // Bind the parameter to the placeholder
                    mysqli_stmt_execute($stmt_ref); // Execute the query
                    mysqli_stmt_bind_result($stmt_ref, $resultReferred); // Bind the result variable
                    mysqli_stmt_fetch($stmt_ref); // Fetch the result
            
                    echo "I got herre 2";
                    if (!$resultReferred) {
                        echo "I got herre 1";
                        $error = "Looks like your Referral Code '".$reffered_by."' is invalid. Please, check again"; // Referral code is invalid
                        
                        session_destroy();
                    }else{
                        mysqli_stmt_close($stmt_ref); // Close the statement before opening another one
                        echo "I got herre 3";
                        $insert = "INSERT INTO users (unique_id, fname, lname, email, ref_id, verify, pwordhash) VALUES (?, ?, ?, ?, ?, 0, ?)";
                        $stmt = mysqli_prepare($conn, $insert); // Prepare the SQL statement
                        mysqli_stmt_bind_param($stmt, "ssssss", $unique_id, $fname, $lname, $email, $ref_id, $pwordhash); // Bind values to the placeholders

                        echo "I inserted into users";
                        if (mysqli_stmt_execute($stmt)) {
                            mysqli_stmt_close($stmt); // Close the statement before opening another one

                            $insert_ref = "INSERT INTO referrals (unique_id, fullname, reffered_by, subscribed) VALUES (?, ?, ?, 0)";
                            $stmt_ref = mysqli_prepare($conn, $insert_ref); // Prepare the SQL statement
                            mysqli_stmt_bind_param($stmt_ref, "sss", $unique_id, $fullname, $reffered_by); // Bind values to the placeholders

                            if (mysqli_stmt_execute($stmt_ref)) {
                                mysqli_stmt_close($stmt_ref); // Close the statement before opening another one

                                echo "I inserted into referrals";
                                $_SESSION['unique_id'] = $unique_id;
                                header("location: store-registration");
                                exit();
                            } else {
                                $error =  "There is an error with one of your inputs!"; // Send an "error" response if the insertion fails
                                session_destroy();
                            }
                        } else {
                            $error =  "There is an error with one of your inputs!"; // Send an "error" response if the insertion fails
                            session_destroy();
                        }
                    }
                }else{
                    $insert = "INSERT INTO users (unique_id, fname, lname, email, ref_id, verify, pwordhash) VALUES (?, ?, ?, ?, ?, 0, ?)";
                    $stmt = mysqli_prepare($conn, $insert); // Prepare the SQL statement
                    mysqli_stmt_bind_param($stmt, "ssssss", $unique_id, $fname, $lname, $email, $ref_id, $pwordhash); // Bind values to the placeholders

                    echo "I inserted into users";
                    if (mysqli_stmt_execute($stmt)) {
                        mysqli_stmt_close($stmt); // Close the statement before opening another one
                        $_SESSION['unique_id'] = $unique_id;
                        header("location: store-registration");
                        exit();
                    } else {
                        $error =  "There is an error with one of your inputs!"; // Send an "error" response if the insertion fails
                        session_destroy();
                    }
                }
                // mysqli_stmt_close($stmt); // Close the statement before opening another one
            }
        }else{
            $error = "Invalid Email address";
            session_destroy();
        } 
    }             
}else{
    // redirect to dashboard if in session (signed in)
    // if(isset($_SESSION['unique_id'])){
    //     header("location: dashboard");
    //   }
}



if(isset($_POST['storesetup'])){
    if($_POST['brand_name'] == '' OR $_POST['brand_info'] == '' OR $_POST['brand_category'] == '' OR $_POST['country'] == '' OR $_POST['countryCode'] == '' OR $_POST['phoneNumber'] == '' ){
        $error = "Please fill all the inputs with your details";
    } else {
        $brand_name = htmlspecialchars($_POST['brand_name']); //Get Brand name
        $brand_info = htmlspecialchars($_POST['brand_info']); //Send Brand Info
        $brand_category = $_POST['brand_category'];
        $country = $_POST['country']; //Get Country
        $countryCode = (int)$_POST['countryCode'];
        $phoneNumber = (int)$_POST['phoneNumber'];
        
        $phonedetails = $countryCode.$phoneNumber;
        $biz_url = $domainstore.$biz_id;

        $merchantwhatsapp = 'https://api.whatsapp.com/send?phone='.$phonedetails.'&text=I+would+like+to+make+enquires+about+your+business.';

        $enqmessage = 'I would like to make enquires about your business.';
        $brand_pic = 'brand-dp/default.png';
        $brand_hero = 'brand-hero/default.jpg';
        $unique_id = $_SESSION['unique_id'];
        $plan = 'Basic';

        $sql = "SELECT email, fname FROM users WHERE unique_id = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $unique_id);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt,$resultEmail, $fname);
        mysqli_stmt_fetch($stmt);

        if($resultEmail){
            mysqli_stmt_close($stmt); // Close the statement before opening another one

            $insert_merchant = "INSERT INTO merchants (unique_id, email, biz_id, brand_name, brand_info, brand_category, storeurl,merchantwhatsapp,enqmessage,bizcountrycode,bizphonenumber,phonedetails,brand_hero,brand_pic,store_address) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = mysqli_prepare($conn, $insert_merchant); // Prepare the SQL statement
            mysqli_stmt_bind_param($stmt, "sssssssssiissss", $unique_id, $resultEmail, $biz_id, $brand_name, $brand_info, $brand_category, $biz_url,$merchantwhatsapp, $enqmessage, $countryCode,$phoneNumber, $phonedetails,$brand_hero,$brand_pic, $country); // Bind values to the placeholders
            
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_close($stmt); // Close the statement before opening another one

                $insert_storedata = "INSERT INTO storedata (unique_id, biz_id, storeurl,merchantwhatsapp) VALUES (?, ?, ?, ?)";
                $stmt = mysqli_prepare($conn, $insert_storedata); // Prepare the SQL statement
                mysqli_stmt_bind_param($stmt, "ssss", $unique_id, $biz_id, $biz_url,$merchantwhatsapp); // Bind values to the placeholders
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_close($stmt); // Close the statement before opening another one

                    $updateusers = "UPDATE users SET  countryCode = ?, phoneNo = ? WHERE unique_id = ?";
                    
                    $stmt = mysqli_prepare($conn, $updateusers); // Prepare the SQL statement
                    mysqli_stmt_bind_param($stmt, "iss", $countryCode, $phoneNumber, $unique_id); // Bind values to the placeholders
                    mysqli_stmt_execute($stmt); // Execute the prepared statement

                    if (mysqli_stmt_affected_rows($stmt) > 0) {
                        mysqli_stmt_close($stmt); // Close the prepared statement
                        // The update was successful
                        echo "User information updated successfully.";
                        $insert_plans = "INSERT INTO plans (unique_id, biz_id, plan) VALUES (?, ?, ?)";
                        $stmt = mysqli_prepare($conn, $insert_plans); // Prepare the SQL statement
                        mysqli_stmt_bind_param($stmt, "sss", $unique_id, $biz_id, $plan); // Bind values to the placeholders
                        if(mysqli_stmt_execute($stmt)){
                            mysqli_stmt_close($stmt); // Close the statement before opening another one
                            
                            //Send email to client
                            $to = $resultEmail; // Vendor's email address

                            $subject = "🔥 Welcome to Terabyte!";
                            $year = date("Y"); 

                            $message ='
                                <html>
                                    <head>
                                        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
                                    </head>
                                    <body style="margin: 0; padding: 0; font-family: \'Poppins\', sans-serif; min-height: 100vh; background: #EBFAFA;">
                                        <center>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #EBFAFA;">
                                                <tr>
                                                    <td align="center">
                                                        <table width="690" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="padding: 35px;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td style="border-radius: 8px;" bgcolor="#ffffff">
                                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                <tr>
                                                                                                    <td align="center" style=" padding: 0px 0px 16px;" >
                                                                                                            <img src="https://web.martville.app/email/img/logomail.png" alt="" border="0"/>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                <tr>
                                                                                                    <td style="font-size:17px; line-height:40px; font-weight: bold; color:#2D3436; min-width:auto !important; text-align:center; letter-spacing: -0.02em; padding-bottom: 16px;">
                                                                                                        Hello '.$fname.', Welcome to MartVille!
                                                                                                    </td>
                                                                                                </tr>
                
                                                                                                <tr>
                                                                                                    <td style="bfont-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding-bottom: 32px; padding-top: 20px;">
                                                                                                        You\'re in. We\'re excited to have you onboard and help you successfully establish your online presence!
                                                                                                        <br/><br/>
                                                                                                        Your store - '.$brand_name.', is now live on MartVille.
                                                                                                    </td>
                                                                                                </tr>
                
                
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                                                                            <tr>
                                                                                                                <td style=" font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding: 30px 25px 32px;">
                                                                                                                    First things first, let\s verify your email address.
                                                                                                                    <br/><br/>
                                                                                                                    Please click on the button below to verify your email address.
                                                                                                                    <a href="https://web.martville.app/verify?'.$unique_id.'" target="_blank" style="color:#ffffff; background: #013B43; border: 1px solid #013B43; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                                                                        Verify Email
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            
                                                                                                            <tr>
                                                                                                                <td style=" font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding: 30px 25px 32px;">
                                                                                                                    Add products to your store, click on the button.
                                                                                                                    <br/><br/>
                                                                                                                    <a href="https://web.martville.app/inventory/create" target="_blank" style="color:#ffffff; background: #013B43; border: 1px solid #013B43; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                                                                        Add Products to Store
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
            
                                                                                                            <tr>
                                                                                                                <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding: 0 25px 32px;">
                                                                                                                    To create short WhatsApp links, click on the button below.
                                                                                                                    <br/><br/>
                                                                                                                    <a href="https://web.martville.app/create" target="_blank" style="color:#ffffff; background: #013B43; border: 1px solid #013B43; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                                                                        Create WhatsApp Links
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
                    
                                                                                                            <tr>
                                                                                                                <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding: 0 25px 32px;">
                                                                                                                    To learn more about the cool things you can do with MartVille, Click on the link below.
                                                                                                                    <br/><br/>
                                                                                                                    <a href="https://martville.app/blog" target="_blank" style="color:#ffffff; background: #013B43; border: 1px solid #013B43; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                                                                        Read more
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
            
                                                                                                            <tr>
                                                                                                                <td style="font-size:14px; color:#636E72; min-width:auto !important; line-height: 20px; text-align:center; padding: 0 25px 32px;">
                                                                                                                    If you have any issues, please reach out to our support team.
                                                                                                                    <br/><br/>
                                                                                                                    <a href="mailto:hello@martville.app" target="_blank" style="color:#ffffff; background: #013B43; border: 1px solid #013B43; border-radius:8px; display: inline-block; margin-top: 8px; padding: 12px 22px; text-decoration:none;">
                                                                                                                        Contact Support
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>    
                
                
                                                                                                <tr>
                                                                                                    <td style="font-size:12px; color:#B2BEC3; min-width:auto !important; line-height: 12px; text-align:center; padding-top: 42px;">
                                                                                                        Copyright '.$year.'
                                                                                                        <a href="https://martville.app" target="_blank" style="text-decoration:none; color:#FCB514;">MartVille</a>
                                                                                                        All rights reserved.
                                                                                                    </td>
                                                                                                </tr>
                                                                                            
                
                                                                                                <tr>
                                                                                                    <td style="min-width:auto !important; text-align:center; padding-top: 22px; padding-bottom:32px;">
                                                                                                        <a href="https://instagram.com/usemartville" target="_blank" style="text-decoration:none;">
                                                                                                            <img src="https://web.martville.app/email/img/ig.png" width="20" height="20" border="0" alt="Instagram"/>
                                                                                                        </a>
                                                                                                        <a href="https://wa.me/2348108806808" target="_blank" style="text-decoration:none; margin-left: 32px;">
                                                                                                            <img src="https://web.martville.app/email/img/wa.png" width="20" height="20" border="0" alt="Whatsapp"/>
                                                                                                        </a>
                                                        
                                                                                                        <a href="https://twitter.com/usemartville" target="_blank" style="text-decoration:none; margin-left: 32px;">
                                                                                                            <img src="https://web.martville.app/email/img/x.png" width="20" height="20" border="0" alt="Twitter"/>
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </center>
                                    </body>
                                </html>
                            ';
                            
                            
                
                            $from = "MartVille <noreply@martville.app>";
                            $replyTo = "hello@martville.app";
                
                            $headers = "From: $from\r\n";
                            $headers .= "Reply-To: $replyTo\r\n";
                            $headers .= "Content-type: text/html\r\n";

                            $mail_sent = mail($to, $subject, $message, $headers); //Maill sent to vendor
                        
                            if($mail_sent){
                                echo "Mail sentt2";
                                $_SESSION['unique_id'] = $unique_id;
                                header("location: dashboard");
                            }


                            
                        }
                    }
                }
            }
        }else{
            $error =  "Could not find you.";
        }
    }             
    
}else{
   
}

