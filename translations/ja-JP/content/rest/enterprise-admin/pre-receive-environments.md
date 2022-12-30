---
title: Pre-receive 環境
intro: pre-receive 環境 API を使用すると、pre-receive フックの環境を作成、一覧表示、更新、および削除できます。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883263'
---
*[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。* 通常のユーザーは、アクセスしようとすると `404` 応答を受け取ります。

### オブジェクトの属性

#### pre-receive 環境

| 名前                  | 型      | 説明                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | UI に表示される環境の名前。                        |
| `image_url`           | `string`  | ダウンロードおよび抽出される tarball への URL。                  |
| `default_environment` | `boolean` | これが {% data variables.product.product_name %} に同梱されるデフォルト環境かどうか。 |
| `download`            | `object`  | この環境のダウンロードステータス。                                        |
| `hooks_count`         | `integer` | この環境を使用する pre-receive フックの数。                 |

#### pre-receive 環境のダウンロード

| 名前            | Type     | 説明                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | 最新のダウンロードの状態。                  |
| `downloaded_at` | `string` | 最新のダウンロードの開始時刻。         |
| `message`       | `string` | 失敗時に、エラーメッセージが生成されます。 |

`state` で有効な値は、`not_started`、`in_progress`、`success`、`failed` です。
