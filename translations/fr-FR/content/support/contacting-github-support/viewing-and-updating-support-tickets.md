---
title: Affichage et mise à jour des tickets de support
intro: 'Vous pouvez afficher vos tickets de support{% ifversion ghes or ghec %}, collaborer avec des collègues sur des tickets,{% endif %} et répondre à {% data variables.contact.github_support %} à l’aide de {% data variables.contact.support_portal %}.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: b735331d90c590ff6911fed44e181563b44bfc27
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193386'
---
## À propos de la gestion des tickets

{% data reusables.support.zendesk-old-tickets %}

Vous pouvez utiliser le [portail de support GitHub](https://support.github.com/) pour afficher les tickets de support actuels et passés et répondre à {% data variables.contact.github_support %}. Après 120 jours, les tickets résolus sont archivés{% ifversion ghec or ghes or ghae %} et les tickets archivés peuvent uniquement être consultés pour les comptes d’entreprise{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## Affichage de vos tickets de support récents

{% data reusables.support.view-open-tickets %}
1. Sous la zone de texte, vous pouvez lire l’historique des commentaires. La réponse la plus récente apparaît en haut.

   ![Capture d’écran de l’historique des commentaires de tickets de support, avec la réponse la plus récente en haut](/assets/images/help/support/support-recent-response.png)

1. Si vous le souhaitez, pour traduire le commentaire du ticket, cliquez sur {% octicon "globe" aria-label="The globe icon" %} et choisissez votre langue préférée dans le menu déroulant. Vous pouvez traduire votre ticket de support en chinois (simplifié), en français, en allemand, en japonais, en portugais (Brésil) ou en espagnol.

   ![Capture d’écran d’un ticket de support avec le menu déroulant montrant les options de traduction en évidence](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes or ghae %}

## Affichage de vos tickets de support archivés

Vous pouvez uniquement afficher les tickets archivés d’ compte d’entreprise.

{% data reusables.support.navigate-to-my-tickets %}
1. Sélectionnez le menu déroulant **Mes tickets** et cliquez sur le nom du compte d’entreprise. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Capture d’écran du menu déroulant « Mes tickets ».](/assets/images/help/support/ticket-context.png)
1. Sous la table « Mes tickets », cliquez sur **Afficher les tickets archivés**.

{% endif %}

## Mise à jour de tickets de support

{% data reusables.support.view-open-tickets %}
1. Si le problème est résolu, sous la zone de texte, cliquez sur **Fermer le ticket**.
![Capture d’écran montrant l’emplacement du bouton « Fermer le ticket ».](/assets/images/help/support/close-ticket.png)
1. Pour répondre au support GitHub et ajouter un nouveau commentaire au ticket, entrez votre réponse dans la zone de texte.
![Capture d’écran du champ texte « Ajouter un commentaire ».](/assets/images/help/support/new-comment-field.png)
1. Pour ajouter votre commentaire au ticket, cliquez sur **Commentaire**.
![Capture d’écran du bouton « Commentaire ».](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Collaboration sur les tickets de support

Vous pouvez collaborer avec vos collègues sur des tickets de support à l’aide du portail de support. Les propriétaires, les gestionnaires de facturation et d’autres membres d’entreprise disposant de droits de support peuvent afficher les tickets associés à un compte d’entreprise ou à une organisation gérée par un compte d’entreprise. Pour plus d’informations, consultez « [Gestion des droits au support pour votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise) ».

En plus d’afficher les tickets, vous pouvez également ajouter des commentaires aux tickets de support si votre adresse e-mail est copiée sur le ticket ou si la personne qui a ouvert le ticket a utilisé une adresse e-mail avec un domaine vérifié pour le compte d’entreprise ou l’organisation gérée par un compte d’entreprise. Pour plus d’informations sur la vérification d’un domaine, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) » et « [Vérification ou approbation d’un domaine pour votre organisation](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

{% endif %}

## Pour aller plus loin

- « [À propos du support GitHub](/support/learning-about-github-support/about-github-support) »
