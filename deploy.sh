#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'kitenmettim.nl' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are dploying to https://ilya-pi.github.io/kiten-met-tim
git push -f git@github.com:ilya-pi/kiten-met-tim.git master:gh-pages

cd -
