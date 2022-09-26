---
title: Secretos de Acciones de GitHub
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: '{% data variables.product.prodname_actions %} Secrets API permite crear, actualizar, eliminar y recuperar información sobre los secretos cifrados que se pueden usar en los flujos de trabajo {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061990'
---
## Acerca de Secrets API

{% data variables.product.prodname_actions %} Secrets API permite crear, actualizar, eliminar y recuperar información sobre los secretos cifrados que se pueden usar en los flujos de trabajo {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} Para obtener más información, vea "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} debe contar con el permiso `secrets` para utilizar esta API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.
