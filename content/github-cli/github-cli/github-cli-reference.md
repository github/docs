---
title: GitHub CLI reference
intro: 'You can view all of the {% data variables.product.prodname_cli %} commands in your terminal. The same information is available in the {% data variables.product.prodname_cli %} manual.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CLI
type: reference
---

To view all top-level {% data variables.product.prodname_cli %} commands, enter `gh` without arguments.

```shell
gh
```

To list all of the subcommands that you can use with a {% data variables.product.prodname_cli %} command, use the top-level command without arguments.

```shell
gh COMMAND
```

For example, to view the environment variables that you can set to affect certain aspects of {% data variables.product.prodname_cli %}, use the `environment` command.

```shell
gh environment
```

To view the configuration settings that you can set, use the `config` command.

```shell
gh config
```

To view help for a particular subcommand, use the `--help` flag.

```shell
gh COMMAND [SUBCOMMAND ...] --help
```

All of the information that's available by running these commands in the terminal is also included in the [{% data variables.product.prodname_cli %} online manual](https://cli.github.com/manual/gh).
