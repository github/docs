---
title: Organization の pre-receive フック
intro: 組織 pre-receive フック API を使用すると、組織に使用できる pre-receive フックの適用を表示および変更できます。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063963'
---
### オブジェクトの属性

| 名前                             | 型      | 説明                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | フックの名前。                                     |
| `enforcement`                    | `string`  | このリポジトリでのフックの適用状態。 |
| `allow_downstream_configuration` | `boolean` | リポジトリが適用をオーバーライドできるかどうか。            |
| `configuration_url`              | `string`  | 適用設定されているエンドポイントの URL。            |

*適用* に使用できる値は `enabled`、`disabled`と`testing`です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

`configuration_url` は、このエンドポイントまたはこのフックのグローバル構成へのリンクです。 サイトアドミンのみがグローバル設定にアクセスできます。
