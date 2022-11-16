---
title: Приложения GitHub
allowTitleToDifferFromFilename: true
intro: 'API {% data variables.product.prodname_github_apps %} позволяет получать сведения о {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '146769192'
---
## Сведения об API {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

На этой странице перечислены конечные точки, к которым можно получить доступ, если пройти проверку подлинности в качестве приложения GitHub. Дополнительные сведения см. в разделе [Проверка подлинности в качестве приложения GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app).

При проверке подлинности в качестве приложения GitHub API приложений GitHub позволяет получить общие сведения о приложении GitHub, а также конкретные сведения об установках приложения.

Доступ к конечным точкам REST API можно получить при проверке подлинности в качестве приложения GitHub. Эти конечные точки содержат текст "Работает с приложениями GitHub". Доступ к этим конечным точкам можно также получить, есть пройти проверку подлинности в качестве пользователя.

Подмножество конечных точек REST API требует проверки подлинности в качестве установки приложения GitHub. Список этих конечных точек см. в разделе [Установки](/rest/reference/apps#installations).
