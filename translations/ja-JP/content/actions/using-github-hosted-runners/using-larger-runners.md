---
title: より大きなランナーの使用
intro: '{% data variables.product.prodname_dotcom %} は、より多くの RAM と CPU を備えた、より大きなランナーを提供します。'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
shortTitle: 'Using {% data variables.actions.hosted_runner %}s'
ms.openlocfilehash: 6029c4da6214053d13a21e52b35c6c4eca798d31
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147864569'
---
## {% data variables.actions.hosted_runner %}の概要

[標準の {% data variables.product.prodname_dotcom %} ホスト ランナー](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)に加えて、{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_team %} と {% data variables.product.prodname_ghe_cloud %} プランのお客様にも、より多くの RAM と CPU を備えたさまざまな{% data variables.actions.hosted_runner %}を提供しています。 これらのランナーは、{% data variables.product.prodname_dotcom %} によってホストされ、ランナー アプリケーションとその他のツールをプレインストールしています。

{% data variables.actions.hosted_runner %}を Organization に追加する場合は、使用可能なハードウェア仕様とオペレーティング システム イメージから選んだマシンの種類を定義します。 {% data variables.product.prodname_dotcom %} では、定義した自動スケールの制限に基づき、Organization のジョブの需要に合わせてスケールアップおよびスケールダウンする、このランナーの複数のインスタンスが作成されます。

## {% data variables.actions.hosted_runner %}のアーキテクチャの概要

{% data variables.actions.hosted_runner %}は Organization レベルで管理され、ランナーの複数のインスタンスを含むことができるグループに配置されます。 また、Enterprise レベルで作成し、階層内の Organization と共有することもできます。 グループを作成したら、ランナーをグループに追加し、ワークフローを更新して、{% data variables.actions.hosted_runner %}に割り当てられたラベルをターゲットにすることができます。 また、処理のためにグループにジョブを送信できるリポジトリも制御できます。 グループについて詳しくは、「[{% data variables.actions.hosted_runner %}へのアクセスの制御](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)」を参照してください。

次の図では、`ubuntu-20.04-16core` という名前のホストされたランナーのクラスが、カスタマイズされたハードウェアとオペレーティング システムの構成で定義されています。

![{% data variables.actions.hosted_runner %}を説明した図](/assets/images/hosted-runner.png)

1. このランナーのインスタンスは自動的に作成され、`ubuntu-20.04-16core` というグループに追加されます。 
2. ランナーにはラベル `ubuntu-20.04-16core` が割り当てられています。 
3. ワークフロー ジョブは、`runs-on` キーの `ubuntu-20.04-16core` ラベルを使用して、ジョブの実行に必要なランナーの種類を示します。
4. {% data variables.product.prodname_actions %} は、ランナー グループをチェックして、リポジトリがランナーにジョブを送信する権限があるかどうかを確認します。
5. このジョブは、`ubuntu-20.04-16core` ランナーの次に使用可能なインスタンスで実行されます。

## {% data variables.actions.hosted_runner %}の自動スケーリング

{% data variables.actions.hosted_runner %}は、ニーズに合わせて自動的にスケーリングするように構成できます。 ジョブが処理のために送信されると、事前に定義された上限に達するまで、ジョブを実行するために、より多くのマシンを自動的にプロビジョニングできます。 各マシンは一度に 1 つのジョブのみを処理するため、これらの設定によって、同時に実行できるジョブの数が効率的に決定されます。 

ランナーの展開プロセス中に _[最大]_ オプションを構成できます。これにより、このセットで並行して作成されるマシンの最大数を設定してコストを制御できます。 この値を大きくすると、並列処理によってワークフローがブロックされるのを回避できます。

## {% data variables.actions.hosted_runner %}のネットワーク

既定では、{% data variables.actions.hosted_runner %}は、ジョブの実行ごとに変更される動的 IP アドレスを受け取ります。 必要に応じて、{% data variables.product.prodname_ghe_cloud %} のお客様は、{% data variables.actions.hosted_runner %}を構成して、{% data variables.product.prodname_dotcom %} の IP アドレス プールから静的 IP アドレスを受信できます。 有効にすると、{% data variables.actions.hosted_runner %}のインスタンスは、ランナーに固有の範囲からアドレスを受け取り、この範囲を使用してファイアウォール許可リストを構成できます。 すべての{% data variables.actions.hosted_runner %}で、合計で最大 10 個の静的 IP アドレス範囲を使用できます。

{% note %}

**注**: ランナーが 30 日以上使用されていない場合、その IP アドレス範囲は自動的に削除され、回復することができません。

