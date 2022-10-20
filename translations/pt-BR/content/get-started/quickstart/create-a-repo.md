---
title: Create a repo
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'To put your project up on {% data variables.product.prodname_dotcom %}, you will need to create a repository for it to live in.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## Create a repository

{% ifversion fpt or ghec %}

You can store a variety of projects in {% data variables.product.prodname_dotcom %} repositories, including open source projects. With open source projects, you can share code to make better, more reliable software. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)." To learn more about open source projects, visit [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

You can store a variety of projects in {% data variables.product.product_name %} repositories, including innersource projects. With innersource, you can share code to make better, more reliable software. For more information on innersource, see {% data variables.product.company_short %}'s white paper "[An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Notes:** 
- You can create public repositories for an open source project. When creating your public repository, make sure to include a [license file](https://choosealicense.com/) that determines how you want your project to be shared with others. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- You can also add community health files to your repositories, to set guidelines on how to contribute, keep your repositories safe, and much more. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)." 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Type a short, memorable name for your repository. For example, "hello-world".
  ![Field for entering a repository name](/assets/images/help/repository/create-repository-name.png)
3. Optionally, add a description of your repository. For example, "My first repository on {% data variables.product.product_name %}."
  ![Field for entering a repository description](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Congratulations! You've successfully created your first repository, and initialized it with a *README* file.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your personal account, specify the organization name and project name with `organization-name/project-name`. 
3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.  
4. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag.  For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Commit your first change

{% webui %}

A *[commit](/articles/github-glossary#commit)* is like a snapshot of all the files in your project at a particular point in time.

When you created your new repository, you initialized it with a *README* file. *README* files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your *README* file are automatically shown on the front page of your repository.

Let's commit a change to the *README* file.

1. In your repository's list of files, click ***README.md***.
  ![README file in file list](/assets/images/help/repository/create-commit-open-readme.png)
2. Above the file's content, click {% octicon "pencil" aria-label="The edit icon" %}.
3. On the **Edit file** tab, type some information about yourself.
  ![New content in file](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Review the changes you made to the file. You will see the new content in green.
  ![File preview view](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

*README* files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your *README* file are automatically shown on the front page of your repository. Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Next steps

You have now created a repository, including a *README* file, and created your first commit on {% data variables.location.product_location %}.

{% webui %}

* You can now clone a {% data variables.product.prodname_dotcom %} repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see "[Cloning a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" and "[Set up Git](/articles/set-up-git)."

{% endwebui %}

* You can find interesting projects and repositories on {% data variables.product.prodname_dotcom %} and make changes to them by creating a fork of the repository. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
