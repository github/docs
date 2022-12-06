---
title: informations de référence sur l’interface CLI GitHub
intro: 'Vous pouvez voir toutes les commandes {% data variables.product.prodname_cli %} dans votre terminal ou dans le manuel {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
ms.openlocfilehash: 1da9b2ffe79af2c432a4dfc79f944f8656663733
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066717'
---
Pour afficher toutes les commandes {% data variables.product.prodname_cli %} de premier niveau, consultez le [manuel de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh) ou appelez `gh` sans arguments.

```shell
gh
```

Pour répertorier toutes les commandes d’un groupe spécifique, utilisez la commande de premier niveau sans arguments. Par exemple, pour répertorier les [commandes de gestion des référentiels](https://cli.github.com/manual/gh_repo) :

```shell
gh repo
```

Pour afficher les variables d’environnement qui peuvent être utilisées avec {% data variables.product.prodname_cli %}, consultez le [manuel de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_help_environment) ou utilisez la commande `environment`.

```shell
gh environment
```

Pour afficher les paramètres de configuration qui peuvent être utilisés avec {% data variables.product.prodname_cli %}, consultez le [manuel de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_config) ou utilisez la commande `config`.

```shell
gh config
```
