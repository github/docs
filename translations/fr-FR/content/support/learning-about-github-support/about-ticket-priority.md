---
title: À propos de la priorité des tickets
intro: Vous pouvez communiquer la gravité de votre problème et son impact sur votre équipe et vous-même en définissant la priorité de votre ticket de support.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134155'
---
Quand vous contactez {% data variables.contact.enterprise_support %}, vous pouvez sélectionner l’une des {% ifversion ghes or ghae %}quatre{% else %}trois{% endif %} priorités pour le ticket : {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} ou {% data variables.product.support_ticket_priority_low %}.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Priorité des tickets pour {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Priorité des tickets pour {% data variables.product.prodname_advanced_security %}

| Priority | Description |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} ne fonctionne pas, s’est arrêté ou est si fortement affecté que l’utilisateur ne peut raisonnablement pas continuer à utiliser le logiciel. Aucune solution de contournement n’est disponible. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} fonctionne de manière incohérente, ce qui entraîne une utilisation et une productivité altérées de l’utilisateur final. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} fonctionne de manière cohérente, mais l’utilisateur final demande des modifications mineures du logiciel, concernant par exemple des mises à jour de la documentation, des défauts esthétiques ou des améliorations.|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

Vous pouvez envoyer des questions prioritaires si vous avez acheté {% data variables.product.prodname_ghe_cloud %} ou si vous êtes membre, collaborateur externe ou responsable de facturation d’une organisation {% data variables.product.prodname_dotcom %} actuellement abonnée à {% data variables.product.prodname_ghe_cloud %}.

Questions qui bénéficient de réponses prioritaires :
- Inclure des questions relatives à votre incapacité à accéder ou à utiliser la fonctionnalité de contrôle de version principale de {% data variables.product.prodname_dotcom %}
- Inclure des situations liées à la sécurité de votre compte
- Ne pas inclure de services ni de fonctionnalités périphériques, comme les questions sur Gists, {% data variables.product.prodname_pages %} ou les notifications par e-mail
- Inclure des questions uniquement sur les organisations qui utilisent actuellement {% data variables.product.prodname_ghe_cloud %}

Pour bénéficier d’une réponse prioritaire, vous devez :
- Envoyer votre question [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) à partir d’une adresse e-mail vérifiée associée à une organisation qui utilise actuellement {% data variables.product.prodname_ghe_cloud %}
- Soumettre un nouveau ticket de support pour chaque situation de priorité individuelle
- Envoyer votre question du lundi au vendredi dans votre fuseau horaire local
- Comprendre que la réponse à une question prioritaire est reçue par e-mail
- Collaborez avec {% data variables.contact.github_support %} et fournissez toutes les informations demandées par {% data variables.contact.github_support %}

{% note %}

**Remarque :** les questions ne peuvent pas bénéficier d’une réponse prioritaire si elles sont envoyées lors d’un jour férié local dans votre région.

{% endnote %}

Temps de réponse cible de huit heures :
- Commence quand {% data variables.contact.github_support %} reçoit votre question
- Ne commence pas tant que vous n’avez pas fourni suffisamment d’informations pour répondre à la question, sauf si vous indiquez spécifiquement que vous ne disposez pas d’assez d’informations
- Ne s’applique pas le week-end dans votre fuseau horaire local ni les jours fériés locaux dans votre région

{% note %}

**Remarque :** {% data variables.contact.github_support %} ne garantit pas la résolution de votre question prioritaire. {% data variables.contact.github_support %} peuvent faire monter ou descendre les problèmes selon l’état des questions prioritaires, en fonction de l’évaluation raisonnable des informations fournies.

{% endnote %}

{% endif %}

## Pour aller plus loin

- « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) »
