---
title: システムの概要
intro: '{% data variables.product.product_name %} のシステム内部、機能、セキュリティについて詳しく説明します。'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
ms.openlocfilehash: 656d68b267b4a739812b10e9409609f61cacdd5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066939'
---
## {% data variables.product.product_name %} について

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %}{% data reusables.enterprise.github-distributes-ghes %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} について](/admin/overview/about-github-enterprise-server)」を参照してください。

## ストレージ アーキテクチャ

{% data variables.product.product_name %} には 2 つのストレージ ボリュームが必要です。1 つは *"ルート ファイルシステム"* パス (`/`) にマウントされ、もう 1 つは *"ユーザー ファイルシステム"* パス (`/data/user`) にマウントされます。 このアーキテクチャは、動作するソフトウェアの環境を永続的なアプリケーションデータから分離することによって、アップグレード、ロールバック、リカバリの手続きをシンプルにします。

ルートファイルシステムは、配布されているマシンイメージに含まれています。 ルート ファイルシステムにはベースのオペレーティング システムと {% data variables.product.product_name %} アプリケーション環境が含まれています。 ルートファイルシステムは、一過性のものとして扱われなければなりません。 ルート ファイルシステム上にあるデータは、すべて将来の {% data variables.product.product_name %} リリースへのアップグレード時に置き換えられます。

ルート ストレージ ボリュームは、同じサイズの 2 つのパーティションに分割されます。 パーティションの 1 つがルート ファイルシステム (`/`) としてマウントされます。 もう 1 つのパーティションは、必要に応じて簡単にロールバックできるように、アップグレードとアップグレードのロールバック中にのみ `/mnt/upgrade` としてマウントされます。 たとえば、200 GB のルート ボリュームが割り当てられている場合は、ルート ファイルシステムに 100 GB が割り当てられ、アップグレードとロールバックのために 100 GB が予約されます。

ルート ファイルシステムには、次の情報を格納するファイルが含まれています。 このリストは全てを網羅しているわけではありません。

- カスタムの証明機関 (CA) 証明書 (`/usr/local/share/ca-certificates*`)
- カスタムのネットワーク設定
- カスタムのファイアウォール設定
- レプリケーションの状態

ユーザー ファイルシステムには、次の構成とデータを格納するファイルが含まれています。 このリストは全てを網羅しているわけではありません。

- Git リポジトリ
- データベース
- インデックスの検索
- {% data variables.product.prodname_pages %} サイトで公開されたコンテンツ
- {% data variables.large_files.product_name_long %} からの大きなファイル
- pre-receive フック環境

## 展開トポロジ

{% data variables.product.product_name %} は、高可用性ペアなど、さまざまなトポロジで展開できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} について](/admin/overview/about-github-enterprise-server#about-deployment-topologies)」を参照してください。

## データのリテンションとデータセンターの冗長性

{% warning %}

**警告**: {% data variables.product.product_name %} を運用環境で使う前に、バックアップとディザスター リカバリー計画を設定しておくことを強くおすすめします。

{% endwarning %}

{% data variables.product.product_name %} には、{% data variables.product.prodname_enterprise_backup_utilities %} でのオンラインおよび増分バックアップのサポートが含まれています。 インクリメンタルスナップショットは、オフサイトや地理的に離れたストレージのために長距離を経てセキュアなネットワークリンク（SSH管理ポート）経由で取ることができます。 スナップショットは、プライマリ データセンターにおける災害時の復旧において、新たにプロビジョニングされたインスタンスにネットワーク経由で復元できます。

ネットワーク バックアップに加えて、インスタンスがオフラインになっているかメンテナンス モードになっている間の、ユーザー ストレージ ボリュームの AWS (EBS) や VMware のディスク スナップショットがサポートされています。 サービスレベルの要求が定期的なオフラインメンテナンスを許せるものであれば、定期的なボリュームのスナップショットは、{% data variables.product.prodname_enterprise_backup_utilities %}のネットワークバックアップの低コストで複雑さの低い代替になります。

詳細については、「[アプライアンスでのバックアップの構成](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)」を参照してください。

## セキュリティ

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} には、追加のセキュリティ機能も含まれています。

