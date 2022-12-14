---
title: Management Console
intro: 'L’API de la console de gestion vous aide à gérer votre installation de {% data variables.product.product_name %}.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065537'
---
{% tip %}

Vous devez définir explicitement le numéro de port lors de l’exécution d’appels d’API à la console de gestion. Si TLS est activé sur votre entreprise, le numéro de port est `8443` ; sinon, le numéro de port est `8080`.

Si vous ne souhaitez pas fournir un numéro de port, vous devez configurer votre outil pour suivre automatiquement les redirections.

Vous devrez peut-être également ajouter l’[indicateur `-k`](http://curl.haxx.se/docs/manpage.html#-k) lors de l’utilisation de `curl`, car {% data variables.product.product_name %} utilise un certificat auto-signé avant que vous [ajoutiez votre propre certificat TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Authentification

Vous devez transmettre votre [mot de passe de console de gestion](/enterprise/admin/articles/accessing-the-management-console/) en tant que jeton d’authentification pour chaque point de terminaison de l’API Console de gestion à l’exception de [`/setup/api/start`](#create-a-github-enterprise-server-license).

Utilisez le paramètre `api_key` pour envoyer ce jeton avec chaque requête. Par exemple :

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

Vous pouvez également utiliser l’authentification HTTP standard pour envoyer ce jeton. Par exemple :

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
