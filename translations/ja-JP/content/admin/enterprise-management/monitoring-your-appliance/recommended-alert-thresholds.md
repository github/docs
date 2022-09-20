---
title: アラートの推奨閾値
intro: '{% data variables.product.prodname_ghe_server %} アプライアンスのパフォーマンスに影響を与える前に、システムリソースの問題を通知するようにアラートを設定できます。'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
ms.openlocfilehash: 73adc62a8a322666e08da01a76568c16ed18458c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112734'
---
## ストレージのモニタリング

ルート及びユーザストレージデバイスの両方をモニタリングし、利用可能なディスク領域が少なくなったときに十分な対応時間が持てるような値でアラートを設定することをおすすめします。

| 重大度 | しきい値 |
| -------- | --------- |
| **警告** | ディスクの使用量が総容量の70%を超えた |
| **重大** | ディスクの使用量が総容量の85%を超えた |

これらの値は、割り当てられたストレージの総量、過去の増大パターン、対応が求められる時間に基づいて調整できます。 ストレージリソースは、増加を許容し、追加ストレージの割り当てに必要なダウンタイムを回避するために、多めに割り当てておくことをおすすめします。

## CPUとロードアベレージのモニタリング

リソース集約的なGitの操作によってCPUの利用状況が変動するのは通常のことですが、異常に高いCPU利用状況にはアラートを設定することをおすすめします。これは、長引くスパイクはインスタンスのプロビジョニングが不足しているということかもしれないためです。 15分間のシステムロードアベレージが、仮想マシンに割り当てられたCPUコア数に近いかそれを超える値になっていないかをモニタリングすることをおすすめします。

| 重大度 | しきい値 |
| -------- | --------- |
| **警告** | 15分間のロードアベレージが1x CPUコアを超える |
| **重大** | 15分間のロードアベレージが2x CPUコアを超える |

また、仮想化の"steal"時間をモニタリングして、同一ホスト上で動作している他の仮想マシンがインスタンスのリソースをすべて使ってしまっていることがないことを確認するようおすすめします。

## メモリ使用率の監視

{% data variables.product.product_location %}に割り当てられている物理メモリの量は、全体的なパフォーマンスとアプリケーションの応答性に大きな影響を与える可能性があります。 システムは、Gitの処理を高速化するためにカーネルのディスクキャッシュを頻繁に利用するよう設計されています。 ピークの利用状況で、通常のRSSワーキングセットがRAMの総容量の50%以内に収まるようにすることをおすすめします。

| 重大度 | しきい値 |
| -------- | --------- |
| **警告**  | 持続的にRSSの利用状況が利用可能なメモリ総量の50%を超える |
| **重大** | 持続的にRSSの利用状況が利用可能なメモリ総量の70%を超える |

メモリが使い切られると、カーネルOOMキラーはRAMを大量に使っているアプリケーションプロセスを強制的にkillしてメモリリソースを解放しようとします。これは、サービスの中断につながることがあります。 通常の処理の状況で必要になる以上のメモリを仮想マシンに割り当てることをおすすめします。
