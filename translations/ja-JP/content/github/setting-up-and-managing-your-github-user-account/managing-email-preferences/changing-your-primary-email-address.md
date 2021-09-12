---
title: プライマリメールアドレスの変更
intro: ユーザアカウントに関連付けられたメールアドレスは、いつでも変更できます。
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---

{% note %}

**注釈:** プライマリメールアドレスを、バックアップメールアドレスとしてすでに設定されているメールに変更することはできません。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
3. プライマリメールアドレスとして新しいメールアドレスを追加したい場合、[Add email address] の下で新しいメールアドレスを入力し、[**Add**] をクリックします。 ![別のメールアドレスを追加するボタン](/assets/images/help/settings/add_another_email_address.png)
4. [Primary email address] で、ドロップダウンメニューからプライマリメールアドレスとして使いたいメールアドレスをクリックし、[**Save**] をクリックします。 ![プライマリに設定するボタン](/assets/images/help/settings/set_as_primary_email.png)
5. 古いメールアドレスを削除するには、削除したいメールアドレスの隣にある {% octicon "trash" aria-label="The trash symbol" %}をクリックします。
{% if currentVersion == "free-pro-team@latest" %}
6. 新しいプライマリメールアドレスを検証してください。 検証済みメールアドレスがないと、{% data variables.product.product_name %}の一部の機能を利用できません。 詳細は「[メールアドレスを検証する](/articles/verifying-your-email-address)」を参照してください。
{% endif %}

### 参考リンク

- [メールプリファレンスの管理](/articles/managing-email-preferences/)
