---
title: About Git Large File Storage
intro: '{{ site.data.variables.large_files.product_name_short }} lets you push files to {{ site.data.variables.product.product_name }} that are larger than the Git push limit.'
redirect_from:
  - /articles/about-large-file-storage/
  - /articles/about-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.variables.large_files.product_name_short }} handles large files by storing references to the file in the repository, but not the actual file itself. To work around Git's architecture, {{ site.data.variables.large_files.product_name_short }} creates a pointer file which acts as a reference to the actual file (which is stored somewhere else). {{ site.data.variables.product.product_name }} manages this pointer file in your repository. When you clone the repository down, {{ site.data.variables.product.product_name }} uses the pointer file as a map to go and find the large file for you.

{% if currentVersion == "free-pro-team@latest" %}
Using {{ site.data.variables.large_files.product_name_short }}, you can store files up to:

| Product                                                | Maximum file size |
| ------------------------------------------------------ | ----------------- |
| {{ site.data.variables.product.prodname_free_user }} | 2 GB              |
| {{ site.data.variables.product.prodname_pro }}         | 2 GB              |
| {{ site.data.variables.product.prodname_team }}        | 4 GB              |
| {{ site.data.variables.product.prodname_ghe_cloud }} | 5 GB |{% else %}
 Using {{ site.data.variables.large_files.product_name_short }}, you can store files up to
{% if currentVersion ver_lt "enterprise-server@2.21" %}{{ site.data.variables.large_files.max_lfs_size }}{% else %}5 GB{% endif %} in your repository.
{% endif %}

You can also use {{ site.data.variables.large_files.product_name_short }} with {{ site.data.variables.product.prodname_desktop }}. For more information about cloning Git LFS repositories in {{ site.data.variables.product.prodname_desktop }}, see "[Cloning a repository from GitHub to GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)."

{{ site.data.reusables.large_files.can-include-lfs-objects-archives }}

#### Pointer file format

{{ site.data.variables.large_files.product_name_short }}'s pointer file looks like this:

```
version {{ site.data.variables.large_files.version_name }}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

It tracks the `version` of {{ site.data.variables.large_files.product_name_short }} you're using, followed by a unique identifier for the file (`oid`). It also stores the `size` of the final file.

{% tip %}

**Tip**: {{ site.data.variables.large_files.product_name_short }} cannot be used with {{ site.data.variables.product.prodname_pages }} sites.

{% endtip %}

### Дополнительная литература

- "[Collaboration with {{ site.data.variables.large_files.product_name_long }}](/articles/collaboration-with-git-large-file-storage)"
