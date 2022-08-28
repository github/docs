---
title: SNMP での監視
intro: '{% data variables.product.prodname_enterprise %}は、SNMP経由でディスクの使用や CPU の使用率、メモリーの使用などのデータを提供します。'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp/
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

SNMP とは、ネットワーク経由でデバイスを監視するための一般的基準です。 {% data variables.product.product_location %}のj状態を監視可能にし、いつホストのマシンにメモリやストレージ、処理能力を追加すべきかを知るために、SNMP を有効にすることを強くおすすめします。

{% data variables.product.prodname_enterprise %} には標準の SNMP がインストールされているので、Nagios などのモニタリングシステムに対して利用可能な[数多くのプラグイン](http://www.monitoring-plugins.org/doc/man/check_snmp.html)を活用できます。

### SNMP v2c を設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. **Community string** の欄では、新しいコミュニティ文字列を入力する。 空白のままだと、`public`という設定になります。 ![コミュニティ文字列型を追加するためのフィールド](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. SNMP に対応している別のワークステーションで次のコマンドを実行して、SNMP のコンフィグレーションをテストする。
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

これにより、{% data variables.product.product_location %} ホストでのシステム時刻が返されます。

### ユーザベースのセキュリティ

SNMP v3 を有効にすると、ユーザセキュリティモデル (USM) により、強化されたユーザベースのセキュリティを利用できます。 ユーザごとに、以下のセキュリティレベルを指定できます:
- `noAuthNoPriv`: このセキュリティレベルは認証もプライバシーも提供しません。
- `authNoPriv`: このセキュリティレベルは認証を提供しますがプライバシーは提供しません。 アプライアンスを照会するには、ユーザ名とパスワード (最低 8 文字) が必要です。 SNMPv2 と同様に、情報は暗号化されずに送信されます。 可能な認証プロトコルは MD5 または SHA であり、デフォルトは SHA です。
- `authPriv`: このセキュリティレベルはプライバシーと共に認証を提供します。 8 文字以上の認証パスワードを含む認証が必要であり、返信は暗号化されます。 プライバシーパスワードは必須ではありませんが、指定する場合は 8 文字以上でなければなりません。 プライバシーパスワードが指定されない場合は、認証パスワードが使用されます。 プライバシープロトコルは DES または AES のいずれかが可能であり、デフォルトは AES です。

### SNMP v3 用にユーザーを設定する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. [**SNMP v3**] を選択します。 ![SNMP v3 を有効化するボタン](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. [Username] に、SNMP v3 ユーザの固有なユーザ名を入力します。 ![SNMP v3 ユーザ名を入力するためのフィールド](/assets/images/enterprise/management-console/snmpv3-username.png)
6. [**Security Level**] ドロップダウンメニューで、SNMP v3 ユーザ ー用のセキュリティレベルをクリックします。 ![SNMP v3 ユーザのセキュリティレベルを指定するためのドロップダウンメニュー](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. セキュリティレベルが `authnopriv` である SNMP v3 ユーザの場合: ![セキュリティレベル authnopriv の設定](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. セキュリティレベルが `authpriv` である SNMP v3 ユーザの場合: ![セキュリティレベル authpriv の設定](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - 任意で、[Privacy password] にプライバシーパスワードを入力します。
    - [Privacy password] の右側にある [**Protocol**] ドロップダウンメニューで、使用するプライバシープロトコル方式をクリックします。
9. [**Add user**] をクリックします。 ![SNMP v3 ユーザを追加するボタン](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

##### SNMP データの照会

アプライアンスに関するハードウェアレベルとソフトウェアレベルの両方の情報が SNMP v3 で利用できます。 `noAuthNoPriv` と `authNoPriv` のセキュリティレベルでは暗号化とプライバシーが欠如しているため、結果の SNMP レポートから `hrSWRun` の表 (1.3.6.1.2.1.25.4) は除外されます。 セキュリティレベル `authPriv` を使用している場合は、この表が掲載されます。 詳しい情報については、「[OID のリファレンスドキュメンテーション](http://oidref.com/1.3.6.1.2.1.25.4)」を参照してください。

SNMP v2c では、アプライアンスに関するハードウェアレベルの情報のみが利用できます。 {% data variables.product.prodname_enterprise %} 内のアプリケーションとサービスには、メトリックスを報告するように設定された OID がありません。 いくつかの MIB が利用できます。ネットワーク内において SNMP をサポートしている別のワークステーションで `snmpwalk` を実行することで、利用できる MIB を確認できます。

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

SNMP に対して利用可能な MIB のうち、最も有用なものは `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25) です。 この MIB のいくつかの重要なオブジェクトについては、以下の表を参照してください:

| 名前                         | OID                      | 説明                                       |
| -------------------------- | ------------------------ | ---------------------------------------- |
| hrSystemDate.2             | 1.3.6.1.2.1.25.1.2       | ホストから見たローカルの日付と時間。                       |
| hrSystemUptime.0           | 1.3.6.1.2.1.25.1.1.0     | 前回ホストが起動してからの時間。                         |
| hrMemorySize.0             | 1.3.6.1.2.1.25.2.2.0     | ホストが持っているRAMの容量。                         |
| hrSystemProcesses.0        | 1.3.6.1.2.1.25.1.6.0     | 現在、ホストでロードされている、または作動しているプロセスのコンテキストの数。  |
| hrStorageUsed.1            | 1.3.6.1.2.1.25.2.3.1.6.1 | hrStorageAllocationUnits のホストの使用ストレージ領域。 |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | hrStorageAllocationUnit のバイトでのサイズ        |

たとえば、SNMP v3 で `hrMemorySize` を照会するには、ネットワークで SNMP をサポートしている別のワークステーションで次のコマンドを実行します:
```shell
# username はあなたの SNMP v3 ユーザの一意のユーザ名
# auth password は認証パスワード
# privacy password はプライバシーパスワード
# hostname はあなたの Enterprise インスタンスの IP またはドメイン
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

SNMP v2c で `hrMemorySize` を照会するには、ネットワークで SNMP をサポートしている別のワークステーションで次のコマンドを実行します:
```shell
# community-string はあなたのコミュニティ文字列
# hostname はあなたの Enterprise インスタンスの IP またはドメイン
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**注釈:** アプライアンスで実行中のサービスに関する情報の漏洩を防ぐために、SNMP v3 でセキュリティレベル `authPriv` を使用していない限り、結果の SNMP レポートから `hrSWRun` の表 (1.3.6.1.2.1.25.4) は除外されます。 セキュリティレベル `authPriv` を使用している場合は、`hrSWRun` の表が掲載されます。

{% endtip %}

SNMP での一般的なシステム属性に対する OID マッピングの詳しい情報については、「[CPU、メモリ、ディスクの統計情報に対する Linux SNMP OID](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)」を参照してください。
