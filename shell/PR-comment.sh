#!/bin/bash
#if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
   # hey that's a pull request
   curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d "{\"body\": \"Build success! 👍\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"

    echo "PR success!"
#fi