---
title: About GitHub Partner Support
intro: 'Get help resolving issues for your customers with {% data variables.contact.partner_support %}. This paid, supplemental support program is available to select partners.'
shortTitle: '{% data variables.contact.partner_support %}'
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/support/github-partner-support
versions:
  ghec: '*'
  ghes: '*'
category:
  - Understand your support options
---

{% data variables.contact.partner_support %} lets partners open support tickets on behalf of their customers and escalate complex issues to {% data variables.contact.github_support %}. The partner remains the customer's primary point of contact.

Built on {% data variables.contact.enterprise_support %}, the offering includes accelerated initial response targets and priority case handling. Partner-specific workflows help you create, track, and manage customer support tickets.

{% data variables.contact.partner_support %} is available to select partners. To enroll, contact your Partner Development Manager.

> [!NOTE]
>
> * The terms of {% data variables.contact.partner_support %} ("Terms") are subject to change without notice and are effective as of November 16, 2026.
> * When you use {% data variables.contact.partner_support %}, the following terms apply: these Terms, the [{% data variables.product.github %} Services and Channel Partner Program Terms](https://portal.github.partners/content/8a998df998a11e510198a4c8f6113700), the [{% data variables.product.github %} Services and Channel Partner Program Guide](https://portal.github.partners/content/8a99930f9858994901985cbe948468b6), and the terms of your Agreement (together, the "{% data variables.contact.partner_support %} Agreement"). By Agreement, we mean your main partner agreement with {% data variables.product.github %} or Microsoft, for example, the {% data variables.product.github %} Reseller and Distribution Terms.

## What's included with {% data variables.contact.partner_support %}

The offering includes up to 50 customer support tickets using the Partner Support SLA per partner per subscription year, shared across the partner's customers. The subscription year starts on the date the partner purchases the offering. Tickets for the partner's own enterprise and customer tickets submitted with standard enterprise support do not count toward this allowance. See [Service level agreement response times](#service-level-agreement-response-times) for the initial response targets.

The support request form shows your remaining ticket balance. Once the allowance is used up, you can still open customer tickets with standard enterprise support, but the Partner Support SLA does not apply.

{% data variables.product.github %} partners can purchase {% data variables.contact.partner_support %}, which provides:

* Written support, in English, through our support portal 24 hours per day, 7 days per week
* Phone support via callback request, in English, through our support portal 24 hours per day, 7 days per week (when required to scope the issue)
* Screen share request for critical issues
* A Service Level Agreement (SLA) with guaranteed initial response times
* Escalation management for High and Urgent priority tickets

Support Engineers have direct access to escalation engineering resources, if needed to expedite case resolution.

## Scope of support

{% data variables.contact.github_support %} can help with issues related to {% data variables.product.github %}'s core features and functionality. For requests outside the scope of support, we may recommend other ways to resolve the issue.

For migrations, we support only {% data variables.product.github %}-provided and documented tools. These include {% data variables.product.prodname_importer_proper_name %} for migrations to {% data variables.product.prodname_ghe_cloud %} and `ghe-migrator` for migrations to {% data variables.product.prodname_ghe_server %}. {% data variables.contact.github_support %} can clarify documented tool behavior, but does not validate migration plans or assess overall migration readiness.

The following are outside the scope of support:

* Migration planning, including repository inventories, sizing analysis, scoping, and prioritization
* Git-only migrations, custom migration scripts, community migration tools, and third-party migration tools, which partners or customers must manage
* CSP (Cloud Solution Provider) and CSP billing-related tickets are out of scope for this offering and would need to go through the existing CSP route
* Third party integrations, e.g. Jira
* Third-party continuous integration and continuous delivery tools, such as Jenkins
* Azure DevOps (please contact Azure Support)
* Writing scripts
* Configuration of external authentication systems, e.g. SAML identity providers
* Open source projects
* Writing or debugging new queries for {% data variables.product.prodname_codeql %}
* Cloud provider configurations, e.g. virtual network setup, custom firewall, or proxy rules
* Container orchestration, e.g. Kubernetes setup, or networking
* Detailed assistance with workflows and data management
* Comprehensive support for customization and tool installation on {% data variables.product.prodname_actions %} custom images
* Preview features. Public preview, private preview, and technical preview features are out of {% data variables.contact.github_support %}'s scope. Refer to [{% data variables.product.github %}'s Sales team](https://github.com/enterprise/contact).
* {% data variables.product.prodname_copilot %} suggestions and outputs. For more information, see [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and [AUTOTITLE](/enterprise-cloud@latest/copilot/get-started/best-practices).

For consulting, workshops, or training, partners with an active {% data variables.contact.partner_support %} subscription can purchase the {% data variables.product.github %} Partner Success add-on. It provides 80 consulting hours per year with [{% data variables.product.github %} Expert Services](https://github.com/services/), prorated for partial subscription terms. Partners can use these hours for services within the program's defined scope. For more information, see [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-partner-success-offering-terms).

If it's unclear whether the issue is out of scope, partners can open a ticket and {% data variables.contact.github_support %} will help determine the best way to proceed.

## Setting up your {% data variables.product.github %} Partner account

You must designate your global {% data variables.product.prodname_ghe_cloud %} enterprise account on {% data variables.product.prodname_dotcom_the_website %} as your partner enterprise. Use this account to grant support entitlements to your engineers. You cannot use a Data Residency tenant or a {% data variables.product.prodname_ghe_server %} instance as your partner enterprise.

Before opening tickets on behalf of a customer:

1. Make sure each team member who needs to open tickets has a support entitlement in your own partner enterprise.
1. Ask an enterprise owner at the customer's enterprise to approve your partner in their enterprise settings under **Support**. Only a customer enterprise owner can approve or remove a partner.

   * For customers with data residency, the owner manages approval on their {% data variables.enterprise.data_residency_site %} tenant.
   * For {% data variables.product.prodname_ghe_server %} customers, the owner manages approval through their existing global enterprise account on {% data variables.product.prodname_dotcom_the_website %}, not on the Server instance.

Partner users do not need membership or individual support entitlements in the customer's enterprise. Customer approval of the partner works across tenants. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

## Ticket complexity ownership

The following ticket complexities define the type of ticket handling and ownership between partners and {% data variables.contact.github_support %}:

| Ownership | Complexity | Key examples |
| ----- | :---- | :---- |
| **Partner.** Expected to handle all of these tickets for their customers. | Scenarios that can be resolved using public documentation. | Explaining product functionality with documentation. Using and configuring {% data variables.product.github %} to resolve customer issues or errors. |
| **{% data variables.product.github %}.** Work with partners to assist investigation. | Errors and problems requiring system troubleshooting assistance not resolvable using documentation. | Errors, problems; plus API rate-limits, Actions workflow issues, migration to {% data variables.product.github %}. Server failure, organization-wide lockout, security exposure. |

## Ticket priority

For customer tickets using the Partner Support SLA, you answer questions about the issue's impact. {% data variables.contact.github_support %} uses that information to determine the ticket's priority. For more information, see [AUTOTITLE](/support/learning-about-github-support/about-ticket-priority).

| Priority | Example impact |
| :---- | :---- |
| Low | Minor issues, limited impact |
| Normal | Typical issues, moderate impact |
| High | Significant issues blocking activity for critical customers |
| Urgent | Severe outages or critical customer impact, needs immediate attention |

## Service level agreement response times

The following initial response times apply to customer tickets using the Partner Support SLA and depend on the ticket's priority. The response time commences once {% data variables.contact.github_support %} defines the ticket priority. Tickets submitted with standard enterprise support do not receive the Partner Support SLA.

| Priority | Initial response time |
| :---- | :---- |
| Urgent | 1 hour |
| High | 4 hours |
| Normal | 48 hours |
| Low | 48 hours |

## Contacting {% data variables.contact.github_support %}

To submit a support ticket on behalf of a customer:

1. Complete the steps in [Setting up your {% data variables.product.github %} Partner account](#setting-up-your-github-partner-account).
1. Go to the {% data variables.contact.contact_landing_page_portal %} and click **Sign in with {% data variables.product.github %}**. Sign in with the {% data variables.product.prodname_dotcom_the_website %} account you use for your partner enterprise, including when submitting a ticket for a customer with data residency. See [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).
1. At the top of the page, under "How can we help?", choose a topic or click **Open a support ticket**.
1. In the **Your Account** field, select your own partner enterprise. This account validates your support entitlement and confirms you are an authorized partner.
1. Under "For Support Partners", in **Who is this ticket for?**, select **A customer enterprise**.
1. In the **Customer Enterprise** field, select the customer's enterprise. You will only see enterprises where an enterprise owner has approved your partner.
1. Fill in the ticket details. See [Information to include in your ticket](#information-to-include-in-your-ticket).
1. Review the remaining ticket balance shown with the support options. Choose **Yes, apply {% data variables.contact.partner_support %} SLA** to use a ticket from your allowance, or **No, use standard enterprise support - no SLA**. If you apply the Partner Support SLA, answer the questions about the issue's impact.
1. Click **Send request**. Track updates in **My tickets**.

## Information to include in your ticket

{% data variables.contact.github_support %} does not have access to private or internal {% data variables.product.github %} resources. Include the information needed to understand, locate, and reproduce the issue to help reduce back-and-forth.

### General requirements

In each ticket, include:

* The affected enterprise, organization, or repository, including URLs and relevant usernames
* A description of the issue, expected results, and exact error messages
* Steps to reproduce the issue, if applicable
* When the issue began, including the time zone
* The impact on your customer's work and the number of affected users or repositories

Before sharing logs, screenshots, HAR files, or other diagnostics, review them for credentials and unrelated sensitive customer information. Redact that information before attaching the files. Do not include passwords, private keys, or full access tokens.

The following subsections list additional requirements for your issue and deployment.

### {% data variables.product.prodname_github_connect %}

For issues with {% data variables.product.prodname_github_connect %} or its related features, include:

* The name of the {% data variables.product.prodname_dotcom_the_website %} enterprise connected to your on-premises {% data variables.product.prodname_ghe_server %} instance
* The exact error message when enabling {% data variables.product.prodname_github_connect %}
* Output from `ghe-license info` and `chronyc sources -v` (to check NTP synchronization) on the {% data variables.product.prodname_ghe_server %} instance
* A support bundle from the {% data variables.product.prodname_ghe_server %} instance, which includes the information above
* Details of the affected feature, if the issue is with a specific {% data variables.product.prodname_github_connect %} feature
* Output from these commands:

  ```shell
  curl -Iv https://github.com
  curl -Iv https://api.github.com
  curl -Iv https://uploads.github.com
  ```

For more information, see [AUTOTITLE](/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/about-github-connect).

### {% data variables.product.prodname_ghe_cloud %} and standalone {% data variables.product.prodname_copilot %}

These requirements apply to {% data variables.product.prodname_ghe_cloud %} with or without {% data variables.product.prodname_emus %}, including enterprises with data residency, and standalone {% data variables.product.prodname_copilot %}.

You need a support entitlement in your own partner enterprise, and an enterprise owner must approve your partner in the customer's enterprise. You do not need to be a member of the customer's enterprise.

Include the following information for the affected feature:

| Feature | Details | Required information |
| ----- | ----- | ----- |
| Log requests | (GHEC only) **For security incidents** (e.g. compromised {% data variables.product.pat_generic_plural %} (PATs), OAuth tokens, SSH keys, or accidental repository exposure) **or requests for audit logs.** | Provide:<ul><li>Add an organization owner to the ticket, as their consent is needed to share log events.<ul><li>For logs related to PAT activity, consent must come from the owner of the affected token.</li><li>For logs related to a specific repository, consent should come from either the repository administrator or the organization owner.</li></ul></li></ul>**Note:** Audit logs are self-service and can be retrieved by customers directly. |
| Audit log streaming | [Audit log streaming functionality](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) | Provide: <ul><li>The enterprise name/URL where it's configured.</li></ul> |
| Enterprise account administration | Administration of enterprise accounts | Provide: <ul><li>The enterprise name/URL.</li><li>A full browser screenshot of the configuration.</li></ul> |
| Organization and team administration | Administration of orgs and teams | Provide: <ul><li>The enterprise name/URL.</li><li>A full browser screenshot of the configuration.</li></ul> |
| IP allow list | [AUTOTITLE](/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) | Provide:<ul><li>The partner should add an enterprise or organization owner to the ticket.<ul><li>{% data variables.contact.github_support %} requires consent from the owner to disable IP Allow List and restore access.</li><li>If there are multiple owners, at least two should be included in the ticket, and consent is required from both.</li><li>Consent must come from the {% data variables.product.github %}-verified email addresses of the owners.</li></ul></li></ul> |
| SCIM | Org-level SCIM for non-EMU; Enterprise-level SCIM and team synchronization for EMU & Proxima | Provide:<ul><li>**Team synchronization issues** (e.g., a user not syncing with a team, or team sync itself isn't working):<ul><li>The slug of the organization or enterprise where team sync is enabled.</li><li>The name of the team mapped to the IdP group.</li><li>The {% data variables.product.github %} login name of the affected user(s).</li><li>A screenshot showing the user's presence in the mapped IdP group (from Entra or Okta).</li></ul></li></ul> |
| GHEC DR (Proxima) | For any issues related to data residency tenants | Provide:<ul><li>The customer's tenant (e.g., `xxxxx.ghe.com`).</li><li>At least one enterprise owner should be included in the support ticket, along with a clear and concise description (and screenshot) of the issue.</li></ul> |
| API (v3:REST) & API (v4:GraphQL) | Generic API endpoint/rate-limit issues | Provide:<ul><li>**For API rate limit issues:**<ul><li>Details on how the API call is made, including the affected user or app and the type of token used. Do not include the full token.</li><li>The `request_id` for the rate-limited call</li><li>The endpoint being called.</li><li>Verbose output</li></ul></li><li>**For general API endpoint issues, also include:**<ul><li>Information about the user or app making the request, plus the last 8 characters of the token</li><li>A screenshot of the error or the `request_id`</li></ul></li></ul> |
| {% data variables.product.github %} Applications (Apps and OAuth) | Issues with apps | Provide: <ul><li>App ID/installation ID of the impacted app.</li><li>The `request_id`</li><li>**For failing API calls:**<ul><li>The API query and its full output, with token information redacted.</li></ul></li></ul> |
| Webhooks | Webhook configuration and delivery | Provide:<ul><li>Repository or organization URL where the webhook is configured.</li><li>The webhook URL and triggered event types.</li><li>Details of the issue (e.g., delivery failures, missing events, unexpected payloads).</li><li>Error messages or HTTP response codes.</li><li>Timestamps of affected webhook deliveries.</li><li>The `delivery_id` or request ID from webhook logs (if available).</li><li>Any recent changes to the webhook or related infrastructure.</li><li>Screenshots of the webhook configuration and any errors.</li></ul> |
| Migrations | [AUTOTITLE](/enterprise-cloud@latest/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer) | Provide:<ul><li>Migration logs</li><li>Source repository details (Vendor/repository size via [git-sizer output](https://github.com/github/git-sizer))</li></ul> |
| {% data variables.product.prodname_copilot %} | {% data variables.product.prodname_copilot %} functionality issues with the IDE. | Provide:<ul><li>Respective [debug](/enterprise-cloud@latest/copilot/how-tos/troubleshoot-copilot/view-logs#enabling-debug-mode-1) and [network](/enterprise-cloud@latest/copilot/how-tos/troubleshoot-copilot/view-logs#viewing-network-connectivity-diagnostics-logs-1) diagnostic logs.</li><li>Error details/screenshots.</li></ul> |
| Pull requests timeout | Angry Unicorn or 500 error accessing pull requests or repository components. | Self-help:<ul><li>Try in an incognito/private browsing window, or in another browser.</li></ul>Provide:<ul><li>Organization/repository details.</li><li>Reproduce the issue and capture a [HAR file](https://toolbox.googleapps.com/apps/har_analyzer/) from the web browser's developer console.</li></ul> |
| Client connectivity | Issue performing git operations from the local terminal to the remote {% data variables.product.github %}. (example: git push/clone failures) | Provide:<ul><li>All output from https://github-debug.com</li><li>If using Git over HTTPS:<ul><li>`GIT_TRACE=1 GIT_CURL_VERBOSE=1 <git command>`</li></ul></li><li>If you're using Git over SSH:<ul><li>`GIT_TRACE_PACKET=1 GIT_TRACE=1 GIT_TRACE_PERFORMANCE=1 GIT_SSH_COMMAND="ssh -vvv" <git command>`</li></ul></li></ul> |
| {% data variables.product.prodname_copilot %} models unavailable | User complaining about AI models unavailability after the {% data variables.product.prodname_copilot %} seat assignment | Self-help:<ul><li>Ensure [policies](/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies) are configured appropriately.</li></ul>Provide:<ul><li>Screenshot of the user's IDE/UI.</li></ul> |
| Sensitive data removal | Removing sensitive data from a repository | Self-help:<ul><li>Ensure the end user has rewritten and pushed the cleaned history as described in [AUTOTITLE](/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) before reaching out to {% data variables.contact.github_support %}.</li><li>Remove references to the sensitive commit from branches, tags, and forks. Ask {% data variables.contact.github_support %} to remove the remaining pull request references and cached views.</li></ul> |

#### Authentication

Authentication issues include SAML, OIDC, and conditional access policies for {% data variables.product.prodname_emus %} using Entra.

For SAML lockout cases, such as SAML certificates with no recovery codes, add an enterprise or organization owner to the ticket, depending on where SAML SSO is configured:

* {% data variables.contact.github_support %} requires consent from the owner to disable SAML SSO and restore access.
* If there are multiple owners, include at least two in the ticket. Consent is required from both.
* Consent must come from the owners' {% data variables.product.github %}-verified email addresses.

#### {% data variables.product.prodname_actions %} workflow runs

For workflow failures and self-hosted runner issues, first capture the unexpected behavior:

1. Enable debug logging. See [AUTOTITLE](/enterprise-server@latest/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).
1. Run the workflow to reproduce the issue.

Include these details and attachments in your ticket:

* The URL of the workflow run with debug logging enabled, for example: `https://github.com/ORG/REPO/actions/runs/0123456789`
* Copies of the complete workflow `.yml` files as attachments. You may need to change the extension to `.txt` to attach them. See [AUTOTITLE](/actions/using-workflows/about-workflows#about-workflows).
* Workflow run logs for an example failure with debug logging enabled, attached to the ticket. See [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#downloading-logs).
* For self-hosted runners, logs from the runner's `_diag` folder as attachments. The filenames use the formats `Runner_YYYY####-xxxxxx-utc.log` and `Worker_YYYY####-xxxxxx-utc.log`. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#reviewing-the-self-hosted-runner-application-log-files).
* If you use Actions Runner Controller (ARC), logs for the controller and runner set listeners. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/troubleshooting-actions-runner-controller-errors#checking-the-logs-of-the-controller-and-runner-set-listener).

#### {% data variables.product.prodname_codeql %} results and code scanning alerts

For unexpected analysis results or alert states, include:

* A sample CWE and the query name you are testing. See [{% data variables.product.prodname_codeql %}'s CWE coverage page](https://codeql.github.com/codeql-query-help/codeql-cwe-coverage/).
* The languages and frameworks you are using. See [{% data variables.product.prodname_codeql %}'s list of supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks/#frameworks-and-libraries).
* The SARIF file demonstrating the unexpected alert state.

If you run {% data variables.product.prodname_codeql %} through {% data variables.product.prodname_actions %}, enable debugging artifacts and attach them to your ticket as a `.zip` file. See [AUTOTITLE](/enterprise-cloud@latest/code-security/code-scanning/troubleshooting-code-scanning/logs-are-not-detailed-enough#creating-codeql-debugging-artifacts).

If you run {% data variables.product.prodname_codeql %} with the CLI, retrieve the SARIF file from the database analyze command output.

### {% data variables.product.prodname_ghe_server %}

Include the following information about the customer's instance:

* A support bundle or diagnostic report from the customer's on-premises {% data variables.product.prodname_ghe_server %} instance
* Relevant screenshots or recordings
* For issues related to high availability replication, provide the output of `ghe-repl-status` from the problematic replica {% data variables.product.prodname_ghe_server %} instance.
* Confirmation of any changes to the appliance, such as version upgrades, network modifications, or other configuration updates that could affect functionality
* For licensing questions, provide the output of `ghe-license info` so we can identify the license or subscription linked to the customer's instance.

## Resolving and closing support tickets

{% data variables.contact.github_support %} may consider a ticket solved after providing an explanation, recommendation, usage instructions, workaround instructions, or by advising you of an available {% data variables.product.prodname_ghe_server %} release that addresses the issue.

If you use a custom or unsupported plug-in, module, or custom code, {% data variables.contact.github_support %} may ask you to remove the unsupported plug-in, module, or code while attempting to resolve the issue. If the problem is fixed when the unsupported plug-in, module, or custom code is removed, {% data variables.contact.github_support %} may consider the ticket solved.

{% data variables.contact.github_support %} may close a ticket if the ticket is outside the scope of support or if multiple attempts to contact you have gone unanswered.

## Callback requests

Callback requests should only be used when a live discussion is essential to scope the issue.

When requested, the assigned Support Engineer will determine whether a phone call or Zoom/Teams meeting with screen sharing is the most efficient way to move the ticket forward.

Callback requests are not tied to SLAs. A Support Engineer or representative will respond as soon as possible based on ticket priority and availability.

Our live support calls focus on gathering essential information and aligning expectations. Once these goals are met, our Support Engineers end the call to focus on resolving your issue as quickly as possible.

## Termination

Your {% data variables.contact.partner_support %} Agreement will automatically end if your membership in the {% data variables.product.github %} Services and Channel Partner Program is terminated. Please note that fees paid for {% data variables.contact.partner_support %} are non-refundable if you terminate your membership without cause, or if {% data variables.product.github %} terminates your membership for cause.
