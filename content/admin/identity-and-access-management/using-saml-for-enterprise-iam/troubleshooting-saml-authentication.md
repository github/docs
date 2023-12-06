---
title: Troubleshooting SAML authentication
shortTitle: Troubleshoot SAML SSO
intro: 'If you use SAML single sign-on (SSO) and people are unable to authenticate to access {% data variables.location.product_location %}, you can troubleshoot the problem.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
---

{% ifversion ghes %}

## About problems with SAML authentication

{% data variables.product.product_name %} logs error messages for failed SAML authentication in the {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}systemd journal logs{% elsif ghes < 3.9 %}authentication log at{% endif %} {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}for the `github-unicorn` container{% elsif ghes < 3.9 %}_/var/log/github/auth.log_{% endif %}. You can review responses in {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}this log{% elsif ghes < 3.9 %}this log file{% endif %}, and you can also configure more verbose logging.

For more information about SAML response requirements, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)."

## Configuring SAML debugging

You can configure {% data variables.product.product_name %} to write verbose debug logs for every SAML authentication attempt. You may be able to troubleshoot failed authentication attempts with this extra output.

{% warning %}

**Warnings**:

- Only enable SAML debugging temporarily, and disable debugging immediately after you finish troubleshooting. If you leave debugging enabled, the size of the {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}logs{% elsif ghes < 3.9 %}file{% endif %} increases much faster than usual, which can negatively impact the performance of {% data variables.product.product_name %}.
- Test new authentication settings for {% data variables.location.product_location %} in a staging environment before you apply the settings in your production environment. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Under "SAML debugging", select the drop-down and click **Enabled**.
1. Attempt to sign into {% data variables.location.product_location %} through your SAML IdP.
1. Review the debug output in {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}the systemd journal for `github-unicorn`{% elsif ghes < 3.9 %}_/var/log/github/auth.log_{% endif %} on {% data variables.location.product_location %}. {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/about-system-logs#system-logs-in-the-systemd-journal-for-github-enterprise-server)."{% endif %}
1. When you're done troubleshooting, select the drop-down and click **Disabled**.

## Decoding responses

Some output in {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}the systemd journal for `github-unicorn`{% elsif ghes < 3.9 %}_/var/log/github/auth.log_{% endif %} may be Base64-encoded. You can access the administrative shell and use the `base64` utility on {% data variables.location.product_location %} to decode these responses. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

To decode the output, run the following command, replacing ENCODED_OUTPUT with the encoded output from the log.

```shell
base64 --decode ENCODED_OUTPUT
```

## Error: "Another user already owns the account"

When a user signs into {% data variables.location.product_location %} for the first time with SAML authentication, {% data variables.product.product_name %} creates a user account on the instance and maps the SAML `NameID` and `nameid-format` to the account.

When the user signs in again, {% data variables.product.prodname_ghe_server %} compares the account's `NameID` and `nameid-format` mapping to the IdP's response. If the `NameID`  or `nameid-format` in the IdP's response no longer matches the values that {% data variables.product.product_name %} expects for the user, the sign-in will fail. The user will see the following message.

> Another user already owns the account. Please have your administrator check the authentication log.

The message typically indicates that the person's username or email address has changed on the IdP. Ensure that the `NameID` and `nameid-format` mapping for the user account on {% data variables.product.prodname_ghe_server %} matches the user's `NameID` and `nameid-format` on your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

## Error: Recipient in SAML response was blank or not valid

If the `Recipient` does not match the ACS URL for {% data variables.location.product_location %}, one of the following two error messages will appear in the authentication log when a user attempts to authenticate.

```text
Recipient in the SAML response must not be blank.
```

```text
Recipient in the SAML response was not valid.
```

Ensure that you set the value for `Recipient` on your IdP to the full ACS URL for {% data variables.location.product_location %}. For example, `https://ghe.corp.example.com/saml/consume`.

## Error: "SAML Response is not signed or has been modified"

If your IdP does not sign the SAML response, or the signature does not match the contents, the following error message will appear in the authentication log.

```text
SAML Response is not signed or has been modified.
```

Ensure that you configure signed assertions for the {% data variables.product.product_name %} application on your IdP.

## Error: "Audience is invalid" or "No assertion found"

If the IdP's response has a missing or incorrect value for `Audience`, the following error message will appear in the authentication log.

```text
Audience is invalid. Audience attribute does not match https://YOUR-INSTANCE-URL
```

Ensure that you set the value for `Audience` on your IdP to the `EntityId` for {% data variables.location.product_location %}, which is the full URL to your instance. For example, `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %}
{% data reusables.saml.authentication-loop %}
{% endif %}
