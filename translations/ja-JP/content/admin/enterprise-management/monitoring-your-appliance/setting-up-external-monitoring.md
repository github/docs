---
title: 外部モニタリングのセットアップ
intro: 'SNMP または collectd のいずれかの統計収集プロトコルを使用すれば、{% data variables.product.prodname_ghe_server %} アプライアンスで基本的なシステムリソースを監視できます。'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Set up external monitoring
ms.openlocfilehash: 43fa6a7b0d6d4686a69460f23f38126ec5457613
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332473'
---
## SNMPについて

Simple Network Management Protocol (SNMP) は、ネットワークデバイスやサーバのモニタリングの方法として広くサポートされています。 SNMPはデフォルトでは無効化されていますが、{% data variables.product.prodname_enterprise %}モニタリングダッシュボードを通じて設定できます。 UDPポート161は、オープンでネットワーク管理ステーションから到達可能でなければなりません。 詳細については、[SNMP 使用の監視](/enterprise/admin/guides/installation/monitoring-using-snmp/)に関する記事を参照してください。

## collectdについて

collectdはオープンソースの統計収集及びレポーティングデーモンで、RRDファイルの書き込みサポートが組み込まれています。 CPUの利用状況、メモリ及びディスクの消費、ネットワークインターフェースのトラフィックとエラー、システムの負荷に関する統計を外部のcollectdサーバに転送でき、そこで利用可能な幅広いツールやプラグインを使ってグラフ、分析、アラートを設定できます。 `collectd` 転送を構成するには、[collectd の構成](/enterprise/admin/guides/installation/configuring-collectd/)に関するページを参照してください。

加えて、下位層の仮想化プラットフォームに組み込まれているモニタリングツールも、システムリソースの基本的なモニタリングとアラートに利用できます。 詳細については、[Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) および [VMware vSphere Monitoring](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf) ドキュメントを参照してください。
