---
title: コマンド ライン ユーティリティ
intro: '{% data variables.product.prodname_ghe_server %} には、特定の問題を解決したり特定のタスクを実行するのに役立つさまざまなユーティリティが搭載されています。'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172806'
---
SSH 管理ユーザとしてサインインした後では、VM 上のどこからでもこれらのコマンドを実行できます。 詳細については、「[管理シェル (SSH) にアクセスする](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)」を参照してください。

## 全般

### ghe-announce

このユーティリティは、あらゆる {% data variables.product.prodname_enterprise %} ページの上部にバナーを設定します。 これを使用すればユーザにメッセージを配信することができます。

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %}各ユーザーが自分に対する通知を無視できるようにするには、`-d` フラグを使います。
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} {% data variables.product.product_name %} のエンタープライズ設定を使用して、お知らせバナーを設定することもできます。 詳細については、[インスタンスでのユーザー メッセージのカスタマイズ](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)に関する記事を参照してください。
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

このユーティリティは、アクティブなものとキュー内にあるもの両方のバックグラウンドジョブに関する情報を表示します。 これは、すべてのページの上部にある管理統計バーと同じジョブ数を表示します。

このユーティリティは、Aqueduct サーバーでバックグラウンド ジョブの処理に問題があるかどうかを識別するのに役立ちます。 以下のどのシナリオも Aqueduct の問題を示している可能性があります。

* 背景のジョブの数が増えていますが、実行中のジョブの数は同じままです。
* イベントフィードが更新されない。
* webhook はトリガーされていません。
* Git プッシュ後、ウェブインタフェースが更新されない。

Aqueduct の故障を懸念している場合は、{% data variables.contact.contact_ent_support %} に連絡してください。

このコマンドでは、キューでのジョブ停止または再開をすることができます。

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

このユーティリティは、大きなファイルがないか、あるいは削除されているがファイルハンドルがまだ開いているファイルがないか、ディスクをチェックします。 これは、ルートパーティションで空き容量を確保しようとしているときに実行してください。

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

このユーティリティは、ルートボリュームでディスク領域を将来余分に取り過ぎる可能性があるさまざまなキャッシュをクリーンアップします。 ルートボリュームのディスク領域の使用量が時間の経過とともに著しく増加していることがわかった場合は、このユーティリティを実行して全体的な使用量を減らすのに役立つかどうかを確認することをおすすめします。

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

このユーティリティは、既存の {% data variables.enterprise.management_console %} の設定をすべて消去します。

{% tip %}

**ヒント**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

このユーティリティを使用すると、{% data variables.location.product_location %}の設定を取得して変更することができます。

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
`cluster.conf` でノードのユニバーサル一意識別子 (UUID) を見つけることができます。

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} REST API レート制限からユーザーの一覧を除外できます。 これらのユーザーには、120,000 件の要求のハード制限が引き続き適用されます。 詳細については、「[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)」を参照してください。

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