{% endnote %}

## {% data variables.actions.hosted_runner %}の計画

### ランナー グループを作成する

ランナー グループは、仮想マシンのセットを収集し、その周囲にセキュリティ境界を作成するために使用されます。 その後、それらのマシン セットでジョブを実行できる Organization またはリポジトリを決定できます。 {% data variables.actions.hosted_runner %}の展開プロセス中に、ランナーを既存のグループに追加することも、既定のグループに参加させることもできます。 「[{% data variables.actions.hosted_runner %}へのアクセスの制御](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)」の手順に従ってグループを作成できます。

### 課金について

標準の {% data variables.product.prodname_dotcom %} ホスト ランナーと比較すると、{% data variables.actions.hosted_runner %}の課金方法は異なります。 詳しくは、「[1 分あたりの料金](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)」を参照してください。

## Enterprise への{% data variables.actions.hosted_runner %}の追加

{% data variables.actions.hosted_runner %}を Enterprise に追加して、複数の Organization に割り当てることができます。 Organization の管理者は、そのランナーを使用できるリポジトリを制御できます。 {% data variables.actions.hosted_runner %}を Enterprise に追加するには、Enterprise の所有者である必要があります。

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. Organization が{% data variables.actions.hosted_runner %}にアクセスできるようにするには、それを使用できる Organization の一覧を指定します。 詳しくは、「[ランナーへのアクセスの管理](#managing-access-to-your-runners)」を参照してください。

## Organization への{% data variables.actions.hosted_runner %}の追加

{% data variables.actions.hosted_runner %}を Organization に追加できます。ここで、Organization 管理者は、それを使用できるリポジトリを制御できます。 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. リポジトリが{% data variables.actions.hosted_runner %}にアクセスできるようにするには、それを使用できるリポジトリの一覧に追加します。 詳しくは、「[ランナーへのアクセスの管理](#managing-access-to-your-runners)」を参照してください。

## ランナーでのジョブの実行

ランナーの種類が定義されたら、ワークフローを更新して、処理のためにランナー インスタンスにジョブを送信できます。 この例では、ランナー グループに、ラベル `ubuntu-20.04-16core` が割り当てられている Ubuntu 16-core ランナーが設定されています。 このラベルに一致するランナーがある場合、`check-bats-version` ジョブはジョブが実行されるたびに `runs-on` キーを使用してそのランナーをターゲットにします。

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

## ランナーへのアクセスの管理

{% note %}

**注**: ワークフローが{% data variables.actions.hosted_runner %}にジョブを送信できるようにするには、まずランナー グループのアクセス許可を構成する必要があります。 詳しくは、以下のセクションをご覧ください。

{% endnote %}

ランナー グループは、{% data variables.actions.hosted_runner %}でジョブを実行できるリポジトリを制御するために使用されます。 {% data variables.actions.hosted_runner %}を定義した場所に応じて、管理階層の各レベルからグループへのアクセス権を付与する必要があります。

- **Enterprise レベルのランナー**: 必要なすべての Organization へのアクセス権を付与するようにランナー グループを構成します。 さらに、Organization ごとに、アクセスが許可されたリポジトリを指定するようにグループを構成する必要があります。
- **Organization レベルのランナー**: アクセスが許可されたリポジトリを指定して、ランナー グループを構成します。

たとえば、次の図には、Enterprise レベルに `grp-ubuntu-20.04-16core` という名前のランナー グループがあります。 `octo-repo` という名前のリポジトリがグループ内のランナーを使用できるようにするには、まず、`octo-org` Organization からのアクセスを許可するように Enterprise レベルでグループを構成する必要があります。次に、`octo-repo` からのアクセスを許可するように Organization レベルでグループを構成する必要があります。

![{% data variables.actions.hosted_runner %}のグループを説明した図](/assets/images/hosted-runner-mgmt.png)

### リポジトリによるランナー グループへのアクセスの許可

この手順では、Enterprise と Organization のレベルでグループのアクセス許可を構成する方法を示します。

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - Enterprise のランナー グループの場合、 **[Organization のアクセス]** で、ランナー グループにアクセスできる Organization を変更します。
  - Organization のランナー グループの場合、 **[リポジトリ アクセス]** で、ランナー グループにアクセスできるリポジトリを変更します。

{% warning %}

**警告**:

{% data reusables.actions.hosted-runner-security %}

詳しくは、「[{% data variables.actions.hosted_runner %}へのアクセスの制御](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)」を参照してください。

{% endwarning %}
