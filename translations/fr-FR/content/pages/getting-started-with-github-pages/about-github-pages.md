---
title: À propos de GitHub Pages
intro: 'Vous pouvez utiliser {% data variables.product.prodname_pages %} pour héberger un site web sur vous-même, votre organisation ou votre projet directement à partir d’un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507988'
---
## À propos de {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} est un service d’hébergement de site statique qui prélève des fichiers HTML, CSS et JavaScript directement dans un dépôt sur {% data variables.product.product_name %}, les exécute éventuellement dans un processus de génération, puis publie un site web. Vous pouvez voir des exemples de sites {% data variables.product.prodname_pages %} dans la [collection d’exemples {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %} Vous pouvez héberger votre site sur le domaine `github.io` de {% data variables.product.prodname_dotcom %} ou sur votre propre domaine personnalisé. Pour plus d’informations, consultez « [Utilisation d’un domaine personnalisé avec {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages) ».
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} Pour plus d’informations, consultez « [Modification de la visibilité de votre site {% data variables.product.prodname_pages %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %} {% endif %}

Pour commencer, consultez « [Création d’un site {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site) ».

{% ifversion fpt or ghes or ghec %} Les propriétaires d’organisation peuvent désactiver la publication de sites {% data variables.product.prodname_pages %} à partir des dépôts de l’organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».
{% endif %}

## Types de sites {% data variables.product.prodname_pages %}

Il existe trois types de sites {% data variables.product.prodname_pages %} : projet, utilisateur et organisation. Les sites de projet sont connectés à un projet spécifique hébergé sur {% data variables.product.product_name %}, comme une bibliothèque JavaScript ou une collection de recettes. Les sites d’utilisateur et d’organisation sont connectés à un compte spécifique sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Pour publier un site d’utilisateur, vous devez créer un dépôt appartenant à votre compte personnel, nommé {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Pour publier un site d’organisation, vous devez créer un dépôt appartenant à une organisation, nommé {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}Sauf si vous utilisez un domaine personnalisé, des sites d’utilisateur et d’organisation sont disponibles à l’emplacement `http(s)://<username>.github.io` ou `http(s)://<organization>.github.io`.{% elsif ghae %}Les sites d’utilisateur et d’organisation sont disponibles à l’emplacement `http(s)://pages.<hostname>/<username>` ou `http(s)://pages.<hostname>/<organization>`.{% endif %}

Les fichiers sources d’un site de projet sont stockés dans le même dépôt que leur projet. {% ifversion fpt or ghec %}Sauf si vous utilisez un domaine personnalisé, des sites de projet sont disponibles à l’emplacement `http(s)://<username>.github.io/<repository>` ou `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Des sites de projet sont disponibles à l’emplacement `http(s)://pages.<hostname>/<username>/<repository>/` ou `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %} Si vous publiez votre site en privé, l’URL de votre site sera différente. Pour plus d’informations, consultez « [Modification de la visibilité de votre site {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) ».
{% endif %}

{% ifversion fpt or ghec %} Pour plus d’informations sur la façon dont les domaines personnalisés affectent l’URL de votre site, consultez « [À propos des domaines personnalisés et de {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages) ».
{% endif %}

Vous ne pouvez créer qu’un seul utilisateur ou site d’organisation pour chaque compte sur {% data variables.product.product_name %}. Les sites de projet, qu’ils appartiennent à un compte d’organisation ou personnel, sont illimités.

{% ifversion ghes %} L’URL à laquelle votre site est disponible dépend de l’activation de l’isolation de sous-domaine pour {% data variables.product.product_location %}.

| Type de site | Isolation de sous-domaine activée | Isolation de sous-domaine désactivée |
| ------------ | --------------------------- | ---------------------------- |
Utilisateur | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organisation | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Site de projet appartenant à un compte personnel | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Site de projet appartenant au compte d’organisation | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/installation/enabling-subdomain-isolation) », ou contactez votre administrateur de site.
{% endif %}

## Publication de sources pour les sites {% data variables.product.prodname_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

Pour plus d’informations, consultez « [Configuration d’une source de publication pour votre site GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) ».

{% ifversion ghec %}
## Limitations pour {% data variables.product.prodname_emus %}
Si vous êtes un {% data variables.product.prodname_managed_user %}, votre utilisation de {% data variables.product.prodname_pages %} est limitée.

  - Les sites {% data variables.product.prodname_pages %} ne peuvent être publiés qu’à partir de dépôts appartenant à des organisations.
  - Les sites {% data variables.product.prodname_pages %} ne sont visibles que par d’autres membres de l’entreprise.

Pour plus d’informations sur {% data variables.product.prodname_emus %}, consultez « [À propos de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) ».
{% endif %}

## Générateurs de sites statiques

{% data variables.product.prodname_pages %} publie tous les fichiers statiques que vous envoyez (push) à votre dépôt. Vous pouvez créer vos propres fichiers statiques ou utiliser un générateur de site statique pour générer votre site à votre place. Vous pouvez également personnaliser votre propre processus de génération localement ou sur un autre serveur.

{% ifversion pages-custom-workflow %}

Si vous utilisez un processus de génération personnalisé ou un générateur de site statique autre que Jekyll, vous pouvez écrire une action {% data variables.product.prodname_actions %} pour générer et publier votre site. {% data variables.product.product_name %} fournit des workflows de démarrage pour plusieurs générateurs de sites statiques. Pour plus d’informations, consultez « [Configuration d’une source de publication pour votre site GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) ».

Si vous publiez votre site à partir d’une branche source, {% data variables.product.prodname_pages %} utilise Jekyll pour générer votre site par défaut. Si vous souhaitez utiliser un générateur de site statique autre que Jekyll, nous vous recommandons plutôt d’écrire une action {% data variables.product.prodname_actions %} pour générer et publier votre site. Sinon, désactivez le processus de génération Jekyll en créant un fichier vide appelé `.nojekyll` à la racine de votre source de publication, puis suivez les instructions de votre générateur de site statique pour générer votre site localement.

{% else %}

Nous recommandons Jekyll comme générateur de site statique avec une prise en charge intégrée des {% data variables.product.prodname_pages %} et un processus de génération simplifié. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %} et Jekyll](/articles/about-github-pages-and-jekyll) ».

{% data variables.product.prodname_pages %} utilise Jekyll pour générer votre site par défaut. Si vous souhaitez utiliser un générateur de site statique autre que Jekyll, désactivez le processus de génération Jekyll en créant un fichier vide appelé `.nojekyll` à la racine de votre source de publication, puis suivez les instructions de votre générateur de site statique pour générer votre site localement.

{% endif %}

{% data variables.product.prodname_pages %} ne prend pas en charge les langages côté serveur tels que PHP, Ruby ou Python.

## Limites relatives à l’utilisation de {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %} Les sites {% data variables.product.prodname_pages %} créés après le 15 juin 2016 et utilisant des domaines `github.io` sont servis via HTTPS. Si vous avez créé votre site avant le 15 juin 2016, vous pouvez activer la prise en charge de HTTPS pour le trafic vers votre site. Pour plus d’informations, consultez « [Sécurisation de votre {% data variables.product.prodname_pages %} avec HTTPS](/articles/securing-your-github-pages-site-with-https) ».

### Utilisations interdites
{% endif %} {% data variables.product.prodname_pages %} n’est ni destiné, ni autorisé à être utilisé comme service d’hébergement web gratuit pour exécuter votre entreprise en ligne, votre site de commerce électronique ou tout autre site web visant principalement à faciliter des transactions commerciales ou à fournir un SaaS commercial. {% data reusables.pages.no_sensitive_data_pages %}

En outre, votre utilisation de {% data variables.product.prodname_pages %} est régie par les [conditions d’utilisation de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/), y compris les restrictions concernant les systèmes d’enrichissement rapide, les contenus sexuellement obscènes et les contenus ou activités violents ou menaçants.

### Limites d’utilisation
Les sites {% data variables.product.prodname_pages %} sont soumises aux limites d’utilisation suivantes :

  - Les dépôts sources {% data variables.product.prodname_pages %} ont une limite recommandée de 1 Go.{% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Quel est mon quota de disque ?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations) »{% endif %}
  - Les sites publiés {% data variables.product.prodname_pages %} ne peuvent ne pas avoir une taille supérieure à 1 Go.
{% ifversion fpt or ghec %}
  - Les sites {% data variables.product.prodname_pages %} ont une limite de bande passante *souple* de 100 Go par mois.
  - Les sites {% data variables.product.prodname_pages %} ont une limite *souple* de 10 builds par heure.{% ifversion pages-custom-workflow %} Cette limite ne s’applique pas si vous générez et publiez votre site avec un workflow {% data variables.product.prodname_actions %} personnalisé {% endif %}
  - Afin de fournir une même qualité de service pour tous les sites {% data variables.product.prodname_pages %}, des limites de débit peuvent être appliquées. Ces limites de débit ne doivent pas interférer avec les utilisations légitimes de {% data variables.product.prodname_pages %}. Si votre demande déclenche une limitation du débit, vous recevrez une réponse contenant le code d’état HTTP `429`, ainsi qu’un corps HTML informatif.

Si votre site dépasse ces quotas d’utilisation, il se peut que nous ne puissions pas le servir ou que vous receviez un e-mail poli de {% data variables.contact.contact_support %} suggérant des stratégies de réduction de l’impact de votre site sur nos serveurs, dont la mise en place d’un réseau de distribution de contenu tiers (CDN) devant votre site, l’utilisation d’autres fonctionnalités de {% data variables.product.prodname_dotcom %} telles que les versions, ou le passage à un autre service d’hébergement susceptible de mieux répondre à vos besoins.

{% endif %}

## Types MIM sur {% data variables.product.prodname_pages %}

Un type MIME est un en-tête qu’un serveur envoie à un navigateur, fournissant des informations sur la nature et le format des fichiers que le navigateur a demandés. {% data variables.product.prodname_pages %} prend en charge plus de 750 types MIME dans des milliers d’extensions de fichier. La liste des types MIME pris en charge est générée à partir du [projet mime-db](https://github.com/jshttp/mime-db).

Bien que vous ne puissiez pas spécifier de types MIME personnalisés par fichier ou par dépôt, vous pouvez ajouter ou modifier des types MIME à utiliser sur {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez les [recommandations relatives aux contributions mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## Collecte de données

Quand un site {% data variables.product.prodname_pages %} est visité, l’adresse IP du visiteur est journalisée et stockée à des fins de sécurité, que le visiteur se soit ou non connecté à {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur les pratiques de sécurité de {% data variables.product.prodname_dotcom %}, consultez la <a href="/articles/github-privacy-statement/" class="dotcom-only">Déclaration de confidentialité de {% data variables.product.prodname_dotcom %}</a>.
{% endif %}

## Pour aller plus loin

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) sur {% data variables.product.prodname_learning %}
- « [{% data variables.product.prodname_pages %}](/rest/reference/repos#pages) »
