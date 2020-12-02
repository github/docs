---
title: 我的提交为什么链接到错误的用户？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} 使用提交标题中的电子邮件地址将提交链接到 GitHub 用户。 如果将您的提交链接到其他用户，或者根本没有链接到任何用户，您可能需要更改本地 Git 配置设置{% if currentVersion != "github-ae@latest" %}，将电子邮件地址添加到您的帐户电子邮件设置，或同时执行这两项操作{% endif %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% tip %}

**注**：如果您的提交链接到其他用户，这并不意味着该用户能够访问您的仓库。 只有您将用户作为协作者添加或将其添加到具有仓库访问权限的团队时，用户才能访问您拥有的仓库。

{% endtip %}

### 提交链接到其他用户

如果您的提交链接到其他用户，则意味着本地 Git 配置设置中的电子邮件地址已连接到该用户在 {% data variables.product.product_name %}上的帐户。 在这种情况下，您可以将本地 Git 配置设置中的电子邮件{% if currentVersion == "github-ae@latest" %} 更改为 {% data variables.product.product_name %} 上与您的帐户关联的地址，以链接您未来的提交。 原来的提交不会进行链接。 更多信息请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”。{% else %}并且将新的电子邮件地址添加到 {% data variables.product.product_name %} 帐户以将未来的提交链接到您的帐户。

1. 要更改本地 Git 配置中的电子邮件地址，请按照“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”中的步骤操作。 如果您在多台计算机上工作，则需要在每台计算机上更改此设置。
2. 按照“[添加电子邮件地址到 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account)”中的步骤操作，将步骤 2 中的电子邮件地址添加到您的帐户设置。{% endif %}

从这时开始，您提交的内容将链接到您的帐户。

### 提交没有链接到任何用户

如果您的提交没有链接到任何用户，则提交作者的名称不会显示为到用户配置文件的链接。

要检查用于这些提交的电子邮件地址并将提交连接到您的帐户，请执行以下步骤：

1. 通过单击提交消息链接导航到提交。 ![提交消息链接](/assets/images/help/commits/commit-msg-link.png)
2. 要阅读有关提交未链接原因的消息，请将鼠标悬停在用户名右侧的蓝色 {% octicon "question" aria-label="Question mark" %} 上。 ![提交悬停消息](/assets/images/help/commits/commit-hover-msg.png)

  - **无法识别的作者（含电子邮件地址）**如果您看到此消息包含电子邮件地址，则表示用于创作提交的地址未连接到您在 {% data variables.product.product_name %} 上的帐户。 {% if currentVersion != "github-ae@latest" %}要链接提交，请[将电子邮件地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)。{% endif %}如果电子邮件地址关联了 Gravatar，提交旁边将显示该 Gravatar，而不是默认的灰色 Octocat。
  - **无法识别的作者（无电子邮件地址）**如果您看到此消息没有电子邮件地址，则表示您使用了无法连接到您在 {% data variables.product.product_name %} 上的帐户的通用电子邮件地址。{% if currentVersion != "github-ae@latest" %} 您需要[在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)，然后[将新地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)以链接您未来的提交。 旧提交不会链接。{% endif %}
  - **无效的电子邮件地址**本地 Git 配置设置中的电子邮件地址为空白或未格式化为电子邮件地址。{% if currentVersion != "github-ae@latest" %} 您需要[在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)，然后[将新地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)以链接您未来的提交。 旧提交不会链接。{% endif %}

{% if currentVersion == "github-ae@latest" %}
您可以将本地 Git 配置设置中的电子邮件地址更改为与您的帐户关联的地址，以链接您未来的提交。 原来的提交不会进行链接。 更多信息请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”。
{% endif %}

{% warning %}

如果您的本地 Git 配置包含通用电子邮件地址或已附加到其他用户帐户的电子邮件地址，则您之前的提交将不会链接到您的帐户。 虽然 Git 允许您更改用于以前提交的电子邮件地址，但我们强烈反对这样做，尤其是在共享仓库中。

{% endwarning %}

### 延伸阅读

* "[搜索提交](/articles/searching-commits)"
