---
title: codespace の保持期間を制限する
shortTitle: Restrict the retention period
intro: Organaization が所有する codespace の最大保持期間を設定できます。
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158982'
---
## 概要

{% data variables.product.prodname_github_codespaces %} は、停止され、非アクティブな状態が定義された日数を過ぎると、自動的に削除されます。 各 codespace の保持期間は codespace の作成時に設定し、変わることはありません。 

{% data variables.product.prodname_github_codespaces %} にアクセスできるすべてのユーザーが、自分が作成する codespace の保持期間を構成できます。 この既定の保持期間の初期設定は 30 日です。 個々のユーザーは、この期間を 0 から 30 日の範囲で設定できます。 詳しい情報については、「[codespace の自動削除を構成する](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)」をご覧ください。 

Organaization の所有者として、Organaization が所有するリポジトリ用に作成された codespace の最大保持期間に対する制約を構成できます。 これを使うと、codespace の停止後、自動的に削除されるまで未使用のまま放置されることで発生するストレージ コストを抑えることができます。 ストレージ料金の詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。 Organaization が所有するすべてのリポジトリまたは特定のリポジトリに対して、最大保持期間を設定できます。 

### Organaization 全体およびリポジトリ固有のポリシーの設定

ポリシーを作成するときに、ポリシーを Organaization 内のすべてのリポジトリに適用するか、指定したリポジトリにのみ適用するかを選びます。 Organaization 全体のポリシーを作成して、codespace の保持制約を設定する場合、特定のリポジトリを対象とするポリシーの保持制約を、Organaization 全体に対して構成されている制限よりも短くする必要があります。そうしないと、無効になります。 Organization 全体のポリシー、特定のリポジトリを対象とするポリシー、またはユーザーの個人設定の既定の保持期間のうち、最も短い保持期間が適用されます。

Organization 全体のポリシーを追加して、保持制約を設定する場合は、その保持期間を、許容できる最も長い期間に設定する必要があります。 その後、Organization 内の特定のリポジトリに対して個別のポリシーを追加して、その最大保持期間を短く設定できます。

{% data reusables.codespaces.codespaces-org-policies-note %}

## ポリシーを追加して codespace の最大保持期間を設定する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **[制約の追加]** をクリックし、 **[保持期間]** を選びます。

   ![[制約の追加] ドロップダウンメニューのスクリーンショット。](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. 制約を編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。

   ![制約を編集するための鉛筆アイコンのスクリーンショット](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. 自動的に削除されるまで、codespace を停止したままにできる最大日数を入力し、 **[保存]** をクリックします。

   ![保持期間を日数で設定するスクリーンショット](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **注**: 
   * ここでいう 1 日とは、codespace を停止した時点から始まる 24 時間のことです。
   * 有効な範囲は 0 から 30 日です。
   * 期間を `0` に設定すると、codespace は、停止したとき、または非アクティブのためにタイムアウトしたとき、即座に削除されます。

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. ポリシーに別の制約を追加する場合は、 **[制約の追加]** をクリックして、別の制約を選びます。 その他の制約については、次を参照してください。
   * 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
   * [codespace の基本イメージを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [転送されるポートの可視性を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [アイドル タイムアウトの期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
1. ポリシーへの制約の追加が終わったら、 **[保存]** をクリックします。

このポリシーは、課金先が自分の Organization の新しいすべての codespace に適用されます。 保持期間の制約は、codespace の作成時にのみ適用されます。

## ポリシーを編集する

既存のポリシーを編集できます。 たとえば、ポリシーの制約を追加または削除できます。

保持期間制約が codespace に適用されるのは、作成時のみです。 ポリシーを編集しても、既存の codespace には影響しません。

1. [codespace ポリシー] ページを表示します。 詳しい情報については、「[ポリシーを追加して codespace の最大保持期間を設定する](#adding-a-policy-to-set-a-maximum-codespace-retention-period)」をご覧ください。
1. 編集するポリシーの名前をクリックします。
1. "保持期間" 制約の横にある鉛筆アイコン ({% octicon "pencil" aria-label="The edit icon" %}) をクリックします。
1. 必要な変更を行い、 **[保存]** をクリックします。

## ポリシーを削除する 

ポリシーはいつでも削除できます。 ポリシーを削除しても、既存の codespace には影響しません。

1. [codespace ポリシー] ページを表示します。 詳しい情報については、「[ポリシーを追加して codespace の最大保持期間を設定する](#adding-a-policy-to-set-a-maximum-codespace-retention-period)」をご覧ください。
1. 削除するポリシーの右側にある削除ボタンをクリックします。

   ![ポリシーの [削除] ボタンのスクリーンショット](/assets/images/help/codespaces/policy-delete.png)
