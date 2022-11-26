---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060224"
---
此 API 上的许多资源提供了快捷方式，可用于获取有关当前经过身份验证的用户的信息。 如果请求 URL 不含 `{username}` 参数，则响应将是登录用户的响应（必须随请求传递[身份验证信息](/rest/overview/resources-in-the-rest-api#authentication)）。{% ifversion fpt or ghes or ghec %} 在通过基本身份验证或作用域为 `user` 的 OAuth 进行身份验证时，将包含其他专用信息，例如用户是否启用双因素身份验证。{% endif %}
