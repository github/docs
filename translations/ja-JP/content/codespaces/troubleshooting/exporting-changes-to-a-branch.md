---
title: ブランチへの変更のエクスポート
intro: この記事では、codespace の変更をブランチにエクスポートする手順について説明します。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159911'
---
## ブランチへの変更のエクスポート

{% data variables.product.prodname_github_codespaces %} を使用しているときに、codespace を起動せずにブランチに変更をエクスポートする場合があります。 これは、[使用制限](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)に達した場合や、codespace へのアクセスで一般的な問題が発生している場合に便利です。

codespace が未公開 (テンプレートから作成して、{% data variables.product.product_name %} のリポジトリに関連付けられていない状態) の場合は、変更をブランチにエクスポートすることはできませんが、codespace を起動せずに codespace を新しいリポジトリに発行することはできます。 詳しくは、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom)」をご覧ください。

変更をブランチにエクスポートするには、次の操作を行います。

{% data reusables.codespaces.your-codespaces-procedure-step %} または、個々のリポジトリでは、 **[{% octicon "code" aria-label="The code icon" %} コード]** メニューをクリックします。
1. エクスポートする元の codespace の右側にある省略記号 ( **...** ) をクリックします。
2. **[{% octicon "git-branch" aria-label="The git branch icon" %} ブランチへの変更のエクスポート]** を選択します。

  ![ブランチへの変更をエクスポートする](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. ポップオーバーから、 **[ブランチの作成]** を選択します。
