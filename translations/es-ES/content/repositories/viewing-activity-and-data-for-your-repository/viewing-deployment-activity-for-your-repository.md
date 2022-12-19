---
title: Ver la actividad de implementación de tu repositorio
intro: Puedes ver la información acerca de las implementaciones de tu repositorio completo o de una solicitud de extracción específica.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136609'
---
{% note %}

**Nota:** El panel de implementaciones se encuentra actualmente en versión beta y está sujeto a cambios.

{% endnote %}

Los usuarios con acceso de lectura a un repositorio pueden ver un resumen de todas las implementaciones actuales y un registro de la actividad de implementación anterior, si el flujo de trabajo de implementación del repositorio está integrado con {% data variables.product.product_name %} mediante Deployments API una aplicación de [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). Para más información, vea "[Implementaciones](/rest/reference/repos#deployments)".

También puedes ver información de implementación en la pestaña "Conversation" (Conversación) de una solicitud de extracción.

## Ver el tablero de implementaciones

{% data reusables.repositories.navigate-to-repo %}
2. A la derecha de la lista de archivos, haga clic en **Entornos**.
![Entornos a la derecha de la página del repositorio](/assets/images/help/repository/environments.png)

## Información adicional
 - "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
