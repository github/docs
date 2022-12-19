---
title: Transfert de journaux
intro: '{% data variables.product.product_name %} utilise `syslog-ng` pour transférer les journaux {% ifversion ghes %}système{% elsif ghae %}Git{% endif %} et des applications vers le serveur que vous spécifiez.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104205'
---
## À propos du transfert de journaux

Tous les systèmes de collecte de journaux prenant en charge les flux de journaux de type Syslog sont pris en charge (par exemple [, Logstash](http://logstash.net/) et [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

Quand vous activez le transfert de journaux, vous devez charger un certificat d’autorité de certification pour chiffrer les communications entre les points de terminaison Syslog. Votre appliance et le serveur Syslog distant effectuent une vérification SSL bidirectionnelle, chacun fournissant un certificat à l’autre et validant le certificat reçu.

## Activation du transfert de journaux

{% ifversion ghes %}
1. Dans la page des paramètres de la {% data variables.enterprise.management_console %}, dans la barre latérale gauche, cliquez sur **Monitoring**.
1. Sélectionnez **Activer le transfert de journaux**.
1. Dans le champ **Adresse du serveur**, tapez l’adresse du serveur vers lequel vous souhaitez transférer les journaux. Vous pouvez spécifier plusieurs adresses dans une liste en les séparant par des virgules.
1. Dans le menu déroulant Protocole, sélectionnez le protocole à utiliser pour communiquer avec le serveur de journaux. Le protocole s’applique à toutes les destinations de journal spécifiées.
1. Si vous le souhaitez, sélectionnez **Activer TLS**. Nous vous recommandons d’activer TLS selon vos stratégies de sécurité locales, en particulier en présence de réseaux non approuvés entre l’appliance et les serveurs journaux distants. 
1. Pour chiffrer la communication entre les points de terminaison Syslog, cliquez sur **Choisir un fichier** et choisissez un certificat d’autorité de certification pour le serveur Syslog distant. Vous devez charger un bundle d’autorités de certification contenant une concaténation des certificats des autorités de certification impliquées dans la signature du certificat du serveur de journaux distant. Toute la chaîne de certificats sera validée et doit se terminer par un certificat racine. Pour plus d’informations, consultez la [section sur les options TLS dans la documentation syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Sous **Paramètres**, en regard de {% octicon "gear" aria-label="The Settings gear" %}, cliquez sur **Transfert de journaux**.
  ![Onglet Transfert de journaux](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Sous « Transfert de journaux », sélectionnez **Activer le transfert de journaux**.
  ![Case à cocher pour activer le transfert de journaux](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Sous « Adresse du serveur », entrez l’adresse du serveur vers lequel vous souhaitez transférer les journaux.
  ![Champ Adresse du serveur](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Dans le menu déroulant « Protocole », sélectionnez un protocole.
  ![Menu déroulant Protocole](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Si vous le souhaitez, sélectionnez **Activer TLS** pour activer la communication chiffrée TLS entre les points de terminaison Syslog.
  ![Case à cocher pour activer TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Sous « Certificat public », collez votre certificat x509.
  ![Zone de texte pour le certificat public](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Cliquez sur **Enregistrer**.
  ![Bouton Enregistrer pour le transfert de journaux](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## Dépannage

Si vous rencontrez des problèmes quand vous essayez de transférer des journaux, contactez le {% data variables.contact.contact_ent_support %} et attachez le fichier de sortie de `http(s)://[hostname]/setup/diagnostics` à votre e-mail.
{% endif %}
