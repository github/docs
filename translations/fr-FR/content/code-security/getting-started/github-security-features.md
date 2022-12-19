---
title: Fonctionnalités de sécurité de GitHub
intro: 'Vue d’ensemble des fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: a1daa40bc175bc92b0ed681e053b3f87204c2a84
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108776'
---
## À propos des fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} dispose de fonctionnalités de sécurité qui aident à sécuriser le code et les secrets dans les dépôts et au sein des organisations. {% data reusables.advanced-security.security-feature-availability %}

La {% data variables.product.prodname_advisory_database %} contient une liste organisée de vulnérabilités de sécurité que vous pouvez afficher, rechercher et filtrer. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Fonctionnalités disponibles pour tous les dépôts
### Stratégie de sécurité

Permettez à vos utilisateurs de signaler de manière confidentielle les vulnérabilités de sécurité qu’ils ont détectées dans votre dépôt. Pour plus d’informations, consultez « [Ajout d’une stratégie de sécurité à votre dépôt](/code-security/getting-started/adding-a-security-policy-to-your-repository) ».

{% ifversion fpt or ghec %}
### Avis de sécurité

Discutez des vulnérabilités de sécurité dans le code de votre dépôt et corrigez-les en privé. Vous pouvez ensuite publier un avis de sécurité pour alerter votre communauté sur la vulnérabilité et encourager les membres de la communauté à effectuer une mise à niveau. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} et mises à jour de sécurité

Affichez des alertes sur les dépendances connues pour contenir des vulnérabilités de sécurité et choisissez si des demandes de tirage (pull request) sont générées automatiquement pour mettre à jour ces dépendances. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) » et « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) ».
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Affichez des alertes sur les dépendances connues pour contenir des vulnérabilités de sécurité et gérez ces alertes. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Mises à jour de version {% data variables.product.prodname_dependabot %}

Utilisez {% data variables.product.prodname_dependabot %} pour déclencher automatiquement des demandes de tirage afin de maintenir vos dépendances à jour. Cela aide à réduire votre exposition aux versions antérieures des dépendances. L’utilisation de versions plus récentes facilite l’application de correctifs si des vulnérabilités de sécurité sont découvertes et facilite également le déclenchement de demandes de tirage par les {% data variables.product.prodname_dependabot_security_updates %} pour la mise à niveau des dépendances vulnérables. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates) ».
{% endif %}

### Graphe de dépendances
Le graphe de dépendances vous permet d’explorer les écosystèmes et les packages dont dépend votre dépôt ainsi que les dépôts et les packages qui dépendent de votre dépôt.

Vous trouverez le graphe de dépendances sous l’onglet **Insights** de votre dépôt. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».

{% ifversion security-overview-displayed-alerts %}
### Présentation de la sécurité

La vue d’ensemble de la sécurité vous permet de passer en revue les configurations et alertes de sécurité, ce qui facilite l’identification des référentiels et organisations qui courent le plus de risques. Pour plus d’informations, consultez « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ».

{% else %}
### Vue d’ensemble de la sécurité pour les dépôts
La vue d’ensemble de la sécurité montre quelles fonctions de sécurité sont activées pour le référentiel et vous permet de configurer toutes les fonctions de sécurité disponibles qui ne sont pas déjà activées.
{% endif %}

## Fonctionnalités disponibles avec {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %} Les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} suivantes sont disponibles et gratuites pour les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}. Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec une licence pour {% data variables.product.prodname_GH_advanced_security %} peuvent utiliser l’ensemble complet de fonctionnalités dans l’un de leurs dépôts. Pour obtenir la liste des fonctionnalités disponibles avec {% data variables.product.prodname_ghe_cloud %}, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %} De nombreuses fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} sont disponibles et gratuites pour les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}. Les organisations au sein d’une entreprise disposant d’une licence {% data variables.product.prodname_GH_advanced_security %} peuvent utiliser les fonctionnalités suivantes sur l’ensemble de leurs référentiels. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} Les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} sont disponibles pour les entreprises disposant d’une licence pour {% data variables.product.prodname_GH_advanced_security %}. Les fonctionnalités sont limitées aux dépôts appartenant à une organisation. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} Les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} sont disponibles pour les dépôts appartenant à une organisation. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Détectez automatiquement les vulnérabilités de sécurité et les erreurs de codage dans le code nouveau ou modifié. Les problèmes potentiels sont mis en surbrillance, avec des informations détaillées, ce qui vous permet de corriger le code avant qu’il ne soit fusionné dans votre branche par défaut. Pour plus d’informations, consultez « [À propos de l’analyse du code](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning) ».

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Détectez automatiquement les secrets divulgués dans tous les dépôts publics. {% data variables.product.company_short %} informe le fournisseur de services approprié que le secret peut être compromis. Pour plus d’informations sur les secrets et fournisseurs de services pris en charge, consultez « [Modèles d’{% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns) ».
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} Disponible uniquement avec une licence pour {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Détectez automatiquement les jetons ou les informations d’identification qui ont été archivés dans un dépôt. Vous pouvez afficher des alertes pour tous les secrets que {% data variables.product.company_short %} trouve dans votre code, afin que vous sachiez quels jetons ou informations d’identification traiter comme étant compromis. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security) ».
{% endif %}

### Vérification des dépendances

Montrez l’impact complet des modifications apportées aux dépendances et examinez les détails de toutes les versions vulnérables avant de fusionner une demande de tirage. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/about-dependency-review) ».

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Vue d’ensemble de la sécurité pour les organisations{% ifversion ghes > 3.4 or ghae > 3.4 %}, les entreprises{% endif %} et les équipes

Passez en revue la configuration et les alertes de sécurité pour votre organisation et identifiez les dépôts qui courent le plus de risques. Pour plus d’informations, consultez « [À propos de la vue d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ».
{% endif %}

## Pour aller plus loin
- « [Produits de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products) »
- « [Prise en charge des langages par {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support) »
