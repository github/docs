---
title: 分发大型二进制文件
intro: '除了分发源代码外，一些项目还需要分发大型文件，例如二进制文件或安装程序。'
redirect_from:
  - /articles/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

如果需要在仓库内分发大型文件，您可以在 {% data variables.product.product_location %} 上创建发行版。 发行版允许您打包软件、发行说明和指向二进制文件的链接，以供其他人使用。 更多信息请参阅“[关于发行版](/github/administering-a-repository/about-releases)”。

{% if currentVersion == "free-pro-team@latest" %}

我们不限制二进制发行版文件的总大小，也不限制用于传递它们的带宽。 但每个文件必须小于 {% data variables.large_files.max_lfs_size %}。

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
