---
title: À propos des branches protégées
intro: 'Vous pouvez protéger les branches importantes en définissant des règles de protection des branches, qui déterminent si les collaborateurs peuvent supprimer ou forcer les envois vers la branche, et qui définissent les exigences pour tous les envois vers la branche, comme la réussite des contrôles d’état ou un historique linéaire des validations.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 5b0d73d92a877bd932474471f2835ffda3fd2266
ms.sourcegitcommit: ec712c0fd32e7fe2f74c2b6d5da95f700dfd8111
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110376'
---
## À propos des règles de protection de branche

Vous pouvez appliquer certains workflows ou exigences avant qu’un collaborateur puisse envoyer (push) des modifications à une branche dans votre dépôt, dont la fusion d’une demande de tirage dans la branche, en créant une règle de protection de branche.

Par défaut, chaque règle de protection de branche désactive les envois (push) forcés aux branches correspondantes, et empêche la suppression de celles-ci. Vous pouvez éventuellement désactiver ces restrictions et activer des paramètres de protection de branche supplémentaires.

{% ifversion bypass-branch-protections %} Par défaut, les restrictions d’une règle de protection des branches ne s’appliquent pas aux personnes qui ont des autorisations d’administrateur sur le dépôt ni aux rôles personnalisés avec l’autorisation « Contourner les protections de branche ». Vous pouvez éventuellement appliquer les restrictions aux administrateurs et aux rôles avec l’autorisation « Contourner les protections de branche », également. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
{% else %} Par défaut, les restrictions d’une règle de protection de branche ne s’appliquent pas aux personnes disposant d’autorisations d’administration sur le dépôt. Vous pouvez également choisir d’inclure des administrateurs.{% endif %}

{% data reusables.repositories.branch-rules-example %} Pour plus d’informations sur les modèles de nom de branche, consultez « [Gestion d’une règle de protection de branche](/github/administering-a-repository/managing-a-branch-protection-rule) ».

{% data reusables.pull_requests.you-can-auto-merge %}

## À propos des paramètres de protection de branche

