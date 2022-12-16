---
title: Utilitaires de ligne de commande
intro: '{% data variables.product.prodname_ghe_server %} comprend divers utilitaires pour vous aider à résoudre des problèmes particuliers ou à effectuer des tâches spécifiques.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172804'
---
Vous pouvez exécuter ces commandes n’importe où sur la machine virtuelle après vous être connecté en tant qu’utilisateur administrateur SSH. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) ».

## Général

### ghe-annonce

Cet utilitaire permet de définir une bannière en haut de chaque page {% data variables.product.prodname_enterprise %}. Vous pouvez vous en servir pour diffuser un message à l’attention de vos utilisateurs.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} Pour permettre à chaque utilisateur de rejeter l’annonce pour lui-même, utilisez l’indicateur `-d`.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} Vous pouvez aussi définir une bannière d’annonce via les paramètres d’entreprise de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Personnalisation des messages utilisateur sur votre instance](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner) ».
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduc

Cet utilitaire affiche des informations sur les travaux en arrière-plan, qu’ils soient actifs ou en file d’attente. Il indique les mêmes nombres de travaux que la barre des statistiques d’administration en haut de chaque page.

Cet utilitaire peut vous aider à déterminer si le serveur Aqueduct rencontre des problèmes de traitement des travaux en arrière-plan. Les scénarios suivants peuvent être le signe d’un problème lié à Aqueduct :

* Le nombre de travaux en arrière-plan augmente, alors que le nombre de travaux actifs reste stable.
* Les flux d’événements ne sont pas mis à jour.
* Les webhooks ne sont pas déclenchés.
* L’interface web n’est pas mise à jour après un envoi (push) Git.

Si vous soupçonnez une défaillance d’Aqueduc, demandez de l’aide auprès du {% data variables.contact.contact_ent_support %}.

Avec cette commande, vous pouvez aussi suspendre ou reprendre des travaux en file d’attente.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

Cet utilitaire recherche la présence de fichiers volumineux sur le disque ou des fichiers qui ont été supprimés, mais qui ont toujours des descripteurs de fichier ouverts. Vous devez l’exécuter quand votre intention est de libérer de l’espace sur la partition racine.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

Cet utilitaire nettoie divers caches qui peuvent potentiellement prendre de l’espace disque supplémentaire sur le volume racine. Si vous constatez que votre volume racine occupe de plus en plus d’espace disque au fil du temps, il serait judicieux d’exécuter cet utilitaire pour voir s’il permet de réduire l’utilisation globale.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

Cet utilitaire réinitialise tous les paramètres existants de la {% data variables.enterprise.management_console %}.

{% tip %}

**Conseil** : {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

Avec cet utilitaire, vous pouvez récupérer et modifier les paramètres de configuration de {% data variables.location.product_location %}.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
Il vous permet de trouver l’identificateur unique universel (UUID) de votre nœud dans `cluster.conf`.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} Il vous permet d’exempter une liste d’utilisateurs des limites de débit de l’API REST. Une limite stricte de 120 000 requêtes s’appliquera toujours à ces utilisateurs. Pour plus d’informations, consultez « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) ».

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

