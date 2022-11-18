---
title: À propos des dépôts
intro: Un dépôt contient tous les fichiers de votre projet et l’historique de révision de chaque fichier. Vous pouvez discuter du travail de votre projet et le gérer dans le dépôt.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: af0b8eb9f8bd7a98c246a0806a8bc60f59ba147f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107284'
---
## À propos des dépôts

Vous pouvez posséder des référentiels individuellement ou partager la propriété des référentiels avec d’autres personnes d’une organisation.

Vous pouvez restreindre les utilisateurs ayant accès à un référentiel en choisissant la visibilité du référentiel. Pour plus d’informations, consultez « [À propos de la visibilité du référentiel](#about-repository-visibility) ».

Pour les référentiels appartenant à l’utilisateur, vous pouvez accorder à d’autres personnes l’accès aux collaborateurs afin qu’ils puissent collaborer à votre projet. Si un référentiel appartient à une organisation, vous pouvez accorder aux membres de l’organisation des autorisations d’accès pour collaborer à votre référentiel. Pour plus d’informations, consultez « [Niveaux d’autorisation pour un référentiel de comptes personnels](/articles/permission-levels-for-a-user-account-repository/) » et « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% ifversion fpt or ghec %} Avec {% data variables.product.prodname_free_team %} pour les comptes personnels et les organisations, vous pouvez travailler avec un nombre illimité de collaborateurs sur un nombre illimité de dépôts publics avec un ensemble complet de fonctionnalités ou sur un nombre illimité de dépôts privés avec un ensemble limité de fonctionnalités. Pour obtenir des outils avancés pour les dépôts privés, vous pouvez effectuer une mise à niveau vers {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %} {% else %} Chaque personne et organisation peut posséder des référentiels illimités et inviter un nombre illimité de collaborateurs à tous les référentiels.
{% endif %}

Vous pouvez utiliser des référentiels pour gérer votre travail et collaborer avec d’autres personnes.
- Vous pouvez utiliser des problèmes pour collecter des commentaires d’utilisateurs, signaler des bogues logiciels et organiser les tâches que vous souhaitez accomplir. Pour plus d’informations, consultez « [À propos des problèmes](/github/managing-your-work-on-github/about-issues) ».{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- Vous pouvez utiliser des demandes de tirage pour proposer des modifications d’un référentiel. Pour plus d’informations, consultez « [À propos des demandes de tirage (pull requests)](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) ».
- Vous pouvez utiliser des tableaux de projet pour organiser et hiérarchiser vos problèmes et demandes de tirage. Pour plus d’informations, consultez « [À propos des tableaux de projet](/github/managing-your-work-on-github/about-project-boards) ».

{% data reusables.repositories.repo-size-limit %}

## À propos de la visibilité du référentiel

Vous pouvez restreindre les utilisateurs ayant accès à un référentiel en choisissant la visibilité d’un référentiel : {% ifversion ghes or ghec %}public, interne ou privé{% elsif ghae %}privé ou interne{% else %} public ou privé{% endif %}.

{% ifversion fpt or ghec or ghes %}

Lorsque vous créez un dépôt, vous pouvez choisir de le rendre public ou privé. {% ifversion ghec or ghes %} Si vous créez le dépôt dans une organisation{% ifversion ghec %} appartenant à un compte d’entreprise{% endif %}, vous pouvez également choisir de rendre le référentiel interne. {% endif %} {% endif %} {% ifversion fpt %} Les référentiels dans les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} et qui appartiennent à un compte d’entreprise peuvent également être créés avec une visibilité interne. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Lorsque vous créez un référentiel appartenant à votre compte personnel, il est toujours privé. Lorsque vous créez un référentiel appartenant à une organisation, vous pouvez choisir de le rendre privé ou interne.

{% endif %}

{%- ifversion fpt or ghec %}
- Les dépôts publics sont accessibles à tous sur Internet.
- Les dépôts privés ne sont accessibles que par vous, les personnes avec lesquelles vous partagez explicitement l’accès et, pour les référentiels d’organisation, certains membres de l’organisation.
{%- elsif ghes %}
- Si {% data variables.location.product_location %} n’est pas en mode privé ou derrière un pare-feu, les dépôts publics sont accessibles à tout le monde sur Internet. Dans le cas contraire, les dépôts publics sont accessibles à tous les utilisateurs utilisant {% data variables.location.product_location %}, y compris les collaborateurs externes.
- Les dépôts privés ne sont accessibles que par vous, les personnes avec lesquelles vous partagez explicitement l’accès et, pour les référentiels d’organisation, certains membres de l’organisation.
{%- elsif ghae %}
- Les dépôts privés ne sont accessibles que par vous, les personnes avec lesquelles vous partagez explicitement l’accès et, pour les référentiels d’organisation, certains membres de l’organisation.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- Les référentiels internes sont accessibles à tous les membres de l’entreprise. Pour plus d’informations, consultez « [À propos des référentiels internes](#about-internal-repositories) ».
{%- endif %}

Les propriétaires d’organisation ont toujours accès à chaque référentiel créé dans une organisation. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Les personnes disposant d’autorisations d’administrateur pour un référentiel peuvent modifier la visibilité d’un référentiel existant. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/github/administering-a-repository/setting-repository-visibility) ».

