# import time, MySQLdb, sys  

# conn=MySQLdb.connect(host="127.0.0.1",user="root",passwd="",db="newedu",charset="utf8")
# cursor = conn.cursor()

# # sql = "insert into login(name,age) values(%s,%s)"
# # param = ("tom",str(20))
# # n = cursor.execute(sql,param)
# # print n

# n = cursor.execute("select * from login")
# for row in cursor.fetchall():
# 	for r in row:
# 		print r
# print ""

# # sql = "delete from user where name=%s"
# # param =("ted")
# # n = cursor.execute(sql,param)
# # print n

# cursor.close()
# conn.close()
import MySQLdb

db = MySQLdb.connect(host="127.0.0.1", user="root", passwd="", db="newedu")
cursor = db.cursor()

cursor.execute("create table content(name char(8), age int)")