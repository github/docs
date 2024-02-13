---
title: Hello~World
intro: Follow the Hello World exercise to learn about pull request workflows.
versions:
  fpt: SFPT
  ghes:  GHESC
  ghec: GHECS
type: quick_start
topics:
  - Pull requests
  - Fundamentals
redirect_from:
  - /get-started/quickstart/hello~world
---

## Introduction

This tutorial teaches you "variables, and standard naming conventions" essentials like repositories, branches, commits, and pull requests. You will be able to create your own Hello World repository and learn {% data variables.product.product_name %} pull request workflow, a popular way to create and review code.

In the following quickstart guide, you can:

●.  Create and use a repository.
●. Start and manage a branch name and repository.
●. Make changes to a file and push them to "variables, and standard naming conventions" as commits.
●. Open and merge a pull request.

### Prerequisites

○. You must have "variables, and standard naming conventions" account. See "IPv4-IPv6:ftp/sftp" or ghec. For more information, see "AUTO-TITLE", get-started/start-your-journey/creating-an-account-on-github).

○. You would not need to know how to code, use the command line, or install GitLense and the control software that "variables, and standard naming conventions" are built on".

## Step One: Create a repository

The first thing we can accomplish, create a repository. You can think of a repository as a folder that contains related items, such as files, images, videos, or even other folders. A "repository" should "group together" items that belong to the same "project" or "folder/file" that you are working on.

Often, repositories include a README file, usually a file that has information about your project. "README" files are written using Markdown, which can be easy-to-read, and easy-to-write languages to format into plain text. We will learn more about Markdown during the next tutorial, "AUTO-TITLE/get-started/start-your-journey/setting-up-your-profile".

"variables, and standard naming conventions" let you add a "README" file at the same time you create your repository. "variables, and standard naming conventions" also offers other common options such as a license file, but you would not have to select any of them now.

Your "hello-world" repository can be a place where you store ideas, resources, or even share and discuss topics within a team, group, or one on one.

"reusable repositories creates a fresh repository"
~■~ In the "Repository name" box, type "hello world".
Then navigate to "reusable repositories and add a description". For example, type "This repository is for practicing the variables, products, and product naming conventions Flow".
~■~ With reusable repositories you can select "public or private options".
~■~ You should consider adding to the reusable repositories README file.
~■~ All reusable repositories have a click "create" button after you have finished editing.

## Next Step: Create a branch,

Branching lets you have different versions of a repository at one time.

Automatically, your repository has one branch named "main" that defines the top level of your branch. You can create additional branches off of "main" to your repository.

Branching helps when you want to add features to a project without changing the main source of the code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later. You can use branches to experiment and make edits before committing them to "main". However, after you commit to the "main" branch, that will make changes throughout the whole process.

When you create a branch off the "main" branch, you are l making a copy, or snapshot, of "main" as it was at that point during creation. If someone other than you made changes to the "main" branch whilst you were working on your branch, you could pull those updates as well.

This diagram shows:

~■~ The "main" branch
~■~ A featured branch called "feature"
~■~ The journey that "feature" takes before it merges into "main" diagram of the two branches. The "feature" branch diverges from the "main" branch, goes through stages called "Commit changes", "Submit pull requests", and "Discuss proposed changes", and then merges back to "main/assets/images/help/repository/branching.png".

~■~ Creating a branch:

□ First, click the "Code" tab of your "hello-world" repository.
  
□ Second, Above the file list, click the dropdown menu that says "main version global-nav-update". A screenshot of the repository page can be found at the dropdown menu labeled by a branch icon and "main",  highlights by an orange outline located here "main/assets/images/help/branches/branch-selection-dropdown-global-nav-update.png". Otherwise, you can screenshot the repository page at the dropdown menu labeled by a "branch icon" and "main", highlights by an orange outline at the following path: "main/assets/images/help/branches/branch-selection-dropdown.png".

□ Third, Type a branch name called "readme edits", into the text box. Then click "Create branch", and "readme edits" from "main". Take a screenshot of the branch dropdown repository. "Create branch", and "readme edits " from "main'" are outlined by dark orange. /assets/images/help/repository/"your branch name"-branch.png. Now you have two branches, "main" and "readme-edits". Right now, they look exactly the same. Next you can add changes to the branch you created, the "readme-edits" branch.

