---
title: Conditions for large files
intro: '{% data variables.product.product_name %} limits the size of files allowed in repositories, and will block a push to a repository if the files are larger than the maximum file limit.'
redirect_from:
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Large file conditions
---
{% data reusables.large_files.use_lfs_tip %}

## Warning for files larger than {% data variables.large_files.warning_size %}

If you attempt to add or update a file that is larger than {% data variables.large_files.warning_size %}, you will receive a warning from Git. The changes will still successfully push to your repository, but you can consider removing the commit to minimize performance impact. For more information, see "[Removing files from a repository's history](/github/managing-large-files/removing-files-from-a-repositorys-history)."

## Blocked pushes for large files

{% ifversion ghes %}By default, {% endif %}{% data variables.product.product_name %} blocks pushes that exceed {% data variables.large_files.max_github_size %}. {% ifversion ghes %}However, a site administrator can configure a different limit for {% data variables.product.product_location %}. For more information, see "[Setting Git push limits](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits)".{% endif %}
