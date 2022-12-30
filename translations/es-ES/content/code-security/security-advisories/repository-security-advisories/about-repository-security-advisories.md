---
title: Acerca de las asesorías de seguridad de repositorio
intro: 'Puedes usar asesorías de seguridad del repositorio para debatir de forma privada, corregir y publicar información acerca de las vulnerabilidades de seguridad en tu repositorio.'
shortTitle: About repository security advisories
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
  - /code-security/security-advisories/about-github-security-advisories
  - /code-security/repository-security-advisories/about-github-security-advisories-for-repositories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 562969ec29feda0901b79f8b6e2cb9cdb390ea56
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158825'
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Acerca de las asesorías de seguridad de repositorio

{% data reusables.security-advisory.disclosing-vulnerabilities %} Para más información, vea "[Acerca de la divulgación coordinada de vulnerabilidades de seguridad](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities)".

{% data reusables.security-advisory.security-advisory-overview %}

Con las asesorías de seguridad de repositorio, puedes hacer lo siguiente:

1. Crear un borrador de asesoría de seguridad y utilizarlo para debatir de manera privada sobre el impacto de la vulnerabilidad en tu proyecto. Para más información, vea "[Creación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/creating-a-repository-security-advisory)".
2. Colaborar en privado para solucionar la vulnerabilidad en una bifurcación privada temporaria.
3. Publica la asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad una vez que se lance el parche. Para más información, vea "[Publicación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)".

{% data reusables.repositories.security-advisories-republishing %}

Puedes dar crédito a los individuos que contribuyeron con una asesoría de seguridad. Para más información, vea "[Edición de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)".

{% data reusables.repositories.security-guidelines %}

Si creaste una asesoría de seguridad en tu repositorio, esta permanecerá en tu repositorio. Publicamos avisos de seguridad para todos los ecosistemas compatibles con el gráfico de dependencias en la {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories). Cualquiera puede enviar un cambio de un aviso publicado en {% data variables.product.prodname_advisory_database %}. Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

Si una asesoría de seguridad es específicamente para npm, también la publicamos en las asesorías de seguridad de npm. Para más información, vea [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## Números de identificación CVE

Las {% data variables.product.prodname_security_advisories %} se construyen sobre las bases de la lista de Vulnerabilidades y Exposiciones Comunes (CVE, por sus siglas en inglés). El formato de asesoría de seguridad en {% data variables.product.prodname_dotcom %} es un formato estandarizado que coincide con el formato de descripción de CVE. 

{% data variables.product.prodname_dotcom %} es una Autoridad de Numeración de CVE (CNA, por sus siglas en inglés) y está autorizado para asignar números de identificación de CVE. Para más información, vea "[Acerca de CVE](https://www.cve.org/About/Overview)" y "[Entidades de numeración de CVE](https://www.cve.org/ProgramOrganization/CNAs)" en el sitio web de CVE.

Cuando creas una asesoría de seguridad para un repositorio público en {% data variables.product.prodname_dotcom %}, tienes la opción de proporcionar un número de identificación de CVE para la vulnerabilidad de seguridad. {% data reusables.repositories.request-security-advisory-cve-id %}

Una vez que hayas publicado la asesoría de seguridad y que {% data variables.product.prodname_dotcom %} haya asignado un número de identificación CVE a la vulnerabilidad, {% data variables.product.prodname_dotcom %} publicará el CVE a la base de datos de MITRE.
Para más información, vea "[Publicación de un aviso de seguridad de repositorio](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)".

## {% data variables.product.prodname_dependabot_alerts %} para las asesorías de seguridad publicadas

{% data reusables.repositories.github-reviews-security-advisories %}
