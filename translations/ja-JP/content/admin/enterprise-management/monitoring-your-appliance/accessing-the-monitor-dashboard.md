---
title: モニターダッシュボードへのアクセス
intro: '{% data variables.product.prodname_ghe_server %} には、CPU やストレージの使用状況、アプリケーションや認証の応答時間、一般的なシステム健全性など、{% data variables.product.prodname_ghe_server %} アプライアンスに関する履歴データを表示する Web ベースのモニタリングダッシュボードが搭載されています。'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: b529369813635a8cafe5f7c7ac6fc04af39001f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332369'
---
## モニターダッシュボードへのアクセス

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. ページの上部にある **[モニター]** をクリックします。
![モニター ダッシュボードのリンク](/assets/images/enterprise/management-console/monitor-dash-link.png)

## アプライアンスにおける一般的なリソース割り当ての問題のトラブルシューティング

{% note %}

**注**: 継続的インテグレーション (CI) またはビルド サーバーで定期的に {% data variables.product.product_location %} をポーリングすると、実質的にサービス拒否攻撃となって問題が生じることがあるため、更新のプッシュには Webhook の使用をお勧めします。 詳細については、「[Webhook について](/enterprise/user/articles/about-webhooks/)」を参照してください。

{% endnote %}

モニターダッシュボードを使ってアプライアンスリソースの健全性を把握し、高利用率の問題の解決方法を判断してください。  

| 問題 | 考えられる原因 | 推奨事項 |
| -------- | ----------------- | --------------- |
| CPU 使用率が高い | 同一ホスト上で動作する他のサービスやプログラムとのVM競合 | 可能であれば、CPU消費を下げるように他のサービスやプログラムを再設定する。 VM の CPU リソースの合計を増やすには、「[CPU またはメモリ リソースの増加](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)」を参照してください。 |
| メモリ使用量が多い | 同一ホスト上で動作する他のサービスやプログラムとのVM競合 | 可能であれば、メモリ消費を下げるように他のサービスやプログラムを再設定する。 VM で使用可能なメモリの合計を増やすには、「[CPU またはメモリ リソースの増加](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)」を参照してください。 |
| ディスクの空き容量の低下 | 大きなバイナリあるいはログファイルによるディスク領域の消費 | 可能であれば大きなバイナリは個別のサーバー上に置き、ログファイルは圧縮もしくはアーカイブする。 必要に応じて、「[ストレージ容量の増加](/enterprise/admin/guides/installation/increasing-storage-capacity/)」のプラットフォームの手順に従って、VM のディスク領域を増やします。 |
| 通常よりも長いレスポンスタイム | 多くの場合上記のいずれかの問題によって生ずる | 原因となっている問題を特定して修復してください。 それでもレスポンスタイムが長い場合は、{% data variables.contact.contact_ent_support %} に連絡してください。 |
| エラーレートの増大 | ソフトウェアの問題  | {% data variables.contact.contact_ent_support %}に連絡し、Support Bundleを含めてください。 詳細については、「[{% data variables.product.prodname_enterprise %} サポートへのデータの提供](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)」を参照してください。 |
