---
title: Buscar vulnerabilidades de seguridad en la Base de Datos de Asesorías de GitHub
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116049"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>Acerca de las vulnerabilidades de seguridad

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>Acerca de {% data variables.product.prodname_advisory_database %}

La {% data variables.product.prodname_advisory_database %} contiene una lista de vulnerabilidades de seguridad conocidas, agrupadas en dos categorías: asesorías que revisó {% data variables.product.company_short %} y asesorías sin revisar.

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>Acerca de las asesorías que revisa {% data variables.product.company_short %}

Las asesorías que revisa {% data variables.product.company_short %} son vulnerabilidades de seguridad que se mapearon a paquetes que rastrea la gráfica de dependencias de {% data variables.product.company_short %}.

Revisamos la validez de cada asesoría cuidadosamente. Cada asesoría que revisa {% data variables.product.company_short %} tiene una descripción completa y contiene información tanto del ecosistema como del paquete.

Si habilitas las {% data variables.product.prodname_dependabot_alerts %} para tus repositorios, se te notifica automáticamente cuando una asesoría que revisa {% data variables.product.company_short %} afecta a los paquetes de los que dependes. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### <a name="about-unreviewed-advisories"></a>Acerca de las asesorías sin revisar

Las asesorías sin revisar son vulnerabilidades de seguridad que publicamos automáticamente en la {% data variables.product.prodname_advisory_database %}, directamente desde la fuente de la Base de Datos Nacional de Vulnerabilidades. 

El {% data variables.product.prodname_dependabot %} no crea {% data variables.product.prodname_dependabot_alerts %} para las asesorías sin revisar, ya que este tipo de asesoría no se revisa en su validez o finalización.

## <a name="about-security-advisories"></a>Acerca de las asesorías de seguridad

Cada asesoría de seguridad contiene información sobre la vulnerabilidad, la cual puede incluir la descripción, severidad, paquete afectado, ecosistema del paquete, versiones afectadas y versiones parchadas, impacto e información opcional, tal como referencias, soluciones alternas y créditos. Adicionalmente, las asesorías de la National Vulnerability Database contiene un enlace al registro de CVE, en donde puedes leer más sobre los detalles de la vulnerabilidad, su puntuación de CVSS y su nivel de severidad cualitativo. Para obtener más información, vea la "[Base de datos nacional de vulnerabilidades](https://nvd.nist.gov/)" del Instituto Nacional de Estándares y Tecnología.

El nivel de gravedad es uno de los cuatro niveles posibles definidos en el "[Sistema común de puntuación de vulnerabilidades (CVSS), sección 5](https://www.first.org/cvss/specification-document)".
- Bajo
- Medio/Moderado
- Alto
- Crítico

La {% data variables.product.prodname_advisory_database %} utiliza los niveles del CVSS tal como se describen anteriormente. Si {% data variables.product.company_short %} obtiene un CVE, la {% data variables.product.prodname_advisory_database %} utilizará el CVSS versión 3.1. Si se importa el CVE, la {% data variables.product.prodname_advisory_database %} será compatible tanto con la versión 3.0 como con la 3.1 del CVSS.

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}

1. Vaya a https://github.com/advisories.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables.
  ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Sugerencia**: Puede utilizar la barra lateral de la izquierda para explorar las advertencias que revisa {% data variables.product.company_short %} y las no revisadas por separado.

   {% endtip %}
3. Da clic en cualquier asesoría para ver los detalles.

{% note %}

También se puede acceder a la base de datos utilizando la API de GraphQL. Para obtener más información, vea el "[evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Editar una asesoría en la {% data variables.product.prodname_advisory_database %}
Puedes sugerir mejoras a cualquier asesoría en la {% data variables.product.prodname_advisory_database %}. Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Buscar en la {% data variables.product.prodname_advisory_database %} por coincidencia exacta

Puedes buscar la base de datos y utilizar los calificadores para definir más tu búsqueda. Por ejemplo, puedes buscar las asesorías que se hayan creado en una fecha, ecosistema o biblioteca específicos.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:  | Ejemplo |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará las advertencias que revisa {% data variables.product.company_short %}. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) mostrará las advertencias no revisadas. |
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

## <a name="viewing-your-vulnerable-repositories"></a>Visualizar tus repositorios vulnerables

Para cualquier asesoría que revise {% data variables.product.company_short %} en la {% data variables.product.prodname_advisory_database %}, puedes ver cuáles de tus repositorios se ven afectados por esa vulnerabilidad de seguridad. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Vaya a https://github.com/advisories.
2. Haz clic en una asesoría.
3. En la parte superior de la página de advertencias, haga clic en **Dependabot alerts** (Alertas de Dependabot).
   ![Alertas de Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario).
   ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obtener más detalles de la vulnerabilidad y para encontrar consejos sobre cómo arreglar el repositorio vulnerable, da clic en el nombre del repositorio.

## <a name="further-reading"></a>Información adicional

- [Definición de MITRE de "vulnerabilidad"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
