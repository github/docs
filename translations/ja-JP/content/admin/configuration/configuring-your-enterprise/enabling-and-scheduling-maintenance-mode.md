---
title: メンテナンスモードの有効化とスケジューリング
intro: '{% data variables.product.product_location %} のアップグレードやバックアップの復元など、一部の標準的なメンテナンス手順では、通常の使用のためにインスタンスをオフラインにする必要があります。'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331769'
---
## メンテナンスモードについて

操作の種類によっては、{% data variables.product.product_location %} をオフラインにしてメンテナンス モードにする必要があります。
- {% data variables.product.prodname_ghe_server %} の新規バージョンにアップグレードする
- 仮想マシンに割り当てられている CPU、メモリ、またはストレージリソースを拡大する
- ある仮想マシンから別の仮想マシンへデータを移行する
- {% data variables.product.prodname_enterprise_backup_utilities %} スナップショットからデータを復元する
- 特定の種類の重要なアプリケーション問題のトラブルシューティング

メンテナンスウィンドウのスケジュールは、ユーザに準備時間を与えるために少なくとも30分は先にすることをおすすめします。 メンテナンスウィンドウがスケジューリングされると、すべてのユーザにはサイトにアクセスしたときにバナーが表示されます。



![スケジューリングされたメンテナンスに関するエンドユーザ向けバナー](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

インスタンスがメンテナンスモードに入ると、通常のHTTP及びGitアクセスはすべて拒否されます。 Git fetch、clone、pushの操作も、サイトが一時的に利用できなくなっていることを示すエラーメッセージと共に拒否されます。 高可用性構成では、Git レプリケーションは一時停止されます。 GitHub Actions ジョブは実行されません。 サイトにブラウザーでアクセスすると、メンテナンスページが表示されます。

![メンテナンスモードのスプラッシュスクリーン](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

メンテナンス操作の初期検証を実行するには、指定された IP アドレスと範囲からのみ {% data variables.product.product_location %} へのアクセスを許可するように IP 例外リストを構成します。 IP 例外リストで指定されていない IP アドレスから {% data variables.product.product_location %} にアクセスしようとすると、インスタンスがメンテナンス モードのときに送信された応答と一致する応答を受け取ります。 

{% endif %}

## メンテナンスモードの即時有効化あるいは後のためのメンテナンスウィンドウのスケジューリング

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. {% data variables.enterprise.management_console %} の上部で **[メンテナンス]** をクリックしてください
  ![メンテナンス タブ](/assets/images/enterprise/management-console/maintenance-tab.png)
3. "Enable and schedule（有効化とスケジュール）"の下で、即時にメンテナンスモードを有効化するか、将来にメンテナンスウィンドウをスケジューリングするかを決めてください。
    - メンテナンス モードを直ちに有効にするには、ドロップダウン メニューを使用して **[今すぐ]** をクリックします。
    ![メンテナンス モードを有効にするオプションで [今すぐ] が選択されたドロップダウン メニュー](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - 今後のメンテナンス時間枠をスケジュール設定するには、ドロップダウンメニューを使用して開始時間をクリックします。
    ![メンテナンス期間をスケジュールするオプションで [2 時間] が選択されたドロップダウン メニュー](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. **[メンテナンス モードを有効にする]** を選択します。
  ![メンテナンス モードを有効またはスケジュールするためのチェックボックス](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## IP 例外リストを使い、メンテナンス モードで変更を検証する

IP 例外リストは、{% data variables.product.product_location %} への制御および制限付きアクセスを提供します。これは、メンテナンス操作後のサーバー正常性の初期検証に最適です。 有効にすると、{% data variables.product.product_location %} はメンテナンス モードから外され、構成済みの IP アドレスでのみ使用できるようになります。 メンテナンス モードのチェック ボックスは、状態の変化を反映するように更新されます。

メンテナンス モードを再度有効にすると、IP 例外リストが無効になり、{% data variables.product.product_location %} がメンテナンス モードに戻ります。 IP 例外リストを無効にした場合、{% data variables.product.product_location %} は通常の操作に戻ります。

コマンド ライン ユーティリティを使って IP 例外リストを構成することもできます。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)」と「[管理シェル (SSH) にアクセスする](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. {% data variables.enterprise.management_console %} の上部にある **[メンテナンス]** をクリックし、メンテナンス モードが既に有効になっていることを確認します。
  ![メンテナンス タブ](/assets/images/enterprise/management-console/maintenance-tab.png)
1. **[IP 例外リストの有効化]** を選択します。
 ![IP 例外リストを有効にするためのチェックボックス](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. テキスト ボックスに、{% data variables.product.product_location %} へのアクセスを許可する必要がある、空白で区切られた IP アドレスまたは CIDR ブロックの有効な一覧を入力します。
 ![IP アドレスの完了フィールド](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. **[保存]** をクリックします。
![IP 例外リストが保存された後](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## {% data variables.product.prodname_enterprise_api %}でのメンテナンスモードのスケジューリング

{% data variables.product.prodname_enterprise_api %}では、様々な時間や日付にメンテナンスをスケジューリングできます。 詳細については、[管理コンソール](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)に関する記事を参照してください。

## クラスタ内の全ノードでのメンテナンスモードの有効化もしくは無効化

この `ghe-cluster-maintenance` ユーティリティを使用すると、クラスター内のすべてのノードのメンテナンス モードを設定または設定解除できます。

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
