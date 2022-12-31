---
title: Enumeración de codespaces en la organización
shortTitle: List organization codespaces
intro: Puedes enumerar todos los codespaces activos o detenidos actualmente de la organización.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: 1353548a4520cb69eee85437a35804faf6724c68
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106481'
---
## Información general

Como propietario de la organización, puedes enumerar todos los codespaces activos y detenidos actualmente de la organización. Es posible que quieras hacerlo para comprobar cuántos codespaces están creando los usuarios, para asegurarte de que no incurren en costos innecesarios. Para obtener información sobre los precios, consulta "[Acerca de la facturación de GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

La manera más fácil de enumerar los codespaces de una organización es a través de {% data variables.product.prodname_cli %}. También puede usar la API de REST, que proporciona más información sobre cada codespace.

Para obtener información sobre cómo ver el uso actual de {% data variables.product.prodname_codespaces %} de tu organización o empresa y generar un informe detallado, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

### Uso de {% data variables.product.prodname_cli %} para enumerar codespaces

Para enumerar todos los codespaces actuales de una organización especificada, usa el siguiente comando.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

Este comando devuelve una lista que incluye la siguiente información para cada codespace: 
    - El nombre y el nombre para mostrar 
    - El usuario que creó el codespace
    - El repositorio y la rama
    - El estado actual del codespace

Para enumerar todos los codespaces actuales de una organización creados por un usuario específico, usa el siguiente comando.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Nota**: En los comandos anteriores, sustituye `ORGANIZATION` por el nombre de la organización que estás consultando. Debes ser un propietario de la organización.

{% endnote %}

### Uso de la API REST para enumerar codespaces

Puede usar el punto de conexión de API `/orgs/{org}/codespaces` como método alternativo para enumerar los codespaces actuales para una organización. Esto devuelve más información que {% data variables.product.prodname_cli %}; por ejemplo, los detalles del tipo de máquina.

Para obtener más información sobre este punto de conexión, consulta "[Organizaciones de Codespaces](/rest/codespaces/organizations#list-codespaces-for-the-organization)".
