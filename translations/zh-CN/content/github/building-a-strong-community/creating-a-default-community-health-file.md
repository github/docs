---
title: 创建默认社区健康文件
intro: '您可以创建默认社区健康文件，例如 CONTRIBUTING 和 CODE_OF_CONDUCT。 默认文件将用于不包含该类型自有文件的帐户所拥有的任何公共仓库。'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于默认社区健康文件

You can add default community health files to the root of a public repository called `.github` that is owned by an organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}.

对于在以下任何位置不含该类型自有文件的帐户所拥有的任何公共仓库，{% data variables.product.product_name %} 将使用并显示默认文件：
- 仓库的根目录
- `.github` 文件夹
- `docs` 文件夹

例如，在不含自有 CONTRIBUTING 文件的公共仓库中创建议题或拉取请求的人将会看到指向默认 CONTRIBUTING 文件的链接。 If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, including issue templates or a *config.yml* file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

默认文件不包含在各个仓库的克隆、包或下载中，因为它们只存储在 `.github` 仓库中。

### 支持的文件类型

You can create defaults in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} for the following community health files:

| 社区健康文件                                                                                                                                                          | 描述                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                          | CODE_OF_CONDUCT 文件定义如何参与社区的标准。 更多信息请参阅“[为项目添加行为准则](/articles/adding-a-code-of-conduct-to-your-project/)”。{% endif %}
| *CONTRIBUTING.md*                                                                                                                                               | CONTRIBUTING 文件说明人们应如何参与您的项目。 For more information, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors/)."{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                   | FUNDING 文件在仓库中显示赞助者按钮，以提高开源项目资助选项的可见性。 更多信息请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”。{% endif %}
| Issue and pull request templates{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and *config.yml*{% endif %} | 议题和拉取请求模板可自定义和标准化您希望贡献者在您的仓库中打开议题和拉取请求时加入的信息。 For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates/)."{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                                                                   | SECURITY 文件说明如何负责任地报告项目中的安全漏洞。 更多信息请参阅“[添加安全政策到仓库](/articles/adding-a-security-policy-to-your-repository)”。{% endif %}
| *SUPPORT.md*                                                                                                                                                    | SUPPORT 文件告知获取项目相关帮助的方式。 更多信息请参阅“[为项目添加支持资源](/articles/adding-support-resources-to-your-project/)”。                                                                                                                     |

您不能创建默认许可文件。 必须将许可文件添加到各个仓库中，以便在克隆、打包或下载项目时包含该文件。

### 创建用于默认文件的仓库

{% data reusables.repositories.create_new %}
2. Use the **Owner** drop-down menu, and select the organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} you want to create default files for. ![所有者下拉菜单](/assets/images/help/repository/create-repository-owner.png)
3. 键入 **.github** 作为仓库的名称，可选择键入说明。 ![创建仓库字段](/assets/images/help/repository/default-file-repository-name.png)
4. Make sure the repository status is set to **Public** (a repository for default files cannot be private). ![用于选择机密或公开状态的单选按钮](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. 在仓库中，创建一个受支持的社区健康文件。 Issue templates{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. 所有其他支持的文件必须在仓库的根目录中。 更多信息请参阅“[创建新文件](/articles/creating-new-files/)”。
