---
title: 時間の同期を構成する
intro: '{% data variables.product.prodname_ghe_server %} は、NTP サーバーに接続することによって自動的に時刻を同期させます。 時刻の同期に使われるNTPサーバは設定できます。あるいはデフォルトのNTPサーバを利用することもできます。'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112837'
---
## デフォルトのNTPサーバの変更

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 左サイドバーで、 **[時間]** をクリックします
    ![{% data variables.enterprise.management_console %} サイドバーの [時間] ボタン](/assets/images/enterprise/management-console/sidebar-time.png)
3. "Primary NTP server（プライマリのNTPサーバ）"の下で、プライマリNTPサーバのホスト名を入力してください。 "Secondary NTP server（セカンダリのNTPサーバ）"の下で、セカンダリのNTPサーバのホスト名を入力してください。
    ![{% data variables.enterprise.management_console %} のプライマリとセカンダリの NTP サーバーのためのフィールド](/assets/images/enterprise/management-console/ntp-servers.png)
4. ページの下部にある **[設定の保存]** をクリックします。
    ![{% data variables.enterprise.management_console %} の [設定の保存] ボタン](/assets/images/enterprise/management-console/save-settings.png)
5. 設定の実行が完了するのを待ってください。

## 大きな時間の乱れの修正

NTP プロトコルは小さな時間同期の不一致を継続的に修正します。 管理シェルを使用すれば、時間を直ちに同期させることができます。

{% note %}

**注:**
 - 協定世界時 (UTC) ゾーンは変更できません。
 - ハイパーバイザーが仮想マシンの時刻を設定しようとするのを回避しなければなりません。 詳しい情報については、仮想化プロバイダが提供しているドキュメンテーションを参照してください。

{% endnote %}

- `chronyc` コマンドを使用して、サーバーを設定済みの NTP サーバーと同期させます。 次に例を示します。

```shell
$ sudo chronyc -a makestep
```
