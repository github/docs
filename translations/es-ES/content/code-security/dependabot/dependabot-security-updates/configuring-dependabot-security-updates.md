---
title: Configuración de actualizaciones de seguridad de Dependabot
intro: 'Puedes utilizar las {% data variables.product.prodname_dependabot_security_updates %} o las solicitudes de extracción manuales para actualizar fácilmente las dependencias vulnerables.'
shortTitle: Configure security updates
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
ms.openlocfilehash: d45ba3ee3e45bcab91d9ddafdb8fb23da4963c8e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '146027959'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Acerca de la configuración de las {% data variables.product.prodname_dependabot_security_updates %}

Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

Puedes deshabilitar {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual o para todos los repositorios que pertenezcan a tu organización o cuenta personal. Para obtener más información, vea "[Administración de {% data variables.product.prodname_dependabot_security_updates %} para los repositorios](#managing-dependabot-security-updates-for-your-repositories)" a continuación.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Repositorios compatibles

{% data variables.product.prodname_dotcom %} habilita las {% data variables.product.prodname_dependabot_security_updates %} automáticamente para cada repositorio que cumpla con estos pre-requisitos.

{% note %}

**Nota**: Puede habilitar manualmente {% data variables.product.prodname_dependabot_security_updates %}, incluso si el repositorio no cumple algunos de los siguientes requisitos previos. Por ejemplo, puede habilitar {% data variables.product.prodname_dependabot_security_updates %} en una bifurcación o para un administrador de paquetes que no es compatible directamente siguiendo las instrucciones de "[Administración de {% data variables.product.prodname_dependabot_security_updates %} para los repositorios](#managing-dependabot-security-updates-for-your-repositories)".

{% endnote %}

| Pre-requisito de habilitación automática | Más información |
| ----------------- | ----------------------- |
| Que el repositorio no sea una bifrucación | "[Acerca de las bifurcaciones](/github/collaborating-with-issues-and-pull-requests/about-forks)" |
| Que el repositorio no esté archivado | "[Archivado de repositorios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| Que el repositorio sea público, o que sea privado y hayas habilitado un análisis de solo lectura por {% data variables.product.prodname_dotcom %}, gráfica de dependencias y alertas de vulnerabilidades en la configuración del mismo | "[Administración de la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)" |{% endif %}
| Que el repositorio contenga un archivo de manifiesto de dependencias de un ecosistema de paquete que sea compatible con {% data variables.product.prodname_dotcom %} | "[Ecosistemas de paquetes admitidos](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)" |
| Las {% data variables.product.prodname_dependabot_security_updates %} no se han inhabilitado para el repositorio | "[Administración de {% data variables.product.prodname_dependabot_security_updates %} para el repositorio](#managing-dependabot-security-updates-for-your-repositories)" |

Si no se habilitan las actualizaciones de seguridad para tu repositorio y no sabes por qué, intenta primero habilitarles de acuerdo con las instrucciones que se encuentran en los procedimientos siguientes. Si las actualizaciones de seguridad aún no funcionan, puedes contactar al {% data variables.contact.contact_support %}.

## Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios

Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual (ver a continuación).


También puedes habilitar o deshabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios que pertenezcan a tu cuenta personal u organización. Para obtener más información, consulta "[Administración de la configuración de seguridad y análisis de la cuenta personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". 

Las {% data variables.product.prodname_dependabot_security_updates %} requieren de configuraciones de repositorio específicas. Para más información, consulte "[Repositorios admitidos](#supported-repositories)".

### Habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. En "Seguridad y análisis de código", a la derecha de "{% data variables.product.prodname_dependabot %} actualizaciones de seguridad", haga clic en **Habilitar** para habilitar la característica o **Deshabilitar** para deshabilitarla. {% ifversion fpt or ghec %}En el caso de los repositorios públicos, el botón está deshabilitado si la característica se encuentra siempre habilitada.{% endif %} {% ifversion fpt or ghec %}![Captura de pantalla de la sección "Análisis y seguridad del código" con el botón para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae-issue-7044 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Captura de pantalla de la sección "Seguridad y análisis del código" con el botón para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Invalidación del comportamiento predeterminado con un archivo de configuración

Puedes invalidar el comportamiento predeterminado de {% data variables.product.prodname_dependabot_security_updates %}; para ello, agrega un archivo dependabot.yml al repositorio. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)". 

Si solo necesitas actualizaciones de seguridad y quieres excluir las actualizaciones de versión, puedes establecer `open-pull-request-limit` en `0` para evitar las actualizaciones de versión de un elemento `package-ecosystem` determinado. Para obtener más información, consulta "[`open-pull-request-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)".

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

A fin de obtener más información sobre las opciones de configuración disponibles para las actualizaciones de seguridad, consulta la tabla en "[Opciones de configuración para el archivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)".

## Información adicional

- "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configuración de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"{% ifversion fpt or ghec %}
- "[Administración de la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Ecosistemas de paquetes admitidos](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
