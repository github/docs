---
title: Signing in to GitHub Enterprise Server in the GitHub Copilot app
shortTitle: Sign in on Copilot app
intro: 'Sign in with your {% data variables.product.prodname_ghe_server %} account to work with repositories, pull requests, and issues from the {% data variables.copilot.github_copilot_app_short %}.'
versions:
  ghes: '*'
contentType: how-tos
---

If you use {% data variables.product.prodname_ghe_server %}, you can sign in on the {% data variables.copilot.github_copilot_app_short %} to work with repositories, pull requests, and issues hosted on the {% data variables.product.prodname_ghe_server %} instance.

When you set up the app, you must first sign in to an account on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}. Then, you can add your {% data variables.product.prodname_ghe_server %} account:

1. Click <span style="vertical-align: 2px">{% octicon "gear" aria-label="Settings" %}</span> to open the Settings dialog.
1. In the sidebar, click **Accounts**.
1. Click **Add account**, then click **{% data variables.product.prodname_ghe_server %}**.
1. Follow the prompts to open your browser and authorize the app.

## Next step

To start making requests, ensure you're also signed in to a cloud account with a {% data variables.product.prodname_copilot_short %} license. Alternatively, to configure your own model provider, see [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/github-copilot-app/add-llm-models).
