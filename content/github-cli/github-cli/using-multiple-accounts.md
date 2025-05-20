---
title: Using the GitHub CLI across GitHub platforms
intro: 'Learn how to run commands when you are authenticated to accounts on different {% data variables.product.github %} platforms.'
shortTitle: Accounts across platforms
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CLI
allowTitleToDifferFromFilename: true
---

If you have accounts on multiple {% data variables.product.github %} platforms, such as a personal account on {% data variables.product.prodname_dotcom_the_website %} and a {% data variables.enterprise.prodname_managed_user %} on {% data variables.enterprise.data_residency_site %}, you can authenticate with `gh auth login` for each account.

You'll need to authenticate to run _any_ commands in a given environment. For example, even if you're running a command that only requires read access to a public repository on {% data variables.product.prodname_dotcom_the_website %}, you won't be able to use this command if you're only authenticated to an account on {% data variables.enterprise.data_residency_site %}. You should therefore authenticate to all accounts you want to use with the {% data variables.product.prodname_cli %}.

## How do I run commands for each account?

Once you've authenticated with multiple accounts, when you run a command, the {% data variables.product.prodname_cli %} can sometimes automatically detect which platform you're trying to access. In other cases, you'll need to provide more information in your command.

The {% data variables.product.prodname_cli %} **automatically detects** your intended account when you're in the context of a specific repository. For example, if you `cd` into your `my-repo` directory and run `gh repo view`, the command will target the correct platform for that repository.

The {% data variables.product.prodname_cli %} **can't automatically detect** your intended account when it doesn't have this context. For example, if you run `gh repo list` to list repositories for your account, the {% data variables.product.prodname_cli %} won't know which account you want to access. In cases like this:

* The {% data variables.product.prodname_cli %} will default to {% data variables.product.prodname_dotcom_the_website %}.
* You can set the `GH_HOST` environment variable to change the default target for these kinds of requests. See [gh environment](https://cli.github.com/manual/gh_help_environment) in the {% data variables.product.prodname_cli %} manual.
* Some commands allow you allow you to specify your target environment with the `--hostname` option, such as `gh api`, or pass the full URL for a repository, such as `gh pr view`.

## Can I use multiple accounts on the same platform?

You can also authenticate with multiple accounts on the same platform. To switch between these accounts, you can use the `gh auth switch` command. See [gh auth switch](https://cli.github.com/manual/gh_auth_switch) in the {% data variables.product.prodname_cli %} manual.
