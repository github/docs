---
title: プライマリメールアドレスの変更
intro: 個人アカウントに関連付けられたメールアドレスは、いつでも変更できます。
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Primary email address
ms.openlocfilehash: 5624a44c888b20350497fd2a4ec5a0d07186cdfe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165286'
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
