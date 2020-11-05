---
title: 我的提交为什么链接到错误的用户？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} 使用提交标题中的电子邮件地址将提交链接到 GitHub 用户。 If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings{% if currentVersion != "github-ae@latest" %}, add an email address to your account email settings, or do both{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% tip %}

**注**：如果您的提交链接到其他用户，这并不意味着该用户能够访问您的仓库。 只有您将用户作为协作者添加或将其添加到具有仓库访问权限的团队时，用户才能访问您拥有的仓库。

{% endtip %}

### 提交链接到其他用户

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on {% data variables.product.product_name %}. In this case, you can change the email in your local Git configuration settings{% if currentVersion == "github-ae@latest" %} to the address associated with your account on {% data variables.product.product_name %} to link your future commits. 原来的提交不会进行链接。 For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your {% data variables.product.product_name %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". 如果您在多台计算机上工作，则需要在每台计算机上更改此设置。
2. Add the email address from step 2 to your account settings by following the steps in "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

从这时开始，您提交的内容将链接到您的帐户。

### 提交没有链接到任何用户

如果您的提交没有链接到任何用户，则提交作者的名称不会显示为到用户配置文件的链接。

要检查用于这些提交的电子邮件地址并将提交连接到您的帐户，请执行以下步骤：

1. 通过单击提交消息链接导航到提交。 ![提交消息链接](/assets/images/help/commits/commit-msg-link.png)
2. 要阅读有关提交未链接原因的消息，请将鼠标悬停在用户名右侧的蓝色 {% octicon "question" aria-label="Question mark" %} 上。 ![提交悬停消息](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account).{% endif %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
  - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}
  - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can change the email in your local Git configuration settings to the address associated with your account to link your future commits. 原来的提交不会进行链接。 For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."
{% endif %}

{% warning %}

如果您的本地 Git 配置包含通用电子邮件地址或已附加到其他用户帐户的电子邮件地址，则您之前的提交将不会链接到您的帐户。 虽然 Git 允许您更改用于以前提交的电子邮件地址，但我们强烈反对这样做，尤其是在共享仓库中。

{% endwarning %}

### 延伸阅读

* "[搜索提交](/articles/searching-commits)"
