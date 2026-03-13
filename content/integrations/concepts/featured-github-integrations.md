---
title: Featured GitHub integrations
intro: 'Use {% data variables.product.github %} extensions to work seamlessly in repositories on {% data variables.location.product_location %} within third-party applications.'
redirect_from:
  - /articles/about-github-extensions-for-third-party-applications
  - /articles/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
  - /get-started/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
  - /get-started/exploring-integrations/github-extensions-and-integrations
  - /get-started/exploring-integrations/featured-github-integrations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Featured integrations
topics: 
  - Integration
category:
  - Learn about integrations
---

{% ifversion fpt or ghec %}

## Editor tools

You can connect to {% data variables.product.github %} repositories within third-party editor tools such as {% data variables.product.prodname_vs %}.

### {% data variables.product.github %} for {% data variables.product.prodname_vs %}

With the {% data variables.product.github %} for {% data variables.product.prodname_vs %} extension, you can work in {% data variables.product.github %} repositories without leaving {% data variables.product.prodname_vs %}. For more information, see the official {% data variables.product.prodname_vs %} extension [site](https://visualstudio.github.com/) or [documentation](https://github.com/github/VisualStudio/tree/master/docs).

### {% data variables.product.github %} for {% data variables.product.prodname_vscode %}

With the {% data variables.product.github %} for {% data variables.product.prodname_vscode %} extension, you can review and manage {% data variables.product.github %} pull requests in {% data variables.product.prodname_vscode_shortname %}. For more information, see the official {% data variables.product.prodname_vscode_shortname %} extension [site](https://vscode.github.com/) or [documentation](https://github.com/Microsoft/vscode-pull-request-github).

## Project management tools

You can integrate your personal or organization account on {% data variables.location.product_location %} with third-party project management tools, such as Jira.

### Jira Cloud and {% data variables.product.prodname_dotcom_the_website %} integration

You can integrate Jira Cloud with your personal or organization account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues. For more information, visit the [Jira integration app](https://github.com/marketplace/jira-software-github) in the marketplace.

{% endif %}

## Team communication tools

You can integrate your {% ifversion fpt or ghec %}personal{% elsif ghes %}user{% endif %} or organization account on {% data variables.location.product_location %} with third-party team communication tools, such as Slack or Microsoft Teams.

### Slack and {% data variables.product.github %} integration

The Slack + {% data variables.product.github %} app lets you subscribe to your repositories or organizations and get real-time updates about activity for the following features on {% data variables.location.product_location %}.

* Issues
* Pull requests
* Commits
* Discussions
* Releases
* {% data variables.product.prodname_actions %}
* Deployments

You can also open and close issues, comment on your issues and pull requests, approve deployments, and see detailed references to issues and pull requests without leaving Slack. The app will also ping you personally on Slack if you are mentioned as part of any {% data variables.product.github %} notifications that you receive in your channels or personal chats.

The Slack + {% data variables.product.github %} app is also compatible with [Slack Enterprise Grid](https://slack.com/intl/en-in/help/articles/360000281563-Manage-apps-on-Enterprise-Grid). For more information, see [AUTOTITLE](/integrations/how-tos/slack).

### Microsoft Teams and {% data variables.product.github %} integration

The {% data variables.product.github %} for Teams app lets you subscribe to your repositories or organizations and get real-time updates about activity for the following features on {% data variables.location.product_location %}.

* Issues
* Pull requests
* Commits
* Discussions
* Releases
* {% data variables.product.prodname_actions %}
* Deployments

You can also open and close issues, comment on your issues and pull requests, approve deployments, and see detailed references to issues and pull requests without leaving Microsoft Teams. The app will also ping you personally on Teams if you are mentioned as part of any {% data variables.product.prodname_dotcom %} notifications that you receive in your channels or personal chats.

For more information, see the integration's [README](https://github.com/integrations/microsoft-teams/blob/master/Readme.md) in the `integrations/microsoft-teams` repository.

{% ifversion fpt or ghec %}

You can also integrate the {% data variables.copilot.copilot_coding_agent %} with your Microsoft Teams app, enabling you to use AI-powered coding assistance directly within your team's communication platform. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-teams) for more information.

{% endif %}
