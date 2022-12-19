---
title: アイドル タイムアウトの期間を制限する
shortTitle: Restrict timeout periods
intro: Organaization が所有する codespace の最大タイムアウト期間を設定できます。
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158990'
---
## 概要

既定では、codespace は 30 分間アクティビティがないとタイムアウトします。 codespace はタイムアウトすると停止し、コンピューティング使用量に対する料金は発生しなくなります。 

{% data variables.product.prodname_dotcom %} ユーザーの個人設定では、ユーザーが作成する codespace に対して独自のタイムアウト期間を定義できます。 これは、既定の 30 分より長くてもかまいません。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」をご覧ください。

Organaization のオーナーとして、Organaization が所有するリポジトリ用に作成された codespace の最大アイドル タイムアウト期間に対する制約を構成する必要がある場合があります。 これは、codespace がタイムアウトするまでに長い非アクティブ期間が設定されてコストがかかるのを制限するのに役立ちます。 Organization によって所有されるすべてのリポジトリの codespace、または特定のリポジトリの codespace に対して、最大タイムアウトを設定できます。 

{% note %}

**注**: 最大アイドル タイムアウトの制約は、Organization が所有する codespace にのみ適用されます。

{% endnote %}

{% data variables.product.prodname_github_codespaces %} のコンピューティング使用量に対する価格について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

### 最大アイドル タイムアウトの制約を設定したときの動作

ユーザーが個人設定で既定のアイドル タイムアウトを 90 分に設定した後、最大アイドル タイムアウトの制約が 60 分に設定されたリポジトリの codespace を開始した場合、その codespace は 60 分間アクティビティがないとタイムアウトします。 codespace の作成が完了すると、これを説明するメッセージが表示されます。

> この codespace のアイドル タイムアウトは、Organization のポリシーに従って 60 分に設定されます。

### Organaization 全体およびリポジトリ固有のポリシーの設定

ポリシーを作成するときに、ポリシーを Organaization 内のすべてのリポジトリに適用するか、指定したリポジトリにのみ適用するかを選びます。 タイムアウトの制約を含む Organization 全体のポリシーを作成する場合、特定のリポジトリを対象とするポリシーでのタイムアウトの制約は、Organization 全体に対して構成された制限内に収まる必要があります。 Organization 全体のポリシー、特定のリポジトリを対象とするポリシー、またはユーザーの個人設定の中で最短のタイムアウト期間が適用されます。

タイムアウトの制約を含む Organization 全体のポリシーを追加する場合は、タイムアウトを許容できる最も長い期間に設定する必要があります。 その後、Organization 内の特定のリポジトリに対して、それより短い最大タイムアウト期間を設定する個別のポリシーを追加できます。

{% data reusables.codespaces.codespaces-org-policies-note %}

## 最大アイドル タイムアウト期間を設定するポリシーを追加する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **[制約の追加]** をクリックして、 **[最大アイドル タイムアウト]** を選びます。

   ![[制約の追加] ドロップダウンメニューのスクリーンショット。](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. 制約を編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。

   ![制約を編集するための鉛筆アイコンのスクリーンショット](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. タイムアウトする前に codespace を非アクティブにできる最大時間 (分) を入力して、 **[保存]** をクリックします。

   ![最大タイムアウト (分単位) の設定のスクリーンショット](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. ポリシーに別の制約を追加する場合は、 **[制約の追加]** をクリックして、別の制約を選びます。 その他の制約については、次を参照してください。
   * 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
   * [codespace の基本イメージを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [転送されるポートの可視性を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. ポリシーへの制約の追加が終わったら、 **[保存]** をクリックします。

このポリシーは、課金先が自分の Organization の新しいすべての codespace に適用されます。 タイムアウトの制約は、次回の起動時に既存の codespace にも適用されます。

## ポリシーを編集する

既存のポリシーを編集できます。 たとえば、ポリシーの制約を追加または削除できます。

1. [codespace ポリシー] ページを表示します。 詳しくは、「[最大アイドル タイムアウト期間を設定するポリシーを追加する](#adding-a-policy-to-set-a-maximum-idle-timeout-period)」をご覧ください。
1. 編集するポリシーの名前をクリックします。
1. "最大アイドル タイムアウト" 制約の横にある鉛筆アイコン ({% octicon "pencil" aria-label="The edit icon" %}) をクリックします。
1. 必要な変更を行い、 **[保存]** をクリックします。

## ポリシーを削除する 

1. [codespace ポリシー] ページを表示します。 詳しくは、「[最大アイドル タイムアウト期間を設定するポリシーを追加する](#adding-a-policy-to-set-a-maximum-idle-timeout-period)」をご覧ください。
1. 削除するポリシーの右側にある削除ボタンをクリックします。

   ![ポリシーの [削除] ボタンのスクリーンショット](/assets/images/help/codespaces/policy-delete.png)
