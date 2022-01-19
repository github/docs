---
title: 关于迁移
intro: '迁移是将数据从*源*位置（{% data variables.product.prodname_dotcom_the_website %} 组织或 {% data variables.product.prodname_ghe_server %} 实例）转移到*目标* {% data variables.product.prodname_ghe_server %} 实例的过程。 在更换平台或或升级实例上的硬件时，可以使用迁移转移数据。'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
---

## 迁移类型

您可以执行三种类型的迁移：

- 从 {% data variables.product.prodname_ghe_server %} 实例迁移到另一个 {% data variables.product.prodname_ghe_server %} 实例。 您可以迁移实例上由任何用户或组织拥有的任意数量的仓库。 在执行迁移之前，您必须具有两个实例的站点管理员访问权限。
- 从 {% data variables.product.prodname_dotcom_the_website %} 组织迁移到 {% data variables.product.prodname_ghe_server %} 实例。 您可以迁移由组织拥有的任意数量的仓库。 在执行迁移前，您必须拥有 {% data variables.product.prodname_dotcom_the_website %} 组织的[管理访问权限](/enterprise/user/articles/permission-levels-for-an-organization/)和目标实例的站点管理员访问权限。
- *试运行*是将数据导入[暂存实例](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)的迁移。 这些试运行非常有用，可用于查看在向 {% data variables.product.product_location %} 应用迁移后*将要*发生的变化。 **我们强烈建议您先在暂存实例上执行试运行，然后再将数据导入生产实例。**

## 迁移的数据

在迁移中，一切都围绕仓库进行。 与仓库关联的大多数数据都可以迁移。 例如，组织内的仓库将迁移仓库*和*组织，以及与该仓库关联的任何用户、团队、问题和拉取请求。

下表中的项可随仓库一起迁移。 迁移的数据列表中未显示的任何项都无法迁移。

{% data reusables.enterprise_migrations.fork-persistence %}

| 与迁移的仓库关联的数据    | 注：                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------- |
| 用户             | 用户的 **@提及**将重写以匹配目标。                                                                          |
| 组织             | 将迁移组织的名称和详细信息。                                                                                |
| 仓库             | Git 树、blob、提交和行的链接将重写以匹配目标。 迁移程序将遵循三个仓库重定向的最大值。                                               |
| Wikis          | 将迁移所有 wiki 数据。                                                                                |
| 团队             | 团队的 **@提及**将重写以匹配目标。                                                                          |
| 里程碑            | 将保留时间戳。                                                                                       |
| 项目板            | 将迁移与仓库和拥有仓库的组织关联的项目板。                                                                         |
| 议题             | 将保留问题引用和时间戳。                                                                                  |
| 问题评论           | 将针对目标实例重写评论的交叉引用。                                                                             |
| 拉取请求           | 将重写拉取请求的交叉引用以匹配目标。 将保留时间戳。                                                                    |
| 拉取请求审查         | 将迁移拉取请求审查和关联的数据。                                                                              |
| 拉取请求审查评论       | 将针对目标实例重写评论的交叉引用。 将保留时间戳。                                                                     |
| 提交注释           | 将针对目标实例重写评论的交叉引用。 将保留时间戳。                                                                     |
| 版本发布           | 将迁移所有版本数据。                                                                                    |
| 在拉取请求或问题上进行的操作 | 将保留对拉取请求或问题的所有修改（例如，分配用户、重命名标题和修改标签）以及每个操作的时间戳。                                               |
| 文件附件           | 将迁移[问题和拉取请求上的文件附件](/articles/file-attachments-on-issues-and-pull-requests)。 在迁移过程中，您可以选择将此禁用。 |
| Web 挂钩         | 仅迁移有效的 web 挂钩。                                                                                |
| 仓库部署密钥         | 将迁移仓库部署密钥。                                                                                    |
| 受保护分支          | 将迁移受保护分支设置和关联的数据。                                                                             |
