---
title: プライマリメールアドレスの変更
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
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091413"
---
{% note %}

**注:** プライマリ メール アドレスを、バックアップ メール アドレスとして既に設定されているメール アドレスに変更することはできません。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. プライマリ メール アドレスとして新しいメール アドレスを追加する場合、[メールアドレスの追加] の下で新しいメール アドレスを入力し、 **[追加]** をクリックします。
   ![別のメール アドレスを追加するボタン](/assets/images/help/settings/add_another_email_address.png)
4. [プライマリ メール アドレス] で、ドロップダウン メニューを使用して、プライマリ メール アドレスとして設定するメール アドレスをクリックし、 **[保存]** をクリックします。
   ![プライマリに設定するボタン](/assets/images/help/settings/set_as_primary_email.png)
5. 以前のメール アドレスを削除するには、以前のメール アドレスの隣にある {% octicon "trash" aria-label="The trash symbol" %} をクリックします。
{% ifversion fpt or ghec %}
6. 新しいプライマリメールアドレスを検証してください。 検証済みメールアドレスがないと、{% data variables.product.product_name %}の一部の機能を利用できません。 詳細については、「[メール アドレスを検証する](/articles/verifying-your-email-address)」を参照してください。
{% endif %}
