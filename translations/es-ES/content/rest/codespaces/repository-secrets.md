---
title: Secretos del repositorio de Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: 'La API de secretos del repositorio de Codespaces permite que un usuario cree, enumere y elimine secretos (tales como los tokens de acceso para los servicios en la nube) para los repositorios a los que el usuario tenga acceso en un codespace.'
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 95b3dfaafef598bf05f55d697716eb1036093697
ms.sourcegitcommit: 9490533fcb7b7d5c16f8fea082a06ee66dd5db8f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148165605'
---
## Acerca de la API de secretos del repositorio de Codespaces

La API de secretos del repositorio de Codespaces permite que un usuario cree, enumere y elimine secretos (tales como los tokens de acceso para los servicios en la nube) para los repositorios a los que el usuario tenga acceso. Estos secretos se hacen disponibles para el codespace en el tiempo de ejecución. Para más información, vea "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
