# APItest
安装nodejs
安装newman
# jenkins配置：
cd C:\Users\.jenkins\workspace\newman

rd /S /Q C:\Users\.jenkins\workspace\newman\APItest

call git clone http://git.user.com/APItest.git

cd C:\Users\.jenkins\workspace\newman\APItest

call node .\APISmokeTest.js

exit 0
