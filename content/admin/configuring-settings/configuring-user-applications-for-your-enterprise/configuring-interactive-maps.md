---
title: Configuring interactive maps
intro: 'You can enable the display of interactive maps in the web interface for {% data variables.location.product_location %}.'
shortTitle: Configure interactive maps
permissions: 'People with access to the {% data variables.enterprise.management_console %} can configure interactive maps.'
versions:
  feature: azure-maps
type: how_to
topics:
  - Enterprise
redirect_from:
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-interactive-maps
---

## About interactive maps

You can allow users of {% data variables.location.product_location %} to create interactive maps using GeoJSON or TopoJSON syntax. For more information about creation of interactive maps, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)."

To enable interactive maps, you must provide authentication credentials for Azure Maps.

{% ifversion azure-maps-auth-2023 %}
{% ifversion ghes < 3.13 %}

{% warning %}

**Warning**: Authentication with Azure Maps using an API token is deprecated in {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} and later. If you upgrade to the latest release of {% data variables.product.product_name %} on an instance already configured to authenticate with an API token, interactive maps will be disabled. You must reconfigure authentication using role-based access control (RBAC) for an application on a Microsoft Entra ID (previously known as Azure AD) tenant. {% data reusables.enterprise.azure-maps-auth-deprecation-link %}

{% endwarning %}

{% endif %}
{% endif %}

## Prerequisites

{% ifversion azure-maps-auth-2023 %}

{% ifversion ghes < 3.12 %}

The following prerequisites apply if your instance runs {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} or later.

{% endif %}

* To configure interactive maps for your instance, you must have {% ifversion azure-maps-auth-2023 %}administrative access to a tenant in Microsoft Entra ID. For more information, contact the administrator for Microsoft resources at your company, or see [Quickstart: Create a new tenant in Microsoft Entra ID](https://learn.microsoft.com/entra/fundamentals/create-new-tenant) on Microsoft Learn{% else %}an API token for Azure Maps{% endif %}.

* You must know the tenant ID for your tenant in Entra ID. For more information, see [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-microsoft-entra-tenant) on Microsoft Learn.

* Your instance must be able to access https://login.microsoftonline.com.

{% endif %}

{% ifversion ghes < 3.12 %}

If your instance runs {% ifversion ghes < 3.11 %}a release of {% data variables.product.product_name %} in the {{ allVersions[currentVersion].currentRelease }} series earlier than {% else %}{% data variables.product.product_name %} {% endif %}{{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}3{% elsif ghes = 3.11 %}0{% endif %}, you must provide an API token for Azure Maps instead.

{% data reusables.enterprise.azure-maps-auth-warning %}

{% endif %}

{% ifversion azure-maps-auth-2023 %}

## Generating credentials for Azure Maps

{% ifversion ghes < 3.12 %}

To configure authentication for Azure Maps using RBAC, your instance must run {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} or later.

{% endif %}

To generate credentials for Azure Maps, you must create an application for your tenant in Entra ID, provide the application access to an Azure Maps account, and configure role-based access control (RBAC).

1. Register a new application on your Entra ID tenant. For more information, see [Quickstart: Register an application with the Microsoft identity platform](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application) on Microsoft Learn.

   * When you specify supported account types, select **Accounts in this organizational directory only**.
1. Add a client secret. For more information, see [Quickstart: Register an application with the Microsoft identity platform](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#add-a-client-secret) on Microsoft Learn.
1. Store the value of the secret in a secure location that you can reference when you configure authentication on {% data variables.location.product_location %}. Entra will never display the value after you leave the page.
1. Configure access to the secret by Azure Maps.

   1. While viewing the details for the application you configured on your Entra ID tenant, in the left-hand sidebar, click **API permissions**.
   1. Click **Add a permission**.
   1. Click **Azure Maps**.
   1. Select **Delegated permissions**.
   1. Under "Select permissions", select "`user_impersonation`".
   1. To save the permissions, click **Add permissions**.
1. Sign into an Azure Maps account. If you don't have an account, you can create one. For more information, see the [Azure Maps Account](https://www.microsoft.com/maps) website.
1. Configure RBAC for Azure Maps. For more information, see [Authentication with Azure Maps](https://learn.microsoft.com/azure/azure-maps/azure-maps-authentication#authorization-with-role-based-access-control) and [Assign Azure roles using the Azure portal](https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal) on Microsoft Learn.

   * On your Entra ID tenant, from **Access control (IAM)**, you must assign the role of "Azure Maps Data Reader" to "User, group, or service principal", select the application you created earlier in these instructions, and complete the form.

{% endif %}

## Enabling interactive maps

{% ifversion azure-maps-auth-2023 %}

After you create an application on your Entra ID tenant and generate a secret for the use of Azure Maps, you can configure interactive maps on {% data variables.location.product_location %}.

{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
1. To enable interactive maps, select "Enable GeoJSON rendering".
1. Generate a 32-character string to use as a secret to prevent cross-site request forgery (CSRF). For example, you can access the administrative shell and use `openssl` on {% data variables.location.product_location %} to generate a string. For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."

   ```shell copy
   openssl rand -hex 32
   ```

   Store the string in a secure location that you can reference in the next step.
{%- ifversion azure-maps-auth-2023 %}
1. {% ifversion ghes > 3.11 %}Below the headings, type or paste{% else %}Enter{% endif %} your authentication details for Azure Maps.

   {%- ifversion ghes < 3.11 %}
   * If your instance runs {% ifversion ghes < 3.11 %}a release of {% data variables.product.product_name %} in the {{ allVersions[currentVersion].currentRelease }} series earlier than {% else %}{% data variables.product.product_name %} {% endif %}{{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}3{% elsif ghes = 3.11 %}0{% endif %}, below "Azure Maps API Token", type or paste your token.

     {% data reusables.enterprise.azure-maps-auth-warning %}
   * If your instance runs {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} or later, below the headings, type or paste the following information.

     {%- endif %}
     * Optionally, to change the style of rendered maps, under "Basemap ID", type the ID for the style you'd like to use.
     * Under the headings, type or paste your authentication details.

       | Value | Description | More information |
       | :- | :- | :- |
       | Azure Map Client ID | Client ID for your Azure Maps account | [Manage authentication in Azure Maps](https://learn.microsoft.com/azure/azure-maps/how-to-manage-authentication#view-authentication-details) on Microsoft Learn |
       | Azure App Client ID | Application (client) ID for the application you created on your Entra ID tenant | [Create a Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application) on Microsoft Learn |
       | Azure Tenant ID | ID for your tenant on Entra ID | "[Prerequisites](#prerequisites)" |
       | Azure App Client Secret | Client secret that you generated for the application on your Entra ID tenant | "[Generating credentials for Azure Maps](#generating-credentials-for-azure-maps)"
       | CSRF Secret | 32-character string to prevent CSRF attacks | See previous step. |
{%- else %}
1. To configure authentication, under "Azure Maps API Token", paste your token.
{%- endif %}
{% data reusables.enterprise_management_console.save-settings %}

## Disabling interactive maps

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
1. To disable interactive maps, deselect "Enable GeoJSON rendering".
{% data reusables.enterprise_management_console.save-settings %}
