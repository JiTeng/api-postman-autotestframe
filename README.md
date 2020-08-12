# APItest
postman+nodejs+newman+jenkins
# jenkins settings
@echo off

if not exist api-postman-autotestframe (

git clone https://github.com/JiTeng/api-postman-autotestframe.git
    
cd api-postman-autotestframe
    
call npm init -y
    
call npm install newman nodemailer newman-reporter-html http
    
) else (

cd api-postman-autotestframe
    
git pull
    
)

call node APISmokeTest.js password1 password2

exit 0
