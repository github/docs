---
title: 创建有多个作者的提交
intro: '通过在提交消息中添加一个或多个 `Co-authored-by` 尾行，可将提交归属于多个作者。 合作提交在 {% data variables.product.product_name %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} 上可见，并且可包含在个人资料贡献图和仓库统计信息中{% endif %}。'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 必需的合作作者信息

向提交添加合作作者之前，您必须知道用于每个合作作者的适当电子邮件地址。 对于计为贡献的合作作者提交，必须使用与其 {% data variables.product.product_name %} 帐户相关联的电子邮件地址。

{% if currentVersion == "free-pro-team@latest" %}

如果有人选择对其电子邮件地址保密，则应使用其 {% data variables.product.product_name %}-提供的 `no-reply` 电子邮件地址以保护其隐私。 否则，合作作者的电子邮件地址将在提交消息中公开。 如果要保密您的电子邮件地址，您可以选择使用 {% data variables.product.product_name %}-为 Git 操作提供的 `no-reply` 电子邮件地址，并要求其他合作作者在提交尾行中列出您的 `no-reply` 电子邮件地址。

更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。

  {% tip %}

  **提示：**通过分享此信息可帮助合作作者找到其首选电子邮件地址：
  - 要查找 {% data variables.product.product_name %}-提供的 `no-reply` 电子邮件地址，请导航至“Keep my email address private（对我的电子邮件地址保密）”下的电子邮件设置页面。
  - 要在计算机上查找用于配置 Git 的电子邮件地址，请在命令行上运行 `git config user.email`。

  {% endtip %}

{% endif %}

### 使用 {% data variables.product.prodname_desktop %} 创建合作提交

可以使用 {% data variables.product.prodname_desktop %} 创建合作提交。 更多信息请参阅“[编写提交消息并推送更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”和 [{% data variables.product.prodname_desktop %}](https://desktop.github.com)。

![添加合作作者到提交消息](/assets/images/help/desktop/co-authors-demo-hq.gif)

### 在命令行上创建合作提交

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

{% data reusables.pull_requests.commit-message-with-trailer-beginning %}

3. 在提交消息的下一行，根据每个合作作者的特定信息键入 `Co-authored-by: name <name@example.com>`。 在合作作者的信息后面，添加一个右引号。

  如果要添加多个合作作者，请为每个合作作者键入一个 `Co-authored-by:` 提交尾行。
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

在下次推送时，新的提交和消息将显示在 {% data variables.product.product_location %} 上。 更多信息请参阅“[推送更改到远程仓库](/articles/pushing-commits-to-a-remote-repository/)”。

### 在 {% data variables.product.product_name %} 上创建合作提交

在 {% data variables.product.product_name %} 上使用 web 编辑器对文件进行更改后，您可以通过在提交消息中添加 `Co-authored-by:` 尾行来创建合作提交。

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. 合作进行更改后，在页面底部键入简短、有意义的提交消息，以描述你们所做的更改。 ![有关更改的提交消息](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. 在提交消息下方的文本框中，根据每个合作作者的特定信息添加 `Co-authored-by: name <name@example.com>`。 如果要添加多个合作作者，请为每个合作作者键入一个 `Co-authored-by:` 提交尾行。

  ![第二个提交消息文本框中的提交消息合作作者尾行示例](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. 单击 **Commit changes（提交更改）**或 **Propose changes（提议更改）**。

新的提交和消息将显示在 {% data variables.product.product_location %} 上。

### 延伸阅读
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- "[在个人资料中查看贡献](/articles/viewing-contributions-on-your-profile)"
- “[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”{% endif %}
- “[查看仓库活动的摘要](/articles/viewing-a-summary-of-repository-activity)”
- “[查看项目的贡献者](/articles/viewing-a-projects-contributors)”
- “[更改提交消息](/articles/changing-a-commit-message)”
- {% data variables.product.prodname_desktop %} 文档中的“[提交和审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)”
