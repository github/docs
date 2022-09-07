---
title: Aplicaciones de GitHub
allowTitleToDifferFromFilename: true
intro: 'La API de {% data variables.product.prodname_github_apps %} le permite recuperar información sobre {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146769193'
---
## Acerca de las API de {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

Esta página lista las terminales a las que puedes acceder mientras te autenticas como una GitHub App. Vea "[Autenticación como una aplicación de GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para más información.

Cuando estás autenticado como una GitHub App, la API de GitHub Apps te habilita para obtener información de alto nivel sobre una GitHub App así como para obtener información específica sobre las instalaciones de éstas.

Puedes acceder a los puntos de conexión de API REST mientras estés autenticado como aplicación de GitHub. Estos puntos de conexión tienen texto que indica "Funciona con aplicaciones de GitHub". También puedes acceder a estas terminales mientras estás autenticado como un usuario.

Un subconjunto de puntos de conexión de API REST requiere que te autentiques como instalación de una aplicación de GitHub. Vea [Instalaciones](/rest/reference/apps#installations) para obtener una lista de estos puntos de conexión.
