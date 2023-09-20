---
title: About Git Large File Storage
intro: '{% data variables.product.product_name %} limits the size of files allowed in repositories. To track files beyond this limit, you can use {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
---

## About {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} handles large files by storing references to the file in the repository, but not the actual file itself. To work around Git's architecture, {% data variables.large_files.product_name_short %} creates a pointer file which acts as a reference to the actual file (which is stored somewhere else). {% data variables.product.product_name %} manages this pointer file in your repository. When you clone the repository down, {% data variables.product.product_name %} uses the pointer file as a map to go and find the large file for you.

{% ifversion fpt or ghec %}
Different maximum size limits for {% data variables.large_files.product_name_short %} apply depending on your {% data variables.product.prodname_dotcom %} plan.

| Product | Maximum file size |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
Using {% data variables.large_files.product_name_short %}, you can store files up to {% ifversion ghae %}200 MiB{% else %}5 GB{% endif %} in your repository.
{% endif %}

{% data reusables.repositories.git-lfs %}

You can also use {% data variables.large_files.product_name_short %} with {% data variables.product.prodname_desktop %}. For more information about cloning Git LFS repositories in {% data variables.product.prodname_desktop %}, see "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)."

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Pointer file format

{% data variables.large_files.product_name_short %}'s pointer file looks like this:

```text
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

It tracks the `version` of {% data variables.large_files.product_name_short %} you're using, followed by a unique identifier for the file (`oid`). It also stores the `size` of the final file.

{% note %}

**Notes**:
- {% data variables.large_files.product_name_short %} cannot be used with {% data variables.product.prodname_pages %} sites.
- {% data variables.large_files.product_name_short %} cannot be used with template repositories.

{% endnote %}

## Further reading

- "[AUTOTITLE](/repositories/working-with-files/managing-large-files/collaboration-with-git-large-file-storage)"
