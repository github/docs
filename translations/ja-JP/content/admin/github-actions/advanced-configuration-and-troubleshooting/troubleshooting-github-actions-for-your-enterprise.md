---
title: Enterprise 向け GitHub Actions のトラブルシューティング
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を使用するときに発生する一般的な問題のトラブルシューティング。'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107302'
---
## {% data variables.product.prodname_actions %} の正常性の確認

`ghe-actions-check` コマンド ライン ユーティリティを使って、{% data variables.location.product_location %}の {% data variables.product.prodname_actions %} の正常性を確認できます。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)」と「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

## {% data variables.product.prodname_ghe_server %} に自己署名証明書を使用する場合のセルフホストランナーの設定

{% data reusables.actions.enterprise-self-signed-cert %} 詳細については、「[TLS の構成](/admin/configuration/configuring-tls)」を参照してください。

### ランナーマシンに証明書をインストールする

セルフホストランナーが自己署名証明書を使用して {% data variables.product.prodname_ghe_server %} に接続するには、接続がセキュリティで強化されるように、証明書をランナーマシンにインストールする必要があります。

証明書をインストールするステップについては、ランナーのオペレーティングシステムのドキュメントを参照してください。

### 証明書を使用するように Node.JS を設定する

ほとんどのアクションは JavaScript で記述されており、オペレーティングシステムの証明書ストアを使用しない Node.js を使用して実行されます。 セルフホスト ランナー アプリケーションで証明書を使用するには、ランナーのコンピューターで `NODE_EXTRA_CA_CERTS` 環境変数を設定する必要があります。

環境変数をシステム環境変数として設定するか、セルフホスト ランナー アプリケーション ディレクトリで _.env_ という名前のファイルで宣言することができます。

次に例を示します。

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

環境変数は、セルフホストランナーアプリケーションの起動時に読み込まれるため、セルフホストランナーアプリケーションを設定または起動する前に、環境変数を設定する必要があります。 証明書の設定が変更された場合は、セルフホストランナーアプリケーションを再起動する必要があります。

### 証明書を使用するように Docker コンテナを設定する

ワークフローで Docker コンテナアクションまたはサービスコンテナを使用する場合は、上記の環境変数の設定に加えて、Docker イメージに証明書をインストールする必要がある場合もあります。

## {% data variables.product.prodname_actions %} の HTTP プロキシ設定

{% data reusables.actions.enterprise-http-proxy %}

これらの設定が正しく構成されていない場合は、{% data variables.product.prodname_actions %} 構成の設定や変更時に `Resource unexpectedly moved to https://<IP_ADDRESS>` のようなエラーが発生する可能性があります。

## ランナーが新しいホスト名を使用して {% data variables.product.prodname_ghe_server %} に接続しない

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

新しいホスト名を使用して環境内に {% data variables.product.prodname_ghe_server %} を展開し、古いホスト名がインスタンスに解決されなくなった場合、セルフホスト ランナーは古いホスト名に接続できず、ジョブは実行されません。

{% data variables.location.product_location %}に新しいホスト名を使うには、セルフホステッド ランナーの構成を更新する必要があります。 各セルフホストランナーには、次のいずれかの手順を行う必要があります。

* セルフホスト ランナー アプリケーション ディレクトリで、`.runner` と `.credentials` のファイルを編集して、古いホスト名のすべてのメンションを新しいホスト名に置き換えてから、セルフホスト ランナー アプリケーションを再起動します。
* UIを使用して {% data variables.product.prodname_ghe_server %} からランナーを削除し、再度追加します。 詳細については、「[セルフホスト ランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

## スタックジョブと {% data variables.product.prodname_actions %} メモリと CPU の制限

{% data variables.product.prodname_actions %} は、{% data variables.location.product_location %}で実行されている複数のサービスで構成されます。 デフォルトでは、これらのサービスは、ほとんどのインスタンスで機能するデフォルトの CPU およびメモリ制限で設定されています。 ただし、{% data variables.product.prodname_actions %} のヘビーユーザは、これらの設定を調整する必要がある場合があります。

ジョブが開始されていないことに気付いた場合（アイドル状態のランナーが存在する場合でも）、または UI でジョブの進行状況が更新または変更されていない場合は、CPU またはメモリの上限に達している可能性があります。

### 1. 管理コンソールで全体的な CPU とメモリの使用率を確認する

Management Console にアクセスし、モニターダッシュボードを使用して、[System Health] の下の全体的な CPU とメモリのグラフを調べます。 詳細については、「[モニター ダッシュボードへのアクセス](/admin/enterprise-management/accessing-the-monitor-dashboard)」を参照してください。

[システム正常性] 全体の CPU 使用率が 100% に近い場合、または空きメモリが残っていない場合は、{% data variables.location.product_location %}が容量いっぱいで実行されているため、スケールアップする必要があります。 詳細については、「[CPU またはメモリ リソースの増加](/admin/enterprise-management/increasing-cpu-or-memory-resources)」を参照してください。

### 2. 管理コンソールで Nomad Jobs の CPU とメモリの使用率を確認する

全体的な [System Health] の CPU とメモリの使用率に問題がない場合は、モニターダッシュボードページを下にスクロールして [Nomad Jobs] セクションに移動し、[CPU Percent Value] と [Memory Usage] のグラフを確認します。

これらのグラフの各プロットは、1 つのサービスに対応しています。 {% data variables.product.prodname_actions %} サービスについては、以下を探してください。

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

これらのサービスのいずれかが 100％ またはそれに近い CPU 使用率であるか、メモリが上限（デフォルトでは 2 GB）に近い場合、これらのサービスのリソース割り当てを増やす必要がある場合があります。 上記のサービスのどれが上限に達しているか、上限に近いかを注視してください。

### 3. 上限に達したサービスへのリソース割り当てを増やす

1. SSH を使用して管理シェルにログインします。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
1. 次のコマンドを実行して、割り当てに利用可能なリソースを確認します。

   ```shell
   nomad node status -self
   ```

   出力で [Allocated Resources] セクションを見つけます。 これは次の例のようなものです。

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   CPU とメモリの場合、**すべての** サービスの **合計** に割り当てられている量 (左側の値) と使用可能な量 (右側の値) が表示されます。 上記の例では、合計 32GiB のうち 23GiB のメモリが割り当てられています。 これは、9GiB のメモリを割り当てることができるということを示しています。

   {% warning %}

   **警告:** 利用可能なリソースの合計を超える容量を割り当てると、サービスが開始されませんので注意してください。

   {% endwarning %}
1. ディレクトリを `/etc/consul-templates/etc/nomad-jobs/actions` に変更します。

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   このディレクトリには、上記の {% data variables.product.prodname_actions %} サービスに対応する 3 つのファイルがあります。

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. 調整が必要なサービスを特定した場合は、対応するファイルを開き、次のような `resources` グループを見つけます。

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   値は、CPU リソースの場合は MHz、メモリリソースの場合は MB です。

   たとえば、上記の例のリソース制限を CPU と 4 GBのメモリの 1GHz に増やすには、次のように変更します。

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. ファイルを保存して終了します。
1. `ghe-config-apply` を実行して、変更を適用します。

    `ghe-config-apply` の実行中に `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'` のような出力が表示される場合は、変更によって CPU またはメモリのリソースが過剰に割り当てられている可能性があります。 この場合は、構成ファイルをもう一度編集し、割り当てられた CPU またはメモリを減らしてから、`ghe-config-apply` を再実行します。
1. 構成が適用されたら、`ghe-actions-check` を実行して、{% data variables.product.prodname_actions %} サービスが動作していることを確認します。

{% ifversion fpt or ghec or ghes %}
## {% data variables.product.prodname_dependabot %} が既存のワークフローをトリガーするときのエラーのトラブルシューティング

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data variables.location.product_location %}に対して {% data variables.product.prodname_dependabot %} の更新プログラムを設定した後、{% data variables.product.prodname_dependabot %} イベントによって既存のワークフローがトリガーされるとエラーが発生することがあります。

