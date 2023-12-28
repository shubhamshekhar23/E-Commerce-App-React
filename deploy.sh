#!/bin/bash

# Run build
npm run build

# Stage the dist directory
git add build -f

# Commit changes
git commit -am "deploying changes"

git push origin :gh-pages

# Push to gh-pages branch using git subtree
git subtree push --prefix build origin gh-pages