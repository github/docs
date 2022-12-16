---
title: Administración del costo de GitHub Codespaces en la organización
shortTitle: Manage Codespaces costs
intro: 'Puedes comprobar el uso de {% data variables.product.prodname_github_codespaces %} y configurar los límites de uso.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158713'
---
## Información general

Se factura a tu organización según su uso de proceso y almacenamiento de {% data variables.product.prodname_github_codespaces %}. En este artículo se explican las formas en que puedes administrar estos costos, como propietario de la organización.

Para obtener información sobre los precios de {% data variables.product.prodname_github_codespaces %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

## Límites de gasto

Puedes establecer un límite de gasto de {% data variables.product.prodname_github_codespaces %} para tu organización. Este límite se aplica al costo total de proceso y almacenamiento de {% data variables.product.prodname_github_codespaces %}. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".
 
- **Uso de proceso:** este es el tiempo total durante el que todas las instancias de {% data variables.product.prodname_github_codespaces %} (llamadas "codespaces") han estado activas en un mes de facturación. 

- **Uso de almacenamiento:** con fines de facturación de {% data variables.product.prodname_github_codespaces %}, esto incluye todos los archivos que usan todos los codespaces y las precompilaciones de la cuenta. Esto incluye todos los recursos, tales como los repositorios clonados, archivos de configuración y extensiones, entre otros. 

Puedes comprobar el uso de proceso y almacenamiento de {% data variables.product.prodname_github_codespaces %} para el mes de facturación actual. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

{% note %}

**Nota:** Los precompilaciones de {% data variables.product.prodname_github_codespaces %} se crean y actualizan mediante {% data variables.product.prodname_actions %}. Esto puede conllevar costos facturables de {% data variables.product.prodname_actions %}. Puedes configurar un límite de gasto para {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)" y "[Administración del límite de gasto para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)". El almacenamiento de las precompilaciones generadas se cobra a la misma tarifa que los codespaces y se incluye en tu límite de gasto de {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

## Inhabilitar o limitar los {% data variables.product.prodname_codespaces %}

Puedes deshabilitar todo el uso de {% data variables.product.prodname_github_codespaces %} que se facturarían a tu organización. También puedes especificar qué miembros o colaboradores de la organización pueden usar {% data variables.product.prodname_codespaces %} con cargo a la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Puedes configurar a qué repositorios se puede acceder desde codespaces creados para un repositorio determinado. Para obtener más información, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

Puedes limitar la elección de tipos de máquina que se encuentra disponible para los codespaces creados a partir de repositorios que pertenecen a tu organización. Esto te permite prevenir que las personas utilicen máquinas con recursos excesivos para sus codespaces e incurrir en cargos innecesarios. Para obtener más información, consulte "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

Puedes establecer una restricción de tiempo de espera de inactividad máximo para limitar el tiempo de espera máximo que los usuarios pueden establecer para los codespaces facturables a tu organización. Esto puede reducir los cargos por el uso de proceso que generan los codespaces que continúan ejecutándose en un estado inactivo, deteniendo el codespace activo después de un tiempo de espera más corto. Para obtener más información, consulta "[Restricción del periodo de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

También puedes restringir cuánto tiempo pueden permanecer sin usar los codespaces detenidos antes de que se eliminen automáticamente. Esto puede ayudar a reducir los costos de almacenamiento de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta "[Restringir el período de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

Los propietarios de repositorios que configuran precompilaciones para su repositorio pueden reducir los costos de almacenamiento de dichas precompilaciones configurándolas para que solo se puedan crear en determinadas regiones. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Borrar los codespaces sin utilizar

Los usuarios pueden eliminar manualmente sus propios codespaces en https://github.com/codespaces y desde {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, los usuarios pueden eliminar manualmente archivos mediante el terminal o desde {% data variables.product.prodname_vscode_shortname %}. 

Como propietario de la organización, puede eliminar cualquier codespace de la organización. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)".

{% note %}

**Nota:** Los codespaces se eliminan automáticamente una vez detenidos y permanecen inactivos durante un número de días definible por el usuario. Para más información, consulta "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)". Como propietario de una organización, puedes establecer un período de retención máximo para los codespaces que pertenezcan a tu organización. Esto invalidará la configuración de retención personal de un usuario. Para obtener más información, consulta "[Restringir el período de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

{% endnote %}

## Información adicional

- "[Enumeración de codespaces en la organización](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
