---
title: クラスタリングと High Availability (HA) の違い
intro: '{% data variables.product.prodname_ghe_server %} High Availability (HA) は冗長性を提供するプライマリ／セカンダリフェイルオーバー構成ですが、クラスタリングは読み書きの負荷を複数のノードに分散させることによって冗長性とスケーラビリティを提供します。'
redirect_from:
  - /enterprise/admin/clustering/differences-between-clustering-and-high-availability-ha
  - /enterprise/admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
versions:
  ghes: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Choosing cluster or HA
ms.openlocfilehash: 3a15defe4327b1aeed4f0db22586c75b233b5908
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332489'
---
## フェイルオーバーのシナリオ

High Availability (HA) とクラスタリングはどちらも、障害の原因となる単一ノードを排除することによって冗長性を提供します。 可用性は次のシナリオで提供できます:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

## スケーラビリティ

{% data reusables.enterprise_clustering.clustering-scalability %}HAでは、アプライアンスのスケールはプライマリノードにのみ依存し、負荷がレプリカサーバーに分配されることはありません。

## フェイルオーバーの方法と構成における相違点

| 機能     | フェイルオーバーの構成     | フェールオーバー方式 |
| :------------- | :------------- | :--- |
| High Availability構成       | プライマリアプライアンスもしくはロードバランサを指す短いTTLのDNSレコード。 | DNSフェイルオーバー及びロードバランサ構成のどちらでも、レプリカアプライアンスを手作業で昇格させなければならない。 |
| クラスタリング | DNSレコードはロードバランサを指さなければならない。 | ロードバランサの背後にあるノードが落ちた場合、トラフィックは動作している他のノードに自動的に送られる。 |

## バックアップとディザスター リカバリー

HA もクラスタリングも、定期的なバックアップに代わるものと考えるべきではありません。 詳細については、「[アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)」を参照してください。

## 監視

可用性の機能、特にクラスタリングのように自動フェイルオーバーを持つものは、通常は何かが失敗してもサービスが破綻しないので、障害を覆い隠すことができます。 HAもしくはクラスタリングを利用する場合、障害が起きたことに気づけるよう、各インスタンスの健全性をモニタリングすることが重要です。 監視の詳細については、「[アラートの推奨しきい値](/enterprise/admin/guides/installation/recommended-alert-thresholds/)」と「[クラスター ノードの監視](/enterprise/{{ currentVersion}}/admin/guides/clustering/monitoring-cluster-nodes/)」を参照してください。

## 参考資料
- {% data variables.product.prodname_ghe_server %} クラスタリングの詳細については、「[クラスタリングについて](/enterprise/{{ currentVersion}}/admin/guides/clustering/about-clustering/)」を参照してください。
- HA の詳細については、[高可用性のための {% data variables.product.prodname_ghe_server %} の構成](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)に関するページを参照してください。
