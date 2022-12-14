---
title: 更改主电子邮件地址
intro: You can change the email address associated with your personal account at any time.
redirect_from:
- /articles/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Primary email address
ms.openlocfilehash: af1443f1f23b8038d2cf1f4e42a1ab0a83214edb
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145087332"
---
{% note %}

注意：不能将主电子邮件地址更改为已设置为备份电子邮件地址的电子邮件。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. 如果要添加新电子邮件地址以设置为主电子邮件地址，请在“添加电子邮件地址”下键入新电子邮件地址，然后单击“添加”。
   ![添加其他电子邮件地址按钮](/assets/images/help/settings/add_another_email_address.png)
4. 在“主要电子邮件地址”下，使用下拉菜单单击要设置为主电子邮件地址的电子邮件地址，然后单击“保存”。
   ![设为主电子邮件地址按钮](/assets/images/help/settings/set_as_primary_email.png)
5. 要从帐户删除旧电子邮件地址，请在旧电子邮件地址旁边，单击 {% octicon "trash" aria-label="The trash symbol" %}。
{% ifversion fpt or ghec %}
6. 验证新的主电子邮件地址。 如果没有经验证的电子邮件地址，您将无法使用 {% data variables.product.product_name %} 的所有功能。 有关详细信息，请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。
{% endif %}
