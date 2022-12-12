---
title: より大きなランナーへのアクセスの制御
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Organization または Enterprise に追加された {% data variables.actions.hosted_runner %} へのアクセスを、ポリシーを使って制限できます。'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189906'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ランナー グループについて

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}詳しくは、[{% data variables.product.prodname_ghe_cloud %} のドキュメント](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners)をご覧ください。{% endif %}

### {% data variables.actions.hosted_runner %}の既定のグループ

{% data variables.actions.hosted_runner %}にアクセスできる Organization と Enterprise は、サイズが異なる 4 つのランナーを含む "既定のより大きなランナー" という名前の既定のランナー グループを自動的に受け取ります。 このグループのランナーはあらかじめ構成されており、すぐに使用できます。 このグループのランナーを使うには、選んだランナーに対応するラベルをワークフロー ファイルに追加する必要があります。 ラベルについては、下の表をご覧ください。 ラベルの使い方について詳しくは、「[ランナーでのジョブの実行](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner)」をご覧ください。


#### 既定のランナー

|説明 | Label | Image |
| ------- | ------- | ------ |
| 4 コアの Ubuntu ランナー | `ubuntu-latest-4-cores` | Ubuntu - 最新 |
| 8 コアの Ubuntu ランナー | `ubuntu-latest-8-cores` | Ubuntu - 最新 |
| 16 コアの Ubuntu ランナー | `ubuntu-latest-16-cores` | Ubuntu - 最新 |
| 8 コアの Windows ランナー | `windows-latest-8-cores` | Windows Server - 最新 |

既定の{% data variables.actions.hosted_runner %} グループは、課金エンティティ レベルで作成されます。 組織が Enterprise アカウントの一部である場合、グループは Enterprise レベルで管理されます。 Organization が Enterprise の管理下にない場合、グループは Organization レベルで管理されます。 

これらのランナーは、ワークフローで使うまで課金されません。 ランナーが使われると、通常と同じように課金処理が行われます。 課金について詳しくは、「[{% data variables.actions.hosted_runner %}の使用](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)」をご覧ください。

Enterprise レベルでの{% data variables.actions.hosted_runner %} グループの既定のアクセスは、Enterprise 内のすべての Organization と自動的に共有するように設定されますが、すべてのリポジトリとは設定されません。 Organization 管理者は、既定の{% data variables.actions.hosted_runner %} グループを各リポジトリと個別に共有する必要があります。 Organization レベルの{% data variables.actions.hosted_runner %} グループの場合は、すべてのリポジトリとグループを自動的に共有するように、既定のアクセス権が設定されます。 アクセス ポリシーを変更する方法と、既定の{% data variables.actions.hosted_runner %} グループが表示される場所について詳しくは、「[ランナー グループのアクセス ポリシーを変更する](#changing-the-access-policy-of-a-runner-group)」をご覧ください。

{% ifversion ghec or ghes or ghae %}

## Organization のランナー グループを作成する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Enterprise のランナー グループを作成する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## ランナー グループのアクセス ポリシーを変更する

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## ランナー グループの名前を変更する

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## ランナーをグループに移動する

{% data reusables.actions.moving-a-runner-to-a-group %}

## ランナー グループを削除する

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
