# Working in a codespace

This document describes how to use GitHub Codespaces for working on articles for docs.github.com.

## About GitHub Codespaces 

GitHub Codespaces allows you to work in a development environment that's hosted remotely from your machine. You can get started very quickly, with no need to set up the working environment, and without having to download files to your local computer.

**Note**: GitHub Codespaces is currently only available if you are a member of an organization using GitHub Team or GitHub Enterprise Cloud. 

For more information, see "[GitHub Codespaces overview](https://docs.github.com/en/codespaces/overview)."

## Work on documentation in a codespace

The steps described below assume you have GitHub Codespaces set up to edit files using Visual Studio Code for Web. The steps are very similar if you have configured a different editor. For more information, see "[Setting your default editor for GitHub Codespaces](https://docs.github.com/en/codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces)."

1. Go to the `docs` repository: [https://github.com/github/docs](https://github.com/github/docs).
1. If you're an open source contributor: [fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own organization.
1. [Create a branch to work on](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).
1. On the main page of the new `docs` repository, click the **Code** button and click **Create codespace on BRANCHNAME**.<br>
   The "Setting up your codespace" page is displayed. After a short time the browser-based version of Visual Studio Code is displayed.
1. Use the Explorer to navigate to the markdown file you want to edit. This will be located below the `content` directory. <br>
   In most cases, the path to the file, below the `content` directory, matches the path in URL, minus the `.md` file name extension. For example, the source for the article <code>https<span></span>://docs.github.com/en/**codespaces/getting-started/quickstart**</code> is the markdown file <code>content/**codespaces/getting-started/quickstart**.md</code>.
1. Edit the markdown file as required.
1. Save your changes.
1. Commit and push your changes, either using the "Source Control" view, or using Git commands from the Terminal. For more information, see "[About Git](https://docs.github.com/en/get-started/using-git/about-git)."
1. Go to the **Pull requests** tab of the `github/docs` repository: https://github.com/github/docs/pulls
1. Click **New pull request**.
1. If you're an open source contributor: click **compare across forks** and choose the forked repository you created, and your working branch.<br>
   Otherwise: change the "compare" branch to your working branch.
1. Check that the changes displayed include all of the changes you made in the codespace. If they do not, it indicates there are changes you have not pushed from the codespace to GitHub.
1. Click **Create pull request**.
1. Fill out the details for your pull request and click **Create pull request**.<br>
   Your pull request will be reviewed by a member of the GitHub documentation team.