Pour chaque règle de protection de branche, vous pouvez choisir d’activer ou de désactiver les paramètres suivants.
- [Exiger des révisions de demande de tirage avant de fusionner](#require-pull-request-reviews-before-merging)
- [Exiger des vérifications d’état avant la fusion](#require-status-checks-before-merging)
- [Exiger la résolution de la conversation avant de fusionner](#require-conversation-resolution-before-merging)
- [Exiger des validations signées](#require-signed-commits)
- [Exiger un historique linéaire](#require-linear-history) {% ifversion fpt or ghec %}
- [Exiger une file d’attente de fusion](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- [Exiger que les déploiements réussissent avant de fusionner](#require-deployments-to-succeed-before-merging) {%- endif %} {%- ifversion lock-branch %}
- [Verrouiller une branche](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [Ne pas autoriser le contournement des paramètres ci-dessus](#do-not-allow-bypassing-the-above-settings){% else %}- [Inclure les administrateurs](#include-administrators){% endif %}
- [Restreindre les personnes pouvant effectuer un envoi (push) à des branches correspondantes](#restrict-who-can-push-to-matching-branches)
- [Autoriser les envois (push) forcés](#allow-force-pushes)
- [Autoriser les suppressions](#allow-deletions)

Pour plus d’informations sur la configuration de la protection de branche, consultez « [Gestion d’une règle de protection de branche](/github/administering-a-repository/managing-a-branch-protection-rule) ».

### Exiger des révisions de demande de tirage avant de fusionner

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Si vous activez les révisions requises, des collaborateurs ne peuvent envoyer (push) des modifications à une branche protégée que via une demande de tirage approuvée par le nombre requis de réviseurs disposant d’autorisations d’écriture.

Si une personne disposant d’autorisations d’administration choisit l’option **Demander des modifications** dans une révision, elle doit approuver la demande de tirage avant que celle-ci puisse être fusionnée. Si un réviseur qui demande des modifications sur une demande de tirage n’est pas disponible, toute personne disposant d’autorisations d’écriture sur le dépôt peut ignorer la révision bloquante.

{% data reusables.repositories.review-policy-overlapping-commits %}

Si un collaborateur tente de fusionner une demande de tirage avec des révisions en attente ou rejetées dans la branche protégée, il reçoit un message d’erreur.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Si vous le souhaitez, vous pouvez choisir d’ignorer des approbations de demandes de tirage obsolètes lors de l’envoi (push) de validations. Si quelqu’un envoie (push) une validation qui modifie le code d’une demande de tirage approuvée, l’approbation est ignorée et la demande de tirage ne peut pas être fusionnée. Cela ne s’applique pas si le collaborateur envoie des validations qui ne modifient pas de code, comme la fusion de la branche de base dans la branche de la demande de tirage. Pour plus d’informations sur la branche de base, consultez « [À propos des demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».

Si vous le souhaitez, vous pouvez restreindre la possibilité d’ignorer des révisions des demandes de tirage à des personnes ou équipes spécifiques. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».

Si vous le souhaitez, vous pouvez choisir d’exiger des révisions des propriétaires de code. Dans ce cas, toute demande de tirage affectant un code ayant un propriétaire doit être approuvée par celui-ci avant qu’elle puisse être fusionnée dans la branche protégée.

{% ifversion last-pusher-require-approval %} Si vous le souhaitez, vous pouvez exiger des approbations d’une autre personne que la dernière personne qui effectue une poussée vers une branche avant qu’une demande de tirage puisse être fusionnée. Cela garantit que plusieurs personnes voient les demandes de tirage dans leur état final avant qu’elles ne soient fusionnées dans une branche protégée. Si vous activez cette fonctionnalité, le dernier utilisateur qui pousse ses modifications a besoin d’une approbation, quelle que soit la protection de branche d’approbation requise. Les utilisateurs qui ont déjà révisé une demande de tirage peuvent effectuer une nouvelle approbation après la poussée la plus récente pour répondre à cette exigence.
{% endif %}

### Exiger des vérifications d’état avant la fusion

Les vérifications d’état requises garantissent que tous les tests CI requis ont réussi avant que des collaborateurs puissent apporter des modifications à une branche protégée. Les vérifications d’état requises peuvent être des vérifications ou des états. Pour plus d’informations, consultez « [À propos des vérifications d’état](/github/collaborating-with-issues-and-pull-requests/about-status-checks) ».

Avant de pouvoir activer des vérifications d’état requises, vous devez configurer le dépôt pour utiliser l’API d’état de commit. Pour plus d’informations, consultez « [États de commit](/rest/commits/statuses) » dans la documentation de l’API REST.

Une fois que des vérifications d’état requises sont activées, elles doivent toutes réussir avant que des collaborateurs puissent fusionner des modifications dans la branche protégée. Une fois que toutes les vérifications d’état requises ont réussi, toutes les validations doivent être soit envoyées (push) à une autre branche, puis fusionnées, soit envoyées directement à la branche protégée.

Toute personne ou intégration disposant d’autorisations d’écriture sur un dépôt peut définir l’état de toute vérification d’état dans le dépôt{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} mais, dans certains cas, il se peut que vous ne vouliez accepter de vérification d’état que d’une {% data variables.product.prodname_github_app %} spécifique. Lorsque vous ajoutez une vérification d’état requise, vous pouvez sélectionner une application qui a récemment défini cette vérification comme source attendue des mises à jour d’état.{% endif %} Si l’état est défini par une autre personne ou intégration, la fusion n’est pas autorisée. Si vous sélectionnez « toute source », vous pouvez toujours vérifier manuellement l’auteur de chaque état, répertorié dans la zone de fusion.

Vous pouvez configurer des vérifications d’état requises « lâches » ou « strictes ». Le type de vérification d’état requise que vous choisissez détermine si votre branche doit être à jour avec la branche de base avant de la fusion.

| Type de vérification d’état requise | Paramètre | Exigences pour la fusion | Considérations |
| --- | --- | --- | --- |
| **Strictes** | La case à cocher **Exiger que les branches soient à jour avant la fusion** est activée. | La branche **doit** être à jour avec la branche de base avant la fusion. | Il s’agit du comportement par défaut pour les vérifications d’état requises. D’autres builds peuvent être requises, car vous devez mettre à jour la branche principale après que d’autres collaborateurs ont fusionné des demandes de tirage dans la branche de base protégée.|
| **Lâches** | La case à cocher **Exiger que les branches soient à jour avant la fusion** n’est **pas** activée. | La branche **ne doit pas** être à jour avec la branche de base avant la fusion. | Vous aurez moins de builds requises, car vous n’aurez pas besoin de mettre à jour la branche principale après que d’autres collaborateurs auront fusionné des demandes de tirage. Des vérifications d’état peuvent échouer après que vous avez fusionné votre branche s’il existe des modifications incompatibles avec la branche de base. |
| **Désactivé** | La case à cocher **Exiger la réussite des vérifications d’état avant de fusionner** n’est **pas** activée. | La branche n’a aucune restriction de fusion. | Si les vérifications d’état requises ne sont pas activées, des collaborateurs peuvent fusionner la branche à tout moment, qu’elle soit ou non à jour avec la branche de base. Cela augmente la possibilité de modifications incompatibles.

Pour des informations sur la résolution des problèmes, consultez « [Résolution des problèmes liés aux vérifications de statut requises](/github/administering-a-repository/troubleshooting-required-status-checks) ».

### Exiger la résolution de la conversation avant de fusionner

Exige que tous les commentaires sur la demande de tirage soient résolus avant que celle-ci puisse être fusionnée dans une branche protégée. Cela garantit que tous les commentaires ont été traités ou ont fait l’objet d’un accusé de réception avant la fusion.

### Exiger des validations signées

Lorsque vous activez la signature de validation requise sur une branche, des contributeurs {% ifversion fpt or ghec %}et des bots{% endif %} ne peuvent envoyer (push) à la branche que des validations signées et vérifiées. Pour plus d’informations, consultez « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) ».

{% note %}

{% ifversion fpt or ghec %} **Remarques :** 

* Si vous avez activé le mode vigilant, ce qui indique que vos validations seront toujours signées, toutes les validations que {% data variables.product.prodname_dotcom %} identifie comme « Partiellement vérifiés » sont autorisées sur des branches exigeant des validations signées. Pour plus d’informations sur le mode vigilant, consultez « [Affichage des états de vérification pour toutes vos validations](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits) ».
* Si un collaborateur envoie (push) une validation non signée à une branche qui exige des signatures de validation, ce collaborateur devra rebaser la validation pour inclure une signature vérifiée, puis effectuer un envoi (push) forcé de la validation réécrite à la branche.

{% else %} **Remarque :** si un collaborateur envoie (push) une validation non signée à une branche qui exige des signatures de validation, ce collaborateur devra rebaser la validation pour inclure une signature vérifiée, puis effectuer un envoi (push) forcé de la validation réécrite à la branche.
{% endif %}

{% endnote %}

Vous pouvez toujours envoyer (push) des validations locales à la branche si elles sont signées et vérifiées. {% ifversion fpt or ghec %}Vous pouvez également fusionner des validations signées et vérifiées dans la branche à l’aide d’une demande de tirage sur {% data variables.product.product_name %}. En revanche, vous ne pouvez pas effectuer de « squash and merge » sur une demande de tirage dans la branche sur {% data variables.product.product_name %}, sauf si vous en êtes l’auteur.{% else %} Toutefois, vous ne pouvez pas fusionner des demandes de tirage dans la branche sur {% data variables.product.product_name %}.{% endif %} Vous pouvez {% ifversion fpt or ghec %}effectuer un « squash » sur des demandes de tirage et {% endif %}les fusionner localement. Pour plus d’informations, consultez « [Extraction des demandes de tirage localement](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) ».

{% ifversion fpt or ghec %} Pour plus d’informations sur les méthodes de fusion, consultez « [À propos des méthodes de fusion sur {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github) ».{% endif %}

### Exiger un historique linéaire

L’application d’un historique de validation linéaire empêche des collaborateurs d’envoyer (push) des validations de fusion à la branche. Cela signifie que toutes les demandes de tirage fusionnées dans la branche protégée doivent utiliser une fusion « squash » ou « rebase ». Un historique de validation strictement linéaire peut aider les équipes à inverser des modifications plus facilement. Pour plus d’informations sur les méthodes de fusion, consultez « [À propos des fusions de demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges) ».

Avant de pouvoir exiger un historique de validation linéaire, votre dépôt doit autoriser une fusion « squash » ou « rebase ». Pour plus d’informations, consultez « [Configuration des fusions de demandes de tirage](/github/administering-a-repository/configuring-pull-request-merges) ».

{% ifversion fpt or ghec %}
### Exiger une file d’attente de fusion

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### Exiger que les déploiements réussissent avant de fusionner

Vous pouvez exiger que des modifications aient été déployées avec succès dans des environnements spécifiques avant qu’une branche puisse être fusionnée. Par exemple, vous pouvez utiliser cette règle pour vous assurer que les modifications ont été déployées avec succès dans un environnement intermédiaire avant la fusion des modifications dans votre branche par défaut.

{% ifversion lock-branch %}
### Verrouiller une branche

Le verrouillage d’une branche garantit qu’aucun commit ne peut être effectué sur la branche. Par défaut, un dépôt dupliqué ne prend pas en charge la synchronisation à partir de son dépôt en amont. Vous pouvez activer **Autoriser la synchronisation de la duplication** pour tirer des modifications du dépôt en amont tout en empêchant d’autres contributions à la branche de la duplication.
{%  endif %}

{% ifversion bypass-branch-protections %}### Ne pas autoriser le contournement des paramètres ci-dessus{% else %}
### Inclure les administrateurs{% endif %}

{% ifversion bypass-branch-protections %} Par défaut, les restrictions d’une règle de protection des branches ne s’appliquent pas aux personnes qui ont des autorisations d’administrateur sur le dépôt ni aux rôles personnalisés avec l’autorisation « Contourner les protections de branche » sur un dépôt. 

Vous pouvez activer ce paramètre pour appliquer les restrictions aux administrateurs et aux rôles avec l’autorisation « Contourner les protections de branche », également.  Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
{% else %} Par défaut, les règles de branche protégée ne s’appliquent pas aux personnes disposant d’autorisations d’administration sur un dépôt. Vous pouvez activer ce paramètre pour inclure des administrateurs dans vos règles de branche protégée.{% endif %}

### Restreindre les personnes pouvant effectuer un envoi (push) à des branches correspondantes

{% ifversion fpt or ghec %} Vous pouvez activer des restrictions de branche si votre dépôt appartient à une organisation utilisant {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

Lorsque vous activez des restrictions de branche, seuls des utilisateurs, équipes ou applications autorisés peuvent effectuer un envoi (push) à la branche protégée. Vous pouvez afficher et modifier les utilisateurs, équipes ou applications disposant d’un accès en envoi (push) à une branche protégée dans les paramètres de la branche protégée. Lorsque des vérifications d’état sont requises, les personnes, équipes et applications disposant de l’autorisation d’effectuer un envoi (push) à une branche protégée sont toujours empêchées d’opérer une fusion dans la branche quand les vérifications requises échouent. Les personnes, équipes et applications disposant de l’autorisation d’effectuer un envoi (push) à une branche protégée doivent toujours créer une demande de tirage quand des demandes de tirage sont requises.

{% ifversion restrict-pushes-create-branch %} Si vous le souhaitez, vous pouvez appliquer les mêmes restrictions à la création de branches correspondant à la règle. Par exemple, si vous créez une règle qui n’autorise qu’une certaine équipe à effectuer un envoi (push) à toutes les branches contenant le mot `release`, seuls les membres de cette équipe pourront créer une branche contenant le mot `release`.
{% endif %}

Vous ne pouvez donner l’accès en envoi (push) à une branche protégée, ou accorder l’autorisation de créer une branche correspondante, qu’à des utilisateurs, équipes ou {% data variables.product.prodname_github_apps %} disposant d’un accès en écriture à un dépôt. Les personnes et applications disposant d’autorisations d’administration sur un dépôt sont toujours en mesure d’effectuer un envoi (push) à une branche protégée ou de créer une branche correspondante.

### Autoriser les envois (push) forcés

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Par défaut, {% data variables.product.product_name %} bloque les poussées (push) forcées sur toutes les branches protégées. Lorsque vous activez les envois (push) forcés à une branche protégée, vous avez le choix entre deux groupes pouvant effectuer des envois (push) forcés :

1. Autoriser toute personne disposant au moins d’autorisations d’écriture sur le dépôt à effectuer un envoi (push) forcé à la branche, y compris si cette personne dispose d’autorisations d’administration.
1. Autorisez uniquement des personnes ou équipes spécifiques effectuer un envoi (push) forcé à la branche.

Si quelqu’un effectue un envoi (push) forcé à une branche, cet envoi peut remplacer des validations sur lesquelles d’autres collaborateurs ont basé leur travail. Des personnes peuvent avoir des conflits de fusion ou des demandes de tirage endommagées.

{% else %} Par défaut, {% data variables.product.product_name %} bloque les envois (push) forcés sur toutes les branches protégées. Lorsque vous activez les envois (push) forcés à une branche protégée, toute personne disposant au moins d’autorisations d’écriture sur le dépôt peut effectuer un envoi (push) à la branche, y compris si cette personne dispose d’autorisations d’administration. Si quelqu’un effectue un envoi (push) forcé à une branche, cet envoi peut remplacer des validations sur lesquelles d’autres collaborateurs ont basé leur travail. Des personnes peuvent avoir des conflits de fusion ou des demandes de tirage endommagées.
{% endif %}

L’activation des envois (push) forcés ne remplace aucune autre règle de protection de branche. Par exemple, si une branche nécessite un historique de validation linéaire, vous ne pouvez envoyer (push) de force des validations de fusion à cette branche.

{% ifversion ghes or ghae %}Vous ne pouvez pas activer les envois (push) forcés pour une branche protégée si un administrateur de site a bloqué les envois (push) forcés à toutes les branches de votre dépôt. Pour plus d’informations, consultez « [Blocage des envois (push) forcés aux dépôts appartenant à un compte personnel ou à une organisation](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization) ».

Si un administrateur de site a bloqué les envois (push) forcés à la branche par défaut uniquement, vous pouvez toujours activer les envois (push) forcés pour toute autre branche protégée.{% endif %}

### Autoriser les suppressions

Par défaut, vous ne pouvez pas supprimer une branche protégée. Lorsque vous activez la suppression d’une branche protégée, toute personne disposant d’autorisations d’écriture sur le dépôt peut supprimer la branche.
