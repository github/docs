---
title: GitHub アカウントへのメールアドレスの追加
intro: '{% data variables.product.product_name %}では、アカウントに必要なだけのメールアドレスを追加できます。 ローカルの Git にメールアドレスを設定してある場合、コミットをアカウントに接続するにはそのアドレスをアカウント設定に追加する必要があります。 メールアドレスとコミットに関する詳細は「 [コミットメールアドレスを設定する] (/articles/setting-your-commit-email-address/)」を参照してください。'
redirect_from:
  - /articles/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Add an email address
---

{% ifversion fpt %}

{% note %}

**参考**:{% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}

## 参考リンク

- [メールプリファレンスの管理](/articles/managing-email-preferences/)
