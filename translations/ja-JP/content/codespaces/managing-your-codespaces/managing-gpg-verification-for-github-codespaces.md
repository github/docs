---
title: GitHub Codespaces の GPG 検証を管理する
intro: '変更が信頼できるソースからのものであることを他の人々が確信できるよう、コードスペースで作成したコミットに GPG を自動的に使用して署名するよう {% data variables.product.company_short %} に許可できます。'
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
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167102'
---
GPG 検証を有効にすると、{% data variables.product.company_short %} は {% data variables.product.prodname_github_codespaces %} であなたが作成したコミットに自動的に署名し、そのコミットは {% data variables.product.product_name %} で検証済みのステータスとなります。 デフォルトでは、GPG 検証は作成されたコードスペースに対して無効になっています。 GPG 検証を、すべてのリポジトリに対して許可するか特定のリポジトリに対して許可するか選択できます。 GPG 検証は、信頼するリポジトリに対してのみ有効にしてください。 {% data variables.product.product_name %} 署名済みコミットの詳細については、「[コミットの署名の検証について](/github/authenticating-to-github/about-commit-signature-verification)」を参照してください。

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**注:** ドットファイル リポジトリを {% data variables.product.prodname_github_codespaces %} にリンクしている場合、ドットファイル内の Git 構成が、{% data variables.product.prodname_github_codespaces %} でコミットに署名するために必要な構成と競合する可能性があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の GPG 検証のトラブルシューティング](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)」を参照してください。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [GPG verification] で、GPG 検証の設定を選択します。
  ![GPG 検証を管理するラジオ ボタン](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. [選択したリポジトリ] を選んだ場合、ドロップダウン メニューを選んでから、GPG 検証を有効にするリポジトリをクリックします。 GPG 検証を有効にするすべてのリポジトリについて、同じ手順を繰り返します。
  ![[選択したリポジトリ] ドロップダウン メニュー](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% data variables.product.prodname_github_codespaces %} の GPG 検証を有効にすると、すべてのコミットは codespace で既定で署名されます。
