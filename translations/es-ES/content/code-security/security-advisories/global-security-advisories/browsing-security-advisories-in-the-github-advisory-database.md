---
title: Exploración de los avisos de seguridad en GitHub Advisory Database
intro: 'Puedes examinar {% data variables.product.prodname_advisory_database %} para buscar avisos relacionados con los riesgos de seguridad en proyectos de código abierto hospedados en {% data variables.product.company_short %}.'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 19c37d2a1a1101f9984de13cd034bb0ee5e285a8
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114088'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## Acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}

Puedes acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}.

1. Vaya a https://github.com/advisories.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables.
  ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Sugerencia**: Puede utilizar la barra lateral de la izquierda para explorar las advertencias que revisa {% data variables.product.company_short %} y las no revisadas por separado.

   {% endtip %}
3. Haz clic en cualquier aviso para ver los detalles. De manera predeterminada, verás avisos revisados por {% data variables.product.company_short %} para las vulnerabilidades de seguridad. {% ifversion GH-advisory-db-supports-malware %}Para mostrar avisos de malware, usa `type:malware` en la barra de búsqueda.{% endif %}


{% note %}

También se puede acceder a la base de datos utilizando la API de GraphQL. {% ifversion GH-advisory-db-supports-malware %}De forma predeterminada, las consultas devolverán avisos revisados por {% data variables.product.company_short %} para las vulnerabilidades de seguridad a menos que se especifique `type:malware`.{% endif %} Para obtener más información, consulta el "[evento de webhook`security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

## Editar una asesoría en la {% data variables.product.prodname_advisory_database %}
Puedes sugerir mejoras a cualquier asesoría en la {% data variables.product.prodname_advisory_database %}. Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## Buscar en la {% data variables.product.prodname_advisory_database %} por coincidencia exacta

Puedes buscar la base de datos y utilizar los calificadores para definir más tu búsqueda. Por ejemplo, puedes buscar las asesorías que se hayan creado en una fecha, ecosistema o biblioteca específicos.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:  | Ejemplo |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará avisos revisados por {% data variables.product.company_short %} para las vulnerabilidades de seguridad. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) mostrará avisos revisados por {% data variables.product.company_short %} para malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) mostrará las advertencias no revisadas. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) mostrará la advertencia con este id. de {% data variables.product.prodname_advisory_database %}. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) mostrará la advertencia con este número de id. CVE. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará solo las advertencias que afecten a los paquetes de NPM. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) solo mostrará advertencias con un nivel de gravedad alto. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará solo advertencias que afecten a la biblioteca lodash. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) solo mostrará advertencias con este número CWE. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) solo mostrará advertencias acreditadas en la cuenta de usuario "octocat". |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) ordenará primero por las advertencias más antiguas. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) ordenará primero por las advertencias más recientes. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) ordenará primero por la actualización menos reciente. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) ordenará primero por la actualización más reciente. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará solo advertencias que se han retirado. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) mostrará solo advertencias creadas en esta fecha. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) mostrará solo advertencias actualizadas en esta fecha. |

## Visualizar tus repositorios vulnerables

Para cualquier aviso revisado por {% data variables.product.company_short %} en {% data variables.product.prodname_advisory_database %}, puedes ver cuáles de los repositorios se ven afectados por esa vulnerabilidad de seguridad{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Vaya a https://github.com/advisories.
2. Haz clic en una asesoría.
3. En la parte superior de la página de advertencias, haga clic en **Dependabot alerts** (Alertas de Dependabot).
   ![Alertas de Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario).
   ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para más detalles sobre el aviso y consejos sobre cómo corregir el repositorio vulnerable, haz clic en el nombre del repositorio.

{% ifversion security-advisories-ghes-ghae %}
## Acceso a la base de datos de asesoría local en {% data variables.location.product_location %}

Si el administrador del sitio ha habilitado {% data variables.product.prodname_github_connect %} para {% data variables.location.product_location %}, también puedes examinar las asesorías revisados localmente. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

Puede usar la base de datos de avisos local para comprobar si se incluye una vulnerabilidad de seguridad específica y, por tanto, si recibirás alertas de las dependencias vulnerables. También puedes ver cualquier repositorio vulnerable. 

1. Vaya a `https://HOSTNAME/advisories`.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables.
  ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Nota:** Solo se mostrarán avisos revisados. Los avisos no revisados se pueden ver en {% data variables.product.prodname_advisory_database %} en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Acceso a un aviso en la base de datos de avisos de GitHub](#accessing-an-advisory-in-the-github-advisory-database)". 

   {% endnote %}
3. Haz clic en un aviso para ver los detalles. {% ifversion GH-advisory-db-supports-malware %} De forma predeterminada, verás los avisos revisados por {% data variables.product.company_short %} para las vulnerabilidades de seguridad. Si quieres ver los avisos de malware, usa `type:malware` en la barra de búsqueda.{% endif %}

También puedes sugerir mejoras en cualquier aviso directamente desde la base de datos de avisos local. Para obtener más información, consulta "[Edición de asesorías de {% data variables.location.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Visualización de repositorios vulnerables para {% data variables.location.product_location %}

{% data reusables.repositories.enable-security-alerts %}

En la base de datos de avisos local, puedes ver qué repositorios se ven afectados por cada vulnerabilidad de seguridad{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Vaya a `https://HOSTNAME/advisories`.
2. Haz clic en una asesoría.
3. En la parte superior de la página de advertencias, haga clic en **Dependabot alerts** (Alertas de Dependabot).
   ![Alertas de Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario).
   ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para más detalles sobre el aviso y consejos sobre cómo corregir el repositorio vulnerable, haz clic en el nombre del repositorio.

{% endif %}
