---
title: Affichage des contributions sur votre profil
intro: Your {% data variables.product.product_name %} profile shows off {% ifversion fpt or ghes or ghec %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.
redirect_from:
- /articles/viewing-contributions
- /articles/viewing-contributions-on-your-profile-page
- /articles/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: View contributions
ms.openlocfilehash: fccf691bc2fa865dd6ebcdebd112cbe6da02e0b5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104233"
---
{% ifversion fpt or ghes or ghec %}Votre graphe de contributions affiche l’activité des dépôts publics. {% endif %}Vous pouvez choisir d’afficher l’activité des dépôts{% ifversion fpt or ghes or ghec %}publics et {% endif %}privés, avec les détails spécifiques concernant votre activité dans des dépôts privés anonymisés. Pour plus d’informations, consultez « [Publicisation ou masquage de vos contributions privées sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile) ».

{% note %}

**Remarque :** Les commits apparaissent sur votre graphe de contributions uniquement si l’adresse e-mail que vous avez utilisée pour les créer est connectée à votre compte sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account) ».

{% endnote %}

## <a name="what-counts-as-a-contribution"></a>Ce qui compte comme contribution

Sur votre page de profil, certaines actions comptent comme des contributions :

- Commit dans la branche `gh-pages` ou la branche par défaut d’un dépôt
- Le signalement d’un problème
- Ouverture d’une discussion
- Réponse à une discussion
- Proposition d’une demande de tirage (pull request)
- Envoi d’une révision de demande de tirage{% ifversion ghes or ghae %}
- Co-création de commits dans la branche `gh-pages` ou la branche par défaut d’un dépôt{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## <a name="popular-repositories"></a>Dépôts populaires

Cette section affiche vos dépôts qui sont surveillés par le plus de gens. {% ifversion fpt or ghes or ghec %}Une fois que vous avez [épinglé des dépôts à votre profil](/articles/pinning-repositories-to-your-profile), cette section indique « Pinned repositories ».{% endif %}

![Dépôts populaires](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## <a name="pinned-repositories"></a>Dépôts épinglés

Cette section affiche jusqu’à six dépôts publics, et peut inclure vos dépôts ainsi que ceux auxquels vous avez contribué. Pour afficher facilement des détails importants sur les dépôts que vous avez choisis de mettre en avant, chaque dépôt de cette section inclut un résumé du travail effectué, le nombre d’[étoiles](/articles/saving-repositories-with-stars/) reçues par le dépôt, et le langage de programmation principal utilisé dans le dépôt. Pour plus d’informations, consultez « [Épinglage de dépôts à votre profil](/articles/pinning-repositories-to-your-profile) ».

![Dépôts épinglés](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## <a name="contributions-calendar"></a>Calendrier des contributions

Votre calendrier des contributions montre votre activité de contribution.

### <a name="viewing-contributions-from-specific-times"></a>Affichage des contributions de périodes spécifiques

- Cliquez sur le carré d’une journée pour afficher les contributions effectuées pendant cette période de 24 heures.
- Appuyez sur *Maj* et cliquez sur le carré d’une autre journée pour afficher les contributions effectuées entre ces deux dates.

{% note %}

**Remarque :** Vous pouvez sélectionner une plage d’un mois maximum sur votre calendrier des contributions. Si vous sélectionnez un intervalle de temps plus long, un seul mois de contributions est affiché.

{% endnote %}

![Le graphe de vos contributions](/assets/images/help/profile/contributions_graph.png)

### <a name="how-contribution-event-times-are-calculated"></a>Comment sont calculés les horaires des événements de contribution

Les horodatages sont calculés différemment pour les commits et les demandes de tirage :
- Les **commits** utilisent les informations du fuseau horaire dans l’horodatage de validation. Pour plus d’informations, consultez « [Résolution des problèmes liés aux commits sur votre chronologie](/articles/troubleshooting-commits-on-your-timeline) ».
- Les **demandes de tirage** et les **problèmes** ouverts sur {% data variables.product.product_name %} utilisent le fuseau horaire de votre navigateur. Ceux ouverts via l’API utilisent l’horodatage ou le fuseau horaire [spécifié dans l’appel d’API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## <a name="activity-overview"></a>Vue d’ensemble de l’activité

{% data reusables.profile.activity-overview-summary %} Pour plus d’informations, consultez « [Affichage d’une vue d’ensemble de votre activité sur votre profil](/articles/showing-an-overview-of-your-activity-on-your-profile) ».

![Section de vue d’ensemble de l’activité sur le profil](/assets/images/help/profile/activity-overview-section.png)

Les organisations figurant dans la vue d’ensemble de l’activité sont hiérarchisées en fonction de votre degré d’activité dans l’organisation. Si vous @mention une organisation dans votre bio de profil et que vous êtes membre de l’organisation, cette organisation figure en premier dans la vue d’ensemble de l’activité. Pour plus d’informations, consultez « [Mention de personnes et d’équipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) » ou « [Ajout d’une bio à votre profil](/articles/adding-a-bio-to-your-profile/) ».

## <a name="contribution-activity"></a>Activité de contribution

La section sur l’activité de contribution inclut une chronologie détaillée de votre travail, y compris les commits que vous avez effectués ou co-créés, les demandes de tirage que vous avez proposées et les problèmes que vous avez ouverts. Vous pouvez voir vos contributions au fil du temps en cliquant sur **Afficher plus d’activité** en bas de votre activité de contribution ou en cliquant sur l’année que vous souhaitez afficher sur le côté droit de la page. Les moments importants, comme la date à laquelle vous avez rejoint une organisation, proposé votre première demande de tirage ou ouvert un problème important, sont mis en surbrillance dans votre activité de contribution. Si vous ne pouvez pas voir certains événements dans votre chronologie, vérifiez que vous avez toujours accès à l’organisation ou au dépôt où l’événement s’est produit.

![Filtre temporel d’activité de contribution](/assets/images/help/profile/contributions_activity_time_filter.png)

## <a name="viewing-contributions-from--data-variablesproductprodname_enterprise--on--data-variablesproductprodname_dotcom_the_website-"></a>Affichage des contributions à partir de {% data variables.product.prodname_enterprise %} sur {% data variables.product.prodname_dotcom_the_website %}

Si vous utilisez {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} ou {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} et que le propriétaire de votre entreprise active {% data variables.product.prodname_unified_contributions %}, vous pouvez envoyer des décomptes de contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Envoi de contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) ».

