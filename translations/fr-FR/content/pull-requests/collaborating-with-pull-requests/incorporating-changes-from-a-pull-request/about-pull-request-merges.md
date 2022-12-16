---
title: À propos des fusions de demande de tirage
intro: 'Vous pouvez [fusionner des demandes de tirage (pull request)](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) en conservant tous les commits dans une branche de fonctionnalité, en effectuant un squash de tous les commits en un seul commit ou en rebasant des commits individuels de la branche `head` sur la branche `base`.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 512a32eb3f918653eab1127aecb70a2fbc220571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580438'
---
## Fusionner vos validations

{% data reusables.pull_requests.default_merge_option %}

## Effectuer un squash et une fusion de vos validations

{% data reusables.pull_requests.squash_and_merge_summary %}

### Message de fusion pour une fusion de Squash

{% ifversion default-merge-squash-commit-message %} Lorsque vous effectuez un squash et une fusion, {% data variables.product.prodname_dotcom %} génère un message de validation par défaut que vous pouvez modifier. Selon la façon dont le référentiel est configuré et le nombre de validations dans la demande de tirage, sans inclure les validations de fusion, ce message peut inclure le titre de la demande de tirage, la description de la demande de tirage ou des informations sur les validations.
{% else %} Lorsque vous effectuez un squash et une fusion, {% data variables.product.prodname_dotcom %} génère un message de validation par défaut que vous pouvez modifier. Le message par défaut dépend du nombre de validations de la demande de tirage, sans inclure les validations de fusion.

Nombre de validations | Résumé | Description |
----------------- | ------- | ----------- | 
Une validation | Titre du message de validation pour la validation unique, suivi du numéro de la demande de tirage | Texte du corps du message de validation pour la validation unique
Plusieurs validations | Titre de la demande de tirage, suivi du numéro de la demande de tirage | Liste des messages de validation pour toutes les validations ayant fait l’objet d’un squash, par ordre de date
{% endif %}

Nombre de validations | Résumé | Description |
----------------- | ------- | ----------- |
Une validation | Titre du message de validation pour la validation unique, suivi du numéro de la demande de tirage | Texte du corps du message de validation pour la validation unique
Plusieurs validations | Titre de la demande de tirage, suivi du numéro de la demande de tirage | Liste des messages de validation pour toutes les validations ayant fait l’objet d’un squash, par ordre de date

{% ifversion default-merge-squash-commit-message %} Les personnes avec un accès gestionnaire ou administrateur à un référentiel peuvent configurer le message de fusion par défaut du référentiel pour que toutes les validations écrasées utilisent le titre de la demande de tirage, le titre de la demande de tirage et les détails de validation, ou le titre et la description de la demande de tirage. Pour plus d’informations, consultez « [Configurer le squashing de validation](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests) ».{% endif %}

{% ifversion ghes = 3.6 %} Les personnes disposant d’un accès administrateur à un référentiel peuvent configurer ce dernier pour qu’il utilise le titre de la demande de tirage comme message de fusion par défaut pour toutes les validations ayant fait l’objet d’un squash. Pour plus d’informations, consultez « [Configurer le squashing de validation](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests) ».
{% endif %}

### Squashing et fusion d’une branche longue

Si vous prévoyez de continuer à travailler sur la [branche principale](/github/getting-started-with-github/github-glossary#head-branch) d’une demande de tirage une fois cette dernière fusionnée, nous vous recommandons de ne pas soumettre la demande de tirage à un squash ou une fusion.

Lorsque vous créez une demande de tirage, {% data variables.product.prodname_dotcom %} identifie la validation la plus récente située sur la branche principale et la [branche de base](/github/getting-started-with-github/github-glossary#base-branch) : la validation ancêtre commune. Lorsque soumettez la demande de tirage à un squash et une fusion, {% data variables.product.prodname_dotcom %} crée une validation sur la branche de base qui contient toutes les modifications que vous avez apportées à la branche principale depuis la validation ancêtre commune.

Cette validation se trouvant uniquement sur la branche de base et non sur la branche principale, l’ancêtre commun des deux branches ne change pas. Si vous continuez à travailler sur la branche principale, créez une nouvelle demande de tirage entre les deux branches. La demande de tirage inclura toutes les validations depuis l’ancêtre commun, y compris les validations ayant fait l’objet d’un squash et d’une fusion dans la demande de tirage précédente. En l’absence de conflits, vous pouvez fusionner ces validations en toute sécurité. Cela étant, ce workflow peut créer des conflits. Si vous continuez à soumettre les demandes de tirage d’une branche principale longue à un squash et une fusion, vous devrez résoudre les mêmes conflits à plusieurs reprises.

## Rebaser et fusionner vos validations

{% data reusables.pull_requests.rebase_and_merge_summary %}

Vous ne pouvez pas rebaser et fusionner automatiquement sur {% data variables.product.product_location %} lorsque :
- La demande de tirage présente des conflits de fusion.
- La rebasage des validations de la branche de base vers la branche principale entraîne des conflits.
- Le rebasage des validations est considéré comme « dangereux », par exemple lorsqu’une rebase est possible sans conflits de fusion, mais produit un résultat différent de celui d’une fusion.

Si vous souhaitez toujours rebaser les validations, mais que vous ne pouvez pas rebaser et fusionner automatiquement sur {% data variables.product.product_location %}, vous devez :
- Rebaser la branche de rubrique (ou branche principale) sur la branche de base localement sur la ligne de commande
- [Résoudre les conflits de fusion sur la ligne de commande](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Forcer l’envoi (push) des validations rebasées vers la branche de rubrique de la demande de tirage (ou la branche principale distante).

Toute personne disposant d’autorisations d’écriture dans le référentiel peut alors [fusionner les modifications](/articles/merging-a-pull-request/) à l’aide du bouton rebaser et fusionner sur {% data variables.product.product_location %}.

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/articles/about-pull-requests/) »
- « [Traitement des conflits de fusion](/github/collaborating-with-pull-requests/addressing-merge-conflicts) »
