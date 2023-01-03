---
title: 転送されるポートの可視性の制限
shortTitle: Restrict port visibility
intro: ユーザーが Organization 内の codespace からポートを転送するときに選択できる可視性オプションに制約を設定できます。
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158974'
---
## 概要

通常、codespace 内では、ポートをプライベートに (自分にのみ)、Organaization のメンバーに、またはパブリックに (URL を持つすべてのユーザーに) 転送することができます。 詳細については、「[codespace でのポートの転送](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

Organaization の所有者は、ユーザーがポートを転送するときに設定できる可視性オプションに対する制約を構成できます。 たとえば、セキュリティのため、パブリック ポートの転送を禁止したい場合があります。 これを行うには、Organaization の {% data variables.product.prodname_github_codespaces %} 設定でポリシーを 1 つ以上定義します。

### ポートの可視性の制約を設定するときの動作

定義されているポリシーに準拠しなくなった既存の codespace がある場合、これらの codespace は停止またはタイムアウトするまで動作し続けます。ユーザーが codespace を再開すると、ポリシーの制約の対象になります。

{% note %}

**注**: プライベート ポート転送は、たとえばポート 22 での SSH の転送など、{% data variables.product.prodname_github_codespaces %} が設計どおりに動作し続けるために必要であるため、プライベート ポート転送を無効にすることはできません。

{% endnote %}

### Organaization 全体およびリポジトリ固有のポリシーの設定

ポリシーを作成するときに、ポリシーを Organaization 内のすべてのリポジトリに適用するか、指定されたリポジトリにのみ適用するかを選択します。 Organaization 全体のポリシーを設定する場合は、個々のリポジトリに対して設定するポリシーはすべて、Organaization レベルに設定した制限に収まるようにする必要があります。 ポリシーを追加すると、可視性オプションの選択に対する制限は、緩くなるのではなく、いっそう厳しくなります。

たとえば、可視性オプションを Organaization のみに制限する Organaization 全体のポリシーを作成できます。 その後、パブリックと Organaization 両方の可視性を禁止するポリシーを、リポジトリ A に設定できます。これにより、このリポジトリではプライベート ポート転送のみが使用できるようになります。 パブリックと Organaization 両方を許可するポリシーをリポジトリ A に設定すると、Organaization 全体のポリシーではパブリックの可視性が許可されないため、組織の可視性のみになります。

Organaization 全体のポリシーを追加する場合は、Organaization 内のどのリポジトリにも使用できる最も寛大な可視性オプションに設定する必要があります。 その後、リポジトリ固有のポリシーを追加することで、選択肢をさらに制限できます。

{% data reusables.codespaces.codespaces-org-policies-note %}

## ポート可視性オプションを制限するポリシーの追加

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. **[制約の追加]** をクリックし、 **[ポートの可視性]** を選択します。

   ![[制約の追加] ドロップダウンメニューのスクリーンショット。](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. 制約を編集するには、{% octicon "pencil" aria-label="The edit icon" %} をクリックします。

   ![制約を編集するための鉛筆アイコンのスクリーンショット](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. 使用しないポート可視性オプション ( **[Organaization]** または **[パブリック]** ) の選択を解除します。

   ![ポート可視性オプションを解除するスクリーンショット](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. ポリシーに別の制約を追加する場合は、 **[制約の追加]** をクリックして、別の制約を選びます。 その他の制約については、次を参照してください。
   * 「[コンピューターの種類へのアクセスを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」
   * [codespace の基本イメージを制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [アイドル タイムアウトの期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. ポリシーへの制約の追加が終わったら、 **[保存]** をクリックします。

このポリシーは、課金先が自分の Organization の新しいすべての codespace に適用されます。 このポート可視性の制約は、次回の起動時に既存の codespace にも適用されます。

## ポリシーを編集する

既存のポリシーを編集できます。 たとえば、ポリシーの制約を追加または削除できます。

1. [codespace ポリシー] ページを表示します。 詳細については、「[ポート可視性オプションを制限するポリシーの追加](#adding-a-policy-to-limit-the-port-visibility-options)」を参照してください。
1. 編集するポリシーの名前をクリックします。
1. "ポート可視性" 制約の横にある鉛筆アイコン ({% octicon "pencil" aria-label="The edit icon" %}) をクリックします。
1. 必要な変更を行い、 **[保存]** をクリックします。

## ポリシーを削除する 

1. [codespace ポリシー] ページを表示します。 詳細については、「[ポート可視性オプションを制限するポリシーの追加](#adding-a-policy-to-limit-the-port-visibility-options)」を参照してください。
1. 削除するポリシーの右側にある削除ボタンをクリックします。

   ![ポリシーの [削除] ボタンのスクリーンショット](/assets/images/help/codespaces/policy-delete.png)
