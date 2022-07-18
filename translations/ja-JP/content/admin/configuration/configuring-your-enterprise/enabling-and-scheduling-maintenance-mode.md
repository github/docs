---
title: メンテナンスモードの有効化とスケジューリング
intro: '標準的なメンテナンス手順のうち、{% data variables.product.product_location %} のアップグレードやバックアップの復元などは、通常の使用のためにインスタンスをオフラインにしなければならないものがあります。'
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
---

## メンテナンスモードについて

操作の種類によっては、{% data variables.product.product_location %} をオフラインにしてメンテナンスモードにする必要があります。
- {% data variables.product.prodname_ghe_server %} の新規バージョンにアップグレードする
- 仮想マシンに割り当てられている CPU、メモリ、またはストレージリソースを拡大する
- ある仮想マシンから別の仮想マシンへデータを移行する
- {% data variables.product.prodname_enterprise_backup_utilities %} スナップショットからデータを復元する
- 特定の種類の重要なアプリケーション問題のトラブルシューティング

メンテナンスウィンドウのスケジュールは、ユーザに準備時間を与えるために少なくとも30分は先にすることをおすすめします。 メンテナンスウィンドウがスケジューリングされると、すべてのユーザにはサイトにアクセスしたときにバナーが表示されます。



![スケジューリングされたメンテナンスに関するエンドユーザ向けバナー](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

インスタンスがメンテナンスモードに入ると、通常のHTTP及びGitアクセスはすべて拒否されます。 Git fetch、clone、pushの操作も、サイトが一時的に利用できなくなっていることを示すエラーメッセージと共に拒否されます。 In high availability configurations, Git replication will be paused. GitHub Actions jobs will not be executed. サイトにブラウザーでアクセスすると、メンテナンスページが表示されます。

![メンテナンスモードのスプラッシュスクリーン](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

You can perform initial validation of your maintenance operation by configuring an IP exception list to allow access to {% data variables.product.product_location %} from only the IP addresses and ranges provided. Attempts to access {% data variables.product.product_location %} from IP addresses not specified on the IP exception list will receive a response consistent with those sent when the instance is in maintenance mode.

{% endif %}

## メンテナンスモードの即時有効化あるいは後のためのメンテナンスウィンドウのスケジューリング

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. {% data variables.enterprise.management_console %}の上部で**Maintenance（メンテナンス）**をクリックしてください ![[Maintenance] タブ](/assets/images/enterprise/management-console/maintenance-tab.png)
3. "Enable and schedule（有効化とスケジュール）"の下で、即時にメンテナンスモードを有効化するか、将来にメンテナンスウィンドウをスケジューリングするかを決めてください。
    - メンテナンスモードを直ちに有効にするには、プルダウンメニューを使用して [**now**] をクリックします。 ![メンテナンスモードを有効にするオプションが選択されたドロップダウンメニュー](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - 今後のメンテナンス時間枠をスケジュール設定するには、ドロップダウンメニューを使用して開始時間をクリックします。 ![メンテナンス時間枠を 2 時間でスケジュール設定するオプションが選択されたドロップダウンメニュー](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. **Enable maintenance mode（メンテナンスモードの有効化）**を選択してください。 ![メンテナンスモードの有効化とスケジューリングのためのチェックボックス](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Validating changes in maintenance mode using the IP exception list

The IP exception list provides controlled and restricted access to {% data variables.product.product_location %}, which is ideal for initial validation of server health following a maintenance operation. Once enabled, {% data variables.product.product_location %} will be taken out of maintenance mode and available only to the configured IP addresses. The maintenance mode checkbox will be updated to reflect the change in state.

If you re-enable maintenance mode, the IP exception list will be disabled and {% data variables.product.product_location %} will return to maintenance mode. If you just disable the IP exception list, {% data variables.product.product_location %} will return to normal operation.

You can also use a command-line utility to configure the IP exception list. For more information, see "[Command-line utilities](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)" and "[Accessing the administrative shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. At the top of the {% data variables.enterprise.management_console %}, click **Maintenance**, and confirm maintenance mode is already enabled. ![[Maintenance] タブ](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Select **Enable IP exception list**. ![Checkbox for enabling ip exception list](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. In the text box, type a valid list of space-separated IP addresses or CIDR blocks that should be allowed to access {% data variables.product.product_location %}. ![completed field for IP addresses](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. [**Save**] をクリックします。 ![after IP excetpion list has saved](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## {% data variables.product.prodname_enterprise_api %}でのメンテナンスモードのスケジューリング

{% data variables.product.prodname_enterprise_api %}では、様々な時間や日付にメンテナンスをスケジューリングできます。 詳しい情報については、「[Management Console](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)」を参照してください。

## クラスタ内の全ノードでのメンテナンスモードの有効化もしくは無効化

`ghe-cluster-maintenance`ユーティリティを使えば、クラスタ内のすべてのノードでメンテナンスモードの設定や解除ができます。

```shell
$ ghe-cluster-maintenance -h
# オプションの表示
$ ghe-cluster-maintenance -q
# 現在のモードの問い合わせ
$ ghe-cluster-maintenance -s
# メンテナンスモードの設定
$ ghe-cluster-maintenance -u
# メンテナンスモードの解除
```
