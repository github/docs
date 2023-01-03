---
title: Vérification ou approbation d’un domaine pour votre organisation
intro: 'Vous pouvez vérifier votre propriété des domaines avec {% data variables.product.company_short %} pour confirmer l’identité de votre organisation. Vous pouvez également approuver les domaines auxquels {% data variables.product.company_short %} peut envoyer des notifications par e-mail pour les membres de votre organisation.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
ms.openlocfilehash: 3cdd2954798e8584d5803ea9254d626d9cb37ee5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061745'
---
## À propos de la vérification de domaine

Après avoir vérifié la propriété des domaines de votre organisation, un badge « Vérifié » s’affiche sur le profil de l’organisation. {% ifversion ghec %}Si votre organisation a accepté les Conditions d’utilisation du service pour les entreprises, les propriétaires d’organisation peuvent vérifier l’identité des membres d’organisation en voyant l’adresse e-mail de chaque membre dans le domaine vérifié. Pour plus d’informations, consultez « [À propos de la page de profil de votre organisation](/articles/about-your-organization-s-profile/) » et « <a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Mise à niveau vers les Conditions d’utilisation du service pour les entreprises</a> ».{% endif %}

{% ifversion ghec %}Si votre organisation appartient à un compte d’entreprise, un{% elsif ghes %}Un{% endif %} badge « Vérifié » s’affiche sur le profil de votre organisation pour tous les domaines vérifiés pour le compte d’entreprise, en plus des domaines vérifiés pour l’organisation. Les propriétaires d’organisation peuvent voir tous les domaines qu’un propriétaire d’entreprise a vérifié ou approuvé, et peuvent modifier les domaines si le propriétaire d’organisation est également propriétaire d’entreprise. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».

{% ifversion ghec %} {% note %}

**Remarque :** Pour vérifier ou approuver des domaines, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %} Après avoir vérifié la propriété du domaine de votre organisation, vous pouvez limiter les notifications par e-mail de l’organisation à ce domaine. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ».
{% endif %}

{% ifversion ghec %}Vous pouvez également vérifier les domaines personnalisés utilisés pour {% data variables.product.prodname_pages %} afin d’empêcher la prise de contrôle de domaine quand un domaine personnalisé est configuré, mais que votre site {% data variables.product.prodname_pages %} est désactivé ou n’utilise plus le domaine. Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) ».{% endif %}

## À propos de l’approbation de domaine

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Après avoir approuvé des domaines pour votre organisation, vous pouvez limiter les notifications par e-mail concernant les activités au sein de l’organisation aux utilisateurs dont l’adresse e-mail est vérifiée dans les domaines vérifiés ou approuvés. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ».

Les propriétaires d’entreprise ne peuvent pas voir les membres d’organisation ou les adresses e-mail qui reçoivent des notifications dans les domaines approuvés.

Les propriétaires d’entreprise peuvent également approuver des domaines supplémentaires pour les organisations appartenant à l’entreprise. {% ifversion ghec %}Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %}{% ifversion ghes %}Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %}

## Vérification d’un domaine pour votre organisation

Pour vérifier un domaine, vous devez avoir un accès permettant de modifier les enregistrements de domaine dans votre service d’hébergement de domaine.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Attendez que votre configuration DNS change, ce qui peut prendre jusqu’à 72 heures. Vous pouvez vérifier que votre configuration DNS a changé en exécutant la commande `dig` sur la ligne de commande. Remplacez `ORGANIZATION` par le nom de votre organisation et `example.com` par le domaine à vérifier. Votre nouvel enregistrement TXT doit figurer dans la sortie de commande.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Après avoir vérifié que votre enregistrement TXT a été ajouté à votre DNS, suivez les étapes une à trois ci-dessus pour accéder aux domaines approuvés et vérifiés de votre organisation.
{% data reusables.organizations.continue-verifying-domain %}
11. Dès que le badge « Vérifié » est visible dans la page de profil de votre organisation, vous pouvez éventuellement supprimer l’entrée TXT de l’enregistrement DNS dans votre service d’hébergement de domaine.
![Badge Vérifié](/assets/images/help/organizations/verified-badge.png)

## Approbation d’un domaine pour votre organisation

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Suppression d’un domaine approuvé ou vérifié

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. À droite du domaine à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Supprimer**.
    ![« Supprimer » pour un domaine](/assets/images/help/organizations/domains-delete.png)
