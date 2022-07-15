---
title: Configurar las actualizaciones de seguridad del Dependabot
intro: 'Puedes utilizar las {% data variables.product.prodname_dependabot_security_updates %} o las solicitudes de extracción manuales para actualizar fácilmente las dependencias vulnerables.'
shortTitle: Configurar las actualizaciones de seguridad
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de la configuración de las {% data variables.product.prodname_dependabot_security_updates %}

Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

You can disable {% data variables.product.prodname_dependabot_security_updates %} for an individual repository or for all repositories owned by your personal account or organization. Para obtener más información, consulta la sección "[Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios](#managing-dependabot-security-updates-for-your-repositories)" acontinuación.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Repositorios soportados

{% data variables.product.prodname_dotcom %} habilita las {% data variables.product.prodname_dependabot_security_updates %} automáticamente para cada repositorio que cumpla con estos pre-requisitos.

{% note %}

**Nota**: Puedes habilitar manualmente las {% data variables.product.prodname_dependabot_security_updates %}, aún si el repositorio no cumple con alguno de los siguientes prerrequisitos. Por ejemplo, puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} en una bifurcación, o para un administrador de paquetes que no sea directamente compatible si sigues las instrucciones en la sección "[Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios](#managing-dependabot-security-updates-for-your-repositories)".

{% endnote %}

| Pre-requisito de habilitación automática                                                                                                                                                                                               | Más información                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Que el repositorio no sea una bifrucación                                                                                                                                                                                              | "[Acerca de las bifurcaciones](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                             |
| Que el repositorio no esté archivado                                                                                                                                                                                                   | "[Archivar repositorios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| Que el repositorio sea público, o que sea privado y hayas habilitado un análisis de solo lectura por {% data variables.product.prodname_dotcom %}, gráfica de dependencias y alertas de vulnerabilidades en la configuración del mismo | "[Administrar los ajustes de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)". 
{% endif %}
| Que el repositorio contenga un archivo de manifiesto de dependencias de un ecosistema de paquete que sea compatible con {% data variables.product.prodname_dotcom %}                                                                   | "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                              |
| Las {% data variables.product.prodname_dependabot_security_updates %} no se han inhabilitado para el repositorio                                                                                                                     | "[Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tu repositorio](#managing-dependabot-security-updates-for-your-repositories)"     |

Si no se habilitan las actualizaciones de seguridad para tu repositorio y no sabes por qué, intenta primero habilitarles de acuerdo con las instrucciones que se encuentran en los procedimientos siguientes. Si las actualizaciones de seguridad aún no funcionan, puedes contactar al {% data variables.contact.contact_support %}.

## Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios

Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual (ver a continuación).


You can also enable or disable {% data variables.product.prodname_dependabot_security_updates %} for all repositories owned by your personal account or organization. Para obtener más información, consulta la sección "[Administrar los ajustes de seguridad y análisis de tu cuenta personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administrar los ajustes de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Las {% data variables.product.prodname_dependabot_security_updates %} requieren de configuraciones de repositorio específicas. Para obtener más información, consulta "[Repositorios soportados](#supported-repositories)".

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} security updates", click **Enable** to enable the feature or **Disable** to disable it. {% ifversion fpt or ghec %}For public repositories, the button is disabled if the feature is always enabled.{% endif %}
  {% ifversion fpt or ghec %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae-issue-7044 %}<!--Insertar captura de pantalla de GHES 3.7 cuando esté disponible-->{% else %}![Screenshot of "Code security and analysis" section with button to enable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Overriding the default behavior with a configuration file

You can override the default behavior of {% data variables.product.prodname_dependabot_security_updates %} by adding a dependabot.yml file to your repository. Para obtener más información, consulta la sección "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)".

Si solo requieres actualizaciones de seguridad y quieres excluir las actualizaciones de versión, puedes configurar a `open-pull-request-limit` para que sea `0` para prevenir a las actualizaciones de versión de algún `package-ecosystem`. Para obtener más información, consulta "[`open-pull-request-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)".

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

Para obtener más información sobre las opciones de configuración disponibles para las actualizaciones de seguridad, consulta la tabla en la sección "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)".

## Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configurar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"{% ifversion fpt or ghec %}
- "[Administrar los ajustes de uso de datos para tu repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
