---
title: Gestion des paramètres de révision du code pour l’équipe
intro: Vous pouvez réduire le bruit pour votre équipe en limitant les notifications quand votre équipe est chargée de passer en revue une demande de tirage (pull request).
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
ms.openlocfilehash: eb4711251f7bebc9088ae711ba8a36dc60acba56
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108301'
---
## À propos des paramètres de révision du code

{% ifversion only-notify-requested-members %} Pour réduire le bruit dans votre équipe et clarifier la responsabilité individuelle des révisions de demandes de tirage (pull request), vous pouvez configurer des paramètres de révision du code.

- Notifications d’équipe
- Attribution automatique

## À propos des notifications d’équipe

Dans le cas où vous choisissez de notifier uniquement les membres de l’équipe demandés, vous désactivez l’envoi de notifications à l’ensemble de l’équipe lorsqu’elle est invitée à réviser une demande de tirage si l’un de ses membres est également sollicité pour révision. Ce procédé est particulièrement utile lorsqu’un référentiel est configuré avec des équipes propriétaires du code, mais que les contributeurs du référentiel connaissent une personne qui représenterait un réviseur approprié pour leur demande de tirage. Pour plus d’informations, consultez « [À propos des propriétaires de code](/github/creating-cloning-and-archiving-repositories/about-code-owners) ».

## À propos de l’attribution automatique
{% endif %}

Lorsque vous activez l’attribution automatique, votre équipe est supprimée des réviseurs chaque fois qu’elle est invitée à réviser une demande de tirage. Une partie spécifiée de ses membres est alors affectée à la place de l’équipe. Les attributions de révision du code vous permettent de déterminer si l’ensemble de l’équipe ou simplement un sous-ensemble de ses membres sont avertis lorsqu’elle est sollicitée pour révision.

Lorsque les propriétaires du code sont automatiquement sollicités pour révision, l’équipe est toujours supprimée et remplacée par des utilisateurs individuels, à moins qu’une règle de protection de branche ne soit configurée pour exiger une révision par les propriétaires du code. Si une telle règle de protection de branche est en place, la demande de l’équipe ne peut pas être supprimée ; la demande individuelle vient alors s’y ajouter.

### Algorithmes de routage

Les attributions de révision du code choisissent et attribuent automatiquement des réviseurs suivant deux algorithmes possibles. 

L’algorithme tourniquet (round robin) sélectionne les réviseurs en fonction de la demande de révision la moins récente. Il se concentre sur l’alternance entre tous les membres de l’équipe, quel que soit le nombre de révisions en attente qu’ils possèdent. 

L’algorithme d’équilibrage de charge choisit les réviseurs en fonction du nombre total de demandes de révision récentes de chaque membre et considère le nombre de révisions en attente pour chacun. Il tente de faire en sorte que tous les membres de l’équipe révisent un nombre égal de demandes de tirage sur une période de 30 jours.

Les membres de l’équipe qui ont défini leur statut sur « Occupé » ne sont pas sélectionnés pour révision. Si tous les membres sont occupés, la demande de tirage reste affectée à l’équipe elle-même. Pour plus d’informations sur les états utilisateur, consultez « [Définition d’un état](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status) ».

{% ifversion only-notify-requested-members %}
## Configuration des notifications d’équipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Dans la barre latérale gauche, cliquez sur **{% octicon "code-review" aria-label="The code-review icon" %} Révision du code**.
{% else %}
1. Dans la barre latérale gauche, cliquez sur le bouton **Révision du code**
![Révision du code](/assets/images/help/teams/review-button.png). {% endif %}
1. Sélectionnez **Avertir uniquement les membres de l’équipe demandés**.
![ Notifications d’équipe de révision du code](/assets/images/help/teams/review-assignment-notifications.png)
1. Cliquez sur **Save changes**.
{% endif %}

## Configuration de l’attribution automatique
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Dans la barre latérale gauche, cliquez sur **{% octicon "code-review" aria-label="The code-review icon" %} Révision du code**.
{% else %}
1. Dans la barre latérale gauche, cliquez sur le bouton **Révision du code**
![Révision du code](/assets/images/help/teams/review-button.png). {% endif %}
1. Sélectionnez **Activer l’attribution automatique**.
![Bouton Attribution automatique](/assets/images/help/teams/review-assignment-enable.png)
1. Sous « Combien de membres de l’équipe doivent être affectés à la révision ? », utilisez le menu déroulant pour choisir les réviseurs à affecter à chaque demande de tirage.
![Liste déroulante Nombre de réviseurs](/assets/images/help/teams/review-assignment-number.png)
1. Sous « Algorithme de routage », utilisez le menu déroulant pour choisir un algorithme. Pour plus d’informations, consultez « [Algorithme de routage](#routing-algorithms) ».
![Liste déroulante Algorithme de routage](/assets/images/help/teams/review-assignment-algorithm.png)
1. Si vous le souhaitez, sélectionnez **Ne jamais affecter certains membres de l’équipe** pour ignorer en permanence certains membres de l’équipe. Sélectionnez ensuite un ou plusieurs membres de l’équipe que vous souhaitez toujours ignorer.
![Case à cocher et liste déroulante Ne jamais affecter certains membres de l’équipe](/assets/images/help/teams/review-assignment-skip-members.png) {% ifversion ghes < 3.4 %}
1. Si vous le souhaitez, sélectionnez **Si des membres de l’équipe sont affectés, ne pas informer l’ensemble de l’équipe** sous « Notifications » afin de notifier uniquement les membres de l’équipe choisis par l’attribution de révision du code pour chaque révision de demande de tirage.
{%- endif %} {% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. Si vous le souhaitez, sélectionnez **Membres des équipes enfants** pour inclure des membres des équipes enfants parmi les réviseurs potentiels lors de l’attribution de demandes.
1. Si vous le souhaitez, sélectionnez **Compter les demandes existantes** pour compter tous les membres dont la révision a déjà été demandée par rapport au nombre total de membres à affecter.
1. Si vous le souhaitez, sélectionnez **Demande de révision d’équipe** pour supprimer la demande de révision de l’équipe lors de l’attribution de membres de l’équipe.
{%- endif %}
1. Cliquez sur **Save changes**.

## Désactivation de l’attribution automatique
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Sélectionnez **Activer l’attribution automatique** pour décocher la case.
![Bouton Attribution de révision du code](/assets/images/help/teams/review-assignment-enable.png)
1. Cliquez sur **Save changes**.
