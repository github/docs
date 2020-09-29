---
title: Buscar vulnerabilidades de seguridad en la Base de Datos de Asesorías de GitHub
intro: 'La {% data variables.product.prodname_advisory_database %} te permite buscar vulnerabilidades que afecten proyectos de código abierto, ya sea manualmente o por coincidencia exacta, en {% data variables.product.company_short %}.'
versions:
  free-pro-team: '*'
---

### Acerca de las vulnerabilidades de seguridad

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} will send you {% data variables.product.prodname_dependabot_alerts %} if we detect that any of the vulnerabilities from the {% data variables.product.prodname_advisory_database %} affect the packages that your repository depends on. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

### Acerca de {% data variables.product.prodname_advisory_database %}

La {% data variables.product.prodname_advisory_database %} contiene una lista selecta de vulnerabilidades de seguridad que se han mapeado para los paquetes que rastrea la gráfica de dependencias de {% data variables.product.company_short %}. {% data reusables.repositories.tracks-vulnerabilities %}

Cada asesoría de seguridad contiene información acerca de la vulnerabilidad, incluyendo la descripción, severidad, paquete afectado, paquete de ecosistema, versiones afectadas y versiones parchadas, impacto, e información opcional tal como referencias, soluciones alternas, y créditos. Adicionalmente, las asesorías de la Base de Datos Nacional de Vulnerabilidades contiene un enlace al registro de CVE, en donde puedes leer más sobre los detalles de la vulnerabilidad, su puntuación de CVSS y su nivel de severidad cualitativo. Para obtener más información, consulta la "[National Vulnerability Database](https://nvd.nist.gov/)" del Instituto Nacional de Estándares y Tecnología.

El nivel de gravedad es uno de cuatro niveles posibles definidos en el [Sistema de clasificación de vulnerabilidades comunes (CVSS), Sección 2.12](https://www.first.org/cvss/specification-document):
- Bajo
- Moderado
- Alto
- Crítico

La {% data variables.product.prodname_advisory_database %} utiliza estándares de CVSS versión 3.0 y los niveles de CVSS descritos anteriormente. {% data variables.product.product_name %} no publica los puntajes de CVSS.

{% data reusables.repositories.github-security-lab %}

### Acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}

1. Navega hasta https://github.com/advisories.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables. ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Da clic en cualquier asesoría para ver los detalles.

{% note %}

También se puede acceder a la base de datos utilizando la API de GraphQL. Para obtener más información, consulta la sección "[evento de webhook de `security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

### Buscar en la {% data variables.product.prodname_advisory_database %} por coincidencia exacta
Puedes buscar coincidencias exactas en la base de datos y utilizar calificadores para reducir tu búsqueda y encontrar asesorías que se crearon en cierta fecha, en un ecosistema específico o en una biblioteca en particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier             | Ejemplo                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará únicamente asesorías que afecten paquetes NPM.                                     |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará únicamente asesorías con nivel de gravedad alto.                                   |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará únicamente asesorías que afecten la biblioteca lodash.                           |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) organizará los resultados para mostrar las asesorías más viejas primero.              |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) organizará los resultados para mostrar las asesorías más nuevas primero.            |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) organizará los resultados para mostrar aquellos actualizados menos recientemente.     |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) organizará los resultados para mostrar los aquellos actualizados más recientemente. |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará únicamente las asesorías que se han retirado.                                        |
| `created:YYYY-MM-DD`  | [**created:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2019-10-31) mostrará únicamente las asesorías creadas en esta fecha.                          |
| `updated:YYYY-MM-DD`  | [**updated:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2019-10-31) mostrará únicamente asesorías actualizadas en esta fecha.                         |

### Leer más

- [Definición de MITRE de "vulnerabilidad"](https://cve.mitre.org/about/terminology.html#vulnerability)
