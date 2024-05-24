---
title: Finding the object ID for your Entra OIDC application
shortTitle: Find ID for Entra OIDC
intro: 'Learn how to find the object ID associated with your {% data variables.product.prodname_emus %} OIDC app.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

You can adjust the lifetime of a session, and how often a managed user account needs to reauthenticate with your IdP, by changing the lifetime policy property of the ID tokens issued for {% data variables.product.prodname_dotcom %} from your IdP. The default lifetime is one hour.  

You will need the object ID associated with your {% data variables.product.prodname_emus %} OIDC app to complete these steps. You can find this ID in the Microsoft Entra ID admin center or by using the Microsoft Graph Explorer.

Once you have your object ID, you must use the Microsoft Graph API to configure and assign a lifetime policy to that ID token. See "[Configure token lifetime policies](https://learn.microsoft.com/en-us/entra/identity-platform/configure-token-lifetimes#create-a-policy-and-assign-it-to-a-service-principal)" in the Microsoft documentation.

For help completing these steps or configuring the OIDC session lifetime for your IdP, contact [Microsoft Support](https://support.microsoft.com/).

## Using Microsoft Entra ID admin center to find your object ID

You can use the Microsoft Entra ID admin center UI to view the object ID associated with your {% data variables.product.prodname_emus %} OIDC app.

1. Log in to the [Microsoft Entra ID admin center](https://entra.microsoft.com/).
1. In the left sidebar under "Applications", click **Enterprise applications**.
1. Search for the **GitHub Enterprise Managed User (OIDC)** app. The application ID will be `12f6db80-0741-4a7e-b9c5-b85d737b3a31`.
1. Copy the **Object ID** value.

## Using Microsoft Graph Explorer to find your object ID

You can use the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) to view the object ID associated with your {% data variables.product.prodname_emus %} OIDC app.

1. Log in to the [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) tenant that has your OIDC app.
1. To view the object ID (`id` in Microsoft Graph) for your {% data variables.product.prodname_emus %} OIDC app, run the following query.

   Request Method: `GET`
  
   URL:
   `https://graph.microsoft.com/v1.0/servicePrincipals?$filter=appId eq '12f6db80-0741-4a7e-b9c5-b85d737b3a31'&$select=id,appId,appDisplayName`

   Example response:

  ```json
   {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#servicePrincipals(id,appId,appDisplayName)",
    "value": [
        {
            "id": "c8162c97-32ff-406d-85d3-cc372e3e8384",
            "appId": "12f6db80-0741-4a7e-b9c5-b85d737b3a31",
            "appDisplayName": "GitHub Enterprise Managed User (OIDC)"
        }
    ]
   }
  ```