{% ifversion ghes or ghec or ghae %}
## À propos des dépôts internes

{% data reusables.repositories.about-internal-repos %} Pour plus d’informations sur innersource, consultez le livre blanc de {% data variables.product.prodname_dotcom %} « [Introduction à innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) ».

{% ifversion ghec %} {% note %}

**Remarque :** Vous ne pouvez créer des dépôts internes que si vous utilisez {% data variables.product.prodname_ghe_cloud %} avec un compte d’entreprise. Un compte d’entreprise est un type de compte distinct qui autorise un point central de gestion pour plusieurs organisations. Pour plus d’informations, consultez « [Types de compte {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

{% endnote %} {% endif %}

Tous les membres de l’entreprise disposent d’autorisations de lecture sur le référentiel interne, mais les référentiels internes ne sont pas visibles par les personnes {% ifversion fpt or ghec %}en dehors de l’entreprise{% else %}, qui ne sont pas membres d’une organisation{% endif %}, y compris les collaborateurs hors des référentiels d’organisation. Pour plus d’informations, consultez « [Rôles dans une entreprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members) » et « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% ifversion ghes %} {% note %}

**Remarque :** un utilisateur doit faire partie d’une organisation pour être membre de l’entreprise et avoir accès aux référentiels internes. Si un utilisateur sur {% data variables.location.product_location %} n’est membre d’aucune organisation, il n’aura pas accès aux dépôts internes.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}À moins que votre entreprise utilise {% data variables.product.prodname_emus %}, les membres{% else %}Les membres{% endif %} de l’entreprise peuvent dupliquer les dépôts internes appartenant à une organisation de l’entreprise. Le référentiel dupliqué appartiendra au compte personnel du membre et la visibilité de la duplication (fork) sera privée. Si un utilisateur est supprimé de toutes les organisations appartenant à l’entreprise, les duplications des référentiels internes de cet utilisateur sont automatiquement supprimées.

{% ifversion ghec %} {% note %}

**Remarque :** Les {% data variables.enterprise.prodname_managed_users_caps %} ne peuvent pas dupliquer les dépôts internes. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts) ».

{% endnote %} {% endif %} {% endif %}

## Limite l’affichage du contenu et des différences dans un référentiel

Certains types de ressources peuvent être assez volumineux, nécessitant un traitement excessif sur {% data variables.product.product_name %}. En raison de cela, les limites sont définies pour s’assurer que les demandes sont terminées dans un délai raisonnable.

La plupart des limites ci-dessous affectent à la fois {% data variables.product.product_name %} et l’API.

### Limites de texte

Les fichiers texte de plus de **512 Ko** sont toujours affichés sous forme de texte brut. Le code n’est pas une syntaxe mise en surbrillance et les fichiers PROSE ne sont pas convertis en HTML (par exemple, Markdown, AsciiDoc, *etc.* ).

Les fichiers texte de plus de **5 Mo** sont disponibles uniquement par le biais de leurs URL brutes, qui sont traitées par le biais de `{% data variables.product.raw_github_com %}` ; par exemple, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Cliquez sur le bouton **Brut** pour obtenir l’URL brute d’un fichier.

### Limites de différences

Étant donné que les différences peuvent devenir très volumineuses, nous imposons ces limites aux différences pour les validations, les demandes de tirage et les affichages de comparaison :

- Dans une demande de tirage, aucune différence totale ne peut dépasser *20 000 lignes que vous pouvez charger* ou *1 Mo* de données de différences brutes.
- Aucune différence de fichier unique ne peut dépasser *20 000 lignes que vous pouvez charger* ou *500 Ko* de données de différences brutes. *Quatre cents lignes* et *20 Ko* sont automatiquement chargés pour un seul fichier.
- Le nombre maximal de fichiers dans une seule différence est limité à *300*.
- Le nombre maximal de fichiers pouvant être affichés (tels que les images, les fichiers PDF et GeoJSON) dans une seule différence est limité à *25*.

Certaines parties d’une différence limitée peuvent être affichées, mais tout ce qui dépasse la limite n’est pas affiché.

### Limites des listes de validation

Les pages de comparaison des affichages et des demandes de tirage affichent une liste de validations entre les révisions `base` les `head`. Ces listes sont limitées à **250** validations. Si elles dépassent cette limite, une note indique que des validations supplémentaires sont présentes (mais qu’elles ne sont pas affichées).

## Pour aller plus loin

- « [Création d’un nouveau référentiel](/articles/creating-a-new-repository) »
- « [À propos des duplications](/github/collaborating-with-pull-requests/working-with-forks/about-forks) »
- « [Collaboration entre des problèmes et des demandes de tirage](/categories/collaborating-with-issues-and-pull-requests) »
- « [Gestion de votre travail sur {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/) »
- « [Administration d’un référentiel](/categories/administering-a-repository) »
- « [Visualisation des données de référentiel avec des graphiques](/categories/visualizing-repository-data-with-graphs/) »
- « [À propos des wikis](/communities/documenting-your-project-with-wikis/about-wikis) »
- « [Glossaire {% data variables.product.prodname_dotcom %}](/articles/github-glossary) »
