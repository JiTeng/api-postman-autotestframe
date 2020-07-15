# APItest
postman+nodejs+newman+jenkins
# jenkins settings
git clone https://github.com/JiTeng/api-postman-autotestframe.git

cd api-postman-autotestframe

git pull

call npm init -y

call npm install newman nodemailer newman-reporter-html http

call node .\APISmokeTest.js emailpassword smspassword

exit 0
