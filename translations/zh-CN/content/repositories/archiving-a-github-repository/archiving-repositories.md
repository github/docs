---
title: 存档仓库
intro: 您可以存档仓库，将其设为对所有用户只读，并且指出不再主动维护它。 您也可以取消存档已经存档的仓库。
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## About repository archival

{% ifversion fpt %}
{% note %}

**注：**如果原本有各仓库计费计划，您仍然需要对存档的仓库付费。 如果不想对存档的仓库付费，则必须升级到新产品。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/articles/github-s-products)”。

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

在仓库存档后，便无法添加或删除协作者或团队。 具有仓库访问权限的贡献者只能对项目复刻或标星。

当仓库存档后，其议题、拉取请求、代码、标签、重要事件、项目、wiki、版本、提交、标记、分支、反应、代码扫描警报和注解都会变成只读。 要更改存档的仓库，必须先对仓库取消存档。

您可以搜索已存档的仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)”。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)”。 更多信息请参阅“[搜索议题和拉取请求](/articles/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)”。

## 存档仓库

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Danger Zone"（危险区域）下，单击 **Archive this repository（存档此仓库）**或 **Unarchive this repository（取消存档此仓库）**。 ![存档此仓库按钮](/assets/images/help/repository/archive-repository.png)
4. 阅读警告。
5. 输入要存档或取消存档的仓库的名称。 ![存档仓库警告](/assets/images/help/repository/archive-repository-warnings.png)
6. 单击 **I understand the consequences, archive this repository（我了解后果，存档此仓库）**。
