---
title: Explorar las alertas de seguridad
intro: 'Puedes ver, filtrar y clasificar las alertas de seguridad para los repositorios que pertenezcan a tu organización o equipo en un lugar.'
product: '{% data reusables.gated-features.security-center %}'
versions:
  free-pro-team: '*'
  github-ae: next
---

{% data reusables.security-center.beta %}

### Acerca del resumen de seguridad

Puedes utilizar el resumen de seguirdad para tener una vista de nivel alto del estado de seguridad de tu organización o para identificar repositorios problemáticos que requieren intervención. A nivel organizacional, el resumen de seguridad muestra seguridad agregada y específica del repositorio para aquellos que pertenezcan a tu organización. A nivel de equipo, el resumen de seguridad muestra la información de seguridad específica del repositorio para aquellos en los que el equipo tenga privilegios de administración. Para obtener más información, consulta la sección "[Administrar el acceso de un equipo a un repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

El resumen de seguridad indica si las características de la {% data variables.product.prodname_GH_advanced_security %} se habilitaron para los repositorios que pertenezcan a tu organización y consolida alertas de las características de la {% data variables.product.prodname_advanced_security %}, incluyendo las alertas del {% data variables.product.prodname_code_scanning %}, las {% data variables.product.prodname_dependabot_alerts %}, y las alertas del {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Acerca de asegurar tu repositorio](/code-security/getting-started/about-securing-your-repository)".

En el resumen de seguridad, puedes ver, clasificar y filtrar las alertas para entender los riesgos de seguridad en tu organización y en los repositorios específicos. Puedes aplicar varios filtros para enfocarte en áreas de interés. Por ejemplo, puedes identificar repositorios privados que tengan una gran cantidad de {% data variables.product.prodname_dependabot_alerts %} o repositorios que no tengan alertas del {% data variables.product.prodname_code_scanning %}.

![El resumen de seguridad para una organziación](/assets/images/help/organizations/security-overview.png)

Para cada repositorio en el resumen de seguridad, verás iconos de cada tipo de característica de la {% data variables.product.prodname_advanced_security %} y cuántas alertas hay para cada tipo. Si no se habilita una característica de la {% data variables.product.prodname_advanced_security %} para un repositorio, su icono se mostrará en gris.

![Los iconos en el resumen de seguridad](/assets/images/help/organizations/security-overview-icons.png)

| Icono                                                         | Significado                                                                                                                                                                                                                                               |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".          |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | alertas del {% data variables.product.prodname_secret_scanning_caps %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".  |
| {% octicon "check" aria-label="Check" %}                      | La característica de la {% data variables.product.prodname_advanced_security %} está habilitada, pero no levanta alertas en este repositorio.                                                                                                           |
| {% octicon "x" aria-label="x" %}                              | La característica de la {% data variables.product.prodname_advanced_security %} no es compatible en este repositorio.                                                                                                                                   |

Predeterminadamente, los repositorios archivados se excluyen del resumen de seguridad de una organización. Puedes aplicar filtros para ver los repositorios archivados en el resumen de seguridad. Para obtener más información, consulta la sección "[Filtrar la lista de alertas](#filtering-the-list-of-alerts)".

El resumen de seguridad muestra alertas activas que levantan las características de la {% data variables.product.prodname_GH_advanced_security %}. Si no hay alertas en el resumen de seguridad de un repositorio, las vulnerabilidades de seguridad no detectadas o los errores de código podrían aún existir.

### Visualizar el resumen de seguridad de una organización

