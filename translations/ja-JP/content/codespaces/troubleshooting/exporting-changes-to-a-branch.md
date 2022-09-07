---
title: ブランチへの変更のエクスポート
intro: この記事では、codespace の変更をブランチにエクスポートする手順について説明します。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 676a94ae33b7dba4990014d472cbf28992437a2c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111003'
---
## ブランチへの変更のエクスポート

{% data variables.product.prodname_github_codespaces %} を使用しているときに、codespace を起動せずにブランチに変更をエクスポートする場合があります。

これは、[使用制限](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)に達した場合や、codespace へのアクセスで一般的な問題が発生している場合に便利です。

変更をエクスポートするには、次の操作を行います。

1. [github.com/codespaces](https://github.com/codespaces) の "Your Codespaces" に移動するか、個々のリポジトリの場合は、 **[{% octicon "code" aria-label="The code icon" %} コード]** メニューをクリックします。
2. エクスポートする元の codespace の右側にある省略記号 ( **...** ) をクリックします。
3. **[{% octicon "git-branch" aria-label="The git branch icon" %} ブランチへの変更のエクスポート]** を選択します。

  ![ブランチへの変更をエクスポートする](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. ポップオーバーから、 **[ブランチの作成]** を選択します。
