---
title: À propos des modèles de développement collaboratif
intro: La façon dont vous utilisez les demandes de tirage dépend du type de modèle de développement que vous utilisez dans votre projet. Vous pouvez utiliser le modèle de duplication et tirage (fork et pull) ou le modèle de référentiel partagé.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139183'
---
## Modèle de duplication et de tirage

Dans le modèle de duplication et de tirage, tout le monde peut dupliquer (fork) un référentiel existant et envoyer (push) les modifications dans sa duplication personnelle. Aucune autorisation sur le référentiel source n’est nécessaire pour effectuer un envoi (push) vers une duplication appartenant à l’utilisateur. Les modifications peuvent être tirées dans le référentiel source par le responsable du projet. Lorsque vous ouvrez une demande de tirage (pull request) qui propose des modifications de votre duplication appartenant à l’utilisateur vers une branche du référentiel source (en amont), vous pouvez autoriser toute personne disposant d’un accès en envoi au référentiel en amont à apporter des modifications à votre demande de tirage.  Ce modèle est populaire avec les projets open source, car il réduit les contraintes pour les nouveaux contributeurs et permet à tout le monde de travailler indépendamment sans coordination initiale.

{% tip %}

**Conseil :** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## Modèle de référentiel partagé

Dans le modèle de référentiel partagé, les collaborateurs reçoivent un accès en envoi à un référentiel partagé unique. Des branches de rubriques sont créées lorsque des modifications doivent être apportées. Les demandes de tirage sont utiles dans ce modèle, car elles lancent une révision du code et une discussion générale sur un ensemble de modifications avant que celles-ci ne soient fusionnées dans la branche de développement principale. Ce modèle est plus répandu chez les petites équipes et dans les organisations qui collaborent sur des projets privés.

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
- « [Création d’une demande de tirage à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) »
- « [Autorisation des modifications sur une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) »
