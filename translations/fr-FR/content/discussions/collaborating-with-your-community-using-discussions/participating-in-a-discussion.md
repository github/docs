---
title: Participation à une discussion
intro: 'Vous pouvez converser avec la communauté et les chargés de maintenance d’un forum dans le dépôt concernant un projet dans {% data variables.product.product_name %}.'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
ms.openlocfilehash: 07db8d3583c218e592ca1b68171292e52fcfc12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410234'
---
## À propos de la participation à une discussion

{% data reusables.discussions.about-discussions %} Pour plus d’informations, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».

En plus de commencer ou de voir une discussion ou un sondage, vous pouvez laisser un commentaire en réponse au commentaire d’origine de l’auteur de la discussion. Vous pouvez également créer un thread de commentaire en répondant à un commentaire individuel laissé par un autre membre de la communauté dans la discussion, et réagir aux commentaires avec des emojis.

{% ifversion fpt or ghec %}Vous pouvez bloquer des utilisateurs et signaler du contenu inapproprié pour maintenir un environnement sûr et agréable pour vous-même dans {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Gestion de votre sécurité sur {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github) ».{% endif %}

## Prérequis

{% data variables.product.prodname_discussions %} doit être activé sur le référentiel ou l’organisation pour que vous puissiez participer à une discussion dans le référentiel ou l’organisation. Pour plus d’informations, consultez « [Activation ou désactivation de {% data variables.product.prodname_discussions %} pour un référentiel](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) » et « [Activation ou désactivation de GitHub Discussions pour une organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization) ».

## Création d’une discussion

{% data reusables.discussions.starting-a-discussion %}

## Création d’un sondage

{% data reusables.discussions.starting-a-poll %}

## Marquage d’un commentaire comme une réponse

Les auteurs de discussion et les utilisateurs avec un rôle de triage ou supérieur sur un dépôt peuvent marquer un commentaire comme étant la réponse à une discussion dans le dépôt.
De même, les auteurs de discussion et les utilisateurs ayant le rôle de triage ou supérieur pour le référentiel source pour les discussions de l’organisation peuvent marquer un commentaire comme réponse à une discussion au sein de l’organisation.

{% data reusables.discussions.marking-a-comment-as-an-answer %}
