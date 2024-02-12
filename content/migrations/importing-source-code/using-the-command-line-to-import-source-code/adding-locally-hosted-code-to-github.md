---
title: Adding locally hosted code to GitHub
intro: 'If your code is stored locally on your computer and is tracked by Git or not tracked by any version control system (VCS), you can import the code to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %} or Git commands.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Local code
---

## About adding existing source code to {% data variables.product.product_name %}

If you have source code stored locally on your computer that is tracked by Git or not tracked by any version control system (VCS), you can add the code to {% data variables.product.product_name %} by typing commands in a terminal. You can do this by typing Git commands directly, or by using {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} is an open source tool for using {% data variables.product.prodname_dotcom %} from your computer's command line. {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

{% note %}

**Note:** If you're most comfortable with a point-and-click user interface, consider adding your project with {% data variables.product.prodname_desktop %} instead. For more information, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop)."

{% endnote %}

If your source code is tracked by a different VCS, such as Mercurial, Subversion, or Team Foundation Version Control, you must convert the repository to Git before you can add the project to {% data variables.product.product_name %}.

- "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"
- "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"
- "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"

{% data reusables.repositories.sensitive-info-warning %}

## Initializing a Git repository

If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository. If your project is already tracked by Git, skip to "[Importing a Git repository with the command line](#importing-a-git-repository-with-the-command-line)."

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Navigate to the root directory of your project.
1. Initialize the local directory as a Git repository. By default, the initial branch is called `main`.

   If you’re using Git 2.28.0 or a later version, you can set the name of the default branch using `-b`.

   ```shell
   git init -b main
   ```

   If you’re using Git 2.27.1 or an earlier version, you can set the name of the default branch using  `git symbolic-ref`.

   ``` shell
   git init && git symbolic-ref HEAD refs/heads/main
   ```

1. Add the files in your new local repository. This stages them for the first commit.

   ```shell
   $ git add .
   # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
   ```

1. Commit the files that you've staged in your local repository.

   ```shell
   $ git commit -m "First commit"
   # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
   ```

## Importing a Git repository with the command line

After you've initialized a Git repository, you can push the repository to {% data variables.product.product_name %}, using either {% data variables.product.prodname_cli %} or Git.

- "[Adding a local repository to {% data variables.product.prodname_dotcom %} with {% data variables.product.prodname_cli %}](#adding-a-local-repository-to-github-with-github-cli)"
- "[Adding a local repository to {% data variables.product.prodname_dotcom %} using Git](#adding-a-local-repository-to-github-using-git)"

### Adding a local repository to {% data variables.product.prodname_dotcom %} with {% data variables.product.prodname_cli %}

1. To create a repository for your project on {% data variables.product.prodname_dotcom %}, use the `gh repo create` subcommand. When prompted, select **Push an existing local repository to {% data variables.product.prodname_dotcom %}** and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with `organization-name/project-name`.

1. Follow the interactive prompts. To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

1. Alternatively, to skip all the prompts, supply the path to the repository with the `--source` flag and pass a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create --source=. --public`. Specify a remote with the `--remote` flag. To push your commits, pass the `--push` flag. For more information about possible arguments, see the [{% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).

### Adding a local repository to {% data variables.product.prodname_dotcom %} using Git

{% mac %}

{% data reusables.migrations.create-empty-repo %}
1. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}'s Quick Setup page, click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is highlighted with an orange outline.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change the current working directory to your local project.
1. To add the URL for the remote repository where your local repository will be pushed, run the following command. Replace `REMOTE-URL` with the repository's full URL on {% data variables.product.prodname_dotcom %}.

   ```shell
   git remote add origin REMOTE-URL
   ```

   For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."
1. To verify that you set the remote URL correctly, run the following command.

   ```shell
   git remote -v
   ```

1. To push the changes in your local repository to {% data variables.location.product_location %}, run the following command.

   ```shell
   git push -u origin main
   ```

{% endmac %}

{% windows %}

{% data reusables.migrations.create-empty-repo %}
1. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}'s Quick Setup page, click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is highlighted with an orange outline.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change the current working directory to your local project.
1. To add the URL for the remote repository where your local repository will be pushed, run the following command. Replace `REMOTE-URL` with the repository's full URL on {% data variables.product.prodname_dotcom %}.

   ```shell
   git remote add origin REMOTE-URL
   ```

   For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."
1. To verify that you set the remote URL correctly, run the following command.

   ```shell
   git remote -v
   ```

1. To push the changes in your local repository to {% data variables.location.product_location %}, run the following command.

   ```shell
   git push origin main
   ```

{% endwindows %}

{% linux %}

{% data reusables.migrations.create-empty-repo %}
1. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}'s Quick Setup page, click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is highlighted with an orange outline.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Change the current working directory to your local project.
1. To add the URL for the remote repository where your local repository will be pushed, run the following command. Replace `REMOTE-URL` with the repository's full URL on {% data variables.product.prodname_dotcom %}.

   ```shell
   git remote add origin REMOTE-URL
   ```

   For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."
1. To verify that you set the remote URL correctly, run the following command.

   ```shell
   git remote -v
   ```

1. To push the changes in your local repository to {% data variables.location.product_location %}, run the following command.

   ```shell
   git push origin main
   ```

{% endlinux %}

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"{% ifversion fpt or ghec %}
- "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"{% endif %}
