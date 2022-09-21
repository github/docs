---
title: Permisos de Acciones de GitHub
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'Permissions API de {% data variables.product.prodname_actions %} permite establecer permisos para qué empresas, organizaciones y repositorios pueden ejecutar {% data variables.product.prodname_actions %}, y qué acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} se pueden ejecutar.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060678'
---
## Acerca de Permissions API

Permissions API de {% data variables.product.prodname_actions %} permite establecer permisos para qué empresas, organizaciones y repositorios pueden ejecutar {% data variables.product.prodname_actions %}, y qué acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} se pueden ejecutar.{% ifversion fpt or ghec or ghes %} Para más información, consulta "[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)".{% endif %}
