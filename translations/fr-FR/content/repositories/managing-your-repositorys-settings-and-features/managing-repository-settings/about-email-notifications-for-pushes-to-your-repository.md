---
title: À propos des notifications par e-mail pour les envois (push) vers votre référentiel
intro: Vous pouvez choisir d’envoyer automatiquement des notifications par e-mail à une adresse e-mail spécifique quand une personne effectue une poussée (push) vers le dépôt.
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132170'
---
{% data reusables.notifications.outbound_email_tip %}

Chaque notification par e-mail pour un référentiel répertorie les nouvelles validations et les liens vers une version différentielle contenant uniquement ces validations. Dans la notification par e-mail, vous verrez :

- Le nom du référentiel dans lequel la validation a été effectuée
- La branche dans laquelle la validation a été effectuée
- SHA1 de la validation, y compris un lien vers la différence dans {% data variables.product.product_name %}
- L’auteur de la validation
- La date à laquelle la validation a été effectuée
- Les fichiers qui ont été modifiés dans le cadre de la validation
- Message de commit

Vous pouvez filtrer les notifications par e-mail que vous recevez pour les envois (push) vers un référentiel. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications) ».

## Activation des notifications par e-mail pour les envois (push) vers votre référentiel

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. Entrez jusqu’à deux adresses e-mail, séparées par des espaces blancs, auxquelles vous souhaitez envoyer des notifications. Si vous souhaitez envoyer des e-mails à plusieurs comptes, définissez l’une des adresses e-mail sur une adresse e-mail de groupe.
![Zone de texte de l’adresse e-mail](/assets/images/help/settings/email_services_addresses.png)
1. Si vous utilisez votre propre serveur, vous pouvez vérifier l’intégrité des e-mails via **l’en-tête Approuvé**. **L’en-tête Approuvé** est un jeton ou un secret que vous saisissez dans ce champ et qui est envoyé avec l’e-mail. Si l’en-tête `Approved` d’un e-mail correspond au jeton, vous avez la garantie que l’e-mail provient de {% data variables.product.product_name %}.
![Zone de texte d’en-tête Approuvé d’e-mail](/assets/images/help/settings/email_services_approved_header.png)
7. Cliquez sur **Notifications d’installation**.
![Bouton Notifications d’installation](/assets/images/help/settings/setup_notifications_settings.png)

## Pour aller plus loin
- « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications) »

