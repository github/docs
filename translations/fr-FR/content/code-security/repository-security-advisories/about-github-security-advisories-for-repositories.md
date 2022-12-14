---
title: À propos des avis de sécurité GitHub pour les dépôts
intro: Vous pouvez utiliser des {% data variables.product.prodname_security_advisories %} pour discuter en privé, corriger et publier des informations sur les vulnérabilités de sécurité dans votre dépôt.
redirect_from:
- /articles/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-github-security-advisories
- /code-security/security-advisories/about-github-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
- CVEs
shortTitle: Repository security advisories
ms.openlocfilehash: 5c8ad99a2bee30f52a185fa15421bc6b23429fbf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085458"
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## À propos des {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} Pour plus d’informations, consultez « [À propos de la divulgation coordonnée des vulnérabilités de sécurité](/code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities) ».

{% data reusables.security-advisory.security-advisory-overview %}

Avec les {% data variables.product.prodname_security_advisories %}, vous pouvez :

1. Créer un brouillon d’avis de sécurité et l’utiliser pour discuter en privé de l’impact de la vulnérabilité sur votre projet. Pour plus d’informations, consultez « [Création d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/creating-a-repository-security-advisory) ».
2. Collaborer en privé pour corriger la vulnérabilité dans une duplication (fork) privée temporaire.
3. Publier l’avis de sécurité pour alerter votre communauté de la vulnérabilité une fois qu’un correctif est publié. Pour plus d’informations, consultez « [Publication d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/publishing-a-repository-security-advisory) ».

{% data reusables.repositories.security-advisories-republishing %}

Vous pouvez créditer les personnes qui ont contribué à un avis de sécurité. Pour plus d’informations, consultez « [Modification d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories) ».

{% data reusables.repositories.security-guidelines %}

Si vous avez créé un avis de sécurité dans votre dépôt, il est destiné à y demeurer. Nous publions des avis de sécurité pour tous les écosystèmes pris en charge par le graphe de dépendances dans la {% data variables.product.prodname_advisory_database %} sur [github.com/advisories](https://github.com/advisories). Toute personne peut soumettre une modification pour un avis publié dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database) ».

Si un avis de sécurité concerne spécifiquement npm, nous le publions également dans les avis de sécurité npm. Pour plus d’informations, consultez [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## Numéros d’identification CVE

Les {% data variables.product.prodname_security_advisories %} s’appuient sur la liste des CVE (Common Vulnerabilities and Exposures). Le formulaire d’avis de sécurité sur {% data variables.product.prodname_dotcom %} est un formulaire standardisé qui correspond au format de description d’un CVE. 

{% data variables.product.prodname_dotcom %} est une autorité de numérotation CVE (CNA) et est autorisé à affecter des numéros d’identification CVE. Pour plus d’informations, consultez « [À propos de CVE](https://www.cve.org/About/Overview) » et « [Autorités de numérotation CVE](https://www.cve.org/ProgramOrganization/CNAs) » sur le site web CVE.

Quand vous créez un avis de sécurité pour un dépôt public sur {% data variables.product.prodname_dotcom %}, vous avez la possibilité de fournir un numéro d’identification CVE existant pour la vulnérabilité de sécurité. {% data reusables.repositories.request-security-advisory-cve-id %}

Une fois que vous avez publié l’avis de sécurité et que {% data variables.product.prodname_dotcom %} a attribué un numéro d’identification CVE à la vulnérabilité, {% data variables.product.prodname_dotcom %} publie le CVE dans la base de données MITRE.
Pour plus d’informations, consultez « [Publication d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/publishing-a-repository-security-advisory) ».

## {% data variables.product.prodname_dependabot_alerts %} pour les avis de sécurité publiés

{% data reusables.repositories.github-reviews-security-advisories %}
