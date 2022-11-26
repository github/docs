---
title: Visualización del historial de implementación
intro: Ver los despliegues actuales y previos de tu repositorio.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093143'
---
Puedes entregar despliegues mediante las {% data variables.product.prodname_actions %} y los ambientes o con la API de REST y las apps de terceros. {% ifversion fpt or ghae ghes > 3.0 or ghec %} Para obtener más información acerca del uso de entornos para implementar con {% data variables.product.prodname_actions %}, vea "[Uso de entornos para la implementación](/actions/deployment/using-environments-for-deployment)". {% endif %}Para obtener más información acerca de las implementaciones con la API REST, vea "[Repositorios](/rest/reference/repos#deployments)".

Para ver las implementaciones actuales y anteriores, haga clic en **Environments** (Entornos) en la página principal del repositorio.
{% ifversion ghae %} ![Environments](/assets/images/enterprise/2.22/environments-sidebar.png) (Entornos){% else %} ![Environments](/assets/images/environments-sidebar.png) (Entornos){% endif %}

La página de despliegues muestra el último despliegue activo de cada ambiente para tu repositorio. Si la implementación incluye una URL de entorno, se mostrará un botón **View deployment** (Ver implementación) que se vincula a la URL junto a esta implementación.

La bitácora de actividad muestra el historial de despliegues para tus ambientes. De manera predeterminada, solo la implementación más reciente de un entorno tiene un estado `Active`; todas las implementaciones activas anteriormente tienen un estado `Inactive`. Para obtener más información acerca de la inactivación automática de las implementaciones, vea "[Implementaciones inactivas](/rest/reference/deployments#inactive-deployments)".

También puedes utilizar la API de REST para obtener información sobre los despliegues. Para obtener más información, vea "[Repositorios](/rest/reference/repos#deployments)".
