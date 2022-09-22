---
title: Ejecutores autohospedados
intro: 'La API de ejecutores autohospedados te permite registrar, ver, y borrar estos ejecutores.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064383'
---
## Acerca de la API de ejecutores autohospedados

La API de ejecutores autohospedados te permite registrar, ver, y borrar estos ejecutores. {% data reusables.actions.about-self-hosted-runners %} Para más información, consulta "[Hospedaje de tus propios ejecutores](/actions/hosting-your-own-runners)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} debe tener el permiso `administration` para los repositorios o el permiso `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben tener acceso administrativo a los repositorios u organizaciones, o bien el ámbito `manage_runners:enterprise` para empresas a fin de utilizar esta API.
