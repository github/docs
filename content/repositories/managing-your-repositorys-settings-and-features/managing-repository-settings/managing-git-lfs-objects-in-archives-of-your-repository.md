---
title: Managing Git LFS objects in archives of your repository
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: 'You can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in source code archives, such as ZIP files and tarballs, {% data variables.product.product_name %} creates for your repository.'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
---
## About {% data variables.large_files.product_name_short %} objects in archives

{% data variables.product.product_name %} creates [source code archives](/repositories/working-with-files/using-files/downloading-source-code-archives) of your repository in the form of ZIP files and tarballs. People can download these archives on the main page of your repository or as release assets. By default, {% data variables.large_files.product_name_short %} objects are not included in these archives, only the pointer files to these objects. To improve the usability of archives for your repository, you can choose to include the {% data variables.large_files.product_name_short %} objects instead. To be included, the {% data variables.large_files.product_name_short %} objects must be covered by tracking rules in a _.gitattributes_ file that has been committed to the repository.

If you choose to include {% data variables.large_files.product_name_short %} objects in archives of your repository, every download of those archives will count towards bandwidth usage for your account. Each account receives {% data variables.large_files.initial_bandwidth_quota %} per month of bandwidth for free, and you can pay for additional usage. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage)" and "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage)."

If you use an external LFS server (configured in your _.lfsconfig_), those LFS files will not be included in archives of the repository. The archive will only contain files that have been committed to {% data variables.product.product_name %}.

## Managing {% data variables.large_files.product_name_short %} objects in archives

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Archives", select or deselect **Include {% data variables.large_files.product_name_short %} objects in archives**.
