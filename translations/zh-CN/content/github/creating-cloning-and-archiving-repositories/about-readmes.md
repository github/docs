---
title: 关于自述文件
intro: '您可以将自述文件添加到仓库，告知其他人您的项目为什么有用，他们可以对您的项目做什么，以及他们可以如何使用。'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于自述文件

You can add a README file to a repository to communicate important information about your project. A README, along with a repository license{% if currentVersion == "free-pro-team@latest" %}, contribution guidelines, and a code of conduct{% elsif enterpriseServerVersions contains currentVersion %} and contribution guidelines{% endif %}, communicates expectations for your project and helps you manage contributions.

For more information about providing guidelines for your project, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a code of conduct to your project](/github/building-a-strong-community/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Setting up your project for healthy contributions](/github/building-a-strong-community/setting-up-your-project-for-healthy-contributions)."

自述文件通常是访问者在访问仓库时看到的第一个项目。 自述文件通常包含以下信息：
- 项目做什么
- 项目为什么有用
- 用户如何使用项目
- 用户能从何处获取项目的帮助
- 谁维护和参与项目

如果将自述文件放在仓库的根目录 `docs` 或隐藏的目录 `.github` 中，{% data variables.product.product_name %} 将会识别您的自述文件并自动向仓库访问者显示。

![Github/scientist 仓库的主页面及其自述文件](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![用户名/用户名仓库上的自述文件](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### 自述文件和 blob 页面中的章节链接

许多项目使用目录和自述文件的开头将用户导向文件的不同章节。 {% data reusables.repositories.section-links %}

### 自述文件中的相对链接和图像路径

{% data reusables.repositories.relative-links %}

### 延伸阅读

- "[添加文件到仓库](/articles/adding-a-file-to-a-repository)"
- 18F 的“[将自述文件设为可读](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)”
