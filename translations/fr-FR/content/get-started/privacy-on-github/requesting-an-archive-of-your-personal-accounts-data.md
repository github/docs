---
title: Demande d’archive des données de votre compte personnel
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877111'
---
{% data variables.product.product_name %} stocke les métadonnées de dépôt et de profil de l’activité de votre compte personnel. Vous pouvez exporter les données de votre compte personnel en utilisant des paramètres sur {% data variables.product.prodname_dotcom_the_website %} ou avec l’API Migration utilisateur.

Pour plus d’informations sur les données stockées par {% data variables.product.product_name %} qui sont disponibles pour l’exportation, consultez « [Télécharger une archive de migration utilisateur](/rest/reference/migrations#download-a-user-migration-archive) » et « [À propos de l’utilisation de vos données par {% data variables.product.product_name %}](/articles/about-github-s-use-of-your-data).

Quand vous demandez une exportation de vos données personnelles en utilisant des paramètres sur {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.product_name %} compresse vos données personnelles dans un fichier `tar.gz` et envoie un message à votre adresse e-mail principale avec un lien de téléchargement.

Par défaut, le lien de téléchargement expire au bout de sept jours. À tout moment avant son expiration, vous pouvez désactiver le lien de téléchargement dans vos paramètres utilisateur. Pour plus d’informations, consultez « [Suppression de l’accès à une archive de données de votre compte personnel](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data) ».

Si votre système d’exploitation ne peut pas décompresser le fichier `tar.gz` en mode natif, vous pouvez utiliser un outil tiers pour extraire les fichiers archivés. Pour plus d’informations, consultez « [Comment décompresser un fichier tar.gz](https://opensource.com/article/17/7/how-unzip-targz-file) » sur Opensource.com.

Le fichier `tar.gz` généré reflète les données stockées au moment où vous avez démarré l’exportation des données.

## Téléchargement d’une archive des données de votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Sous « Exporter des données de compte », cliquez sur **Démarrer l’exportation** ou **Nouvelle exportation**.
![Bouton Démarrer l’exportation de données personnelles sélectionné ](/assets/images/help/repository/export-personal-data.png)
![Bouton Nouvelle exportation de données personnelles](/assets/images/help/repository/new-export.png)
4. Une fois l’exportation prête pour le téléchargement, {% data variables.product.product_name %} envoie un lien de téléchargement à votre adresse e-mail principale.
5. Cliquez sur le lien de téléchargement dans votre e-mail et entrez à nouveau votre mot de passe si vous y êtes invité.
6. Vous êtes redirigé vers un fichier `tar.gz` que vous pouvez télécharger.

## Suppression de l’accès à une archive des données de votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Pour désactiver le lien de téléchargement envoyé à votre e-mail avant son expiration, sous « Exporter les données du compte », recherchez le téléchargement d’exportation de données à désactiver et cliquez sur **Supprimer**.
![Bouton Supprimer le package d’exportation de données personnelles sélectionné](/assets/images/help/repository/delete-export-personal-account-data.png)
