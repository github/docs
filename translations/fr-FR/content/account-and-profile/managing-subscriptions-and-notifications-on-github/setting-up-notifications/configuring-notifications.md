---
title: Configuration des notifications
intro: 'Choisissez le type d’activité sur {% data variables.product.prodname_dotcom %} pour lequel vous voulez recevoir des notifications et comment vous voulez que ces mises à jour soient délivrées.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060761'
---
## Options de remise de notifications

Vous pouvez recevoir des notifications pour l’activité sur {% data variables.product.product_location %} aux emplacements suivants.

  - Boîte de réception des notifications dans l’interface web {% data variables.product.product_location %} {% ifversion fpt or ghes or ghec %}
  - Boîte de réception de notifications sur {% data variables.product.prodname_mobile %}, qui se synchronise avec la boîte de réception sur {% data variables.product.product_location %}{% endif %}
  - Un client de messagerie qui utilise une adresse e-mail vérifiée, qui peut également se synchroniser avec la boîte de réception des notifications sur {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} et {% data variables.product.prodname_mobile %}{% endif %}

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Pour plus d’informations, consultez « [Choix de vos paramètres de notification](#choosing-your-notification-settings) ».
{% endif %}

{% data reusables.notifications.shared_state %}

### Avantages de la boîte de réception de notifications

La boîte de réception des notifications sur {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} et {% data variables.product.prodname_mobile %}{% endif %} inclut des options de triage conçues spécifiquement pour vos flux de notifications {% data variables.product.prodname_dotcom %}, y compris des options pour :
  - Trier plusieurs notifications à la fois.
  - Marquer les notifications terminées avec la mention **Terminé** et les supprimer de votre boîte de réception. Pour visualiser toutes vos notifications marquées **Terminé**, utilisez la requête `is:done`.
  - Enregistrer une notification pour l’examiner ultérieurement. Les notifications enregistrées sont indiquées dans votre boîte de réception et sont conservées indéfiniment. Pour visualiser toutes vos notifications enregistrées, utilisez la requête `is:saved`.
  - Se désinscrire et supprimer une notification de votre boîte de réception.
  - Obtenir un aperçu du problème, de la demande de tirage ou de la discussion d’équipe d’où provient la notification sur {% data variables.product.product_location %} à partir de la boîte de réception des notifications.
  - Voir une des raisons les plus récentes pour laquelle vous recevez une notification dans votre boîte de réception avec une étiquette `reasons`.
  - Créer des filtres personnalisés pour se concentrer sur différentes notifications quand vous le souhaitez.
  - Regrouper des notifications dans votre boîte de réception en fonction du dépôt ou de la date pour obtenir une vue d’ensemble rapide avec moins de changements de contexte.

{% ifversion fpt or ghes or ghec %} En outre, vous pouvez recevoir et trier des notifications sur votre appareil mobile avec {% data variables.product.prodname_mobile %}. Pour plus d’informations, consultez « [Gestion de vos paramètres de notification avec GitHub Mobile](#managing-your-notification-settings-with-github-mobile) » ou « [GitHub Mobile](/get-started/using-github/github-mobile) ».
{% endif %}

### Avantages de l’utilisation d’un client de messagerie pour les notifications

L’un des avantages offerts par l’utilisation d’un client de messagerie est que toutes vos notifications peuvent être conservées indéfiniment, en fonction de la capacité de stockage de votre client de messagerie. Vos notifications de boîte de réception ne sont conservées que pendant cinq mois sur {% data variables.product.prodname_dotcom %} sauf si vous les avez marquées comme **Enregistré**. Les notifications **Enregistré** sont conservées indéfiniment. Pour plus d’informations sur la stratégie de rétention de votre boîte de réception, consultez « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy) ».

L’envoi de notifications à votre client de messagerie vous permet également de personnaliser votre boîte de réception en fonction des paramètres de votre client de messagerie, qui peuvent inclure des étiquettes personnalisées ou codées en couleur.

Les notifications par e-mail offrent également une flexibilité quant aux types de notifications que vous recevez, et vous permettent de choisir différentes adresses e-mail pour les mises à jour. Par exemple, vous pouvez envoyer certaines notifications pour un dépôt à une adresse e-mail personnelle vérifiée. Pour plus d’informations sur les options de personnalisation d’e-mail, consultez « [Personnalisation de vos notifications par e-mail](#customizing-your-email-notifications) ».

## À propos des notifications de participation et de surveillance

Lorsque vous surveillez un dépôt, vous vous abonnez aux mises à jour relatives à l’activité dans ce dépôt. De même, lorsque vous surveillez les discussions d’une équipe spécifique, vous vous abonnez à toutes les mises à jour de conversation sur la page de cette équipe. Pour plus d’informations, consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ».

Pour voir les dépôts que vous surveillez, accédez à votre [page de surveillance](https://github.com/watching). Pour plus d’informations, consultez « [Gestion des abonnements et des notifications sur GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github) ».

{% ifversion ghae %}
### Configuration des notifications
{% endif %} Vous pouvez configurer des notifications pour un dépôt dans la page du dépôt ou dans votre page de surveillance.

### À propos des notifications personnalisées
Vous pouvez personnaliser les notifications pour un dépôt. Par exemple, vous pouvez choisir d’être averti uniquement lorsque des mises à jour d’un ou plusieurs types d’événements ({% data reusables.notifications-v2.custom-notification-types %}) se produisent dans un dépôt, ou ignorer toutes les notifications d’un dépôt. Pour plus d’informations, consultez « [Configuration de vos paramètres de surveillance pour un dépôt spécifique](#configuring-your-watch-settings-for-an-individual-repository) » ci-dessous.

### Participation à des conversations
Chaque fois que vous commentez une conversation ou que quelqu’un @mentions votre nom d’utilisateur, vous _participez_ à une conversation. Par défaut, vous êtes automatiquement abonné à une conversation lorsque vous y participez. Vous pouvez vous désabonner manuellement d’une conversation à laquelle vous avez participé en cliquant sur **Se désabonner** dans le problème ou la demande de tirage, ou via l’option **Se désabonner** dans la boîte de réception des notifications.

Pour les conversations que vous regardez ou auxquelles vous participez, vous pouvez choisir si vous souhaitez recevoir des notifications par e-mail ou via la boîte de réception des notifications sur {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} et {% data variables.product.prodname_mobile %}{% endif %}.

![Options de notifications de participation et de surveillance](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Par exemple :
  - Si vous ne souhaitez pas que les notifications soient envoyées à votre e-mail, désélectionnez **e-mail** pour les notifications de participation et de surveillance.
  - Si vous souhaitez recevoir des notifications par e-mail lorsque vous avez participé à une conversation, vous pouvez sélectionner **e-mail** sous « Participation ».

Si vous n’activez pas les notifications de participation ou de surveillance pour le web{% ifversion fpt or ghes or ghec %} et mobile{% endif %}, votre boîte de réception de notifications n’aura aucune mise à jour.

## Personnalisation de vos notifications par e-mail

Une fois que vous aurez activé les notifications par e-mail, {% data variables.product.product_location %} vous enverra des notifications sous forme d’e-mails multipart contenant à la fois des copies HTML et en texte brut du contenu. Le contenu de notification par e-mail inclut tout Markdown, @mentionsemojis, lien de hachage et autres, qui apparaissent dans le contenu d’origine sur {% data variables.product.product_location %}. Si vous souhaitez uniquement afficher le texte dans l’e-mail, vous pouvez configurer votre client de messagerie de façon à afficher uniquement la copie en texte brut.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Si vous utilisez Gmail, vous pouvez cliquer sur un bouton en regard de l’e-mail de notification pour accéder au problème ou à la demande de tirage d’origine qui a généré la notification.

![Boutons dans Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Choisissez une adresse e-mail par défaut à laquelle vous souhaitez envoyer des mises à jour pour les conversations que vous surveillez ou auxquelles vous participez. Vous pouvez également spécifier pour quelle activité sur {% data variables.product.product_location %} vous souhaitez recevoir des mises à jour à l’aide de votre adresse e-mail par défaut. Par exemple, choisissez si vous souhaitez recevoir des mises à jour à votre adresse e-mail par défaut pour les éléments suivants :
  - Commentaires sur les problèmes et les demandes de tirage
  - Révisions des demandes de tirage (pull requests)
  - Poussées (push) de demandes de tirage
  - Vos propres mises à jour, par exemple lorsque vous ouvrez, commentez ou fermez un problème ou une demande de tirage

En fonction de l’organisation propriétaire du dépôt, vous pouvez également envoyer des notifications à différentes adresses e-mail. Votre organisation peut exiger que l’adresse e-mail soit vérifiée pour un domaine spécifique. Pour plus d’informations, consultez « [Choisir où les notifications par e-mail de votre organisation sont envoyées](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent) ».

Vous pouvez également envoyer des notifications pour un dépôt spécifique à une adresse e-mail. Pour plus d’informations, consultez « [À propos des notifications par e-mail pour les poussées (push) vers votre dépôt](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository) ».

{% data reusables.notifications-v2.email-notification-caveats %}

## Filtrage des notifications par e-mail

Chaque notification par e-mail envoyée par {% data variables.product.product_location %} contient des informations d’en-tête. Les informations d’en-tête de chaque e-mail sont cohérentes. Vous pouvez donc les utiliser dans votre client de messagerie pour filtrer ou transférer toutes les notifications {% data variables.product.prodname_dotcom %} ou certains types de notifications {% data variables.product.prodname_dotcom %}.

Si vous pensez recevoir des notifications qui ne vous appartiennent pas, examinez les en-têtes `X-GitHub-Recipient` et `X-GitHub-Recipient-Address`. Ces en-têtes indiquent qui est le destinataire prévu. En fonction de votre configuration de messagerie, vous pouvez recevoir des notifications destinées à un autre utilisateur.

Les notifications par e-mail de {% data variables.product.product_location %} contiennent les informations d’en-tête suivantes :

| En-tête | Information |
| --- | --- |
| Adresse `From` | Cette adresse sera toujours {% ifversion fpt or ghec %}« `notifications@github.com` »{% else %}« l’adresse e-mail sans réponse configurée par votre administrateur de site »{% endif %}. |
| Champ`To` | Ce champ se connecte directement au thread.{% ifversion not ghae %} Si vous répondez à l’e-mail, vous ajouterez un nouveau commentaire à la conversation.{% endif %} |
| Adresse `Cc` | {% data variables.product.product_name %} vous `Cc` si vous êtes abonné à une conversation. La deuxième adresse e-mail `Cc` correspond à la raison de notification. Le suffixe de ces raisons de notification est {% data variables.notifications.cc_address %}. Les raisons de notification possibles sont les suivantes : <ul><li>`assign` : vous avez été affecté à un problème ou à une demande de tirage.</li><li>`author` : vous avez créé un problème ou une demande de tirage.</li><li>`ci_activity` : une exécution de flux de travail {% data variables.product.prodname_actions %} que vous avez déclenchée a été terminée.</li><li>`comment` : vous avez commenté un problème ou une demande de tirage.</li><li>`manual` : une mise à jour a été effectuée à un problème ou une demande de tirage auquel vous vous êtes abonné manuellement.</li><li>`mention` : vous avez été mentionné dans un problème ou une demande de tirage.</li><li>`push` : quelqu’un a commité dans une demande de tirage à laquelle vous êtes abonné.</li><li>`review_requested` : vous ou une équipe dont vous êtes membre avez été invité à réviser une demande de tirage.</li><li>`security_alert` : {% data variables.product.prodname_dotcom %} a détecté une vulnérabilité dans un dépôt pour lequel vous recevez des alertes.</li><li>`state_change` : une demande de tirage ou un problème auquel vous êtes abonné a été fermé ou ouvert.</li><li>`subscribed` : une mise à jour a eu lieu dans un dépôt que vous surveillez.</li><li>`team_mention` : une équipe dont vous êtes membre a été mentionnée dans un problème ou une demande de tirage.</li><li>`your_activity` : vous avez ouvert, commenté ou fermé un problème ou une demande de tirage.</li></ul> |
| Champ`mailing list` | Ce champ identifie le nom du dépôt et son propriétaire. Le format de cette adresse est toujours `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |
| Champ`X-GitHub-Severity` | {% data reusables.repositories.security-alerts-x-github-severity %} Les niveaux de gravité possibles sont les suivants :<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ». |

## Choix de vos paramètres de notification

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Dans la page des paramètres de notifications, choisissez la façon dont vous recevez des notifications quand :
    - Des mises à jour ont lieu dans les dépôts ou les discussions d’équipe que vous surveillez ou dans une conversation à laquelle vous participez. Pour plus d’informations, consultez « [À propos des notifications de participation et de surveillance](#about-participating-and-watching-notifications) ».
    - Vous accédez à un nouveau dépôt ou vous avez rejoint une nouvelle équipe. Pour plus d’informations, consultez [Surveillance automatique](#automatic-watching).
    - Il existe de nouvelles {% data variables.product.prodname_dependabot_alerts %} dans votre dépôt. Pour plus d’informations, consultez « [Options de notification des {% data variables.product.prodname_dependabot_alerts %}](#dependabot-alerts-notification-options) ».  {% ifversion fpt or ghec %}
    - Des mises à jour d’exécutions de flux de travail ont lieu dans des dépôts configurés avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Options de notification {% data variables.product.prodname_actions %}](#github-actions-notification-options) ».{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - De nouvelles clés de déploiement sont ajoutées à des dépôts appartenant à des organisations dont vous êtes propriétaire. Pour plus d’informations, consultez « [Options de notification des alertes d’organisation](#organization-alerts-notification-options) ».{% endif %}

## Surveillance automatique

Par défaut, chaque fois que l’accès à un nouveau dépôt vous est accordé, vous commencez automatiquement à surveiller ce dépôt. Chaque fois que vous rejoignez une nouvelle équipe, vous êtes automatiquement abonné aux mises à jour et vous recevez des notifications lorsque cette équipe est @mentioned. Si vous ne souhaitez pas être abonné automatiquement, vous pouvez désélectionner les options de surveillance automatique.

  ![Options de surveillance automatique](/assets/images/help/notifications-v2/automatic-watching-options.png)

Si l’option « Surveiller automatiquement les dépôts » est désactivée, vous ne surveillerez pas automatiquement vos propres dépôts. Vous devez accéder à votre page de dépôt et choisir l’option de surveillance.

## Configuration de vos paramètres de surveillance pour un dépôt spécifique

Vous pouvez choisir de surveiller ou non un dépôt spécifique. Vous pouvez également choisir d’être notifié uniquement de certains types d’événements tels que {% data reusables.notifications-v2.custom-notification-types %} (si c’est activé pour le dépôt) ou d’ignorer complètement un dépôt.

{% data reusables.repositories.navigate-to-repo %}
2. Dans le coin supérieur droit, sélectionnez le menu déroulant « Watch » pour cliquer sur une option de surveillance.
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![ Options de surveillance dans un menu déroulant pour un dépôt](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   L’option **Personnalisé** vous permet de personnaliser davantage les notifications afin d’être averti uniquement lorsque des événements spécifiques se produisent dans le dépôt, en plus de la participation et de @mentions.
{% else %} ![Options de surveillance dans un menu déroulant pour un dépôt](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Options de surveillance personnalisée dans un menu déroulant pour un dépôt](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) Si vous sélectionnez « Problèmes », vous serez averti et abonné aux mises à jour de chaque problème (y compris ceux qui existaient avant la sélection de cette option) dans le dépôt. Si vous êtes @mentioned dans une demande de tirage dans ce dépôt, vous recevrez également des notifications pour cela, et vous serez abonné aux mises à jour de cette demande de tirage spécifique, en plus d’être averti des problèmes.
   {% endif %}

## Choix de l’emplacement où les notifications par e-mail de votre organisation sont envoyées

Si vous appartenez à une organisation, vous pouvez choisir le compte e-mail auquel vous souhaitez envoyer les notifications pour l’activité de l’organisation. Par exemple, si vous appartenez à une organisation pour le travail, vous souhaiterez peut-être que vos notifications soient envoyées à votre adresse e-mail professionnelle plutôt qu’à votre adresse personnelle.    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Sous « E-mail de notification par défaut », sélectionnez l’adresse e-mail à laquelle vous souhaitez recevoir les notifications.   
![Liste déroulante des adresses e-mail de notification par défaut](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. Cliquez sur **Enregistrer**.  

### Personnalisation des routes de messagerie par organisation   

Si vous êtes membre de plusieurs organisations, vous pouvez configurer chacune d’elles de façon à envoyer des notifications à n’importe laquelle de{% ifversion fpt or ghec %} vos adresses e-mail vérifiées{% else %} les adresses e-mail de votre compte{% endif %}. {% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) ».{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Sous « Routage personnalisé », recherchez le nom de votre organisation dans la liste.   
![Liste d’organisations et d’adresses e-mail](/assets/images/help/notifications/notifications_org_emails.png)    
4. Cliquez sur **Modifier** en regard de l’adresse e-mail que vous souhaitez modifier.
![Modification des adresses e-mail d’une organisation](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. Sélectionnez l’une de vos adresses e-mail vérifiées, puis cliquez sur **Enregistrer**.    
![Changement de votre adresse e-mail par organisation](/assets/images/help/notifications/notifications_switching_org_email.gif)

## Options de notification des {% data variables.product.prodname_dependabot_alerts %} 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

Pour plus d’informations sur les méthodes de remise de notification disponibles, et pour obtenir des conseils sur l’optimisation de vos notifications pour {% data variables.product.prodname_dependabot_alerts %}, consultez « [Configuration des notifications pour {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts) ».

{% ifversion fpt or ghes or ghec %}
## Options de notification {% data variables.product.prodname_actions %}

Choisissez comment vous souhaitez recevoir les mises à jour d’exécution de flux de travail pour les dépôts que vous surveillez et qui sont configurés avec {% data variables.product.prodname_actions %}. Vous pouvez également choisir de recevoir des notifications uniquement pour les exécutions de flux de travail ayant échoué.

  ![Options de notification pour {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## Options de notification des alertes d’organisation 

Si vous êtes propriétaire d’une organisation, vous recevez des notifications par e-mail par défaut lorsque les membres de l’organisation ajoutent de nouvelles clés de déploiement aux dépôts au sein de l’organisation. Vous pouvez vous désabonner de ces notifications. Dans la page des paramètres de notification, sous « Alertes d’organisation », désélectionnez **E-mail**. 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Gestion de vos paramètres de notification avec {% data variables.product.prodname_mobile %}

Lorsque vous installez {% data variables.product.prodname_mobile %}, vous êtes automatiquement inscrit pour les notifications web. Dans l’application, vous pouvez activer les notifications Push pour les événements suivants.
- Mentions directes
- Affectations à des problèmes ou demandes de tirage
- Demandes de révision d’une demande de tirage
- Demandes d’approbation d’un déploiement

Vous pouvez également planifier quand {% data variables.product.prodname_mobile %} envoie des notifications Push à votre appareil mobile.

{% data reusables.mobile.push-notifications-on-ghes %}

### Gestion de vos paramètres de notification avec {% data variables.product.prodname_ios %}

1. Dans le menu inférieur, appuyez sur **Profil**.
2. Pour afficher vos paramètres, appuyez sur {% octicon "gear" aria-label="The Gear icon" %}.
3. Pour mettre à jour vos paramètres de notification, appuyez sur **Notifications**, puis utilisez les bascules pour activer ou désactiver vos types préférés de notifications Push.
4. Si vous le souhaitez, pour planifier quand {% data variables.product.prodname_mobile %} envoient des notifications Push à votre appareil mobile, appuyez sur **Heures de travail**, utilisez le bouton bascule **Heures de travail personnalisées**, puis choisissez quand vous souhaitez recevoir des notifications Push.

### Gestion de vos paramètres de notification avec {% data variables.product.prodname_android %}

1. Dans le menu inférieur, appuyez sur **Profil**.
2. Pour afficher vos paramètres, appuyez sur {% octicon "gear" aria-label="The Gear icon" %}.
3. Pour mettre à jour vos paramètres de notification, appuyez sur **Configurer les notifications**, puis utilisez les bascules pour activer ou désactiver vos types préférés de notifications Push.
4. Si vous le souhaitez, pour planifier quand {% data variables.product.prodname_mobile %} envoient des notifications Push à votre appareil mobile, appuyez sur **Heures de travail**, utilisez le bouton bascule **Heures de travail personnalisées**, puis choisissez quand vous souhaitez recevoir des notifications Push.

## Configuration de vos paramètres de surveillance pour un dépôt spécifique avec {% data variables.product.prodname_mobile %} 

Vous pouvez choisir de surveiller ou non un dépôt spécifique. Vous pouvez également choisir d’être notifié uniquement de {% ifversion fpt or ghec %}certains types d’événements tels que les problèmes, les demandes de tirage, les discussions (si c’est activé pour le dépôt) et {% endif %}des nouvelles mises en production, ou d’ignorer complètement un dépôt spécifique.

1. Sur {% data variables.product.prodname_mobile %}, accédez à la page principale du dépôt.
2. Appuyez sur **Watch**.
   ![Bouton de surveillance sur {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. Pour choisir les activités pour lesquelles vous recevez des notifications, appuyez sur vos paramètres de surveillance préférés.
   ![Menu déroulant des paramètres de surveillance dans {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
