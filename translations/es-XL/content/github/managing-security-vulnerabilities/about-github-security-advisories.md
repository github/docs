---
title: Acerca de GitHub Security Advisories
intro: 'Puedes usar {{ site.data.variables.product.prodname_security_advisories }} para discutir, corregir y publicar información sobre vulnerabilidades de seguridad en tu repositorio.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.repositories.security-advisory-admin-permissions }}

{{ site.data.reusables.security-advisory.security-researcher-cannot-create-advisory }}

### Acerca de {{ site.data.variables.product.prodname_security_advisories }}

{{ site.data.variables.product.prodname_security_advisories }} permite a los mantenedores del repositorio discutir en privado y corregir una vulnerabilidad de seguridad en un proyecto. Después de colaborar en una corrección, los mantenedores del repositorio pueden publicar el aviso de seguridad para revelar públicamente la vulnerabilidad de seguridad a la comunidad del proyecto. Al publicar avisos de seguridad, los mantenedores de repositorios facilitan que su comunidad actualice las dependencias de los paquetes e investigue el impacto de las vulnerabilidades de seguridad.

Con {{ site.data.variables.product.prodname_security_advisories }}, puedes:

1. Crear un borrador de asesoría de seguridad y utilizarlo para debatir de manera privada sobre el impacto de la vulnerabilidad en tu proyecto.
2. Colaborar en privado para solucionar la vulnerabilidad en una bifurcación privada temporaria.
3. Publicar la asesoría de seguridad para enviar una alerta sobre la vulnerabilidad a tu comunidad.

{{ site.data.reusables.repositories.security-advisories-republishing }}

Para empezar, ve "[Creando un aviso de seguridad](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

Puedes dar crédito a los individuos que contribuyeron con una asesoría de seguridad. Para obtener más información, consulta la sección "

Editar una asesoría de seguridad".</p> 

{{ site.data.reusables.repositories.security-guidelines }}

{{ site.data.reusables.repositories.github-security-lab }}



### Números de identificación CVE

Las {{ site.data.variables.product.prodname_security_advisories }} se construyen sobre las bases de la lista de Vulnerabilidades y Exposiciones Comunes (CVE, por sus siglas en inglés). {{ site.data.variables.product.prodname_dotcom }} es una Autoridad de Numeración de CVE (CNA, por sus siglas en inglés) y está autorizado para asignar números de identificación de CVE. Para obtener más información, consulta las secciones "[Acerca de CVE](https://cve.mitre.org/about/index.html)" y "[Autoridades de Numeración de CVE](https://cve.mitre.org/cve/cna.html)" en el sitio de CVE.

Cuando creas una asesoría de seguridad para un repositorio público en {{ site.data.variables.product.prodname_dotcom }}, tienes la opción de proporcionar un número de identificación de CVE para la vulnerabilidad de seguridad. {{ site.data.reusables.repositories.request-security-advisory-cve-id }}

Una vez que hayas publicado la asesoría de seguridad y que {{ site.data.variables.product.prodname_dotcom }} haya asignado un número de identificación CVE a la vulnerabilidad, {{ site.data.variables.product.prodname_dotcom }} publicará el CVE a la base de datos de MITRE. Para obtener más información, consulta la sección "[Publicar una asesoría de seguridad](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)".



### {{ site.data.variables.product.prodname_dependabot_alerts }} para las asesorías de seguridad publicadas

{{ site.data.reusables.repositories.github-reviews-security-advisories }}
