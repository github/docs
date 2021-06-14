---
title: 管理标签
intro: 您可以通过创建、编辑、应用和删除标签对议题和拉取请求进行分类。
redirect_from:
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
### 关于标签

您可以创建标签对议题和拉取请求分类，以管理您在 {% data variables.product.product_name %} 上的工作。 您可以在创建标签的仓库中应用标签。 添加标签后，便可在该仓库的任何议题或拉取请求中使用该标签。

对仓库具有读取权限的任何人都能查看和搜索仓库的标签。 对仓库具有鉴定权限的任何人都可以应用/忽略现有标签。 要创建、编辑、应用或删除标签，必须对仓库具有写入权限。

### 关于默认标签

{% data variables.product.product_name %} 在每个新仓库中提供默认标签。 您可以使用这些默认标签帮助在仓库中创建标准工作流程。

| 标签                 | 描述                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `bug`              | 表示意外问题或意外行为{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `文档`               | 表示文档需要改进或补充{% endif %}
| `duplicate`        | 表示类似的议题或拉取请求                                                                                                   |
| `enhancement`      | 表示新功能申请                                                                                                        |
| `good first issue` | 表示适用首次贡献者的议题                                                                                                   |
| `help wanted`      | 表示维护员需要议题或拉取请求方面的帮助                                                                                            |
| `invalid`          | 表示议题或拉取请求不再相关                                                                                                  |
| `question`         | 表示议题或拉取请求需要更多信息                                                                                                |
| `wontfix`          | 表示不会继续处理议题或拉取请求                                                                                                |

创建仓库时，每个新仓库中均包含默认标签，但您稍后可以编辑或删除标签。

Issues with the `good first issue` label are used to populate the repository's `contribute` page. For an example of a `contribute` page, see [github/docs/contribute](https://github.com/github/docs/contribute).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
组织所有者可以自定义其组织中仓库的默认标签。 更多信息请参阅“[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”。
{% endif %}

### 创建标签


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 在搜索字段的右侧，单击 **New label（新建标签）**。
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### 应用标签到议题和拉取请求


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. 在右上角单击 **Label（标签）**，然后开始输入现有标签的名称。 单击标签名称以将其与所选项目关联。 ![议题里程碑分配下拉菜单](/assets/images/help/issues/issues_applying_labels_dropdown.png)

### 编辑标签

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### 删除标签
删除标签将从议题和拉取请求中删除标签。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### 延伸阅读
- "[按标签过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[通过标签鼓励对项目做出有益的贡献](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
