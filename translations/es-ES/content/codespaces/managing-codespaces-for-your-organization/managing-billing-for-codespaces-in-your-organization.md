---
title: Administrar la facturación para los Codespaces en tu organización
shortTitle: Manage billing
intro: Puedes verificar tu uso de {% data variables.product.prodname_codespaces %} y configurar los límites de uso.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149728"
---
## <a name="overview"></a>Información general

Para obtener información sobre los precios de {% data variables.product.prodname_codespaces %}, vea "[Precios de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como propietario de la organización o administrador de facturación, puede administrar la facturación de {% data variables.product.prodname_codespaces %} para la organización: ["Acerca de la facturación de Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Para los usuarios, hay una guía en la que se explica cómo funciona la facturación: ["Descripción de la facturación de Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>Límites de uso

Puedes configurar el límite de uso de los codespaces en tu organización o repositorio. Este límite se aplica al uso de cálculo y almacenamiento de {% data variables.product.prodname_codespaces %}:
 
- **Minutos de proceso:** el uso del proceso se calcula con la cantidad actual de minutos que usan todas las instancias de {% data variables.product.prodname_codespaces %} mientras están activas. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Puedes configurar un límite de gastos para el uso de {% data variables.product.prodname_codespaces %} en tu organización. Para más información, vea "[Administración de los límites de gasto para Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

- **Uso de almacenamiento:** con fines de facturación de {% data variables.product.prodname_codespaces %}, esto incluye todo el almacenamiento que usan todos los codespaces de la cuenta. Esto incluye todos los que utilizan los codespaces, tales como los repositorios clonados, archivos de configuración y extensiones, entre otros. Estos totales se reportan al servicio de facturación diariamente y se cobran mensualmente. Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Para comprobar cuántos minutos de proceso y GB de almacenamiento han usado {% data variables.product.prodname_codespaces %}, vea "[Visualización del uso de Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)".

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>Inhabilitar o limitar los {% data variables.product.prodname_codespaces %}

Puedes inhabilitar el uso de los {% data variables.product.prodname_codespaces %} en tu organización o repositorio. Para más información, vea "[Administración del acceso a los repositorios para los codespaces de la organización](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

También puedes limitar a los usuarios individuales que pueden utilizar {% data variables.product.prodname_codespaces %}. Para más información, vea "[Administración de permisos de usuarios para la organización](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

Puedes limitar la elección de tipos de máquina que se encuentra disponible para los repositorios que pertenecen a tu organización. Esto te permite prevenir que las personas utilicen máquinas con recursos excedidos para sus codespaces. Para más información, vea "[Restricción del acceso a tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## <a name="deleting-unused-codespaces"></a>Borrar los codespaces sin utilizar

Los usuarios pueden eliminar manualmente los codespaces en https://github.com/codespaces y desde {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, los usuarios pueden eliminar manualmente archivos mediante el terminal o desde {% data variables.product.prodname_vscode_shortname %}. 

{% note %}

**Nota:** Solo el usuario que ha creado un codespace puede eliminarlo. Actualmente no hay forma de que los propietarios de las organizaciones borren los codespaces que se crearon dentro de su organización.

{% endnote %}
