---
title: Exploration des avis de sécurité dans la base de données GitHub Advisory
intro: 'Vous pouvez parcourir la {% data variables.product.prodname_advisory_database %} pour rechercher des avis sur les risques de sécurité dans les projets open source hébergés sur {% data variables.product.company_short %}.'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database
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
ms.openlocfilehash: 19c37d2a1a1101f9984de13cd034bb0ee5e285a8
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114019'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## Accès à un avis dans la {% data variables.product.prodname_advisory_database %}

Vous pouvez accéder à un avis dans la {% data variables.product.prodname_advisory_database %}.

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
## Accès à la base de données d’avis locale sur {% data variables.location.product_location %}

Si votre administrateur de site a activé {% data variables.product.prodname_github_connect %} pour {% data variables.location.product_location %}, vous pouvez également parcourir les avis révisés localement. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».

Vous pouvez utiliser votre base de données d’avis locale pour vérifier si une vulnérabilité de sécurité spécifique est incluse, et par conséquent, si vous obtenez des alertes pour les dépendances vulnérables. Vous pouvez également voir tous les dépôts vulnérables. 

1. Accédez à `https://HOSTNAME/advisories`.
2. Si vous le souhaitez, pour filtrer la liste, utilisez l’un des menus déroulants.
  ![Filtres déroulants](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Remarque :** Seuls les avis révisés seront listés. Les avis non révisés peuvent être consultés dans la {% data variables.product.prodname_advisory_database %} sur {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Accès à un avis dans la base de données d’avis GitHub](#accessing-an-advisory-in-the-github-advisory-database) ». 

   {% endnote %}
3. Cliquez sur un avis pour en voir les détails.{% ifversion GH-advisory-db-supports-malware %} Par défaut, vous verrez les avis révisés par {% data variables.product.company_short %} pour les vulnérabilités de sécurité. Pour voir les avis de programmes malveillants, utilisez `type:malware` dans la barre de recherche.{% endif %}

Vous pouvez également suggérer des améliorations pour tout avis directement de votre base de données d’avis locale. Pour plus d’informations, consultez « [Modification des avis depuis {% data variables.location.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance) ».

### Affichage des référentiel vulnérables pour {% data variables.location.product_location %}

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
