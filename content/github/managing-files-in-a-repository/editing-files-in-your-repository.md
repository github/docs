---
title: Editing files in your repository
intro: 'You can edit files directly on {% data variables.product.product_name %} in any of your repositories using the file editor.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**Tip**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Note:** {% data variables.product.product_name %}'s file editor uses [CodeMirror](https://codemirror.net/).

{% endnote %}

1. In your repository, browse to the file you want to edit.
{% data reusables.repositories.edit-file %}
3. On the **Edit file** tab, make any changes you need to the file.
![New content in file](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Further reading

* "[Editing files in another user's repository](/articles/editing-files-in-another-user-s-repository)"
