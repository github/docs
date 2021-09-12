---
title: Enterprise 向け GitHub Actions のトラブルシューティング
intro: '{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を使用するときに発生する一般的な問題のトラブルシューティング。'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
---

### {% data variables.product.prodname_ghe_server %} に自己署名証明書を使用する場合のセルフホストランナーの設定

{% data reusables.actions.enterprise-self-signed-cert %} 詳しい情報については、「[TLS を設定する](/admin/configuration/configuring-tls)」を参照してください。

#### ランナーマシンに証明書をインストールする

セルフホストランナーが自己署名証明書を使用して {% data variables.product.prodname_ghe_server %} に接続するには、接続がセキュリティで強化されるように、証明書をランナーマシンにインストールする必要があります。

証明書をインストールするステップについては、ランナーのオペレーティングシステムのドキュメントを参照してください。

#### 証明書を使用するように Node.JS を設定する

ほとんどのアクションは JavaScript で記述されており、オペレーティングシステムの証明書ストアを使用しない Node.js を使用して実行されます。 セルフホストランナーアプリケーションで証明書を使用するには、ランナーマシンで `NODE_EXTRA_CA_CERTS` 環境変数を設定する必要があります。

環境変数をシステム環境変数として設定するか、セルフホストランナーアプリケーションディレクトリの _.env_ という名前のファイルで宣言することができます。

例:

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

環境変数は、セルフホストランナーアプリケーションの起動時に読み込まれるため、セルフホストランナーアプリケーションを設定または起動する前に、環境変数を設定する必要があります。 証明書の設定が変更された場合は、セルフホストランナーアプリケーションを再起動する必要があります。

#### 証明書を使用するように Docker コンテナを設定する

ワークフローで Docker コンテナアクションまたはサービスコンテナを使用する場合は、上記の環境変数の設定に加えて、Docker イメージに証明書をインストールする必要がある場合もあります。

### {% data variables.product.prodname_actions %} の HTTP プロキシ設定

{% data reusables.actions.enterprise-http-proxy %}

これらの設定が正しく行われていない場合、{% data variables.product.prodname_actions %} 設定を設定または変更するときに、`Resource unexpectedly moved to https://<IP_ADDRESS>` などのエラーが発生する可能性があります。

### ホスト名を変更した後、ランナーは {% data variables.product.prodname_ghe_server %} に接続しません

{% data variables.product.product_location %} のホスト名を変更すると、セルフホストランナーは古いホスト名に接続できなくなり、ジョブを実行しなくなります。

{% data variables.product.product_location %} に新しいホスト名を使用するには、セルフホストランナーの設定を更新する必要があります。 各セルフホストランナーには、次のいずれかの手順を行う必要があります。

* セルフホストランナーアプリケーションディレクトリで、`.runner` ファイルと `.credentials` ファイルを編集して、古いホスト名のすべての記述を新しいホスト名に置き換えてから、セルフホストランナーアプリケーションを再起動します。
* UIを使用して {% data variables.product.prodname_ghe_server %} からランナーを削除し、再度追加します。 詳しい情報については「[セルフホストランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners)」及び「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

### スタックジョブと {% data variables.product.prodname_actions %} メモリと CPU の制限

{% data variables.product.prodname_actions %} は、{% data variables.product.product_location %} で実行されている複数のサービスで構成されています。 デフォルトでは、これらのサービスは、ほとんどのインスタンスで機能するデフォルトの CPU およびメモリ制限で設定されています。 ただし、{% data variables.product.prodname_actions %} のヘビーユーザは、これらの設定を調整する必要がある場合があります。

ジョブが開始されていないことに気付いた場合（アイドル状態のランナーが存在する場合でも）、または UI でジョブの進行状況が更新または変更されていない場合は、CPU またはメモリの上限に達している可能性があります。

#### 1. Management Console で全体的な CPU とメモリの使用率を確認する

Management Console にアクセスし、モニターダッシュボードを使用して、[System Health] の下の全体的な CPU とメモリのグラフを調べます。 詳しい情報については、「[モニターダッシュボードへのアクセス](/admin/enterprise-management/accessing-the-monitor-dashboard)」を参照してください。

[System Health] 全体の CPU 使用率が 100％ に近い場合、または空きメモリが残っていない場合は、{% data variables.product.product_location %} が容量で実行されているため、スケールアップする必要があります。 詳しい情報については、「[CPU またはメモリリソースを増やす](/admin/enterprise-management/increasing-cpu-or-memory-resources)」を参照してください。

#### 2. Management Console で Nomad Jobs の CPU とメモリの使用率を確認する

全体的な [System Health] の CPU とメモリの使用率に問題がない場合は、モニターダッシュボードページを下にスクロールして [Nomad Jobs] セクションに移動し、[CPU Percent Value] と [Memory Usage] のグラフを確認します。

これらのグラフの各プロットは、1 つのサービスに対応しています。 {% data variables.product.prodname_actions %} サービスについては、以下を探してください。

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

これらのサービスのいずれかが 100％ またはそれに近い CPU 使用率であるか、メモリが上限（デフォルトでは 2 GB）に近い場合、これらのサービスのリソース割り当てを増やす必要がある場合があります。 上記のサービスのどれが上限に達しているか、上限に近いかを注視してください。

#### 3. 上限に達したサービスへのリソース割り当てを増やす

1. SSH を使用して管理シェルにログインします。 詳しい情報については「[管理シェル（SSH）にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
1. 次のコマンドを実行して、割り当てに利用可能なリソースを確認します。

   ```shell
   nomad node status -self
   ```

   出力で [Allocated Resources] セクションを見つけます。 次の例のようになります。

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   CPU とメモリの場合、これは**すべて**のサービスの**合計**に割り当てられているｃ量（左の値）と利用可能な容量（右の値）を示しています。 上記の例では、合計 32GiB のうち 23GiB のメモリが割り当てられています。 これは、9GiB のメモリを割り当てることができるということを示しています。

   {% warning %}

   **Warning:** 利用可能なリソースの合計を超える容量を割り当てると、サービスが開始されませんので注意してください。

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

    `ghe-config-apply` の実行中に、`Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'` のような出力が表示される場合は、変更によって CPU またはメモリリソースが過剰に割り当てられている可能性があります。 これが発生した場合は、設定ファイルを再度編集し、割り当てられた CPU またはメモリを減らしてから、`ghe-config-apply` を再実行してください。
1. 設定が適用されたら、`ghe-actions-check` を実行して、{% data variables.product.prodname_actions %} サービスが機能していることを確認します。
