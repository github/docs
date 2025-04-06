---
title: SAML configuration reference
shortTitle: SAML reference
intro: 'You can see SAML metadata for {% ifversion ghec %}your organization or enterprise on {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% endif %}, and you can learn more about available SAML attributes and response requirements.'
versions:
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference
  - /admin/identity-and-access-management/iam-configuration-reference/saml-configuration-reference
---

## About SAML configuration

To use SAML single sign-on (SSO) for authentication to {% data variables.product.product_name %}, you must configure both your external SAML identity provider (IdP) and {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghec %}your enterprise or organization on {% data variables.location.product_location %}{% endif %}. In a SAML configuration, {% data variables.product.product_name %} functions as a SAML service provider (SP). For more information about authentication for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-identity-and-access-management#authentication-methods)."

 {% data variables.product.product_name %} provides integration according to the SAML 2.0 specification. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

You must enter unique values from your SAML IdP when configuring SAML SSO for {% data variables.product.product_name %}, and you must also enter unique values from {% data variables.product.product_name %} on your IdP. For more information about authentication for

## SAML metadata

{% ifversion ghec %}

The SP metadata for {% data variables.product.product_name %} is available for either organizations or enterprises with SAML SSO. {% data variables.product.product_name %} uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

### Organizations

You can configure SAML SSO for an individual organization in your enterprise. You can also configure SAML SSO for an organization if you use an individual organization on {% data variables.product.product_name %} and do not use an enterprise account. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization)."

The SP metadata for an organization on {% data variables.location.product_location %} is available at `https://github.com/orgs/ORGANIZATION/saml/metadata`, where **ORGANIZATION** is the name of your organization on {% data variables.location.product_location %}.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | The top-level URL for your organization on {% data variables.location.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `https://github.com/orgs/ORGANIZATION/sso` |

### Enterprises

The SP metadata for an enterprise on {% data variables.location.product_location %} is available at `https://github.com/enterprises/ENTERPRISE/saml/metadata`, where **ENTERPRISE** is the name of your enterprise on {% data variables.location.product_location %}.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | The top-level URL for your enterprise on {% data variables.location.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

The SP metadata for {% data variables.location.product_location %} is available at `http(s)://HOSTNAME/saml/metadata`, where **HOSTNAME** is the hostname for your instance. {% data variables.product.product_name %} uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL, audience restriction | Your top-level URL for {% data variables.product.product_name %} | `http(s)://HOSTNAME` |
| SP Assertion Consumer Service (ACS) URL | Reply, recipient, or destination URL | URL where IdP sends SAML responses | `http(s)://HOSTNAME/saml/consume` |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  `http(s)://HOSTNAME/sso` |

{% endif %}

## SAML attributes

The following SAML attributes are available for {% data variables.product.product_name %}.{% ifversion ghes %} You can change the attribute names in the {% data variables.enterprise.management_console %}, with the exception of the `administrator` attribute. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console)."{% endif %}

| Name | Required | Description |
| :- | :- | :- |
| `NameID` | {% octicon "check" aria-label="Required" %} | A persistent user identifier. Any persistent name identifier format may be used. {% ifversion ghec %}If you use an enterprise with {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} will normalize the `NameID` element to use as a username unless one of the alternative assertions is provided. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."<br><br>{% note %}**Note:** It's important to use a human-readable, persistent identifier. Using a transient identifier format like `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` will result in re-linking of accounts on every sign-in, which can be detrimental to authorization management.{% endnote %}  |
| `SessionNotOnOrAfter` | {% octicon "x" aria-label="Optional" %} | The date that {% data variables.product.product_name %} invalidates the associated session. After invalidation, the person must authenticate once again to access {% ifversion ghec %}your enterprise's resources{% elsif ghes %}{% data variables.location.product_location %}{% endif %}. For more information, see "[Session duration and timeout](#session-duration-and-timeout)." |
| {% ifversion ghes %} |
| `administrator` | {% octicon "x" aria-label="Optional" %} | When the value is `true`, {% data variables.product.product_name %} will automatically promote the user to be a {% ifversion ghes %}site administrator{% endif %}. Setting this attribute to anything but `true` will result in demotion, as long as the value is not blank. Omitting this attribute or leaving the value blank will not change the role of the user. |
| `username` | {% octicon "x" aria-label="Optional" %} | The username for {% data variables.location.product_location %}. |
| {% endif %} |
| `full_name` | {% octicon "x" aria-label="Optional" %} | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} full name of the user to display on the user's profile page. |
| `emails` | {% octicon "x" aria-label="Optional" %} | The email addresses for the user.{% ifversion ghes %} You can specify more than one address.{% endif %}{% ifversion ghec or ghes %} If you sync license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} uses `emails` to identify unique users across products. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %} |
| `public_keys` | {% octicon "x" aria-label="Optional" %} | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} public SSH keys for the user. You can specify more than one key. |
| `gpg_keys` | {% octicon "x" aria-label="Optional" %} | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} GPG keys for the user. You can specify more than one key. |

