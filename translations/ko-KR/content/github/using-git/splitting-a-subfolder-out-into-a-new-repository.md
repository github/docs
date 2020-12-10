---
title: Splitting a subfolder out into a new repository
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
intro: You can turn a folder within a Git repository into a brand new repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

If you create a new clone of the repository, you won't lose any of your Git history or changes when you split a folder into a separate repository.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to the location where you want to create your new repository.
3. Clone the repository that contains the subfolder.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. Change the current working directory to your cloned repository.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. To filter out the subfolder from the rest of the files in the repository, run [`git filter-branch`](https://git-scm.com/docs/git-filter-branch), supplying this information:
    - `FOLDER-NAME`: The folder within your project that you'd like to create a separate repository from.

    {% windows %}

      {% tip %}

      **Tip:** Windows users should use `/` to delimit folders.

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: The default branch for your current project, for example, `main` or `gh-pages`.
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME  BRANCH-NAME </em>
    # Filter the specified branch in your directory and remove empty commits
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  The repository should now only contain the files that were in your subfolder.

6. [Create a new repository](/articles/creating-a-new-repository/) on {% data variables.product.product_name %}.
7. At the top of your new {% data variables.product.product_name %} repository's Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL. ![Copy remote repository URL field](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **Tip:** For information on the difference between HTTPS and SSH URLs, see "[Which remote URL should I use?](/articles/which-remote-url-should-i-use)"

  {% endtip %}

8. Check the existing remote name for your repository. For example, `origin` or `upstream` are two common choices.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. Set up a new remote URL for your new repository using the existing remote name and the remote repository URL you copied in step 7.
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. Verify that the remote URL has changed with your new repository name.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. Push your changes to the new repository on {% data variables.product.product_name %}.
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
