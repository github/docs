---
title: "Gestion des hooks de pré-réception sur l’appliance GitHub Enterprise\_Server"
intro: 'Configurez la façon dont les utilisateurs utilisent les hooks de pré-réception dans leur appliance {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145102846'
---
## Création de hooks de pré-réception

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. Cliquez sur **Ajouter un hook de pré-réception**.
![Ajouter un hook de pré-réception](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. Dans le champ **Nom du hook**, entrez le nom du hook que vous souhaitez créer.
![Nommer le hook de pré-réception](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. Dans le menu déroulant **Environnement**, sélectionnez l’environnement sur lequel vous souhaitez exécuter le hook.
![Environnement du hook](/assets/images/enterprise/site-admin-settings/environment.png)
7. Sous **Script**, dans le menu déroulant **Sélectionner le dépôt de hooks**, sélectionnez le dépôt qui contient votre script de hook de pré-réception. Dans le menu déroulant **Sélectionner un fichier**, sélectionnez le nom de fichier du script de hook de pré-réception.
![Script de hook](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Sélectionnez **Utiliser l’état de sortie pour accepter ou rejeter les poussées** pour appliquer votre script. En désélectionnant cette option, vous pouvez tester le script en ignorant la valeur d’état de sortie. Dans ce mode, la sortie du script sera visible pour l’utilisateur dans la ligne de commande, mais pas dans l’interface web.
![Utiliser l’état de sortie](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Sélectionnez **Activer ce hook de pré-réception sur tous les dépôts par défaut** si vous souhaitez que le hook de pré-réception s’exécute sur tous les dépôts.
![Activer le hook sur tous les dépôts](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Sélectionnez **Les administrateurs peuvent activer et désactiver ce hook** pour autoriser les membres de l’organisation disposant d’autorisations d’administrateur ou de propriétaire à activer ou désactiver ce hook de pré-réception s’ils le souhaitent.
![Activation ou désactivation du hook par les administrateurs](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## Modification de hooks de pré-réception

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. En regard du hook de pré-réception que vous souhaitez modifier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
![Modification de hook de pré-réception](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## Suppression de hooks de pré-réception

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. En regard du hook de pré-réception que vous souhaitez supprimer, cliquez sur {% octicon "x" aria-label="X symbol" %}.
![Modification de hook de pré-réception](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Configurer des hooks de pré-réception pour une organisation

Un administrateur d’organisation peut configurer des autorisations de hook pour une organisation uniquement si l’administrateur de site a sélectionné l’option **Les administrateurs peuvent activer et désactiver ce hook** au moment de la création du hook de pré-réception. Pour configurer des hooks de pré-réception pour un dépôt, vous devez être administrateur ou propriétaire d’organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Dans la barre latérale de gauche, cliquez sur **Hooks**.
![Hooks dans la barre latérale](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. En regard du hook de pré-réception que vous souhaitez configurer, cliquez sur le menu déroulant **Autorisations de hook**. Indiquez si le hook de pré-réception doit être activé ou désactivé, ou autorisez sa configuration par les administrateurs du dépôt.
![Autorisations de hook](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## Configurer des hooks de pré-réception pour un dépôt

Un propriétaire de dépôt peut configurer un hook uniquement si l’administrateur de site a sélectionné l’option **Les administrateurs peuvent activer et désactiver ce hook** au moment de la création du hook de pré-réception. Dans une organisation, le propriétaire de l’organisation doit également avoir sélectionné l’autorisation de hook **Configurable**. Pour configurer des hooks de pré-réception pour un dépôt, vous devez être propriétaire du dépôt.

{% data reusables.profile.enterprise_access_profile %}
2. Cliquez sur **Dépôts** et sélectionnez le dépôt pour lequel vous souhaitez configurer des hooks de pré-réception.
![Dépôts](/assets/images/enterprise/repos/repositories.png) - {% data reusables.repositories.sidebar-settings %}
4. Dans la barre latérale de gauche, cliquez sur **Hooks et services**.
![Hooks et services](/assets/images/enterprise/repos/hooks-services.png)
5. En regard du hook de pré-réception que vous souhaitez configurer, cliquez sur le menu déroulant **Autorisations de hook**. Indiquez si le hook de pré-réception doit être activé ou désactivé.
![Autorisations de hook pour un dépôt](/assets/images/enterprise/repos/repo-hook-permissions.png)
