---
title: システムの概要
intro: 'Learn more about {% data variables.product.product_name %}''s system internals, functionality, and security.'
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
---

## {% data variables.product.product_name %}について

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} For more information, see "[About {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server)."

## Storage architecture

{% data variables.product.product_name %} requires two storage volumes, one mounted to the *root filesystem* path (`/`) and the other to the *user filesystem* path (`/data/user`). This architecture simplifies the upgrade, rollback, and recovery procedures by separating the running software environment from persistent application data.

The root filesystem is included in the distributed machine image. It contains the base operating system and the {% data variables.product.product_name %} application environment. The root filesystem should be treated as ephemeral. Any data on the root filesystem will be replaced when upgrading to future {% data variables.product.product_name %} releases.

The root storage volume is split into two equally-sized partitions. One of the partitions will be mounted as the root filesystem (`/`). The other partition is only mounted during upgrades and rollbacks of upgrades as `/mnt/upgrade`, to facilitate easier rollbacks if necessary. For example, if a 200GB root volume is allocated, there will be 100GB allocated to the root filesystem and 100GB reserved for the upgrades and rollbacks.

The root filesystem contains files that store the following information. This list is not exhaustive.

- Custom certificate authority (CA) certificates (in `/usr/local/share/ca-certificates*`)
- カスタムのネットワーク設定
- カスタムのファイアウォール設定
- レプリケーションの状態

The user filesystem contains files that store following configuration and data. This list is not exhaustive.

- Git リポジトリ
- データベース
- 検索インデックス
- {% data variables.product.prodname_pages %} サイトで公開されたコンテンツ
- {% data variables.large_files.product_name_long %} からの大きなファイル
- pre-receive フック環境

## Deployment topologies

You can deploy {% data variables.product.product_name %} in a variety of topologies, such as a high availability pair. For more information, see "[About {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies)."

## Data retention and datacenter redundancy

{% warning %}

**Warning**: Before using {% data variables.product.product_name %} in a production environment, we strongly recommend you set up backups and a disaster recovery plan.

{% endwarning %}

{% data variables.product.product_name %} includes support for online and incremental backups with {% data variables.product.prodname_enterprise_backup_utilities %}. インクリメンタルスナップショットは、オフサイトや地理的に離れたストレージのために長距離を経てセキュアなネットワークリンク（SSH管理ポート）経由で取ることができます。 You can restore snapshots over the network into a newly provisioned instance at time of recovery in case of disaster at the primary datacenter.

In addition to network backups, both AWS (EBS) and VMware disk snapshots of the user storage volumes are supported while the instance is offline or in maintenance mode. サービスレベルの要求が定期的なオフラインメンテナンスを許せるものであれば、定期的なボリュームのスナップショットは、{% data variables.product.prodname_enterprise_backup_utilities %}のネットワークバックアップの低コストで複雑さの低い代替になります。

詳しくは、"[ アプライアンスでのバックアップの設定](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)。"を参照してください。

## セキュリティ

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} also includes additional security features.

