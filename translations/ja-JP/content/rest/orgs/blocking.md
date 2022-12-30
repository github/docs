---
title: ユーザのブロック
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 1649cc0627ed55be5317e0606bb29287dbd3d94a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065787'
---
Organization でブロックを呼び出すには、呼び出しの認証に使用するトークンに `admin:org` 範囲が必要です。 それがない場合、応答で `HTTP 404` が返されます。
