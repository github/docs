---
title: Distributing large binaries
intro: 'Some projects require distributing large files, such as binaries or installers, in addition to distributing source code.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
If you need to distribute large files within your repository, you can create releases on {% data variables.product.product_location %}. Releases allow you to package software, release notes, and links to binary files, for other people to use. For more information, visit "[About releases](/github/administering-a-repository/about-releases)."

{% if currentVersion == "free-pro-team@latest" %}

We don't limit the total size of the binary files in the release or the bandwidth used to deliver them. However, each individual file must be smaller than {% data variables.large_files.max_lfs_size %}.

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
