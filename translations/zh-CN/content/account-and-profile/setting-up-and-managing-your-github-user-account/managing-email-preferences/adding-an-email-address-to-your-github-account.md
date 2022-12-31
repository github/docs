---
title: 添加电子邮件地址到 GitHub 帐户
intro: '{% data variables.product.product_name %} allows you to add as many email addresses to your account as you like. If you set an email address in your local Git configuration, you will need to add it to your account settings in order to connect your commits to your account. For more information about your email address and commits, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."'
redirect_from:
- /articles/adding-an-email-address-to-your-github-account
- /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Add an email address
ms.openlocfilehash: 3d7efd2e72ed1ab23ccf2e686f4a1c1c7653cc1f
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145087335"
---
{% ifversion fpt or ghec %}

{% note %}

**注释**： 
  - {% data reusables.user-settings.no-verification-disposable-emails %}
  -  如果您是 {% data variables.product.prodname_emu_enterprise %} 的成员，则无法在 {% data variables.product.prodname_dotcom_the_website %} 上更改您的电子邮件地址。 {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}

## <a name="further-reading"></a>延伸阅读

- [管理电子邮件首选项](/articles/managing-email-preferences/)
