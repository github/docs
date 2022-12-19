---
title: Administración de la facturación para GitHub Codespaces
intro: Aprende cómo se factura el uso de {% data variables.product.prodname_github_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
- /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: 2dfec9e452360db117bdee7954fbe4fad2ad1c56
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147111687"
---
Este artículo te explica cómo funciona la facturación para tus codespaces y cómo el gerente de facturación de tu empresa puede ayudar.

## Acceso a {% data variables.product.prodname_github_codespaces %}

El administrador de la organización puede limitar el uso de {% data variables.product.prodname_github_codespaces %} solo a cuentas personales específicas. Para obtener acceso, necesitarás contactar a tu gerente de facturación. Para más información, vea "[Administración del acceso y la seguridad de los codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## Cuánto cuesta utilizar {% data variables.product.prodname_codespaces %}

Para ver los precios del uso de {% data variables.product.prodname_codespaces %}, vea "[Precios de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

## Cómo se factura tu uso de codespaces

Tu codespace se cobra de acuerdo con sus minutos de cálculo y con la cantidad de almacenamiento que utiliza en disco.

Si habilitas la precompilación de los codespaces, esto ameritará cargos adicionales. Para más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### Entender qué son los minutos de cálculo
Tu codespace se cobra de acuerdo con la cantidad de minutos durante los cuales está activo. Si tu ventana de codespaces está inactiva durante 30 minutos, se cerrará automáticamente y la facturación por cálculo terminará hasta que lo inicies nuevamente.

### Entender cómo se factura el almacenamiento de un codespace
En {% data variables.product.prodname_github_codespaces %}, se define el almacenamiento para incluir cualquier archivo que se relacione con el codespace, como el repositorio clonado, los archivos de configuración y las extensiones, entre otros. Este almacenamiento se factura mientras tu codespace está cerrado. La facturación de almacenamiento de un codespace finaliza cuando se elimina manualmente de https://github.com/codespaces.

## Cómo funcionan los límites de gastos

Antes de que tu organización pueda utilizar los {% data variables.product.prodname_codespaces %}, tu gerente de facturación necesitará configurar un límite de gastos. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)". 

## Exportar cambios cuando llegaste a tu límite de gastos

{% data reusables.codespaces.exporting-changes %}

## Verificar tu uso y límites actuales
Si necesitas verificar tu uso o límite de gastos actuales, contacta al gerente de facturación de tu organización. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Los codespaces pueden borrarse automáticamente

Tu codespace se borrará automáticamente cuando lo elimines de un repositorio u organización.

## Borrar tus codespaces sin utilizar

Puede eliminar manualmente los codespaces en https://github.com/codespaces y desde dentro de {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, puedes borrar los archivos manualmente utilizando la terminal o desde dentro de {% data variables.product.prodname_vscode %}.

## Información adicional

- "[Administración de la facturación para {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
