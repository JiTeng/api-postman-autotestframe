# APItest
postman+nodejs+newman+jenkins
# jenkins settings
rd /S /Q api-postman-autotestframe

call git clone https://github.com/JiTeng/api-postman-autotestframe.git

cd api-postman-autotestframe

call npm init -y

call npm install newman nodemailer newman-reporter-html

call node .\APISmokeTest.js password

exit 0
# contact
If you have any question, send me email to 844563792@qq.com