このユーティリティは、{% data variables.enterprise.management_console %} の設定の適用や、システムサービスのリロード、アプリケーションサービスのリロード、保留中のデータベースマイグレーションを行います。 これは、{% data variables.enterprise.management_console %} の Web UI で **[設定の保存]** をクリックするか、[`/setup/api/configure` エンドポイント](/enterprise/user/rest/reference/enterprise-admin#management-console)に POST 要求を送信するのと同じです。

手動で実行することはないと思いますが、設定を保存する過程をSSH 経由で自動化したい場合に利用できます。

```shell
ghe-config-apply
```

### ghe-console

このユーティリティは、{% data variables.product.prodname_enterprise %} アプライアンスで GitHub Rails コンソールを開きます。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

このユーティリティは、{% data variables.product.prodname_enterprise %} アプライアンスで MySQL データベースセッションを開きます。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
このユーティリティは、ElasticSearch のインデックスの概要を CSV フォーマットで表示します。

`STDOUT` でヘッダー行が付いているインデックスの概要を表示します。
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

インデックスの概要を表示し、読みやすくするために結果を `column` にパイプします。

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

このユーティリティは、2018 年 10 月 1 日に廃止予定の統合方式である {% data variables.product.prodname_dotcom %} サービスを使用しているアプライアンス上のリポジトリを一覧表示します。 アプライアンス上のユーザーは、特定のリポジトリへのプッシュに対する通知を作成するために、{% data variables.product.prodname_dotcom %} サービスを設定している場合があります。 詳細については、{% data variables.product.prodname_blog %} の「[{% data variables.product.prodname_dotcom %} サービスの非推奨の発表](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)」または「[{% data variables.product.prodname_dotcom %} サービスの置き換え](/developers/overview/replacing-github-services)」を参照してください。 このコマンドの詳細や追加のオプションについては、`-h` フラグを使用してください。

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

このユーティリティでは、インストールから関連するすべてのログファイルを末尾に記録できます。 オプションを渡すことでログを特定のセットに制限できます。 追加オプションを確認するには -h フラグを使用してください。

```shell
ghe-logs-tail
```

### ghe-maintenance

このユーティリティにより、インストールのメンテナンスモードの状態を制御できます。 これは主に舞台裏で {% data variables.enterprise.management_console %} によって使用されるように設計されていますが、直接使用することもできます。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

```shell
ghe-maintenance -h
```

### ghe-motd

このユーティリティは、管理者が管理シェルを介してインスタンスにアクセスしたときに表示される今日のメッセージ (MOTD) を再表示します。 出力には、インスタンスの状態の概要が含まれます。

```shell
ghe-motd
```

### ghe-nwo

このユーティリティを使って、リポジトリの ID でリポジトリの名前とオーナーを検索することができます。  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

このコマンドを使用して、アプライアンスでサイトの管理者権限を持つユーザーに Organization のオーナー権限を付与したり、単一の Organization 内の任意の単一ユーザーに Organization のオーナー権限を付与したりします。 ユーザーや Organization を指定する必要があります。 `-y` フラグを使って確認を回避しない限り、`ghe-org-admin-promote` コマンドは実行前に常に確認を求めます。

ユーティリティでは以下のオプションを使用できます。

- `-u` フラグはユーザー名を指定します。 このフラグを使用して特定ユーザーに Organization のオーナー権限を付与します。 すべてのサイト管理者を指定された組織に昇格させるため、`-u` フラグを省略します。
- `-o` フラグは組織を指定します。 このフラグを使用して特定の Organization でオーナー権限を付与します。 指定されたサイト管理者にすべての組織のオーナー権限を付与するには、`-o` フラグを省略します。
- `-a` のフラグは、すべてのサイト管理者にすべての組織のオーナー権限を与えます。
- `-y` フラグは手動の確認を回避します。

このユーティリティは、非サイト管理者をすべての Organization のオーナーに昇格させることはできません。 [ghe-user-promote](#ghe-user-promote) を使用すれば、通常のユーザー アカウントをサイト管理者に昇格させることができます。

特定の Organization の Organization のオーナーの権限を特定のサイト管理者に与える

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

全ての Organization で特定のサイトアドミンに Organizationのオーナー権限を与える

```shell
ghe-org-admin-promote -u USERNAME
```

特定の Organization で全てのサイトアドミンに Organizationのオーナー権限を与える

```shell
ghe-org-admin-promote -o ORGANIZATION
```

全ての Organization で全てのサイトアドミンに Organization のオーナー権限を与える

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

このコマンドを使用して、{% ifversion enterprise-authentication-rate-limits %}アカウント ロックアウトの後に {% data variables.enterprise.management_console %} のロックを直ちに解除します。 {% data variables.location.product_location %}の認証ポリシーを構成するには、「[認証ポリシー レート制限の構成](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)」を参照してください。{% else %}10 分間でログイン試行が 10 回失敗しました。{% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

このユーティリティは、SAMLレコードのマップを支援します。

{% data variables.product.product_name %}ユーザのためのすべてのSAMLマッピングを含むCSVファイルを作成するには、次のようにします。
```shell
$ ghe-saml-mapping-csv -d
```

新しい値でのSAMLマッピングの更新のドライランを実行するには、次のようにします。
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

新しい値でSAMLマッピングを更新するには、次のようにします。
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

このユーティリティは、アプライアンス に開始または停止された（実行中または待機中）、全てのサービスの一覧を表示します。

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

`ghe-set-password` を使用すると、[{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) に対して認証するための新しいパスワードを設定できます。

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

このユーティリティを使用すると、プライマリ ネットワーク インターフェイスを構成できます。

ビジュアル モードを開始するための、ネットワーク設定の構成について説明します。

```shell
$ ghe-setup-network -v
```

追加オプションを確認するには -h フラグを使用してください。

### ghe-ssh-check-host-keys

このユーティリティは、既存の SSH のホストキーを漏洩した SSH ホストキーと比べます。

```shell
$ ghe-ssh-check-host-keys
```

漏洩したホスト キーが発見された場合、ユーティリティは状態 `1` と次のメッセージで終了します。
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

漏洩したホスト キーが発見されなかった場合、ユーティリティは状態 `0` と次のメッセージで終了します。
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

このユーティリティは、SSH のホストキーを廃棄し、新しく作成したキーに置き換えます。

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

このユーティリティは、{% data variables.product.prodname_enterprise %} のアプライアンスに保存されている脆弱なSSHキーの報告を作成します。 ユーザのキーを一括アクションとして取り消すことができます。 このユーティリティは弱いシステム キーを報告します。[{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) でこのキーを手動で取り消す必要があります。

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

このユーティリティでは、 {% data variables.product.prodname_enterprise %} のアプライアンスに Let's Encrypt の証明書をインストールすることができます。 詳細については、「[TLS の構成](/enterprise/admin/guides/installation/configuring-tls)」を参照してください。

`-x` フラグを使って、ACME 構成を削除できます。

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

このユーティリティでは、{% data variables.product.prodname_enterprise %} のサーバにカスタムルートのCA証明書をインストールできます。 証明書は PEM 形式でなければなりません。 さらに、証明書プロバイダーが 1 つのファイルに複数の CA 証明書を含めている場合は、それらを個別のファイルに分けて `ghe-ssl-ca-certificate-install` に一度に 1 つずつ渡す必要があります。

S/MIME コミット署名の検証のために証明書チェーンを追加するには、このユーティリティを実行します。 詳細については、「[コミット署名の検証について](/enterprise/user/articles/about-commit-signature-verification/)」を参照してください。

他のサーバーが自己署名 SSL 証明書または必要な CA バンドルがついていない SSL 証明書を使っているため {% data variables.location.product_location %}がそのサーバーに接続できない場合、このユーティリティを実行します。 これを確認する 1 つの方法は、{% data variables.location.product_location %}から `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` を実行することです。 リモート サーバーの SSL 証明書を確認できたら、`SSL-Session` が次のように 0 のリターン コードを表示します。

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

反対に、リモート サーバーの SSL 証明書を確認 "*できない*" 場合は、`SSL-Session` が 0 ではないリターン コードを表示します。

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

ユーティリティでは以下のオプションを使用できます:
- `-r` フラグにより、CA 証明書をアンインストールできます。
- `-h` フラグはさらなる使用情報を表示します。

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

このユーティリティを使用すると、{% data variables.location.product_location %}の SSL 証明書を更新できます。 

このコマンドの詳細や追加のオプションについては、`-h` フラグを使用してください。

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

このユーティリティにより、秘密鍵と証明書署名要求 (CSR) を生成できます。これらを商用またはプライベートの認証局と共有することで、インスタンスで使用する有効な証明書を取得できます。 詳細については、「[TLS の構成](/enterprise/admin/guides/installation/configuring-tls)」を参照してください。

このコマンドの詳細や追加のオプションについては、`-h` フラグを使用してください。

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

一部のプラットフォームでは、ユーザボリュームを拡張するためにこのスクリプトが必要です。 詳細については、「[ストレージ容量の増加](/enterprise/admin/guides/installation/increasing-storage-capacity/)」を参照してください。

```shell
$ ghe-storage-extend
```

### ghe-version

このユーティリティによって、{% data variables.location.product_location %}のバージョン、プラットフォーム、およびビルドが表示されます。

```shell
$ ghe-version
```

### ghe-webhook-logs

このユーティリティは、管理人がレビューして問題を突き止めるための webhook のデリバリログを表示します。

```shell
ghe-webhook-logs
```

過去 1 日の失敗したすべてのフック デリバリーを表示するには、以下を使用します: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

日付の形式は、`YYYY-MM-DD`、`YYYY-MM-DD HH:MM:SS`、または `YYYY-MM-DD HH:MM:SS (+/-) HH:M` である必要があります。
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

フック ペイロードの全体、結果、およびデリバリーの例外を表示するには、以下を使用します: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## クラスタリング

### ghe-cluster-status

{% data variables.product.prodname_ghe_server %} のクラスターデプロイメントでノードとサービスの健全性を確認します。

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

このユーティリティは、Geo-replication またはクラスタリングのいずれかの構成で、各ノードからの重要なログを含む Support Bundle tarball を作成します。

既定では、コマンドは */tmp* に tarball を作成しますが、SSH 経由で簡単にストリーミングできるように tarball を `STDOUT` に `cat` させることもできます。 これは、Web UI が反応していないか、 */setup/support* からサポート バンドルをダウンロードできないときに役立ちます。 より古いログを含む "*拡張*" バンドルを生成するときにこのコマンドを使う必要があります。 さらに、このコマンドを使って {% data variables.product.prodname_enterprise %} のサポートにクラスタリングSupport Bundle を直接アップロードすることができます。

標準のバンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

拡張バンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

バンドルを{% data variables.contact.github_support %}に送信するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

バンドルを{% data variables.contact.github_support %}に送信し、そのバンドルをチケットに関連づけるには以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

アクティブクラスタノードからパッシブクラスタノードにフェイルオーバーします。 詳細については、「[レプリカ クラスターへのフェールオーバーの開始](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)」を参照してください。

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

このユーティリティを使えば、分散{% data variables.product.prodname_pages %}サーバーを管理できます。

```shell
ghe-dpages
```

リポジトリの場所と健全性の概要を表示するには、以下のようにします。
```shell
ghe-dpages status
```

クラスタノードの退避に先立って{% data variables.product.prodname_pages %}ストレージサービスを退避するには、以下のようにします。
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

このユーティリティでは、分散型 Git サーバにある各リポジトリの3つのコピーを管理することができます。

```shell
ghe-spokes
```

リポジトリの場所と健全性の概要を表示するには、以下のようにします。

```shell
ghe-spokes status
```

リポジトリが保存されているサーバーを表示するには、以下のようにします。

```shell
ghe-spokes route
```

クラスタノード上のストレージサービスを退避するには、以下のようにします。

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

このユーティリティを使用すると、クラスタノードからの待避の前にストレージサービスをすべて待避させることができます。

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

現在の Git 作業用の `top` にあたるインターフェイス。

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

このユーティリティは、Git トラフィックの分析に役立ちます。 これは、`/data/user/gitmon` 下にある "_ガバナー_" データ ファイルに対してクエリを実行します。 {% data variables.product.company_short %} は、ファイルごとに 1 時間のデータを持ち、2 週間保持します。 詳しくは、{% data variables.product.prodname_github_community %} の[ガバナーを使用した Git トラフィックの分析](https://github.community/t/analyzing-git-traffic-using-governor/13516)に関する記事を参照してください。

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

このユーティリティでは、リポジトリのディレクトリを変更し、`git` ユーザーとしてインタラクティブ シェルを開くことができます。 `git-*` や `git-nw-*` などのコマンドを使って、手動でリポジトリの検査またはメンテナンスを行うことができます。

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

このユーティリティは、パックの容量を最適化するために、手動的にリポジトリのネットワークをリパックします。 大きなリポジトリの場合、このコマンドを実行するとリポジトリの全体的なサイズを減らすことができます。 リポジトリのネットワークとの対話を通じて、{% data variables.product.prodname_enterprise %} がこのコマンドを自動的に実行します。

省略可能な `--prune` 引数を追加して、ブランチ、タグ、またはその他の ref から参照されていない到達できない Git オブジェクトを削除できます。これは、[以前に削除された機密情報](/enterprise/user/articles/remove-sensitive-data/)を直ちに削除する場合に特に便利です。

{% warning %}

**警告**: `--prune` 引数を使って到達できない Git オブジェクトを削除する前に、{% data variables.location.product_location %}をメンテナンス モードにするか、同じリポジトリ ネットワーク内のすべてのリポジトリがロックされていることを確認してください。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)」を参照してください。

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

このユーティリティは、{% data variables.product.prodname_actions %} のすべてのサービスが正常であることを確認します。 詳細については、「[{% data variables.product.product_name %} 用 {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)」および「[エンタープライズ用 {% data variables.product.prodname_actions %} のトラブルシューティング](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)」を参照してください。

```shell
ghe-actions-check
```

### ghe-actions-precheck

このユーティリティは、{% data variables.location.product_location %}上の {% data variables.product.prodname_actions %} の BLOB ストレージ構成をテストします。 インスタンスに対して {% data variables.product.prodname_actions %} を有効にする前に、このユーティリティを使用してストレージ構成を確認できます。

{% data variables.product.prodname_actions %} の構成の詳細については、「[{% data variables.product.product_name %} 用 {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

ストレージ システムが正しく構成されている場合は、次の出力が表示されます。

```
All Storage tests passed
```

## インポートとエクスポート

### ghe-migrator

`ghe-migrator` は、ある GitHub インスタンスから他に移行するために役立つハイファイ ツールです。 インスタンスを統合、もしくは Organization やユーザ、Team、リポジトリをGitHub.comから {% data variables.product.prodname_enterprise %} に移行することができます。

詳細については、「[エンタープライズ間のデータ移行について](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/)」のガイドを参照してください。

### git-import-detect

URL が与えられたら、どのタイプのソース管理システムが相手側にあるのかを検出します。 このことは、手動インポートの間におそらくすでに知られていますが、自動化されたスクリプトでとても役立ちます。
```shell
git-import-detect
```

### git-import-hg-raw

このユーティリティは、MercurialのリポジトリをこのGitリポジトリにインポートします。 詳細については、「[サード パーティのバージョン管理システムからデータをインポートする](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-hg-raw
```

### git-import-svn-raw

このユーティリティはSubversionの履歴とファイルデータをGitのブランチにインポートします。 これはツリーの単純なコピーであり、トランクやブランチの区別を無視します。 詳細については、「[サード パーティのバージョン管理システムからデータをインポートする](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-svn-raw
```

### git-import-tfs-raw

このユーティリティは、Team Foundation Version Control (TFVC) からインポートします。 詳細については、「[サード パーティのバージョン管理システムからデータをインポートする](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-tfs-raw
```

### git-import-rewrite

このユーティリティは、インポートされたリポジトリを書き直します。 これにより、作者名を変更したり、Subversion および TFVC では、フォルダーに基づいて Git ブランチがを生成したりすることができます。 詳細については、「[サード パーティのバージョン管理システムからデータをインポートする](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## セキュリティ

### ghe-find-insecure-git-operations

このユーティリティでは、インスタンスのログを検索し、DSA、RSA-SHA-1、HMAC-SHA-1、CBC 暗号などの安全でないアルゴリズムやハッシュ関数を使用する SSH 経由の Git 操作を特定します。 その出力を使用して、より安全な SSH 接続への各クライアントの移行をサポートできます。 詳しくは、[{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}{% elsif ghes > 3.5 %}と「[インスタンスへの SSH 接続の構成](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)」{% endif %}を参照してください。

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## サポート

### ghe-diagnostics

このユーティリティは、さまざまな確認を行うとともに、インストールについての情報を集めます。この情報は、サポートチームが問題の診断に役立てるために、送信することができます。

現在のところ、このユーティリティの出力は、{% data variables.enterprise.management_console %} で診断情報をダウンロードすることに似ていますが、時間の経過とともに、Web UI では利用できない改善がさらに追加されている可能性があります。 詳細については、「[診断ファイルの作成と共有](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)」を参照してください。

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} このユーティリティは、インスタンスからの重要なログを含むサポート バンドルの tarball を作成します。

既定では、コマンドは */tmp* に tarball を作成しますが、SSH 経由で簡単にストリーミングできるように tarball を `STDOUT` に `cat` させることもできます。 これは、Web UI が反応していないか、 */setup/support* からサポート バンドルをダウンロードできないときに役立ちます。 より古いログを含む "*拡張*" バンドルを生成するときにこのコマンドを使う必要があります。 さらに、このコマンドを使って {% data variables.product.prodname_enterprise %} のサポートに Support Bundle を直接アップロードすることができます。

標準のバンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

拡張バンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

バンドルを{% data variables.contact.github_support %}に送信するには、以下のようにします。
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

バンドルを{% data variables.contact.github_support %}に送信し、そのバンドルをチケットに関連づけるには以下のようにします。

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

このユーティリティは、アプライアンスから {% data variables.product.prodname_enterprise %} サポートに情報を送信します。 ローカル ファイルを指定、または `STDIN` 経由で最大 100MB までのストリームを提供することができます。 アップロードされたデータは任意でサポートチケットと関連付けることができます。

ファイルを{% data variables.contact.github_support %}に送信し、そのファイルをチケットに関連づけるには以下のようにします。
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

`STDIN` 経由でデータをアップロードし、そのデータをチケットに関連付けるには以下のようにします。
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

この例では、`ghe-repl-status -vv` はレプリカ アプライアンスから詳細な状態情報を送信します。 `ghe-repl-status -vv`を `STDIN` にストリームする特定のデータに置き換え、`Verbose Replication Status` をデータの簡単な説明に置き換える必要があります。 {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## {% data variables.product.prodname_ghe_server %} のアップグレード

### ghe-upgrade

このユーティリティは、アップグレードパッケージをインストール、または確認します。 アップグレードが失敗した場合や中断された場合は、このユーティリティを使用してパッチリリースをロールバックすることもできます。 詳細については、「[{% data variables.product.prodname_ghe_server %} のアップグレード](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。

アップグレードパッケージを確認するには以下のようにします。
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

アップグレードパッケージをインストールするには以下のようにします。
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

このユーティリティは、アップグレードパッケージの定期的なインストールを管理します。 定期的なインストールを表示、新規作成、削除することができます。 クーロン表現を使って、スケジュールを作る必要があります。 詳細については、「[Wikipedia の Cron のエントリ](https://en.wikipedia.org/wiki/Cron#Overview)」を参照してください。

`ghe-upgrade-scheduler` ユーティリティは、ほとんどの場合にメンテナンス モードや再起動を必要としないホットパッチ アップグレードのスケジュール設定に最適です。 このユーティリティは、管理者が手動でメンテナンス モードを設定し、インスタンスを再起動して、メンテナンス モードを設定解除する必要がある、パッケージの完全アップグレードには適していません。 アップグレードのさまざまな種類について詳しくは、「[{% data variables.product.product_name %} のアップグレード](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package)」をご覧ください。

パッケージの新しいインストールをスケジュールするには以下のようにします。
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

パッケージのスケジュールされたインストールを表示するには以下のようにします。
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

パッケージのスケジュールされたインストールを削除するには以下のようにします。
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

このユーティリティは、{% data variables.product.prodname_enterprise %} の新規パッチのリリースがあるかどうかを確認します。 リリースが存在する場合、インスタンスに十分な容量があればパッケージをダウンロードします。 デフォルトでは、 */var/lib/ghe-updates* に保存されます。 次に、管理者は[アップグレードを実行](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/)できます。

*/var/lib/ghe-updates/ghe-update-check.status* にダウンロードの状態を含むファイルがあります。

`-i` のスイッチを使って、{% data variables.product.prodname_enterprise %} の最新リリースを確認することができます。

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## [ユーザー管理]

### ghe-license-usage

このユーティリティは、インストールのユーザーのリストを JSON 形式でエクスポートします。 インスタンスが {% data variables.product.prodname_ghe_cloud %} に接続されている場合、{% data variables.product.prodname_ghe_server %} はこの情報を使用してライセンス情報を {% data variables.product.prodname_ghe_cloud %} に報告します。 詳細については、「[エンタープライズ アカウントを {% data variables.product.prodname_ghe_cloud %} に接続する](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)」を参照してください。

デフォルトでは、結果の JSON ファイル内のユーザのリストは暗号化されます。 その他のオプションにはフラグ `-h` を使用します。

```shell
ghe-license-usage
```

### ghe-org-membership-update

このユーティリティは、インスタンスでメンバー全員に対して、デフォルトの Organization メンバーシップの可視性の設定を必須化します。 詳細については、「[組織メンバーシップの可視性の構成](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)」を参照してください。 オプション設定は `public` か `private` です。

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

このユーティリティは、インストール内のすべてのユーザのリストを CSV 形式でエクスポートします。 CSV ファイルにはメール アドレス、ユーザーの種類 (たとえば、管理者やユーザーなど)、所有しているリポジトリの数、SSH キーの数、組織のメンバーの数、最後にログインしたときの IP アドレスなどが含まれています。その他のオプションには `-h` フラグを使用します。

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

このユーティリティは、指定のユーザをアドミンステータスから一般ユーザのステータスに変更します。 このアクションは、Web UI を使って行うことをおすすめします。このユーティリティを提供しているのは、誤って `ghe-user-promote` ユーティリティを実行してしまった場合に、CLI から再度ユーザーを降格させるためです。

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

このユーティリティは、指定したユーザアカウントをサイト管理人に変更します。

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

このユーティリティは、指定したユーザのアカウントを停止して、ログインやプッシュ、リポジトリからのプルを行えないようにします。

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

このユーティリティは、指定したユーザの停止状態を解除して、ログインやプッシュ、リポジトリからプルを行えるようにします。

```shell
ghe-user-unsuspend USERNAME
```
