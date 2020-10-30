---
title: 关于标签
intro: '{% data variables.product.product_name %} 上的标签可帮助您组织工作和排列工作的优先级。 您可以对议题和拉取请求贴标签，以指示优先级、类别或您认为有用的任何其他信息。'
redirect_from:
  - /articles/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

标签与它们所在的仓库相关联。 添加标签后，便可在该仓库的任何议题或拉取请求中使用该标签。 更多信息请参阅“[创建标签](/articles/creating-a-label/)”。

对仓库具有读取权限的任何人都能查看和搜索仓库的标签。 要创建、编辑、应用或删除标签，必须对仓库具有写入权限。

### 使用默认标签

{% data variables.product.product_name %} 在每个新仓库中提供默认标签。 您可以使用这些默认标签帮助在仓库中创建标准工作流程：

| 标签                 | 描述                                                                         |
| ------------------ | -------------------------------------------------------------------------- |
| `bug`              | 表示非预期的问题或行为{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `文档`               | 表示文档需要改进或补充{% endif %}
| `duplicate`        | 表示类似的议题或拉取请求                                                               |
| `enhancement`      | 表示新功能申请                                                                    |
| `good first issue` | 表示适用首次贡献者的议题                                                               |
| `help wanted`      | 表示维护员需要议题或拉取请求方面的帮助                                                        |
| `invalid`          | 表示议题或拉取请求不再相关                                                              |
| `question`         | 表示议题或拉取请求需要更多信息                                                            |
| `wontfix`          | 表示不会继续处理议题或拉取请求                                                            |

创建仓库时，每个新仓库中均包含默认标签，但您稍后可以编辑或删除标签。 更多信息请参阅“[删除标签](/articles/deleting-a-label/)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
组织所有者可以自定义其组织中仓库的默认标签。 更多信息请参阅“[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- "[通过标签鼓励对项目做出有益的贡献](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"
{% endif %}
