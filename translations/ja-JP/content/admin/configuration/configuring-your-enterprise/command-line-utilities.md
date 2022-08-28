---
title: コマンドラインのユーティリティ
intro: '{% data variables.product.prodname_ghe_server %} には、特定の問題を解決したり特定のタスクを実行するのに役立つさまざまなユーティリティが搭載されています。'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services/
  - /enterprise/admin/articles/command-line-utilities/
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - SSH
---

SSH 管理ユーザとしてサインインした後では、VM 上のどこからでもこれらのコマンドを実行できます。 詳しくは、"[管理シェル（SSH）へのアクセス方法](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)を参照してください。"

### 一般的

#### ghe-announce

このユーティリティは、あらゆる {% data variables.product.prodname_enterprise %} ページの上部にバナーを設定します。 これを使用すればユーザにメッセージを配信することができます。

{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data variables.product.product_name %} の Enterprise 設定を使用して、お知らせバナーを設定することもできます。 詳しい情報については「[インスタンス上でのユーザメッセージをカスタマイズする](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)」を参照してください。
{% endif %}

```shell
# 皆に見えるメッセージを設定する
$ ghe-announce -s MESSAGE
> Announcement message set.
# 以前設定したメッセージを削除する
$ ghe-announce -u
> Removed the announcement message
```

#### ghe-check-disk-usage

このユーティリティは、大きなファイルがないか、あるいは削除されているがファイルハンドルがまだ開いているファイルがないか、ディスクをチェックします。 これは、ルートパーティションで空き容量を確保しようとしているときに実行してください。

```shell
ghe-check-disk-usage
```

#### ghe-cleanup-caches

このユーティリティは、ルートボリュームでディスク領域を将来余分に取り過ぎる可能性があるさまざまなキャッシュをクリーンアップします。 ルートボリュームのディスク領域の使用量が時間の経過とともに著しく増加していることがわかった場合は、このユーティリティを実行して全体的な使用量を減らすのに役立つかどうかを確認することをおすすめします。

```shell
ghe-cleanup-caches
```
#### ghe-cleanup-settings

このユーティリティは、既存の {% data variables.enterprise.management_console %} の設定をすべて消去します。

{% tip %}

**参考**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

#### ghe-config

このユーティリティを使用すると、{% data variables.product.product_location %} の設定を取得して変更することができます。

```shell
$ ghe-config <em>core.github-hostname</em>
# `core.github-hostname` のコンフィグレーション値を獲得する
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# `core.github-hostname` のコンフィグレーション値を `example.com`にする
$ ghe-config -l
# コンフィグレーションの全ての値を表示
```
`cluster.conf` でノードの Universally Unique Identifier (UUID) を見つけることができます。

```shell
  $ ghe-config <em>HOSTNAME</em>.uuid
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
API レート制限からユーザのリストを除外できます。 詳しい情報については、「[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)」を参照してください。

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "<em>hubot</em> <em>github-actions</em>"
# ユーザーの hubot と github-actions をレート制限から除外する
```
{% endif %}

#### ghe-config-apply

このユーティリティは、{% data variables.enterprise.management_console %} の設定の適用や、システムサービスのリロード、アプリケーションサービスのリロード、保留中のデータベースマイグレーションを行います。 これは、{% data variables.enterprise.management_console %} の Web UIで [**Save settings**] をクリックすること、または [`/setup/api/configure` エンドポイント](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)に POST リクエストを送信するのと同様です。

手動で実行することはないと思いますが、設定を保存する過程をSSH 経由で自動化したい場合に利用できます。

```shell
ghe-config-apply
```

#### ghe-console

このユーティリティは、{% data variables.product.prodname_enterprise %} アプライアンスで GitHub Rails コンソールを開きます。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

#### ghe-dbconsole

