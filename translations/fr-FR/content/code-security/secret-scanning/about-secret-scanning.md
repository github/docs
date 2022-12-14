---
title: À propos de l’analyse des secrets
intro: '{% data variables.product.product_name %} analyse les types de secrets connus dans les dépôts pour éviter une utilisation frauduleuse des secrets validés accidentellement.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192944'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## À propos de l’{% data variables.product.prodname_secret_scanning %}

Si votre projet communique avec un service externe, vous pouvez utiliser un jeton ou une clé privée pour l’authentification. Les jetons et les clés privées sont des exemples de secrets qu’un fournisseur de services peut émettre. Si vous archivez un secret dans un dépôt, toute personne disposant d’un accès en lecture au dépôt peut l’utiliser pour accéder au service externe avec vos privilèges. Nous vous recommandons de stocker les secrets dans un emplacement dédié et sécurisé en dehors du dépôt de votre projet.

L’{% data variables.product.prodname_secret_scanning_caps %} recherche les secrets dans l’ensemble de votre historique Git sur toutes les branches présentes dans votre dépôt {% data variables.product.prodname_dotcom %}{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, même si le dépôt est archivé{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion fpt or ghec %} L’{% data variables.product.prodname_secret_scanning_caps %} est disponible sur {% data variables.product.prodname_dotcom_the_website %} sous deux formes :

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** S’exécute automatiquement sur tous les dépôts publics. Toutes les chaînes qui correspondent aux modèles fournis par les partenaires d’analyse des secrets sont signalées directement au partenaire approprié.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}Des organisations utilisant {% data variables.product.prodname_ghe_cloud %} avec une licence pour {% data variables.product.prodname_GH_advanced_security %} peuvent activer et configurer une analyse supplémentaire pour des dépôts appartenant à l’organisation.{% elsif ghec %}Vous pouvez activer et configurer une analyse supplémentaire pour des dépôts appartenant à des organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et disposent d’une licence pour {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Toute chaîne correspondant à des modèles fournis par des partenaires d’analyse de secrets, par d’autres fournisseurs de services, ou définis par votre organisation, est signalée comme une alerte sous l’onglet « Sécurité » des dépôts. Si une chaîne dans un dépôt public correspond à un modèle de partenaire, elle est également signalée au partenaire.{% endif %}{% ifversion fpt %} Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Les fournisseurs de services peuvent collaborer avec {% data variables.product.company_short %} afin de fournir leurs formats de secret pour l’analyse. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

Vous pouvez également activer l’{% data variables.product.prodname_secret_scanning %} en tant que protection des poussées (push) pour un dépôt ou une organisation. Quand vous activez cette fonctionnalité, l’{% data variables.product.prodname_secret_scanning %} empêche les contributeurs de pousser du code comportant un secret détecté. Pour continuer, les contributeurs doivent supprimer le ou les secrets de la poussée ou, si nécessaire, contourner la protection. {% ifversion push-protection-custom-link-orgs %}Les administrateurs peuvent également spécifier un lien personnalisé qui s’affiche au contributeur lorsqu’un envoi (push) est bloqué. Ce lien peut contenir des ressources spécifiques à l’organisation destinées à aider les contributeurs. {% endif %}Pour plus d’informations, consultez « [Protection des envois (push) avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».

{% endif %}

{% ifversion fpt or ghec %}
## À propos de l’{% data variables.product.prodname_secret_scanning_partner %}

Quand vous rendez un dépôt public ou que vous poussez des modifications vers un dépôt public, {% data variables.product.product_name %} analyse toujours le code à la recherche des secrets qui correspondent aux modèles de partenaires. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} Si l’{% data variables.product.prodname_secret_scanning %} détecte un secret potentiel, nous indiquons au fournisseur de services qui a émis le secret. Le fournisseur de services valide la chaîne, puis décide de révoquer ou non le secret, d’émettre un nouveau secret ou de vous contacter directement. Son action dépend des risques associés pour vous ou lui. Pour plus d’informations, consultez « [Secrets pris en charge pour les modèles de partenaires](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns) ».

Vous ne pouvez pas changer la configuration de l’{% data variables.product.prodname_secret_scanning %} sur les dépôts publics.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## À propos de l’{% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## À propos de l’{% data variables.product.prodname_secret_scanning %} sur {% data variables.product.product_name %}
{% endif %}

L’{% data variables.product.prodname_secret_scanning_GHAS_caps %} est disponible sur tous les dépôts appartenant à l’organisation dans le cadre de {% data variables.product.prodname_GH_advanced_security %}. Elle n’est pas disponible sur les dépôts appartenant à l’utilisateur. Quand vous activez l’{% data variables.product.prodname_secret_scanning %} pour un dépôt, {% data variables.product.prodname_dotcom %} analyse le code à la recherche des modèles qui correspondent aux secrets utilisés par de nombreux fournisseurs de services. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} exécute aussi régulièrement une analyse complète de l’historique Git du contenu existant dans les dépôts {% data variables.product.prodname_GH_advanced_security %} où l’{% data variables.product.prodname_secret_scanning %} est activée, et envoie des notifications d’alerte selon les paramètres de notification d’alerte de l’{% data variables.product.prodname_secret_scanning %}. {% endif %}Pour plus d’informations, consultez « {% ifversion ghec %}[Secrets pris en charge pour la sécurité avancée](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[Modèles d’{% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns){% endif %} ».

{% ifversion secret-scanning-issue-body-comments %} {% note %}

**Remarque :** {% data variables.product.prodname_secret_scanning_caps %} pour les descriptions et les commentaires des problèmes est en version bêta publique et peut faire l’objet de modifications.

{% endnote %} {% endif %}

Si vous êtes administrateur de dépôt, vous pouvez activer l’{% data variables.product.prodname_secret_scanning_GHAS %} pour n’importe quel dépôt{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, y compris les dépôt archivés{% endif %}. Les propriétaires d’organisation peuvent également activer l’{% data variables.product.prodname_secret_scanning_GHAS %} pour tous les dépôts ou pour tous les nouveaux dépôts au sein d’une organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) » et« [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

{% ifversion ghes or ghae or ghec %}Vous pouvez également définir des modèles d’{% data variables.product.prodname_secret_scanning %} pour un dépôt, une organisation ou une entreprise. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning) ».
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} stocke les secrets détectés en utilisant le chiffrement symétrique, à la fois en transit et au repos.{% endif %}{% ifversion ghes > 3.7 %} Pour permuter les clés de chiffrement utilisées pour le stockage des secrets détectés, vous pouvez contacter le {% data variables.contact.contact_ent_support %}.{% endif %}

### À propos des alertes d’{% data variables.product.prodname_secret_scanning %}

Quand vous activez l’{% data variables.product.prodname_secret_scanning %} pour un dépôt ou que vous poussez des commits sur un dépôt où l’{% data variables.product.prodname_secret_scanning %} est activée, {% data variables.product.prodname_dotcom %} recherche dans le contenu de ces commits des secrets qui correspondent aux modèles définis par les fournisseurs de services{% ifversion ghes or ghae or ghec %} et à tous les modèles personnalisés définis dans votre entreprise, organisation ou dépôt{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} exécute aussi régulièrement une analyse de tout le contenu historique dans les dépôts où l’{% data variables.product.prodname_secret_scanning %} est activée.{% endif%}

Si l’{% data variables.product.prodname_secret_scanning %} détecte un secret, {% data variables.product.prodname_dotcom %} génère une alerte.

- {% data variables.product.prodname_dotcom %} envoie une alerte par e-mail aux administrateurs du dépôt et aux propriétaires de l’organisation. Vous recevez une alerte si vous consultez le dépôt, et si vous avez activé les notifications pour les alertes de sécurité ou pour toutes les activités sur le dépôt.
{% ifversion ghes or ghae or ghec %}
- Si le contributeur qui a commité le secret n’ignore pas le dépôt, {% data variables.product.prodname_dotcom %} envoie également une alerte par e-mail au contributeur. Les e-mails contiennent un lien vers l’alerte d’{% data variables.product.prodname_secret_scanning %} associée. L’auteur du commit peut ensuite afficher l’alerte dans le dépôt et résoudre l’alerte.
{% endif %}
- {% data variables.product.prodname_dotcom %} affiche une alerte dans l’onglet « Sécurité » du référentiel.

{% ifversion ghes or ghae or ghec %} Pour plus d’informations sur l’affichage et la résolution des alertes d’{% data variables.product.prodname_secret_scanning %}, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning) ».{% endif %}