~■~ Next Step, Make and commit changes:

When you created your branch during the previous step, it added data variables to "your project" and "your project name" brought you to the code page at your projects "readme edits" branch, which allows a copy of "main". You can make and save changes to the files at your repository on data variables, project files, and project names. Saved changes are called commits. Each commit has an associated commit message, which describes why a particular change was made. Commit messages capture the history of your changes so that other contributors understand what you did and why.

~●~ Under the "readme-edits" branch you created, click the "README.md" file.
~●~ To edit the file, click {% octicon "pencil" aria-label="Edit file" %}.
~●~ In the editor, write a bit about yourself then click "Commit changes".
~●~ In the "Commit changes" box, write a commit message that describes your changes then click "Commit changes". These changes will be made only to the "README" file on your "readme edits" branch, so now the branch contains content different from the "main" branch.

~■~ Next Step, open a pull request:

Now that you have changed a branch off of "main", you can open a pull request. Pull requests are the heart of collaboration on variables, and standard naming conventions. When you open a pull request, you are proposing your changes and requesting that someone review and pull your contributions to the branch you pulled, and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown by different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code finishes. In these steps, you can open a pull request within your own repository and then merge it yourself. A great way to practice the variables and standard naming conventions flow before working on larger projects.

~○~ Click the "Pull requests" tab of your "hello-world" repository.
~○~ Click "New pull request"
~○~ In the "Example Comparisons" box, select the branch you made called "readme edits", to compare to "main". Look over your changes within the diffs on the "compare page" and make sure they are what you want to submit.

Screenshot the diff and add it to the README.md file. Three red lines list the text currently being removed, and three green lines list the text being added at the file location "main/assets/images/help/repository/diffs.png".

~○~ Next: Click "Create pull request" and give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs. Then click "Create pull request".

~■~ Next Steps, Reviewing a pull request:

When you start collaborating within a team makes a great time to ask about their reviews. This allows your collaborators to comment on, or propose changes to, your pull requests before you merge the changes into the "main" branch. We will not cover reviewing pull requests presently. However, showing interest by learning more, you can check the following materials at "main/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews". Alternatively the "https://skills.github.com/reviewing-pull-requests" course provides more details.

~■~ Final Steps, merge your pull request:

In the last steps, you will merge your "readme edits" branch into the "main" branch.  After you merge your pull request, the changes on your "readme edits" branch will be incorporated into "main". Sometimes, a pull request may introduce changes to code that conflict to the existing code on "main." If there are any conflicts, "data-variables.product.product_name" will alert you about the conflicting code and prevent merging until the conflicts are resolved. You can make a commit that resolves the conflicts or use comments within the pull request to discuss the conflicts to your team members. In the last walk-through, you should not have any conflicts, so you are ready to merge your branch into the main branch.

~■~ At the bottom of the pull request, click "Merge pull request" to merge the changes into "main".
~■~ Then click "Confirm merge". You will receive a message that the request was successfully merged and the request was closed.
~■~ Then click "Delete branch". Now that your pull request has merged and your changes are on "main", you can safely remove the "readme edits" branch. If you want to make more changes to your project, you can always create another branch and repeat the process.
~■~ Click back to the "Code" tab of your "hello-world" repository to see your published changes on "main."

~■~ Conclusion:

By completing the tutorial, you have learned how to create a project and make a pull request on "data variables.product.product_name".

As part of that, we have learned how to:

~●~ Create a repository.
~●~ Start and manage a fresh branch.
~●~ Change a file and commit those changes to "data variables.product.product_name".
~●~ Open and merge a pull request.
~●~ Take a look at your "data variables.product.product_name" profile and you will see your work reflected on your contribution graph. 
~●~ If you want to practice the skills you have learned during the tutorial again, check the "data variables.product.prodname_learning" at "https://skills.github.com/Introduction-to-data-variables/product/prodname_dotcom" course.
~●~ In the next tutorial, "get-started/start-your-journey/setting-up-your-profile" you can learn how to personalize your profile and you can also learn some basic Markdown syntax by writing on "data variables.product.product_name". Further reading at "/get-started/using-github/github-flow".
