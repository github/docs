---
title: Installation de GitHub Enterprise Server sur XenServer
intro: Pour installer {% data variables.product.prodname_ghe_server %} sur XenServer, vous devez déployer l’image de disque {% data variables.product.prodname_ghe_server %} sur un hôte XenServer.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104857"
---
{% note %}

  **Remarque :** À partir de la version 3.3, {% data variables.product.prodname_ghe_server %} ne sera plus pris en charge sur {% data variables.product.prodname_ghe_server %} 3.3. Pour plus d’informations, consultez les [notes de publication de {% data variables.product.prodname_ghe_server %} 3.1](/admin/release-notes#3.1.0)

{% endnote %}

## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez installer l’hyperviseur XenServer sur la machine qui exécutera votre machine virtuelle {% data variables.product.prodname_ghe_server %}. Nous prenons en charge les versions 6.0 à 7.0.
- Nous vous recommandons d’utiliser XenCenter Windows Management Console pour la configuration initiale. Vous trouverez ci-après des instructions sur l’utilisation de XenCenter Windows Management Console. Pour plus d’informations, consultez le guide Citrix « [How to Download and Install a New Version of XenCenter](https://support.citrix.com/article/CTX118531) » (Comment télécharger et installer une nouvelle version de XenCenter).

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Téléchargement de l’image de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Sous « {% data variables.product.prodname_dotcom %} local », sélectionnez le menu déroulant « Sélectionnez votre hyperviseur », puis cliquez sur **XenServer (VHD)** .
5. Pour télécharger votre fichier de licence, cliquez sur **Télécharger la licence**.

## Création de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Dans XenCenter, importez l’image de {% data variables.product.prodname_ghe_server %} que vous avez téléchargée. Pour obtenir des instructions, consultez le guide XenCenter « [Import Disk Images](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html) » (Importer des images de disque).
    - Pour l’étape « Enable Operating System Fixup », sélectionnez **Don’t use Operating System Fixup**.
    - Laissez la machine virtuelle hors tension quand vous avez terminé.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Pour obtenir des instructions, consultez le guide XenCenter « [Add Virtual Disks](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html) » (Ajouter des disques virtuels).

## Configuration de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
