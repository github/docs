---
title: GPG キー
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879175'
---
## ユーザーの GPG キー API について

`public_key` 応答フィールドで返されるデータは、GPG 形式のキーではありません。 ユーザが GPG キーをアップロードすると、そのキーは解析され、暗号化された公開鍵が抽出、保存されます。 この暗号鍵が、このページの API によって返されるものです。 この鍵は、GPG のようなプログラムで直接使用するには適していません。

{% data reusables.user-settings.user-api %}
