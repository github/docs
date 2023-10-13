---
title: Using the GitHub CLI to forward webhooks for testing
intro: 'You can use the {% data variables.product.prodname_cli %} to test webhooks in your development environment without the complexity of port forwarding or third-party tools.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Test with the CLI
redirect_from:
  - /developers/webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli
  - /webhooks-and-events/webhooks/receiving-webhooks-with-the-github-cli
  - /webhooks/webhooks/receiving-webhooks-with-the-github-cli
  - /webhooks/receiving-webhooks-with-the-github-cli
  - /webhooks/testing-and-troubleshooting-webhooks/receiving-webhooks-with-the-github-cli
---
## About receiving webhooks with {% data variables.product.prodname_cli %}

When you make changes to your integration code, running the code in a local environment lets you test and iterate quickly without deploying the code. You can use {% data variables.product.prodname_cli %} to forward webhooks to your local environment.

Webhook forwarding in the {% data variables.product.prodname_cli %} only works with repository and organization webhooks. If you want to test other types of webhooks locally, you'll need to do this manually. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/testing-webhooks)."

{% warning %}

**Warning**: Webhook forwarding is only designed for use during testing and development. It is not supported for use in production environments for handling live webhooks.

{% endwarning %}

## Receiving webhooks with {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

1. To install the {% data variables.product.prodname_cli %} extension to enable webhook forwarding, use the `extension install` subcommand.

   ```shell
   gh extension install cli/gh-webhook
   ```

1. If you want to forward organization webhooks, add the `admin:org_hook` scope to your {% data variables.product.prodname_cli %} login so you have the required permissions.

   ```shell
   gh auth refresh --scopes admin:org_hook
   ```

1. Start your application locally, and take a note of the URL where it's expecting to receive webhooks. This guide assumes that your application is listening for webhook events at `http://localhost:3000/webhook`.

1. To set up webhooks to be delivered to your application, run the `webhook forward` subcommand. Replace `REPOSITORY` with the name of your repository. For example, `monalisa/octocat`. Replace `EVENTS` with a comma-separated list of the events that you want to receive. For example, `issues,pull_request`. Replace `URL` with the local URL where your application expects to receive webhooks. For example, `"http://localhost:3000/webhook"`.  To listen for organization webhooks instead of repository webhooks, replace the `--repo` flag with the `--org` flag. For example `--org="octo-org"`.

   ```shell
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  Leave the command running in the background. It will receive all of the specified events for the specified repository and forward them to your webhook handler running at the specified URL.

   {% note %}

   **Note**: Only one person can use webhook forwarding at a time for each repository and organization. If you try to set up webhook forwarding and someone else is already working with that organization or repository, you'll receive a `Hook already exists` error.

   {% endnote %}
