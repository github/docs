---
title: Définition de la visibilité du dépôt
intro: Vous pouvez choisir qui peut afficher votre dépôt.
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
ms.openlocfilehash: 2ccdafed8e9efe2bf352033d8fa632147f6bb32b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332020'
---
## À propos des modifications de visibilité du référentiel

Les propriétaires d’organisation peuvent limiter la possibilité de modifier la visibilité des référentiels aux seuls propriétaires de l’organisation. Pour plus d’informations, consultez « [Restriction des changements de visibilité des référentiels dans votre organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) ».

{% ifversion ghec %}

Les membres d’une {% data variables.product.prodname_emu_enterprise %} peuvent uniquement définir la visibilité des référentiels détenus par leur compte personnel sur privé, et les référentiels dans les organisations de leur entreprise peuvent uniquement être privés ou internes. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».

{% endif %}

Nous vous recommandons de passer en revue mises en garde suivantes avant de modifier la visibilité d’un référentiel.

{% ifversion ghes or ghae %}

{% warning %}

**Avertissement :** les modifications apportées à la visibilité d’un grand référentiel ou d’un réseau de référentiels peuvent affecter l’intégrité des données. Les modifications de visibilité peuvent également avoir des effets inattendus sur les duplications. {% data variables.product.company_short %} recommande ce qui suit avant de modifier la visibilité d’un réseau de référentiels.

- Attendez une période d’activité réduite sur {% data variables.product.product_location %}.

- Contactez votre{% ifversion ghes %}administrateur de site{% elsif ghae %}propriétaire d’entreprise{% endif %} avant de continuer. Votre{% ifversion ghes %}administrateur de site{% elsif ghae %}propriétaire d’entreprise{% endif %} peut contacter {% data variables.contact.contact_ent_support %} pour obtenir des conseils supplémentaires.

{% endwarning %}

{% endif %}

### Rendre un référentiel privé
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} détache les duplications publiques du référentiel public et les place dans un nouveau réseau. Les duplications publiques ne sont pas rendues privées.{% endif %} {%- ifversion ghes or ghec or ghae %}
* Si vous modifiez la visibilité d’un référentiel d’interne à privé, {% data variables.product.prodname_dotcom %} supprime les duplications appartenant aux utilisateurs sans accès au référentiel nouvellement rendu privé. {% ifversion fpt or ghes or ghec %}La visibilité d’une duplication est également rendue privée.{% elsif ghae %}Si le référentiel interne comporte des duplications, la visibilité des duplications est déjà privée.{% endif %}Pour plus d’informations, consultez « [Que se passe-t-il avec les duplications lorsqu’un référentiel est supprimé ou que sa visibilité change ?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)»
{%- endif %}

{%- ifversion fpt %}
* Si vous utilisez {% data variables.product.prodname_free_user %} pour les comptes personnels ou les organisations, certaines fonctionnalités du référentiel ne seront pas disponibles une fois sa visibilité rendue privée. La publication de tout site {% data variables.product.prodname_pages %} publié sera automatiquement annulée. Si vous avez ajouté un domaine personnalisé au site {% data variables.product.prodname_pages %}, vous devez supprimer ou mettre à jour vos enregistrements DNS avant de rendre le référentiel privé et ce, afin d’éviter le risque de prise de contrôle du domaine. Pour plus d’informations, consultez « [Produits {% data variables.product.company_short %} »](/get-started/learning-about-github/githubs-products) et « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %} »](/articles/managing-a-custom-domain-for-your-github-pages-site).
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} n’inclut plus le référentiel dans l’{% data variables.product.prodname_archive %}. Pour plus d’informations, consultez « [À propos de l’archivage du contenu et des données sur {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) ».
* Les fonctionnalités {% data variables.product.prodname_GH_advanced_security %}, telles que {% data variables.product.prodname_code_scanning %}, cesseront de fonctionner{% ifversion ghec %}, sauf si le référentiel appartient à une organisation qui fait partie d’une entreprise disposant d’une licence pour {% data variables.product.prodname_advanced_security %} et suffisamment de sièges{% endif %}. {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* L’accès en lecture Git anonyme n’est plus disponible. Pour plus d’informations, consultez « [Activation de l’accès en lecture Git anonyme pour un dépôt](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) ».
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Rendre un référentiel interne

* Toutes les duplications du référentiel restent dans le réseau de référentiels, et {% data variables.product.product_name %} conserve la relation entre le référentiel racine et la duplication. Pour plus d’informations, consultez « [Que se passe-t-il avec les duplications lorsqu’un référentiel est supprimé ou que sa visibilité change ?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility) »

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Rendre un référentiel public

* {% data variables.product.product_name %} détache les duplications privées et les transforme en référentiel privé autonome. Pour plus d’informations, consultez « [Que se passe-t-il avec les duplications lorsqu’un référentiel est supprimé ou que sa visibilité change ?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository) »{% ifversion fpt or ghec %}
* Si vous convertissez votre référentiel privé en référentiel public dans le cadre de la création d’un projet open source, consultez les [Guides open source](http://opensource.guide) pour obtenir des conseils et des instructions. Vous pouvez également suivre un cours gratuit sur la gestion d’un projet open source avec [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Une fois votre référentiel public, vous pouvez également afficher le profil de la communauté de votre référentiel pour voir si votre projet répond aux meilleures pratiques en matière de prise en charge des contributeurs. Pour plus d’informations, consultez « [Affichage de votre profil de communauté](/articles/viewing-your-community-profile) ».
* Le référentiel accède automatiquement aux fonctionnalités {% data variables.product.prodname_GH_advanced_security %}.

Pour plus d’informations sur l’amélioration de la sécurité des référentiels, consultez « [Sécurisation de votre référentiel](/code-security/getting-started/securing-your-repository) ».{% endif %}

{% endif %}

## Modification de la visibilité d’un référentiel

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Zone danger », à droite de « Modifier la visibilité du référentiel », cliquez sur **Modifier la visibilité**.
   ![Bouton Modifier la visibilité](/assets/images/help/repository/repo-change-vis.png)
4. Sélectionnez une visibilité.
{% ifversion fpt or ghec %} ![Boîte de dialogue des options de visibilité des référentiels](/assets/images/help/repository/repo-change-select.png){% else %} ![Boîte de dialogue de la visibilité des référentiels](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Pour vérifier que vous modifiez la visibilité du référentiel qui convient, entrez le nom du référentiel dont vous souhaitez modifier la visibilité.
6. Sélectionnez **Je comprends, modifier la visibilité du référentiel**.
{% ifversion fpt or ghec %} ![Bouton Confirmer la modification de la visibilité du référentiel](/assets/images/help/repository/repo-change-confirm.png){% else %} ![Bouton Confirmer la modification de la visibilité du référentiel](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Pour aller plus loin
- « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) »