既定では、`push`、`pull_request`、`pull_request_review`、または `pull_request_review_comment` のイベントから {% data variables.product.prodname_dependabot %} によってトリガーされる {% data variables.product.prodname_actions %} ワークフローの実行は、リポジトリ フォークから開かれたかのように扱われます。 他のアクターによってトリガーされるワークフローとは異なり、これは読み取り専用の `GITHUB_TOKEN` を受け取り、通常使用できるシークレットにはアクセスできないことを意味します。 これにより、{% data variables.product.prodname_dependabot %} によってトリガーされたときに、リポジトリへの書き込みを試みるワークフローが失敗します。

この問題を解決するには、次の 3 つの方法があります。

1. `if: github.actor != 'dependabot[bot]'` のような式を使用して、{% data variables.product.prodname_dependabot %} によってトリガーされないようにワークフローを更新できます。 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。
2. ワークフローを変更して、このような制限がない `pull_request_target` を含む 2 段階のプロセスを使用できます。 詳細については、「[{% data variables.product.prodname_actions %} による {% data variables.product.prodname_dependabot %} の自動化](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events)」を参照してください。
3. {% data variables.product.prodname_dependabot %} のアクセスによってトリガーされるワークフローをシークレットに提供し、`permissions` という用語で `GITHUB_TOKEN` の既定のスコープを広げることができます。 詳細については、以下の「[シークレットへの {% data variables.product.prodname_dependabot %} のアクセスとアクセス許可の増加によってトリガーされるワークフローの提供](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions)」を参照してください。

### シークレットへの {% data variables.product.prodname_dependabot %} のアクセスとアクセス許可の増加によってトリガーされるワークフローの提供

1. SSH を使用して管理シェルにログインします。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
1. {% data variables.location.product_location %}の {% data variables.product.prodname_dependabot %} によってトリガーされるワークフローの制限を削除するには、次のコマンドを使います。
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. 構成を適用します。
    ```shell
    $ ghe-config-apply
    ```
1. {% data variables.product.prodname_ghe_server %}に戻ります。

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## {% data variables.product.prodname_actions %} のバンドルされたアクションのトラブルシューティング

{% data variables.product.prodname_ghe_server %} に {% data variables.product.prodname_actions %} をインストールするときに次のエラーが発生した場合は、公式のバンドルされたアクションとスターター ワークフローをインストールすることで問題を解決できます。

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

{% data variables.product.prodname_ghe_server %} 内の指定された Organization 内に公式のバンドルされたアクションとスターター ワークフローをインストールするには、次の手順に従います。

1. 公式のバンドルされたアクションとスターター ワークフローを格納する Organization を特定します。 新しい Organization を作成することも、既存のものを再利用することもできます。 
    - 新しい Organization を作成するには、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。 
    - この Organization の名前の選択に関するサポートについては、「[予約名](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names)」を参照してください。 

1. SSH を使用して管理シェルにログインします。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
1. バンドルされたアクションを格納する場所として Organization を指定するには、`ghe-config` コマンドを使用して、`ORGANIZATION` を Organization の名前に置き換えます。
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    および
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  バンドルされたアクションを Organization に追加するには、SHA を設定解除します。
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. 構成を適用します。
    ```shell
    $ ghe-config-apply
    ```

これらの手順を完了したら、「[エンタープライズでの GitHub Actions のアクセス許可の管理](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise)」で {% data variables.product.prodname_actions %} の構成を再開できます。

{% endif %}
