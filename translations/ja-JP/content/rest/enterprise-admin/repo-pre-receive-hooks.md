---
title: リポジトリ Pre-receive フック
intro: Repository Pre-receive Hooks API を使うと、リポジトリで使用可能な pre-receive フックの適用を表示および変更できます。
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065163'
---
### オブジェクトの属性

| 名前                | 型     | 説明                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | フックの名前。                                     |
| `enforcement`       | `string` | このリポジトリでのフックの適用状態。 |
| `configuration_url` | `string` | 適用設定されているエンドポイントの URL。            |

*適用* に使用できる値は `enabled`、`disabled`と`testing`です。 `disabled` は、pre-receive フックが実行されないことを示します。 `enabled` は、それが実行され、ゼロ以外の状態になるプッシュを拒否することを示します。 `testing` は、スクリプトは実行されるが、プッシュが拒否されないことを示します。

`configuration_url` は、このリポジトリ、その Organization の所有者、またはグローバル設定へのリンクである場合があります。 `configuration_url` のエンドポイントにアクセスする権限は、所有者またはサイト管理者レベルで決定されます。
