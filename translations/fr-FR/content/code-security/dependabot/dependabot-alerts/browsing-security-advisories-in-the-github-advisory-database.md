---
title: Exploration des avis de sécurité dans la base de données GitHub Advisory
intro: Vous pouvez parcourir la {% data variables.product.prodname_advisory_database %} pour rechercher des avis sur les risques de sécurité dans les projets open source hébergés sur {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
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
ms.openlocfilehash: 816d610c40a7551190a510a37a88dbe3de978dac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147783150"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## À propos de la {% data variables.product.prodname_advisory_database %}

La {% data variables.product.prodname_advisory_database %} contient une liste de vulnérabilités de sécurité {% ifversion GH-advisory-db-supports-malware %}et de programmes malveillants {% endif %}connus, regroupés en deux catégories : avis révisés par {% data variables.product.company_short %} et avis non révisés.

{% data reusables.repositories.tracks-vulnerabilities %}

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
- Go (registre : https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registre : https://repo.maven.apache.org/maven2)
- npm (registre : https://www.npmjs.com/)
- NuGet (registre : https://www.nuget.org/)
- pip (registre : https://pypi.org/)
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

## Accès à un avis dans la {% data variables.product.prodname_advisory_database %}

1. Accédez à https://github.com/advisories.
2. Si vous le souhaitez, pour filtrer la liste, utilisez l’un des menus déroulants.
  ![Filtres déroulants](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Conseil :** Vous pouvez utiliser la barre latérale de gauche pour explorer séparément les avis révisés par {% data variables.product.company_short %} et les avis non révisés.

   {% endtip %}
3. Cliquez sur un avis pour en voir les détails. Par défaut, vous verrez les avis révisés par {% data variables.product.company_short %} pour les vulnérabilités de sécurité. {% ifversion GH-advisory-db-supports-malware %} Pour afficher les avis sur les programmes malveillants, utilisez `type:malware` dans la barre de recherche.{% endif %}


{% note %}

La base de données est également accessible avec l’API GraphQL. {% ifversion GH-advisory-db-supports-malware %}Par défaut, les requêtes retournent les avis révisés par {% data variables.product.company_short %} pour les vulnérabilités de sécurité, sauf si vous spécifiez `type:malware`.{% endif %} Pour plus d’informations, consultez « [l’événement webhook `security_advisory`](/webhooks/event-payloads/#security_advisory) ».

{% endnote %}

## Modification d’un avis dans la {% data variables.product.prodname_advisory_database %}
Vous pouvez suggérer des améliorations pour un avis dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database) ».

## Recherche dans la {% data variables.product.prodname_advisory_database %}

Vous pouvez effectuer une recherche dans la base de données et utiliser des qualificateurs pour l’affiner. Par exemple, vous pouvez rechercher des avis créés à une certaine date, dans un écosystème spécifique ou dans une bibliothèque particulière.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur  | Exemple |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) affiche les avis révisés par {% data variables.product.company_short %} pour les vulnérabilités de sécurité. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) affiche les avis révisés par {% data variables.product.company_short %} pour les programmes malveillants. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) affiche les avis non révisés. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) affiche l’avis avec cet ID de la {% data variables.product.prodname_advisory_database %}. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) affiche l’avis avec ce numéro d’ID de CVE. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) affiche uniquement les avis affectant les packages NPM. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) affiche uniquement les avis avec un niveau de gravité élevé. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) affiche uniquement les avis affectant la bibliothèque lodash. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) affiche uniquement les avis portant ce numéro CWE. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) affiche uniquement les avis crédités au compte d’utilisateur « octocat ». |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) trie les avis en montrant d’abord les plus anciens. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) trie les avis en montrant d’abord les plus récents. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) effectue un tri par date de mise à jour la moins récente. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) effectue un tri par date de mise à jour la plus récente. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) affiche uniquement les avis qui ont été retirés. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) affiche uniquement les avis créés à cette date. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) affiche uniquement les avis mis à jour à cette date. |

