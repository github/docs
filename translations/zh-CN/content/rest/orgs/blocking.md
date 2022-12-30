---
title: 阻止用户
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065783'
---
用于对调用进行身份验证的令牌必须具有 `admin:org` 范围才可对组织进行任何阻止调用。 否则，响应将返回 `HTTP 404`。
