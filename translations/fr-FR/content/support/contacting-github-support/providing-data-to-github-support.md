---
title: Fournir des données au support GitHub
intro: 'Étant donné que {% data variables.contact.github_support %} n’a pas accès à votre environnement, nous avons parfois besoin de quelques informations supplémentaires de votre part.'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: 56a90a9449a92577d08e068095e5b0dc5b443bb2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331911'
---
## À propos des fichiers de diagnostic et des bundles de support

{% data variables.contact.github_support %} peut vous demander de fournir des données supplémentaires sous la forme de fichiers journaux assainis. Il existe trois types de fichier journal que vous pouvez être invité à fournir.

Les fichiers de diagnostic contiennent des informations sur les paramètres et l’environnement d’une instance de {% data variables.product.prodname_ghe_server %}. Les bundles de support contiennent les diagnostics et les journaux des deux derniers jours. Les bundles de support étendu contiennent également des diagnostics et des journaux, mais qui portent sur les sept derniers jours.

## À propos de l’assainissement des fichiers journaux

Les jetons d’authentification, les clés et les secrets sont supprimés des fichiers journaux dans les répertoires de journaux suivants, qui sont présents dans un bundle de support ou un fichier de diagnostic :

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Création et partage de fichiers de diagnostic

Les fichiers de diagnostic sont une vue d’ensemble des paramètres et de l’environnement d’une instance de {% data variables.product.prodname_ghe_server %}. Ils contiennent les éléments suivants :

- Informations sur la licence client, notamment le nom de l’entreprise, la date d’expiration et le nombre de licences utilisateur
- Numéros de version et SHA
- Architecture de machine virtuelle
- Nom d’hôte, mode privé, paramètres SSL
- Listes des chargements et des processus
- Paramètres réseau
- Méthode d’authentification et détails
- Nombre de dépôts, d’utilisateurs et autres données d’installation

Vous pouvez télécharger les diagnostics pour votre instance à partir de la {% data variables.enterprise.management_console %} ou en exécutant l’utilitaire en ligne de commande `ghe-diagnostics`.

### Création d’un fichier de diagnostic à partir de la {% data variables.enterprise.management_console %}

Vous pouvez utiliser cette méthode si vous n’avez pas votre clé SSH à disposition.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Cliquez sur **Télécharger les informations de diagnostic**.

### Création d’un fichier de diagnostic via SSH

Vous pouvez utiliser cette méthode sans vous connecter à la {% data variables.enterprise.management_console %}.

Utilisez l’utilitaire en ligne de commande [ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) pour récupérer les diagnostics de votre instance.

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

## Création et partage de bundles de support

Une fois que vous avez envoyé votre demande de support, nous pouvons vous demander de partager un bundle de support avec notre équipe. Le bundle de support est une archive tar compressée avec gzip, qui comprend les diagnostics et les journaux importants de votre instance, par exemple :

- Journaux liés à l’authentification, qui peuvent être utiles pour résoudre les erreurs d’authentification ou configurer LDAP, CAS ou SAML
- Journal de la {% data variables.enterprise.management_console %}
- `github-logs/exceptions.log` : informations portant sur 500 erreurs rencontrées sur le site
- `github-logs/audit.log` : journaux d’audit de {% data variables.product.prodname_ghe_server %}
- `babeld-logs/babeld.log` : journaux de proxy Git
- `system-logs/haproxy.log` : journaux HAProxy
- `elasticsearch-logs/github-enterprise.log` : journaux Elasticsearch
- `configuration-logs/ghe-config.log` : journaux de configuration de {% data variables.product.prodname_ghe_server %}
- `collectd/logs/collectd.log` : journaux Collectd
- `mail-logs/mail.log` : journaux de remise d’e-mail SMTP

Pour plus d’informations, consultez « [À propos du journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) ».

