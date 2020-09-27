---
title: Editing files in your repository
intro: 'You can edit files directly on {{ site.data.variables.product.product_name }} in any of your repositories using the file editor.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tip**: {{ site.data.reusables.repositories.protected-branches-block-web-edits-uploads }}

{% endtip %}

{% note %}

**Note:** {{ site.data.variables.product.product_name }}'s file editor uses [CodeMirror](https://codemirror.net/).

{% endnote %}

1. In your repository, browse to the file you want to edit.
{{ site.data.reusables.repositories.edit-file }}
3. On the **Edit file** tab, make any changes you need to the file. ![New content in file](/assets/images/help/repository/edit-readme-light.png)
{{ site.data.reusables.files.preview_change }}
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_file_change }}

### 더 읽을거리

* "[Editing files in another user's repository](/articles/editing-files-in-another-user-s-repository)"
