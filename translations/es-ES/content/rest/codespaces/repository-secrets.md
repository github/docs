---
title: Secretos del repositorio de Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: Usa la API de REST para administrar los secretos para repositorios a los que el usuario tiene acceso en un codespace.
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192733'
---
## Acerca de los secretos de repositorio de {% data variables.product.prodname_codespaces %}

Puedes crear, ver y eliminar secretos (como los tokens de acceso de los servicios en la nube) para los repositorios a los que el usuario tenga acceso. Estos secretos se hacen disponibles para el codespace en el tiempo de ejecución. Para más información, vea "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
