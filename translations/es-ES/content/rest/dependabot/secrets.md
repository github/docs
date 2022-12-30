---
title: Secretos del Dependabot
shortTitle: Secrets
intro: 'Con la API de secretos del {% data variables.product.prodname_dependabot %}, puedes administrar y controlar los secretos del {% data variables.product.prodname_dependabot %} para una organización o repositorio.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882291'
---
## Acerca de {% data variables.product.prodname_dependabot %} secrets API

{% data variables.product.prodname_dependabot %} secrets API permite crear, actualizar, eliminar y recuperar información sobre los secretos cifrados. {% data reusables.actions.about-secrets %} Para más información, vea "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} debe contar con el permiso `dependabot_secrets` para utilizar esta API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.
