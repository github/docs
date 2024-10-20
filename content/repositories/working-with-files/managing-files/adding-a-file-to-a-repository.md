---
title: Adding a file to a repository
intro: 'You can upload and commit an existing file to a repository on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
---

## Adding a file to a repository on {% data variables.product.product_name %}

Files that you add to a repository via a browser are limited to {% data variables.large_files.max_github_browser_size %} per file. You can add larger files, up to {% data variables.large_files.max_github_size %} each, via the command line. For more information, see "[Adding a file to a repository using the command line](#adding-a-file-to-a-repository-using-the-command-line)." To add files larger than {% data variables.large_files.max_github_size %}, you must use {% data variables.large_files.product_name_long %}. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github)."

You can upload multiple files to {% data variables.product.product_name %} at the same time.

{% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% ifversion push-rulesets %}

{% data reusables.repositories.rulesets-push-rules-general-info-for-related-articles %}

{% endif %}

{% ifversion push-protection-block-uploads %}

Your repository may be secured by push protection. With push protection, {% data variables.product.prodname_dotcom %} will block uploading a file to the repository if the file contains a supported secret, such as a token. You should remove the secret from the file before attempting to upload the file again. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui)" and "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui#resolving-a-blocked-commit)."

{% data reusables.secret-scanning.push-protection-web-UI-uploads-beta %}

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
1. Above the list of files, select the **Add file** dropdown menu and click **Upload files**. Alternatively, you can drag and drop files into your browser.

   ![Screenshot of the main page of the repository. Above the list of a files, a button, labeled "Add file," is outlined in dark orange.](/assets/images/help/repository/upload-files-button.png)
1. To select the files you want to upload, drag and drop the file or folder, or click **choose your files**.
{% data reusables.files.commit-message %}
{% data reusables.files.choose_commit_branch %}
1. Click **Propose changes**.

## Adding a file to a repository using the command line

You can upload an existing file to a repository on {% data variables.product.prodname_dotcom %} using the command line.

{% tip %}

**Tip:** You can also [add an existing file to a repository from the {% data variables.product.product_name %} website](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. On your computer, move the file you'd like to upload to {% data variables.product.product_name %} into the local directory that was created when you cloned the repository.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}

   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
   ```

{% data reusables.git.commit-file %}

   ```shell
   $ git commit -m "Add existing file"
   # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
   ```

{% data reusables.git.git-push %}

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"
{% endif %}
