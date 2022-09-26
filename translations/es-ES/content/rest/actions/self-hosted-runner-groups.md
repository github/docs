---
title: Grupos de ejecutores auto-hospedados
intro: La API de Grupos de Ejecutores Auto-Hospedados te permite administrar grupos para los ejecutores auto-hospedados.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064374'
---
## Acerca de Self-hosted runner groups API

Self-hosted runners groups API te permite administrar grupos para los ejecutores autohospedados. Para más información, vea "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} debe tener el permiso `administration` para los repositorios o el permiso `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben tener acceso administrativo a los repositorios u organizaciones, o bien el ámbito `manage_runners:enterprise` para empresas a fin de utilizar esta API.
