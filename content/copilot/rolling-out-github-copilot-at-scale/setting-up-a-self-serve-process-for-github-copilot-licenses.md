---
title: Setting up a self-serve process for GitHub Copilot licenses
shortTitle: Self-serve licenses
intro: 'Learn how users can request a license and receive access immediately.'
versions:
  feature: copilot
topics:
  - Copilot
---

When you've enabled {% data variables.product.prodname_copilot %} in an organization or enterprise, you can set up a self-serve workflow to allow users to request licenses. This allows you to allocate licenses to people who want them, and means people can get started with {% data variables.product.prodname_copilot_short %} quickly.

{% data variables.product.company_short %} has found that many successful rollouts offer a fully self-service model where developers can claim a license without approval.

This article outlines two approaches your company can take:

* {% data variables.product.github %}'s **request access** feature for {% data variables.product.prodname_copilot_business_short %}, which requires no setup but does require explicit approvals from an administrator
* Your own integration with **{% data variables.product.github %}'s API**, which allows you to create your own process with instant access

## Approach 1: Use {% data variables.product.github %}'s "request access" feature

If you have a {% data variables.product.prodname_copilot_business_short %} subscription, members of an organization can request access to {% data variables.product.prodname_copilot %} on their settings page. Then, an organization owner must review and approve each request.

The process, which you should **communicate with users**, is as follows.

1. An organization or enterprise owner ensures {% data variables.product.prodname_copilot_business_short %} is enabled in the organization where you want to manage access.
1. Members of the organization go to their personal settings page at https://github.com/settings/copilot and click **Ask admin for access**.
1. An organization owner reviews and approves requests on the "Requests from members" page in the organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/managing-requests-for-copilot-business-in-your-organization).

You should set up a process where requests are reviewed regularly, so that interested users can get access to {% data variables.product.prodname_copilot_short %} quickly.

Users can also request access from organizations where {% data variables.product.prodname_copilot_business_short %} is not enabled. In this case, organization owners will be prompted to ask an enterprise owner to enable {% data variables.product.prodname_copilot_short %} for the organization.

## Approach 2: Integrate with the API

For a more streamlined approach, you can set up a self-serve process by integrating with {% data variables.product.github %}'s API. The benefits of this approach are that it allows you to build the process into your existing tooling, and it gives you the option to allow users to receive access instantly, without a manual approval process.

To set up the integration, you will use the [Add users to the {% data variables.product.prodname_copilot_short %} subscription for an organization](/rest/copilot/copilot-user-management#add-users-to-the-copilot-subscription-for-an-organization) endpoint, providing the username of the user who has requested access.

For example, the API call in a {% data variables.product.prodname_actions %} workflow might look as follows, where the organization and selected usernames are provided by the context of the workflow trigger:

``` javascript
const { Octokit } = require("@octokit/action");
const octokit = new Octokit();
const response = await octokit.request('POST /orgs/{org}/copilot/billing/selected_users', {
  org: context.repo.owner,
  selected_usernames: [context.payload.sender.login],
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
```

>[!NOTE] This endpoint only works if you use organizations on {% data variables.product.github %}. If {% data variables.product.company_short %} has provided you with a **dedicated enterprise for managing {% data variables.product.prodname_copilot_business_short %} licenses**, you will need to add users to enterprise teams instead. To request API documentation, please contact your account manager.

### Example implementations

* You could create the process entirely within {% data variables.product.github %}, having users create issues to request access, then using a {% data variables.product.prodname_actions %} workflow to call the API. For a demo of this approach, see the [microsoft/GitHubCopilotLicenseAssignment](https://github.com/microsoft/GitHubCopilotLicenseAssignment) repository. Note that this is **an external example that isn't covered by {% data variables.contact.github_support %}**.
* You could add a "Request access" button to users' profiles on your company's internal website, which will pass the user's {% data variables.product.github %} username to the API. You could grant access instantly or validate the user first, such as checking for their membership of a certain team.

## Further reading

* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/reminding-inactive-users)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/analyzing-usage-over-time-with-the-copilot-metrics-api)
* [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/managing-requests-for-copilot-business-from-organizations-in-your-enterprise){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}
