# APItest
postman+nodejs+newman+jenkins
# jenkins settings
rd /S /Q cloudchainAPItest-release

call git clone https://github.com/JiTeng/api-postman-autotestframe.git

cd cloudchainAPItest-release

call node .\APISmokeTest.js ngeespzvnugjbcgb

exit 0
# contact
If you have any question, send me email to 844563792@qq.com