Les bundles de support incluent les journaux des deux derniers jours. Pour obtenir les journaux des sept derniers jours, vous pouvez télécharger un bundle de support étendu. Pour plus d’informations, consultez « [Création et partage de bundles de support étendu](#creating-and-sharing-extended-support-bundles) ».

{% tip %}

**Conseil :** Quand vous contactez le {% data variables.contact.github_support %}, vous recevez un e-mail de confirmation qui contient un lien de référence à un ticket. Si le {% data variables.contact.github_support %} vous demande de charger un bundle de support, vous pouvez le faire en utilisant le lien de référence au ticket.

{% endtip %}

### Création d’un bundle de support à partir de la {% data variables.enterprise.management_console %}

Vous pouvez suivre ces étapes pour créer et partager un bundle de support si vous pouvez accéder à la {% data variables.enterprise.management_console %} web, et si vous disposez d’un accès à Internet sortant.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Cliquez sur **Télécharger le bundle de support**.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Création d’un bundle de support via SSH

Vous pouvez suivre ces étapes pour créer et partager un bundle de support si vous avez un accès SSH à {% data variables.product.product_location %}, et si vous disposez d’un accès à Internet.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Téléchargez le bundle de support via SSH :
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Pour plus d’informations sur la commande `ghe-support-bundle`, consultez « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle) ».
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Chargement d’un bundle de support à l’aide de votre compte d’entreprise

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. Dans la barre latérale gauche, cliquez sur **Gestion des licences Enterprise**.
  ![Capture d’écran montrant le lien « Licence Enterprise » dans la barre latérale des paramètres du compte d’entreprise.](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Sous « Aide de {% data variables.product.prodname_enterprise %} », cliquez sur **Charger un bundle de support**.
  ![Capture d’écran montrant le lien « Charger un bundle de support ».](/assets/images/enterprise/support/upload-support-bundle.png)
5. Sous « Sélectionner un compte d’entreprise », dans le menu déroulant, sélectionnez le compte associé au bundle de support.
  ![Capture d’écran montrant le menu déroulant permettant de sélectionner le compte d’entreprise du bundle de support.](/assets/images/enterprise/support/support-bundle-account.png)
6. Sous « Charger un bundle de support pour {% data variables.contact.enterprise_support %} », pour sélectionner votre bundle de support, cliquez sur **Choisir un fichier**, ou faites glisser votre fichier de bundle de support vers **Choisir un fichier**.
  ![Capture d’écran montrant le bouton « Choisir un fichier » permettant de charger un fichier de bundle de support.](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Cliquez sur **Télécharger**.

### Chargement d’un bundle de support directement via SSH

Vous pouvez charger directement un bundle de support sur notre serveur si :
- Vous disposez d’un accès SSH à {% data variables.product.product_location %}.
- Les connexions HTTPS sortantes sur le port TCP 443 sont autorisées de {% data variables.product.product_location %} vers _enterprise-bundles.github.com_ et _esbtoolsproduction.blob.core.windows.net_.

1. Chargez le bundle sur notre serveur de bundles de support :
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

## Création et partage de bundles de support étendu

Les bundles de support incluent les journaux des deux derniers jours, alors que les bundles de support _étendu_ incluent les journaux des sept derniers jours. Si les événements investigués par le {% data variables.contact.github_support %} se sont produits depuis plus de deux jours, nous pouvons vous demander de partager un bundle de support étendu. Vous avez besoin d’un accès SSH pour télécharger un bundle étendu. Vous ne pouvez pas télécharger de bundle étendu à partir de la {% data variables.enterprise.management_console %}.

Pour éviter que les bundles ne deviennent trop volumineux, ils contiennent uniquement les journaux qui n’ont pas fait l’objet d’une rotation et qui n’ont pas été compressés. La rotation des journaux sur {% data variables.product.prodname_ghe_server %} se produit à différentes fréquences (quotidiennes ou hebdomadaires) pour différents fichiers journaux, en fonction de la taille attendue des journaux.

### Création d’un bundle de support étendu via SSH

Vous pouvez suivre ces étapes pour créer et partager un bundle de support étendu si vous avez un accès SSH à {% data variables.product.product_location %}, et si vous disposez d’un accès à Internet.

1. Téléchargez le bundle de support étendu via SSH en ajoutant l’indicateur `-x` à la commande `ghe-support-bundle` :
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Chargement d’un bundle de support étendu directement via SSH

Vous pouvez charger directement un bundle de support sur notre serveur si :
- Vous disposez d’un accès SSH à {% data variables.product.product_location %}.
- Les connexions HTTPS sortantes sur le port TCP 443 sont autorisées de {% data variables.product.product_location %} vers _enterprise-bundles.github.com_ et _esbtoolsproduction.blob.core.windows.net_.

1. Chargez le bundle sur notre serveur de bundles de support :
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

## Pour aller plus loin

- « [À propos du support GitHub](/support/learning-about-github-support/about-github-support) »
- « [Génération d’un contrôle d’intégrité pour votre entreprise](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise) »
