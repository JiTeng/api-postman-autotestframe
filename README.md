# APItest
安装nodejs
安装newman
# jenkins配置：
cd C:\Users\jiteng\.jenkins\workspace\newman

rd /S /Q C:\Users\jiteng\.jenkins\workspace\newman\cloudchainAPItest

call git clone http://git.inspur.com/jiteng/cloudchainAPItest.git

cd C:\Users\jiteng\.jenkins\workspace\newman\cloudchainAPItest

call node .\APISmokeTest.js

exit 0
