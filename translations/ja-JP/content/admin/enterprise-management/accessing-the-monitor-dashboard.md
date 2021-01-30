---
title: モニターダッシュボードへのアクセス
intro: '{% data variables.product.prodname_ghe_server %} には、CPU やストレージの使用状況、アプリケーションや認証の応答時間、一般的なシステム健全性など、{% data variables.product.prodname_ghe_server %} アプライアンスに関する履歴データを表示する Web ベースのモニタリングダッシュボードが搭載されています。'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  enterprise-server: '*'
---

### モニターダッシュボードへのアクセス

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. ページの上部で**Monitor（モニター）**をクリックしてください。 ![モニターダッシュボードのリンク](/assets/images/enterprise/management-console/monitor-dash-link.png)

### アプライアンスにおける一般的なリソース割り当ての問題のトラブルシューティング

{% note %}

**注意**: 継続的インテグレーション（CI）あるいはビルドサーバで定期的に{% data variables.product.product_location %}をポーリングすると、実質的にサービス拒否攻撃となって問題が生ずることがあるので、更新のプッシュにはwebhookの利用をお勧めします。 詳しい情報については"[webhookについて](/enterprise/{{ currentVersion }}/user/articles/about-webhooks/)"を参照してください。

{% endnote %}

モニターダッシュボードを使ってアプライアンスリソースの健全性を把握し、高利用率の問題の解決方法を判断してください。

| 問題              | 考えられる原因                       | 推奨される対応                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 高いCPU消費         | 同一ホスト上で動作する他のサービスやプログラムとのVM競合 | 可能であれば、CPU消費を下げるように他のサービスやプログラムを再設定する。 VMの総CPUリソースを増加させる方法については"[CPUあるいはメモリリソースの増加](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)"を参照してください。                                                                                                            |
| 高いメモリ消費         | 同一ホスト上で動作する他のサービスやプログラムとのVM競合 | 可能であれば、メモリ消費を下げるように他のサービスやプログラムを再設定する。 VMで利用できるの総メモリ量を増加させる方法については"[CPUあるいはメモリリソースの増加](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-cpu-or-memory-resources/)"を参照してください。                                                                                                         |
| ディスクの空き容量の低下    | 大きなバイナリあるいはログファイルによるディスク領域の消費 | 可能であれば大きなバイナリは個別のサーバー上に置き、ログファイルは圧縮もしくはアーカイブする。 必要であれば、使用しているプラットフォームで"[ストレージ容量の増加](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity/)"のステップを踏み、VM上のディスク領域を増やしてください。                                                                                                |
| 通常よりも長いレスポンスタイム | 多くの場合上記のいずれかの問題によって生ずる        | 原因となっている問題を特定して修復してください。 それでもレスポンスタイムが長い場合は、{% data variables.contact.contact_ent_support %} に連絡してください。                                                                                                                                                                                                 |
| エラーレートの増大       | ソフトウェアの問題                     | {% data variables.contact.contact_ent_support %}に連絡し、Support Bundleを含めてください。 詳細は「[{% data variables.product.prodname_enterprise %} Support にデータを提供する](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)」を参照してください。 |
