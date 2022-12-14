---
title: GitHub Codespaces の支払いを理解する
intro: '{% data variables.product.prodname_github_codespaces %} 使用に対する課金のしくみを学びます。'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
- /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: 2dfec9e452360db117bdee7954fbe4fad2ad1c56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111546"
---
この記事では、codespace の課金のしくみについて説明します。また、Organization の課金マネージャーの役割についても説明します。

## {% data variables.product.prodname_github_codespaces %} へのアクセス権を取得する

Organization の管理者が {% data variables.product.prodname_github_codespaces %} の使用を特定の個人アカウントのみに制限している場合があります。 アクセス権を取得するには、課金マネージャーに問い合わせる必要があります。 詳しい情報については、[codespace のアクセス権とセキュリティの管理](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)に関するページを参照してください。

## {% data variables.product.prodname_codespaces %} の使用にかかるコスト

{% data variables.product.prodname_codespaces %} の使用料金を確認するには、「[{% data variables.product.prodname_codespaces %} の価格](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)」を参照してください。

## Codespace の使用に対する課金のしくみ

Codespace は、コンピューティング時間 (分) とディスク上で使用するストレージ容量に応じて課金されます。

Codespace のプレビルドを有効にすると、追加料金がかかります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)」をご覧ください。

### コンピューティング時間 (分) について
Codespace は、アクティブな時間に応じて分単位で課金されます。 Codespace ウィンドウが 30 分間アイドル状態のままになっていると、自動的にシャットダウンします。Codespace のコンピューティング課金は、codespace を次に起動するまで停止します。

### Codespace ストレージの課金方法について
{% data variables.product.prodname_github_codespaces %} の場合、ストレージは、クローンされたリポジトリ、構成ファイル、拡張機能など、codespace に関連するすべてのファイルを含むように定義されます。 このストレージは、codespace のシャットダウン中の課金が行われます。 Codespace のストレージの課金は、 https://github.com/codespaces から手動で削除すると停止します。

## 利用上限のしくみ

Organization で {% data variables.product.prodname_codespaces %} を使う前に、課金マネージャーが利用上限を設定する必要があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)」をご覧ください。 

## 利用上限に達した際の変更のエクスポート

{% data reusables.codespaces.exporting-changes %}

## 現在の使用状況と利用上限を確認する
現在の使用状況や利用上限を確認する場合は、Organization の課金マネージャーに問い合わせてください。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。

## Codespace が自動的に削除される場合

Organization やリポジトリから削除されたユーザーの codespace は、自動的に削除されます。

## 使用していない codespace を削除する

https://github.com/codespaces や {% data variables.product.prodname_vscode %} 内からの codespace は、手動で削除できます。 Codespace のサイズを小さくするには、ターミナルを使うか、{% data variables.product.prodname_vscode %} 内から、ファイルを手動で削除できます。

## 参考資料

- 「[Organization で {% data variables.product.prodname_github_codespaces %} の課金を管理する](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)」
