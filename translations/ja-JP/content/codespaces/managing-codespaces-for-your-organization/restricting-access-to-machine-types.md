---
title: コンピューターの種類へのアクセスを制限する
shortTitle: Restrict machine types
intro: ユーザーが Organization で codespace を作成するときに選択できるコンピューターの種類に制約を設定できます。
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159158'
---
## 概要

通常、codespace を作成する際に、codespace を実行するコンピューターの仕様を選択できます。 ニーズに最も適したコンピューターの種類を選択できます。 詳しくは、「[リポジトリの codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)」を参照してください。 

{% data variables.product.prodname_github_codespaces %} の使用料を支払う場合、コンピューターの種類の選択が支払い額に影響します。 codespace のコンピューティング コストは、選んだコンピューターの種類のプロセッサのコア数に比例します。 たとえば、16 コアのマシンで codespace を 1 時間使用する場合のコンピューティング コストは、2 コアのマシンの 8 倍になります。 価格について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

Organaization の所有者として、使用可能なコンピューターの種類に制約を設定できます。 たとえば、Organaization 内の作業で大量のコンピューティング能力やストレージ スペースが必要ない場合は、ユーザーが選択できるオプションのリストから、リソースの多いコンピューターを削除できます。 これを行うには、Organaization の {% data variables.product.prodname_github_codespaces %} 設定でポリシーを 1 つ以上定義します。

### コンピューターの種類の制約を設定するときの動作

定義したポリシーに準拠しなくなった既存の codespace がある場合、これらの codespace は停止またはタイムアウトになるまでは動作し続けます。ユーザーが codespace を再開しようとすると、現在選択されているコンピューターの種類がこの Organaization では許可されなくなったことを通知し、別のコンピューターの種類を選択するように求めるメッセージが表示されます。

Organaization 内の個々のリポジトリの {% data variables.product.prodname_github_codespaces %} 構成で必要とされる高性能のコンピューターの種類を削除すると、そのリポジトリに codespace を作成できなくなります。 だれかが codespace を作成しようとすると、リポジトリの {% data variables.product.prodname_github_codespaces %} 構成要件を満たす有効なコンピューターの種類が使用できないことを示すメッセージが表示されます。

{% note %}

**メモ**: リポジトリ内の `devcontainer.json` 構成ファイルを編集できるユーザーは、そのリポジトリの codespace に使用できるコンピューターの最小仕様を設定できます。 詳細については、「[codespace コンピューターの最小仕様の設定](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines)」を参照してください。

{% endnote %}

コンピューターの種類に対してポリシーを設定した場合に、特定のリポジトリで {% data variables.product.prodname_github_codespaces %} を使えないとき、次の 2 つのオプションがあります。

* 影響を受けるリポジトリから制限を明確に取り除くようにポリシーを調整できます。
* 新しいポリシーが原因でアクセスできなくなった codespace があるユーザーは、その codespace をブランチにエクスポートできます。 このブランチには、codespace からの変更がすべて含まれます。 その後、準拠しているコンピューターの種類を使用してこのブランチで新しい codespace を開くか、このブランチでローカルで作業できます。 詳細については、「[ブランチへの変更のエクスポート](/codespaces/troubleshooting/exporting-changes-to-a-branch)」を参照してください。

### Organaization 全体およびリポジトリ固有のポリシーの設定

ポリシーを作成するときに、ポリシーを Organaization 内のすべてのリポジトリに適用するか、指定されたリポジトリにのみ適用するかを選択します。 Organaization 全体のポリシーを設定する場合は、個々のリポジトリに対して設定するポリシーはすべて、Organaization レベルに設定した制限に収まるようにする必要があります。 ポリシーを追加することで、コンピューターの選択をさらに制限します。

たとえば、コンピューターの種類を 2 コアまたは 4 コアに制限する Organaization 全体のポリシーを作成できます。 その後、リポジトリ A に対して、2 コアのコンピューターに制限するポリシーを設定できます。 リポジトリ A のポリシーを 2、4、または 8 コアのコンピューターに制限するように設定すると、8 コアのコンピューターへのアクセスは Organaization 全体のポリシーによって禁止されるため、2 コアと 4 コアのコンピューターのみ選択できます。

Organaization 全体のポリシーを追加する場合は、Organaization 内のどのリポジトリにも使用できるように、コンピューターの種類を最大の選択肢に設定してください。 その後、リポジトリ固有のポリシーを追加することで、選択肢をさらに制限できます。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 使用可能なコンピューターの種類を制限するポリシーを追加する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **[制約の追加]** をクリックし、 **[コンピューターの種類]** を選択します。

   ![[制約の追加] ドロップダウンメニューのスクリーンショット。](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. {% octicon "pencil" aria-label="The edit icon" %} をクリックして制約を編集し、使用したくないコンピューターの種類の選択をすべて解除します。

   ![制約を編集するための鉛筆アイコンのスクリーンショット](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. ポリシーに別の制約を追加する場合は、 **[制約の追加]** をクリックして、別の制約を選びます。 その他の制約については、次を参照してください。
   * [codespace の基本イメージを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [転送されるポートの可視性を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [アイドル タイムアウトの期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. ポリシーへの制約の追加が終わったら、 **[保存]** をクリックします。

このポリシーは、課金先が自分の Organization の新しいすべての codespace に適用されます。 コンピューターの種類の制約は、だれかが停止した codespace の再起動またはアクティブな codespace への再接続を試みたときに、既存の codespace にも適用されます。

## ポリシーを編集する

既存のポリシーを編集できます。 たとえば、ポリシーの制約を追加または削除できます。

1. [codespace ポリシー] ページを表示します。 詳細については、「[使用可能なコンピューターの種類を制限するポリシーを追加する](#adding-a-policy-to-limit-the-available-machine-types)」を参照してください。
1. 編集するポリシーの名前をクリックします。
1. "コンピューターの種類" 制約の横にある鉛筆アイコン ({% octicon "pencil" aria-label="The edit icon" %}) をクリックします。
1. 必要な変更を行い、 **[保存]** をクリックします。

## ポリシーを削除する 

1. [codespace ポリシー] ページを表示します。 詳細については、「[使用可能なコンピューターの種類を制限するポリシーを追加する](#adding-a-policy-to-limit-the-available-machine-types)」を参照してください。
1. 削除するポリシーの右側にある削除ボタンをクリックします。

   ![ポリシーの [削除] ボタンのスクリーンショット](/assets/images/help/codespaces/policy-delete.png)

## 参考資料

- 「[{% data variables.product.prodname_github_codespaces %} の利用上限の管理](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)」