Cet utilitaire applique les paramètres de la {% data variables.enterprise.management_console %}, recharge les services système, prépare un dispositif de stockage, recharge les services d’application et exécute les éventuelles migrations de base de données en attente. Cela revient à cliquer sur **Enregistrer les paramètres** dans l’interface utilisateur web de la {% data variables.enterprise.management_console %} ou à envoyer une requête POST au [point de terminaison](/enterprise/user/rest/reference/enterprise-admin#management-console) `/setup/api/configure`.

Vous n’aurez probablement jamais besoin de l’exécuter manuellement, mais il est disponible si vous souhaitez automatiser le processus d’enregistrement de vos paramètres via SSH.

```shell
ghe-config-apply
```

### ghe-console

Cet utilitaire ouvre la console GitHub Rails sur votre appliance {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

Cet utilitaire ouvre une session de base de données MySQL sur votre appliance {% data variables.product.prodname_enterprise %}. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
Cet utilitaire retourne un résumé des index Elasticsearch au format CSV.

Imprimez un résumé d’index avec une ligne d’en-tête sur `STDOUT` :
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Imprimez un résumé d’index et dirigez les résultats vers `column` pour une meilleure lisibilité :

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

Cet utilitaire liste les dépôts de votre appliance qui utilisent {% data variables.product.prodname_dotcom %} Services, méthode d’intégration qui sera abandonnée le 1er octobre 2018. Il se peut que des utilisateurs de votre appliance aient configuré {% data variables.product.prodname_dotcom %} Services afin de créer des notifications pour les envois (push) vers certains dépôts. Pour plus d’informations, consultez « [Annonce concernant la dépréciation de {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/) » sur le {% data variables.product.prodname_blog %} ou « [Remplacement de {% data variables.product.prodname_dotcom %} Services](/developers/overview/replacing-github-services) ». Pour plus d’informations sur cette commande ou pour consulter les options supplémentaires, utilisez l’indicateur `-h`.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

Cet utilitaire vous permet de journaliser la fin de tous les fichiers journaux pertinents de votre installation. Vous pouvez transmettre des options pour limiter les journaux à des ensembles spécifiques. Utilisez l’indicateur -h pour consulter les options supplémentaires.

```shell
ghe-logs-tail
```

### ghe-maintenance

Cet utilitaire vous permet de contrôler l’état du mode de maintenance de l’installation. Il a été conçu pour être utilisé principalement par la {% data variables.enterprise.management_console %} en arrière-plan, mais il peut être utilisé directement. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

```shell
ghe-maintenance -h
```

### ghe-motd

Cet utilitaire affiche à nouveau le message du jour (MOTD) que les administrateurs voient quand ils accèdent à l’instance via l’interpréteur de commandes d’administration. La sortie contient une vue d’ensemble de l’état de l’instance.

```shell
ghe-motd
```

### ghe-now

Cet utilitaire retourne le nom et le propriétaire d’un dépôt en fonction de l’ID du dépôt.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Utilisez cette commande pour accorder des privilèges de propriétaire d’organisation aux utilisateurs disposant de privilèges d’administrateur de site sur l’appliance ou pour accorder des privilèges de propriétaire d’organisation à un utilisateur unique au sein d’une organisation. Vous devez spécifier un utilisateur et/ou une organisation. La commande `ghe-org-admin-promote` demande toujours confirmation avant son exécution, sauf si vous utilisez l’indicateur `-y` pour contourner la confirmation.

Voici les options que vous pouvez utiliser avec l’utilitaire :

- L’indicateur `-u` permet de spécifier un nom d’utilisateur. Servez-vous de cet indicateur pour accorder des privilèges de propriétaire d’organisation à un utilisateur spécifique. Omettez l’indicateur `-u` pour promouvoir tous les administrateurs de site dans l’organisation spécifiée.
- L’indicateur `-o` permet de spécifier une organisation. Servez-vous de cet indicateur pour accorder des privilèges de propriétaire dans une organisation spécifique. Omettez l’indicateur `-o` pour accorder à l’administrateur de site spécifié des autorisations de propriétaire dans toutes les organisations.
- L’indicateur `-a` accorde à tous les administrateurs de site des privilèges de propriétaire dans toutes les organisations.
- L’indicateur `-y` contourne la confirmation manuelle.

Cet utilitaire ne peut pas promouvoir un administrateur qui n’est pas administrateur de site en tant que propriétaire de toutes les organisations. Vous pouvez promouvoir un compte d’utilisateur ordinaire en tant qu’administrateur de site avec [ghe-user-promote](#ghe-user-promote).

Accorder à un administrateur de site spécifique des privilèges de propriétaire d’organisation dans une organisation spécifique

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Accorder à un administrateur de site spécifique des privilèges de propriétaire d’organisation dans toutes les organisations

```shell
ghe-org-admin-promote -u USERNAME
```

Accorder à tous les administrateurs de site des privilèges de propriétaire d’organisation dans une organisation spécifique

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Accorder à tous les administrateurs de site des privilèges de propriétaire d’organisation dans toutes les organisations

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Utilisez cette commande pour déverrouiller immédiatement la {% data variables.enterprise.management_console %} après {% ifversion enterprise-authentication-rate-limits %}un verrouillage de compte. Pour configurer des stratégies d’authentification pour {% data variables.location.product_location %}, consultez « [Configuration des limites de taux de stratégie d’authentification](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits) ». {% else %}10 tentatives de connexion ayant échoué en l’espace de 10 minutes. {% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

Cet utilitaire peut aider au mappage d’enregistrements SAML.

Pour créer un fichier CSV contenant tous les mappages SAML pour vos utilisateurs {% data variables.product.product_name %} :
```shell
$ ghe-saml-mapping-csv -d
```

Pour effectuer un test de mise à jour des mappages SAML avec de nouvelles valeurs :
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

Pour mettre à jour les mappages SAML avec de nouvelles valeurs :
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

Cet utilitaire permet de lister tous les services qui ont été démarrés ou arrêtés (en cours d’exécution ou en attente) sur votre appliance.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

Avec `ghe-set-password`, vous pouvez définir un nouveau mot de passe pour vous authentifier dans la [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

Cet utilitaire vous permet de configurer l’interface réseau principale.

Pour accéder au mode visuel, qui vous guidera tout au long de la configuration des paramètres réseau :

```shell
$ ghe-setup-network -v
```

Utilisez l’indicateur -h pour consulter les options supplémentaires.

### ghe-ssh-check-host-keys

Cet utilitaire vérifie les clés d’hôte SSH existantes par rapport à la liste des clés d’hôte SSH connues pour avoir fuité.

```shell
$ ghe-ssh-check-host-keys
```

Si une clé d’hôte ayant fuité est trouvée, l’utilitaire se ferme avec l’état `1` et le message :
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Si aucune clé d’hôte ayant fuité n’est trouvée, l’utilitaire se ferme avec l’état `0` et le message :
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

Cet utilitaire annule les clés d’hôte SSH et les remplace par des clés nouvellement générées.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

Cet utilitaire retourne un rapport sur les clés SSH faibles connues stockées sur l’appliance {% data variables.product.prodname_enterprise %}. Vous pouvez éventuellement révoquer des clés utilisateur par une action en bloc. L’utilitaire signale les clés système faibles, que vous devez révoquer manuellement dans la [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

Cet utilitaire vous permet d’installer un certificat Let’s Encrypt sur votre appliance {% data variables.product.prodname_enterprise %}. Pour plus d’informations, consultez « [Configuration du protocole TLS](/enterprise/admin/guides/installation/configuring-tls) ».

Vous pouvez utiliser l’indicateur `-x` pour supprimer la configuration ACME.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

Cet utilitaire vous permet d’installer un certificat d’autorité de certification racine personnalisé sur votre serveur {% data variables.product.prodname_enterprise %}. Le certificat doit être au format PEM. Par ailleurs, si votre fournisseur de certificats inclut plusieurs certificats d’autorité de certification dans un même fichier, vous devez les diviser en fichiers individuels pour les transmettre ensuite à `ghe-ssl-ca-certificate-install` un par un.

Exécutez cet utilitaire pour ajouter une chaîne de certificats à des fins de vérification de signature de commit S/MIME. Pour plus d’informations, consultez « [À propos de la vérification des signatures de commit](/enterprise/user/articles/about-commit-signature-verification/) ».

Exécutez cet utilitaire quand {% data variables.location.product_location %} ne parvient pas à se connecter à un autre serveur parce que celui-ci utilise un certificat SSL auto-signé ou un certificat SSL pour lequel il ne fournit pas le bundle d’autorité de certification nécessaire. Une façon de le vérifier est d’exécuter `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` à partir de {% data variables.location.product_location %}. Si le certificat SSL du serveur distant peut être vérifié, votre `SSL-Session` doit avoir un code de retour égal à 0, comme indiqué ci-dessous.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Si, en revanche, le certificat SSL du serveur distant *ne peut pas* être vérifié, votre `SSL-Session` doit avoir un code de retour différent de zéro :

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

Voici les options supplémentaires que vous pouvez utiliser avec l’utilitaire :
- L’indicateur `-r` vous permet de désinstaller un certificat d’autorité de certification.
- L’indicateur `-h` affiche des informations supplémentaires sur l’utilisation.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

Cet utilitaire vous permet de mettre à jour un certificat SSL pour {% data variables.location.product_location %}. 

Pour plus d’informations sur cette commande ou pour consulter les options supplémentaires, utilisez l’indicateur `-h`.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

Cet utilitaire vous permet de générer une clé privée et une demande de signature de certificat (CSR), que vous pouvez partager avec une autorité de certification commerciale ou privée pour obtenir un certificat valide à utiliser avec votre instance. Pour plus d’informations, consultez « [Configuration du protocole TLS](/enterprise/admin/guides/installation/configuring-tls) ».

Pour plus d’informations sur cette commande ou pour consulter les options supplémentaires, utilisez l’indicateur `-h`.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Certaines plateformes ont besoin de ce script pour développer le volume utilisateur. Pour plus d’informations, consultez « [Augmentation de la capacité de stockage](/enterprise/admin/guides/installation/increasing-storage-capacity/) ».

```shell
$ ghe-storage-extend
```

### ghe-version

Cet utilitaire imprime la version, la plateforme et la build de {% data variables.location.product_location %}.

```shell
$ ghe-version
```

### ghe-webhook-logs

Cet utilitaire retourne les journaux de remise de webhooks pour permettre aux administrateurs de les examiner et d’identifier les problèmes éventuels.

```shell
ghe-webhook-logs
```

Pour afficher toutes les remises de hooks ayant échoué au cours du dernier jour : {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

Le format de date doit être `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` ou `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

Pour afficher la charge utile complète des hooks, le résultat et les exceptions éventuelles pour la remise : {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Clustering

### ghe-cluster-status

Contrôlez l’intégrité de vos nœuds et services dans un déploiement cluster de {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

Cet utilitaire crée un tarball de bundle de support contenant des journaux importants de chacun des nœuds d’une configuration de géoréplication ou de clustering.

Par défaut, la commande crée le tarball dans */tmp*, mais vous pouvez aussi utiliser `cat` pour placer le tarball dans `STDOUT` et ainsi faciliter le streaming via SSH. Cela est utile dans le cas où l’interface utilisateur web ne répond pas ou si le téléchargement d’un bundle de support à partir de */setup/support* ne fonctionne pas. Vous devez utiliser cette commande si vous souhaitez générer un bundle *étendu* contenant des journaux plus anciens. Vous pouvez aussi utiliser cette commande pour charger le bundle de support de cluster directement sur le support {% data variables.product.prodname_enterprise %}.

Pour créer un bundle standard :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Pour créer un bundle étendu :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Pour envoyer un bundle au {% data variables.contact.github_support %} :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

Pour envoyer un bundle au {% data variables.contact.github_support %} et l’associer à un ticket :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

Basculez de nœuds de cluster actifs vers des nœuds de cluster passifs. Pour plus d’informations, consultez « [Lancement d’un basculement vers votre cluster réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster) ».

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

Cet utilitaire vous permet de gérer le serveur {% data variables.product.prodname_pages %} distribué.

```shell
ghe-dpages
```

Pour afficher un résumé de l’emplacement et de l’intégrité du dépôt :
```shell
ghe-dpages status
```

Pour évacuer un service de stockage {% data variables.product.prodname_pages %} avant d’évacuer un nœud de cluster :
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

Cet utilitaire vous permet de gérer les trois copies de chaque dépôt sur les serveurs Git distribués.

```shell
ghe-spokes
```

Pour afficher un résumé de l’emplacement et de l’intégrité du dépôt :

```shell
ghe-spokes status
```

Pour afficher les serveurs dans lesquels le dépôt est stocké :

```shell
ghe-spokes route
```

Pour évacuer les services de stockage sur un nœud de cluster :

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

Cet utilitaire vous permet d’évacuer tous les services de stockage avant d’évacuer un nœud de cluster.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

Interface de type `top` pour les opérations Git actives.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

Cet utilitaire permet d’analyser le trafic Git. Il interroge les fichiers de données _Governor_ situés sous `/data/user/gitmon`. {% data variables.product.company_short %} conserve une heure de données par fichier pour deux semaines. Pour plus d’informations, consultez [Analyse du trafic Git avec Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) dans la {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

Cet utilitaire vous permet de passer au répertoire d’un dépôt et d’ouvrir un interpréteur de commandes interactif en tant qu’utilisateur `git`. Vous pouvez effectuer une inspection manuelle d’un dépôt ou en assurer la maintenance via des commandes comme `git-*` ou `git-nw-*`.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

Cet utilitaire permet de repackager manuellement un réseau de dépôts pour optimiser le stockage de packs. Si vous disposez d’un dépôt volumineux, l’exécution de cette commande peut contribuer à en réduire la taille globale. {% data variables.product.prodname_enterprise %} exécute automatiquement cette commande pendant toute votre interaction avec un réseau de dépôts.

Vous pouvez ajouter l’argument facultatif `--prune` pour supprimer des objets Git inaccessibles qui ne sont pas référencés à partir d’une branche, d’une balise ou d’une autre référence. Cela est particulièrement utile pour supprimer immédiatement les [informations sensibles précédemment effacées](/enterprise/user/articles/remove-sensitive-data/).

{% warning %}

**Avertissement** : Avant d’utiliser l’argument `--prune` pour supprimer les objets Git inaccessibles, mettez {% data variables.location.product_location %} en mode maintenance ou veillez à ce que tous les dépôts d’un même réseau de dépôts soient verrouillés. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode) ».

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

Cet utilitaire vérifie que tous les services pour {% data variables.product.prodname_actions %} sont sains. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server) » et « [Résolution des problèmes liés à {% data variables.product.prodname_actions %} pour votre entreprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise) ».

```shell
ghe-actions-check
```

### ghe-actions-precheck

Cet utilitaire teste la configuration du stockage d’objets blob pour {% data variables.product.prodname_actions %} sur {% data variables.location.product_location %}. Vous pouvez vous en servir pour vérifier votre configuration de stockage avant d’activer {% data variables.product.prodname_actions %} pour votre instance.

Pour plus d’informations sur la configuration de {% data variables.product.prodname_actions %}, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server) ».

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

Si votre système de stockage est bien configuré, vous obtenez la sortie suivante.

```
All Storage tests passed
```

## Importer et exporter

### ghe-migrator

`ghe-migrator` est un outil à haute-fidélité pour vous aider à migrer d’une instance GitHub vers une autre. Vous pouvez regrouper vos instances ou déplacer organisation, utilisateurs, équipes et autres dépôts de GitHub.com vers {% data variables.product.prodname_enterprise %}.

Pour plus d’informations, consultez nos guides sur la [migration de données vers et depuis votre entreprise](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

À partir d’une URL, détectez le type de système de gestion du contrôle de code source qui se trouve à l’autre extrémité. Dans le cadre d’une importation manuelle, cela est probablement déjà connu, mais cela peut être très utile dans les scripts automatisés.
```shell
git-import-detect
```

### git-import-hg-raw

Cet utilitaire permet d’importer un dépôt Mercurial dans ce dépôt Git. Pour plus d’informations, consultez « [Importation de données à partir de systèmes de contrôle de version tiers](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/) ».
```shell
git-import-hg-raw
```

### git-import-svn-raw

Cet utilitaire permet d’importer l’historique Subversion et les données de fichier dans une branche Git. Il s’agit d’une copie directe de l’arborescence, ignorant toute distinction de tronc ou de branche. Pour plus d’informations, consultez « [Importation de données à partir de systèmes de contrôle de version tiers](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/) ».
```shell
git-import-svn-raw
```

### git-import-tfs-raw

Cet utilitaire permet d’importer à partir de TFVC (Team Foundation Version Control). Pour plus d’informations, consultez « [Importation de données à partir de systèmes de contrôle de version tiers](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/) ».
```shell
git-import-tfs-raw
```

### git-import-rewrite

Cet utilitaire permet de réécrire le dépôt importé. Il vous permet de renommer les auteurs et, pour Subversion et TFVC, de créer des branches Git basées sur des dossiers. Pour plus d’informations, consultez « [Importation de données à partir de systèmes de contrôle de version tiers](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/) ».
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## Sécurité

### ghe-find-insecure-git-operations

Cet utilitaire recherche les journaux de votre instance et identifie les opérations Git sur SSH qui utilisent des algorithmes ou des fonctions de hachage non sécurisés, notamment les chiffrements DSA, RSA-SHA-1, HMAC-SHA-1 et CBC. Vous pouvez utiliser la sortie pour prendre en charge la transition de chaque client vers une connexion SSH plus sécurisée. Pour plus d’informations, consultez [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} et « [Configuration des connexions SSH dans votre instance](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance) ».{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## Support

### ghe-diagnostics

Cet utilitaire effectue diverses vérifications et collecte des informations sur votre installation que vous pouvez envoyer au service de support pour aider au diagnostic des problèmes que vous rencontrez.

Pour l’heure, la sortie de cet utilitaire équivaut aux informations de diagnostic téléchargées à partir de la {% data variables.enterprise.management_console %}, mais il se peut que des améliorations supplémentaires soient apportées au fil du temps qui ne seront pas disponibles dans l’interface utilisateur web. Pour plus d’informations, consultez « [Création et partage de fichiers de diagnostic](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files) ».

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Cet utilitaire permet de crée un tarball de bundle de support contenant des journaux importants de votre instance.

Par défaut, la commande crée le tarball dans */tmp*, mais vous pouvez aussi utiliser `cat` pour placer le tarball dans `STDOUT` et ainsi faciliter le streaming via SSH. Cela est utile dans le cas où l’interface utilisateur web ne répond pas ou si le téléchargement d’un bundle de support à partir de */setup/support* ne fonctionne pas. Vous devez utiliser cette commande si vous souhaitez générer un bundle *étendu* contenant des journaux plus anciens. Vous pouvez aussi utiliser cette commande pour charger le bundle de support directement sur le support {% data variables.product.prodname_enterprise %}.

Pour créer un bundle standard :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Pour créer un bundle étendu :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Pour envoyer un bundle au {% data variables.contact.github_support %} :
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

Pour envoyer un bundle au {% data variables.contact.github_support %} et l’associer à un ticket :

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

Cet utilitaire permet d’envoyer des informations de votre appliance vers le support {% data variables.product.prodname_enterprise %}. Vous pouvez soit spécifier un fichier local, soit fournir un flux de données d’un volume maximal de 100 Mo via `STDIN`. Les données chargées peuvent éventuellement être associées à un ticket de support.

Pour envoyer un fichier au {% data variables.contact.github_support %} et l’associer à un ticket :
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

Pour charger des données via `STDIN` et les associer à un ticket :
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

Dans cet exemple, `ghe-repl-status -vv` envoie les informations d’état détaillées d’une appliance réplica. Vous devez remplacer `ghe-repl-status -vv` par les données spécifiques que vous voulez transmettre en continu vers `STDIN`, et `Verbose Replication Status` par une brève description des données. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Mise à niveau de {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

Cet utilitaire permet d’installer ou de vérifier un package de mise à niveau. Vous pouvez aussi utiliser cet utilitaire pour annuler une version corrective en cas d’échec ou d’interruption d’une mise à niveau. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/) ».

Pour vérifier un package de mise à niveau :
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

Pour installer un package de mise à niveau :
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

Cet utilitaire permet de gérer l’installation planifiée de packages de mise à niveau. Vous pouvez afficher, créer ou supprimer des installations planifiées. Vous devez créer des planifications à l’aide d’expressions cron. Pour plus d'informations, consultez l’[article Wikipédia sur Cron](https://en.wikipedia.org/wiki/Cron#Overview).

L’utilitaire `ghe-upgrade-scheduler` est parfaitement adapté à la planification des mises à niveau avec patch à chaud qui ne nécessitent ni mode de maintenance ni redémarrage dans la plupart des cas. Cet utilitaire n’est pas pratique pour les mises à niveau complètes du package qui nécessitent qu’un administrateur définisse manuellement le mode de maintenance, redémarre l’instance et annule le mode de maintenance. Pour plus d’informations sur les différents types de mises à niveau, consultez « [Mise à niveau de {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package) »

Pour planifier une nouvelle installation pour un package :
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

Pour afficher les installations planifiées d’un package :
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

Pour supprimer les installations planifiées d’un package :
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

Cet utilitaire permet de vérifier s’il existe une nouvelle version corrective de {% data variables.product.prodname_enterprise %}. Si c’est le cas et s’il y a suffisamment d’espace disponible sur votre instance, celle-ci télécharge le package. Par défaut, il est enregistré dans */var/lib/ghe-updates*. Un administrateur peut ensuite [effectuer la mise à niveau](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Un fichier contenant l’état du téléchargement est disponible à l’emplacement */var/lib/ghe-updates/ghe-update-check.status*.

Pour rechercher la dernière version de {% data variables.product.prodname_enterprise %}, utilisez le commutateur `-i`.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## User Management

### ghe-license-usage

Cet utilitaire permet d’exporter une liste des utilisateurs de l’installation au format JSON. Si votre instance est connectée à {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} utilise ces informations pour transmettre les informations de licence à {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Connexion de votre compte d’entreprise à {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud) ».

Par défaut, la liste d’utilisateurs dans le fichier JSON obtenu est chiffrée. Utilisez l’indicateur `-h` pour voir plus d’options.

```shell
ghe-license-usage
```

### ghe-org-membership-update

Cet utilitaire applique le paramètre par défaut de visibilité d’appartenance à une organisation à tous les membres de votre instance. Pour plus d’informations, consultez « [Configuration de la visibilité de l’appartenance à une organisation](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership) ». Le paramètre peut être défini sur `public` ou `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

Cet utilitaire permet d’exporter une liste de tous les utilisateurs de l’installation au format CSV. Le fichier CSV comprend l’adresse e-mail, le type d’utilisateur (par exemple, administrateur, utilisateur), le nombre de dépôts à disposition, le nombre de clés SSH, le nombre d’appartenances à une organisation, la dernière adresse IP journalisée, etc. Utilisez l’indicateur `-h` pour voir plus d’options.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

Cet utilitaire permet de rétrograder l’utilisateur spécifié du statut d’administrateur à celui d’utilisateur normal. Nous vous recommandons d’utiliser l’interface utilisateur web pour effectuer cette action, mais proposez cet utilitaire si l’utilitaire `ghe-user-promote` est exécuté par erreur et que vous devez à nouveau rétrograder un utilisateur à partir de l’interface CLI.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

Cet utilitaire permet de promouvoir le compte d’utilisateur spécifié en administrateur de site.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

Cet utilitaire permet de suspendre l’utilisateur spécifié, l’empêchant ainsi de se connecter, d’envoyer (push) ou de tirer (pull) à partir de vos dépôts.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

Cet utilitaire permet de rétablir l’utilisateur spécifié, lui permettant ainsi de se connecter, d’envoyer (push) et de tirer (pull) à partir de vos dépôts.

```shell
ghe-user-unsuspend USERNAME
```
