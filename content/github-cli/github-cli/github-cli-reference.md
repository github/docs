---
title: GitHub CLI reference
intro: 'You can view all of the {% data variables.product.prodname_cli %} commands in your terminal or in the {% data variables.product.prodname_cli %} manual.'
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

To view the environment variables that can be used with {% data variables.product.prodname_cli %}, see the [{% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_help_environment) or use the `environment` command.

```shell
gh environment
```

To view the configuration settings that can be used with {% data variables.product.prodname_cli %}, see the [{% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_config) or use the `config` command.

```shell
gh config
```
