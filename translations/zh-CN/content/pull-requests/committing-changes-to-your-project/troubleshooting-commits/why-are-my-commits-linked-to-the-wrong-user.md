---
title: 我的提交为什么链接到错误的用户？
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} 使用提交标题中的电子邮件地址将提交链接到 GitHub 用户。 如果将提交链接到其他用户，或者根本没有链接到任何用户，你可能需要更改本地 Git 配置设置{% ifversion not ghae %}，将电子邮件地址添加到帐户电子邮件设置，或同时执行这两项操作{% endif %}。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883033'
---
{% tip %}

注意：如果提交与其他用户关联，这并不意味着该用户能够访问你的存储库。 只有您将用户作为协作者添加或将其添加到具有仓库访问权限的团队时，用户才能访问您拥有的仓库。

{% endtip %}

## 提交链接到其他用户

如果您的提交链接到其他用户，则意味着本地 Git 配置设置中的电子邮件地址已连接到该用户在 {% data variables.product.product_name %}上的帐户。 在这种情况下，可以将本地 Git 配置设置{% ifversion ghae %}中的电子邮件更改为 {% data variables.product.product_name %} 上与你的帐户关联的地址，以关联未来的提交。 原来的提交不会进行链接。 有关详细信息，请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)。”{% else %}并将新的电子邮件地址添加到你在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 帐户上的帐户，将未来的提交与你的帐户关联。

1. 要更改本地 Git 配置中的电子邮件地址，请按照“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”中的步骤操作。 如果您在多台计算机上工作，则需要在每台计算机上更改此设置。
2. 按照“[将电子邮件地址添加到 GitHub 帐户](/articles/adding-an-email-address-to-your-github-account)”中的步骤，将第 2 步中的电子邮件地址添加到你的帐户设置中。{% endif %}

从这时开始，您提交的内容将链接到您的帐户。

## 提交没有链接到任何用户

如果您的提交没有链接到任何用户，则提交作者的名称不会显示为到用户配置文件的链接。

要检查用于这些提交的电子邮件地址并将提交连接到您的帐户，请执行以下步骤：

1. 通过单击提交消息链接导航到提交。
![提交消息关联](/assets/images/help/commits/commit-msg-link.png)
2. 要阅读有关提交未关联原因的消息，请将鼠标悬停在用户名右侧的蓝色 {% octicon "question" aria-label="Question mark" %} 上。
![提交悬停消息](/assets/images/help/commits/commit-hover-msg.png)

  - **作者无法识别（有电子邮件地址）** 如果你看到这条消息且有电子邮件地址，则表示用于创作提交的地址未连接到你在 {% data variables.product.product_name %} 上的帐户。 {% ifversion not ghae %}要关联提交，请[将电子邮件地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)。{% endif %}{% ifversion not ghae %} 如果电子邮件地址关联了 Gravatar，提交旁将显示该 Gravatar，而不是默认的灰色 Octocat。{% endif %}
  - **作者无法识别（无电子邮件地址）** 如果你看到这条消息且没有电子邮件地址，则表示使用了无法连接到在 {% data variables.product.product_name %} 上的帐户的通用电子邮件地址。{% ifversion not ghae %}你需要 [在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)，然后 [将新地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)以关联未来的提交。 旧提交不会链接。{% endif %}
  - **电子邮件无效** 本地 Git 配置设置中的电子邮件地址为空白或未格式化为电子邮件地址。{% ifversion not ghae %}你需要 [在 Git 中设置提交电子邮件地址](/articles/setting-your-commit-email-address)，然后 [将新地址添加到 GitHub 电子邮件设置](/articles/adding-an-email-address-to-your-github-account)以关联未来的提交。 旧提交不会链接。{% endif %}

{% ifversion ghae %} 可以将本地 Git 配置设置中的电子邮件地址更改为与你的帐户关联的地址，以关联未来的提交。 原来的提交不会进行链接。 有关详细信息，请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”。
{% endif %}

{% warning %}

如果您的本地 Git 配置包含通用电子邮件地址或已附加到其他用户帐户的电子邮件地址，则您之前的提交将不会链接到您的帐户。 虽然 Git 允许您更改用于以前提交的电子邮件地址，但我们强烈反对这样做，尤其是在共享仓库中。

{% endwarning %}

## 延伸阅读

* [搜索提交](/search-github/searching-on-github/searching-commits)
