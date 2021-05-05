---
title: 备份仓库
intro: '您可以使用{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Git 和{% endif %} API {% if currentVersion == "free-pro-team@latest" %}或第三方工具{% endif %}备份仓库。'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" %}

要下载仓库的存档，您可以使用 API 进行用户或组织迁移。 更多信息请参阅“[迁移](/rest/reference/migrations)”。
{% else %}

您可以手动下载和备份仓库：

- 要将仓库的 Git 数据下载到本地计算机，您需要克隆该仓库。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。
- 还可以下载仓库的 wiki。 更多信息请参阅“[添加或删除 wiki 页面](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)”。

克隆仓库或 wiki 时，仅下载 Git 数据，例如项目文件和提交历史记录。 您可以使用我们的 API 将 {% data variables.product.product_name %} 仓库的其他元素导出到您的本地计算机：

- [议题](/rest/reference/issues#list-issues-for-a-repository)
- [拉取请求](/rest/reference/pulls#list-pull-requests)
- [复刻](/rest/reference/repos#list-forks)
- [评论](/rest/reference/issues#list-issue-comments-for-a-repository)
- [里程碑](/rest/reference/issues#list-milestones)
- [标签](/rest/reference/issues#list-labels-for-a-repository)
- [关注者](/rest/reference/activity#list-watchers)
- [追星者](/rest/reference/activity#list-stargazers)
- [项目](/rest/reference/projects#list-repository-projects)
{% endif %}

一旦您拥有 {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}所有要备份内容的本地版本，您就可以创建一个 zip 存档并{% else %}下载您的存档。您可以{% endif %}将其复制到外部硬盘和/或将其上传到基于云的备份服务，例如 [Google Drive](https://www.google.com/drive/) 或 [Dropbox](https://www.dropbox.com/)。

{% if currentVersion == "free-pro-team@latest" %}
### 第三方备份工具
有许多自助服务工具可自动备份仓库。 与存档项目不同，存档项目将将_所有_公共仓库存档在未选择退出的

{% data variables.product.product_name %} 上，并让任何人都可以访问数据，而备份工具将从_特定_仓库下载数据并组织在新分支或目录中。 有关存档项目的更多信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) 上存档内容和数据”。 有关自助备份工具的更多信息，请参阅 [{% data variables.product.prodname_marketplace %} 上的备份实用程序类别](https://github.com/marketplace?category=backup-utilities)。
{% endif %}
