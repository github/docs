---
title: Codespaces の GPG 検証を管理する
intro: 変更が信頼できるソースからのものであることを他の人々が確信できるよう、コードスペースで作成したコミットに GPG を自動的に使用して署名するよう {% data variables.product.company_short %} に許可できます。
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
shortTitle: GPG verification
ms.openlocfilehash: 588082ccd4d861afd8fc78b3b56ae22a06ba72d9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119829"
---
GPG 検証を有効にすると、{% data variables.product.company_short %} は {% data variables.product.prodname_codespaces %} であなたが作成したコミットに自動的に署名し、そのコミットは {% data variables.product.product_name %} で検証済みのステータスとなります。 デフォルトでは、GPG 検証は作成されたコードスペースに対して無効になっています。 GPG 検証を、すべてのリポジトリに対して許可するか特定のリポジトリに対して許可するか選択できます。 GPG 検証は、信頼するリポジトリに対してのみ有効にしてください。 {% data variables.product.product_name %} 署名済みコミットの詳細については、「[コミットの署名の検証について](/github/authenticating-to-github/about-commit-signature-verification)」を参照してください。

GPG 検証を有効にすると、すべての codespace に対して、ただちに有効になります。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [GPG verification] で、GPG 検証の設定を選択します。
  ![GPG 検証を管理するラジオ ボタン](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、GPG 検証を有効にするリポジトリをクリックします。 GPG 検証を有効にするすべてのリポジトリについて、同じ手順を繰り返します。
  ![[選択したリポジトリ] ドロップダウン メニュー](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**注:** {% data variables.product.prodname_codespaces %} に対して GPG 検証を有効にすると、署名されるように、各コミットに `-S` を追加する必要があります。 {% data variables.product.prodname_vscode %} でこれを行うには、[設定] で [Git: コミット署名を有効にする] オプションが有効になっていることを確認します。

{% endnote %}
