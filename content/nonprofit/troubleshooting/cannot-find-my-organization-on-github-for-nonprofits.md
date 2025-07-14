---
title: Cannot find my organization on GitHub for Nonprofits
intro: What to do if your organization does not appear?
versions:
  fpt: '*'
shortTitle: Cannot find my organization on GitHub for Nonprofits portal
---

If you cannot find your organization in the GitHub for Nonprofits portal, ensure that you are logged into GitHub for Nonprofits with an organization rather than an individual account. If you are running into trouble validating your organization as a nonprofit, please try the following steps.

## OAuth apps authorization

Revoke the OAuth apps authorization from GitHub.

1. In the upper-right corner of any page on GitHub, click your profile picture, then click **Settings**.
1. In the "Integrations" section of the sidebar, click **Applications**.
1. Click the "Authorized OAuth Apps" tab.
1. Review the tokens that have access to your account. Select the tokens that you don't recognize or that are out-of-date. Then click **Revoke**. To revoke all tokens, click **Revoke all**.
1. Open a new page and log into the GitHub for Nonprofits portal.
1. Reauthorize and grant access to GitHub and the organization you would like to be approved.
1. Return to GitHub for Nonprofits and refresh the page to select your organization.

## Further troubleshooting for OAuth access restrictions

If this does not resolve the problem, please try disabling OAuth app access restrictions for your organization.

1. In the upper-right corner of GitHub, click your profile picture, then click **Your organizations**.
1. Next to the organization, click **Settings**.
1. In the "Third-party Access" section of the sidebar, click **OAuth app policy**.
1. Click **Remove restrictions**.
1. After you review the information about disabling third-party application restrictions, click **Yes, remove application restrictions**.
1. Return to GitHub for Nonprofits and refresh the page to select your organization.
