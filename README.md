# CodePamoja Personal Sprint

This is the example personal sprint repo for all developers inside the CodePamoja program

## How to use
For every story you create a new branch so we can handle code-review more easy. After finishing a user-story, make a Pull-request from your branch to your master branch.

Make a new folder for every new project you work on.


## How to use Gulp & Travis-CI

The main purpose of these files is to make the feedback loop of your work as smooth as possible. You can use Gulp to lint your CSS and JavaScript.

It's also created to do automatic linting when you connected your repository to [Travis-CI](https://travis-ci.org). When connected Gulp will automaticcly be started when you create a Pull-request.

## Connect your Github Repo to Travis-CI

1. Go to [Travis-CI](https://travis-ci.org) website and sign-up with your Github Account.
2. After the sign-up process, go to *profile settings*
3. Find your repo and turn on the switch.
4. Now Travis-CI will detect any push and pull-requests and run Gulp.
5. In order to get a comment on your PR when the linting was a succes, create a *Personal access token* on Github.
6. Go to Github, click on your avatar -> settings -> Developer settings -> Personal access token. Create a token and check the box *public_repo* and create the token.
7. Copy the token and go to your repo on Travis-CI, click on the right *More options*, scroll down to *Environment Variables* and create a new one. Name: GITHUB_TOKEN, Value: <your-token>
8. Now you get a success comment on your PR when all the JavaScript and CSS is good by the linters.


## Questions?
Please ask Raymon 🤓
