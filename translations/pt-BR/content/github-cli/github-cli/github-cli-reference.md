---
title: Referência da CLI do GitHub
intro: 'Você pode visualizar todos os comandos de {% data variables.product.prodname_cli %} no seu terminal ou no manual de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: reference
---

To view all top-level {% data variables.product.prodname_cli %} commands, see the [{% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh) or call `gh` without arguments.

```shell
gh
```

To list all commands under a specific group, use the top-level command without arguments. For example, to list [commands for managing repositories](https://cli.github.com/manual/gh_repo):

```shell
gh repo
```

Para ver as variáveis de ambiente que podem ser usadas com {% data variables.product.prodname_cli %}, consulte o [manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_help_environment) ou use o comando `ambiente`.

```shell
gh environment
```

Para ver as configurações que podem ser usadas com {% data variables.product.prodname_cli %}, consulte o [manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_config) ou use o comando `config`.

```shell
gh config
```
