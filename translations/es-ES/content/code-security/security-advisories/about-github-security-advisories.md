---
title: Acerca de GitHub Security Advisories
intro: 'Puedes usar {% data variables.product.prodname_security_advisories %} para discutir, corregir y publicar información sobre vulnerabilidades de seguridad en tu repositorio.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
versions:
  free-pro-team: '*'
topics:
  - seguridad
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Acerca de {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} Para obtener más información, consulta la sección "[Acerca de la divulgación coordinada de las vulnerabilidades de seguridad](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)".

{% data reusables.security-advisory.security-advisory-overview %}

Con {% data variables.product.prodname_security_advisories %}, puedes:

1. Crear un borrador de asesoría de seguridad y utilizarlo para debatir de manera privada sobre el impacto de la vulnerabilidad en tu proyecto. Para obtener más información, consulta la sección "[Crear una asesoría de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)".
2. Colaborar en privado para solucionar la vulnerabilidad en una bifurcación privada temporaria.
3. Publica la asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad una vez que se lance el parche. Para obtener más información, consulta la sección "[Publicar una asesoría de seguridad](/github/managing-security-vulnerabilities/publishing-a-security-advisory)".

{% data reusables.repositories.security-advisories-republishing %}

Puedes dar crédito a los individuos que contribuyeron con una asesoría de seguridad. Para obtener más información, consulta la sección "

Editar una asesoría de seguridad".</p> 

{% data reusables.repositories.security-guidelines %}

Si creaste una asesoría de seguridad en tu repositorio, esta permanecerá en tu repositorio. Publicamos las asesorías de seguridad para cualquiera de los ecosistemas compatibles con la gráfica de dependencias de la {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories). Si una asesoría de seguridad es específicamente para npm, también la publicamos en las asesorías de seguridad de npm. Para obtener más información, consulta el sitio [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}



### Números de identificación CVE

Las {% data variables.product.prodname_security_advisories %} se construyen sobre las bases de la lista de Vulnerabilidades y Exposiciones Comunes (CVE, por sus siglas en inglés). El formato de asesoría de seguridad en {% data variables.product.prodname_dotcom %} es un formato estandarizado que coincide con el formato de descripción de CVE. 

{% data variables.product.prodname_dotcom %} es una Autoridad de Numeración de CVE (CNA, por sus siglas en inglés) y está autorizado para asignar números de identificación de CVE. Para obtener más información, consulta las secciones "[Acerca de CVE](https://cve.mitre.org/about/index.html)" y "[Autoridades de Numeración de CVE](https://cve.mitre.org/cve/cna.html)" en el sitio de CVE.

Cuando creas una asesoría de seguridad para un repositorio público en {% data variables.product.prodname_dotcom %}, tienes la opción de proporcionar un número de identificación de CVE para la vulnerabilidad de seguridad. {% data reusables.repositories.request-security-advisory-cve-id %}

Una vez que hayas publicado la asesoría de seguridad y que {% data variables.product.prodname_dotcom %} haya asignado un número de identificación CVE a la vulnerabilidad, {% data variables.product.prodname_dotcom %} publicará el CVE a la base de datos de MITRE. Para obtener más información, consulta la sección "[Publicar una asesoría de seguridad](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)".



### {% data variables.product.prodname_dependabot_alerts %} para las asesorías de seguridad publicadas

{% data reusables.repositories.github-reviews-security-advisories %}