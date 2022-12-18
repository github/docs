---
title: 組織での GitHub Codespaces のコストの管理
shortTitle: Manage Codespaces costs
intro: '{% data variables.product.prodname_github_codespaces %} の使用状況を確認し、使用制限を設定できます。'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158710'
---
## 概要

組織は、{% data variables.product.prodname_github_codespaces %} のコンピューティングとストレージの使用量に応じて課金されます。 この記事では、組織所有者としてこれらのコストを管理する方法について説明します。

{% data variables.product.prodname_github_codespaces %} の価格については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」を参照してください。

## 使用制限

組織内の {% data variables.product.prodname_github_codespaces %} の使用制限を設定できます。 この制限は、{% data variables.product.prodname_github_codespaces %} のコンピューティングとストレージの合計コストに適用されます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)」をご覧ください。
 
- **コンピューティング使用量:** これは、請求月にすべての {% data variables.product.prodname_github_codespaces %} インスタンス ("codespaces") がアクティブであった合計時間です。 

- **ストレージ使用量:** {% data variables.product.prodname_github_codespaces %} の課金目的の場合、アカウント内のすべての codespace とプレビルドで使用されるすべてのファイルが含まれます。 これには特に、クローンされたリポジトリ、構成ファイル、拡張機能などのリソースが含まれます。 

現在の請求月の {% data variables.product.prodname_github_codespaces %} のコンピューティングとストレージの使用量を確認できます。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の使用状況を表示する](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)」を参照してください。

{% note %}

**注**: {% data variables.product.prodname_github_codespaces %} のプレビルドは、{% data variables.product.prodname_actions %} を使用して作成および更新されます。 これにより、{% data variables.product.prodname_actions %} の課金対象コストが発生する可能性があります。 {% data variables.product.prodname_actions %} に対して使用制限を設定できます。 詳細については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)」および「[{% data variables.product.prodname_actions %} の使用制限の管理](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)」を参照してください。 生成されたプレビルドのストレージは、codespace と同じレートで課金され、{% data variables.product.prodname_github_codespaces %} の使用制限に含まれます。

{% endnote %}

## {% data variables.product.prodname_codespaces %} の無効化または制限

Organization への請求の対象となる {% data variables.product.prodname_github_codespaces %} の使用をすべて無効にできます。 または、Organization の費用で {% data variables.product.prodname_codespaces %} を使うことができる Organization のメンバーまたはコラボレーターを指定できます。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」をご覧ください。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

特定のリポジトリ用に作成された codespace からアクセスできるリポジトリを構成できます。 詳しくは、「[codespace 内の他のリポジトリへのアクセスの管理](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」をご覧ください。

Organization が所有するリポジトリから作成された codespace で使うことができるコンピューターの種類を制限できます。 これにより、ユーザーがリソースの多いコンピューターを codespace に使えないようにしたり、不要な料金が発生しないようにしたりすることができます。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

最大アイドル タイムアウト制約を設定して、組織に対して課金できる codespace に対してユーザーが設定できる最大タイムアウトを制限できます。 これにより、短いタイムアウト期間の後でアクティブな codespace を停止することで、アイドル状態で実行されたままになっている codespace によって生成されるコンピューティング使用量の料金を削減できます。 詳細については、「[アイドル タイムアウト期間の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)」を参照してください。

また、停止された codespace が未使用の状態のままの期間を制限することもできます。これを過ぎると、自動的に削除されます。 これは、{% data variables.product.prodname_codespaces %} のストレージ コストの低減につながります。 詳しい情報については、「[codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)」をご覧ください。

リポジトリのプレビルドを設定したリポジトリ所有者は、選んだリージョンでのみ作成されるように構成することで、プレビルドのストレージ コストを削減できます。 詳しくは、「[事前ビルドを構成する](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)」をご覧ください。

## 未使用の codespaces の削除

ユーザーは、 https://github.com/codespaces または {% data variables.product.prodname_vscode %} 内から自分の codespace を削除できます。 Codespace のサイズを小さくするには、ユーザーはターミナルを使うか、{% data variables.product.prodname_vscode_shortname %} 内から、ファイルを手動で削除できます。 

組織の所有者は、組織内の任意の codespace を削除できます。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)」を参照してください。

{% note %}

**注:** Codespace は、停止して、非アクティブな状態となって、ユーザー定義可能な日数を過ぎると、自動的に削除されます。 詳しい情報については、「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」をご覧ください。 組織の所有者は、組織が所有する codespace の最大保持期間を設定できます。 これにより、ユーザーの個人保持設定がオーバーライドされます。 詳しい情報については、「[codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)」をご覧ください。

{% endnote %}

## 参考資料

- [組織内の codespace を一覧表示する](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
