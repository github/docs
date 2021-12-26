---
title: 時間の同期の設定
intro: '{% data variables.product.prodname_ghe_server %} は、NTP サーバーに接続することによって自動的に時刻を同期させます。 時刻の同期に使われるNTPサーバは設定できます。あるいはデフォルトのNTPサーバを利用することもできます。'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock/
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings/
  - /enterprise/admin/articles/setting-ntp-servers/
  - /enterprise/admin/categories/time/
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

### デフォルトのNTPサーバの変更

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. 左のサイドバーで**Time（時間）**をクリックしてください。 ![{% data variables.enterprise.management_console %} サイドバーでの [Time] ボタン](/assets/images/enterprise/management-console/sidebar-time.png)
3. "Primary NTP server（プライマリのNTPサーバ）"の下で、プライマリNTPサーバのホスト名を入力してください。 "Secondary NTP server（セカンダリのNTPサーバ）"の下で、セカンダリのNTPサーバのホスト名を入力してください。 ![{% data variables.enterprise.management_console %} でのプライマリとセカンダリの NTP サーバーのためのフィールド](/assets/images/enterprise/management-console/ntp-servers.png)
4. ページの下部で **Save settings（設定の保存）**をクリックしてください。 ![{% data variables.enterprise.management_console %} での [Save settings] ボタン](/assets/images/enterprise/management-console/save-settings.png)
5. 設定が完了するのを待ってください。

### 大きな時間の乱れの修正

NTP プロトコルは小さな時間同期の不一致を継続的に修正します。 管理シェルを使用すれば、時間を直ちに同期させることができます。

{% note %}

**ノート:**
 - 協定世界時 (UTC) ゾーンは変更できません。
 - ハイパーバイザーが仮想マシンの時刻を設定しようとするのを回避しなければなりません。 詳しい情報については、仮想化プロバイダが提供しているドキュメンテーションを参照してください。

{% endnote %}

- `chronyc` コマンドを使用して、サーバーを設定済みの NTP サーバーと同期させます。 例:

```shell
$ sudo chronyc -a makestep
```
