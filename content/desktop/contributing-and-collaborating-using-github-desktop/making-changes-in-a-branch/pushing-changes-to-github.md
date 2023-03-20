---
title: Pushing changes to GitHub
shortTitle: Pushing changes
intro: 'As you commit changes to your project locally, you can push those changes to {% data variables.product.prodname_dotcom %} so that others may access them from the remote repository.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
---
## About pushing changes to {% data variables.product.prodname_dotcom %}

When you push changes, you send the committed changes in your local repository to the remote repository on {% data variables.product.prodname_dotcom %}. If you change your project locally and want other people to have access to the changes, you must push the changes to {% data variables.product.prodname_dotcom %}.

Before pushing changes, you should update your local branch to include any commits that have been added to the remote repository. If someone has made commits on the remote that are not on your local branch, {% data variables.product.prodname_desktop %} will prompt you to fetch the new commits before pushing your changes to avoid merge conflicts. For more information, see "[AUTOTITLE](/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch)."

{% data reusables.desktop.protected-branches %}

## Pushing changes to {% data variables.product.prodname_dotcom %}

{% note %}

**Note:** {% data variables.product.prodname_desktop %} will reject a push if it exceeds certain limits.

- A push contains a large file over {% data variables.large_files.max_github_size %} in size.
- A push is over {% data variables.large_files.max_file_size %} in total size.

If you configure {% data variables.large_files.product_name_long %} to track your large files, you can push large files that would normally be rejected. For more information, see "[AUTOTITLE](/desktop/installing-and-configuring-github-desktop/configuring-and-customizing-github-desktop/about-git-large-file-storage-and-github-desktop)."

{% endnote %}

{% data reusables.desktop.push-origin %}
1. If there are commits on the remote branch that you don't have on your local branch, {% data variables.product.prodname_desktop %} prompts you to fetch new commits from the remote. In the "New Commits on Remote" window, click **Fetch**.
1. Optionally, click **Preview Pull Request** to open a preview dialog where you can review your changes and begin to create a pull request. For more information, see "[AUTOTITLE](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)."
   
   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

## Further reading
- "[AUTOTITLE](/get-started/quickstart/github-glossary#push)" in the {% data variables.product.prodname_dotcom %} glossary
- "[AUTOTITLE](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project)"
