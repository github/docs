---
title: Acerca de GitHub Advisory Database
intro: '{% data variables.product.prodname_advisory_database %} contiene una lista de las vulnerabilidades de seguridad {% ifversion GH-advisory-db-supports-malware %}y malware {% endif %}que se conocen, agrupados en dos categorías: avisos revisados por {% data variables.product.company_short %} y avisos sin revisar.'
miniTocMaxHeadingLevel: 3
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
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159081'
---
## Acerca de {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Los avisos de seguridad se publican como archivos JSON en el formato de vulnerabilidad de código abierto (OSV). Para obtener más información sobre el formato OSV, consulta "[Formato de vulnerabilidad de código abierto](https://ossf.github.io/osv-schema/)".

## Acerca de los tipos de avisos de seguridad

{% data reusables.advisory-database.beta-malware-advisories %}

Cada aviso en {% data variables.product.prodname_advisory_database %} se refiere a una vulnerabilidad en proyectos de código abierto{% ifversion GH-advisory-db-supports-malware %} o a software de código abierto malintencionado{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Por lo general, las vulnerabilidades en el código se introducen por accidente y se corrigen poco después de su detección. Debes actualizar el código para usar la versión corregida de la dependencia en cuanto esté disponible.

{% ifversion GH-advisory-db-supports-malware %}

Por el contrario, el software malintencionado o malware es código diseñado intencionalmente para que lleve a cabo funciones dañinas o no deseadas. El malware puede estar dirigido a hardware, software, datos confidenciales o usuarios de cualquier aplicación que utilice el malware. Debes quitar el malware del proyecto y buscar un reemplazo alternativo más seguro para la dependencia.

{% endif %}

### Avisos revisados por {% data variables.product.company_short %}

Los avisos revisados por {% data variables.product.company_short %} son vulnerabilidades de seguridad{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %} que se asignaron a paquetes en ecosistemas a los que brindamos soporte. Revisamos cuidadosamente la validez de cada aviso y nos aseguramos de que tengan una descripción completa e información tanto del ecosistema como del paquete.

Por lo general, asignamos a los ecosistemas compatibles un nombre en función del registro de paquetes asociado del lenguaje de programación de software. Revisamos los avisos si corresponden a una vulnerabilidad de un paquete proveniente de un registro compatible.

- Composer (registro: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registro: https://hex.pm/){% endif %}
- Go (registro: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- Acciones de GitHub (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registro: https://repo.maven.apache.org/maven2)
- npm (registro: https://www.npmjs.com/)
- NuGet (registro: https://www.nuget.org/)
- pip (registry: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (registro: https://pub.dev/packages/registry){% endif %}
- RubyGems (registro: https://rubygems.org/)
- Rust (registro: https://crates.io/)

Si tienes alguna sugerencia sobre un ecosistema nuevo para el que deberíamos brindar soporte técnico, abre una [incidencia](https://github.com/github/advisory-database/issues) para analizarla.

Si habilitas las {% data variables.product.prodname_dependabot_alerts %} para tu repositorio, recibirás una notificación automática cuando un aviso nuevo revisado por {% data variables.product.company_short %} informe de una vulnerabilidad {% ifversion GH-advisory-db-supports-malware %}o un malware{% endif %} en un paquete del que dependes. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Avisos sin revisar

Las asesorías sin revisar son vulnerabilidades de seguridad que publicamos automáticamente en la {% data variables.product.prodname_advisory_database %}, directamente desde la fuente de la Base de Datos Nacional de Vulnerabilidades. 

El {% data variables.product.prodname_dependabot %} no crea {% data variables.product.prodname_dependabot_alerts %} para las asesorías sin revisar, ya que este tipo de asesoría no se revisa en su validez o finalización.

## Acerca de la información en los avisos de seguridad

Cada aviso de seguridad contiene información sobre la vulnerabilidad{% ifversion GH-advisory-db-supports-malware %} o el malware{% endif %} que puede incluir la descripción, la gravedad, el paquete afectado, el ecosistema del paquete, las versiones afectadas y las versiones a las que se aplicaron revisiones, el impacto e información opcional como referencias, soluciones alternativas y créditos. Adicionalmente, las asesorías de la National Vulnerability Database contiene un enlace al registro de CVE, en donde puedes leer más sobre los detalles de la vulnerabilidad, su puntuación de CVSS y su nivel de severidad cualitativo. Para obtener más información, vea la "[Base de datos nacional de vulnerabilidades](https://nvd.nist.gov/)" del Instituto Nacional de Estándares y Tecnología.

El nivel de gravedad es uno de los cuatro niveles posibles definidos en el "[Sistema común de puntuación de vulnerabilidades (CVSS), sección 5](https://www.first.org/cvss/specification-document)".
- Bajo
- Medio/Moderado
- Alto
- Crítico

La {% data variables.product.prodname_advisory_database %} utiliza los niveles del CVSS tal como se describen anteriormente. Si {% data variables.product.company_short %} obtiene un CVE, la {% data variables.product.prodname_advisory_database %} utilizará el CVSS versión 3.1. Si se importa el CVE, la {% data variables.product.prodname_advisory_database %} será compatible tanto con la versión 3.0 como con la 3.1 del CVSS.

{% data reusables.repositories.github-security-lab %}

## Información adicional

- "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
- [Definición de MITRE de "vulnerabilidad"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
