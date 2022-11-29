---
title: Modification des avis de sécurité dans la base de données d’avis de GitHub
intro: 'Vous pouvez suggérer des améliorations pour un avis publié dans la {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database
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
shortTitle: Edit Advisory Database
ms.openlocfilehash: 7cfe2ff49c830922457ef5192ca0db7d326e1388
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114064'
---
## Modification des avis dans la {% data variables.product.prodname_advisory_database %}

Les avis de la {% data variables.product.prodname_advisory_database %} sont des avis de sécurité globaux. Pour plus d’informations sur les avis de sécurité globaux, consultez « [À propos des avis de sécurité globaux](/code-security/security-advisories/global-security-advisories/about-global-security-advisories) ».

Tout le monde peut suggérer des améliorations sur n’importe quel avis de sécurité global dans la {% data variables.product.prodname_advisory_database %}. Vous pouvez modifier ou ajouter les détails de votre choix, notamment les écosystèmes nouvellement affectés, le niveau de gravité ou la description des personnes affectées. L’équipe de curation de {% data variables.product.prodname_security %} examine les améliorations soumises et les publie dans la {% data variables.product.prodname_advisory_database %} si elles sont acceptées.
{% ifversion fpt or ghec %} Seuls les propriétaires et administrateurs de dépôt peuvent modifier les avis de sécurité au niveau du dépôt. Pour plus d’informations, consultez « [Modification d’un avis de sécurité de dépôt](/code-security/security-advisories/editing-a-security-advisory) ».{% endif %}


1. Accédez à https://github.com/advisories.
1. Sélectionnez l’avis de sécurité auquel vous souhaitez contribuer.
1. Sur le côté droit de la page, cliquez sur le lien **Suggérer des améliorations pour cette vulnérabilité**.
   
   ![Capture d’écran du lien Suggérer des améliorations](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. Dans le formulaire « Améliorer l’avis de sécurité », apportez les améliorations souhaitées. Vous pouvez modifier ou ajouter des détails.{% ifversion fpt or ghec %} Pour plus d’informations sur la spécification correcte des informations sur le formulaire, notamment les versions affectées, consultez « [Meilleures pratiques pour écrire des avis de sécurité de référentiel](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories) ».{% endif %}{% ifversion security-advisories-reason-for-change %}
1. Sous **Raison du changement**, expliquez pourquoi vous souhaitez apporter cette amélioration. Si vous incluez des liens vers des documents annexes, cela aide nos réviseurs.
   
   ![Capture d’écran du champ de raison de la modification](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. Quand vous avez terminé de modifier l’avis, cliquez sur **Envoyer les améliorations**.
1. Une fois vos améliorations envoyées, une demande de tirage (pull request) contenant vos modifications est créée pour révision dans [github/advisory-database](https://github.com/github/advisory-database) par l’équipe de curation de {% data variables.product.prodname_security %}. Si l’avis provient d’un dépôt {% data variables.product.prodname_dotcom %}, nous étiquetons également l’éditeur d’origine pour les commentaires facultatifs. Vous pouvez afficher la demande de tirage et obtenir des notifications quand elle est mise à jour ou fermée.

Vous pouvez également ouvrir une demande de tirage directement sur un fichier d’avis dans le dépôt [github/advisory-database](https://github.com/github/advisory-database). Pour plus d’informations, consultez les [instructions de contribution](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Modification des avis depuis {% data variables.location.product_location %}

Si {% data variables.product.prodname_github_connect %} est activé pour {% data variables.location.product_location %}, vous pouvez voir les avis en ajoutant `/advisories` à l’URL d’instance. 

1. Accédez à `https://HOSTNAME/advisories`.
2. Sélectionnez l’avis de sécurité auquel vous souhaitez contribuer.
3. Sur le côté droit de la page, cliquez sur **Suggérer des améliorations pour cette vulnérabilité sur {% data variables.product.prodname_dotcom_the_website %}.** . Un nouvel onglet s’ouvre avec le même avis de sécurité sur {% data variables.product.prodname_dotcom_the_website %}.
![Lien Suggérer des améliorations](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Modifiez l’avis en suivant les étapes quatre à six de la section « [Modification des avis dans la base de données d’avis de GitHub](#editing-advisories-in-the-github-advisory-database) » ci-dessus.
{% endif %}