To specify more than one value for an attribute, use multiple `<saml2:AttributeValue>` elements.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML response requirements

{% data variables.product.product_name %} requires that the response message from your IdP fulfill the following requirements.

* Your IdP must provide the `<Destination>` element on the root response document and match the ACS URL only when the root response document is signed. If your IdP signs the assertion, {% data variables.product.product_name %} will ignore the assertion.
* Your IdP must always provide the `<Audience>` element as part of the `<AudienceRestriction>` element. The value must match your `EntityId` for {% data variables.product.product_name %}.{% ifversion ghes %} This value is the URL where you access {% data variables.location.product_location %}, such as `http(s)://HOSTNAME`.{% endif %}

  {%- ifversion ghec %}
  * If you configure SAML for an organization, this value is `https://github.com/orgs/ORGANIZATION`.
  * If you configure SAML for an enterprise, this URL is `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
* Your IdP must protect each assertion in the response with a digital signature. You can accomplish this by signing each individual `<Assertion>` element or by signing the `<Response>` element.
* Your IdP must provide a `<NameID>` element as part of the `<Subject>` element. You may use any persistent name identifier format.
* Your IdP must include the `Recipient` attribute, which must be set to the ACS URL. The following example demonstrates the attribute.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## Session duration and timeout

To prevent a person from authenticating with your IdP and staying authorized indefinitely, {% data variables.product.product_name %} periodically invalidates the session for each user account with access to {% ifversion ghec %}your enterprise's resources{% elsif ghes %}{% data variables.location.product_location %}{% endif %}. After invalidation, the person must authenticate with your IdP once again.

By default, if your IdP does not assert a value for the `SessionNotOnOrAfter` attribute, {% data variables.product.product_name %} invalidates a session {% ifversion ghec %}24 hours{% elsif ghes %}one week{% endif %} after successful authentication with your IdP.

{% data variables.product.product_name %} will support a customized session duration if your IdP provides the option to configure a `SessionNotOnOrAfter` attribute and value{% ifversion ghes %}, and if this attribute is included in SAML responses. If your IdP does not allow a `SessionNotOnOrAfter` attribute, a site administrator can configure a custom SAML session timeout for all users on your instance by using the `ghe-config saml.default-session-expiration [seconds]` command in the administrative shell{% endif %}.

If you define a customized session duration value less than 24 hours, {% data variables.product.product_name %} may prompt people to authenticate every time {% data variables.product.product_name %} initiates a redirect.

{% data reusables.enterprise.ghes-user-inactivity-timeout %}

{% ifversion ghec %}
To prevent authentication errors, we recommend a minimum session duration of 4 hours. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)."
{% endif %}

{% note %}

**Notes**:

* For Microsoft Entra ID (previously known as Azure AD), the configurable lifetime policy for SAML tokens does not control session timeout for {% data variables.product.product_name %}.
* Okta does not currently send the `SessionNotOnOrAfter` attribute during SAML authentication with {% data variables.product.product_name %}. For more information, contact Okta.

{% endnote %}
