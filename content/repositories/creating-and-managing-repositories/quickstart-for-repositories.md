---
title: Quickstart for repositories
type: quick_start
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
  - /get-started/quickstart/create-a-repo
intro: 'Learn how to create a new repository and commit your first change in 5 minutes.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## Create a repository

{% data variables.product.product_name %} repositories store a variety of projects. In this guide, you'll create a repository and commit your first change.

{% webui %}

{% data reusables.repositories.create_new %}
1. Type a short, memorable name for your repository. For example, "hello-world".

   ![Screenshot of the first step in creating a {% data variables.product.prodname_dotcom %} repository. The "Repository name" field contains the text "hello-world" and is outlined in dark orange.](/assets/images/help/repository/create-repository-name.png)
1. Optionally, add a description of your repository. For example, "My first repository on {% data variables.product.product_name %}."
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Congratulations! You've successfully created your first repository, and initialized it with a _README_ file.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
1. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your personal account, specify the organization name and project name with `organization-name/project-name`.
1. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.
1. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag.  For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Commit your first change

{% webui %}

A [commit](/get-started/learning-about-github/github-glossary#commit) is like a snapshot of all the files in your project at a particular point in time.

When you created your new repository, you initialized it with a _README_ file. _README_ files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your _README_ file are automatically shown on the front page of your repository.

Let's commit a change to the README file.

1. In your repository's list of files, select **README.md**.

   ![Screenshot of a list of files in a repository. A file name, "README.md", is highlighted with an orange outline.](/assets/images/help/repository/create-commit-open-readme.png)
{% data reusables.repositories.edit-file-button %}
1. In the text box, type some information about yourself.
{% data reusables.files.preview_change %}
1. Review the changes you made to the file. If you select **Show diff**, you will see the new content in green.

   ![Screenshot of the "Preview" view for a file. A checkbox labeled "Show diff" is selected, and an addition to the file is indicated by a green line marker. Both are outlined in orange.](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

_README_ files are a great place to describe your project in more detail, or add some documentation such as how to install or use your project. The contents of your _README_ file are automatically shown on the front page of your repository. Follow these steps to add a _README_ file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a _README_ file with some information about the project.

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

You have now created a repository, including a _README_ file, and created your first commit on {% data variables.product.prodname_dotcom %}.

{% webui %}

* You can now clone a {% data variables.product.prodname_dotcom %} repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)" and "[AUTOTITLE](/get-started/getting-started-with-git/set-up-git)."

{% endwebui %}

* You can find interesting projects and repositories on {% data variables.product.prodname_dotcom %} and make changes to them by creating a fork of the repository. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
