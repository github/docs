---
title: Codespaces の支払いについて
intro: '{% data variables.product.prodname_codespaces %} が一般提供されると、ストレージとコンピューティングの使用量に対して課金されます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.about-billing-for-codespaces %}

計算コストは、Codespaces がアクティブな場合にのみ発生します。 Codespaces を使用している場合、Codespaces はアクティブになっています。 30 分間操作がない場合、Codespaces は自動的に中断されます。

コンピューティングの使用量は、Codespaces のインスタンスタイプに応じたレートで、1 時間あたりで課金されます。 ベータ期間中、{% data variables.product.prodname_codespaces %} は単一の Linux インスタンスタイプを提供します。 一般提供時には、3 つの Linux インスタンスタイプをサポートします。

| インスタンスタイプ (Linux)                  | 1 時間あたりのレート |
| ---------------------------------- | ----------- |
| Basic (2 コア、4GB RAM、32 GB SSD)     | $0.085      |
| Standard (4 コア、8 GB RAM、32 GB SSD) | $0.169      |
| Premium (8 コア、16 GB RAM、32 GB SSD) | $0.339      |

コンピューティングの価格は、将来サポートされる追加のインスタンスタイプとオペレーティングシステムによって異なる場合があります。

各 Codespaces には、Codespaces を削除するまで毎月のストレージコストも発生します。 すべてのインスタンスタイプのストレージコストは、月額 $0.10/GB です。

各プランに含まれるコンピューティングとストレージの使用状況に関する詳細情報は、一般提供時に共有されます。
