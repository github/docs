---
title: 用户
intro: '用户管理 API 允许您暂停{% ifversion ghes %}、取消暂停、升级和降级{% endif %}{% ifversion ghae %} 以及取消暂停{% endif %} 企业上的用户。'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a483065af09a2baef774cb8ce256350945106faa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063168'
---
它仅适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)网站管理员。 如果普通用户尝试访问它，他们将收到 `403` 响应。
