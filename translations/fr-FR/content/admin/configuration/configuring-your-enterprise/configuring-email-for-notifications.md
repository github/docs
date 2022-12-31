---
title: Configuration de la messagerie pour les notifications
intro: 'Pour permettre aux utilisateurs de répondre facilement et rapidement aux activités sur {% data variables.product.product_name %}, vous pouvez configurer {% data variables.product.product_location %} afin d’envoyer des notifications par e-mail pour les problèmes, les demandes de tirage et les commentaires de commit.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d7dd82fa95db462abe8d9d19e8df60a45dab3f0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147718132'
---
{% ifversion ghae %} Les propriétaires d’entreprise peuvent configurer la messagerie pour les notifications.
{% endif %}
## Configuration de SMTP pour votre entreprise

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. Sélectionnez **Activer l’e-mail**. Si l’e-mail sortant et entrant s’en trouvent activés, pour que l’e-mail sortant fonctionne, vous devez aussi configurer vos paramètres DNS, comme décrit ci-dessous dans « [Configuration des paramètres DNS et de pare-feu pour autoriser les e-mails entrants](#configuring-dns-and-firewall-settings-to-allow-incoming-emails) ».
![Activer l’e-mail sortant](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Tapez les paramètres de votre serveur SMTP.
      - Dans le champ **Adresse du serveur**, tapez l’adresse de votre serveur SMTP.
      - Dans le champ **Port**, tapez le port utilisé par votre serveur SMTP pour l’envoi d’e-mail.
      - Dans le champ **Domaine**, tapez le nom de domaine que votre serveur SMTP enverra avec une réponse HELO, le cas échéant.
      - Sélectionnez la liste déroulante **Authentification**, puis choisissez le type de chiffrement utilisé par votre serveur SMTP.
      - Dans le champ **Adresse e-mail sans réponse**, tapez l’adresse e-mail à utiliser dans les champs De et À pour tous les e-mails de notification.      
6. Si vous souhaitez ignorer tous les e-mails entrants qui sont adressés à l’adresse e-mail sans réponse, sélectionnez **Ignorer les e-mails adressés à l’adresse e-mail sans réponse**.
![Case à cocher pour ignorer les e-mails adressés à l’adresse e-mail sans réponse](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. Sous **Support**, choisissez un type de lien pour offrir un support supplémentaire à vos utilisateurs.
    - **E-mail :** Adresse e-mail interne.
    - **URL :** Lien vers un site de support interne. Vous devez inclure `http://` ou `https://`.
  ![E-mail ou URL du support](/assets/images/enterprise/management-console/support-email-url.png)
8. [Testez la remise d’e-mail](#testing-email-delivery).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. Sélectionnez **Activer l’e-mail**.
  ![Case à cocher « Activer » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Tapez les paramètres de votre serveur de messagerie.
    - Dans le champ **Adresse du serveur**, tapez l’adresse de votre serveur SMTP.
    - Dans le champ **Port**, tapez le port utilisé par votre serveur SMTP pour l’envoi d’e-mail.
    - Dans le champ **Domaine**, tapez le nom de domaine que votre serveur SMTP enverra avec une réponse HELO, le cas échéant.
    - Sélectionnez la liste déroulante **Authentification**, puis choisissez le type de chiffrement utilisé par votre serveur SMTP.
    - Dans le champ **Adresse e-mail sans réponse**, tapez l’adresse e-mail à utiliser dans les champs De et À pour tous les e-mails de notification.
4. Si vous souhaitez ignorer tous les e-mails entrants qui sont adressés à l’adresse e-mail sans réponse, sélectionnez **Ignorer les e-mails adressés à l’adresse e-mail sans réponse**.
  ![Case à cocher « Ignorer » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Cliquez sur **Tester les paramètres d’e-mail**.
  ![Bouton « Tester les paramètres d’e-mail » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-test-email.png)
6. Sous « Envoyer un e-mail de test à », tapez l’adresse e-mail à laquelle vous souhaitez envoyer un e-mail de test, puis cliquez sur **Envoyer l’e-mail de test**.
  ![Bouton « Envoyer un e-mail de test » pour la configuration des paramètres d’e-mail](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Cliquez sur **Enregistrer**.
  ![Bouton « Enregistrer » pour la configuration du contact du support de l’entreprise](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## Test de la remise d’e-mail

1. En haut de la section **E-mail**, cliquez sur **Tester les paramètres d’e-mail**.
![Tester les paramètres d’e-mail](/assets/images/enterprise/management-console/test-email.png)
2. Dans le champ **Envoyer un e-mail de test à**, tapez l’adresse à laquelle envoyer l’e-mail de test.
![Tester l’adresse e-mail](/assets/images/enterprise/management-console/test-email-address.png)
3. Cliquez sur **Envoyer l’e-mail de test**.
![Envoyer un e-mail de test](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Conseil :** Si des erreurs SMTP se produisent pendant l’envoi d’un e-mail de test (par exemple, un échec de remise immédiate ou une erreur de configuration du courrier sortant), elles apparaissent dans la boîte de dialogue Paramètres de l’e-mail de test.

  {% endtip %}

4. Si l’e-mail de test échoue, [corrigez vos paramètres d’e-mail](#troubleshooting-email-delivery).
5. Si l’e-mail de test aboutit, au bas de la page, cliquez sur **Enregistrer les paramètres**.
![Bouton Enregistrer les paramètres](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## Mise en application de TLS pour les connexions SMTP

Vous pouvez appliquer le chiffrement TLS pour toutes les connexions SMTP entrantes, ce qui peut vous aider à répondre à une condition de certification ISO-27017.

{%- ifversion ghes = 3.6 %} {% note %}

**Remarque** : L’application du protocole TLS pour les connexions SMTP n’est pas disponible dans {% data variables.product.product_name %} 3.6.0. La fonctionnalité sera disponible dans une prochaine version.

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Sous « Authentification », sélectionnez **Appliquer l’authentification TLS (recommandé)** .

   ![Capture d’écran de la case à cocher « Appliquer l’authentification TLS (recommandé) »](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## Configuration des paramètres DNS et de pare-feu pour autoriser les e-mails entrants

Si vous souhaitez autoriser les réponses par e-mail aux notifications, vous devez configurer vos paramètres DNS.

1. Vérifiez que le port 25 de l’instance est accessible à votre serveur SMTP.
2. Créez un enregistrement A qui pointe vers `reply.[hostname]`. Selon la configuration de votre fournisseur DNS et de l’hôte de votre instance, vous pourrez peut-être créer un enregistrement A unique qui pointe vers `*.[hostname]`.
3. Créez un enregistrement MX qui pointe vers `reply.[hostname]` de sorte que les e-mails adressés à ce domaine soient routés vers l’instance.
4. Créez un enregistrement MX qui fait pointer `noreply.[hostname]` vers `[hostname]` de sorte que les réponses à l’adresse `cc` dans les e-mails de notification soient routés vers l’instance. Pour plus d’informations, consultez {% ifversion ghes %}« [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) »{% else %}« [À propos des notifications par e-mail](/github/receiving-notifications-about-activity-on-github/about-email-notifications) »{% endif %}.

## Résolution des problèmes de remise d’e-mail

### Créer un bundle de support

Si vous ne pouvez pas déterminer l’origine du problème à la lecture du message d’erreur affiché, vous pouvez télécharger un [bundle de support](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support) contenant l’intégralité de la conversation SMTP entre votre serveur de messagerie et {% data variables.product.prodname_ghe_server %}. Une fois que vous avez téléchargé et extrait le bundle, examinez l’ensemble du journal de conversation SMTP et les erreurs associées dans les entrées de *enterprise-manage-logs/unicorn.log*.

Vous devriez trouver dans le journal unicorn une transaction comparable à celle-ci :

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Voici ce que ce journal révèle de l’appliance :

* Elle a ouvert une connexion avec le serveur SMTP (`Connection opened: smtp.yourdomain.com:587`).
* Elle a réussi à établir une connexion et a choisi d’utiliser TLS (`TLS connection started`).
* Le type d’authentification `login` a été utilisé (`<- "AUTH LOGIN\r\n"`).
* Le serveur SMTP a rejeté l’authentification comme étant non valide (`-> "535-5.7.1 Username and Password not accepted.`).

### Vérifier les journaux de {% data variables.product.product_location %}

Si vous avez besoin de vérifier que votre e-mail entrant fonctionne, vous pouvez examiner deux fichiers journaux sur votre instance : */var/log/mail.log* et */var/log/mail-replies/metroplex.log.*

*/var/log/mail.log* vérifie que les messages parviennent à votre serveur. Voici un exemple de réponse par e-mail ayant abouti :

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Notez que le client commence par se connecter, puis la file d’attente devient active. Ensuite, le message est remis, le client est supprimé de la file d’attente, puis la session se déconnecte.

*/var/log/mail-replies/metroplex.log* indique si les e-mails entrants sont traités pour être ajoutés aux problèmes et aux demandes de tirage comme réponses. Voici un exemple de message ayant abouti :

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Vous remarquerez que `metroplex` l’intercepte le message entrant, le traite, puis déplace le fichier vers `/data/user/incoming-mail/success`.{% endif %}

### Vérifier vos paramètres DNS

Afin de traiter correctement les e-mails entrants, vous devez configurer un enregistrement A valide (ou CNAME) ainsi qu’un enregistrement MX. Pour plus d’informations, consultez « [Configuration des paramètres DNS et de pare-feu pour autoriser les e-mails entrants](#configuring-dns-and-firewall-settings-to-allow-incoming-emails) ».

### Vérifier les paramètres du pare-feu ou du groupe de sécurité AWS

Si {% data variables.product.product_location %} se trouve derrière un pare-feu ou est servi via un groupe de sécurité AWS, vérifiez que le port 25 est ouvert à tous les serveurs de messagerie qui envoient des e-mails à `reply@reply.[hostname]`.

### Contacter le support technique
{% ifversion ghes %} Si vous ne parvenez toujours pas à résoudre le problème, contactez {% data variables.contact.contact_ent_support %}. Joignez le fichier de sortie de `http(s)://[hostname]/setup/diagnostics` à votre e-mail pour nous aider à résoudre votre problème.
{% elsif ghae %} Vous pouvez contacter le {% data variables.contact.github_support %} pour obtenir une aide à la configuration de l’e-mail pour faire transiter les notifications par votre serveur SMTP. Pour plus d’informations, consultez « [Obtention d’aide auprès du {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support) ».
{% endif %}
