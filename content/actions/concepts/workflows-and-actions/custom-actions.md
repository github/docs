---
title: About custom actions
shortTitle: Custom actions
intro: 'Actions are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the {% data variables.product.prodname_dotcom %} community.'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
  - /actions/creating-actions/about-custom-actions
  - /actions/sharing-automations/creating-actions/about-custom-actions
  - /actions/concepts/workflows-and-actions/about-custom-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About custom actions

You can create actions by writing custom code that interacts with your repository in any way you'd like, including integrating with {% data variables.product.prodname_dotcom %}'s APIs and any publicly available third-party API. For example, an action can publish npm modules, send SMS alerts when urgent issues are created, or deploy production-ready code.

{% ifversion fpt or ghec %}
You can write your own actions to use in your workflow or share the actions you build with the {% data variables.product.prodname_dotcom %} community. To share actions you've built with everyone, your repository must be public. {% ifversion ghec %}To share actions only within your enterprise, your repository must be internal.{% endif %}
{% endif %}

Actions can run directly on a machine or in a Docker container. You can define an action's inputs, outputs, and environment variables.

## Types of actions

{% data reusables.actions.types-of-actions %}

{% rowheaders %}

| Type | Linux | macOS | Windows |
| ---- | ----- | ----- | -------- |
| Docker container | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| JavaScript | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Composite Actions | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

### Docker container actions

Docker containers package the environment with the {% data variables.product.prodname_actions %} code. This creates a more consistent and reliable unit of work because the consumer of the action does not need to worry about the tools or dependencies.

A Docker container allows you to use specific versions of an operating system, dependencies, tools, and code. For actions that must run in a specific environment configuration, Docker is an ideal option because you can customize the operating system and tools. Because of the latency to build and retrieve the container, Docker container actions are slower than JavaScript actions.

Docker container actions can only execute on runners with a Linux operating system. {% data reusables.actions.self-hosted-runner-reqs-docker %}

### JavaScript actions

JavaScript actions can run directly on a runner machine, and separate the action code from the environment used to run the code. Using a JavaScript action simplifies the action code and executes faster than a Docker container action.

{% data reusables.actions.pure-javascript %}

If you're developing a Node.js project, the {% data variables.product.prodname_actions %} Toolkit provides packages that you can use in your project to speed up development. For more information, see the [actions/toolkit](https://github.com/actions/toolkit) repository.

### Composite Actions

A _composite_ action allows you to combine multiple workflow steps within one action. For example, you can use this feature to bundle together multiple run commands into an action, and then have a workflow that executes the bundled commands as a single step using that action. To see an example, check out [AUTOTITLE](/actions/creating-actions/creating-a-composite-action).

## Next steps

To learn about how to manage your custom actions, see [AUTOTITLE](/actions/how-tos/administering-github-actions/managing-custom-actions).
