<?php
// session_start ();
// require_once '../../../common/dbaccess.php';

// $db = new DB ();

// $username = $_GET['username'];
// $password = $_GET['password'];

// $sql = "select * from t_hs_employee where FNumber = '{$username}' and FPwd = '{$password}'";
// //echo $sql;die;
// $result= $db->getrow ( $sql );
// $status = 0;
// if(empty($result)){
//    $status = -1;
//    $arr['status'] = $status;
// }else{
//    $status = 1;
//    $arr['status'] = $status;
//    $arr['username']=$result['FName'];
//    $_SESSION['user']['number'] = $result['FNumber'];
//    $_SESSION['user']['name'] = $result['FName'];
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

// }

$arr;
$arr['username']='lio';
$arr['password']=123;

echo json_encode ( $arr );



?>