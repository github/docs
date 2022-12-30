---
title: セルフホストランナーとのラベルの利用
intro: ラベルを使い、セルフホストランナーを特徴を基に整理できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163253'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

ラベルを使用して、特定の種類のセルフホステッド ランナーにジョブをルーティングする方法について詳しくは、「[ワークフローでのセルフホステッド ランナーの利用](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)」を参照してください。 {% ifversion target-runner-groups %}特定のグループのランナーにジョブをルーティングすることもできます。 詳しくは、[グループ内のランナーのターゲット設定](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group)に関するページを参照してください。{% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## カスタムラベルの作成

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. [ラベル] セクションで、{% octicon "gear" aria-label="The Gear icon" %} をクリックします。
 1. [ラベルの検索または作成] フィールドに新しいラベルの名前を入力し、 **[新しいラベルの作成]** をクリックします。
 カスタムラベルが作成され、セルフホストランナーに割り当てられます。 カスタムラベルをセルフホストランナーから取り除くことはできますが、現在はラベルを手動で削除することはできません。 {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. [ラベルのフィルター] フィールドに新しいラベルの名前を入力し、 **[新しいラベルの作成]** をクリックします。
    ![ランナーにラベルを追加する](/assets/images/help/settings/actions-add-runner-label.png)
    
カスタムラベルが作成され、セルフホストランナーに割り当てられます。 カスタムラベルをセルフホストランナーから取り除くことはできますが、現在はラベルを手動で削除することはできません。 {% data reusables.actions.actions-unused-labels %} {% endif %}

## セルフホストランナーへのラベルの割り当て

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. セルフホステッド ランナーにラベルを割り当てるには、[ラベルの検索または作成] フィールドでラベルをクリックします。 {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. ラベルをクリックして、セルフホストランナーに割り当ててください。 {% endif %}

## カスタムラベルのセルフホストランナーからの削除

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. [ラベルの検索または作成] フィールドでは、割り当てられたラベルに {% octicon "check" aria-label="The Check icon" %} アイコンが付きます。 マークされたラベルをクリックして、セルフホステッド ランナーから割り当てを解除します。 {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 割り当てられているラベルをクリックして、セルフホストランナーから削除してください。 {% data reusables.actions.actions-unused-labels %} {% endif %}

## プログラムによってラベルを割り当てる

ランナーの作成後、またはその初期構成時に、プログラムによってセルフホステッド ランナーにラベルを割り当てることができます。

* プログラムによって既存のセルフホステッド ランナーにラベルを割り当てるには、REST API を使用する必要があります。 詳しくは、「[セルフホステッド ランナー](/rest/actions/self-hosted-runners)」REST API を参照してください。
* ランナーの初期構成時にプログラムによってセルフホステッド ランナーにラベルを割り当てるには、ラベル名を `labels` パラメーターを使って `config` スクリプトに渡します。

  {% note %}
  
  **注:** `config` スクリプトを使って、既存のセルフホステッド ランナーにラベルを割り当てることはできません。
  
  {% endnote %}

  たとえば、次のコマンドを実行すると、新しいセルフホステッド ランナーの構成時に `gpu` という名前のラベルを割り当てることができます。

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  このラベルがまだ存在しなければ、作成されます。 この方法を使用して、`x64` または `linux` といったデフォルトのラベルをランナーに割り当てることもできます。 デフォルトラベルが設定スクリプトで割り当てられた場合、{% data variables.product.prodname_actions %}はそれらを指定されたとおりに受け付け、ランナーが実際にそのオペレーティングシステムやアーキテクチャを使っているかは検証しません。

  複数のラベルを割り当てるには、カンマ区切りが使えます。 たとえば次のような点です。

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** ノート:** 既存のランナーを置き換えた場合は、カスタムラベルがあるなら割り当てをしなおさなければなりません。

  {% endnote %}
