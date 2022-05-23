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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

特定の種類のセルフホストランナーにジョブをまわすためのラベルの利用方法に関する情報については、「[ワークフロー内でのセルフホストランナーの利用](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)」を参照してください。

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## カスタムラベルの作成

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
 {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
 1. In the "Find or create a label" field, type the name of your new label and click **Create new label**. カスタムラベルが作成され、セルフホストランナーに割り当てられます。 カスタムラベルをセルフホストランナーから取り除くことはできますが、現在はラベルを手動で削除することはできません。 {% data reusables.actions.actions-unused-labels %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. "Filter labels（フィルターラベル）"フィールドで、新しいラベルの名前を入力し、**Create new label（新しいラベルの作成）**をクリックしてください。 ![ランナーにラベルを追加](/assets/images/help/settings/actions-add-runner-label.png)

カスタムラベルが作成され、セルフホストランナーに割り当てられます。 カスタムラベルをセルフホストランナーから取り除くことはできますが、現在はラベルを手動で削除することはできません。 {% data reusables.actions.actions-unused-labels %}
{% endif %}

## セルフホストランナーへのラベルの割り当て

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label.
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. ラベルをクリックして、セルフホストランナーに割り当ててください。
{% endif %}

## カスタムラベルのセルフホストランナーからの削除

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-selection %}
{% data reusables.actions.runner-label-settings %}
  1. In the "Find or create a label" field, assigned labels are marked with the
{% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner.
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.actions.self-hosted-runner-list %}
{% data reusables.actions.self-hosted-runner-list-group %}
{% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. 割り当てられているラベルをクリックして、セルフホストランナーから削除してください。 {% data reusables.actions.actions-unused-labels %}
{% endif %}

## 設定スクリプトを使ったラベルの作成と割り当て

セルフホストランナー上の設定スクリプトを使い、カスタムラベルの作成と割り当てを行えます。 たとえば、以下のコマンドは`gpu`というラベルをセルフホストランナーに割り当てます。

```shell
./config.sh --labels gpu
```

このラベルがまだ存在しなければ、作成されます。 このやり方で、`x64`あるいは`linux`といったデフォルトのラベルをランナーに割り当てることもできます。 デフォルトラベルが設定スクリプトで割り当てられた場合、{% data variables.product.prodname_actions %}はそれらを指定されたとおりに受け付け、ランナーが実際にそのオペレーティングシステムやアーキテクチャを使っているかは検証しません。

複数のラベルを割り当てるには、カンマ区切りが使えます。 例:

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** ノート:** 既存のランナーを置き換えた場合は、カスタムラベルがあるなら割り当てをしなおさなければなりません。

{% endnote %}
