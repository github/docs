---
title: Entender la facturación para los Codespaces
intro: Aprende cómo se factura tu uso de {% data variables.product.prodname_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126128"
---
Este artículo te explica cómo funciona la facturación para tus codespaces y cómo el gerente de facturación de tu empresa puede ayudar.

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>Obtener acceso a {% data variables.product.prodname_codespaces %}

El administrador de la organización puede limitar el uso de {% data variables.product.prodname_codespaces %} solo a cuentas personales específicas. Para obtener acceso, necesitarás contactar a tu gerente de facturación. Para más información, vea "[Administración del acceso y la seguridad de los codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>Cuánto cuesta utilizar {% data variables.product.prodname_codespaces %}

Para ver los precios del uso de {% data variables.product.prodname_codespaces %}, vea "[Precios de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

## <a name="how-your-codespace-usage-is-billed"></a>Cómo se factura tu uso de codespaces

Tu codespace se cobra de acuerdo con sus minutos de cálculo y con la cantidad de almacenamiento que utiliza en disco.

Si habilitas la precompilación de los codespaces, esto ameritará cargos adicionales. Para más información, vea "[Acerca de las precompilaciones de Codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### <a name="understanding-what-compute-minutes-are"></a>Entender qué son los minutos de cálculo
Tu codespace se cobra de acuerdo con la cantidad de minutos durante los cuales está activo. Si tu ventana de codespaces está inactiva durante 30 minutos, se cerrará automáticamente y la facturación por cálculo terminará hasta que lo inicies nuevamente.

### <a name="understanding-how-codespace-storage-is-billed"></a>Entender cómo se factura el almacenamiento de un codespace
Para los {% data variables.product.prodname_codespaces %}, el almacenamiento se define para incluir cualquier archivo que se relacione con tu codespace, tal como el repositorio clonado, los archivos de configuración y las extensiones, entre otros. Este almacenamiento se factura mientras tu codespace está cerrado. La facturación de almacenamiento de un codespace finaliza cuando se elimina manualmente de https://github.com/codespaces.

## <a name="how-spending-limits-work"></a>Cómo funcionan los límites de gastos

Antes de que tu organización pueda utilizar los {% data variables.product.prodname_codespaces %}, tu gerente de facturación necesitará configurar un límite de gastos. Para más información, vea "[Administración de límites de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)". 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportar cambios cuando llegaste a tu límite de gastos

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>Verificar tu uso y límites actuales
Si necesitas verificar tu uso o límite de gastos actuales, contacta al gerente de facturación de tu organización. Para más información, vea "[Visualización del uso de Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)".

## <a name="codespaces-can-be-automatically-deleted"></a>Los codespaces pueden borrarse automáticamente

Tu codespace se borrará automáticamente cuando lo elimines de un repositorio u organización.

## <a name="deleting-your-unused-codespaces"></a>Borrar tus codespaces sin utilizar

Puede eliminar manualmente los codespaces en https://github.com/codespaces y desde dentro de {% data variables.product.prodname_vscode %}. Para reducir el tamaño de un codespace, puedes borrar los archivos manualmente utilizando la terminal o desde dentro de {% data variables.product.prodname_vscode %}.

## <a name="further-reading"></a>Información adicional

- "[Administración de la facturación de Codespaces en la organización](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