- [オペレーティング システム、ソフトウェア、パッチ](#operating-system-software-and-patches)
- [ネットワークのセキュリティ](#network-security)
- [アプリケーションのセキュリティ](#application-security)
- [外部サービスおよびサポートへのアクセス](#external-services-and-support-access)
- [暗号化通信](#encrypted-communication)
- [ユーザーおよびアクセス権限](#users-and-access-permissions)
- [認証](#authentication)
- [監査およびアクセスのログ取得](#audit-and-access-logging)

### オペレーティングシステム、ソフトウェア、パッチ

{% data variables.product.product_name %} は、必要なアプリケーションとサービスのみを備えた、カスタマイズされた Linux を実行します。 {% data variables.product.company_short %} は、標準的な製品リリース サイクルの一環として、インスタンスのコア オペレーティング システムに対するパッチを配布します。 パッチは、{% data variables.product.product_name %} の機能、安定性、重大でないセキュリティ問題に対処するものです。 また、{% data variables.product.company_short %} は、必要に応じて標準的なリリース サイクル外でも重要なセキュリティ パッチを提供します。

{% data variables.product.product_name %} はアプライアンスとして提供され、オペレーティング システム パッケージの多くは通常の Debian ディストリビューションと比較して変更されます。 この理由 (オペレーティング システムのアップグレードを含む) では、基になるオペレーティング システムの変更はサポートされていません。これは、[{% data variables.product.prodname_ghe_server %} ライセンスおよびサポート契約](https://enterprise.github.com/license)のセクション 11.3 免責に準拠しています。

現在、{% data variables.product.product_name %} のベース オペレーティング システムは Debian 9 (Stretch) であり、Debian 長期サポート プログラムでサポートを受けています。  Stretch の Debian LTS 期間が終了する前に、新しいベース オペレーティング システムに移行する予定があります。

定期的なパッチ更新プログラムは、{% data variables.product.product_name %} [リリース](https://enterprise.github.com/releases) ページでリリースされ、[リリース ノート](/admin/release-notes) ページで詳しい情報が提供されます。 これらのパッチには、通常、エンジニアリング チームによってテストと、品質の承認が行われた後に、アップストリーム ベンダーとプロジェクトのセキュリティ パッチが含まれます。 アップストリームの更新プログラムがリリースされた時点から、次の {% data variables.product.product_name %} パッチ リリースでテストおよびバンドルされるまでに、わずかな時間の遅延が発生する可能性があります。

### ネットワークのセキュリティ

{% data variables.product.product_name %} の内部ファイアウォールにより、インスタンスのサービスへのネットワーク アクセスが制限されます。 アプライアンスが機能するために必要なサービスだけが、ネットワークを通じて利用できます。 詳細については、「[ネットワーク ポート](/admin/configuration/configuring-network-settings/network-ports)」を参照してください。

### アプリケーションのセキュリティ

{% data variables.product.company_short %} のアプリケーション セキュリティ チームは、{% data variables.product.product_name %} も含めた {% data variables.product.company_short %} 製品に対する脆弱性評価、侵入テスト、コード レビューにフルタイムで重点的に取り組んでいます。 また、{% data variables.product.company_short %} は、{% data variables.product.company_short %} 製品の特定時点におけるセキュリティ評価を行うために、外部セキュリティ企業と契約しています。

### 外部サービスおよびサポートへのアクセス

{% data variables.product.product_name %} は、お客様のネットワークから外部サービスへのエグレス アクセスなしで運用できます。 また、メール配信、外部モニタリング、およびログ転送のため、外部サービスとのインテグレーションを有効にすることも可能です。 詳細については、「[通知用の電子メールの構成](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)」、「[外部監視の設定](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)」、「[ログ転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。

トラブルシューティングデータを手動で収集し、{% data variables.contact.github_support %} に送信できます。 詳細については、「[{% data variables.contact.github_support %} へのデータ提供](/support/contacting-github-support/providing-data-to-github-support)」を参照してください。

### 暗号化通信

{% data variables.product.company_short %} は、{% data variables.product.product_name %} がお客様の社内ファイアウォールの背後で動作するように設計しています。 回線を介した通信を保護するため、Transport Layer Security (TLS) を有効化するようお勧めします。 {% data variables.product.product_name %} は、HTTP トラフィックに対して、2048 ビット以上の商用 TLS 証明書をサポートしています。 詳細については、「[TLS の構成](/admin/configuration/configuring-network-settings/configuring-tls)」を参照してください。

既定では、Git によるリポジトリへのアクセスと管理の両方の目的で、インスタンスによって Secure Shell (SSH) アクセスも提供されます。 詳細については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」および「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

{% ifversion ghes > 3.3 %}

{% data variables.product.product_location %} に対して SAML 認証を構成する場合は、インスタンスと SAML IdP の間で暗号化されたアサーションを有効にすることができます。 詳細については、[SAML の使用](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)に関するページを参照してください。

{% endif %}

### ユーザおよびアクセス権限

{% data variables.product.product_name %} には 3 種類のアカウントがあります。

- `admin` Linux ユーザー アカウントは、ファイルシステムやデータベースへの直接的なアクセスを含め、基になるオペレーティング システムに対して制御されたアクセスを行うことができます。 このアカウントには、少数の信頼できる管理者がアクセスできるようにすべきで、SSH を介してアクセスできます。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。
- インスタンスの Web アプリケーション内のユーザー アカウントは、自らのデータと、他のユーザーや Organization が明示的に許可したあらゆるデータへのフル アクセスができます。
- インスタンスの Web アプリケーション内のサイト管理者は、高レベルの Web アプリケーションおよびインスタンスの設定、ユーザーおよび Organization のアカウント設定、リポジトリ データを管理できるユーザー アカウントです。

{% data variables.product.product_name %} のユーザーのアクセス許可に関する詳しい情報については「[{% data variables.product.prodname_dotcom %} 上のアクセス許可](/get-started/learning-about-github/access-permissions-on-github)」を参照してください。

### 認証

{% data variables.product.product_name %} には、4 つの認証方式が提供されています。

- SSH 公開鍵認証は、Git によるリポジトリへのアクセスと、管理シェルアクセスの両方を提供します。 詳細については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」および「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。
- HTTP クッキーを用いたユーザ名とパスワードによる認証では、ウェブアプリケーションのアクセスおよびセッションの管理、そして任意で 2 要素認証 (2FA) を提供します。 詳細については、「[ビルドイン認証を使用する](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)」を参照してください。
- LDAP サービス、SAML アイデンティティプロバイダ (IdP)、またはその他互換性のあるサービスを用いた外部 LDAP、SAML、および CAS 認証は、ウェブアプリケーションへのアクセスを提供します。 詳細については、[エンタープライズの IAM の管理](/admin/identity-and-access-management/managing-iam-for-your-enterprise)に関するページを参照してください。
- OAuth および個人アクセストークンは、外部クライアントとサービスの両方に対して、Git リポジトリデータおよび API へのアクセスを提供します。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。

### 監査およびアクセスのログ取得

{% data variables.product.product_name %} では、従来型オペレーティング システムおよびアプリケーションの両方のログが保存されます。 また、詳しい監査およびセキュリティのログもアプリケーションで記録され、{% data variables.product.product_name %} で永続的に保存されます。 `syslog-ng` プロトコルを介して、両方の種類のログをリアルタイムで複数の宛先に転送できます。 詳しい情報については、「[Enterprise の監査ログについて](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)」と「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。

アクセスログと監査ログには、以下のような情報が含まれています。

#### アクセス ログ

- ブラウザと API アクセスの両方の、ウェブサーバーの完全なログ
- Git、HTTPS、および SSH プロトコルを介した、リポジトリデータへのアクセスの完全なログ
- HTTPS および SSH を介した、管理アクセスのログ

#### 監査ログ

- ユーザのログイン、パスワードのリセット、2 要素認証のリクエスト、メール設定の変更、ならびに許可されたアプリケーションおよび API への変更
- ユーザアカウントやリポジトリのアンロックなどの、サイト管理者のアクション
- リポジトリのプッシュイベント、アクセス許可、移譲、および名前の変更
- チームの作成および破棄を含む、Organization のメンバーシップ変更

## {% data variables.product.product_name %} のオープンソース依存性

インスタンスのバージョンの {% data variables.product.product_name %} における依存関係の完全な一覧は、それぞれのプロジェクトのライセンスと合わせて `http(s)://HOSTNAME/site/credits` で見ることができます。

依存関係と関連するメタデータの完全な一覧と合わせて、tarball 群がインスタンス上にあります。

- すべてのプラットフォームに共通する依存関係の場合は、`/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz` を参照してください。
- 固有のプラットフォームの依存関係の場合は、`/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz` を参照してください。

依存関係とメタデータの完全な一覧と共に、Tarball も `https://enterprise.github.com/releases/<version>/download.html` で入手できます。

## 参考資料

- 「[{% data variables.product.prodname_ghe_server %} の試用版を設定する](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)」
- 「[{% data variables.product.prodname_ghe_server %} インスタンスの設定](/admin/installation/setting-up-a-github-enterprise-server-instance)」
