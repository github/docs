---
title: 管理仓库存档中的 Git LFS 对象
shortTitle: '管理存档中的 {% data variables.large_files.product_name_short %} 对象'
intro: '您可以选择是否将 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 对象包含在源代码存档（例如 {% data variables.product.product_name %} 为仓库创建的 ZIP 文件和 tarball）中。'
permissions: '对仓库具有管理员权限的人可以管理是否将 {% data variables.large_files.product_name_short %} 对象包含在仓库的存档中。'
versions:
  free-pro-team: '*'
  enterprise-server: '>3.0'
  github-ae: '*'
---

### 关于存档中的 {% data variables.large_files.product_name_short %} 对象

{% data variables.product.product_name %} 以 ZIP 文件和 tarball 的形式创建仓库的源代码存档。 用户可以在您仓库的主页上下载这些存档或者将其作为发行版资产。 默认情况下，{% data variables.large_files.product_name_short %} 对象不会包含在这些存档中，只有这些对象的指针文件包含在其中。 为了提高仓库存档的可用性，您可以选择包含 {% data variables.large_files.product_name_short %} 对象。

{% if currentVersion == "free-pro-team@latest" %}
如果您选择在仓库存档中包含
{% data variables.large_files.product_name_short %} 对象，则每次下载这些存档都会计入您帐户的带宽使用量。 每个帐户每月免费获得 {% data variables.large_files.initial_bandwidth_quota %} 的带宽，您可以付费获得额外用量。 更多信息请参阅“[关于存储和带宽使用](/github/managing-large-files/about-storage-and-bandwidth-usage)”和“[管理 {% data variables.large_files.product_name_long %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage)”。
{% endif %}

### 管理存档中的 {% data variables.large_files.product_name_short %} 对象

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Archives（存档）”下，选择或取消选择**在存档中包含 {% data variables.large_files.product_name_short %} 对象**。 ![在存档中包含 {% data variables.large_files.product_name_short %} 对象的复选框](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
