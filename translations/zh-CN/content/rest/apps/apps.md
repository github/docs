---
title: GitHub 应用
allowTitleToDifferFromFilename: true
intro: '使用 {% data variables.product.prodname_github_apps %} API 可以检索有关 {% data variables.product.prodname_github_apps %} 的信息。'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '146769187'
---
## 关于 {% data variables.product.prodname_github_apps %} API

{% data reusables.apps.general-apps-restrictions %}

本页列出了验证为 GitHub 应用程序后可访问的端点。 有关详细信息，请参阅“[验证为 GitHub 应用](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”。

验证为 GitHub 应用程序后，GitHub 应用程序 API 使您能够获取有关 GitHub 应用程序的高层次信息以及有关应用程序安装的特定信息。

验证为 GitHub 应用后，你可以访问 REST API 终结点。 这些终结点包含指示“使用 GitHub 应用”的文本。 验证为用户后也可以访问这些端点。

某些 REST API 终结点需要验证为 GitHub 应用安装设施。 有关这些终结点的列表，请参阅“[安装](/rest/reference/apps#installations)”。
