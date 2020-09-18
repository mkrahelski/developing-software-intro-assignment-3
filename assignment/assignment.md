[Return to Readme](../readme.md)

# Geralds Contracting Part III

This is the second assignment in a series of four assignments leading into your final.

## Table of Contents

[Getting Started](#getting-started)

[Boilerplate Readme](./boilerplate.md) - Original readme.md file of the starter template this package was written off of.

[Scenario](./scenario.md)

[Submission](#submission)

[Grading Your Application](#grading-your-application)

# Getting Started

  * Create a FORK of this repository. You will find the "FORK" button in the top right hand of any accessible repository. You want to FORK this repository to your github account.

     > If you would like a crash course on FORKING, here is a simple video (2m 29s): [Forking a GitHub Repository](https://www.youtube.com/watch?v=f5grYMXbAV0)

  * Create a CLONE of the FORKED repository on your local machine.

    > Take care not to clone inside another project folder!

  * Create a BRANCH called `development`.

  * CHECKOUT the `development` branch. This will be your working branch to commit and push for this assignment.

  * Install the npm dependencies

  * Run the application before changing anything to ensure your program runs.

# Working

  * While you're working on your assignment, make a commit for every problem you solve. This will help you identify where your application may have broken.

  * Ensure your commit messages are informative

# Submission

To submit your assignment:

  1. push your `development` branch to GITHUB
    
  > You may push your code to the `development` branch as many times as you like. This is good practice to do this at least once a day if you have any changes.

  2. In YOUR repository, create a pull request into YOUR `master` branch using GITHUB

  3. accept and merge your pull request into your `master` branch

  4. On GITHUB, from your repository, create a pull request into THIS respository

  5. Hand in your assignment on Teams. There is no file you need to send me, just mark it as handed in so I know you're ready for me to look at it.

# Grading Your Application

Read the [Marking Criteria](./marking-criteria.md) document to understand how these points will affect your assignment score.

In testing your work, I will be running these commands:

```
git clone git@github.com:[your github username]/developing-software-intro-assignment-3.git [your name]
```
This clones your repo. The extra parameter at the end changes the folder name it creates from the default `developing-software-intro-assignment-3` to `[your name]`.

```
cd [your name]

git checkout master
```
I will be checking out the master branch and reviewing your completed application there.

I will be following your instructions in the readme.md exactly in order to use your application.

## MAJOR Criteria

  - Project Management:
    - [ ] Did you create an informative Epic correctly?
    - [ ] Did you create complete and helpful stories?

  - Following Instructions
    - [ ] Did you complete all of Steve's instructions
    - [ ] Did you meet all of the needs Rosa identified?

  - Program
    - [ ] Did you use the input parameters
    - Did the application return the correct number of:
      - [ ] studs
      - [ ] plates
      - [ ] posts

  - Coding:
    - [ ] Is your application organized into functions
    - [ ] Did each function do one job
    - [ ] Was repetitive code moved into a function
    - [ ] Were variables declared properly
    - [ ] Did you add comments to your code
    - [ ] Was your code neat and easily readable

  - Documenation
    - [ ] Did the readme.md file make it easy to use your application
  

## MINOR Criteria

  - Version Control
    - [ ] Did you follow the git instructions in the Getting Started and Submission sections of this page
    - [ ] Do your commit messages explain the changes accurately and informatively
    - [ ] Did you make commits at approriate intervals?