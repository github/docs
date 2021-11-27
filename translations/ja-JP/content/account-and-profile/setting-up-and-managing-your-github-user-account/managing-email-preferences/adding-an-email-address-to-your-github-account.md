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
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Add an email address
---

{% ifversion fpt or ghec %}

{% note %}

設定ファイルでクエリスイートを指定すると、{% data variables.product.prodname_codeql %} 分析エンジンは、デフォルトのクエリセットに加えて、スイートに含まれるクエリを実行します。
  - {% data reusables.user_settings.no-verification-disposable-emails %}
  -  If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot make changes to your email address on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}

{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}

## 参考リンク

- [メールプリファレンスの管理](/articles/managing-email-preferences/)
