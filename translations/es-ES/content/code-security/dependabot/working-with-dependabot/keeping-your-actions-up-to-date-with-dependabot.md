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
  ghes: '>3.2'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Acciones de actualización automática
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Las acciones a menudo se actualizan con correcciones de errores y con nuevas características para que los procesos automatizados sean más confiables, rápidos y seguros. Cundo habilitas las {% data variables.product.prodname_dependabot_version_updates %} para {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} te ayudará a asegurarte de que las referencias para las acciones en el archivo *workflow.yml* de un repositorio se mantengan actualizadas. El {% data variables.product.prodname_dependabot %} verifica la referencia de la acción para cada una de ellas en el archivo (habitualmente un número de versión o identificador de confirmación que se asocie con la acción) contra la última versión. Si alguna versión más reciente de la acción está disponible, el {% data variables.product.prodname_dependabot %} te enviará una solicitud de extracción que actualice la referencia en el archivo de flujo de trabajo a su última versión. Para obtener más información acerca de las {% data variables.product.prodname_dependabot_version_updates %}, consulta la sección "[Acerca del {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)". Para obtener más información acerca de configurar flujos de trabajo para las {% data variables.product.prodname_actions %}, consulta la sección "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

{% data reusables.actions.workflow-runs-dependabot-note %}

## Habilitar las {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Puedes configurar las {% data variables.product.prodname_dependabot_version_updates %} para mantener tus acciones, así como las librerías y paquetes de las cuales dependes.

1. Si ya habilitaste las {% data variables.product.prodname_dependabot_version_updates %} para otros ecosistemas o administradores de paquetes, simplemente abre el archivo existente de *dependabot.yml*. De lo contrario, crea un archivo de configuración *dependabot.yml* en el directorio `.github` de tu repositorio. Para obtener más información, consulta la sección "[Configurar las actualizaciones de versión del Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".
1. Especifica `"github-actions"` como el `package-ecosystem` a monitorear.
1. Configura el `directory` como `"/"` para verificar los archivos de flujo de trabajo en `.github/workflows`.
1. Configura un `schedule.interval` para especificar la frecuencia en la que se revisará si hay versiones nuevas.
{% data reusables.dependabot.check-in-dependabot-yml %}Si editaste un archivo existente, guarda tus cambios.

También puedes habilitar las {% data variables.product.prodname_dependabot_version_updates %} en las bifurcaciones. Para obtener más información, consulta la sección "[Configurar las actualizaciones de versión del {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)".

### Archivo de ejemplo de *dependabot.yml* para {% data variables.product.prodname_actions %}

El siguiente ejemplo de archivo de *dependabot.yml* configura las actualizaciones de versión para {% data variables.product.prodname_actions %}. El `directory` debe configurarse como `"/"` para verificar los archivos de flujo de trabajo en `.github/workflows`. El `schedule.interval` se configura en `"daily"`. Después de que se verifique o actualice este archivo, el {% data variables.product.prodname_dependabot %} revisará si hay versiones nuevas de tus acciones. El {% data variables.product.prodname_dependabot %} levantará solicitudes de extracción para las actualizaciones de versión de cualquier acción desactualizada que encuentre. Después de las actualizaciones de versión iniciales, el {% data variables.product.prodname_dependabot %} seguirá buscando versiones desactualizadas para las acciones una vez por día.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"
```

## Configurar las {% data variables.product.prodname_dependabot_version_updates %} para las acciones

Cuando habilitas las {% data variables.product.prodname_dependabot_version_updates %} para las acciones, debes especificar los valores de `package-ecosystem`, `directory`, y `schedule.interval`. Hay muchas más propiedades opcionales que puedes configurar para personalizar tus actualizaciones de versión aún más. Para obtener más información, consulta la sección "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates)".

## Leer más

- "[Acerca de GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)"
