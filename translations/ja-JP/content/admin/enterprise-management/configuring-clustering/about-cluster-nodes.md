---
title: クラスタノードについて
intro: '*ノード*は、クラスタ内で動作する {% data variables.product.prodname_ghe_server %} インスタンスです。 ぞれぞれのノードは、クラスターに提供される (最終的にはユーザーに提供される) 一連のサービスを実行します。'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

## 推奨する最小のハードウェア構成
各ノードには、ルートボリュームに加えてデータボリュームが別途必要です。 以下に最小の推奨構成を示します。 ユーザのアクティビティや他の製品との結合といった利用方法によっては、さらに多くのリソースが必要になることがあります。

|                                              サービス                                              | 最小のメモリ | 最小のデータボリュームの空き領域 |
|:----------------------------------------------------------------------------------------------:|:------:|:----------------:|
|               `job-server`,<br/>`memcache-server`,<br/>`web-server`                | 14 GB  |       1 GB       |
|              `consul-server`,<br/>`mysql-server`,<br/>`redis-server`               | 14 GB  |      10 GB       |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 GB  |      10 GB       |
|                                     `elasticsearch-server`                                     | 14 GB  |      10 GB       |

## クラスタリングに必要なサービス
適切な冗長性を持たせるために、各サービスの運用には少なくとも以下のノードを使ってください。

{% tip %}

**ノート：**組織がどの程度のスケーラビリティを必要とするかは、リポジトリ数、ユーザー数、全体的な利用度を含む多くの要素に依存します。

{% endtip %}

|                                             サービス                                              | 必要な最小ノード数 |
|:---------------------------------------------------------------------------------------------:|:---------:|
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` |     2     |
|                           `mysql-server`,<br/>`redis-server`                            |     2     |
|                                        `consul-server`                                        |     3     |
|              `git-server`,<br/>`pages-server`,<br/>`storage-server`               |     3     |
|                                    `elasticsearch-server`                                     |     3     |

## クラスタ設計に関する推奨

{% data variables.product.prodname_ghe_server %} を構成するサービス群は、クラスタリングによってそれぞれ個別にスケールアウトできるようになります。 この柔軟性は、様々なスケーラビリティに対する要求を有する組織に適したクラスタの設計と実装に利用できます。 たとえば、組織によっては、大規模あるいは頻繁なフェッチのためにストレージのスループットに対する要求は高いものの、Webサーバーの利用は比較的少ないことがあるでしょう。 別の組織では、少ないストレージリソースで良好なパフォーマンスが出せるものの、`pages-server`あるいは`elasticsearch-server`の動作には多くのノードが必要になるかもしれません。 多くの様々な組み合わせが可能です。 お客様の固有の要求に最も適したクラスタの構成を決めるため、顧客担当と共同で作業してください。

- 冗長なノードは、独立したハードウェアに分散させてください。 CPU、メモリ、ストレージデバイスを共用するなら、パフォーマンスの低下が生じ、単一障害点を作ることになります。 ネットワーキングのコンポーネントを共用することも、スループットの低下と障害発生時に接続が失われるリスクの増大を招くことがあります。
- 高速なストレージを使ってください。 ストレージエリアネットワーク（SAN）は、しばしば絶対的なスループットではなく、最大限の領域の利用、可用性、耐障害性に最適化されます。 {% data variables.product.prodname_ghe_server %} クラスタリングは冗長性と可用性を提供し、利用可能な最速のストレージ上で最高のパフォーマンスを発揮します。 ローカルのSSDストレージをおすすめします。
- Organization にとって意味のあるノードの層を確立します。 設定例:
  - 2つのノードと以下のサービスを持つフロントエンド層：
    - `web-server`
    - `jobs-server`
    - `memcache-server`
  - 3つのノードと以下のサービスを持つデータベース層：
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - 3つのノードと以下のサービスを持つ検索層：
    - `elasticsearch-server`
  - 3つのノードと以下のサービスを持つストレージ層：
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

### クラスタの図の例
{% note %}

**注意：これは例に過ぎません。**組織にとって最適なクラスタの設計は、組織に特有の要求に依存します。 専任の担当者または {% data variables.contact.contact_enterprise_sales %} にご相談ください。最適なクラスタ設定を決めるためのお手伝いをいたします。

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="クラスタの例" style="width: 800px;border:0" />
