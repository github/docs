---
title: Creating your first repository using GitHub Desktop
shortTitle: Creating your first repository
intro: 'You can use {% data variables.product.prodname_desktop %} to create and manage a Git repository without using the command line.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### Introduction
{% data variables.product.prodname_desktop %} extends and simplifies your {% data variables.product.prodname_dotcom_the_website %} workflow, using a visual interface instead of text commands on the command line. By the end of this guide, you'll have used {% data variables.product.prodname_desktop %} to create a repository, make changes to the repository, and publish the changes to {% data variables.product.product_name %}.

After installing {% data variables.product.prodname_desktop %} and signing into {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} you can create and clone a tutorial repository. The tutorial will introduce the basics of working with Git and {% data variables.product.prodname_dotcom %}, including installing a text editor, creating a branch, making a commit, pushing to {% data variables.product.prodname_dotcom_the_website %}, and opening a pull request. The tutorial is available if you do not have any repositories on {% data variables.product.prodname_desktop %} yet.

We recommend completing the tutorial, but if you want to explore {% data variables.product.prodname_desktop %} by creating a new repository, this guide will walk you through using {% data variables.product.prodname_desktop %} to work on a Git repository.

### Part 1: Installing {% data variables.product.prodname_desktop %} and authenticating your account
You can install {% data variables.product.prodname_desktop %} on any supported operating system. After you install the app, you will need to sign in and authenticate your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} before you can create and clone a tutorial repository.

For more information on installing and authenticating, see "[Setting up {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)."

