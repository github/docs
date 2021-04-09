---
title: Moving a file to a new location
intro: 'When editing a file, you can choose to move it anywhere within your repository, even if the directory doesn''t exist.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

In addition to changing the file location, you can also [update the contents of your file](/articles/editing-files-in-your-repository), or [give it a new name](/articles/renaming-a-file) in the same commit.

{% tip %}

**Tips**:

- If you try to move a file in a repository that you don’t have access to, we'll fork the project to your user account and help you send [a pull request](/articles/about-pull-requests) to the original repository after you commit your change.
- Some files, such as images, require that you move them from the command line. For more information, see "[Moving a file to a new location using the command line](/articles/moving-a-file-to-a-new-location-using-the-command-line)".
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. In your repository, browse to the file you want to move.
2. In the upper right corner of the file view, click {% octicon "pencil" aria-label="The edit icon" %} to open the file editor. ![Edit file icon](/assets/images/help/repository/move-file-edit-file-icon.png)
3. In the filename field, change the name of the file using these guidelines: ![Editing a file name](/assets/images/help/repository/moving_files.gif)
    - To move the file **into a subfolder**, type the name of the folder you want, followed by `/`. Your new folder name becomes a new item in the navigation breadcrumbs.
    - To move the file into a directory **above the file's current location**, place your cursor at the beginning of the filename field, then either type `../` to jump up one full directory level, or type the `backspace` key to edit the parent folder's name.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