## Affichage de vos dépôts vulnérables

Pour tout avis révisé par {% data variables.product.company_short %} dans la {% data variables.product.prodname_advisory_database %}, vous pouvez voir quels sont vos dépôts affectés par cette vulnérabilité de sécurité{% ifversion GH-advisory-db-supports-malware %} ou ce programme malveillant{% endif %}. Pour voir un dépôt vulnérable, vous devez avoir accès aux {% data variables.product.prodname_dependabot_alerts %} pour ce dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts) ».

1. Accédez à https://github.com/advisories.
2. Cliquez sur un avis.
3. En haut de la page de l’avis, cliquez sur **Alertes Dependabot**.
   ![Alertes Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Si vous le souhaitez, pour filtrer la liste, utilisez la barre de recherche ou les menus déroulants. Le menu déroulant « Organisation » vous permet de filtrer les {% data variables.product.prodname_dependabot_alerts %} par propriétaire (organisation ou utilisateur).
   ![Barre de recherche et menus déroulants pour filtrer les alertes](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Pour plus d’informations sur l’avis et pour obtenir des conseils sur la façon de corriger le dépôt vulnérable, cliquez sur le nom du dépôt.

{% ifversion security-advisories-ghes-ghae %}
## Accès à la base de données d’avis locale sur {% data variables.product.product_location %}

Si votre administrateur de site a activé {% data variables.product.prodname_github_connect %} pour {% data variables.product.product_location %}, vous pouvez aussi parcourir les avis révisés localement. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».

Vous pouvez utiliser votre base de données d’avis locale pour vérifier si une vulnérabilité de sécurité spécifique est incluse, et par conséquent, si vous obtenez des alertes pour les dépendances vulnérables. Vous pouvez également voir tous les dépôts vulnérables. 

1. Accédez à `https://HOSTNAME/advisories`.
2. Si vous le souhaitez, pour filtrer la liste, utilisez l’un des menus déroulants.
  ![Filtres déroulants](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Remarque :** Seuls les avis révisés seront listés. Les avis non révisés peuvent être consultés dans la {% data variables.product.prodname_advisory_database %} sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Accès à un avis dans la base de données d’avis GitHub](#accessing-an-advisory-in-the-github-advisory-database) ». 

   {% endnote %}
3. Cliquez sur un avis pour en voir les détails.{% ifversion GH-advisory-db-supports-malware %} Par défaut, vous verrez les avis révisés par {% data variables.product.company_short %} pour les vulnérabilités de sécurité. Pour voir les avis de programmes malveillants, utilisez `type:malware` dans la barre de recherche.{% endif %}

Vous pouvez également suggérer des améliorations pour tout avis directement de votre base de données d’avis locale. Pour plus d’informations, consultez « [Modification des avis depuis {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance) ».

### Affichage des dépôts vulnérables pour {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

Dans la base de données d’avis locale, vous pouvez voir quels dépôts sont affectés par chaque vulnérabilité de sécurité{% ifversion GH-advisory-db-supports-malware %} ou de programme malveillant{% endif %}. Pour voir un dépôt vulnérable, vous devez avoir accès aux {% data variables.product.prodname_dependabot_alerts %} pour ce dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts) ».

1. Accédez à `https://HOSTNAME/advisories`.
2. Cliquez sur un avis.
3. En haut de la page de l’avis, cliquez sur **Alertes Dependabot**.
   ![Alertes Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Si vous le souhaitez, pour filtrer la liste, utilisez la barre de recherche ou les menus déroulants. Le menu déroulant « Organisation » vous permet de filtrer les {% data variables.product.prodname_dependabot_alerts %} par propriétaire (organisation ou utilisateur).
   ![Barre de recherche et menus déroulants pour filtrer les alertes](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Pour plus d’informations sur l’avis et pour obtenir des conseils sur la façon de corriger le dépôt vulnérable, cliquez sur le nom du dépôt.

{% endif %}

## Pour aller plus loin

- [Définition de « vulnérabilité »](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) selon MITRE
