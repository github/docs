---
title: Adding an existing project to GitHub using the command line
intro: 'Putting your existing work on {% data variables.product.product_name %} can let you share and collaborate in lots of great ways.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a project locally
---

## About adding existing projects to {% data variables.product.product_name %}

{% tip %}

**Tip:** If you're most comfortable with a point-and-click user interface, try adding your project with {% data variables.product.prodname_desktop %}. For more information, see "[Adding a repository from your local computer to GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" in the *{% data variables.product.prodname_desktop %} Help*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a project to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} is an open source tool for using {% data variables.product.prodname_dotcom %} from your computer's command line. {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

1. In the command line, navigate to the root directory of your project.
1. Initialize the local directory as a Git repository.

    ```shell
    git init -b main
    ```

1. Stage and commit all the files in your project

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. To create a repository for your project on GitHub, use the `gh repo create` subcommand. When prompted, select **Push an existing local repository to GitHub** and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with `organization-name/project-name`.

1. Follow the interactive prompts. To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

1. Alternatively, to skip all the prompts, supply the path to the repository with the `--source` flag and pass a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create --source=. --public`. Specify a remote with the `--remote` flag. To push your commits, pass the `--push` flag. For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

## Adding a project to {% data variables.product.product_name %} without {% data variables.product.prodname_cli %}

{% mac %}

1. [Create a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) on {% data variables.product.product_location %}. To avoid errors, do not initialize the new repository with *README*, license, or `gitignore` files. You can add these files after your project has been pushed to {% data variables.product.product_name %}.
	![Create New Repository drop-down](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Change the current working directory to your local project.
4. Initialize the local directory as a Git repository.
  ```shell
  $ git init -b main
  ```
5. Add the files in your new local repository. This stages them for the first commit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commit the files that you've staged in your local repository.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL.
	![Copy remote repository URL field](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. In Terminal, [add the URL for the remote repository](/github/getting-started-with-github/managing-remote-repositories) where your local repository will be pushed.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in your local repository to {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Create a new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. To avoid errors, do not initialize the new repository with *README*, license, or `gitignore` files. You can add these files after your project has been pushed to {% data variables.product.product_name %}.
	![Create New Repository drop-down](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Change the current working directory to your local project.
4. Initialize the local directory as a Git repository.
  ```shell
  $ git init -b main
  ```
5. Add the files in your new local repository. This stages them for the first commit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commit the files that you've staged in your local repository.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL.
	![Copy remote repository URL field](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. In the Command prompt, [add the URL for the remote repository](/github/getting-started-with-github/managing-remote-repositories) where your local repository will be pushed.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in your local repository to {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Create a new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. To avoid errors, do not initialize the new repository with *README*, license, or `gitignore` files. You can add these files after your project has been pushed to {% data variables.product.product_name %}.
	![Create New Repository drop-down](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Change the current working directory to your local project.
4. Initialize the local directory as a Git repository.
  ```shell
  $ git init -b main
  ```
5. Add the files in your new local repository. This stages them for the first commit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commit the files that you've staged in your local repository.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL.
	![Copy remote repository URL field](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. In Terminal, [add the URL for the remote repository](/github/getting-started-with-github/managing-remote-repositories) where your local repository will be pushed.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) in your local repository to {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Further reading

- "[Adding a file to a repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
