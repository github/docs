---
title: 设置仓库参与者指南
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors/
  - /articles/setting-guidelines-for-repository-contributors
intro: 您可以创建告知人们应如何参与您的项目的指南。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

为帮助项目参与者做好工作，您可以将含有参与指南的文件添加到项目仓库的根目录 `docs` 或 `.github` 文件夹。 有人打开拉取请求或创建议题时，他们将看到指向该文件的链接。

![参与指南](/assets/images/help/pull_requests/contributing-guidelines.png)

对于仓库所有者，参与指南是告知人们应如何参与的一种途径。

对于参与者，该指南帮助他们确认其提交格式规范的拉取请求和打开有用的议题。

对于所有者和参与者来说，参与指南节省了由于不正确创建必须拒绝和重新提交的拉取请求或议题而导致的时间和麻烦。

You can create default contribution guidelines for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. 更多信息请参阅“[创建默认社区健康文件](/github/building-a-strong-community/creating-a-default-community-health-file)”。

{% tip %}

**提示：**仓库维护员可以通过为仓库创建议题或拉取请求模板来设置议题的特定指南。 更多信息请参阅“[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)”。

{% endtip %}

### 添加 *CONTRIBUTING* 文件

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 决定是在仓库的根目录 `docs` 还是 `.github` 目录中存储您的参与指南。 然后，在文件名字段中，输入文件的名称和扩展名。 参与指南文件名不区分大小写，并且具有 *.md* 或 *.txt* 等扩展名。 ![新文件名](/assets/images/help/repository/new-file-name.png)
    - 要使您的参与指南在仓库的根目录中显示，请输入 *CONTRIBUTING*。
    - 要使您的参与指南在仓库的 `docs` 目录中显示，请输入 *docs/* 以创建新目录，然后再输入 *CONTRIBUTING*。
4. 在新文件中，添加参与指南。 这些可能包括：
    - 创建良好议题或拉取请求的步骤。
    - 指向外部文档、邮件列表或行为准则的链接。
    - 社区和行为预期。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 参与指南示例

如果您觉得难以着手，以下是参与指南的一些良好示例：

- Atom 编辑器[参与指南](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)。
- Ruby on Rails [参与指南](https://github.com/rails/rails/blob/master/CONTRIBUTING.md)。
- Open Government [参与指南](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md)。

### 延伸阅读
- The Open Source Guides' section "[Starting an Open Source Project](https://opensource.guide/starting-a-project/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
- "[添加许可到仓库](/articles/adding-a-license-to-a-repository)"
