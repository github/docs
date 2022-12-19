---
title: À propos des URL anonymes
intro: 'Si vous chargez une image ou une vidéo sur {% data variables.product.product_name %}, l’URL de l’image ou de la vidéo est modifiée pour éviter que vos informations puissent être suivies.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-anonymized-urls
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: b96c01144d28d668d33e96e4067801395aaa8275
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106598'
---
Pour héberger vos images, {% data variables.product.product_name %} utilise le [projet open source Camo](https://github.com/atmos/camo). Camo génère un proxy d’URL anonyme pour chaque fichier, qui masque les détails de votre navigateur et les informations associées auprès des autres utilisateurs. L’URL commence par `https://<subdomain>.githubusercontent.com/`, avec différents sous-domaines en fonction de la façon dont vous avez chargé l’image. 

Les vidéos reçoivent également des URL anonymes avec le même format que les URL d’image, mais ne sont pas traitées via Camo. Cela est dû au fait que {% data variables.product.prodname_dotcom %} ne prend pas en charge les vidéos hébergées en externe, de sorte que l’URL anonyme est un lien vers la vidéo chargée hébergée par {% data variables.product.prodname_dotcom %}.

Toute personne qui reçoit votre URL anonyme, directement ou indirectement, peut afficher votre image ou votre vidéo. Pour garder les fichiers de médias sensibles privés, limitez-les à un réseau privé ou à un serveur qui nécessite une authentification au lieu d’utiliser Camo.

## Résolution des problèmes liés à Camo

Dans de rares circonstances, les images traitées via Camo peuvent ne pas apparaître sur {% data variables.product.prodname_dotcom %}. Voici quelques étapes à suivre pour déterminer où se trouve le problème.

{% windows %}

{% tip %}

Les utilisateurs Windows devront utiliser Git PowerShell (qui est installé avec [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)) ou télécharger [curl pour Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

### Une image n’apparaît pas

Si une image s’affiche dans votre navigateur, mais pas sur {% data variables.product.prodname_dotcom %}, vous pouvez essayer de la demander localement.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Demandez les en-têtes d’image en utilisant `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Vérifiez la valeur `Content-Type`. Dans ce cas, il s’agit de `image/x-png`.
4. Vérifiez le type de contenu par rapport à [la liste des types pris en charge par Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

Si votre type de contenu n’est pas pris en charge par Camo, vous pouvez essayer plusieurs actions :
  * Si vous possédez le serveur qui héberge l’image, modifiez-le afin qu’il retourne un type de contenu correct pour les images.
  * Si vous utilisez un service externe pour héberger des images, contactez le support technique de ce service.
  * Effectuez une demande de tirage sur Camo pour ajouter votre type de contenu à la liste.

### Une image qui a changé récemment n’est pas mise à jour

Si vous avez modifié une image récemment et qu’elle s’affiche dans votre navigateur, mais pas {% data variables.product.prodname_dotcom %}, vous pouvez essayer de réinitialiser le cache de l’image.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Demandez les en-têtes d’image en utilisant `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Vérifiez la valeur `Cache-Control`. Dans cet exemple, il n’y a pas de `Cache-Control`. Dans ce cas :
  * Si vous possédez le serveur qui héberge l’image, modifiez-le afin qu’il retourne un `Cache-Control` de `no-cache` pour les images.
  * Si vous utilisez un service externe pour héberger des images, contactez le support technique de ce service.

 Si `Cache-Control` *est* défini sur `no-cache`, contactez {% data variables.contact.contact_support %} ou visitez le {% data variables.contact.community_support_forum %}.

### Suppression d’une image du cache de Camo

La purge du cache force chaque utilisateur de {% data variables.product.prodname_dotcom %} à re-demander l’image. Vous devez donc l’utiliser de manière éparse et uniquement en cas de non-fonctionnement des étapes ci-dessus.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Videz l’image avec `curl -X PURGE` sur l’URL Camo.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

### Affichage d’images sur des réseaux privés

Si une image est servie à partir d’un réseau privé ou d’un serveur qui nécessite une authentification, elle ne peut pas être consultée par {% data variables.product.prodname_dotcom %}. En fait, aucun utilisateur ne peut l’ouvrir sans demander de se connecter au serveur.

Pour résoudre ce problème, déplacez l’image vers un service disponible publiquement.

## Pour aller plus loin

- « [Mise en proxy d’images utilisateur](https://github.com/blog/1766-proxying-user-images) » sur {% data variables.product.prodname_blog %}
