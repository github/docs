---
title: Management Console にアクセスする
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107126'
---
## {% data variables.enterprise.management_console %}について

次の基本的な管理作業には {% data variables.enterprise.management_console %} を使用します。
- **初期セットアップ**: ブラウザーで {% data variables.location.product_location %}の IP アドレスにアクセスして {% data variables.location.product_location %}を最初に起動したときの、初期セットアップ プロセスを段階的に示します。
- **{% data variables.enterprise.management_console %} の認証ポリシーの構成**: ログイン試行のレート制限と、他のユーザーがレート制限を超えた場合のロックアウト期間を設定します。 
- **インスタンスの基本設定**: [設定] ページで、DNS、ホスト名、SSL、ユーザー認証、メール、モニタリング サービス、ログ転送を構成します。
- **メンテナンス期間のスケジュール**: {% data variables.enterprise.management_console %} または管理シェルを使用してメンテナンスを実行する際に、{% data variables.location.product_location %}をオフラインにします。
- **トラブルシューティング**: サポート バンドルを生成するか、高レベルの診断情報を表示します。
- **ライセンス管理**: {% data variables.product.prodname_enterprise %} ライセンスを表示または更新します。

インスタンスがメンテナンス モードになっていたり、致命的なアプリケーション障害やホスト名あるいは SSL の構成ミスがあっても、{% data variables.location.product_location %}の IP アドレスを使って、{% data variables.enterprise.management_console %} にいつでもアクセスできます。

{% data variables.enterprise.management_console %} にアクセスするには、{% data variables.location.product_location %}の初期セットアップ時に設定した管理者パスワードを使わなければなりません。 また、ポート8443で仮想マシンのホストに接続することもできます。 {% data variables.enterprise.management_console %}へのアクセスに問題があれば、中間のファイアウォールやセキュリティグループの設定を確認してください。 

{% data variables.enterprise.management_console %} パスワード ハッシュが `/data/user/common/secrets.conf` に格納され、そのファイルはプライマリ アプライアンスから高可用性レプリカに自動的に同期されます。 プライマリのパスワードに対する変更はすべて、高可用性レプリカに自動的にレプリケートされます。 高可用性の詳細については、「[高可用性構成について](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)」を参照してください。

## サイト管理者としての{% data variables.enterprise.management_console %}へのアクセス

サイト管理者として初めて {% data variables.enterprise.management_console %} にアクセスするときは、アプリに認証するために {% data variables.product.prodname_enterprise %} ライセンスファイルをアップロードする必要があります。 詳細については、「[{% data variables.product.prodname_enterprise %} のライセンスの管理](/billing/managing-your-license-for-github-enterprise)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## 認証されていないユーザとしての{% data variables.enterprise.management_console %}へのアクセス

1. ブラウザーで次の URL にアクセスします。`hostname` は実際の {% data variables.product.prodname_ghe_server %} のホスト名または IP アドレスに置き換えてください:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## ログイン試行の失敗後の{% data variables.enterprise.management_console %}のアンロック

{% data variables.enterprise.management_console %} では、認証ポリシーによって構成されたログイン試行の失敗回数{% ifversion enterprise-authentication-rate-limits %}の後にロックされます。 詳細については、「[認証ポリシー レート制限の構成](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)」を参照してください。{% else %}ログイン試行が 10 分間で 10 回失敗しました。 ログインを再度試みるには、ログイン画面が自動的にロック解除されるまで待つ必要があります。 直前の 10 分間に失敗したログイン試行が 10 回未満となると同時に、ログイン画面は自動的にロックが解除されます。 ログインが成功すると、カウンターはリセットされます。{% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## {% data variables.enterprise.management_console %} への失敗した接続のトラブルシューティング

{% data variables.location.product_location %}の {% data variables.enterprise.management_console %} に接続できない場合は、次の情報を確認して問題のトラブルシューティングを行うことができます。

### エラー: ロード バランサー経由の接続に対して "セッションの有効期限が切れています"

ロード バランサーを介して {% data variables.location.product_location %}にアクセスし、セッションの有効期限が切れたというメッセージと共に {% data variables.enterprise.management_console %} への接続が失敗する場合は、ロード バランサーの再構成が必要になることがあります。 詳細については、「[ロード バランサーでの {% data variables.product.product_name %} の使用](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)」を参照してください。
