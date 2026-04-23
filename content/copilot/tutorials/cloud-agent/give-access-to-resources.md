---
title: 'Giving GitHub Copilot cloud agent access to resources in your organization'
shortTitle: 'Give access to resources'
intro: 'Get more out of {% data variables.product.prodname_copilot_short %} by giving it access to approved MCP servers and internal packages.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Manage Copilot for a team
  - Roll Copilot out at scale
---

{% data variables.copilot.copilot_cloud_agent %} can connect to MCP servers, use private packages, and access external services, but only if your organization's repositories are configured to allow it.

Although much of the configuration below is done at the repository level, organization owners have control over which resources are in scope and who can configure access to them.

## Example scenario

Your organization uses Sentry to track bugs in your Node app. New exceptions are raised as issues on {% data variables.product.github %}, and your developers want to assign these issues to {% data variables.product.prodname_copilot_short %}.

You want {% data variables.product.prodname_copilot_short %} to:

* Connect to the Sentry MCP server so it can access details on your Sentry instance
* Install dependencies, including private packages hosted on {% data variables.product.github %}, to build your app and run tests
* Follow your organization's conventions for error-handling

## Storing secrets securely

By default, the scope of {% data variables.product.prodname_copilot_short %}'s authentication token is limited to the repository where it's running. This means that {% data variables.product.prodname_copilot_short %} won't be able to authenticate to external systems or access private, organization-scoped packages.

Repository administrators should add variables and secrets that {% data variables.product.prodname_copilot_short %} requires to a dedicated `copilot` {% data variables.product.prodname_actions %} environment. {% data variables.product.prodname_copilot_short %} can access this data in its setup and task execution. It won't be able to access variables or secrets outside this environment, such as organization-wide {% data variables.product.prodname_actions %} secrets.

### Example: Save a secret

A repository administrator saves an authentication token for the organization's Sentry instance.

1. Go to the **Environments** section of the repository settings.
1. Create a new environment called `copilot`.
1. Save an access token for your Sentry instance in an environment secret called `COPILOT_MCP_SENTRY_ACCESS_TOKEN`.

> [!TIP] We don't need to save a token for our private {% data variables.product.prodname_registry %} registry, which we'll access using the standard {% data variables.product.prodname_actions %} `GITHUB_TOKEN`. However, you would want to save an authentication token if you were using an external package registry.

## Configuring access to MCP servers

Organization and enterprise owners can set a policy to allow users to configure access to MCP servers. If this policy is enabled, users can configure MCP servers for {% data variables.copilot.copilot_cloud_agent %} in repository settings or in custom agent profiles. For organization-wide consistency, we recommend creating **custom agent profiles** at the organization or enterprise level.

A session using a custom agent has access to MCP servers configured in **both** the repository settings and the agent profile. However, the more use cases you cover with organization-wide custom agents, the less users will need to configure ad hoc access to MCP servers in repository settings.

We recommend browsing the [{% data variables.product.github %} MCP Registry](https://github.com/mcp) to find trusted, highly rated options.

### Example: Create a custom agent

An organization owner creates a custom agent profile for the Sentry agent. It has access to the Sentry MCP server and custom instructions for the organization's error-handling conventions.

1. Create a repository called `.github-private` in your organization. Optionally, an enterprise owner can set this repository as the source for all custom agents in the enterprise.
1. In the repository, add an `agent.md` file with a profile like the following. This includes configuration for the MCP server, which references the secret we saved.

   ``` text
   ---
   name: sentry-error-fixer
   description: Proposed fixes for exception issues raised from Sentry
   mcp-servers:
     sentry:
       type: 'local'
       command: 'npx'
       args: ['@sentry/mcp-server@latest']
       env:
         SENTRY_ACCESS_TOKEN: {% raw %}${{ secrets.COPILOT_MCP_SENTRY_ACCESS_TOKEN }}{% endraw %}
   ---

   You are an error resolution specialist. When you're assigned an issue created by our Sentry integration, check for error details and stack traces using the MCP server, then propose a fix.

   Make sure you check that your proposed fix works by building the site with `npm run build` and running the test suite in `npm test`.
   ```

1. When developers assign an issue to {% data variables.product.prodname_copilot_short %}, they can select the custom agent from a dropdown.

## Installing private packages

The best way to give {% data variables.product.prodname_copilot_short %} access to a project's dependencies is to install them in a `copilot-setup-steps.yml` workflow file. This file defines how the environment is set up before {% data variables.product.prodname_copilot_short %} starts working.

To allow the workflow to pull your private, organization-scoped packages, you will update the package settings to make sure that the repository's `GITHUB_TOKEN` has access to the package. This is more secure than using a long-lived {% data variables.product.pat_generic %} with organization permissions.

### Example: Install Node dependencies

A developer creates a workflow to install the Node dependencies defined in a repository's `package-lock.json` file. This includes private, organization-scoped packages hosted on {% data variables.product.github %}.

1. The developer creates a `copilot-setup-steps.yml` file in the repository.
1. They add steps for installing the project's dependencies. For example:

   {% data reusables.copilot.cloud-agent.install-dependencies %}

1. An organization administrator ensures that the repository has access to the organization's private packages by granting access to the repository in each package's settings. See [AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#github-actions-access-for-packages-scoped-to-organizations).

>[!TIP] If you need to access packages that are hosted internally within your corporate network, you may need to run {% data variables.copilot.copilot_cloud_agent %} on self-hosted {% data variables.product.prodname_actions %} runners.

## Controlling who can configure these settings

Now you have seen how access to resources is controlled at the repository and organization levels, consider how much scope you want to give users to manage these settings.

1. **Choose which repositories have access** to {% data variables.copilot.copilot_cloud_agent %}. If you're concerned about a specific repository, you can block it for all users.
1. **Consider who gets admin access** to these repositories. You can control this at the organization level by creating a team with the **All-repository admin** custom role. These users will be able to manage configuration _settings_, such as MCP configuration and `copilot` environments, in every repository.
1. **Use rulesets and CODEOWNERS files** to control edits of configuration _files_, such as `copilot-setup-steps.yml`, which anyone with write access can edit by default.
1. **Review the default firewall**. The firewall doesn't affect connections to MCP servers or setup steps in `copilot-setup-steps.yml`, but it does limit {% data variables.product.prodname_copilot_short %}'s access to the Internet during task execution. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall).
