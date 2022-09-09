---
title: GPG 密钥
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099656'
---
## 关于用户 GPG 密钥 API

在 `public_key` 响应字段中返回的数据不是 GPG 格式的密钥。 当用户上传 GPG 密钥时，将对密钥进行剖析，然后提取并存储加密公钥。 此加密密钥是本页面上的 API 所返回的密钥。 此密钥不适合直接用于 GPG 等程序。

{% data reusables.user-settings.user-api %}
