---
title: Modèles d’analyse des secrets
intro: 'Listes des secrets pris en charge et des partenaires avec lesquels {% data variables.product.company_short %} travaille pour empêcher l’utilisation frauduleuse de secrets commités accidentellement.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184503'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## À propos des modèles d’{% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} gère ces jeux de modèles différents de {% data variables.product.prodname_secret_scanning %} :

1. **Modèles de partenaires.** Utilisés pour détecter les secrets potentiels dans tous les dépôts publics. Pour plus d’informations, consultez « [Secrets pris en charge pour les modèles de partenaires](#supported-secrets-for-partner-patterns) ».
2. **Modèles de sécurité avancée.** Utilisés pour détecter les secrets potentiels dans les dépôts pour lesquels l’{% data variables.product.prodname_secret_scanning %} est activée. {% ifversion ghec %} Pour plus d’informations, consultez « [Secrets pris en charge pour la sécurité avancée](#supported-secrets-for-advanced-security) ».{% endif %}{% ifversion secret-scanning-push-protection %}
3. **Modèles de protection par émissions de données.** Utilisés pour détecter les secrets potentiels dans les référentiels avec {% data variables.product.prodname_secret_scanning %} en tant que protection par émissions de données. Pour plus d’informations, consultez « [Secrets pris en charge pour la protection par émission de données](#supported-secrets-for-push-protection) ». {% endif %}

{% ifversion fpt %} Les organisations utilisant {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_GH_advanced_security %} peuvent activer l’{% data variables.product.prodname_secret_scanning_GHAS %} sur leurs dépôts. Pour plus d’informations sur ces modèles, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Secrets pris en charge pour les modèles de partenaires

{% data variables.product.product_name %} analyse actuellement les secrets émis par les fournisseurs de services suivants dans les référentiels publics et alerte le fournisseur de services approprié chaque fois qu’un secret est détecté dans une validation. Pour plus d’informations sur l’{% data variables.product.prodname_secret_scanning_partner %}, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns) ».

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## Secrets pris en charge{% ifversion ghec %} pour la sécurité avancée{% endif %}

Quand l’{% data variables.product.prodname_secret_scanning_GHAS %} est activée, {% data variables.product.prodname_dotcom %} recherche les secrets émis par les fournisseurs de services suivants. {% ifversion ghec %}Pour plus d’informations sur l’{% data variables.product.prodname_secret_scanning_GHAS %}, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security) ».{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

Si vous utilisez l’API REST pour l’analyse des secrets, vous pouvez utiliser le `Secret type` pour signaler des secrets à partir d’émetteurs spécifiques. Pour plus d’informations, consultez « [Analyse des secrets](/enterprise-cloud@latest/rest/secret-scanning) ».
 
{% ifversion ghes or ghae or ghec %} {% note %}

**Remarque :** Vous pouvez également définir des modèles d’{% data variables.product.prodname_secret_scanning %} pour votre dépôt, votre organisation ou votre entreprise. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning) ».

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## Secrets pris en charge pour la protection par émission de données

L’{% data variables.product.prodname_secret_scanning_caps %} en tant que protection des poussées vérifie si les dépôts contiennent des secrets émis par les fournisseurs de services suivants.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »
- « [Maintenir votre compte et vos données sécurisés](/github/authenticating-to-github/keeping-your-account-and-data-secure) » {%- ifversion fpt or ghec %}
- « [Programme partenaire pour l’{% data variables.product.prodname_secret_scanning_caps %} ](/developers/overview/secret-scanning-partner-program) » {%- else %}
- « [Programme partenaire pour l’{% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program) » dans la documentation {% data variables.product.prodname_ghe_cloud %} {% endif %}
