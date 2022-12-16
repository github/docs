---
title: Exploration des vulnérabilités de sécurité dans la base de données d’avis de GitHub
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104618"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>À propos des vulnérabilités de sécurité

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>À propos de la {% data variables.product.prodname_advisory_database %}

La {% data variables.product.prodname_advisory_database %} contient une liste de vulnérabilités de sécurité connues, regroupées en deux catégories : avis révisés par {% data variables.product.company_short %} et avis non révisés.

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>À propos des avis révisés par {% data variables.product.company_short %}

Les avis révisés par {% data variables.product.company_short %} sont des vulnérabilités de sécurité qui ont été mappées aux packages suivis par le graphe de dépendances de {% data variables.product.company_short %}.

Nous examinons attentivement chaque avis pour déterminer s’il est valide. Chaque avis révisé par {% data variables.product.company_short %} a une description complète et contient à la fois des informations sur l’écosystème et les packages.

Si vous activez les {% data variables.product.prodname_dependabot_alerts %} pour vos dépôts, vous êtes automatiquement averti quand un nouvel avis révisé par {% data variables.product.company_short %} affecte les packages dont vous dépendez. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ».

### <a name="about-unreviewed-advisories"></a>À propos des avis non révisés

Les avis non révisés sont des vulnérabilités de sécurité que nous publions automatiquement dans la {% data variables.product.prodname_advisory_database %}, directement à partir du flux de la National Vulnerability Database. 

{% data variables.product.prodname_dependabot %} ne crée pas d’{% data variables.product.prodname_dependabot_alerts %} pour les avis non révisés, car ce type d’avis n’est pas vérifié du point de vue de la validité ou de l’achèvement.

## <a name="about-security-advisories"></a>À propos des avis de sécurité

Chaque avis de sécurité contient des informations sur la vulnérabilité, qui peuvent inclure la description, la gravité, le package affecté, l’écosystème de package, les versions affectées et les versions corrigées, l’impact ainsi que des informations facultatives telles que les références, les solutions de contournement et les crédits. En outre, les avis de la liste de la National Vulnerability Database contiennent un lien vers l’enregistrement CVE, où vous pouvez lire plus d’informations sur la vulnérabilité, ses scores CVSS et son niveau de gravité qualitative. Pour plus d’informations, consultez la « [National Vulnerability Database](https://nvd.nist.gov/) » du National Institute of Standards and Technology.

Le niveau de gravité est l’un des quatre niveaux possibles définis dans la [section 5  du CVSS (Common Vulnerability Scoring System)](https://www.first.org/cvss/specification-document).
- Faible
- Moyen/modéré
- Élevé
- Critique

La {% data variables.product.prodname_advisory_database %} utilise les niveaux CVSS décrits ci-dessus. Si {% data variables.product.company_short %} obtient un CVE, la {% data variables.product.prodname_advisory_database %} utilise CVSS version 3.1. Si le CVE est importé, la {% data variables.product.prodname_advisory_database %} prend en charge les versions 3.0 et 3.1 de CVSS.

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Accès à un avis dans la {% data variables.product.prodname_advisory_database %}

1. Accédez à https://github.com/advisories.
2. Si vous le souhaitez, pour filtrer la liste, utilisez l’un des menus déroulants.
  ![Filtres déroulants](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Conseil :** Vous pouvez utiliser la barre latérale de gauche pour explorer séparément les avis révisés par {% data variables.product.company_short %} et les avis non révisés.

   {% endtip %}
3. Cliquez sur un avis pour voir les informations correspondantes.

{% note %}

La base de données est également accessible avec l’API GraphQL. Pour plus d’informations, consultez l’[événement de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory).

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Modification d’un avis dans la {% data variables.product.prodname_advisory_database %}
Vous pouvez suggérer des améliorations pour un avis dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database) ».

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Recherche dans la {% data variables.product.prodname_advisory_database %}

Vous pouvez effectuer une recherche dans la base de données et utiliser des qualificateurs pour l’affiner. Par exemple, vous pouvez rechercher des avis créés à une certaine date, dans un écosystème spécifique ou dans une bibliothèque particulière.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur  | Exemple |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) affiche les avis révisés par {% data variables.product.company_short %}. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) affiche les avis non révisés. |
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

## <a name="viewing-your-vulnerable-repositories"></a>Affichage de vos dépôts vulnérables

Pour tout avis révisé par {% data variables.product.company_short %} dans la {% data variables.product.prodname_advisory_database %}, vous pouvez voir quels dépôts sont affectés par cette vulnérabilité de sécurité. Pour voir un dépôt vulnérable, vous devez avoir accès aux {% data variables.product.prodname_dependabot_alerts %} pour ce dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts) ».

1. Accédez à https://github.com/advisories.
2. Cliquez sur un avis.
3. En haut de la page de l’avis, cliquez sur **Alertes Dependabot**.
   ![Alertes Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Si vous le souhaitez, pour filtrer la liste, utilisez la barre de recherche ou les menus déroulants. Le menu déroulant « Organisation » vous permet de filtrer les {% data variables.product.prodname_dependabot_alerts %} par propriétaire (organisation ou utilisateur).
   ![Barre de recherche et menus déroulants pour filtrer les alertes](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Pour plus d’informations sur la vulnérabilité et pour obtenir des conseils sur la façon de corriger le dépôt vulnérable, cliquez sur le nom du dépôt.

## <a name="further-reading"></a>Pour aller plus loin

- [Définition de « vulnérabilité »](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) selon MITRE