このユーティリティは、{% data variables.product.prodname_enterprise %} アプライアンスで MySQL データベースセッションを開きます。 {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

#### ghe-es-index-status
このユーティリティは、ElasticSearch のインデックスの概要を CSV フォーマットで表示します。

`STDOUT` でヘッダー行が付いてるインデックスの概要を表示します。
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

インデックスの概要を表示し、読みやすくするために `column` にパイプします。

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

#### ghe-legacy-github-services-report

このユーティリティは、2018 年 10 月 1 日に廃止予定の統合方式である {% data variables.product.prodname_dotcom %} サービスを使用しているアプライアンス上のリポジトリを一覧表示します。 アプライアンス上のユーザーは、特定のリポジトリへのプッシュに対する通知を作成するために、{% data variables.product.prodname_dotcom %} サービスを設定している場合があります。 詳しい情報については、{% data variables.product.prodname_blog %} で「[{% data variables.product.prodname_dotcom %} サービスの非推奨をアナウンスする](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)」、または「[{% data variables.product.prodname_dotcom %} サービスを置き換える](/developers/overview/replacing-github-services)」を参照してください。 このコマンドの詳細や追加のオプションについては、`-h` フラグを使用してください。

```shell
ghe-legacy-github-services-report

```

#### ghe-logs-tail

このユーティリティでは、インストールから関連するすべてのログファイルを末尾に記録できます。 オプションを渡すことでログを特定のセットに制限できます。 追加オプションを確認するには -h フラグを使用してください。

```shell
ghe-logs-tail
```

#### ghe-maintenance

このユーティリティにより、インストールのメンテナンスモードの状態を制御できます。 これは主に舞台裏で {% data variables.enterprise.management_console %} によって使用されるように設計されていますが、直接使用することもできます。

```shell
ghe-maintenance -h
```

#### ghe-motd

このユーティリティは、管理者が管理シェルを介してインスタンスにアクセスしたときに表示される今日のメッセージ (MOTD) を再表示します。 出力には、インスタンスの状態の概要が含まれます。

```shell
ghe-motd
```

#### ghe-nwo

このユーティリティを使って、リポジトリの ID でリポジトリの名前とオーナーを検索することができます。

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

#### ghe-org-admin-promote

このコマンドを使用して、アプライアンスでサイトの管理者権限を持つユーザーに Organization のオーナー権限を付与したり、単一の Organization 内の任意の単一ユーザーに Organization のオーナー権限を付与したりします。 ユーザーや Organization を指定する必要があります。 確認を省略するために`-y` フラグを使用しない限り、`ghe-org-admin-encourage` コマンドは実行前に常に確認を求めます。

ユーティリティでは以下のオプションを使用できます。

- `-u`のフラグはユーザ名を指定します。 このフラグを使用して特定ユーザーに Organization のオーナー権限を付与します。 すべてのサイト管理者を指定された Organization に昇格させるには、`-u`フラグを省略します。
- `-o`のフラグは Organization を指定します。 このフラグを使用して特定の Organization でオーナー権限を付与します。 すべての Organization で指定されたサイト管理者にオーナー権限を付与するには、`-o` フラグを省略します。
- `-a` のフラグは、全ての Organization で全てのサイトアドミンにコードオーナー権限を与えます。
- `-y` フラグは手動の確認を省略します。

このユーティリティは、非サイト管理者をすべての Organization のオーナーに昇格させることはできません。 [ghe-user-promote](#ghe-user-promote)を使用すれば、通常のユーザーアカウントをサイト管理者に昇格させることができます。

特定の Organization の Organization のオーナーの権限を特定のサイト管理者に与える

```shell
ghe-org-admin-promote -u <em>ユーザ名</em> -o <em>ORGANIZATION</em>
```

全ての Organization で特定のサイトアドミンに Organizationのオーナー権限を与える

```shell
ghe-org-admin-promote -u <em>ユーザ名</em>
```

特定の Organization で全てのサイトアドミンに Organizationのオーナー権限を与える

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

全ての Organization で全てのサイトアドミンに Organization のオーナー権限を与える

```shell
ghe-org-admin-promote -a
```

#### ghe-reactivate-admin-login

10分以内にログインを10回失敗した場合、このコマンドを使って {% data variables.enterprise.management_console %} を直ちに解除できます。

```shell
$ ghe-reactivate-admin-login
```

#### ghe-resque-info

このユーティリティは、アクティブでありかつキュー内にある、バックグラウンドジョブに関する情報を表示します。 あらゆるページの上部には、管理統計バーと同じジョブ数が表示されます。

このユーティリティは、Resque サーバーでバックグラウンドジョブの処理に問題があるかどうかを識別するのに役立ちます。 以下のどのシナリオも Resque の問題を示している可能性があります。

* 背景のジョブの数が増えていますが、実行中のジョブの数は同じままです。
* イベントフィードが更新されない。
* webhook はトリガーされていません。
* Git プッシュ後、ウェブインタフェースが更新されない。

Resque の故障を懸念している場合は、{% data variables.contact.contact_ent_support %} に連絡してください。

このコマンドでは、キューでのジョブ停止または再開をすることができます。

```shell
$ ghe-resque-info
# キューと現在キューに入っているジョブの数を表示する
$ ghe-resque-info -p <em>QUEUE</em>
# 特定のキューを停止する
$ ghe-resque-info -r <em>QUEUE</em>
# 特定のキューを再開する
```

#### ghe-saml-mapping-csv

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

#### ghe-service-list

このユーティリティは、アプライアンス に開始または停止された（実行中または待機中）、全てのサービスの一覧を表示します。

```shell
$ ghe-service-list
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
```

{% tip %}

このコマンドが返すサービス名は、[`systemctl`](https://www.freedesktop.org/software/systemd/man/systemctl.html)コマンドで利用して、それらのサービスを必要に応じて手動で停止、起動、再起動できます。 例:

```shell
$ sudo systemctl restart github-resqued
```

サービスを停止することによって、インスタレーションが稼働停止しますので、サービスを停止または再起動する前に {% data variables.contact.contact_ent_support %} に連絡することをおすすめします。

{% endtip %}

#### ghe-set-password

`ghe-set-password` では、[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) に認証するための新しいパスワードを設定することができます。

```shell
ghe-set-password <新しいパスワード>
```

#### ghe-ssh-check-host-keys

このユーティリティは、既存の SSH のホストキーを漏洩した SSH ホストキーと比べます。

```shell
$ ghe-ssh-check-host-keys
```

漏洩したホストキーが発見された場合、ユーティリティは `1` というステータスと次のメッセージで終了します。
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

漏洩したホストキーが発見されなかった場合、ユーティリティは `0` というステータスと次のメッセージで終了します。
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

#### ghe-ssh-roll-host-keys

このユーティリティは、SSH のホストキーを廃棄し、新しく作成したキーに置き換えます。

```shell
$ sudo ghe-ssh-roll-host-keys
SSH のホストキーを廃棄しますか？ /etc/ssh/ssh_host_* にある既存キーを削除し、新しいキーを生成します。 [y/N]

# 'Y' を押して、削除を確認するか、-y スイッチを使ってこのプロンプトを回避する

> SSH host keys have successfully been rolled.
```

#### ghe-ssh-weak-fingerprints

このユーティリティは、{% data variables.product.prodname_enterprise %} のアプライアンスに保存されている脆弱なSSHキーの報告を作成します。 ユーザのキーを一括アクションとして取り消すことができます。 このユーティリティは、脆弱なシステムキーについて報告します。取り消しは、[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) で手動的に行う必要があります。

```shell
# ユーザのシステムの脆弱なキーの報告を表示
$ ghe-ssh-weak-fingerprints

# ユーザの全ての脆弱なキーを取り消す
$ ghe-ssh-weak-fingerprints --revoke
```

#### ghe-ssl-acme

このユーティリティでは、 {% data variables.product.prodname_enterprise %} のアプライアンスに Let's Encrypt の証明書をインストールすることができます。 詳しくは、"[TLS の設定方法](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)。" を参照してください。

`-x`フラグを使って、ACME設定を削除できます。

```shell
ghe-ssl-acme -e
```

#### ghe-ssl-ca-certificate-install

このユーティリティでは、{% data variables.product.prodname_enterprise %} のサーバにカスタムルートのCA証明書をインストールできます。 証明書は PEM 形式でなければなりません。 さらに、証明書の提供者が1つのファイルに複数のCA証明書を含めている場合は、それらを個別のファイルに分けて `ghe-ssl-ca-certificate-install` に各々を渡す必要があります。

S/MIME コミット署名の検証のために証明書チェーンを追加するには、このユーティリティを実行します。 詳細は「[コミット署名の検証について](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)」を参照してください。

他のサーバが自己署名証明書または必要な CA バンドルがついていない SSL 証明書を使っているため {% data variables.product.product_location %} がそのサーバに接続できない場合、このユーティリティを使ってください。 これを確認する方法は、{% data variables.product.product_location %} から`openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` を実行することです。 リモートサーバの SSL 証明書を確認できたら、`SSL-Session` が次のように0の終了コードを表示します。

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

リモートサーバの SSL 証明書を確認*できない*場合は、`SSL-Session` が0ではない終了コードを表示します。

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
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

#### ghe-ssl-generate-csr

このユーティリティにより、秘密鍵と証明書署名要求 (CSR) を生成できます。これらを商用またはプライベートの認証局と共有することで、インスタンスで使用する有効な証明書を取得できます。 詳しくは、"[TLS の設定方法](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)。" を参照してください。

このコマンドの詳細や追加のオプションについては、`-h` フラグを使用してください。

```shell
ghe-ssl-generate-csr
```

#### ghe-storage-extend

一部のプラットフォームでは、ユーザボリュームを拡張するためにこのスクリプトが必要です。 詳細は「[ストレージ容量の増加](/enterprise/admin/guides/installation/increasing-storage-capacity/)」を参照してください。

```shell
$ ghe-storage-extend
```

#### ghe-version

このユーティリティは、{% data variables.product.product_location %} のバージョンやプラットフォーム、ビルドを表示します。

```shell
$ ghe-version
```

#### ghe-webhook-logs

このユーティリティは、管理人がレビューして問題を突き止めるための webhook のデリバリーログを表示します。

```shell
ghe-webhook-logs
```

過去1日の失敗したフックデリバリーを表示するには、以下のようにします。
{% if currentVersion ver_gt "enterprise-server@2.22" %}
```shell
ghe-webhook-logs -f -a <em>YYYY-MM-DD</em>
```

日付のフォーマットは、`YYYY-MM-DD`、`YYYY-MM-DD HH:MM:SS`、または `YYYY-MM-DD HH:MM:SS (+/-) HH:M` である必要があります。
{% else %}
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```
{% endif %}

フックのペイロードの全体や結果、デリバリーの例外を表示するには、以下のようにします。
{% if currentVersion ver_gt "enterprise-server@2.22" %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em>
```
{% else %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```
{% endif %}

### クラスタリング

#### ghe-cluster-status

{% data variables.product.prodname_ghe_server %} のクラスターデプロイメントでノードとサービスの健全性を確認します。

```shell
$ ghe-cluster-status
```

#### ghe-cluster-support-bundle

このユーティリティは、Geo-replication またはクラスタリングのいずれかの構成で、各ノードからの重要なログを含む Support Bundle tarball を作成します。

このコマンドは、デフォルトの設定では、*/tmp* に TAR 書庫を作成しますが、簡単に SSH 経由でストリーミングできるように、TAR 書庫を `STDOUT` に `cat`できます。 ウェブ UI が反応していないか、*/setup/support* から Support Bundle をダウンロードできないときに役立ちます。 より古いログを含む*拡張*バンドルを生成するときにこのコマンドを使う必要があります。 さらに、このコマンドを使って {% data variables.product.prodname_enterprise %} のサポートにクラスタリングSupport Bundle を直接アップロードすることができます。

標準のバンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

拡張バンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

バンドルを{% data variables.contact.github_support %}に送信するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

バンドルを{% data variables.contact.github_support %}に送信し、そのバンドルをチケットに関連づけるには以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### ghe-cluster-failover

アクティブクラスタノードからパッシブクラスタノードにフェイルオーバーします。 詳しい情報については、「[レプリカクラスタへのフェイルオーバーを開始する](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)」を参照してください。

```shell
ghe-cluster-failover
```
{% endif %}

#### ghe-dpages

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
ghe-dpages evacuate pages-server-<em>UUID</em>
```

#### ghe-spokes

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
ghe-spokes server evacuate git-server-<em>UUID</em>
```

#### ghe-storage

このユーティリティを使用すると、クラスタノードからの待避の前にストレージサービスをすべて待避させることができます。

```shell
ghe-storage evacuate storage-server-<em>UUID</em>
```

### Git

#### ghe-btop

現在の Git 作業用の`top`にあたるインタフェース。

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-repo

このユーティリティでは、リポジトリのディレクトリを変更し、`git`ユーザとしてインタラクティブシェルを開けることができます。 `git-*` や `git-nw-*` などのコマンドを使って、手動的な監査やメンテナンスを行うことができます。

```shell
ghe-repo <em>ユーザ名</em>/<em>reponame</em>
```

#### ghe-repo-gc

このユーティリティは、パックの容量を最適化するために、手動的にリポジトリのネットワークをリパックします。 大きなリポジトリの場合、このコマンドではリポジトリの全体的なサイズを減らすことができます。 リポジトリのネットワークとの対話を通じて、{% data variables.product.prodname_enterprise %} がこのコマンドを自動的に実行します。

任意の`--prune` の引数を付けて、ブランチやタグ、refに参照されていない、届かないGitオブジェクトを除くことができます。 これは、[以前抹消した機密情報](/enterprise/user/articles/remove-sensitive-data/) を直ちに削除するのに役立ちます。

```shell
ghe-repo-gc <em>ユーザ名</em>/<em>reponame</em>
```

### インポートとエクスポート

#### ghe-migrator

`ghe-migrator` は、他のGitHubインスタンスに移行するためのハイファイツールです。 インスタンスを統合、もしくは Organization やユーザ、Team、リポジトリをGitHub.comから {% data variables.product.prodname_enterprise %} に移行することができます。

詳しくは、[ユーザやOrganization、リポジトリデータの移行](/enterprise/admin/guides/migrations/)の説明書を参照してください。

#### git-import-detect

URL が与えられたら、どのタイプのソース管理システムが相手側にあるのかを検出します。 このことは、手動インポートの間におそらくすでに知られていますが、自動化されたスクリプトでとても役立ちます。
```shell
git-import-detect
```

#### git-import-hg-raw

このユーティリティは、MercurialのリポジトリをこのGitリポジトリにインポートします。 詳しい情報については「[サードパーティのバージョン管理システムからのデータのインポート](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-hg-raw
```

#### git-import-svn-raw

このユーティリティはSubversionの履歴とファイルデータをGitのブランチにインポートします。 これはツリーの単純なコピーであり、トランクやブランチの区別を無視します。 詳しい情報については「[サードパーティのバージョン管理システムからのデータのインポート](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-svn-raw
```

#### git-import-tfs-raw

このユーティリティは、Team Foundation Version Control (TFVC) からインポートします。 詳しい情報については「[サードパーティのバージョン管理システムからのデータのインポート](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-tfs-raw
```

#### git-import-rewrite

このユーティリティは、インポートされたリポジトリを書き直します。 これにより、作者名を変更したり、Subversion および TFVC では、フォルダーに基づいて Git ブランチがを生成したりすることができます。 詳しい情報については「[サードパーティのバージョン管理システムからのデータのインポート](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)」を参照してください。
```shell
git-import-rewrite
```

### サポート

#### ghe-diagnostics

このユーティリティは、さまざまな確認を行い、問題を突き止めるためのサポートに送れるインスタレーションについて情報を集めます。

現在のところ、このユーティリティの出力は、{% data variables.enterprise.management_console %} で診断情報をダウンロードすることに似ていますが、時間の経過とともに、Web UI では利用できない改善がさらに追加されている可能性があります。 詳細は「"[診断ファイルの作成と共有](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)」を参照してください。

```shell
ghe-diagnostics
```

#### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
このユーティリティは、インスタンスから重要なログを含むSupport BundleのTAR書庫を作成します。

このコマンドは、デフォルトの設定では、*/tmp* に TAR 書庫を作成しますが、簡単に SSH 経由でストリーミングできるように、TAR 書庫を `STDOUT` に `cat`できます。 ウェブ UI が反応していないか、*/setup/support* から Support Bundle をダウンロードできないときに役立ちます。 より古いログを含む*拡張*バンドルを生成するときにこのコマンドを使う必要があります。 さらに、このコマンドを使って {% data variables.product.prodname_enterprise %} のサポートに Support Bundle を直接アップロードすることができます。

標準のバンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

拡張バンドルを作成するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

バンドルを{% data variables.contact.github_support %}に送信するには、以下のようにします。
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

バンドルを{% data variables.contact.github_support %}に送信し、そのバンドルをチケットに関連づけるには以下のようにします。

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

#### ghe-support-upload

このユーティリティは、アプライアンスから {% data variables.product.prodname_enterprise %} サポートに情報を送信します。 ローカルファイルを指定、または`STDIN`経由で最大100MBまでのデータのストリームを提供することができます。 アップロードされたデータは任意でサポートチケットと関連付けることができます。

ファイルを{% data variables.contact.github_support %}に送信し、そのファイルをチケットに関連づけるには以下のようにします。
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

`STDIN`経由でデータをアップロードし、そのデータをチケットに関連づけるには以下のようにします。
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

この例では、`ghe-repl-status -vv` がレプリカアプライアンスから詳細なステータス情報を送信します。 `ghe-repl-status -vv`を`STDIN`ストリーミングしたい特定データに入れ替えて、`Verbose Replication Status` をデータの簡潔な説明に入れ替えます。 {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

### {% data variables.product.prodname_ghe_server %} のアップグレード

#### ghe-upgrade

このユーティリティは、アップグレードパッケージをインストール、または確認します。 アップグレードが失敗した場合や中断された場合は、このユーティリティを使用してパッチリリースをロールバックすることもできます。 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。

アップグレードパッケージを確認するには以下のようにします。
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

アップグレードパッケージをインストールするには以下のようにします。
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

#### ghe-upgrade-scheduler

このユーティリティは、アップグレードパッケージの定期的なインストールを管理します。 定期的なインストールを表示、新規作成、削除することができます。 クーロン表現を使って、スケジュールを作る必要があります。 詳しい情報については、[Wikipedia にあるクーロンのエントリー](https://en.wikipedia.org/wiki/Cron#Overview)を参照してくださ

パッケージの新しいインストールをスケジュールするには以下のようにします。
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

パッケージのスケジュールされたインストールを表示するには以下のようにします。
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

パッケージのスケジュールされたインストールを削除するには以下のようにします。
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

#### ghe-update-check

このユーティリティは、{% data variables.product.prodname_enterprise %} の新規パッチのリリースがあるかどうかを確認します。 リリースが存在する場合、インスタンスに十分な容量があればパッケージをダウンロードします。 デフォルトでは、パッケージは */var/lib/ghe-updates* に保存されます。 その後、管理人が[アップグレードを実行できます](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/)。

*/var/lib/ghe-updates/ghe-update-check.status* にダウンロードのステータスを含むファイルがあります。

`-i`のスイッチを使って、{% data variables.product.prodname_enterprise %} の最新リリースを確認することができます。

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

### ユーザ管理

#### ghe-license-usage

このユーティリティは、インストールのユーザーのリストを JSON 形式でエクスポートします。 インスタンスが {% data variables.product.prodname_ghe_cloud %} に接続されている場合、{% data variables.product.prodname_ghe_server %} はこの情報を使用してライセンス情報を {% data variables.product.prodname_ghe_cloud %} に報告します。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_ghe_cloud %} に接続する](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

デフォルトでは、結果の JSON ファイル内のユーザのリストは暗号化されます。 その他のオプションを利用するには、`-h` のフラグを使ってください。

```shell
ghe-license-usage
```

#### ghe-org-membership-update

このユーティリティは、インスタンスでメンバー全員に対して、デフォルトの Organization メンバーシップの可視性の設定を必須化します。 詳しい情報については、「[Organization メンバーの可視性の設定](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)」を参照してください。 設定可能なオプションは、`public` または `private` です。

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

#### ghe-user-csv

このユーティリティは、インストール内のすべてのユーザのリストを CSV 形式でエクスポートします。 CSV ファイルにはメールアドレスやユーザの種類 (例えば、アドミンやユーザなど) や所有しているリポジトリの数、所有している SSH キーの数、Organization のメンバーの数、最後にログインしたときの IP アドレスなどが含まれています。 その他のオプションを利用するには、`-h` のフラグを使ってください。

```shell
ghe-user-csv -o > users.csv
```

#### ghe-user-demote

このユーティリティは、指定のユーザをアドミンステータスから一般ユーザのステータスに変更します。 このアクションは、ウェブ UI を使って行うことをおすすめします。このユーティリティを提供しているのは、誤って`ghe-user-promote` を実行してしまった場合に、CLI からユーザを降格させるためです。

```shell
ghe-user-demote <em>some-user-name</em>
```

#### ghe-user-promote

このユーティリティは、指定したユーザアカウントをサイト管理人に変更します。

```shell
ghe-user-promote <em>some-user-name</em>
```

#### ghe-user-suspend

このユーティリティは、指定したユーザのアカウントを停止して、ログインやプッシュ、リポジトリからのプルを行えないようにします。

```shell
ghe-user-suspend <em>some-user-name</em>
```

#### ghe-user-unsuspend

このユーティリティは、指定したユーザの停止状態を解除して、ログインやプッシュ、リポジトリからプルを行えるようにします。

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
