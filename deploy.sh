# 确保脚本抛出遇到的错误
set -e
# 建立git，并上传readme到master分支
git init
git add README.md
git commit -m 'init: project'
git branch -M master
git remote add origin "{{gitAddress}}"
git push -u origin master


# 建立dev分别
git branch -M dev
git checkout dev
git push -u origin dev