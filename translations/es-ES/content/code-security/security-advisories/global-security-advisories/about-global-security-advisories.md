---
title: Acerca de las asesorías de seguridad global
intro: 'La base de datos de seguridad global reside en el {% data variables.product.prodname_advisory_database %}, que contiene CVE y asesorías de seguridad originadas por {% data variables.product.company_short %} que afectan al mundo de código abierto. Puedes contribuir a mejorar las asesorías globales.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114089'
---
## Acerca de las asesorías de seguridad global

{% ifversion fpt or ghec %}Hay dos tipos de asesorías: asesorías de seguridad globales y asesorías de seguridad de repositorio. Para más información acerca de las asesorías de seguridad de repositorio, consulta "[Acerca de las asesorías de seguridad de repositorio](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)".{% endif %}

Las asesorías de seguridad globales se agrupan en dos categorías: asesorías revisadas por {% data variables.product.company_short %} y asesorías no revisadas.
- Los avisos revisados por {% data variables.product.company_short %} son vulnerabilidades de seguridad{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %} que se asignaron a paquetes en ecosistemas a los que brindamos soporte.
- Las asesorías sin revisar son vulnerabilidades de seguridad que publicamos automáticamente en la {% data variables.product.prodname_advisory_database %}, directamente desde la fuente de la Base de Datos Nacional de Vulnerabilidades. 

Para más información sobre {% data variables.product.prodname_advisory_database %}, consulta "[Acerca de {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database)".

{% data reusables.security-advisory.global-advisories %}

El equipo de curación de {% data variables.product.prodname_security %} revisa cada asesoría de repositorio para considerarlo como asesoría global. Publicamos avisos de seguridad para todos los ecosistemas compatibles con el gráfico de dependencias en la {% data variables.product.prodname_advisory_database %} en [github.com/advisories](https://github.com/advisories).

Puedes acceder a una asesoría en la {% data variables.product.prodname_advisory_database %}. Para más información, consulta "[Exploración de las asesorías de seguridad en GitHub Advisory Database](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database)".

Puedes sugerir mejoras a cualquier asesoría en la {% data variables.product.prodname_advisory_database %}. Para más información, vea "[Edición de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".
