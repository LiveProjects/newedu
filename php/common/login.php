<?php
session_start ();
require_once '../../php/db_mysql/dbaccess.php';
// error_reporting(0);
$db = new DB ();

$username = 'lio';
$password = 123;

$sql = "select * from login where username = '{$username}' and password = '{$password}'";
// echo $sql;die;
$result= $db->getrow ( $sql );

$status = 0;
if(empty($result)){
   $status = -1;
   $arr['status'] = $status;
}else{
   $status = 1;
   $arr['status'] = $status;
   $arr['username']=$result['username'];
   $_SESSION['user']['number'] = $result['password'];
//    $_SESSION['user']['name'] = $result['username'];
//    $_SESSION['user']['companyID'] = $result['FCompanyID'];
//    $_SESSION['user']['sectionID'] = $result['FSectionID'];
   
//    $sql = "select a.FName, b.FName,c.FName from t_hs_employee as a inner join t_hs_company as b on a.FCompanyID = b.FID inner join 
// 	  t_hs_section as c on a.FSectionID = c.FID where a.FNumber = '".$username."'";
// 	 //echo "sql:".$sql;
//    $result = $db->get_num_row ( $sql );
//    if(!empty($result)){
//      $_SESSION['user']['companyname'] = $result[1];
//      $_SESSION['user']['sectionname'] = $result[2];
   
//    }

}
echo $status;


?>