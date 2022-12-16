---
title: Codespaces の課金について
intro: '{% data variables.product.prodname_codespaces %} の使用状況に対する課金のしくみについて学びます。'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125350"
---
この記事では、codespace の課金のしくみについて説明します。また、Organization の課金マネージャーの役割についても説明します。

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} へのアクセス権を取得する

Enterprise 管理者が {% data variables.product.prodname_codespaces %} の使用を特定の個人アカウントのみに制限している場合があります。 アクセス権を取得するには、課金マネージャーに問い合わせる必要があります。 詳しい情報については、[codespace のアクセス権とセキュリティの管理](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)に関するページを参照してください。

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %} の使用にかかるコスト

{% data variables.product.prodname_codespaces %} の使用料金を確認するには、「[{% data variables.product.prodname_codespaces %} の価格](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)」を参照してください。

## <a name="how-your-codespace-usage-is-billed"></a>Codespace の使用に対する課金のしくみ

Codespace は、コンピューティング時間 (分) とディスク上で使用するストレージ容量に応じて課金されます。

Codespace のプレビルドを有効にすると、追加料金がかかります。 詳細については、「[About Codespaces prebuilds (codespace プレビルドの概要)](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)」を参照してください。

### <a name="understanding-what-compute-minutes-are"></a>コンピューティング時間 (分) について
Codespace は、アクティブな時間に応じて分単位で課金されます。 Codespace ウィンドウが 30 分間アイドル状態のままになっていると、自動的にシャットダウンします。Codespace のコンピューティング課金は、codespace を次に起動するまで停止します。

### <a name="understanding-how-codespace-storage-is-billed"></a>Codespace ストレージの課金方法について
{% data variables.product.prodname_codespaces %} の場合、ストレージは、クローンされたリポジトリ、構成ファイル、拡張機能など、codespace に関連するすべてのファイルを含むように定義されます。 このストレージは、codespace のシャットダウン中の課金が行われます。 Codespace のストレージの課金は、 https://github.com/codespaces から手動で削除すると停止します。

## <a name="how-spending-limits-work"></a>利用上限のしくみ

Organization で {% data variables.product.prodname_codespaces %} を使う前に、課金マネージャーが利用上限を設定する必要があります。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>利用上限に達した際の変更のエクスポート

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>現在の使用状況と利用上限を確認する
現在の使用状況や利用上限を確認する場合は、Organization の課金マネージャーに問い合わせてください。 詳しい情報については、「[Codespaces の使用状況の表示](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)」を参照してください。

## <a name="codespaces-can-be-automatically-deleted"></a>Codespace が自動的に削除される場合

Organization やリポジトリから削除されたユーザーの codespace は、自動的に削除されます。

## <a name="deleting-your-unused-codespaces"></a>使用していない codespace を削除する

https://github.com/codespaces や {% data variables.product.prodname_vscode %} 内からの codespace は、手動で削除できます。 Codespace のサイズを小さくするには、ターミナルを使うか、{% data variables.product.prodname_vscode %} 内から、ファイルを手動で削除できます。

## <a name="further-reading"></a>参考資料

- 「[Organization での codespace の課金の管理](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)」
