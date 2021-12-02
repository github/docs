---
title: Codespaces の GPG 検証を管理する
intro: '変更が信頼できるソースからのものであることを他の人々が確信できるよう、コードスペースで作成したコミットに GPG を自動的に使用して署名するよう {% data variables.product.company_short %} に許可できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG 検証
---

 

GPG 検証を有効にすると、{% data variables.product.company_short %} は {% data variables.product.prodname_codespaces %} であなたが作成したコミットに自動的に署名し、そのコミットは {% data variables.product.product_name %} で検証済みのステータスとなります。 デフォルトでは、GPG 検証は作成されたコードスペースに対して無効になっています。 GPG 検証を、すべてのリポジトリに対して許可するか特定のリポジトリに対して許可するか選択できます。 GPG 検証は、信頼するリポジトリに対してのみ有効にしてください。 {% data variables.product.product_name %} が署名したコミットに関する詳しい情報については、「[コミット署名の検証について](/github/authenticating-to-github/about-commit-signature-verification)」を参照してください。

Once you enable GPG verification, it will immediately take effect for all your codespaces.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [GPG verification] で、GPG 検証の設定を選択します。 ![GPG 検証を管理するラジオボタン](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、GPG 検証を有効にするリポジトリをクリックします。 GPG 検証を有効にするすべてのリポジトリについて、同じ手順を繰り返します。 ![[Selected repositories]ドロップダウンメニュー](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png)


{% note %}

**Note:** Once you have enabled GPG verification for {% data variables.product.prodname_codespaces %}, you also must append `-S` to each commit in order for it to be signed. To do this in {% data variables.product.prodname_vscode %}, ensure the "Git: Enable Commit Signing" option is enabled from the Settings.

{% endnote %}
