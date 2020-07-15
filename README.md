# APItest
postman+nodejs+newman+jenkins
# jenkins settings
cd api-postman-autotestframe

git pull

call npm init -y

call npm install newman nodemailer newman-reporter-html http

call node .\APISmokeTest.js emailpassword smspassword

exit 0