- [オペレーティングシステム、ソフトウェア、パッチ](#operating-system-software-and-patches)
- [ネットワークのセキュリティ](#network-security)
- [アプリケーションのセキュリティ](#application-security)
- [外部サービスおよびサポートへのアクセス](#external-services-and-support-access)
- [暗号化通信](#encrypted-communication)
- [ユーザおよびアクセス権限](#users-and-access-permissions)
- [認証](#authentication)
- [監査およびアクセスのログ取得](#audit-and-access-logging)

### オペレーティングシステム、ソフトウェア、パッチ

{% data variables.product.product_name %} runs a customized Linux operating system with only the necessary applications and services. {% data variables.product.company_short %} distributes patches for the instance's core operating system as part of its standard product release cycle. Patches address functionality, stability, and non-critical security issues for {% data variables.product.product_name %}. {% data variables.product.company_short %} also provides critical security patches as needed outside of the regular release cycle.

{% data variables.product.product_name %} is provided as an appliance, and many of the operating system packages are modified compared to the usual Debian distribution. We do not support modifying the underlying operating system for this reason (including operating system upgrades), which is aligned with the [{% data variables.product.prodname_ghe_server %} license and support agreement](https://enterprise.github.com/license), under section 11.3 Exclusions.

Currently, the base operating system for {% data variables.product.product_name %} is Debian 9 (Stretch), which receives support under the Debian Long Term Support program.  There are plans to move to a newer base operating system before the end of the Debian LTS period for Stretch.

Regular patch updates are released on the {% data variables.product.product_name %} [releases](https://enterprise.github.com/releases) page, and the [release notes](/admin/release-notes) page provides more information. These patches typically contain upstream vendor and project security patches after they've been tested and quality approved by our engineering team. There can be a slight time delay from when the upstream update is released to when it's tested and bundled in an upcoming {% data variables.product.product_name %} patch release.

### ネットワークのセキュリティ

{% data variables.product.product_name %}'s internal firewall restricts network access to the instance's services. アプライアンスが機能するために必要なサービスだけが、ネットワークを通じて利用できます。 詳しい情報については"[ネットワークポート](/admin/configuration/configuring-network-settings/network-ports)"を参照してください。

### アプリケーションのセキュリティ

{% data variables.product.company_short %}'s application security team focuses full-time on vulnerability assessment, penetration testing, and code review for {% data variables.product.company_short %} products, including {% data variables.product.product_name %}. {% data variables.product.company_short %} also contracts with outside security firms to provide point-in-time security assessments of {% data variables.product.company_short %} products.

### 外部サービスおよびサポートへのアクセス

{% data variables.product.product_name %} can operate without any egress access from your network to outside services. また、メール配信、外部モニタリング、およびログ転送のため、外部サービスとのインテグレーションを有効にすることも可能です。 詳しい情報については、「[通知のためのメール設定](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)」、「[外部モニタリングのセットアップ](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)」、「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。

トラブルシューティングデータを手動で収集し、{% data variables.contact.github_support %} に送信できます。 詳細は「[{% data variables.contact.github_support %} にデータを提供する](/support/contacting-github-support/providing-data-to-github-support)」を参照してください。

### 暗号化通信

{% data variables.product.company_short %} designs {% data variables.product.product_name %} to run behind your corporate firewall. 回線を介した通信を保護するため、Transport Layer Security (TLS) を有効化するようお勧めします。 {% data variables.product.product_name %} supports 2048-bit and higher commercial TLS certificates for HTTPS traffic. 詳しい情報については「[TLSの設定](/admin/configuration/configuring-network-settings/configuring-tls)」を参照してください。

By default, the instance also offers Secure Shell (SSH) access for both repository access using Git and administrative purposes. 詳しい情報については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」および「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

{% ifversion ghes > 3.3 %}

If you configure SAML authentication for {% data variables.product.product_location %}, you can enable encrypted assertions between the instance and your SAML IdP. For more information, see "[Using SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)."

{% endif %}

### ユーザおよびアクセス権限

{% data variables.product.product_name %} provides three types of accounts.

- `admin` Linux ユーザアカウントは、ファイルシステムやデータベースへの直接的なアクセスを含め、基底のオペレーティングシステムに対して限定的にアクセスできます。 このアカウントには、少数の信頼できる管理者がアクセスできるようにすべきで、SSH を介してアクセスできます。 詳しい情報については「[管理シェル（SSH）にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。
- User accounts in the instance's web application have full access to their own data and any data that other users or organizations explicitly grant.
- Site administrators in the instance's web application are user accounts that can manage high-level web application and instance settings, user and organization account settings, and repository data.

For more information about {% data variables.product.product_name %}'s user permissions, see "[Access permissions on {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github)."

### 認証

{% data variables.product.product_name %} provides four authentication methods.

- SSH 公開鍵認証は、Git によるリポジトリへのアクセスと、管理シェルアクセスの両方を提供します。 詳しい情報については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」および「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。
- HTTP クッキーを用いたユーザ名とパスワードによる認証では、ウェブアプリケーションのアクセスおよびセッションの管理、そして任意で 2 要素認証 (2FA) を提供します。 詳しい情報については「[ビルトイン認証の利用](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)」を参照してください。
- LDAP サービス、SAML アイデンティティプロバイダ (IdP)、またはその他互換性のあるサービスを用いた外部 LDAP、SAML、および CAS 認証は、ウェブアプリケーションへのアクセスを提供します。 For more information, see "[Managing IAM for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise)."
- OAuth および個人アクセストークンは、外部クライアントとサービスの両方に対して、Git リポジトリデータおよび API へのアクセスを提供します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

### 監査およびアクセスのログ取得

{% data variables.product.product_name %} stores both traditional operating system and application logs. The application also writes detailed auditing and security logs, which {% data variables.product.product_name %} stores permanently. `syslog-ng` プロトコルを介して、両タイプのログをリアルタイムで複数の宛先に転送できます。 For more information, see "[About the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)" and "[Log forwarding](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."

アクセスログと監査ログには、以下のような情報が含まれています。

#### アクセスログ

- ブラウザと API アクセスの両方の、ウェブサーバーの完全なログ
- Git、HTTPS、および SSH プロトコルを介した、リポジトリデータへのアクセスの完全なログ
- HTTPS および SSH を介した、管理アクセスのログ

#### 監査ログ

- ユーザのログイン、パスワードのリセット、2 要素認証のリクエスト、メール設定の変更、ならびに許可されたアプリケーションおよび API への変更
- ユーザアカウントやリポジトリのアンロックなどの、サイト管理者のアクション
- リポジトリのプッシュイベント、アクセス許可、移譲、および名前の変更
- チームの作成および破棄を含む、Organization のメンバーシップ変更

## Open source dependencies for {% data variables.product.product_name %}

You can see a complete list of dependencies in your instance's version of {% data variables.product.product_name %}, as well as each project's license, at `http(s)://HOSTNAME/site/credits`.

Tarballs with a full list of dependencies and associated metadata are available on your instance.

- すべてのプラットフォームに共通の依存関係は `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz` にあります。
- プラットフォームに固有の依存関係は `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz` にあります。

依存対象とメタデータの完全なリストとともにTarball群も`https://enterprise.github.com/releases/<version>/download.html`にあります。

## 参考リンク

- [{% data variables.product.prodname_ghe_server %} のトライアルをセットアップする](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)
- [{% data variables.product.prodname_ghe_server %} インスタンスのセットアップ](/admin/installation/setting-up-a-github-enterprise-server-instance)
