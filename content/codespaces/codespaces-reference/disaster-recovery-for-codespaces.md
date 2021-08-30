---
title: Disaster recovery for Codespaces
intro: 'This article describes guidance for a disaster recovery scenario, when a whole region experiences an outage due to major natural disaster or widespread service interruption.'
versions:
  free-pro-team: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
shortTitle: Disaster recovery
---

We work hard to make sure that {% data variables.product.prodname_codespaces %} is always available to you. However, forces beyond our control sometimes impact the service in ways that can cause unplanned service disruptions.

Although disaster recovery scenarios are rare occurrences, we recommend that you prepare for the possibility that there is an outage of an entire region. If an entire region experiences a service disruption, the locally redundant copies of your data would be temporarily unavailable.

The following guidance provides options on how to handle service disruption to the entire region where your codespace is deployed.

{% note %}

**Note:** You can reduce the potential impact of service-wide outages by pushing to remote repositories frequently.

{% endnote %}

## Option 1: Create a new codespace in another region

In the case of a regional outage, we suggest you recreate your codespace in an unaffected region to continue working. This new codespace will have all of the changes as of your last push to {% data variables.product.prodname_dotcom %}. For information on manaully setting another region, see "[Setting your default region for Codespaces](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."

You can optimize recovery time by configuring a `devcontainer.json` in the project's repository, which allows you to define the tools, runtimes, frameworks, editor settings, extensions, and other configuration necessary to restore the development environment automatically. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."

## Option 2: Wait for recovery

In this case, no action on your part is required. Know that we are working diligently to restore service availability. 

You can check the current service status on the [Status Dashboard](https://www.githubstatus.com/).

## Option 3: Clone the repository locally or edit in the browser

While {% data variables.product.prodname_codespaces %} provides the benefit of a pre-configured developer environmnent, your source code should always be accessible through the repository hosted on {% data variables.product.prodname_dotcom_the_website %}. In the event of a {% data variables.product.prodname_codespaces %} outage, you can still clone the repository locally or edit files in the {% data variables.product.company_short %} browser editor. For more information, see [Editing files in your repository](/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository).

While this option does not configure a development environment for you, it will allow you to make changes to your source code as needed while you wait for the service disruption to resolve.

## Option 4: Use Remote-Containers and Docker for a local containerized environment

If your repository has a `devcontainer.json`, consider using the [Remote-Containers extension](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) in Visual Studio Code to build and attach to a local development container for your repository. The setup time for this option will vary depending on your local specifications and the complexity of your dev container setup.

{% note %}

**Note:** Be sure your local setup meets the [minimum requirements](https://code.visualstudio.com/docs/remote/containers#_system-requirements) before attempting this option.

{% endnote %}
