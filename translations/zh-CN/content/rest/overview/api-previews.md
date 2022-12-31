---
title: API 预览
intro: 您可以使用 API 预览来试用新功能并在这些功能正式发布之前提供反馈。
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108762'
---
API 预览允许您试用新的 API 以及对现有 API 方法的更改（在它们被纳入正式的 GitHub API 之前）。

在预览期间，我们可以根据开发者的反馈更改某些功能。 如果我们确实进行了更改，我们将在[开发者博客](https://developer.github.com/changes/)上公布这些更改，而不会事先通知。

要访问 API 预览，需要在请求的 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)。 每个预览的功能文档可指定要提供的自定义媒体类型。

{% ifversion ghes < 3.4 %}
## 内容附件

现在，您可以在 GitHub 中使用 {% data variables.product.prodname_unfurls %} API 提供有关链接到注册域的 URL 的更多信息。 有关详细信息，请参阅“[使用内容附件](/apps/using-content-attachments/)”。

自定义媒体类型：`corsair-preview`
公布日期：[2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


