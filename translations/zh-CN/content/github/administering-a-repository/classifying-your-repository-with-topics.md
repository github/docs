---
title: 使用主题对仓库分类
intro: '为帮助其他人找到并参与您的项目，可以为仓库添加主题，这些主题可以与项目的预期目的、学科领域、关联团队或其他重要特点相关。'
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于主题

使用主题可以探索特定主题领域的仓库，查找要参与的项目，以及发现特定问题的新解决方案。 主题显示在仓库的主页面上。 您可以单击主题名称以{% if currentVersion == "free-pro-team@latest" %}查看相关主题及其他以该主题分类的仓库列表{% else %}搜索使用该主题的其他仓库{% endif %}。

![显示主题的测试仓库主页面](/assets/images/help/repository/os-repo-with-topics.png)

要浏览最常用的主题，请访问 https://github.com/topics/

{% if currentVersion == "free-pro-team@latest" %}您可以在 [github/explore](https://github.com/github/explore) 仓库中参与 {% data variables.product.product_name %} 的专有主题集。 {% endif %}

仓库管理员可以添加他们喜欢的任何主题到仓库。 适用于对仓库分类的主题包括仓库的预期目的、主题领域、社区或语言。{% if currentVersion == "free-pro-team@latest" %}此外，{% data variables.product.product_name %} 也会分析公共仓库内容，生成建议的主题，仓库管理员可以接受或拒绝。 私有仓库内容不可分析，也不会收到主题建议。{% endif %}

公共和私有仓库都可有主题，但在主题搜索结果中只能看到您可以访问的私有仓库。

您可以搜索与公共仓库关联的仓库。 更多信息请参阅“[搜索仓库](/articles/searching-for-repositories#search-by-topic)”。 您也可以搜索 {% data variables.product.product_name %} 中的主题列表。 更多信息请参阅“[搜索主题](/articles/searching-topics)”。

### 添加主题到仓库

{% data reusables.repositories.navigate-to-repo %}{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. 在仓库说明下，单击 **Add topics（添加主题）**。 ![在仓库的主页面上添加主题链接](/assets/images/help/repository/add-topics-link.png)
3. 键入要添加到仓库的主题，然后键入空格。 ![输入主题的表单](/assets/images/help/repository/add-topic-form.png)
4. 完成添加主题后，单击 **Done（完成）**。 ![含主题列表和完成按钮的表单](/assets/images/help/repository/add-topics-done-button.png)
{% else %}
2. 在“About（关于）”右侧，单击 {% octicon "gear" aria-label="The Gear icon" %}。 ![仓库主页上的齿轮图标](/assets/images/help/repository/edit-repository-details-gear.png)
3. 在“"Topics（主题）”下，键入要添加到仓库的主题，然后键入空格。 ![输入主题的表单](/assets/images/help/repository/add-topic-form.png)
4. 完成添加主题后，单击 **Save changes（保存更改）**。 !["Edit repository details（编辑仓库详细信息）"中的"Save changes（保存更改）"按钮](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
{% endif %}
