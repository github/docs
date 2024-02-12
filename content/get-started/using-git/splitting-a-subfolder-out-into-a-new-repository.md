---
title: Splitting a subfolder out into a new repository
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: You can turn a folder within a Git repository into a brand new repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
---
If you create a new clone of the repository, you won't lose any of your Git history or changes when you split a folder into a separate repository.  However, note that the new repository won't have the branches and tags of the original repository.

{% data reusables.command_line.open_the_multi_os_terminal %}

1. Change the current working directory to the location where you want to create your new repository.

1. Clone the repository that contains the subfolder.

   ```shell
   git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

1. Change the current working directory to your cloned repository.

   ```shell
   cd REPOSITORY-NAME
   ```

1. To filter out the subfolder from the rest of the files in the repository, install [`git-filter-repo`](https://github.com/newren/git-filter-repo), then run `git filter-repo` with the following arguments.
   - `FOLDER-NAME`: The folder within your project where you'd like to create a separate repository.

   {% windows %}

   {% tip %}

   **Tip:** Windows users should use `/` to delimit folders.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```

   The repository should now only contain the files that were in your subfolder(s).

1. [Create a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) on {% data variables.product.product_name %}.

1. At the top of your new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}'s Quick Setup page, click {% octicon "copy" aria-label="Copy to clipboard" %} to copy the remote repository URL.

   ![Screenshot of the "Quick Setup" header in a repository. Next to the remote URL, an icon of two overlapping squares is highlighted with an orange outline.](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Tip:** For information on the difference between HTTPS and SSH URLs, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories)."

   {% endtip %}

1. Add a new remote name with the URL you copied for your repository. For example, `origin` or `upstream` are two common choices.

   ```shell
   git remote add origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git
   ```

1. Verify that the remote URL was added with your new repository name.

    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

1. Push your changes to the new repository on {% data variables.product.product_name %}.

    ```shell
    git push -u origin BRANCH-NAME
    ```
