---
title: À propos de la base de données GitHub Advisory
intro: "La {% data variables.product.prodname_advisory_database %} contient une liste de vulnérabilités de sécurité {% ifversion GH-advisory-db-supports-malware %}et de programmes malveillants {% endif %}connus, regroupés en deux catégories\_: avis révisés par {% data variables.product.company_short %} et avis non révisés."
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159076'
---
## À propos de la {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Les avis de sécurité sont publiés sous forme de fichiers JSON au format OSV (Open Source Vulnerability). Pour plus d’informations sur le format OSV, consultez « [Format Open Source Vulnerability](https://ossf.github.io/osv-schema/) ».

## À propos des types d’avis de sécurité

{% data reusables.advisory-database.beta-malware-advisories %}

Chaque avis dans la {% data variables.product.prodname_advisory_database %} concerne une vulnérabilité dans les projets open source{% ifversion GH-advisory-db-supports-malware %} ou des logiciels open source malveillants{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Les vulnérabilités dans le code sont généralement introduites par accident et corrigées peu après leur découverte. Vous devez mettre à jour votre code pour utiliser la version corrigée de la dépendance dès qu’elle est disponible.

{% ifversion GH-advisory-db-supports-malware %}

En revanche, les logiciels malveillants ou les programmes malveillants sont du code qui est intentionnellement conçu pour exécuter des fonctions indésirables ou dangereuses. Les programmes malveillants peuvent cibler du matériel, des logiciels, des données confidentielles ou des utilisateurs d’une application qui les utilise. Vous devez supprimer les programmes malveillants de votre projet et trouver une alternative plus sécurisée pour la dépendance.

{% endif %}

### Avis révisés par {% data variables.product.company_short %}

Les avis révisés par {% data variables.product.company_short %} sont des vulnérabilités de sécurité{% ifversion GH-advisory-db-supports-malware %} ou des programmes malveillants{% endif %} qui ont été associés à des packages dans les écosystèmes que nous prenons en charge. Nous examinons attentivement tous les avis pour en vérifier la validité et nous assurons qu’ils disposent d’une description complète, et contiennent des informations à la fois sur l’écosystème et les packages.

En règle générale, nous nommons nos écosystèmes pris en charge d’après le registre de packages associé du langage de programmation logicielle. Nous examinons les avis s’ils concernent une vulnérabilité dans un package provenant d’un registre pris en charge.

- Composer (registre : https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registre : https://hex.pm/){% endif %}
- Go (registre : https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registre : https://repo.maven.apache.org/maven2)
- npm (registre : https://www.npmjs.com/)
- NuGet (registre : https://www.nuget.org/)
- pip (registre : https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (registre : https://pub.dev/packages/registry){% endif %}
- RubyGems (registre : https://rubygems.org/)
- Rust (registre : https://crates.io/)

Si vous avez une suggestion pour un nouvel écosystème que nous devrions prendre en charge, ouvrez un [problème](https://github.com/github/advisory-database/issues) pour en discuter.

Si vous activez les {% data variables.product.prodname_dependabot_alerts %} pour vos dépôts, vous êtes automatiquement averti quand un nouvel avis révisé par {% data variables.product.company_short %} signale une vulnérabilité {% ifversion GH-advisory-db-supports-malware %}ou un programme malveillant{% endif %} pour un package dont vous dépendez. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ».

### Avis non révisés

Les avis non révisés sont des vulnérabilités de sécurité que nous publions automatiquement dans la {% data variables.product.prodname_advisory_database %}, directement à partir du flux de la National Vulnerability Database. 

{% data variables.product.prodname_dependabot %} ne crée pas d’{% data variables.product.prodname_dependabot_alerts %} pour les avis non révisés, car ce type d’avis n’est pas vérifié du point de vue de la validité ou de l’achèvement.

## À propos des informations dans les avis de sécurité

Chaque avis de sécurité contient des informations sur la vulnérabilité{% ifversion GH-advisory-db-supports-malware %} ou le programme malveillant,{% endif %} qui peuvent inclure la description, la gravité, le package affecté, l’écosystème de package, les versions affectées et les versions corrigées, l’impact ainsi que des informations facultatives telles que les références, les solutions de contournement et les crédits. En outre, les avis de la liste de la National Vulnerability Database contiennent un lien vers l’enregistrement CVE, où vous pouvez lire plus d’informations sur la vulnérabilité, ses scores CVSS et son niveau de gravité qualitative. Pour plus d’informations, consultez la « [National Vulnerability Database](https://nvd.nist.gov/) » du National Institute of Standards and Technology.

Le niveau de gravité est l’un des quatre niveaux possibles définis dans la [section 5  du CVSS (Common Vulnerability Scoring System)](https://www.first.org/cvss/specification-document).
- Faible
- Moyen/modéré
- Élevé
- Critique

La {% data variables.product.prodname_advisory_database %} utilise les niveaux CVSS décrits ci-dessus. Si {% data variables.product.company_short %} obtient un CVE, la {% data variables.product.prodname_advisory_database %} utilise CVSS version 3.1. Si le CVE est importé, la {% data variables.product.prodname_advisory_database %} prend en charge les versions 3.0 et 3.1 de CVSS.

{% data reusables.repositories.github-security-lab %}

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) »
- [Définition de « vulnérabilité »](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) selon MITRE
