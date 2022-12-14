---
title: Supervision avec SNMP
intro: '{% data variables.product.prodname_enterprise %} fournit des données sur l’utilisation du disque, de l’UC, de la mémoire et plus encore via SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: 0f156d2939cbc83e3b0a72bbc1cbaf72f0c886d7
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145179151'
---
Le protocole SNMP est couramment utilisé pour superviser les appareils sur un réseau. Nous vous recommandons vivement d’activer SNMP pour pouvoir superviser l’intégrité de {% data variables.product.product_location %} et savoir à quel moment ajouter un supplément de mémoire, d’espace de stockage ou de puissance de processeur à l’ordinateur hôte.

{% data variables.product.prodname_enterprise %} disposant d’une installation de SNMP standard, vous pouvez tirer parti des [nombreux plug-ins](https://www.monitoring-plugins.org/doc/man/check_snmp.html) disponibles pour Nagios ou pour tout autre système de supervision.

## Configuration de SNMP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Dans le champ **Chaîne de communauté**, entrez une nouvelle chaîne de communauté. Si vous le laissez vide, sa valeur par défaut est `public`.
![Champ permettant d’ajouter la chaîne de communauté](/assets/images/enterprise/management-console/community-string.png) {% data reusables.enterprise_management_console.save-settings %}
5. Testez votre configuration SNMP en exécutant la commande suivante sur une station de travail distincte avec prise en charge de SNMP sur votre réseau :
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Elle doit retourner l’heure système de l’hôte {% data variables.product.product_location %}.

## Sécurité basée sur l’utilisateur

Si vous activez SNMP v3, vous pouvez bénéficier d’une sécurité accrue basée sur l’utilisateur via le modèle USM (User Security Model). Pour chaque utilisateur unique, vous pouvez spécifier un niveau de sécurité :
- `noAuthNoPriv` : Ce niveau de sécurité n’offre aucune authentification et aucune confidentialité.
- `authNoPriv` : Ce niveau de sécurité offre une authentification mais pas de confidentialité. Pour interroger l’appliance, vous aurez besoin d’un nom d’utilisateur et d’un mot de passe (qui doit comporter au moins huit caractères). Les informations sont envoyées sans chiffrement, comme pour SNMPv2. Le protocole d’authentification peut être MD5 ou SHA, ce dernier étant utilisé par défaut.
- `authPriv` : Ce niveau de sécurité offre une authentification et la confidentialité. L’authentification, consistant en un mot de passe d’authentification de huit caractères au minimum, est obligatoire et les réponses sont chiffrées. Le mot de passe de confidentialité n’est pas obligatoire, mais s’il est fourni, il doit comporter au moins huit caractères. Si aucun mot de passe de confidentialité n’est fourni, le mot de passe d’authentification est utilisé. Le protocole de confidentialité peut être DES ou AES, ce dernier étant utilisé par défaut.

## Configuration des utilisateurs pour SNMP v3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Sélectionnez **SNMP v3**.
![Bouton permettant d’activer SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. Dans « Nom d’utilisateur », tapez le nom d’utilisateur unique de votre utilisateur SNMP v3.
![Champ de saisie du nom d’utilisateur SNMP v3](/assets/images/enterprise/management-console/snmpv3-username.png)
6. Dans le menu déroulant **Niveau de sécurité** , cliquez sur un niveau de sécurité pour votre utilisateur SNMP v3.
![Menu déroulant pour le niveau de sécurité de l’utilisateur SNMP v3](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Pour les utilisateurs SNMP v3 avec le niveau de sécurité `authnopriv` : ![Paramètres pour le niveau de sécurité authnopriv](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Pour les utilisateurs SNMP v3 avec le niveau de sécurité `authpriv` : ![Paramètres pour le niveau de sécurité authpriv](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Si vous le souhaitez, dans « Mot de passe de confidentialité », tapez le mot de passe de confidentialité.
    - À droite de « Mot de passe de confidentialité », dans le menu déroulant **Protocole**, cliquez sur la méthode de protocole de confidentialité que vous souhaitez utiliser.
9. Cliquez sur **Add User**.
![Bouton permettant d’ajouter un utilisateur SNMP v3](/assets/images/enterprise/management-console/snmpv3-adduser.png) {% data reusables.enterprise_management_console.save-settings %}

#### Interrogation des données SNMP

Les informations de niveau matériel et logiciel concernant votre appliance sont disponibles avec SNMP v3. Faute de chiffrement et de confidentialité pour les niveaux de sécurité `noAuthNoPriv` et `authNoPriv`, nous excluons la table `hrSWRun` (1.3.6.1.2.1.25.4) des rapports SNMP obtenus. Nous l’incluons si vous utilisez le niveau de sécurité `authPriv`. Pour plus d’informations, consultez la « [documentation de référence sur les OID](https://oidref.com/1.3.6.1.2.1.25.4) ». 

Avec SNMP v2c, seules sont disponibles les informations de niveau matériel concernant votre appliance. Aucun OID n’étant configuré pour les applications et les services dans {% data variables.product.prodname_enterprise %}, les rapports sur les métriques ne sont pas générés. Plusieurs MIB sont disponibles, que vous pouvez afficher en exécutant `snmpwalk` sur une station de travail distincte avec prise en charge de SNMP sur votre réseau :

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Parmi les MIB disponibles pour SNMP, la plus utile est `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25). Consultez le tableau ci-dessous pour identifier les objets importants de cette MIB :

| Nom | OID | Description |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | Notion de l’hôte de la date et de l’heure locales du jour. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | Temps écoulé depuis la dernière initialisation de l’hôte. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | Quantité de mémoire RAM sur l’hôte. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | Nombre de contextes de processus actuellement chargés ou en cours d’exécution sur l’hôte. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | Quantité d’espace de stockage consommée sur l’hôte, exprimée en hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | Taille d’une hrStorageAllocationUnit (en octets) |

Par exemple, pour interroger `hrMemorySize` avec SNMP v3, exécutez la commande suivante sur une station de travail distincte avec prise en charge de SNMP sur votre réseau :
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Avec SNMP v2c, pour interroger `hrMemorySize`, exécutez la commande suivante sur une station de travail distincte avec prise en charge de SNMP sur votre réseau :
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Remarque :** Pour éviter une fuite d’informations concernant les services en cours d’exécution sur votre appliance, nous excluons la table `hrSWRun` (1.3.6.1.2.1.25.4) des rapports SNMP obtenus, sauf si vous utilisez le niveau de sécurité `authPriv` avec SNMP v3. Si vous utilisez le niveau de sécurité `authPriv`, nous incluons la table `hrSWRun`.

{% endtip %}

Pour plus d’informations sur les mappages d’OID pour les attributs système courants de SNMP, consultez « [Linux SNMP OID’s for CPU, Memory and Disk Statistics](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html) ».
