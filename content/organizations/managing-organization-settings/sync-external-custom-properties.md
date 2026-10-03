---
title: Integrating custom properties with an external system
intro: Use a {% data variables.product.prodname_github_app %} to write external metadata to custom properties in an organization's repositories.
versions:
  feature: external-custom-properties
shortTitle: Sync external custom properties
contentType: how-tos
category:
  - Set up your organization
---

> [!NOTE] {% data reusables.organizations.external-properties-preview %}

{% data reusables.organizations.external-properties-intro %}

To set up this automation, you'll install a {% data variables.product.prodname_github_app %} that calls {% data variables.product.github %}'s API endpoints for external properties with data from the external system.

* Our integration partner [Port](https://www.port.io/) has developed an integration for external custom properties. For all required steps to sync metadata from Port, see [Sync Port properties to {% data variables.product.github %} external custom properties](https://docs.port.io/guides/all/sync-port-properties-to-github-external-custom-properties/) in the Port documentation. {% data variables.product.github %} will work to add more providers in the future.
* If your organization uses **another external system**, or if you're a representative of an external system who wants to create an integration with {% data variables.product.github %}, you will need to create your own {% data variables.product.prodname_github_app %} and automation. Continue reading this guide.

## Prerequisites

This process may require multiple different people. You will need:

* Someone to configure the {% data variables.product.prodname_github_app %}, under either their personal account or an organization or enterprise account where they are an owner
* One or more organization owners on {% data variables.product.github %} to install the app in each organization where it's required, and possibly to register a display name for the app

Outside the scope of this guide, you will also need someone who can create and run the automation, with appropriate access to the external system and the server where the automation will run.

## 1. Choose a display name

Every external custom property key in your organization will be prefixed by a display name. For example: `port.environment`. This acts as a namespace and helps avoid conflicts with custom properties managed on {% data variables.product.github %} or other external providers.

Each display name is scoped to a single {% data variables.product.prodname_github_app %} installation in the organization. Before an app can write custom properties to {% data variables.product.github %}, you must register the app installation with a display name. This is a one-time process that can be performed by the app itself or by an organization administrator. An app installation can only be registered once, and its display name can't be changed later.

Choose a name that will avoid conflicts and will help users identify custom properties from the external system. If you're publishing an app on behalf of a third-party system, you may want to respond to conflicts or allow users to choose their own display name as part of the setup flow on your system.

The display name must between 1 and 15 characters and contain only letters and numbers. For all requirements, see the [Register an app installation for external properties](/rest/orgs/custom-properties#register-an-app-installation-for-external-custom-properties) endpoint of the REST API.

## 2. Register a {% data variables.product.prodname_github_app %}

The {% data variables.product.prodname_github_app %} is the identity that will call the APIs to manage external custom properties. It can also listen for webhooks for events on {% data variables.product.github %}.

If you're creating an app for an internal process, we recommend creating the app under an organization or enterprise account. Then, you'll be able to install the app in as many organizations as you require. If you're a representative from a third-party system, you will likely publish the app to {% data variables.product.prodname_marketplace %} so that other companies can install it.

For instructions, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app).

### Selecting permissions

Under **Organization permissions**, enable the **External custom properties for repositories** permission so that the app can write data to the external properties API. The level of access required depends on what the app needs to do:

* Choose **Admin** access if the app will register its own display name using its installation access token. This is a good model for a self-service app that will be installed on many organizations.
* Choose **Read and write** access if the app only needs to write custom properties to {% data variables.product.github %}. An organization administrator will need to register the display name for their installation.

**Read-only** access is not an option for this task. An app with this level of access will only be able to read its own external custom property definitions.

If you want to subscribe to webhook events, you may need to enable additional permissions.

For more information, see [AUTOTITLE](/rest/authentication/permissions-required-for-github-apps#organization-permissions-for-external-custom-properties-for-repositories).

### Selecting webhooks

You can enable webhooks to subscribe to events on {% data variables.product.github %} that should trigger data transfer from your external system.

For example:

* When an app is installed on an organization (the `installation` event with the `created` action), this can trigger the first sync from the external system to the organization's repositories. This event is sent to all {% data variables.product.prodname_github_apps %} by default.
* When a new repository is created in the organization (the `repository` event with the `created` action), the repository can automatically be populated with metadata. This event requires read access to the **Metadata** repository permission.

Webhooks are not required if you prefer the automation to simply run on a schedule.

For more information, see [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps).

### Selecting the installation scope

Under **Where can this GitHub App be installed?**, make sure your app can be installed on all the organizations where it is required.

## 3. Create the automation

> [!TIP] For an example implementation, see the [external-custom-properties-sample](https://github.com/github/external-custom-properties-sample) repository.

The automation can run on a schedule or listen for events. The webhook you selected for the app determines which {% data variables.product.github %} events are forwarded to your webhook URL. You may also want to respond to events on the third-party system, such as changes to metadata values.

In the automation, the {% data variables.product.prodname_github_app %} must obtain an installation access token and use the token to send data from the external system to {% data variables.product.github %}'s external properties API endpoints. See [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

See the following endpoints of the REST API. You will find information on request size limits and error codes that your automation should account for.

* [Register an app installation for external custom properties](/rest/orgs/custom-properties#register-an-app-installation-for-external-custom-properties) (the app must register its display name before it can update properties, unless an organization administrator is expected to do this)
* [Get registered app installations for external custom properties](/rest/orgs/custom-properties#get-registered-app-installations-for-external-custom-properties)
* [Get all external custom properties for a {% data variables.product.prodname_github_app %} installation in an organization](/rest/orgs/custom-properties#get-all-external-custom-properties-for-a-github-app-installation-in-an-organization)
* [Create or update external custom property values for organization repositories](/rest/orgs/custom-properties#create-or-update-external-custom-property-values-for-organization-repositories)
* [Create or update external custom property values for a property across organization repositories](/rest/orgs/custom-properties#create-or-update-external-custom-property-values-for-a-property-across-organization-repositories)
* [Remove all external custom property values for a property across all organization repositories](/rest/orgs/custom-properties#remove-all-external-custom-property-values-for-a-property-across-all-organization-repositories)

## 4. Install the app

Install the {% data variables.product.prodname_github_app %} on the organizations where it's required, authorizing the permissions it needs. See [AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app).

Because the external custom properties permission is organization-scoped, the app will be installed with access to all repositories by default. You won't see an option to select individual repositories unless the app also has repository-level permissions.

If the app does not automatically register a display name or you cannot authorize **Admin** access, an organization administrator must register the display name for the installation. This can be an organization owner or someone with the `organization_external_properties_for_repos:admin` fine-grained permission. See [Register an app installation for external custom properties](/rest/orgs/custom-properties#register-an-app-installation-for-external-custom-properties).

## 5. Validate the data transfer

Once the automation has run, validate that external properties are being synced with the organization's repositories. You should be able to see these in the custom property settings for your organization or its repositories. The property keys will be prefixed with the external display name, and the values will be indicated with a {% octicon "plug" aria-label="External custom property value" %} icon. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization#viewing-values-for-repositories-in-your-organization).

External property **values** are also returned alongside traditional custom properties in the [Get all custom property values for a repository](/rest/repos/custom-properties#get-all-custom-property-values-for-a-repository) REST API endpoint. However, `/schema` endpoints for custom properties, such as "Get all custom properties for an organization," do **not** return external properties.

Users will not be able to edit these properties on {% data variables.product.github %}, but they will be able to use them anywhere they use traditional custom properties.

## 6. Maintain the integration

Keep the automation running and the app installed to keep syncing data from the external system. If you uninstall the {% data variables.product.prodname_github_app %} from an organization, the installation and display name will be deregistered, and all external properties that the app created will be **removed**.

Pay attention to the number of properties defined in the organization. Each organization can have up to 100 property definitions. Both external and standard custom properties count toward this limit.
