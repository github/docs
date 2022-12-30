---
title: Mantener tus acciones actualizadas con el Dependabot
intro: 'Puedes utilizar el {% data variables.product.prodname_dependabot %} para mantener las acciones que utilizas actualizadas en sus versiones más recientes.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107729'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Las acciones a menudo se actualizan con correcciones de errores y con nuevas características para que los procesos automatizados sean más confiables, rápidos y seguros. Cundo habilita {% data variables.product.prodname_dependabot_version_updates %} para {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} le permite asegurarse de que las referencias de acciones se mantengan actualizadas en el archivo *workflow.yml* de un repositorio. Para cada acción del archivo, {% data variables.product.prodname_dependabot %} comprueba si la referencia de la acción (suele ser un número de versión o un identificador de confirmación asociado a la acción) está actualizada a la versión más reciente. Si hay disponible alguna versión más reciente de la acción, {% data variables.product.prodname_dependabot %} le enviará una solicitud de incorporación de cambios para actualizar la referencia en el archivo de flujo de trabajo a su última versión. Para obtener más información sobre las {% data variables.product.prodname_dependabot_version_updates %}, consulte "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)." Para obtener más información sobre la configuración de flujos de trabajo para {% data variables.product.prodname_actions %}, consulte "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## Habilitar las {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Puedes configurar {% data variables.product.prodname_dependabot_version_updates %} para mantener las acciones, así como las bibliotecas y los paquetes de los que dependes. 

1. Si ya tienes habilitadas las {% data variables.product.prodname_dependabot_version_updates %} para otros ecosistemas o administradores de paquetes, solo tendrás que abrir el archivo *dependabot.yml* existente. De lo contrario, crea un archivo de configuración *dependabot.yml* en el directorio `.github` del repositorio. Para obtener más información, consulta "[Configuración de las actualizaciones de versiones de Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".
1. Especifique `"github-actions"` como `package-ecosystem` para supervisar.
1. Establezca `directory` en `"/"` para comprobar si hay archivos de flujo de trabajo en `.github/workflows`.
1. Establezca la `schedule.interval` frecuencia con la que se comprueban las nuevas versiones.
{% data reusables.dependabot.check-in-dependabot-yml %}Si editaste un archivo existente, guarda tus cambios.

También puedes habilitar las {% data variables.product.prodname_dependabot_version_updates %} en las bifurcaciones. Para obtener más información, consulte "[Configuración de las actualizaciones de la versión de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)".

### Ejemplo de archivo *dependabot.yml* de {% data variables.product.prodname_actions %}

El siguiente ejemplo de archivo *dependabot.yml* configura las actualizaciones de versión para {% data variables.product.prodname_actions %}. `directory` debe establecerse `"/"` en para comprobar si hay archivos de flujo de trabajo en `.github/workflows`. La propiedad `schedule.interval` se establece como `"weekly"`. Después de que se verifique o actualice este archivo, el {% data variables.product.prodname_dependabot %} revisará si hay versiones nuevas de tus acciones. {% data variables.product.prodname_dependabot %} enviará solicitudes de incorporación de cambios de actualizaciones de versión para cualquier acción obsoleta que detecte. Después de las actualizaciones de versión iniciales, {% data variables.product.prodname_dependabot %} seguirá buscando versiones desactualizadas en las acciones una vez a la semana.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configurar las {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Al habilitar {% data variables.product.prodname_dependabot_version_updates %} para las acciones, debe especificar valores para `package-ecosystem`, `directory` y `schedule.interval`. Hay muchas más propiedades opcionales que puedes configurar para personalizar tus actualizaciones de versión aún más. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates)".

## Información adicional

- "[Acerca de Acciones de GitHub](/actions/getting-started-with-github-actions/about-github-actions)"
