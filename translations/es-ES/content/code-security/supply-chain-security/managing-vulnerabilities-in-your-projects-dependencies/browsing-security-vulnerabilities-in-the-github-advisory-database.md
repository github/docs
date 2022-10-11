---
title: Buscar vulnerabilidades de seguridad en la Base de Datos de Asesorías de GitHub
intro: 'La {% data variables.product.prodname_advisory_database %} te permite buscar vulnerabilidades que afecten proyectos de código abierto, ya sea manualmente o por coincidencia exacta, en {% data variables.product.company_short %}.'
shortTitle: Buscar en la Base de Datos de Asesorias
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

### Acerca de las vulnerabilidades de seguridad

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} te enviará {% data variables.product.prodname_dependabot_alerts %} si detectamos que cualquiera de las vulnerabilidades de la {% data variables.product.prodname_advisory_database %} afecta los paquetes de los que depende tu repositorio. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Acerca de {% data variables.product.prodname_advisory_database %}

La {% data variables.product.prodname_advisory_database %} contiene una lista selecta de vulnerabilidades de seguridad que se han mapeado para los paquetes que rastrea la gráfica de dependencias de {% data variables.product.company_short %}. {% data reusables.repositories.tracks-vulnerabilities %}

Cada asesoría de seguridad contiene información acerca de la vulnerabilidad, incluyendo la descripción, severidad, paquete afectado, paquete de ecosistema, versiones afectadas y versiones parchadas, impacto, e información opcional tal como referencias, soluciones alternas, y créditos. Adicionalmente, las asesorías de la National Vulnerability Database contiene un enlace al registro de CVE, en donde puedes leer más sobre los detalles de la vulnerabilidad, su puntuación de CVSS y su nivel de severidad cualitativo. Para obtener más información, consulta la "[National Vulnerability Database](https://nvd.nist.gov/)" del Instituto Nacional de Estándares y Tecnología.

El nivel de gravedad es uno de cuatro niveles posibles que se definen en el [Sistema de clasificación de vulnerabilidades comunes (CVSS), Sección 5](https://www.first.org/cvss/specification-document)".
- Bajo
- Medio/Moderado
- Alto
- Crítico

La {% data variables.product.prodname_advisory_database %} utiliza los niveles del CVSS tal como se describen anteriormente. Si {% data variables.product.company_short %} obtiene un CVE, la {% data variables.product.prodname_advisory_database %} utilizará el CVSS versión 3.1. Si se importa el CVE, la {% data variables.product.prodname_advisory_database %} será compatible tanto con la versión 3.0 como con la 3.1 del CVSS.

{% data reusables.repositories.github-security-lab %}

### Acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}

1. Navega hasta https://github.com/advisories.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables. ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Da clic en cualquier asesoría para ver los detalles.

{% note %}

También se puede acceder a la base de datos utilizando la API de GraphQL. Para obtener más información, consulta la sección "[evento de webhook de `security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

### Buscar en la {% data variables.product.prodname_advisory_database %} por coincidencia exacta

Puedes buscar la base de datos y utilizar los calificadores para definir más tu búsqueda. Por ejemplo, puedes buscar las asesorías que se hayan creado en una fecha, ecosistema o biblioteca específicos.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier             | Ejemplo                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) mostrará la asesoría con esta ID de {% data variables.product.prodname_advisory_database %}.   |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) mostrará la asesoría con este número de ID de CVE.                                                         |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará únicamente asesorías que afecten paquetes NPM.                                     |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará únicamente asesorías con nivel de gravedad alto.                                   |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará únicamente asesorías que afecten la biblioteca lodash.                           |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) mostrará únicamente las asesorías con este número de CWE.                                                              |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) mostrará únicamente las asesorías que se atribuyen a la cuenta de usuario "octocat".                     |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) organizará los resultados para mostrar las asesorías más viejas primero.              |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) organizará los resultados para mostrar las asesorías más nuevas primero.            |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) organizará los resultados para mostrar aquellos actualizados menos recientemente.     |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) organizará los resultados para mostrar los aquellos actualizados más recientemente. |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará únicamente las asesorías que se han retirado.                                        |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) mostrará únicamente las asesorías creadas en esta fecha.                          |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) mostrará únicamente asesorías actualizadas en esta fecha.                         |

### Visualizar tus repositorios vulnerables

Podrás ver cuáles de tus repositorios tienen una alerta del {% data variables.product.prodname_dependabot %} para cualqueir vulnerabilidad de la {% data variables.product.prodname_advisory_database %}. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navega hasta https://github.com/advisories.
2. Haz clic en una asesoría.
3. En la parte superior de la página de la asesoría, haz clic en **Alertas del dependabot**. ![Las alertas del dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario). ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obtener más detalles de la vulnerabilidad y para encontrar consejos sobre cómo arreglar el repositorio vulnerable, da clic en el nombre del repositorio.

### Leer más

- [Definición de MITRE de "vulnerabilidad"](https://cve.mitre.org/about/terminology.html#vulnerability)
