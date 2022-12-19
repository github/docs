---
title: Administración de la facturación para GitHub Codespaces en la organización
shortTitle: Manage billing
intro: Puedes comprobar el uso de {% data variables.product.prodname_github_codespaces %} y configurar los límites de uso.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865189"
---
## Información general

Para información sobre los precios de {% data variables.product.prodname_github_codespaces %}, consulta "[Precios de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como propietario de la organización o administrador de facturación, puede administrar la facturación de {% data variables.product.prodname_codespaces %} para la organización: ["Acerca de la facturación de Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)
- Como propietario de la organización, puede enumerar los codespaces activos y detenidos actualmente de la organización. Además de estos codespaces, los costos del mes actual pueden incluir los costos de los codespaces que existían anteriormente en el mes actual, pero que se han eliminado.
- Para los usuarios, hay una guía en la que se explica cómo funciona la facturación: ["Descripción de la facturación de Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Límites de uso

Puedes configurar el límite de uso de los codespaces en tu organización o repositorio. Este límite se aplica al uso de proceso y almacenamiento de {% data variables.product.prodname_github_codespaces %}:
 
- **Minutos de proceso:** el uso del proceso se calcula con la cantidad actual de minutos que usan todas las instancias de {% data variables.product.prodname_codespaces %} mientras están activas. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_codespaces %} en tu organización. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

- **Uso de almacenamiento:** con fines de facturación de {% data variables.product.prodname_codespaces %}, esto incluye todo el almacenamiento que usan todos los codespaces de la cuenta. Esto incluye todos los recursos, tales como los repositorios clonados, archivos de configuración y extensiones, entre otros. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Para comprobar cuántos minutos de proceso y GB de almacenamiento se han usado en {% data variables.product.prodname_codespaces %}, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Inhabilitar o limitar los {% data variables.product.prodname_codespaces %}

Puedes deshabilitar todo el uso de {% data variables.product.prodname_github_codespaces %} que se facturarían a tu organización. También puedes especificar qué miembros o colaboradores de la organización pueden usar {% data variables.product.prodname_codespaces %} con cargo a la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Puedes configurar a qué repositorios se puede acceder desde codespaces creados para un repositorio determinado. Para obtener más información, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

Puedes limitar la elección de tipos de máquina que se encuentra disponible para los codespaces creados a partir de repositorios que pertenecen a tu organización. Esto te permite prevenir que las personas utilicen máquinas con recursos excesivos para sus codespaces e incurrir en cargos innecesarios. Para obtener más información, consulte "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

También puedes restringir cuánto tiempo puede permanecer un codespace sin usar antes de que se elimine automáticamente. Esto puede ayudar a reducir los costos de almacenamiento de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta "[Restringir el período de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

## Borrar los codespaces sin utilizar

Los usuarios pueden eliminar manualmente sus propios codespaces en https://github.com/codespaces y desde {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, los usuarios pueden eliminar manualmente archivos mediante el terminal o desde {% data variables.product.prodname_vscode_shortname %}. 

Como propietario de la organización, puede eliminar cualquier codespace de la organización. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)".

{% note %}

**Nota:** Los codespaces se eliminan automáticamente una vez detenidos y permanecen inactivos durante un número definido de días. Para obtener más información, consulta "[Restringir el período de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)". Un codespace solo lo puede eliminar manualmente la persona que lo creó.

{% endnote %}

## Información adicional

- "[Enumeración de codespaces en la organización](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
