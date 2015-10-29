<?php
header ( 'content-type:text/html;charset=utf-8' );
require_once '../../php/db_mysql/dbaccess.php';
// error_reporting(0);
session_start ();

if(empty($_GET['username'])&&empty($__GET['password'])){
	echo 2;//空值
}else{
	$db = new DB ();

	$call['username']=$_GET['username'];
	$call['password']=$_GET['password'];
	$call['sex']=1;
	$call['email']='237890221@qq.com';
	$call['pnumber']=15764225630;
	$call['imgpath']='1';
	$call['modify']=date ( 'Y-m-d H:i:s', time () );
	$call['createtime']=date ( 'Y-m-d H:i:s', time () );
// 	$call['version']=1;
// 	$call['character']='1';

	$res=$db->insert(login, $call);
	if($res){
		echo 1;//成功
	}else{
		echo 0;//失败
	}
}