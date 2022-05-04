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
---

{% note %}

**注釈:** プライマリメールアドレスを、バックアップメールアドレスとしてすでに設定されているメールに変更することはできません。

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
3. プライマリメールアドレスとして新しいメールアドレスを追加したい場合、[Add email address] の下で新しいメールアドレスを入力し、[**Add**] をクリックします。 ![別のメールアドレスを追加するボタン](/assets/images/help/settings/add_another_email_address.png)
4. [Primary email address] で、ドロップダウンメニューからプライマリメールアドレスとして使いたいメールアドレスをクリックし、[**Save**] をクリックします。 ![プライマリに設定するボタン](/assets/images/help/settings/set_as_primary_email.png)
5. 古いメールアドレスを削除するには、削除したいメールアドレスの隣にある {% octicon "trash" aria-label="The trash symbol" %}をクリックします。
{% ifversion fpt or ghec %}
6. 新しいプライマリメールアドレスを検証してください。 検証済みメールアドレスがないと、{% data variables.product.product_name %}の一部の機能を利用できません。 詳細は「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。
{% endif %}
