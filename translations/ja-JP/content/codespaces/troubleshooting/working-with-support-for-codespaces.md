---
title: codespace に関するサポートの使用
intro: '{% data variables.product.prodname_codespaces %} のサポートから最適なヘルプを得るためのヒント。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090358"
---
codespace に関する問題が発生したときにサポートが支援できるように、codespace の名前とその codespace ID (識別子) を把握しておく必要があります。 さらに、サポートによって、一部のログを共有するように求められる場合があります。 詳細については、「[Codespace のログ](/codespaces/troubleshooting/codespaces-logs)」および「[GitHub サポートについて](/github/working-with-github-support/about-github-support)」を参照してください。

### <a name="codespace-names"></a>codespace 名

各 codespace には、{% data variables.product.company_short %} ハンドル、リポジトリ名、およびいくつかのランダムな文字の組み合わせである一意の名前があります。 追加の文字を使用すると、同じリポジトリ内の異なるブランチの codespace を持つことができます。 (例: `octocat-myrepo-gmc7`)。

codespace の名前を見つけるには:

- ブラウザーで codespace を開きます。 URL のサブドメインは codespace の名前です。 たとえば、`https://octocat-myrepo-gmc7.github.dev` は `octocat-myrepo-gmc7` codespace の URL です。
- codespace を開くことができない場合は、{% data variables.product.product_name %} (https://github.com/codespaces ) で名前にアクセスできます。 https://github.com/codespaces の **[ブラウザーで開く]** オプションにカーソルを合わせると、名前がポップアップに表示されます。 
  ![カーソルを合わせると表示される codespace 名](/assets/images/help/codespaces/find-codespace-name-github.png)

codespace の名前は多くのログ ファイルにも含まれています。 たとえば、codespace ログでは `friendlyName` 値として、{% data variables.product.prodname_github_codespaces %} 拡張機能ログでは `making GET request for` の後に、ブラウザー コンソール ログでは `clientUrl` の後にあります。 詳細については、「[Codespace のログ](/codespaces/troubleshooting/codespaces-logs)」を参照してください。

### <a name="codespaces-ids"></a>codespace ID

すべての codespace には ID (識別子) もあります。 {% data variables.product.prodname_vscode %} ではこれは既定で表示されないため、ID にアクセスする前に {% data variables.product.prodname_github_codespaces %} 拡張機能の設定を更新する必要がある場合があります。

1. {% data variables.product.prodname_vscode %} (ブラウザーまたはデスクトップ) の左側のアクティビティ バーで、 **[リモート エクスプローラー]** をクリックして codespace の詳細を表示します。
2. サイドバーに [codespace パフォーマンス] セクションが含まれている場合は、[codespace ID] にカーソルを合わせ、クリップボード アイコンをクリックしてその ID をコピーします。
3. 情報が表示されない場合は、アクティビティ バーの左下隅にある {% octicon "gear" aria-label="The gear icon" %} をクリックして、[設定] タブを表示します。
4. **[拡張機能]** を展開し、 **[{% data variables.product.prodname_github_codespaces %}]** をクリックして拡張機能の設定を表示します。 その後、 **[パフォーマンス エクスプローラーの表示]** を有効にして、サイドバーに [codespace パフォーマンス] セクションを表示します。
  ![パフォーマンス情報を表示するために必要な codespace ID と設定](/assets/images/help/codespaces/find-codespace-id.png)
