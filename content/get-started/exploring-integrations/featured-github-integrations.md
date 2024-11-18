---
title: Featured GitHub integrations
intro: 'Use {% data variables.product.prodname_dotcom %} extensions to work seamlessly in repositories on {% data variables.location.product_location %} within third-party applications.'
redirect_from:
  - /articles/about-github-extensions-for-third-party-applications
  - /articles/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
  - /get-started/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
  - /get-started/exploring-integrations/github-extensions-and-integrations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Featured integrations
---

{% ifversion fpt or ghec %}

## Editor tools

You can connect to {% data variables.product.product_name %} repositories within third-party editor tools such as {% data variables.product.prodname_vs %}.

{% ifversion fpt %}
{% note %}

**Note:** To see an example of how third-party editor tools connect to repositories for {% data variables.product.prodname_classroom %}, see "[AUTOTITLE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)."

{% endnote %}
{% endif %}

### {% data variables.product.product_name %} for {% data variables.product.prodname_vs %}

With the {% data variables.product.product_name %} for {% data variables.product.prodname_vs %} extension, you can work in {% data variables.product.product_name %} repositories without leaving {% data variables.product.prodname_vs %}. For more information, see the official {% data variables.product.prodname_vs %} extension [site](https://visualstudio.github.com/) or [documentation](https://github.com/github/VisualStudio/tree/master/docs).

### {% data variables.product.prodname_dotcom %} for {% data variables.product.prodname_vscode %}

With the {% data variables.product.prodname_dotcom %} for {% data variables.product.prodname_vscode %} extension, you can review and manage {% data variables.product.product_name %} pull requests in {% data variables.product.prodname_vscode_shortname %}. For more information, see the official {% data variables.product.prodname_vscode_shortname %} extension [site](https://vscode.github.com/) or [documentation](https://github.com/Microsoft/vscode-pull-request-github).

## Project management tools

You can integrate your personal or organization account on {% data variables.location.product_location %} with third-party project management tools, such as Jira.

### Jira Cloud and {% data variables.product.product_name %}.com integration

You can integrate Jira Cloud with your personal or organization account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues. For more information, visit the [Jira integration app](https://github.com/marketplace/jira-software-github) in the marketplace.

{% endif %}

{% ifversion slack-and-team-integrations %}

## Team communication tools

You can integrate your {% ifversion fpt or ghec %}personal{% elsif ghes %}user{% endif %} or organization account on {% data variables.location.product_location %} with third-party team communication tools, such as Slack or Microsoft Teams.

### Slack and {% data variables.product.product_name %} integration

The Slack + {% data variables.product.prodname_dotcom %} app lets you subscribe to your repositories or organizations and get real-time updates about activity for the following features on {% data variables.location.product_location %}.

* Issues
* Pull requests
* Commits
* Discussions
* Releases
* {% data variables.product.prodname_actions %}
* Deployments

You can also open and close issues, comment on your issues and pull requests, approve deployments, and see detailed references to issues and pull requests without leaving Slack. The app will also ping you personally on Slack if you are mentioned as part of any {% data variables.product.prodname_dotcom %} notifications that you receive in your channels or personal chats.

The Slack + {% data variables.product.prodname_dotcom %} app is also compatible with [Slack Enterprise Grid](https://slack.com/intl/en-in/help/articles/360000281563-Manage-apps-on-Enterprise-Grid). For more information, see the integration's [README](https://github.com/integrations/slack/blob/master/README.md) in the `integrations/slack` repository.

### Microsoft Teams and {% data variables.product.product_name %} integration

The {% data variables.product.prodname_dotcom %} for Teams app lets you subscribe to your repositories or organizations and get real-time updates about activity for the following features on {% data variables.location.product_location %}.

* Issues
* Pull requests
* Commits
* Discussions
* Releases
* {% data variables.product.prodname_actions %}
* Deployments

You can also open and close issues, comment on your issues and pull requests, approve deployments, and see detailed references to issues and pull requests without leaving Microsoft Teams. The app will also ping you personally on Teams if you are mentioned as part of any {% data variables.product.prodname_dotcom %} notifications that you receive in your channels or personal chats.

For more information, see the integration's [README](https://github.com/integrations/microsoft-teams/blob/master/Readme.md) in the `integrations/microsoft-teams` repository.

{% endif %}
