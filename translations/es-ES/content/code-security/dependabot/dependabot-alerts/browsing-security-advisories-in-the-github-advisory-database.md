---
title: Browsing security advisories in the GitHub Advisory Database
intro: 'You can browse the {% data variables.product.prodname_advisory_database %} to find advisories for security risks in open source projects that are hosted on {% data variables.product.company_short %}.'
shortTitle: Buscar en la Base de Datos de Asesorías
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
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
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## Acerca de {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, {% endif %}grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## About types of security advisories

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}.

{% data reusables.repositories.a-vulnerability-is %} Vulnerabilities in code are usually introduced by accident and fixed soon after they are discovered. You should update your code to use the fixed version of the dependency as soon as it is available.

{% ifversion GH-advisory-db-supports-malware %}

In contrast, malicious software, or malware, is code that is intentionally designed to perform unwanted or harmful functions. The malware may target hardware, software, confidential data, or users of any application that uses the malware. You need to remove the malware from your project and find an alternative, more secure replacement for the dependency.

{% endif %}

### {% data variables.product.company_short %}-reviewed advisories

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support. We carefully review each advisory for validity and ensure that they have a full description, and contain both ecosystem and package information.

Generally, we name our supported ecosystems after the software programming language's associated package registry. We review advisories if they are for a vulnerability in a package that comes from a supported registry.

- Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registry: https://hex.pm/){% endif %}
- Go (registry: https://pkg.go.dev/)
{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registry: https://repo1.maven.org/maven2/org/)
- npm (registry: https://www.npmjs.com/)
- NuGet (registry: https://www.nuget.org/)
- pip (registry: https://pypi.org/)
- RubyGems (registry: https://rubygems.org/)
- Rust (registry: https://crates.io/)

If you have a suggestion for a new ecosystem we should support, please open an [issue](https://github.com/github/advisory-database/issues) for discussion.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} for a package you depend on. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Unreviewed advisories

Las asesorías sin revisar son vulnerabilidades de seguridad que publicamos automáticamente en la {% data variables.product.prodname_advisory_database %}, directamente desde la fuente de la Base de Datos Nacional de Vulnerabilidades.

El {% data variables.product.prodname_dependabot %} no crea {% data variables.product.prodname_dependabot_alerts %} para las asesorías sin revisar, ya que este tipo de asesoría no se revisa en su validez o finalización.

## About information in security advisories

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. Adicionalmente, las asesorías de la National Vulnerability Database contiene un enlace al registro de CVE, en donde puedes leer más sobre los detalles de la vulnerabilidad, su puntuación de CVSS y su nivel de severidad cualitativo. Para obtener más información, consulta la "[National Vulnerability Database](https://nvd.nist.gov/)" del Instituto Nacional de Estándares y Tecnología.

El nivel de gravedad es uno de cuatro niveles posibles que se definen en el [Sistema de clasificación de vulnerabilidades comunes (CVSS), Sección 5](https://www.first.org/cvss/specification-document)".
- Bajo
- Medio/Moderado
- Alto
- Crítico

La {% data variables.product.prodname_advisory_database %} utiliza los niveles del CVSS tal como se describen anteriormente. Si {% data variables.product.company_short %} obtiene un CVE, la {% data variables.product.prodname_advisory_database %} utilizará el CVSS versión 3.1. Si se importa el CVE, la {% data variables.product.prodname_advisory_database %} será compatible tanto con la versión 3.0 como con la 3.1 del CVSS.

{% data reusables.repositories.github-security-lab %}

## Acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}

1. Navega hasta https://github.com/advisories.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables. ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **Tip:** Puedes utilizar la barra lateral a la izquierda para explorar las asesorías que revisa {% data variables.product.company_short %} y aquellas sin revisar, por separado.

   {% endtip %}
3. Click an advisory to view details. By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. {% ifversion GH-advisory-db-supports-malware %}To show malware advisories, use `type:malware` in the search bar.{% endif %}


{% note %}

También se puede acceder a la base de datos utilizando la API de GraphQL. {% ifversion GH-advisory-db-supports-malware %}By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`.{% endif %} For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## Editar una asesoría en la {% data variables.product.prodname_advisory_database %}
Puedes sugerir mejoras a cualquier asesoría en la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta la sección "[Editar las asesorías de seguridad en la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## Buscar en la {% data variables.product.prodname_advisory_database %} por coincidencia exacta

Puedes buscar la base de datos y utilizar los calificadores para definir más tu búsqueda. Por ejemplo, puedes buscar las asesorías que se hayan creado en una fecha, ecosistema o biblioteca específicos.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier       | Ejemplo                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed` | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) will show {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. | | `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. | | `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. | | `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. | | `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. | | `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. | | `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. | | `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. | | `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. | | `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. | | `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. | | `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. | | `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. | | `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

## Visualizar tus repositorios vulnerables

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navega hasta https://github.com/advisories.
2. Haz clic en una asesoría.
3. En la parte superior de la página de la asesoría, haz clic en **Alertas del dependabot**. ![Las alertas del dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario). ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obtener más detalles sobre la asesoría y sobre cómo corregir el repositorio vulnerable, haz clic en el nombre del repositorio.

{% ifversion security-advisories-ghes-ghae %}
## Accessing the local advisory database on {% data variables.product.product_location %}

If your site administrator has enabled {% data variables.product.prodname_github_connect %} for {% data variables.product.product_location %}, you can also browse reviewed advisories locally. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories.

1. Navega a `https://HOSTNAME/advisories`.
2. Opcionalmente, para filtrar la lista, utiliza cualquiera de los menúes desplegables. ![Filtros desplegables](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% note %}

   **Note:** Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database)".

   {% endnote %}
3. Click an advisory to view details.{% ifversion GH-advisory-db-supports-malware %} By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.{% endif %}

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see "[Editing advisories from {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Viewing vulnerable repositories for {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In the local advisory database, you can see which repositories are affected by each security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. Para ver un repositorio vulnerable, debes tener acceso a las {% data variables.product.prodname_dependabot_alerts %} de este. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navega a `https://HOSTNAME/advisories`.
2. Haz clic en una asesoría.
3. En la parte superior de la página de la asesoría, haz clic en **Alertas del dependabot**. ![Las alertas del dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar la lista, utiliza la barra de búsqueda o los menús desplegables. El menú desplegable de "Organización" te permite filtrar las {% data variables.product.prodname_dependabot_alerts %} por propietario (organización o usuario). ![Barra de búsqueda y menús desplegables para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obtener más detalles sobre la asesoría y sobre cómo corregir el repositorio vulnerable, haz clic en el nombre del repositorio.

{% endif %}

## Leer más

- [Definición de MITRE de "vulnerabilidad"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
