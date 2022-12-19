---
title: Utilisation d’un serveur proxy avec des exécuteurs auto-hébergés
intro: 'Vous pouvez configurer des exécuteurs autohébergés pour utiliser un serveur proxy afin de communiquer avec {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086682'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configuration d’un serveur proxy à l’aide de variables d’environnement

Si vous avez besoin d’un exécuteur auto-hébergé pour communiquer via un serveur proxy, l’application d’exécuteur auto-hébergé utilise des configurations de proxy définies dans les variables d’environnement suivantes :

* `https_proxy` : URL de proxy pour le trafic HTTPS. Vous pouvez également inclure des informations d’authentification de base, si nécessaire. Par exemple :
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy` : URL de proxy pour le trafic HTTP. Vous pouvez également inclure des informations d’authentification de base, si nécessaire. Par exemple :
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy` : liste séparée par des virgules des hôtes qui ne doivent pas utiliser de proxy. Seuls les noms d’hôte sont autorisés dans `no_proxy`, vous ne pouvez pas utiliser d’adresses IP. Par exemple :
  * `example.com`
  * `example.com,myserver.local:443,example.org`

Les variables d’environnement de proxy étant lues au démarrage de l’application d’exécuteur auto-hébergé, vous devez définir les variables d’environnement avant de configurer ou de démarrer l’application d’exécuteur auto-hébergé. Si la configuration de votre proxy change, vous devez redémarrer l’application auto-hébergée de l’exécuteur.

Sur les machines Windows, les noms des variables d’environnement proxy ne respectent pas la casse. Sur les machines Linux et macOS, nous vous recommandons d’utiliser toutes les variables d’environnement en minuscules. Si vous avez une variable d’environnement en minuscules et en majuscules sur Linux ou macOS, par exemple `https_proxy` et `HTTPS_PROXY` , l’application de l’exécuteur auto-hébergé utilise la variable d’environnement en minuscules.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Utilisation d’un fichier .env pour définir la configuration du proxy

Si la définition des variables d’environnement n’est pas pratique, vous pouvez définir les variables de configuration de proxy dans un fichier nommé _.env_ dans le répertoire de l’application d’exécuteur auto-hébergé. Par exemple, cela peut être nécessaire si vous souhaitez configurer l’application d’exécuteur en tant que service sous un compte système. Lorsque l’application d’exécuteur démarre, elle lit les variables définies dans _.env_ pour la configuration du proxy.

Un exemple de fichier _.env_ de configuration de proxy est fourni ci-dessous :

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Définition de la configuration du proxy pour des conteneurs Docker

Si vous utilisez des actions de conteneur ou des conteneurs de service Docker dans vos workflows, vous devrez peut-être aussi configurer Docker pour utiliser votre serveur proxy en plus de définir les variables d’environnement ci-dessus.

Pour obtenir des informations sur la configuration Docker requise, consultez « [Configurer Docker pour utiliser un serveur proxy](https://docs.docker.com/network/proxy/) » dans la documentation Docker.
