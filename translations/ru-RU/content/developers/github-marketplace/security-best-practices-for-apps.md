---
title: Security best practices for apps
intro: 'Guidelines for preparing a secure app to share on {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
shortTitle: Security best practice
versions:
  free-pro-team: '*'
topics:
  - рынок
---

If you follow these best practices it will help you to provide a secure user experience.

### Authorization, authentication, and access control

We recommend creating a GitHub App rather than an OAuth App. {% data reusables.marketplace.github_apps_preferred %}. See "[Differences between GitHub Apps and OAuth Apps](/apps/differences-between-apps/)" for more details.
- Apps should use the principle of least privilege and should only request the OAuth scopes and GitHub App permissions that the app needs to perform its intended functionality. For more information, see [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) in Wikipedia.
- Apps should provide customers with a way to delete their account, without having to email or call a support person.
- Apps should not share tokens between different implementations of the app. For example, a desktop app should have a separate token from a web-based app. Individual tokens allow each app to request the access needed for GitHub resources separately.
- Design your app with different user roles, depending on the functionality needed by each type of user. For example, a standard user should not have access to admin functionality, and billing managers might not need push access to repository code.
- Apps should not share service accounts such as email or database services to manage your SaaS service.
- All services used in your app should have unique login and password credentials.
- Admin privilege access to the production hosting infrastructure should only be given to engineers and employees with administrative duties.
- Apps should not use personal access tokens to authenticate and should authenticate as an [OAuth App](/apps/about-apps/#about-oauth-apps) or a [GitHub App](/apps/about-apps/#about-github-apps):
  - OAuth Apps should authenticate using an [OAuth token](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - GitHub Apps should authenticate using either a [JSON Web Token (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/), or [installation access token](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

### Data protection

- Apps should encrypt data transferred over the public internet using HTTPS, with a valid TLS certificate, or SSH for Git.
- Apps should store client ID and client secret keys securely. We recommend storing them as [environmental variables](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Apps should delete all GitHub user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with GitHub.
- Apps should not require the user to provide their GitHub password.
- Apps should encrypt tokens, client IDs, and client secrets.

### Logging and monitoring

Apps should have logging and monitoring capabilities. App logs should be retained for at least 30 days and archived for at least one year. A security log should include:

- Authentication and authorization events
- Service configuration changes
- Object reads and writes
- All user and group permission changes
- Elevation of role to admin
- Consistent timestamping for each event
- Source users, IP addresses, and/or hostnames for all logged actions

### Incident response workflow

To provide a secure experience for users, you should have a clear incident response plan in place before listing your app. We recommend having a security and operations incident response team in your company rather than using a third-party vendor. You should have the capability to notify {% data variables.product.product_name %} within 24 hours of a confirmed incident.

For an example of an incident response workflow, see the "Data Breach Response Policy" on the [SANS Institute website](https://www.sans.org/information-security-policy/). A short document with clear steps to take in the event of an incident is more valuable than a lengthy policy template.

### Vulnerability management and patching workflow

You should conduct regular vulnerability scans of production infrastructure. You should triage the results of vulnerability scans and define a period of time in which you agree to remediate the vulnerability.

If you are not ready to set up a full vulnerability management program, it's useful to start by creating a patching process. For guidance in creating a patch management policy, see this TechRepublic article "[Establish a patch management policy](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)."
