---
title: Codespaces の GPG 検証を管理する
intro: '変更が信頼できるソースからのものであることを他の人々が確信できるよう、コードスペースで作成したコミットに GPG を自動的に使用して署名するよう {% data variables.product.company_short %} に許可できます。'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
---

{% data reusables.codespaces.release-stage %}

GPG 検証を有効にすると、{% data variables.product.company_short %} は {% data variables.product.prodname_codespaces %} であなたが作成したコミットに自動的に署名し、そのコミットは {% data variables.product.product_name %} で検証済みのステータスとなります。 デフォルトでは、GPG 検証は作成されたコードスペースに対して無効になっています。 GPG 検証を、すべてのリポジトリに対して許可するか特定のリポジトリに対して許可するか選択できます。 GPG 検証は、信頼するリポジトリに対してのみ有効にしてください。 {% data variables.product.product_name %} が署名したコミットに関する詳しい情報については、「[コミット署名の検証について](/github/authenticating-to-github/about-commit-signature-verification)」を参照してください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [GPG verification] で、GPG 検証の設定を選択します。 ![GPG 検証を管理するラジオボタン](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、GPG 検証を有効にするリポジトリをクリックします。 GPG 検証を有効にするすべてのリポジトリについて、同じ手順を繰り返します。 ![[Selected repositories]ドロップダウンメニュー](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 
