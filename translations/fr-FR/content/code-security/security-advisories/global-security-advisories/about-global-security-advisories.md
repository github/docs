---
title: À propos des avis de sécurité globaux
intro: 'La base de données de sécurité globale réside dans le {% data variables.product.prodname_advisory_database %}, qui contient des CVE et des avis de sécurité {% data variables.product.company_short %} affectant le monde open source. Vous pouvez contribuer à améliorer les avis globaux.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114022'
---
## À propos des avis de sécurité globaux

{% ifversion fpt or ghec %}Il existe deux types d’avis : les avis de sécurité globaux et les avis de sécurité des référentiels. Pour plus d’informations sur les avis de sécurité des référentiels, consultez « [À propos des avis de sécurité des référentiels](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories). »{% endif %}

Les avis de sécurité globaux sont regroupés en deux catégories : les avis révisés et les avis non révisés {% data variables.product.company_short %}.
- Les avis révisés par {% data variables.product.company_short %} sont des vulnérabilités de sécurité{% ifversion GH-advisory-db-supports-malware %} ou des programmes malveillants{% endif %} qui ont été associés à des packages dans les écosystèmes que nous prenons en charge.
- Les avis non révisés sont des vulnérabilités de sécurité que nous publions automatiquement dans la {% data variables.product.prodname_advisory_database %}, directement à partir du flux de la National Vulnerability Database. 

Pour plus d’informations sur la {% data variables.product.prodname_advisory_database %}, consultez « [À propos de {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database) ».

{% data reusables.security-advisory.global-advisories %}

Chaque avis de référentiel est examiné par l’équipe de curation {% data variables.product.prodname_security %} afin d’être pris en compte comme un avis global. Nous publions des avis de sécurité pour tous les écosystèmes pris en charge par le graphe de dépendances dans la {% data variables.product.prodname_advisory_database %} sur [github.com/advisories](https://github.com/advisories).

Vous pouvez accéder à un avis dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Exploration des avis de sécurité dans la base de données GitHub Advisory](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database). »

Vous pouvez suggérer des améliorations pour un avis dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [Modification des avis de sécurité dans la {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database) ».
