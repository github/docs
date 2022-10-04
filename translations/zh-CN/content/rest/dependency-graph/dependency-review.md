---
title: 依赖项检查
intro: 通过依赖项审查 API，可在将依赖项更改添加到环境之前，了解这些更改以及它们的安全影响。
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: '>= 3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 64cb77b737927e8d44315fd40b51f68c77c50c54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064872'
---
## 关于依赖项审查 API

{% data reusables.dependency-review.dependency-review-api-beta-note %}

通过依赖项审查 API，你可以在将这些更改添加到环境之前了解依赖项更改以及这些更改的安全影响。 可以查看存储库的两次提交之间的依赖项差异，包括具有已知漏洞的任何版本更新的漏洞数据。 有关依赖项审查的详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。
