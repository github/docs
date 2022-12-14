---
title: À propos de l’appartenance à l’organisation
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086147"
---
Un propriétaire d’organisation peut vous inviter à rejoindre son organisation en tant que membre, responsable de facturation ou propriétaire. Un propriétaire ou un membre d’organisation disposant de privilèges d’administrateur pour un dépôt peut vous inviter à collaborer dans un ou plusieurs dépôts en tant que collaborateur externe. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

Vous pouvez accéder aux organisations dont vous êtes membre sur votre page de profil. Pour plus d’informations, consultez « [Accès à une organisation](/articles/accessing-an-organization) ».

Lorsque vous acceptez une invitation à rejoindre une organisation, les propriétaires de l’organisation peuvent être en mesure de voir :

- Les informations de votre profil public.
- Votre adresse e-mail
- Si vous avez activé l’autorisation à deux facteurs.
- Les dépôts auxquels vous avez accès au sein de l’organisation ainsi que votre niveau d’accès.
- Certaines activités au sein de l’organisation.
- Le pays d’origine de la demande.
- Votre adresse IP.

Pour plus d’informations, consultez la <a href="/articles/github-privacy-statement/" class="dotcom-only">Déclaration de confidentialité {% data variables.product.prodname_dotcom %}</a>.

  {% note %}

  **Remarque :** Les propriétaires ne peuvent pas voir les adresses IP des membres dans le journal d’audit de l’organisation. En cas d’incident de sécurité, par exemple une compromission de compte ou un partage par inadvertance de données sensibles, les propriétaires de l’organisation peuvent demander des détails relatifs à l’accès aux dépôts privés. Les informations que nous retournons sont susceptibles d’inclure votre adresse IP.

  {% endnote %}

Par défaut, la visibilité de votre appartenance à l’organisation est définie sur « privée ». Vous pouvez choisir de publiciser l’appartenance à une organisation individuelle sur votre profil. Pour plus d’informations, consultez « [Publicisation ou masquage de l’appartenance à une organisation](/articles/publicizing-or-hiding-organization-membership) ».

{% ifversion fpt or ghec %}

Si votre organisation appartient à un compte d’entreprise, vous êtes automatiquement membre du compte d’entreprise et visible par les propriétaires de compte d’entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% endif %}

Vous pouvez quitter une organisation à tout moment. Pour plus d’informations, consultez « [Vous supprimer vous-même d’une organisation](/articles/removing-yourself-from-an-organization) ».

## <a name="further-reading"></a>Pour aller plus loin

- « [À propos des organisations](/articles/about-organizations) »
- « [Gestion de votre appartenance aux organisations](/articles/managing-your-membership-in-organizations) »
