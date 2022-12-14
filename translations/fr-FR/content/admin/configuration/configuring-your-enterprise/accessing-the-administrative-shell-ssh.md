---
title: Accès à l’interpréteur de commandes d’administration (SSH)
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
ms.openlocfilehash: 8d8b9cd71a436c0874355b1bdd53ba2e400660a0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106965'
---
## À propos de l’accès à l’interpréteur de commandes

Si vous disposez d’un accès SSH à l’interpréteur de commandes d’administration, vous pouvez exécuter les utilitaires en ligne de commande de {% data variables.product.prodname_ghe_server %}. L’accès SSH s’avère aussi utile pour la résolution des problèmes, l’exécution de sauvegardes et la configuration de la réplication. L’accès SSH administratif est géré séparément de l’accès SSH Git et est accessible uniquement via le port 122.

## Activation de l’accès à l’interpréteur de commandes d’administration via SSH

Pour activer l’accès SSH administratif, vous devez ajouter votre clé publique SSH à la liste des clés autorisées de votre instance.

{% tip %}

**Conseil :** Les modifications apportées aux clés SSH autorisées prennent effet immédiatement.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. Sous « Accès SSH », collez votre clé dans la zone de texte, puis cliquez sur **Ajouter une clé**.
  ![Zone de texte et bouton permettant d’ajouter une clé SSH](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png) {% data reusables.enterprise_management_console.save-settings %}

## Connexion à l’interpréteur de commandes d’administration via SSH

Après avoir ajouté votre clé SSH à la liste, connectez-vous à l’instance via SSH en tant qu’utilisateur `admin` sur le port 122.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### Résolution des problèmes de connexion SSH

Si vous rencontrez l’erreur `Permission denied (publickey)` lors d’une tentative de connexion à {% data variables.product.product_location %} via SSH, vérifiez que vous vous connectez via le port 122. Vous devrez peut-être indiquer explicitement quelle clé SSH privée utiliser.

Pour spécifier une clé SSH privée en utilisant la ligne de commande, exécutez `ssh` avec l’argument `-i`.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

Vous pouvez aussi spécifier une clé SSH privée en utilisant le fichier de configuration SSH (`~/.ssh/config`).

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## Accès à l’interpréteur de commandes d’administration à l’aide de la console locale

Dans une situation d’urgence, par exemple si SSH n’est pas disponible, vous pouvez accéder à l’interpréteur de commandes d’administration localement. Connectez-vous en tant qu’utilisateur `admin` et utilisez le mot de passe établi pendant la configuration initiale de {% data variables.product.prodname_ghe_server %}.

## Limitations d’accès pour l’interpréteur de commandes d’administration

L’accès à l’interpréteur de commandes d’administration est réservé à la résolution de problèmes et à l’exécution des procédures relatives aux opérations documentées. La modification de fichiers système et d’application, l’exécution de programmes ou l’installation de packages logiciels non pris en charge peuvent annuler votre contrat de support. Si vous avez une question sur les activités autorisées dans le cadre de votre contrat de support, contactez le {% data variables.contact.contact_ent_support %}.
