如果站点是一个独立的项目，您可以创建新仓库来存储站点源代码。 如果您的站点与现有的项目关联，您可以添加站点的源代码添加{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}到该项目仓库的默认分支或其他分支上的 `/docs` 文件夹中。{% else %}到 `gh-pages` 分支或该项目仓库 `master` 分支上的 `docs` 文件夹中。{% endif %} 例如，如果您创建站点来发布已经在 {% data variables.product.product_name %} 中的项目文档， 您可能想要将站点的源代码存储在与项目相同的仓库中。

如果要在现有仓库中创建站点，请跳至“[创建站点](#creating-your-site)”一节。