### Part 2: Creating a new repository
If you do not have any repositories associated with {% data variables.product.prodname_desktop %}, you will see a "Let's get started!" view, where you can choose to create and clone a tutorial repository, clone an existing repository from the Internet, create a new repository, or add an existing repository from your hard drive. ![The Let's get started! screen](/assets/images/help/desktop/lets-get-started.png)

#### Creating and cloning a tutorial repository
We recommend that you create and clone a tutorial repository as your first project to practice using {% data variables.product.prodname_desktop %}.

1. Click **Create a tutorial repository and clone it**. ![Create and clone a tutorial repository button](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Follow the prompts in the tutorial to install a text editor, create a branch, edit a file, make a commit, publish to {% data variables.product.prodname_dotcom %}, and open a pull request.

#### Creating a new repository
If you do not wish to create and clone a tutorial repository, you can create a new repository.

1. Click **Create a New Repository on your Hard Drive...**. ![Create a new repository](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Fill in the fields and select your preferred options. ![Create a repository options](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" defines the name of your repository both locally and on {% data variables.product.product_name %}.
   - "Description" is an optional field that you can use to provide more information about the purpose of your repository.
   - "Local path" sets the location of your repository on your computer. By default, {% data variables.product.prodname_desktop %} creates a _GitHub_ folder inside your _Documents_ folder to store your repositories, but you can choose any location on your computer. Your new repository will be a folder inside the chosen location. For example, if you name your repository `Tutorial`, a folder named _Tutorial_ is created inside the folder you selected for your local path. {% data variables.product.prodname_desktop %} remembers your chosen location the next time you create or clone a new repository.
   - **Initialize this repository with a README** creates an initial commit with a _README.md_ file. READMEs helps people understand the purpose of your project, so we recommend selecting this and filling it out with helpful information. When someone visits your repository on {% data variables.product.product_name %}, the README is the first thing they'll see as they learn about your project. For more information, see "[About READMEs](/articles/about-readmes)."
   - The **Git ignore** drop-down menu lets you add a custom file to ignore specific files in your local repository that you don't want to store in version control. If there's a specific language or framework that you'll be using, you can select an option from the available list. If you're just getting started, feel free to skip this selection. For more information, see "[Ignoring files](/github/getting-started-with-github/ignoring-files)."
   - The **License** drop-down menu lets you add an open-source license to a _LICENSE_ file in your repository. You don't need to worry about adding a license right away. For more information about available open-source licenses and how to add them to your repository, see "[Licensing a repository](/articles/licensing-a-repository)."
3. Click **Create repository**.

### Part 3: Exploring {% data variables.product.prodname_desktop %}
In the file menu at the top of the screen, you can access settings and actions that you can perform in {% data variables.product.prodname_desktop %}. Most actions also have keyboard shortcuts to help you work more efficiently. For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

#### The {% data variables.product.prodname_desktop %} menu bar
At the top of the {% data variables.product.prodname_desktop %} app, you will see a bar that shows the current state of your repository.
  - **Current repository** shows the name of the repository you're working on. You can click **Current repository** to switch to a different repository in {% data variables.product.prodname_desktop %}.
  - **Current branch** shows the name of the branch you're working on. You can click **Current branch** to view all the branches in your repository, switch to a different branch, or create a new branch. Once you create pull requests in your repository, you can also view these by clicking on **Current branch**.
  - **Publish repository** appears because you haven't published your repository to {% data variables.product.product_name %} yet, which you'll do later in the next step. This section of the bar will change based on the status of your current branch and repository. Different context dependent actions will be available that let you exchange data between your local and remote repositories.

  ![Explore GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Changes and History
In the left sidebar, you'll find the **Changes** and **History** views. ![The Changes and History tabs](/assets/images/help/desktop/changes-and-history.png)

  - The **Changes** view shows changes you've made to files in your current branch but haven't committed to your local repository. At the bottom, there is a box with "Summary" and "Description" text boxes and a **Commit to BRANCH** button. This is where you'll commit new changes. The **Commit to BRANCH** button is dynamic and will display which branch you're committing your changes to. ![Commit area](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - The **History** view shows the previous commits on the current branch of your repository. You should see an "Initial commit" that was created by {% data variables.product.prodname_desktop %} when you created your repository. To the right of the commit, depending on the options you selected while creating your repository, you may see _.gitattributes_, _.gitignore_, _LICENSE_, or _README_ files. You can click each file to see a diff for that file, which is the changes made to the file in that commit. The diff only shows the parts of the file that have changed, not the entire contents of the file. ![History view](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Part 4: Publishing your repository to {% data variables.product.product_name %}
When you create a new repository, it only exists on your computer and you are the only one who can access the repository. You can publish your repository to {% data variables.product.product_name %} to keep it synchronized across multiple computers and allow other people to access it. To publish your repository, push your local changes to {% data variables.product.product_name %}.

1. Click **Publish repository** in the menu bar. ![Publish repository](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} automatically fills the "Name" and "Description" fields with the information you entered when you created the repository.
    - **Keep this code private** lets you control who can view your project. If you leave this option unselected, other users on {% data variables.product.product_name %} will be able to view your code. If you select this option, your code will not be publicly available.
    - The **Organization** drop-down menu, if present, lets you publish your repository to a specific organization that you belong to on {% data variables.product.product_name %}.

    ![Publish repository steps](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Click the **Publish Repository** button.
  3. You can access the repository on {% data variables.product.prodname_dotcom_the_website %} from within {% data variables.product.prodname_desktop %}. In the file menu, click **Repository**, then click **View on GitHub**. This will take you directly to the repository in your default browser.

### Part 5: Making, committing, and pushing changes
Now that you've created and published your repository, you're ready to make changes to your project and start crafting your first commit to your repository.

1. To launch your external editor from within {% data variables.product.prodname_desktop %}, click **Repository**, then click **Open in <em>EDITOR</em>**. For more information, see "[Configuring a default editor](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)." ![Open in editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Make some changes to the _README.md_ file that you previously created. You can add information that describes your project, like what it does and why it is useful. When you are satisfied with your changes, save them in your text editor.
3. In {% data variables.product.prodname_desktop %}, navigate to the **Changes** view. In the file list, you should see your _README.md_. The checkmark to the left of the _README.md_ file indicates that the changes you've made to the file will be part of the commit you make. In the future, you might make changes to multiple files but only want to commit the changes you've made to some of the files. If you click the checkmark next to a file, that file will not be included in the commit. ![Viewing changes](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. At the bottom of the **Changes** list, enter a commit message. To the right of your profile picture, type a short description of the commit. Since we're changing the _README.md_ file, "Add information about purpose of project" would be a good commit summary. Below the summary, you'll see a "Description" text field where you can type a longer description of the changes in the commit, which is helpful when looking back at the history of a project and understanding why changes were made. Since you're making a basic update of a _README.md_ file, you can skip the description. ![Commit message](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Click **Commit to BRANCH NAME**. The commit button shows your current branch so you can be sure to commit to the branch you want. ![Commit to branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. To push your changes to the remote repository on {% data variables.product.product_name %}, click **Push origin**. ![Push origin](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - The **Push origin** button is the same one that you clicked to publish your repository to {% data variables.product.product_name %}. This button changes contextually based on where you are at in the Git workflow. It should now say `Push origin` with a `1` next to it, indicating that there is one commit that has not been pushed up to {% data variables.product.product_name %}.
  - The "origin" in **Push origin** means that you are pushing changes to the remote called `origin`, which in this case is your project's repository on {% data variables.product.prodname_dotcom_the_website %}. Until you push any new commits to {% data variables.product.product_name %}, there will be differences between your project's repository on your computer and your project's repository on {% data variables.product.prodname_dotcom_the_website %}. This allows you to work locally and only push your changes to {% data variables.product.prodname_dotcom_the_website %} when you're ready.
7. In the window to the right of the **Changes** view, you'll see suggestions for actions you can do next. To open the repository on {% data variables.product.product_name %} in your browser, click **View on {% data variables.product.product_name %}**. ![Available actions](/assets/images/help/desktop/available-actions.png)
8. In your browser, click **2 commits**. You'll see a list of the commits in this repository on {% data variables.product.product_name %}. The first commit should be the commit you just made in {% data variables.product.prodname_desktop %}. ![Click two commits](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Conclusion
You've now created a repository, published the repository to {% data variables.product.product_name %}, made a commit, and pushed your changes to {% data variables.product.product_name %}. You can follow this same workflow when contributing to other projects that you create or collaborate on.

### Дополнительная литература
- "[Getting started with Git](/github/getting-started-with-github/getting-started-with-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