Los propietarios de las organizaciones pueden ver el resumen de seguridad de estas.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para ver la información agregada sobre los tipos de alerta, haz clic en **Mostrar más**. ![Botón de mostrar más](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

### Visualizar el resumen de seguridad de un equipo

Los miembros de un equipo pueden ver el resumen de seguridad de los repositorios para los cuales dicho equipo tiene privilegios administrativos.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

### Filtrar la lista de alertas

#### Filtrar por nivel de riesgo para los repositorios

El nivel de riesgo de un repositorio se determina por la cantidad y severidad de las alertas de las características de {% data variables.product.prodname_advanced_security %}. Si no están habilitadas una o más características de la {% data variables.product.prodname_advanced_security %} para un repositorio, este tendrá un nivel de riesgo desconocido. Si un repositorio no tiene riesgos que detecten las características de la {% data variables.product.prodname_advanced_security %}, este tendrá un nivel de riesgo claro.

| Qualifier      | Descripción                                                          |
| -------------- | -------------------------------------------------------------------- |
| `risk:high`    | Muestra los repositorios que tienen un riesgo alto.                  |
| `risk:medium`  | Muestra los repositorios que tienen un riesgo medio.                 |
| `risk:low`     | Muestra los repositorios que tienen un nivel de riesgo bajo.         |
| `risk:unknown` | Muestra los repositorios que tienen un nivel de riesgo desconocido.  |
| `risk:clear`   | Muestra los repositorios que no tienen un nivel de riesgo detectado. |

#### Filtra por cantidad de alertas

| Qualifier                 | Descripción                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas del {% data variables.product.prodname_code_scanning %}. Este calificador puede utilizar los operadores de comparación &gt y &lt.   |
| <code>secret-scanning-alerts:<em>n</em></code> | Muestra los repositorios que tienen *n* alertas del {% data variables.product.prodname_secret_scanning %}. Este calificador puede utilizar los operadores de comparación &gt y &lt. |
| <code>dependabot-alerts:<em>n</em></code> | Muestra los repositorios que tienen *n* {% data variables.product.prodname_dependabot_alerts %}. Este calificador puede utilizar los operadores de comparación &gt y &lt.           |

#### Filtra por si las características de la {% data variables.product.prodname_advanced_security %} están habilitadas

| Qualifier                       | Descripción                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `enabled:code-scanning`         | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_code_scanning %}.          |
| `not-enabled:code-scanning`     | Muestra los repositorios que no tienen habilitado el {% data variables.product.prodname_code_scanning %}.       |
| `enabled:secret-scanning`       | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `not-enabled:secret-scanning`   | Muestra los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}.        |
| `enabled:dependabot-alerts`     | Muestra los repositorios que tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}.    |
| `not-enabled:dependabot-alerts` | Muestra los repositorios que no tienen habilitadas las {% data variables.product.prodname_dependabot_alerts %}. |

#### Filtrar por tipo de repositorio

| Calificador     | Descripción                          |
| --------------- | ------------------------------------ |
| `is:public`     | Muestra los repositorios públicos.   |
| `is:internal`   | Muestra los repositorios internos.   |
| `is:private`    | Muestra los repositorios privados.   |
| `archived:true` | Muestra los repositorios archivados. |

#### Filtrar por equipo

| Calificador               | Descripción                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Muestra los repositorios en los que *TEAM-NAME* tiene privilegios administrativos. |

#### Filtrar por tema

| Calificador               | Descripción                                                  |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Muestra los repositorios que se clasifican con *TOPIC-NAME*. |

#### Clasifica la lista de alertas

| Calificador                   | Descripción                                                                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:risk`                   | Clasifica los repositorios por riesgo en tu resumen de seguridad.                                                                             |
| `sort:repos`                  | Clasifica los repositorios en tu resumen de seguridad por órden alfabético de nombre.                                                         |
| `sort:code-scanning-alerts`   | Clasifica los repositorios en tu resumen de seguridad por la cantidad de alertas del {% data variables.product.prodname_code_scanning %}.   |
| `sort:secret-scanning-alerts` | Clasifica los repositorios en tu resumen de seguridad por la cantidad de alertas del {% data variables.product.prodname_secret_scanning %}. |
| `sort:dependabot-alerts`      | Clasifica los repositorios en tu resumen de seguridad por cantidad de {% data variables.product.prodname_dependabot_alerts %}.              |
