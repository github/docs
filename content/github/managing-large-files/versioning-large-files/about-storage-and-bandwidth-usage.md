---
title: About storage and bandwidth usage
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage/
  - /articles/billing-plans-for-git-large-file-storage/
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
versions:
  free-pro-team: '*'
---
{% data variables.large_files.product_name_short %} is available for every repository on {% data variables.product.product_name %}, whether or not your account or organization has a paid subscription.

### Tracking storage and bandwidth use

When you commit and push a change to a file tracked with {% data variables.large_files.product_name_short %}, a new version of the entire file is pushed and the total file size is counted against the repository owner's storage limit. When you download a file tracked with {% data variables.large_files.product_name_short %}, the total file size is counted against the repository owner's bandwidth limit. {% data variables.large_files.product_name_short %} uploads do not count against the bandwidth limit.

For example:
- If you push a 500 MB file to {% data variables.large_files.product_name_short %}, you'll use 500 MB of your allotted storage and none of your bandwidth. If you make a 1 byte change and push the file again, you'll use another 500 MB of storage and no bandwidth, bringing your total usage for these two pushes to 1 GB of storage and zero bandwidth.
- If you download a 500 MB file that's tracked with LFS, you'll use 500 MB of the repository owner's allotted bandwidth. If a collaborator pushes a change to the file and you pull the new version to your local repository, you'll use another 500 MB of bandwidth, bringing the total usage for these two downloads to 1 GB of bandwidth.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
If {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in source code archives for your repository, downloads of those archives will count towards bandwidth usage for the repository. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

{% tip %}

**Tips**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

### Storage quota

If you use more than {% data variables.large_files.initial_storage_quota %} of storage without purchasing a data pack, you can still clone repositories with large assets, but you will only retrieve the pointer files, and you will not be able to push new files back up. For more information about pointer files, see "[About {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)."

### Bandwidth quota

If you use more than {% data variables.large_files.initial_bandwidth_quota %} of bandwidth per month without purchasing a data pack, {% data variables.large_files.product_name_short %} support is disabled on your account until the next month.

### Further reading

- "[Viewing your {% data variables.large_files.product_name_long %} usage](/articles/viewing-your-git-large-file-storage-usage)"
- "[Managing billing for {% data variables.large_files.product_name_long %}](/articles/managing-billing-for-git-large-file-storage)"
