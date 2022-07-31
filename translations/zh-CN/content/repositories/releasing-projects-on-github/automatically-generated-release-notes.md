---
title: 自动生成的发行说明
intro: 您可以为 GitHub 版本自动生成发行说明
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4974
topics:
  - Repositories
shortTitle: 自动发行说明
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
---

## 关于自动生成的发行说明

自动生成的发行说明为 {% data variables.product.prodname_dotcom %} 发行版手动编写发行说明提供了一种自动替代方法。 使用自动生成的发行说明，您可以快速生成发行版内容的概览。 自动生成的发行说明包括合并的拉取请求列表、版本贡献者列表以及指向完整更改日志的链接。

您还可以自定义自动发行说明，使用标签创建自定义类别来组织要包含的拉取请求，并排除某些标签和用户不出现在输出中。

## 为新版本创建自动生成的发行说明

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 单击 **Draft a new release（草拟新发行版）**。 ![发行版草稿按钮](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}单击 **Choose a tag（选择标记）**，然后键入{% else %}键入{% endif %}发行版的版本号。 或者，选择现有标记。
  {% ifversion fpt or ghec %}
  ![输入标记](/assets/images/help/releases/releases-tag-create.png)
5. 如果要创建新标记，请单击 **Create new tag（创建新标记）**。 ![确认您要创建新标记](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![发行版标记版本](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. 如果已创建新标记，请使用下拉菜单选择包含要发布的项目的分支。
  {% ifversion fpt or ghec %}![选择分支](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![发行版标记分支](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
{%- data reusables.releases.previous-release-tag %}
7. 在说明文本框的右上角，单击{% ifversion previous-release-tag %}**Generate release notes（生成发行说明）**{% else %}**Auto-generate release notes（自动生成发行说明）**{% endif %}。{% ifversion previous-release-tag %} ![Generate release notes](/assets/images/help/releases/generate-release-notes.png){% else %}
![Auto-generate release notes](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. 检查生成的注释，确保它们包含所有（且仅有）您要包含的信息。
9. （可选）要在发行版中包含二进制文件（例如已编译的程序），请在二进制文件框中拖放或手动选择文件。 ![通过发行版提供 DMG](/assets/images/help/releases/releases_adding_binary.gif)
10. 要通知用户发行版本尚不可用于生产，可能不稳定，请选择 **This is a pre-release（这是预发布）**。 ![将版本标记为预发行版的复选框](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt or ghec %}
11. （可选）选择 **Create a discussion for this release（为此版本创建讨论）**，然后选择 **Category（类别）**下拉菜单，然后点击类别进行版本讨论。 ![用于创建发行版讨论和下拉菜单以选择类别的复选框](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. 如果您准备推广您的发行版，请单击 **Publish release（发布版本）**。 要在以后处理该发行版，请单击 **Save draft（保存草稿）**。 ![发布版本和草拟发行版按钮](/assets/images/help/releases/release_buttons.png)


## 配置自动生成的发行说明

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 在文件名字段中，键入 `.github/release.yml` 以在 `.github` 目录中创建 `release.yml` 文件。 ![创建新文件](/assets/images/help/releases/release-yml.png)
4. 在文件中，使用下面的配置选项，在 YAML 中指定要从此版本中排除的拉取请求标签和作者。 您还可以创建新类别并列出要包含在每个类别中的拉取请求标签。

### 配置选项

| 参数                                        | 描述                                                    |
|:----------------------------------------- |:----------------------------------------------------- |
| `changelog.exclude.labels`                | 不在发行说明中显示拉取请求的标签列表。                                   |
| `changelog.exclude.authors`               | 要从发行说明中排除其拉取请求的用户或自动程序登录句柄的列表。                        |
| `changelog.categories[*].title`           | **必需。**发行说明中更改类别的标题。                                  |
| `changelog.categories[*].labels`          | **必需。**符合此类别的拉取请求条件的标签。 使用 `*` 作为与上述任何类别都不匹配的拉取请求的统称。 |
| `changelog.categories[*].exclude.labels`  | 不在此类别中显示拉取请求的标签列表。                                    |
| `changelog.categories[*].exclude.authors` | 要从此类别中排除其拉取请求的用户或自动程序登录句柄的列表。                         |

### 示例配置

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

## 延伸阅读

- "[管理标签](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
