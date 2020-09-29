---
title: Committing changes to a pull request branch created from a fork
intro: You can commit changes on a pull request branch that was created from a fork of your repository with permission from the pull request creator.
redirect_from:
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can only make commits on pull request branches that:
- are opened in a repository that you have push access to and that were created from a fork of that repository
- are on a user-owned fork
- have permission granted from the pull request creator
- don't have [branch restrictions](/articles/about-branch-restrictions) that will prevent you from committing

Only the user who created the pull request can give you permission to push commits to the user-owned fork. For more information, see "[Allowing changes to a pull request branch created from a fork](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)."

{% note %}

**Note:** You can also make commits to a pull request branch from a fork of your repository through {% data variables.product.product_location %} by creating your own copy (or fork) of the fork of your repository and committing changes to the same head branch that the original pull request changes were created on. For some general guidelines, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)."

{% endnote %}

1. On {% data variables.product.product_name %}, navigate to the main page of the fork (or copy of your repository) where the pull request branch was created.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
 {% tip %}

 **Tip:** If you prefer to clone the fork using {% data variables.product.prodname_desktop %}, then see "[Cloning a repository to {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)."

 {% endtip %}
4. Change the current working directory to the location where you want to download the cloned directory.
  ```shell
  $ cd open-source-projects
  ```
5. Type `git clone`, and then paste the URL you copied in Step 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Press **Enter**. Your local clone will be created.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Tip:** The error message "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" means that your current working directory already contains a repository with the same name. To resolve the error, you must clone the fork in a different directory.

 {% endtip %}
7. Navigate into your new cloned repository.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Switch branches to the compare branch of the pull request where the original changes were made. If you navigate to the original pull request, you'll see the compare branch at the top of the pull request.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png)
 In this example, the compare branch is `test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Tip:** For more information about pull request branches, including examples, see "[Creating a Pull Request](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)."

 {% endtip %}
8. At this point, you can do anything you want with this branch. You can push new commits to it, run some local tests, or merge other branches into the branch. Make modifications as you like.
9. After you commit your changes to the head branch of the pull request you can push your changes up to the original pull request directly. In this example, the head branch is `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Your new commits will be reflected on the original pull request on {% data variables.product.product_location %}.

### Further Reading

- "[About forks](/articles/about-forks)"
