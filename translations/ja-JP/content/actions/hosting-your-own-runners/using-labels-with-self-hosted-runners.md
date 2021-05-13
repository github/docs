---
title: セルフホストランナーとのラベルの利用
intro: ラベルを使い、セルフホストランナーを特徴を基に整理できます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

特定の種類のセルフホストランナーにジョブをまわすためのラベルの利用方法に関する情報については、「[ワークフロー内でのセルフホストランナーの利用](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)」を参照してください。

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

### カスタムラベルの作成

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. "Filter labels（フィルターラベル）"フィールドで、新しいラベルの名前を入力し、**Create new label（新しいラベルの作成）**をクリックしてください。 ![ランナーにラベルを追加](/assets/images/help/settings/actions-add-runner-label.png)

カスタムラベルが作成され、セルフホストランナーに割り当てられます。 カスタムラベルをセルフホストランナーから取り除くことはできますが、現在はラベルを手動で削除することはできません。 {% data reusables.github-actions.actions-unused-labels %}

### セルフホストランナーへのラベルの割り当て

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. ラベルをクリックして、セルフホストランナーに割り当ててください。

### カスタムラベルのセルフホストランナーからの削除

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. 割り当てられているラベルをクリックして、セルフホストランナーから削除してください。 {% data reusables.github-actions.actions-unused-labels %}

### 設定スクリプトを使ったラベルの作成と割り当て

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
