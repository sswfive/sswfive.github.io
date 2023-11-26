#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'eryajf.net' > CNAME

# cat CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=https://sswfive:${GITHUB_TOKEN}@github.com/sswfive/sswfive.github.io.git
  git config --global user.name "sswfive"
  git config --global user.email "sswss5@aliyun.com"
else
  Date=`date '+%Y%m%d%H%M%S'`
  echo $Date
  msg='GitHub Actions Deploy'
  githubUrl=https://sswfive:${GITHUB_TOKEN}@github.com/sswfive/sswfive.github.io.git
  git config --global user.name "sswfive"
  git config --global user.email "sswss5@aliyun.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist