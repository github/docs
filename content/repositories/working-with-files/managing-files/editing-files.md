---
title: Editing files
intro: 'You can edit files directly on {% data variables.product.product_name %} in any of your repositories using the file editor.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
---

## Editing files in your repository

{% tip %}

**Tip**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Note:** {% data variables.product.product_name %}'s file editor uses [CodeMirror](https://codemirror.net/).

{% endnote %}

1. In your repository, browse to the file you want to edit.
{% data reusables.repositories.edit-file %}
1. In the text box, make any changes you need to the file.
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Editing files in another user's repository

When you edit a file in another user's repository, we'll automatically [fork the repository](/get-started/quickstart/fork-a-repo) and [open a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for you.

1. In another user's repository, browse to the folder that contains the file you want to edit. Click the name of the file you want to edit.
1. Above the file content, click {% octicon "pencil" aria-label="Edit file" %}. At this point, {% data variables.product.prodname_dotcom %} forks the repository for you.
1. In the text box, make any changes you need to the file.
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
1. Click **Propose changes**.
1. Type a title and description for your pull request.
1. Click **Create pull request**.
