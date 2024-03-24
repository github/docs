---
title: Configuring GitHub Copilot in the CLI
intro: 'You can configure usage analytics and the default behavior for the execute command option.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Configuring Copilot in the CLI
---

## About configuration for {% data variables.product.prodname_copilot_cli %}

By running `gh copilot config` you can configure multiple settings:

- Optional Usage Analytics
- The default behavior for the execute command confirmation

## About Optional Usage Analytics

You can choose to allow {% data variables.product.company_short %} to collect usage data. This helps with improving the product and providing better support. You can enable or disable usage analytics at any time.

{% data variables.product.company_short %} uses metrics to prioritize work and evaluate whether {% data variables.product.prodname_copilot_cli_short %} is successful in solving real user problems. For example, when a new version is released and there's a spike in exceptions and response ratings, usage analytics are used to understand if there is a regression or a platform issue causing problems.

Unless you've opted out, {% data variables.product.prodname_copilot_cli_short %} will send a payload in the format below to the analytics system. {% data variables.product.company_short %} is very sensitive to the privacy of users and will never look at the data of specific individuals, but rather only examine aggregate data and trends to inform product decisions.

```json
{
	"platform": "darwin",
	"architecture": "arm64",
	"version": "0.3.0-beta",
	"custom_event": "true",
	"event_parent_command": "explain",
	"event_name": "Explain",
	"sha": "089a53215fc4383179869f7f6132ce9d6e58754a",
	"thread_id": "e61d0d08-f6ba-465b-81cf-c30fd9127d70"
}
```

## About the execute command confirmation

When you use the `ghcs` alias and choose to execute the suggested command, {% data variables.product.prodname_copilot_cli_short %} will prompt you to confirm that you want to execute the code. For more information, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli#executing-the-command)."

To prevent accidental execution of commands, the confirmation prompt defaults to `No`. For faster execution, you can change the default answer to `Yes`.