Les administrateurs de dépôt et les propriétaires d’organisation peuvent accorder aux utilisateurs et aux équipes l’accès aux alertes d’{% data variables.product.prodname_secret_scanning %}. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) ».

{% ifversion ghec or ghes or ghae > 3.4 %} Vous pouvez utiliser la vue d’ensemble de la sécurité pour voir au niveau de l’organisation les dépôts où l’{% data variables.product.prodname_secret_scanning %} est activée et les alertes trouvées. Pour plus d’informations, consultez « [Affichage de la vue d’ensemble de la sécurité](/code-security/security-overview/viewing-the-security-overview) ».
{% endif %}

{%- ifversion ghec or ghes or ghae %}Vous pouvez également utiliser l’API REST pour monitorer les résultats de l’{% data variables.product.prodname_secret_scanning %} sur vos dépôts {% ifversion ghec %}privés{% endif %}{% ifversion ghes %} ou votre organisation{% endif %}. Pour plus d’informations sur les points de terminaison d’API, consultez « [{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning) ».{% endif %}

{% endif %}

## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »
- « [Maintenir votre compte et vos données sécurisés](/github/authenticating-to-github/keeping-your-account-and-data-secure) » {%- ifversion fpt or ghec %}
- « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) »{% endif %} {%- ifversion fpt or ghec or ghes %}
- « [Gestion des secrets chiffrés pour Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot) »{% endif %}
- « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) »
