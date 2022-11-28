---
title: GitHub Codespaces のサポートを使用する
intro: '{% data variables.product.prodname_github_codespaces %} のサポートから最適なヘルプを得るためのヒント。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159896'
---
codespace に関する問題が発生したときにサポートが支援できるように、codespace の永続的な名前とその codespace ID (識別子) を把握しておく必要があります。 さらに、サポートによって、一部のログを共有するように求められる場合があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} ログ](/codespaces/troubleshooting/github-codespaces-logs)」と「[GitHub サポートについて](/github/working-with-github-support/about-github-support)」をご覧ください。

## codespace 名

各 codespace には、{% data variables.product.company_short %} ハンドル、自動的に生成された 2 つか 3 つの単語、およびいくつかのランダムな文字を組み合わせた一意の名前が付けられています。 (例: `octocat-literate-space-parakeet-mld5`)。 また、そのような自動的に生成された 2 つか 3 つの単語によって、codespace の最初の表示名も形成されます (この場合は、`literate-space-parakeet`)。 codespace の表示名は変更できますが、永続的な名前はこれの影響を受けません。 詳しくは、「[codespace の名前を変更する](/codespaces/customizing-your-codespace/renaming-a-codespace)」をご覧ください。

codespace の名前を見つけるには:

- ブラウザーで codespace を開きます。 URL のサブドメインは codespace の名前です。 たとえば、`https://octocat-literate-space-parakeet-mld5.github.dev` は `octocat-literate-space-parakeet-mld5` codespace の URL です。
- codespace を開くことができない場合は、{% data variables.product.product_name %} (https://github.com/codespaces ) で名前にアクセスできます。 https://github.com/codespaces で codespace の表示名にカーソルを合わせると、ポップアップに名前が表示されます。 
  ![カーソルを合わせると表示される codespace 名](/assets/images/help/codespaces/find-codespace-name-github.png)

codespace の名前は多くのログ ファイルにも含まれています。 たとえば、codespace ログでは `friendlyName` 値として、{% data variables.product.prodname_github_codespaces %} 拡張機能ログでは `making GET request for` の後に、ブラウザー コンソール ログでは `clientUrl` の後にあります。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のログ](/codespaces/troubleshooting/github-codespaces-logs)」を参照してください。

## codespace ID

すべての codespace には ID (識別子) もあります。 {% data variables.product.prodname_vscode %} ではこれは既定で表示されないため、ID にアクセスする前に {% data variables.product.prodname_github_codespaces %} 拡張機能の設定を更新する必要がある場合があります。

1. {% data variables.product.prodname_vscode %} (ブラウザーまたはデスクトップ) の左側のアクティビティ バーで、 **[リモート エクスプローラー]** をクリックして codespace の詳細を表示します。
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. サイドバーに [codespace パフォーマンス] セクションが含まれている場合は、[codespace ID] にカーソルを合わせ、クリップボード アイコンをクリックしてその ID をコピーします。
1. 情報が表示されない場合は、アクティビティ バーの左下隅にある {% octicon "gear" aria-label="The gear icon" %} をクリックして、[設定] タブを表示します。
1. **[拡張機能]** を展開し、 **[{% data variables.product.prodname_github_codespaces %}]** をクリックして拡張機能の設定を表示します。 その後、 **[パフォーマンス エクスプローラーの表示]** を有効にして、サイドバーに [codespace パフォーマンス] セクションを表示します。
  ![パフォーマンス情報を表示するために必要な codespace ID と設定](/assets/images/help/codespaces/find-codespace-id.png)
