---
title: Deleting files
intro: 'You can delete any file within your repositories on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tip**: If you try to delete a file in a repository that you don’t have access to, we'll fork the project to your user account and help you send [a pull request](/articles/about-pull-requests) to the original repository after you commit your change.

{% endtip %}

1. Browse to the file in your repository that you want to delete.
2. At the top of the file, click {% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**Attention**: Since Git is a version control system, it always has your back if you need to recover the file later. If you really, *really* need to **completely** remove a file from a repository for some reason, such as a sensitive file that was accidentally committed, you should follow the steps in [our article about removing sensitive data](/articles/removing-sensitive-data-from-a-repository).

{% enddanger %}
