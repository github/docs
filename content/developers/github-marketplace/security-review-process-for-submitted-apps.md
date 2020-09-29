---
title: Security review process for submitted apps
intro: 'GitHub''s security team reviews all apps submitted to {% data variables.product.prodname_marketplace %} to ensure that they meet security requirements. Follow these best practices to be prepared for the review process.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
versions:
  free-pro-team: '*'
---



After you've submitted your app for approval, the GitHub security team will request that you complete a security questionnaire about your app and overall security program. As part of the review, you will have the option to provide documentation to support your responses. You must submit two required documents before your app will be approved for {% data variables.product.prodname_marketplace %}: an [incident response plan](#incident-response-plan) and [vulnerability management workflow](#vulnerability-management-workflow).


### Security best practices

Follow these best practices to have a successful security review and provide a secure user experience.

#### Authorization, authentication, and access control

We recommend submitting a GitHub App rather than an OAuth App. {% data reusables.marketplace.github_apps_preferred %}. See "[Differences between GitHub Apps and OAuth Apps](/apps/differences-between-apps/)" for more details.
- Apps must use the "[principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)" and should only request the OAuth scopes and GitHub App permissions that the app needs to perform its intended functionality.
- Apps must provide customers with a way to delete their account, without having to email or call a support person.
- Apps should not share tokens between different implementations of the app. For example, a desktop app should have a separate token from a web-based app. Individual tokens allow each app to request the access needed for GitHub resources separately.
- Design your app with different user roles, depending on the functionality needed by each type of user. For example, a standard user should not have access to admin functionality, and billing managers might not need push access to repository code.
- Your app should not share service accounts such as email or database services to manage your SaaS service.
- All services used in your app should have unique login and password credentials.
- Admin privilege access to the production hosting infrastructure should only be given to engineers and employees with administrative duties.
- Apps cannot use personal access tokens to authenticate and must authenticate as an [OAuth App](/apps/about-apps/#about-oauth-apps) or [GitHub App](/apps/about-apps/#about-github-apps):
  - OAuth Apps must authenticate using an [OAuth token](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - GitHub Apps must authenticate using either a [JSON Web Token (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/), or [installation access token](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

#### Data protection

- Apps must encrypt data transferred over the public internet using HTTPS, with a valid TLS certificate, or SSH for Git.
- Apps must store client ID and client secret keys securely. We recommend storing them as [environmental variables](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Apps must delete all GitHub user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with GitHub.
- Apps cannot require the user to provide their GitHub password.
- Apps should encrypt tokens, client IDs, and client secrets.

#### Logging and monitoring

- Apps must have logging and monitoring capabilities. App logs must be retained for at least 30 days and archived for at least one year.
A security log should include:
  - Authentication and authorization events
  - Service configuration changes
  - Object reads and writes
  - All user and group permission changes
  - Elevation of role to admin
  - Consistent timestamping for each event
  - Source users, IP addresses, and/or hostnames for all logged actions

#### Incident response workflow

- To partner with GitHub, you are required to have an [incident response plan](#incident-response-plan) in place before submitting your {% data variables.product.prodname_marketplace %} app listing.
- We recommend having a security and operations incident response team in your company rather than using a third-party vendor.
- You should have the capability to notify GitHub within 24 hours of a confirmed incident.
- You should familiarize yourself with sections 3.7.5 - 3.7.5.6 of the [{% data variables.product.prodname_marketplace %} Developer Agreement](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), which include additional details on incident response workflow requirements.

#### Vulnerability management and patching workflow

- You should conduct regular vulnerability scans of production infrastructure.
- You should triage the results of vulnerability scans and define a period of time in which you agree to remediate the vulnerability.
- You should familiarize yourself with section 3.7.3 of the [{% data variables.product.prodname_marketplace %} Developer Agreement](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities), which includes additional details on vulnerability management and patching workflows requirements.

### Security program documentation

During the Marketplace security review, you will be asked to submit your incident response plan and vulnerability management workflow. Each document must include a company-branded statement signed by management with a date stamp.

#### Incident response plan
Your incident response plan documentation must include the current process that your company follows, who is accountable, and the person to contact or expect contact from if an incident occurs. The "[NIST Computer Security Incident Handling Guide](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)" is a great example of a document that covers incident response in general. Section 2.3 "Incident Response Policy, Plan, and Procedure Creation" specifically covers the policy. Another great example is the "[SANS Data Breach Response Policy](https://www.sans.org/security-resources/policies/general/pdf/data-breach-response)."

#### Vulnerability management workflow  
Your vulnerability management workflow documentation must include the current process that your company follows for vulnerability management and the patching process used. If you don't have a full vulnerability management program, it might help to start by creating a patching process. For guidance in creating a patch management policy, read the article "[Establish a patch management policy](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)."

{% note %}

**Note:** The incident response and vulnerability management workflow documents aren't expected to be massive formal policy or program documents. A page or two about what you do is more valuable than a lengthy policy template.

{% endnote %}

#### GitHub Marketplace security program questionnaire

During the app submission process, our {% data variables.product.prodname_marketplace %} onboarding team will also send you a questionnaire requesting information about your security practices. This document will serve as a written record attesting:

- The authentication method and scopes required by your app.
- That you're not requesting more scopes or {% data variables.product.product_name %} access than is needed for the app to perform its intended functionality, taking OAuth limitations and use of {% data variables.product.prodname_github_app %}s into account.
- The use of any third-party services or infrastructure, such as SaaS, PaaS, or IaaS.
- An incident response procedure exists.
- Your app's method of key/token handling.
- That a responsible disclosure policy and process in place or plans to implement one within six months.
- Your vulnerability management workflow or program.
- That you have logging and monitoring capabilities. You must also provide evidence that any relevant app logs are retained for at least 30 days and archived for at least one year.
