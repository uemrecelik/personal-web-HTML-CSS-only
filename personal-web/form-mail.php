<?php


$to = "yourmail";
$_name = $_POST['name'];
$_email = $_POST['email'];   
$_msg = $_POST['message'];

echo $_name."  ".$_email."  ".$_msg."  ";


if(isset($_POST['message'])){

mail($to, "From" . $_email ."Website Contact form" , $_msg ,"From: $_email ");

echo "Submitted Succesfully Contact You As Soon As Possible ";

header('Refresh: 3; index.html');

}else{
    echo "Submisson Failed ";
}




?>
