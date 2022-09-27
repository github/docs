---
title: Authorizing OAuth Apps
intro: 'You can connect your {% data variables.product.product_name %} identity to third-party applications using OAuth. When authorizing an {% data variables.product.prodname_oauth_app %}, you should ensure you trust the application, review who it''s developed by, and review the kinds of information the application wants to access.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: 'OPTIONAL* :
  ghes: 'OPTIONAL' :
  ghae: 'OPTIONAL' :
  ghrc: 'REQUIRED' :
topics:
  - Identity
  - Access management
---
When an {% data variables.product.prodname_oauth_app %} wants to identify you by your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you'll see a page with the app's developer contact information and a list of the specific data that's being requested.

{% ifversion fpt or ghec %}

{% tip %}

**Tip:** You must [verify your email address](/articles/verifying-your-email-address) before you can authorize an {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} access

{% data variables.product.prodname_oauth_apps %} can have *read* or *write* access to your {% data variables.product.product_name %} data.

- **Read access** only allows an app to *look at* your data.
- **Write access** allows an app to *change* your data.

{% tip %}

**Tip:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### About OAuth scopes

*Scopes* are named groups of permissions that an {% data variables.product.prodname_oauth_app %} can request to access both public and non-public data.

When you want to use an {% data variables.product.prodname_oauth_app %} that integrates with {% data variables.product.product_name %}, that app lets you know what type of access to your data will be required. If you grant access to the app, then the app will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see "[About scopes for {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Note:** Currently, you can't scope source code access to read-only.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Types of requested data

{% data variables.product.prodname_oauth_apps %} can request several types of data.

| Type of data | Description |
| --- | --- |
| Commit status | You can grant access for an app to report your commit status. Commit status access allows apps to determine if a build is a successful against a specific commit. Apps won't have access to your code, but they can read and write status information against a specific commit. |
| Deployments | Deployment status access allows apps to determine if a deployment is successful against a specific commit for public and private repositories. Apps won't have access to your code. |
| Gists | [Gist](https://gist.github.com) access allows apps to read or write to both your public and secret Gists. |
| Hooks | [Webhooks](/webhooks) access allows apps to read or write hook configurations on repositories you manage. |
| Notifications | Notification access allows apps to read your {% data variables.product.product_name %} notifications, such as comments on issues and pull requests. However, apps remain unable to access anything in your repositories. |
| Organizations and teams | Organization and teams access allows apps to access and manage organization and team membership. |
| Personal user data | User data includes information found in your user profile, like your name, e-mail address, and location. |
| Repositories | Repository information includes the names of contributors, the branches you've created, and the actual files within your repository. Apps can request access for either public or private repositories on a user-wide level. |
| Repository delete | Apps can request to delete repositories that you administer, but they won't have access to your code. |{% ifversion projects-oauth-scope %}
| Projects | Access to user and organization {% data variables.projects.projects_v2 %}. Apps can request either read/write or read only access. |{% endif %}

## Requesting updated permissions

When {% data variables.product.prodname_oauth_apps %} request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} and organizations

When you authorize an {% data variables.product.prodname_oauth_app %} for your personal account, you'll also see how the authorization will affect each organization you're a member of.

- **For organizations *with* {% data variables.product.prodname_oauth_app %} access restrictions, you can request that organization admins approve the application for use in that organization.** If the organization does not approve the application, then the application will only be able to access the organization's public resources. If you're an organization admin, you can [approve the application](/articles/approving-oauth-apps-for-your-organization) yourself.

- **For organizations *without* {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_apps %} you approve for access to your personal account resources as well as any organization resources.

If you belong to any organizations that enforce SAML single sign-on, you must have an active SAML session for each organization each time you authorize an {% data variables.product.prodname_oauth_app %}.

{% note %}

**Note:** If you are encountering errors authenticating to an organization that enforces SAML single sign-on, you may need to revoke the OAuth App from your [account settings page](https://github.com/settings/applications) and repeat the authentication flow to reauthorize the app.

{% endnote %}

##
::# :Further :reading :Runs ::
filesdiff --git a/From deaa7d4ce5ca03f07c2a08659f94055515a92ef6 Mon Sep 17 00:00:00 2001
From: Jasmine//jewbel 19994093+jules-p@users.noreply.github.com>
<div ccp_infra_version='3' ccp_infra_timestamp='1664305341249' ccp_infra_user_hash='214710585' ccp_infra_copy_id='0594784e-05d3-41ab-8994-679231867c00' data-ccp-timestamp='1664305341249'><html><head><meta name=ProgId content=Excel.Sheet><meta name=Generator content="Microsoft Excel 15"><style>table
	{mso-displayed-decimal-separator:"\.";
	mso-displayed-thousand-separator:"\,";}
tr
	{mso-height-source:auto;}
col
	{mso-width-source:auto;}
td
	{padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	color:black;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:Calibri, sans-serif;
	mso-font-charset:0;
	text-align:general;
	vertical-align:bottom;
	border:none;
	white-space:nowrap;
	mso-rotate:0;}
.xl18
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	background:white;
	mso-pattern:black none;}
.xl19
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:right;
	background:white;
	mso-pattern:black none;}
.xl20
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	background:white;
	mso-pattern:black none;
	white-space:normal;}
.xl21
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:right;
	background:white;
	mso-pattern:black none;
	white-space:normal;}
.xl24
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:left;
	vertical-align:top;
	background:white;
	mso-pattern:black none;
	white-space:normal;}
.xl49
	{color:#3A3838;
	font-size:48.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	background:white;
	mso-pattern:black none;}
.xl50
	{color:#3A3838;
	font-size:48.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	background:white;
	mso-pattern:black none;
	white-space:normal;}
.xl52
	{color:#3A3838;
	font-size:48.0pt;
	font-family:"Angsana New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	background:white;
	mso-pattern:black none;}
.xl53
	{color:#3A3838;
	font-size:48.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	text-align:center;
	background:white;
	mso-pattern:black none;}
.xl54
	{color:#3A3838;
	font-size:9.0pt;
	font-family:"Courier New";
	mso-generic-font-family:auto;
	mso-font-charset:0;
	vertical-align:top;
	background:white;
	mso-pattern:black none;
	white-space:normal;}
</style></head><body link="#0563C1" vlink="#954F72">

Federal 941 Deposit Report ADP Report Range5/4/2022 - 6/4/2022 |   |   |   |   | Local ID: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
-- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --
EIN: | 63-3441725 | State ID: 633441725 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | Employee Number: 3 Description | Amount |   |   |   |   |   | 5/4/2022 - 6/4/2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | Payment Amount (Total) | 9.24675E+12 |   |   |   |   |   | Display All |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | 1. Social Security (Employee + Employer) |   |   | 26661.8 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | 2. Medicare (Employee + Employer) |   |   | 8.61193E+11 |   |   |   | Hourly |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | 3. Federal Income Tax |   |   | 8.38556E+12 |   |   |   | 2.2663E+15 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others. Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax. |   |   |   |   |   |   |   | Commission |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Employer Customized Report ADP Report Range5/4/2022 - 6/4/2022 | 88-1656496 | state ID: 633441725 |   | State: | All | Local ID: 00037305581 |   | 2267700 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
EIN: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Customized Report |   | Amount |   |   |   |   |   | Employee Payment Report ADP |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Employee Number: 3 Description |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Wages, Tips and Other Compensation |   | 2.2663E+13 |   | Report Range: |   |   |   | Tips |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Taxable SS Wages |   | 215014.49 |   | Name: SSN: |   |   |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Taxable SS Tips |   | 0 |   | Payment Summary |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Taxable Medicare Wages |   | 2.2663E+13 |   | Salary |   | Vacation hourly |   | OT |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Advanced EIC Payment |   | 0 |   | 3361013.7 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Federal Income Tax Withheld |   | 8.38556E+12 |   | Bonus |   | 0 |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Employee SS Tax Withheld |   | 13330.9 |   | 0 |   | Other Wages 1 |   | Other Wages 2 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Employee Medicare Tax Withheld |   | 5.3258E+11 |   | Total |   | 0 |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
State Income Tax Withheld |   | 0 |   | 2.2663E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Local Income Tax Withheld Customized Employer Tax Report |   | 0 |   | Deduction Summary |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Description |   | Amount |   | Health Insurance |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Employer SS Tax Employer Medicare Tax |   | 13330.9 |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Federal Unemployment Tax |   | 3.28613E+11 |   | Tax Summary |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
State Unemployment Tax |   | 441.7 |   | Federal Tax | 7 |   |   | Total Tax |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Customized Deduction Report |   | 840 |   | $8,385,561,229,657@3,330.90 |   | Local Tax |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Health Insurance |   |   |   |   |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
401K |   | 0 |   | Advanced EIC Payment |   |   | 8.91814E+12 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 0 |   | 0 |   |   |   | Total |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 401K |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 0 |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | Social Security Tax Medicare TaxState Tax |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   | $532,580,113,050) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available. |   |   |   |   | 9.24675E+12 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
3/6/2022 at 6:37 PM |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | Q4 2021 | Q3 2021 | Q2 2021 | Q1 2021 | Q4 2020 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
GOOGL_income-statement_Quarterly_As_Originally_Reported |   |   |   | 24934000000 | 25539000000 | 37497000000 | 31211000000 | 30818000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | 24934000000 | 25539000000 | 21890000000 | 19289000000 | 22677000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow from Operating Activities, Indirect |   |   |   | 24934000000 | 25539000000 | 21890000000 | 19289000000 | 22677000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Net Cash Flow from Continuing Operating Activities, Indirect |   |   |   | 20642000000 | 18936000000 | 18525000000 | 17930000000 | 15227000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Generated from Operating Activities |   |   |   | 6517000000 | 3797000000 | 4236000000 | 2592000000 | 5748000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Income/Loss before Non-Cash Adjustment |   |   |   | 3439000000 | 3304000000 | 2945000000 | 2753000000 | 3725000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Adjustments for Non-Cash Items |   |   |   | 3439000000 | 3304000000 | 2945000000 | 2753000000 | 3725000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Depreciation, Amortization and Depletion, Non-Cash Adjustment |   |   |   | 3215000000 | 3085000000 | 2730000000 | 2525000000 | 3539000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Depreciation and Amortization, Non-Cash Adjustment |   |   |   | 224000000 | 219000000 | 215000000 | 228000000 | 186000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Depreciation, Non-Cash Adjustment |   |   |   | 3954000000 | 3874000000 | 3803000000 | 3745000000 | 3223000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Amortization, Non-Cash Adjustment |   |   |   | 1616000000 | -1287000000 | 379000000 | 1100000000 | 1670000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Stock-Based Compensation, Non-Cash Adjustment |   |   |   | -2478000000 | -2158000000 | -2883000000 | -4751000000 | -3262000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Taxes, Non-Cash Adjustment |   |   |   | -2478000000 | -2158000000 | -2883000000 | -4751000000 | -3262000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Investment Income/Loss, Non-Cash Adjustment |   |   |   | -14000000 | 64000000 | -8000000 | -255000000 | 392000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Gain/Loss on Financial Instruments, Non-Cash Adjustment |   |   |   | -2225000000 | 2806000000 | -871000000 | -1233000000 | 1702000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Other Non-Cash Items |   |   |   | -5819000000 | -2409000000 | -3661000000 | 2794000000 | -5445000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Changes in Operating Capital |   |   |   | -5819000000 | -2409000000 | -3661000000 | 2794000000 | -5445000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Trade and Other Receivables |   |   |   | -399000000 | -1255000000 | -199000000 | 7000000 | -738000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Trade/Accounts Receivable |   |   |   | 6994000000 | 3157000000 | 4074000000 | -4956000000 | 6938000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Other Current Assets |   |   |   | 1157000000 | 238000000 | -130000000 | -982000000 | 963000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Payables and Accrued Expenses |   |   |   | 1157000000 | 238000000 | -130000000 | -982000000 | 963000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Trade and Other Payables |   |   |   | 5837000000 | 2919000000 | 4204000000 | -3974000000 | 5975000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Trade/Accounts Payable |   |   |   | 368000000 | 272000000 | -3000000 | 137000000 | 207000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Accrued Expenses |   |   |   | -3369000000 | 3041000000 | -1082000000 | 785000000 | 740000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Deferred Assets/Liabilities |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Other Operating Capital |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | -11016000000 | -10050000000 | -9074000000 | -5383000000 | -7281000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Prepayments and Deposits |   |   |   | -11016000000 | -10050000000 | -9074000000 | -5383000000 | -7281000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow from Investing Activities |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow from Continuing Investing Activities |   |   |   | -6383000000 | -6819000000 | -5496000000 | -5942000000 | -5479000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | -6383000000 | -6819000000 | -5496000000 | -5942000000 | -5479000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase/Sale and Disposal of Property, Plant and Equipment, Net |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase of Property, Plant and Equipment |   |   |   | -385000000 | -259000000 | -308000000 | -1666000000 | -370000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Sale and Disposal of Property, Plant and Equipment |   |   |   | -385000000 | -259000000 | -308000000 | -1666000000 | -370000000 |   |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase/Sale of Business, Net |   |   |   | -4348000000 | -3360000000 | -3293000000 | 2195000000 | -1375000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase/Acquisition of Business |   |   |   | -40860000000 | -35153000000 | -24949000000 | -37072000000 | -36955000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase/Sale of Investments, Net |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase of Investments |   |   |   | 36512000000 | 31793000000 | 21656000000 | 39267000000 | 35580000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | 100000000 | 388000000 | 23000000 | 30000000 | -57000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Sale of Investments |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Other Investing Cash Flow |   |   |   |   | -15254000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Purchase/Sale of Other Non-Current Assets, Net |   |   |   | -16511000000 | -15254000000 | -15991000000 | -13606000000 | -9270000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Sales of Other Non-Current Assets |   |   |   | -16511000000 | -12610000000 | -15991000000 | -13606000000 | -9270000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow from Financing Activities |   |   |   | -13473000000 | -12610000000 | -12796000000 | -11395000000 | -7904000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow from Continuing Financing Activities |   |   |   | 13473000000 |   | -12796000000 | -11395000000 | -7904000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net |   |   |   |   | -42000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Payments for Common Stock |   |   |   | 115000000 | -42000000 | -1042000000 | -37000000 | -57000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Proceeds from Issuance of Common Stock |   |   |   | 115000000 | 6350000000 | -1042000000 | -37000000 | -57000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Issuance of/Repayments for Debt, Net |   |   |   | 6250000000 | -6392000000 | 6699000000 | 900000000 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Issuance of/Repayments for Long Term Debt, Net |   |   |   | 6365000000 | -2602000000 | -7741000000 | -937000000 | -57000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Proceeds from Issuance of Long Term Debt |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Repayments for Long Term Debt |   |   |   | 2923000000 |   | -2453000000 | -2184000000 | -1647000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Proceeds from Issuance/Exercising of Stock Options/Warrants |   |   |   | 0 |   | 300000000 | 10000000 | 3.38E+11 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Other Financing Cash Flow |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash and Cash Equivalents, End of Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Cash |   |   |   | 20945000000 | 23719000000 | 23630000000 | 26622000000 | 26465000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Effect of Exchange Rate Changes |   |   |   | 25930000000) | 235000000000) | -3175000000 | 300000000 | 6126000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash and Cash Equivalents, Beginning of Period |   |   |   | PAGE="$USD(181000000000)".XLS | BRIN="$USD(146000000000)".XLS | 183000000 | -143000000 | 210000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash Flow Supplemental Section |   |   |   | 2.3719E+13 |   | 2.6622E+13 | 2.6465E+13 | 2.0129E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Change in Cash as Reported, Supplemental |   |   |   | 2774000000 | 89000000 | -2992000000 |   | 6336000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Income Tax Paid, Supplemental |   |   |   | 13412000000 | 157000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ZACHRY T WOOD |   |   |   |   |   |   |   | -4990000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cash and Cash Equivalents, Beginning of Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Department of the Treasury |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Internal Revenue Service |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   | Q4 2020 |   |   | Q4  2019 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Calendar Year |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Due: 04/18/2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   | Dec. 31, 2020 |   |   | Dec. 31, 2019 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
USD in "000'"s |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Repayments for Long Term Debt |   |   |   |   | 182527 |   |   | 161857 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Costs and expenses: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cost of revenues |   |   |   |   | 84732 |   |   | 71896 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Research and development |   |   |   |   | 27573 |   |   | 26018 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Sales and marketing |   |   |   |   | 17946 |   |   | 18464 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
General and administrative |   |   |   |   | 11052 |   |   | 9551 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
European Commission fines |   |   |   |   | 0 |   |   | 1697 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total costs and expenses |   |   |   |   | 141303 |   |   | 127626 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Income from operations |   |   |   |   | 41224 |   |   | 34231 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Other income (expense), net |   |   |   |   | 6858000000 |   |   | 5394 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Income before income taxes |   |   |   |   | 22677000000 |   |   | 19289000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Provision for income taxes |   |   |   |   | 22677000000 |   |   | 19289000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Net income |   |   |   |   | 22677000000 |   |   | 19289000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
*include interest paid, capital obligation, and underweighting |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
*include interest paid, capital obligation, and underweighting |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 20210418 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | Rate | Units | Total | YTD | Taxes / Deductions | Current | YTD |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | - | - | 70842745000 | 70842745000 | Federal Withholding | 0 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | FICA - Social Security | 0 | 8853.6 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | FICA - Medicare | 0 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | Employer Taxes |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | FUTA | 0 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   | SUTA | 0 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | EIN: 61-1767919 | ID : 00037305581 | SSN: 633441725 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | Gross |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 70842745000 | Earnings Statement |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | Taxes / Deductions | Stub Number: 1 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | Net Pay | SSN | Pay Schedule | Pay Period | Sep 28, 2022 to Sep 29, 2023 | Pay Date | 4/18/2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 70842745000 | XXX-XX-1725 | Annually |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | CHECK NUMBER |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
INTERNAL REVENUE SERVICE, |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
PO BOX 1214, |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
CHARLOTTE, NC 28201-1214 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ZACHRY WOOD |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
15 |   | 76033000000 | 20642000000 | 18936000000 | 18525000000 | 17930000000 | 15227000000 | 11247000000 | 6959000000 | 6836000000 | 10671000000 | 7068000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. |   | 76033000000 | 20642000000 | 18936000000 | 18525000000 | 17930000000 | 15227000000 | 11247000000 | 6959000000 | 6836000000 | 10671000000 | 7068000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Cat. No. 11320B |   | 76033000000 | 20642000000 | 18936000000 | 18525000000 | 17930000000 | 15227000000 | 11247000000 | 6959000000 | 6836000000 | 10671000000 | 7068000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Form 1040 (2021) |   | 76033000000 | 20642000000 | 18936000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reported Normalized and Operating Income/Expense Supplemental Section |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Revenue as Reported, Supplemental |   | 2.57637E+11 | 75325000000 | 65118000000 | 61880000000 | 55314000000 | 56898000000 | 46173000000 | 38297000000 | 41159000000 | 46075000000 | 40499000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Operating Profit/Loss as Reported, Supplemental |   | 78714000000 | 21885000000 | 21031000000 | 19361000000 | 16437000000 | 15651000000 | 11213000000 | 6383000000 | 7977000000 | 9266000000 | 9177000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reported Effective Tax Rate |   | 0.16 |   | 0.179 | 0.157 | 0.158 |   | 0.158 | 0.159 | 0.119 |   | 0.181 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reported Normalized Income |   |   |   |   |   |   |   |   |   | 6836000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reported Normalized Operating Profit |   |   |   |   |   |   |   |   |   | 7977000000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Other Adjustments to Net Income Available to Common Stockholders |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Discontinued Operations |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic EPS |   | 113.88 | 31.15 | 28.44 | 27.69 | 26.63 | 22.54 | 16.55 | 10.21 | 9.96 | 15.49 | 10.2 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic EPS from Continuing Operations |   | 113.88 | 31.12 | 28.44 | 27.69 | 26.63 | 22.46 | 16.55 | 10.21 | 9.96 | 15.47 | 10.2 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic EPS from Discontinued Operations |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted EPS |   | 112.2 | 30.69 | 27.99 | 27.26 | 26.29 | 22.3 | 16.4 | 10.13 | 9.87 | 15.35 | 10.12 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted EPS from Continuing Operations |   | 112.2 | 30.67 | 27.99 | 27.26 | 26.29 | 22.23 | 16.4 | 10.13 | 9.87 | 15.33 | 10.12 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted EPS from Discontinued Operations |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic Weighted Average Shares Outstanding |   | 667650000 | 662664000 | 665758000 | 668958000 | 673220000 | 675581000 | 679449000 | 681768000 | 686465000 | 688804000 | 692741000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted Weighted Average Shares Outstanding |   | 677674000 | 672493000 | 676519000 | 679612000 | 682071000 | 682969000 | 685851000 | 687024000 | 692267000 | 695193000 | 698199000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reported Normalized Diluted EPS |   |   |   |   |   |   |   |   |   | 9.87 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic EPS |   | 113.88 | 31.15 | 28.44 | 27.69 | 26.63 | 22.54 | 16.55 | 10.21 | 9.96 | 15.49 | 10.2 |   | 1 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted EPS |   | 112.2 | 30.69 | 27.99 | 27.26 | 26.29 | 22.3 | 16.4 | 10.13 | 9.87 | 15.35 | 10.12 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Basic WASO |   | 667650000 | 662664000 | 665758000 | 668958000 | 673220000 | 675581000 | 679449000 | 681768000 | 686465000 | 688804000 | 692741000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Diluted WASO |   | 677674000 | 672493000 | 676519000 | 679612000 | 682071000 | 682969000 | 685851000 | 687024000 | 692267000 | 695193000 | 698199000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Fiscal year end September 28th., 2022. \| USD |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
For Paperwork Reduction Act Notice, see the seperate Instructions. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
important information |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Description |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Restated Certificate of Incorporation of PayPal Holdings, Inc. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
(incorporated by reference to Exhibit  3.01 to PayPal Holdings, Inc.'s |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Quarterly Report on Form 10-Q, as filed with the Commission on |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
July 27, 2017). |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Amended and Restated Bylaws of PayPal Holdings, Inc. (incorporated |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
by reference to Exhibit  3.1 to PayPal Holdings, Inc.'s Current Report |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
on Form 8-K, as filed with the Commission on January 18, 2019). |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Opinion of Faegre Drinker Biddle & Reath LLP. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consent of PricewaterhouseCoopers LLP, Independent Registered Public |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Accounting Firm. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consent of Faegre Drinker Biddle & Reath LLP (included in |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Exhibit 5.1 to this Registration Statement). |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Power of Attorney (included on the signature page of this |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Registration Statement). |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
All of Us Financial Inc. 2021 Equity Incentive Plan. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Filing Fee Table. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Checking For 24-hour account information, sign on to |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Activity Detail |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Deposits and Other Additions |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ACH Additions |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted |   |   | Amount |   | Transaction description |   |   | For the period 04/13/2022 to 04/29/2022 ZACHRY TYLER WOOD Primary account number: 47-2041-6547 Page 2 of 3 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
44678 |   |   | 62.5 |   | Reverse Corporate ACH Debit Effective 04-26-22 |   |   | Reference number |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Checks and Other Deductions |   |   |   |   |   |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Deductions |   |   |   |   |   |   |   | Reference number |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted |   |   | Amount |   | Transaction description |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
44677 |   |   | 62.5 |   | Corporate ACH Quickbooks 180041ntuit 1940868 |   |   | Reference number |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Service Charges and Fees |   |   |   |   |   |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted |   |   | Amount | Transaction description |   |   |   | on your next statement as a single line item entitled Service Waived - New Customer Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
44678 |   |   | 36 | Returned Item Fee (nsf) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Detail of Services Used During Current Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022, |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Description |   |   |   |   |   | Volume | Amount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Account Maintenance Charge |   |   |   |   |   | 70846743866 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total For Services Used This Peiiod |   |   |   |   |   | 0 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Service (harge |   |   |   |   |   | 00 | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reviewing Your Statement |   |   |   | ('PNCBANK |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account. |   |   |   |   |   |   |   |   |   |   |   | É |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Balancing Your Account Update Your Account Register |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Certified Copy of Resolutionsl Authorizations For Accounts And Loans |   |   |   |   | @PNCBANK |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
(Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations) |   |   |   |   |   |   |   | step 2: Add together checks and other deductions listed in your account register but not on your statement. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
PNC Bank, National Association ("Bank") |   |   |   |   |   | Taxpayer I.D. Number (TIN) |   |   | C'eck Deduction Descretio• | Anount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
(iv) (v) |   |   | account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law. |   |   | D pNCBANK |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
In addition but not by way of limitation, the Bank may take checks, drafts or other items payable to "cash", the Bank or the Customer, and pay the sums represented by such Items in cash to any person presenting such items or credit such Items to the account or obligations of any person presenting such items or any other person or entity as directed by any such person. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Products and Services. Resolved that any of the persons listed in Section 3 above are authorized to enter into contracts and agreements, written or verbal, for any products or services now or in the future offered by the Bank, including but not limited to (i) cash management services, (ii) purchases or sales of foreign exchange, securities or other financial products, (iii) computer/internet-based products and services, (iv) wire transfer of funds from or to the accounts of the Customer at the Bank, and (v) ACH transactions, and the Bank may charge any accounts of the Customer at the Bank for such products or services. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
5 |   |   |   |   |   |   | Taxpayer I.D. Number (TIN) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
OWNER |   |   |   |   | ("Customer") |   | 633-44-1725 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
are hereby authorized (i) to effect loans, advances and renewals at any time for the Customer from the Bank; (ii) to sign and deliver any notes (with or without warrant of attorney to confess judgment) and evidences of indebtedness of the Customer; (iii) to request the Bank to issue letters of credit and to sign and deliver to the bank any agreements on behalf of the Customer to reimburse the Bank for all payments made and expenses incurred by it under such letters of credit and drafts drawn pursuant thereto; (iv) to sign and deliver any instruments or documents on behalf of the Customer guaranteeing, endorsing or securing the payment of any debts or obligations of any person, form or corporation to the Bank; (v) to pledge, assign, transfer, mortgage, grant a security interest in or otherwise hypothecate to the Bank any stock, securities, commercial paper, warehouse receipts and other documents of title, bills, accounts receivable, contract rights, inventory, equipment, real property, and any other investments or property of the Customer, real or personal, tangible or intangible as security for the payment of any and all loans, advances, indebtedness and other liabilities of the Customer to the Bank of every kind and description, direct or indirect, absolute and contingent, joint or several, whether as drawer, maker, endorsee, guarantor, surety or otherwise, and to execute on behalf of the Customer mortgages, pledges, security agreements, financing statements and other instruments or documents in connection therewith; and (vi) to sell or discount with the Bank any commercial paper, bills and other instruments and evidence of indebtedness, warehouse receipts and other documents of title, accounts, accounts receivable, contract rights, and other assets, tangible and intangible, at any time held by the Customer and for such purpose to endorse, assign, transfer and deliver the same to the Bank. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
6 | Revolving Credits. Resolved that in connection with any extension of credit obtained by any of the persons authorized in Section 5 above, that permit the Customer to effect multiple advances or draws under such credit, any of the persons listed in Sections 5 (Loans and Extensions of Credit) and 3 (Withdrawals and Endorsements) |   |   |   | Resolution for ALPHABET |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
7 | Telephonic and Facsimile Requests. Resolved that the Bank is authorized to take any action authorized hereunder based upon (i) the telephone request of any person purporting to be a person authorized to act hereunder, (ii) the signature of any person authorized to act hereunder that is delivered to the Bank by facsimile transmission, or (iii) the telex originated by any of such persons, tested in accordance with such testing |   |   |   |   |   |   |   |   |   |   | : | Tr R •d Ming |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv) wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services. It. Resolved that any one of the following: | procedures as may be established between the Customer and the Bank from time to time. General. Resolved that a certified copy of these resolutions be delivered to the Bank; that the persons specified herein are vested with authority to act and may designate successor persons to act on behalf of Customer |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
8 | without further authority from the Customer or governing body; and that Bank may rely on the authority given by this resolution until actual receipt by the Bank of a certified copy of a new resolution modifying or revoking the |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
/ |   |   |   | Customer Copy, page 2 of 4 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
9 | Withdrawals and Transfers. Resolved that the Bank is authorized to make payments from the account(s) of |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | Customer according to any check, draft, bill of exchange, acceptance or other written instrument or direction signed by any one of the following individuals, officers or designated agents, and that such designated individuals may also otherwise transfer, or enter into agreements with Bank concerning the transfer, of funds from Customer's account(s), whether by telephone, telegraph, computer or any other manner: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Column1 | Column2 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | Loans and Extensions of Credit. Resolved that any one of the following: |   | 45999-0023 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Date of this notice: |   |   |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Employer Identification Number: 88-1656496 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Form: | SS-4 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Number of this notice: |   |   |   |   | CP 575 A |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | For assistance you may call us at: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 1-800-829-4933 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | 75235 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | IF YOU WRITE, ATTACH THE STUB AT THE BD OF THIS NOTICE. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   | We assigned you |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | This EIN will identify you, your business accounts, tax returns, and |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
WE ASSIGNED YOU AN EMPLOYER IDENTIFICATION NUMBER Thank you for applying for an Employer Identification Number (EIN) . |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
EIN 88-1656496. |   |   |   |   |   |   |   | If the information is |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   | Please |   |   |   | b |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   | 6.35- |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
for the tax period(s) in question, please file the return (s) showing you have no liabilities . If you have questions about at the the forms address or the shown due at dates the top shown, of you this can notice. call us If atyou the phone number or write to us Publication 538, need help in determining your annual accounting period (tax year) , see Accounting Periods and Methods. |   |   |   |   |   |   |   |   |   |   |   |   |   |   | 8 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Total Year to Date |   |   |   |   |   |   |   |   |   | 3, |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | Total for this Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Overdraft and Returned Item Fee Summary |   |   |   | 36 |   | 36 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | 18 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Returned Item Fees (NSF) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | t ly of |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | Items | Amount |   | Checks and Other Deductions Description |   |   |   |   |   | Items | Amount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | 1 | 62.5 |   | ACH Deductions |   |   |   |   |   | 1 | 62.5 |   |   | he |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Deposits and Other Additions Description |   |   |   |   |   | Service Charges and Fees |   |   |   |   |   | 1 | 36 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ACH Additions |   |   | 1 | 62.5 |   | Total |   |   |   |   |   | 2 | 98.5 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | Date |   | Ledger balance |   |   | Date |   |   |   | Ledger balance |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Daily Balance |   |   |   | (279 |   | 62.50- |   |   | 44678 |   |   |   | 36 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date | Ledger balance | * |   | You' |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | 202 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Alphabet Inc Class C GOOG |   |   |   | otm corr |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | esti |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
2814 | TM 27.8414.76% |   | 63500 | 53.: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | 202 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Fair Value Estimate |   |   | 2160 | gro |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | 550 | ovr |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consider Buying Price |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consider Selling Price |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Fair Value Uncertainty Economic Moat Stewardship Grade |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
02-01-2022 1 by Ali Mogharabi |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Strategy & Outlook 02-01-2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Analyst Digest 1 633-44-1725 10-15-94 Portfolio April 04,2022 - April 03,2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Berkshire Hathaway Inc Class A BRK.A |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 525000 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
527760 | $0.001 0.00% | 367500 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Fair Value Estimate |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consider Buying Price |   | $708,750.00 Medium Wide |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | Standard |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Consider Selling Price Fair Value Uncertainty Economic Moat |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Stewardship Grade |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
03-11-2022 1 by Greggory Warren |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Strategy & Outlook 03-11-2022 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
While 2020 was an extremely difficult year for Berkshire Hathaway, with a nearly 10% decline in operating earnings and a more than 40% decline in reported net earnings, the firm's overall positioning improved as the back half of the year progressed. The firm saw an even more marked improvement in its insurance investment portfolio, as well as the operating results of its various subsidiaries, last year. As such, we expect 2022 and 2023 to be a return to more normalized levels of revenue growth and profitability (albeit with inflation impacting results in the first half of this year).We continue to view Berkshire's decentralized business model, broad business diversification, high cash-generation capabilities, and unmatched balance sheet strength as true differentiators. While these advantages have been overshadowed by an ever-expanding cash balance-ANhich is earning next to nothing in a near-zero interest-rate environment--we believe the company has finally hit a nexus where it is far more focused on reducing its cash hoard through stock and bond investments and share repurchases. During the past eight calendar quarters, the |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
When filing tax documents, | ING  payments, or replying to any related correspondence, |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
it is very important that you use your EIN and complete name and address exactly as shown above. Any variation may cause a delay in processing, result in incorrect information in |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
your account, or even cause you to be assigned more than one EIN. |   |   |   | If the information is |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
not correct as shown above, please make the correction using the attached tear-off stub and return it to us . Based on the information received from you or your representative, you must file the following forms by the dates shown. |   |   |   |   |   |   |   | We assigned you |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Form 940 |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Form 943 |   | 44658 |   |   |   | If the information is |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Form 1065 |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Form 720 |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Your Form 2290 becomes due the month after your vehicle is put into use . Your Form 1 IC and/or 730 becomes due the month after your wagering starts . After our review of your information, we have determined that you have not filed |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
tax returns for the above-mentioned tax period (s) dating as far back as 2007. |   |   |   |   | Plea S |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
file your return(s) by 04/22/2022. |   |   | If there is a balance due on the return (s) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
penalties and interest will continue to accumulate from the due date of the return (s) |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
until it is filed and paid. | If you were not in business or did not hire any employees |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
for the tax period(s) in question, please file the return (s) showing you have no liabilities . If you have questions about the forms or the due dates shown, you can call us at |   |   |   |   |   |   |   |   | PI |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
the phone number or write to us at the address shown at the top of this notice. |   |   |   |   | If you |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
need help in determining your annual accounting period (tax year) , see Publication 538, Accounting Periods and Methods. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Checking PNCBANK |   |   |   |   |   |   | @PNCBANK |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
For the period 04/13/2022 |   |   |   |   |   |   | Primary account number: 47-2041-6547 Page 1 of 3 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
5/19/2302 |   |   |   |   | 1022462 | Q 304 | Number of enclosures: 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ZACHRY TYLER WOOD ALPHABET 5323 BRADFORD DR DALLAS TX 75235-8314 | ` |   |   |   |   |   | For 24-hour banking sign on to PNC Bank Online Banking on pnc.com FREE Online Bill Pay For customer service call 1-877-BUS-BNKG PNC accepts Telecommunications Relay Service (TRS) calls. |   |   |   | 9 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
1.11E+62 |   |   |   |   |   |   | Para servicio en espalol, 1877.BUS-BNKC, Moving? Please contact your local branch. @ Write to: Customer Service PO Box 609 Pittsburgh , PA 15230-9738 Visit us at PNC.com/smaIIbusiness |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS |   |   |   |   |   |   |   |   |   |   | Date of this notice: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Effective February 18,2022, PNC will be temporarily waiving fees for statement, check image, deposit ticket and deposited item copy requests until further notice. Statement, check image, deposit ticket and deposited Item requests will continue to be displayed in the Details of Services Used section of your monthly statement. We will notify you via statement message prior to reinstating these fees. If vou have any questions, you may reach out to your business banker branch or call us at 1-877-BUS-BNKG (1-877-287-2654). |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Checking Summary Account number; 47-2041-6547 Overdraft Protection has not been established for this account. Please contact us if you would like to set up this service. |   |   |   |   |   |   |   | Zachry Tyler Wood Alphabet |   |   | Employer Identification Number: 88-1656496 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Balance Summary |   |   |   |   |   | Checks and other deductions |   | Ending balance |   |   | Form: |   | SS-4 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Beginning balance |   |   |   | Deposits and other additions |   |   |   |   |   |   | Number of this notice: |   |   |   |   |   | CP 575 A |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
0 |   |   |   | = |   | 98.50 Average ledger balance |   | 36.00- Average collected balance |   |   | For assistance you may call ug at: |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 6.35- |   |   | 6.35- |   | 1-800-829-4933 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Overdraft and Returned Item Fee Summary |   |   |   |   |   | Total Year to Date |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   | Total for this Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Returned Item Fees (NSF) |   |   | 36 |   |   | 36 |   |   |   |   | IF YOU WRITE, ATTATCHA TYE STUB AT OYE END OF THIS NOTICE. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Deposits and Other Additions Description |   | Items | Amount |   |   | Checks and Other Deductions Description |   |   | Items | Amount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ACH Additions |   | 1 | 62.5 |   |   | ACH Deductions |   |   | 1 | 62.5 |   |   |   |   | We assigned you |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Service Charges and Fees |   |   | 1 | 36 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total |   | 1 | 62.5 |   |   | Total |   |   | 2 | 98.5 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Daily Balance |   |   | Date |   |   |   | Date |   |   | Ledger balance |   |   |   | If the information is |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date | Ledger balance |   |   |   |   | Ledger balance |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
44664 | 0 |   | 44677 |   |   | 62.50- |   | 44678 |   | 36 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   | Form 940 |   |   |   |   |   | 44658 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | Berkshire Hatha,a,n.. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Checking |   |   |   |   |   | For the period 04/13/2022  to 04/29/2022 |   | 44680 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
For 24-hour account information, sign on to pnc.com/mybusiness/ |   |   |   |   |   | ZACHRY TYLER WOOD |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | Primary account number: 47-2041-6547 Page 2 of 3 |   |   |   |   |   |   |   |   |   |   | Please |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Business Checking Account number: 47-2041-6547 - continued |   |   |   |   |   | Page 2 of 3 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Acüvity Detail |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Deposits and Other Additions |   |   |   |   |   |   |   |   |   |   |   | did not hire any employee |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ACH Additions |   |   |   |   |   |   |   |   | Referenc numb |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted 04/27 |   | Transaction  Amount description 62.50  Reverse Corporate ACH Debit Effective 04-26-22 |   |   |   |   |   |   |   | the due dates shown, you can call us at |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   | If you |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Checks and Other Deductions |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ACH Deductions |   |   |   |   |   | Referenc |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted | Transaction Amount description |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | number |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
4/26/2022 | 70842743866 |   | Corporate ACH Quickbooks 180041ntuit 1940868 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
ervice Charges and Fees |   |   |   |   |   | Referenc |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Date posted | Transaction Amount descripton |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
27-Apr | 2.21169E+13 |   |   |   |   | numb |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Detail of Services Used During Current Period |   |   |   |   |   | 2.21169E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
::NOTE:: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement as a single line item entitled Service Charge Period Ending 04/29/2022. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
e: The total charge for the following Penod Ending 04/29/2022. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Service Charge description |   |   |   |   | Amount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Account Maintenance Charge |   |   |   |   | $62.50 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total For Services Used This Period |   |   |   |   | $36.00 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Total Service Charge |   |   |   |   | $98.50 | Waived - | Waived - New Customer Period |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reviewing Your Statement of this statement if: you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account. |   |   |   |   |   |   |   |   |   |   | PNCBANK |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Balancing Your Account Update Your Account Register |   |   |   |   | Volume |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Compare: | The activity detail section of your statement to your account register. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Check Off:  Add to Your Account Register: Balance: Subtract From Your Account Register  Balance: |   | All items in your account register that also appear on your statement. Remember to begin with the ending date of your last statement. (An asterisk { * } will appear in the Checks section if there is a gap in the listing of consecutive check numbers.) Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register. Any account deductions including fees and ATM or electronic deductions listed on the statement that are not already entered in your register. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Your Statement Information : |   |   |   |   |   |   |   |   | step 2: Add together checks and other deductions listed in your account register but not on your statement. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | Amount |   |   |   |   |   | Check Deduction Descrption | Amount |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Balancing Your Account Update Your Account Register |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  | on Deposit: '"{{'</body></html></div> '{{[22934637118600.[00]USD')'"' |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
4720416547 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Reviewing Your Statement of this statement if: you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing account. | Total A=$22934637118600 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Step 3: |   |   |   |   |   | $22,934,637,118,600 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Enter the ending balance recorded on your statement |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Add deposits and other additions not recorded |   |   |   |   | Total A + $22934637118600 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   | Subtotal=$22934637118600 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Subtract checks and other deductions not recorded Total B |   |   |   |   |   |   | $ | 2.29346E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
The result should equal your account register balance |   |   |   |   |   |   | $ | 2.29346E+13 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   | Total B22934637118600 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Verification of Direct Deposits |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
To verify whether a direct deposit or other transfer to your account has occurred, call us Monday - Friday: 7 AM - 10 PM ET and Saturday & Sunday: 8 AM - 5 PM ET at the customer service number listed on the upper right side of the first page of this statement. |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
In Case of Errors or Questions About Your Electronic Transfers Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M, Pittsburgh, PA 15219 as soon as you can, if you think your statement or receipt is wrong or if you need more information about a transfer on the statement or receipt. We must hear from you no later than 60 days after we sent you the FIRST statement on which the error or problem appeared. Tell us your name and account number (if any). Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information. Tell us the dollar amount of the suspected error. We will investigate your complaint and will correct any error promptly. If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it Cakes us to complete our investigation. EquaLHousing Lender |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
Member FDIC |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   | 0 |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  
  |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  

</body></html></div>
diff --git a/assets/images/help/repository/repo-actions-settings.png b/assets/images/help/repository/repo-actions-settings.png
index 8970b388a1f6d9ceece7a577c90a53ca196eb950..b964ee1cbe9bfeb465c91918af0841a27eac61c1 100644
GIT binary patch
literal 12932
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
NsiNBBqDRK>{uggfVY>hT

literal 21851
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
J$puH!e*o@mKbiml

diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index babc51f666d..8c9b9f58a8c 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -1,4 +1,7 @@
-# Welcome to GitHub docs contributing guide <!-- omit in toc -->
+ttitle :Response :
+status :codeified_string :
+# :Status :403OK=::=>Request'='"'='"'>'::Pushs ::status :403OK :manifest_ENERGY'@ZachryTWood'@Administrator'@.it.git :
+403 Welcome to GitHub docs contributing guide <!-- omit in toc -->
 
 Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 
 
diff --git a/Build and Deploy b/Build and Deploy
index 4197a6f..2bad59d 100644
--- a/Build and Deploy	
+++ b/Build and Deploy	
@@ -1,4 +1,270 @@
-Get answers to your investing questions from the SEC's website dedicated to retail investors :						
+Get answers to your investing questions from the SEC's website dedicated to retail investors :																										
+941																										
+ALPHABET																										
+1600 AMPITHEATRE PARKWAY							Period Ending:																			
+MOUNTAIN VIEW, C.A., 94043							Pay Date:																			
+"Taxable Marital Status:
+Exemptions/Allowances"							ZACHRY T.							5323												
+Federal:														DALLAS												
+TX:		NO State Income Tax																								
+	rate	units				year to date	Other Benefits and																			
+	112.2	674678000				7569887160000.00%	Information							Pto Balance							Total Work Hrs					
+Gross Pay	75698871600						Important Notes							COMPANY PH Y: 650-253-0000												
+Statutory							BASIS OF PAY: BASIC/DILUTED EPS																			
+Federal Income Tax																										
+Social Security Tax														YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE												
+Medicare Tax																										
+Net Pay		70842743866	70842743866																							
+CHECKING																										
+Net Check		$70,842,743,866.00 																								
+Your federal taxable wages this period are $																										
+ALPHABET INCOME							Advice number:																			
+1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043							Pay date:_																			
+Deposited to the account Of							xxxxxxxx6547																			
+PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										
+633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										
+PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										
+CIF Department (Online Banking) Checking Account: 47-2041-6547																										
+P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										
+500 First Avenue ALPHABET																										
+Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										
+NON-NEGOTIABLE DALLAS TX 75235 8313																										
+ZACHRY, TYLER, WOOD																										
+4/18/2022 650-2530-000 469-697-4300																										
+SIGNATURE Time Zone: Eastern Central Mountain Pacific																										
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"										NON-NEGOTIABLE																
+PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+|	Security enhanced document.  See back for details				NO.																					
+|	[OBJ][OBJ]PNCBANK																									
+|		PNC Bank N.A.	71													70-2188/719										
+|										    			DATE____________________________________7364													
+|																										
+|PAY TO THE																										
+|ORDER OF_______________________________________________________________________________________________________________|***$**22677000000000&00/100cents||																										
+|																    Security||										
+|______________________________________________________________________________________________________________________DOLLARS [OBJ] Features 																										
+|ESTATE OF															                                                                                             Detaile											
+|																                                                                                                     on Back.										
+|FOR_____________________________________																										
+|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.EXECUTOR/																										
+|{														}.ADMINISTRATOR												
+|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.PERSONAL/																										
+|{														}.REPRESENTATIVE												
+|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.TRUSTEE||																										
+|Deposited to the account Of xxxxxxxx6547																										
+|PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+|																										
+|FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										
+|																										
+|633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										
+|PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										
+|CIF Department (Online Banking) Checking Account: 47-2041-6547																										
+|P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										
+|500 First Avenue ALPHABET																										
+|Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										
+GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020																			
+Gross Profit	$146,698,000,000.00 	$42,337,000,000.00 	$35,653,000,000.00 	$31,211,000,000.00 	30818000000	$25,056,000,000.00 	1974400000000.00%																			
+Total Revenue as Reported, Supplemental	$257,637,000,000.00 	$75,325,000,000.00 	$61,880,000,000.00 	$55,314,000,000.00 	56898000000	$46,173,000,000.00 	3829700000000.00%																			
+$257,637,000,000.00 	$75,325,000,000.00 	$61,880,000,000.00 	$55,314,000,000.00 	56898000000	$46,173,000,000.00 	3829700000000.00%																				
+Other Revenue																										
+Cost of Revenue	-1.11E+11	-32988000000	-26227000000	($24,103,000,000.00)	-26080000000	($21,117,000,000.00)	-1855300000000.00%																			
+Cost of Goods and Services	-1.11E+11	-32988000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000																			
+Operating Income/Expenses	-67984000000	-20452000000	-16292000000	($14,774,000,000.00)	($15,167,000,000.00)	-1384300000000.00%	($13,361,000,000.00)																			
+Selling, General and Administrative Expenses	-36422000000	-11744000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000																			
+General and Administrative Expenses	-13510000000	-4140000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000																			
+Selling and Marketing Expenses	-22912000000	-7604000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000																			
+Research and Development Expenses	-31562000000	-8708000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000																			
+Total Operating Profit/Loss	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000																			
+Non-Operating Income/Expenses, Total	12020000000	2517000000	2624000000	4846000000	3038000000	2146000000	1894000000																			
+Total Net Finance Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000																			
+Net Interest Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000																			
+Interest Expense Net of Capitalized Interest	-346000000	-117000000	-76000000	-76000000	-53000000	-48000000	-13000000																			
+Interest Income	1499000000	378000000	389000000	345000000	386000000	460000000	433000000																			
+Net Investment Income	12364000000	2364000000	2924000000	4869000000	3530000000	1957000000	1696000000																			
+Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2883000000	4751000000	3262000000	2015000000	1842000000																			
+Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	92000000	5000000	355000000	26000000	-54000000																			
+Gain/Loss on Foreign Exchange	-240000000	-163000000	-51000000	113000000	-87000000	-84000000	-92000000																			
+Irregular Income/Expenses	0	0			0	0	0																			
+Other Irregular Income/Expenses	0	0			0	0	0																			
+Other Income/Expense, Non-Operating	-1497000000	-108000000	-613000000	-292000000	-825000000	-223000000	-222000000																			
+Pretax Income	90734000000	24402000000	21985000000	21283000000	18689000000	13359000000	8277000000																			
+Provision for Income Tax	-14701000000	-3760000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000																			
+Net Income from Continuing Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																			
+Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																			
+Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																			
+Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																			
+Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																			
+Income Statement Supplemental Section																										
+Reported Normalized and Operating Income/Expense Supplemental Section																										
+Total Revenue as Reported, Supplemental	2.58E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000																			
+Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000																			
+Reported Effective Tax Rate	0.162		0.157	0.158		0.158	0.159																			
+Reported Normalized Income																										
+Reported Normalized Operating Profit																										
+Other Adjustments to Net Income Available to Common Stockholders																										
+Discontinued Operations																										
+Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21																			
+Basic EPS from Continuing Operations	113.88	31.12	27.69	26.63	22.46	16.55	10.21																			
+Basic EPS from Discontinued Operations																										
+Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13																			
+Diluted EPS from Continuing Operations	112.2	30.67	27.26	26.29	22.23	16.4	10.13																			
+Diluted EPS from Discontinued Operations																										
+Basic Weighted Average Shares Outstanding	667650000	662664000	668958000	673220000	675581000	679449000	681768000																			
+Diluted Weighted Average Shares Outstanding	677674000	672493000	679612000	682071000	682969000	685851000	687024000																			
+Reported Normalized Diluted EPS																										
+Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21																			
+Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13																			
+Basic WASO	667650000	662664000	668958000	673220000	675581000	679449000	681768000																			
+Diluted WASO	677674000	672493000	679612000	682071000	682969000	685851000	687024000																			
+Fiscal year end September 28th., 2022. | USD																										
+																										
+31622,6:39 PM																										
+Morningstar.com Intraday Fundamental Portfolio View Print Report							Print																			
+																										
+3/6/2022 at 6:37 PM																										
+																										
+																										
+GOOGL_income-statement_Quarterly_As_Originally_Reported																										
+Cash Flow from Operating Activities, Indirect		Q4 2021	Q2 2021	Q1 2021	Q4 2020																					
+Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	37497000000	31211000000	30818000000																					
+Cash Generated from Operating Activities		24934000000	21890000000	19289000000	22677000000																					
+Income/Loss before Non-Cash Adjustment		24934000000	21890000000	19289000000	22677000000																					
+Total Adjustments for Non-Cash Items		20642000000	18525000000	17930000000	15227000000																					
+Depreciation, Amortization and Depletion, Non-Cash Adjustment		6517000000	4236000000	2592000000	5748000000																					
+Depreciation and Amortization, Non-Cash Adjustment		3439000000	2945000000	2753000000	3725000000																					
+Depreciation, Non-Cash Adjustment		3439000000	2945000000	2753000000	3725000000																					
+Amortization, Non-Cash Adjustment		3215000000	2730000000	2525000000	3539000000																					
+Stock-Based Compensation, Non-Cash Adjustment		224000000	215000000	228000000	186000000																					
+Taxes, Non-Cash Adjustment		3954000000	3803000000	3745000000	3223000000																					
+Investment Income/Loss, Non-Cash Adjustment		1616000000	379000000	1100000000	1670000000																					
+Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2883000000	-4751000000	-3262000000																					
+Other Non-Cash Items		-2478000000	-2883000000	-4751000000	-3262000000																					
+Changes in Operating Capital		-14000000	-8000000	-255000000	392000000																					
+Change in Trade and Other Receivables		-2225000000	-871000000	-1233000000	1702000000																					
+Change in Trade/Accounts Receivable		-5819000000	-3661000000	2794000000	-5445000000																					
+Change in Other Current Assets		-5819000000	-3661000000	2794000000	-5445000000																					
+Change in Payables and Accrued Expenses		-399000000	-199000000	7000000	-738000000																					
+Change in Trade and Other Payables		6994000000	4074000000	-4956000000	6938000000																					
+Change in Trade/Accounts Payable		1157000000	-130000000	-982000000	963000000																					
+Change in Accrued Expenses		1157000000	-130000000	-982000000	963000000																					
+Change in Deferred Assets/Liabilities		5837000000	4204000000	-3974000000	5975000000																					
+Change in Other Operating Capital		368000000	-3000000	137000000	207000000																					
+Change in Prepayments and Deposits		-3369000000	-1082000000	785000000	740000000																					
+Cash Flow from Investing Activities																										
+Cash Flow from Continuing Investing Activities		-11016000000	-9074000000	-5383000000	-7281000000																					
+Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-11016000000	-9074000000	-5383000000	-7281000000																					
+Purchase of Property, Plant and Equipment		-6383000000	-5496000000	-5942000000	-5479000000																					
+Sale and Disposal of Property, Plant and Equipment		-6383000000	-5496000000	-5942000000	-5479000000																					
+Purchase/Sale of Business, Net																										
+Purchase/Acquisition of Business		-385000000	-308000000	-1666000000	-370000000																					
+Purchase/Sale of Investments, Net		-385000000	-308000000	-1666000000	-370000000																					
+Purchase of Investments		-4348000000	-3293000000	2195000000	-1375000000																					
+Sale of Investments		-40860000000	-24949000000	-37072000000	-36955000000																					
+Other Investing Cash Flow		36512000000	21656000000	39267000000	35580000000																					
+Purchase/Sale of Other Non-Current Assets, Net		100000000	23000000	30000000	-57000000																					
+Sales of Other Non-Current Assets																										
+Cash Flow from Financing Activities																										
+Cash Flow from Continuing Financing Activities		-16511000000	-15991000000	-13606000000	-9270000000																					
+Issuance of/Payments for Common Stock, Net		-16511000000	-15991000000	-13606000000	-9270000000																					
+Payments for Common Stock		-13473000000	-12796000000	-11395000000	-7904000000																					
+Proceeds from Issuance of Common Stock		13473000000	-12796000000	-11395000000	-7904000000																					
+Issuance of/Repayments for Debt, Net																										
+Issuance of/Repayments for Long Term Debt, Net		115000000	-1042000000	-37000000	-57000000																					
+Proceeds from Issuance of Long Term Debt		115000000	-1042000000	-37000000	-57000000																					
+Repayments for Long Term Debt		6250000000	6699000000	900000000	0																					
+Proceeds from Issuance/Exercising of Stock Options/Warrants		6365000000	-7741000000	-937000000	-57000000																					
+		2923000000	-2453000000	-2184000000	-1647000000																					
+																										
+Other Financing Cash Flow																										
+Cash and Cash Equivalents, End of Period																										
+Change in Cash		0	300000000	10000000	338000000000)																					
+Effect of Exchange Rate Changes		20945000000	23630000000	26622000000	26465000000																					
+Cash and Cash Equivalents, Beginning of Period		25930000000	-3175000000	300000000	6126000000																					
+Cash Flow Supplemental Section		181000000000)	183000000	-143000000	210000000																					
+Change in Cash as Reported, Supplemental		2.37E+13	2.66E+13	2.65E+13	2.01E+13																					
+Income Tax Paid, Supplemental		2774000000	-2992000000		6336000000																					
+Cash and Cash Equivalents, Beginning of Period		13412000000			-4990000000																					
+																										
+12 Months Ended																										
+_________________________________________________________																										
+					Q4 2019																					
+Income Statement																										
+USD in "000'"s																										
+Repayments for Long Term Debt					Dec. 31, 2019																					
+Costs and expenses:																										
+Cost of revenues					161857																					
+Research and development																										
+Sales and marketing					71896																					
+General and administrative					26018																					
+European Commission fines					18464																					
+Total costs and expenses					9551																					
+Income from operations					1697																					
+Other income (expense), net					127626																					
+Income before income taxes					34231																					
+Provision for income taxes					5394																					
+Net income					19289000000																					
+*include interest paid, capital obligation, and underweighting					19289000000																					
+					19289000000																					
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																										
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																										
+																										
+																										
+For Paperwork Reduction Act Notice, see the seperate Instructions.																										
+																										
+																										
+POST// Purl{data'@https://rake.io/ Copyright 2005-09-17,17:00:00:00 :;-17:00:00:00CSMT](All rights reserved. MIT license).																										
+use serde::Deserialize;																										
+table 	{mso-displayed-decimal-separator:"\."; 	mso-displayed-thousand-separator:"\,";} tr 	{mso-height-source:auto;} col 	{mso-width-source:auto;} td 	{padding-top:1px; 	padding-right:1px; 	padding-left:1px; 	mso-ignore:padding; 	color:black; 	font-size:11.0pt; 	font-weight:400; 	font-style:normal; 	text-decoration:none; 	font-family:Calibri, sans-serif; 	mso-font-charset:0; 	text-align:general; 	vertical-align:bottom; 	border:none; 	white-space:nowrap; 	mso-rotate:0;} .xl48 	{font-size:13.5pt; 	font-weight:700; 	font-family:"Courier New"; 	mso-generic-font-family:auto; 	mso-font-charset:0;} .xl49 	{font-size:13.5pt;} .xl50 
+Exemptions/AllowancesFederal:TX:Gross PayStatutoryFederal Income TaxSocial Security TaxMedicare TaxNet PayCHECKINGNet CheckYour federal taxable wages this period are $ALPHABET INCOME1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043Deposited to the account OfPLEASE READ THE IMPORTANT DISCLOSURES BELOWBased on facts as set forth in.The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.EMPLOYER IDENTIFICATION NUMBER: 61-1767919[DRAFT FORM OF TAX OPINION]ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENTGOOGL_income-statement_Quarterly_As_Originally_ReportedGross ProfitTotal Revenue as Reported, SupplementalOther RevenueCost of RevenueCost of Goods and ServicesOperating Income/ExpensesSelling, General and Administrative ExpensesGeneral and Administrative ExpensesSelling and Marketing ExpensesResearch and Development ExpensesTotal Operating Profit/LossNon-Operating Income/Expenses, TotalTotal Net Finance Income/ExpenseNet Interest Income/ExpenseInterest Expense Net of Capitalized InterestInterest IncomeNet Investment IncomeGain/Loss on Investments and Other Financial InstrumentsIncome from Associates, Joint Ventures and Other Participating InterestsGain/Loss on Foreign ExchangeIrregular Income/ExpensesOther Irregular Income/ExpensesOther Income/Expense, Non-OperatingPretax IncomeProvision for Income TaxNet Income from Continuing OperationsNet Income after Extraordinary Items and Discontinued OperationsNet Income after Non-Controlling/Minority InterestsNet Income Available to Common StockholdersDiluted Net Income Available to Common StockholdersIncome Statement Supplemental SectionReported Normalized and Operating Income/Expense Supplemental SectionTotal Revenue as Reported, SupplementalTotal Operating Profit/Loss as Reported, SupplementalReported Effective Tax RateReported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPSBasic EPS from Continuing OperationsBasic EPS from Discontinued OperationsDiluted EPSDiluted EPS from Continuing OperationsDiluted EPS from Discontinued OperationsBasic Weighted Average Shares OutstandingDiluted Weighted Average Shares OutstandingReported Normalized Diluted EPSBasic EPSDiluted EPSBasic WASODiluted WASOFiscal year end September 28th., 2022. | USD31622,6:39 PMMorningstar.com Intraday Fundamental Portfolio View Print Report3/6/2022 at 6:37 PMGOOGL_income-statement_Quarterly_As_Originally_ReportedCash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, IndirectCash Generated from Operating ActivitiesIncome/Loss before Non-Cash AdjustmentTotal Adjustments for Non-Cash ItemsDepreciation, Amortization and Depletion, Non-Cash AdjustmentDepreciation and Amortization, Non-Cash AdjustmentDepreciation, Non-Cash AdjustmentAmortization, Non-Cash AdjustmentStock-Based Compensation, Non-Cash AdjustmentTaxes, Non-Cash AdjustmentInvestment Income/Loss, Non-Cash AdjustmentGain/Loss on Financial Instruments, Non-Cash AdjustmentOther Non-Cash ItemsChanges in Operating CapitalChange in Trade and Other ReceivablesChange in Trade/Accounts ReceivableChange in Other Current AssetsChange in Payables and Accrued ExpensesChange in Trade and Other PayablesChange in Trade/Accounts PayableChange in Accrued ExpensesChange in Deferred Assets/LiabilitiesChange in Other Operating CapitalChange in Prepayments and DepositsCash Flow from Investing ActivitiesCash Flow from Continuing Investing ActivitiesPurchase/Sale and Disposal of Property, Plant and Equipment, NetPurchase of Property, Plant and EquipmentSale and Disposal of Property, Plant and EquipmentPurchase/Sale of Business, NetPurchase/Acquisition of BusinessPurchase/Sale of Investments, NetPurchase of InvestmentsSale of InvestmentsOther Investing Cash FlowPurchase/Sale of Other Non-Current Assets, NetSales of Other Non-Current AssetsCash Flow from Financing ActivitiesCash Flow from Continuing Financing ActivitiesIssuance of/Payments for Common Stock, NetPayments for Common StockProceeds from Issuance of Common StockIssuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, NetProceeds from Issuance of Long Term DebtRepayments for Long Term DebtProceeds from Issuance/Exercising of Stock Options/WarrantsOther Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in CashEffect of Exchange Rate ChangesCash and Cash Equivalents, Beginning of PeriodCash Flow Supplemental SectionChange in Cash as Reported, SupplementalIncome Tax Paid, SupplementalCash and Cash Equivalents, Beginning of Period12 Months Ended_________________________________________________________Income StatementUSD in "000'"sRepayments for Long Term DebtCosts and expenses:Cost of revenuesResearch and developmentSales and marketingGeneral and administrativeEuropean Commission finesTotal costs and expensesIncome from operationsOther income (expense), netIncome before income taxesProvision for income taxesNet income*include interest paid, capital obligation, and underweightingBasic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)For Paperwork Reduction Act Notice, see the seperate Instructions.rate112.27569887160061-176791988-1303491TTM$146,698,000,000.00 $257,637,000,000.00 $257,637,000,000.00 -1.10939E+11-1.10939E+11-67984000000-36422000000-13510000000-22912000000-31562000000787140000001202000000011530000001153000000-34600000014990000001236400000012270000000334000000-24000000000-149700000090734000000-1470100000076033000000760330000007603300000076033000000760330000002.57637E+11787140000000.162113.88113.88112.2112.2667650000677674000113.88112.2667650000677674000Advice number:NO State Incorne Taxunits67467800070842743866$70,842,743,866.00 Q4 2021$42,337,000,000.00 $75,325,000,000.00 $75,325,000,000.00 -32988000000-32988000000-20452000000-11744000000-4140000000-7604000000-8708000000218850000002517000000261000000261000000-1170000003780000002364000000247800000049000000-16300000000-10800000024402000000-37600000002064200000020642000000206420000002064200000020642000000753250000002188500000031.1531.1230.6930.6766266400067249300031.1530.69662664000672493000Q4 202124934000000249340000002493400000020642000000651700000034390000003439000000321500000022400000039540000001616000000-2478000000-2478000000-14000000-2225000000-5819000000-5819000000-3990000006994000000115700000011570000005837000000368000000-3369000000-11016000000-11016000000-6383000000-6383000000-385000000-385000000-4348000000-4086000000036512000000100000000-16511000000-16511000000-134730000001347300000011500000011500000062500000006365000000292300000002094500000025930000000181000000000)2.3719E+13277400000013412000000Pay date:_70842743866Q2 2021$35,653,000,000.00 $61,880,000,000.00 $61,880,000,000.00 -26227000000-26227000000-16292000000-8617000000-3341000000-5276000000-7675000000193610000002624000000313000000313000000-760000003890000002924000000288300000092000000-51000000-61300000021985000000-3460000000185250000001852500000018525000000185250000001852500000061880000000193610000000.15727.6927.6927.2627.2666895800067961200027.6927.26668958000679612000Q2 20213749700000021890000000218900000001852500000042360000002945000000294500000027300000002150000003803000000379000000-2883000000-2883000000-8000000-871000000-3661000000-3661000000-1990000004074000000-130000000-1300000004204000000-3000000-1082000000-9074000000-9074000000-5496000000-5496000000-308000000-308000000-3293000000-249490000002165600000023000000-15991000000-15991000000-12796000000-12796000000-1042000000-10420000006699000000-7741000000-245300000030000000023630000000-31750000001830000002.6622E+13-2992000000PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+																										
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										
+633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										
+PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										
+CIF Department (Online Banking) Checking Account: 47-2041-6547																										
+P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										
+500 First Avenue ALPHABET																										
+Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										
+NON-NEGOTIABLE DALLAS TX 75235 8313																										
+ZACHRY, TYLER, WOOD																										
+4/18/2022 650-2530-000 469-697-4300																										
+SIGNATURE Time Zone: Eastern Central Mountain Pacific																										
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose ValueQ1 2021$31,211,000,000.00 $55,314,000,000.00 $55,314,000,000.00 ($24,103,000,000.00)-24103000000($14,774,000,000.00)-7289000000-2773000000-4516000000-7485000000164370000004846000000269000000269000000-76000000345000000486900000047510000005000000113000000-29200000021283000000-3353000000179300000001793000000017930000000179300000001793000000055314000000164370000000.15826.6326.6326.2926.2967322000068207100026.6326.29673220000682071000Q1 202131211000000192890000001928900000017930000000259200000027530000002753000000252500000022800000037450000001100000000-4751000000-4751000000-255000000-1233000000279400000027940000007000000-4956000000-982000000-982000000-3974000000137000000785000000-5383000000-5383000000-5942000000-5942000000-1666000000-16660000002195000000-370720000003926700000030000000-13606000000-13606000000-11395000000-11395000000-37000000-37000000900000000-937000000-21840000001000000026622000000300000000-1430000002.6465E+13xxxxxxxx6547Q4 2020308180000005689800000056898000000-26080000000-26080000000($15,167,000,000.00)-8145000000-2831000000-5314000000-7022000000156510000003038000000333000000333000000-5300000038600000035300000003262000000355000000-8700000000-82500000018689000000-34620000001522700000015227000000152270000001522700000015227000000568980000001565100000022.5422.4622.322.2367558100068296900022.5422.3675581000682969000Q4 202030818000000226770000002267700000015227000000574800000037250000003725000000353900000018600000032230000001670000000-3262000000-32620000003920000001702000000-5445000000-5445000000-73800000069380000009630000009630000005975000000207000000740000000-7281000000-7281000000-5479000000-5479000000-370000000-370000000-1375000000-3695500000035580000000-57000000-9270000000-9270000000-7904000000-7904000000-57000000-570000000-57000000-1647000000338000000000)2646500000061260000002100000002.0129E+136336000000-4990000000Q4 2019Dec. 31, 201916185771896260181846495511697127626342315394192890000001928900000019289000000PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+																										
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										
+633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										
+PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										
+CIF Department (Online Banking) Checking Account: 47-2041-6547																										
+P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										
+500 First Avenue ALPHABET																										
+Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										
+NON-NEGOTIABLE DALLAS TX 75235 8313																										
+ZACHRY, TYLER, WOOD																										
+4/18/2022 650-2530-000 469-697-4300																										
+SIGNATURE Time Zone: Eastern Central Mountain Pacific																										
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Valueyear to date7569887160000.00%Q3 2020$25,056,000,000.00 $46,173,000,000.00 $46,173,000,000.00 ($21,117,000,000.00)-21117000000-1384300000000.00%-6987000000-2756000000-4231000000-6856000000112130000002146000000412000000412000000-480000004600000001957000000201500000026000000-8400000000-22300000013359000000-2112000000112470000001124700000011247000000112470000001124700000046173000000112130000000.15816.5516.5516.416.467944900068585100016.5516.4679449000685851000NON-NEGOTIABLEZACHRY T.5323DALLASOther Benefits andInformationPto BalanceTotal Work HrsImportant NotesCOMPANY PH Y: 650-253-0000BASIS OF PAY: BASIC/DILUTED EPSYOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUEAdvice number:Pay date:_xxxxxxxx6547NON-NEGOTIABLEQ2 20201974400000000.00%3829700000000.00%3829700000000.00%-1855300000000.00%-18553000000($13,361,000,000.00)-6486000000-2585000000-3901000000-687500000063830000001894000000420000000420000000-1300000043300000016960000001842000000-54000000-9200000000-2220000008277000000-1318000000695900000069590000006959000000695900000069590000003829700000063830000000.15910.2110.2110.1310.1368176800068702400010.2110.13681768000687024000Print|______________________________________________________________________________________________________________________DOLLARS [OBJ]FeaturesTaxable Marital Status:																										
+Exemptions/AllowancesZACHRY T.|ESTATE OFDetaile on5323|BackFederal:|FOR_____________________________________DALLASTX:NO State Incorne Tax|PLEASE READ THE IMPORTANT DISCLOSURES BELOWrateunitsyear to dateOther Benefits and||AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.EXECUTOR/112.26746780007569887160000.00%Information|FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD|{}.ADMINISTRATORPto Balance||AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.PERSONAL/Total Work Hrs|633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053|{}.REPRESENTATIVEGross Pay75698871600Important Notes|PNC Bank PNC Bank Business Tax I.D. Number: 633441725|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.TRUSTEE||COMPANY PH Y: 650-253-0000|CIF Department (Online Banking) Checking Account: 47-2041-6547|Deposited to the account Of xxxxxxxx6547StatutoryBASIS OF PAY: BASIC/DILUTED EPS|P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership CorporationFederal Income Tax|500 First Avenue ALPHABETSocial Security Tax|Pittsburgh, PA 15219-3128 5323 BRADFORD DRYOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE|Medicare Tax|NON-NEGOTIABLENet Pay7084274386670842743866CHECKINGNet Check$70,842,743,866.00 Your federal taxable wages this period are $Skip to contentALPHABET INCOMEAdvice number:Search or jump to…1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043Pay date:_Pull requestsIssuesDeposited to the account Ofxxxxxxxx6547MarketplacePLEASE READ THE IMPORTANT DISCLOSURES BELOW																										
+																										
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										
+633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										
+PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										
+CIF Department (Online Banking) Checking Account: 47-2041-6547																										
+P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										
+500 First Avenue ALPHABET																										
+Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										
+NON-NEGOTIABLE DALLAS TX 75235 8313																										
+ZACHRY, TYLER, WOOD																										
+4/18/2022 650-2530-000 469-697-4300																										
+SIGNATURE Time Zone: Eastern Central Mountain Pacific																										
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose ValueExploreNON-NEGOTIABLE PLEASE READ THE IMPORTANT DISCLOSURES BELOW#NAME?Your account has been flagged.Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.zakwarlord7/Supremer-GalaxyPublicCodeIssuesPull requestsActionsProjectsWikiSecurityInsightsSettingsSupremer-Galaxy/Build and Deploy#NAME?zakwarlord7 Update Build and DeployLatest commit 761ec08 now History 1 contributor215 lines (205 sloc)  14.4 KBBased on facts as set forth in.The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.Get answers to your investing questions from the SEC's website dedicated to retail investors :941EMPLOYER IDENTIFICATION NUMBER: 61-1767919ALPHABET1600 AMPITHEATRE PARKWAYPeriod Ending:MOUNTAIN VIEW, C.A., 94043Pay Date:[DRAFT FORM OF TAX OPINION]Taxable Marital Status:																										
+Exemptions/AllowancesZACHRY T.5323Federal:DALLASTX:NO State Income Taxrateunitsyear to dateOther Benefits and112.26746780007569887160000.00%InformationPto BalanceTotal Work HrsGross Pay75698871600Important NotesCOMPANY PH Y: 650-253-0000StatutoryBASIS OF PAY: BASIC/DILUTED EPSFederal Income TaxSocial Security TaxYOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUEORIGINAL REPORTMedicare TaxIncome, Rents, & RoyaltyNet Pay7084274386670842743866INCOME STATEMENT61-1767919CHECKING88-1303491Net Check$70,842,743,866.00 GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2021Q2 2021Q1 2021Q4 2020Q3 2020Q2 2020Your federal taxable wages this period are $ALPHABET INCOMEAdvice number:Gross Profit$146,698,000,000.00 $42,337,000,000.00 $35,653,000,000.00 $31,211,000,000.00 30818000000$25,056,000,000.00 1974400000000.00%1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043Pay date:_Total Revenue as Reported, Supplemental$257,637,000,000.00 $75,325,000,000.00 $61,880,000,000.00 $55,314,000,000.00 56898000000$46,173,000,000.00 3829700000000.00%Deposited to the account Ofxxxxxxxx6547$257,637,000,000.00 $75,325,000,000.00 $61,880,000,000.00 $55,314,000,000.00 56898000000$46,173,000,000.00 3829700000000.00%PLEASE READ THE IMPORTANT DISCLOSURES BELOWOther RevenueFEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 CODCost of Revenue-1.10939E+11-32988000000-26227000000($24,103,000,000.00)-26080000000($21,117,000,000.00)-1855300000000.00%633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053Cost of Goods and Services-1.10939E+11-32988000000-26227000000-24103000000-26080000000-21117000000-18553000000PNC Bank PNC Bank Business Tax I.D. Number: 633441725Operating Income/Expenses-67984000000-20452000000-16292000000($14,774,000,000.00)($15,167,000,000.00)-1384300000000.00%($13,361,000,000.00)CIF Department (Online Banking) Checking Account: 47-2041-6547Selling, General and Administrative Expenses-36422000000-11744000000-8617000000-7289000000-8145000000-6987000000-6486000000P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership CorporationGeneral and Administrative Expenses-13510000000-4140000000-3341000000-2773000000-2831000000-2756000000-2585000000500 First Avenue ALPHABETSelling and Marketing Expenses-22912000000-7604000000-5276000000-4516000000-5314000000-4231000000-3901000000Pittsburgh, PA 15219-3128 5323 BRADFORD DRResearch and Development Expenses-31562000000-8708000000-7675000000-7485000000-7022000000-6856000000-6875000000NON-NEGOTIABLE DALLAS TX 75235 8313Total Operating Profit/Loss7871400000021885000000193610000001643700000015651000000112130000006383000000ZACHRY, TYLER, WOODNon-Operating Income/Expenses, Total120200000002517000000262400000048460000003038000000214600000018940000004/18/2022 650-2530-000 469-697-4300Total Net Finance Income/Expense1153000000261000000313000000269000000333000000412000000420000000SIGNATURE Time Zone: Eastern Central Mountain PacificNet Interest Income/Expense1153000000261000000313000000269000000333000000412000000420000000Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"NON-NEGOTIABLEPLEASE READ THE IMPORTANT DISCLOSURES BELOWInterest Expense Net of Capitalized Interest-346000000-117000000-76000000-76000000-53000000-48000000-13000000|Security enhanced document.  See back for detailsNO.Interest Income1499000000378000000389000000345000000386000000460000000433000000|[OBJ][OBJ]PNCBANKNet Investment Income12364000000236400000029240000004869000000353000000019570000001696000000|PNC Bank N.A.7170-2188/719Gain/Loss on Investments and Other Financial Instruments12270000000247800000028830000004751000000326200000020150000001842000000|    DATE____________________________________7364Income from Associates, Joint Ventures and Other Participating Interests3340000004900000092000000500000035500000026000000-54000000|Gain/Loss on Foreign Exchange-240000000-163000000-51000000113000000-87000000-84000000-92000000|PAY TO THEIrregular Income/Expenses00000|ORDER OF_______________________________________________________________________________________________________________|***$**22677000000000&00/100cents||Other Irregular Income/Expenses00000|    Security||Other Income/Expense, Non-Operating-1497000000-108000000-613000000-292000000-825000000-223000000-222000000|______________________________________________________________________________________________________________________DOLLARS [OBJ] Features Pretax Income9073400000024402000000219850000002128300000018689000000133590000008277000000|ESTATE OF                                                                                             DetaileProvision for Income Tax-14701000000-3760000000-3460000000-3353000000-3462000000-2112000000-1318000000|                                                                                                     on Back.Net Income from Continuing Operations7603300000020642000000185250000001793000000015227000000112470000006959000000|FOR_____________________________________Net Income after Extraordinary Items and Discontinued Operations7603300000020642000000185250000001793000000015227000000112470000006959000000|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.EXECUTOR/Net Income after Non-Controlling/Minority Interests7603300000020642000000185250000001793000000015227000000112470000006959000000|{}.ADMINISTRATORNet Income Available to Common Stockholders7603300000020642000000185250000001793000000015227000000112470000006959000000|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.PERSONAL/Diluted Net Income Available to Common Stockholders7603300000020642000000185250000001793000000015227000000112470000006959000000|{}.REPRESENTATIVEIncome Statement Supplemental Section|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.TRUSTEE||Reported Normalized and Operating Income/Expense Supplemental Section|Deposited to the account Of xxxxxxxx6547Total Revenue as Reported, Supplemental2.57637E+11753250000006188000000055314000000568980000004617300000038297000000|PLEASE READ THE IMPORTANT DISCLOSURES BELOWTotal Operating Profit/Loss as Reported, Supplemental7871400000021885000000193610000001643700000015651000000112130000006383000000|Reported Effective Tax Rate0.1620.1570.1580.1580.159|FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 CODReported Normalized Income|Reported Normalized Operating Profit|633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053Other Adjustments to Net Income Available to Common Stockholders|PNC Bank PNC Bank Business Tax I.D. Number: 633441725Discontinued Operations|CIF Department (Online Banking) Checking Account: 47-2041-6547Basic EPS113.8831.1527.6926.6322.5416.5510.21|P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership CorporationBasic EPS from Continuing Operations113.8831.1227.6926.6322.4616.5510.21|500 First Avenue ALPHABETBasic EPS from Discontinued Operations|Pittsburgh, PA 15219-3128 5323 BRADFORD DRDiluted EPS112.230.6927.2626.2922.316.410.13GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2021Q2 2021Q1 2021Q4 2020Q3 2020Q2 2020Diluted EPS from Continuing Operations112.230.6727.2626.2922.2316.410.13Gross Profit$146,698,000,000.00 $42,337,000,000.00 $35,653,000,000.00 $31,211,000,000.00 30818000000$25,056,000,000.00 1974400000000.00%Diluted EPS from Discontinued OperationsTotal Revenue as Reported, Supplemental$257,637,000,000.00 $75,325,000,000.00 $61,880,000,000.00 $55,314,000,000.00 56898000000$46,173,000,000.00 3829700000000.00%Basic Weighted Average Shares Outstanding667650000662664000668958000673220000675581000679449000681768000$257,637,000,000.00 $75,325,000,000.00 $61,880,000,000.00 $55,314,000,000.00 56898000000$46,173,000,000.00 3829700000000.00%Diluted Weighted Average Shares Outstanding677674000672493000679612000682071000682969000685851000687024000Other RevenueReported Normalized Diluted EPSCost of Revenue-1.11E+11-32988000000-26227000000($24,103,000,000.00)-26080000000($21,117,000,000.00)-1855300000000.00%Basic EPS113.8831.1527.6926.6322.5416.5510.21Cost of Goods and Services-1.11E+11-32988000000-26227000000-24103000000-26080000000-21117000000-18553000000Diluted EPS112.230.6927.2626.2922.316.410.13Operating Income/Expenses-67984000000-20452000000-16292000000($14,774,000,000.00)($15,167,000,000.00)-1384300000000.00%($13,361,000,000.00)Basic WASO667650000662664000668958000673220000675581000679449000681768000Selling, General and Administrative Expenses-36422000000-11744000000-8617000000-7289000000-8145000000-6987000000-6486000000Diluted WASO677674000672493000679612000682071000682969000685851000687024000General and Administrative Expenses-13510000000-4140000000-3341000000-2773000000-2831000000-2756000000-2585000000Fiscal year end September 28th., 2022. | USDSelling and Marketing Expenses-22912000000-7604000000-5276000000-4516000000-5314000000-4231000000-3901000000Research and Development Expenses-31562000000-8708000000-7675000000-7485000000-7022000000-6856000000-687500000031622,6:39 PMTotal Operating Profit/Loss7871400000021885000000193610000001643700000015651000000112130000006383000000Morningstar.com Intraday Fundamental Portfolio View Print ReportPrintNon-Operating Income/Expenses, Total12020000000251700000026240000004846000000303800000021460000001894000000Total Net Finance Income/Expense11530000002610000003130000002690000003330000004120000004200000003/6/2022 at 6:37 PMNet Interest Income/Expense1153000000261000000313000000269000000333000000412000000420000000Interest Expense Net of Capitalized Interest-346000000-117000000-76000000-76000000-53000000-48000000-13000000Interest Income1499000000378000000389000000345000000386000000460000000433000000GOOGL_income-statement_Quarterly_As_Originally_ReportedQ4 2021Net Investment Income12364000000236400000029240000004869000000353000000019570000001696000000Cash Flow from Operating Activities, Indirect24934000000Q2 2021Q1 2021Q4 2020Gain/Loss on Investments and Other Financial Instruments12270000000247800000028830000004751000000326200000020150000001842000000Net Cash Flow from Continuing Operating Activities, Indirect24934000000374970000003121100000030818000000Income from Associates, Joint Ventures and Other Participating Interests3340000004900000092000000500000035500000026000000-54000000Cash Generated from Operating Activities24934000000218900000001928900000022677000000Gain/Loss on Foreign Exchange-240000000-163000000-51000000113000000-87000000-84000000-92000000Income/Loss before Non-Cash Adjustment20642000000218900000001928900000022677000000Irregular Income/Expenses00000Total Adjustments for Non-Cash Items6517000000185250000001793000000015227000000Other Irregular Income/Expenses00000Depreciation, Amortization and Depletion, Non-Cash Adjustment3439000000423600000025920000005748000000Other Income/Expense, Non-Operating-1497000000-108000000-613000000-292000000-825000000-223000000-222000000Depreciation and Amortization, Non-Cash Adjustment3439000000294500000027530000003725000000Pretax Income9073400000024402000000219850000002128300000018689000000133590000008277000000Depreciation, Non-Cash Adjustment3215000000294500000027530000003725000000Provision for Income Tax-14701000000-3760000000-3460000000-3353000000-3462000000-2112000000-1318000000Amortization, Non-Cash Adjustment224000000273000000025250000003539000000Net Income from Continuing Operations7603300000020642000000185250000001793000000015227000000112470000006959000000Stock-Based Compensation, Non-Cash Adjustment3954000000215000000228000000186000000Net Income after Extraordinary Items and Discontinued Operations7603300000020642000000185250000001793000000015227000000112470000006959000000Taxes, Non-Cash Adjustment1616000000380300000037450000003223000000Net Income after Non-Controlling/Minority Interests7603300000020642000000185250000001793000000015227000000112470000006959000000Investment Income/Loss, Non-Cash Adjustment-247800000037900000011000000001670000000Net Income Available to Common Stockholders7603300000020642000000185250000001793000000015227000000112470000006959000000Gain/Loss on Financial Instruments, Non-Cash Adjustment-2478000000-2883000000-4751000000-3262000000Diluted Net Income Available to Common Stockholders7603300000020642000000185250000001793000000015227000000112470000006959000000Other Non-Cash Items-14000000-2883000000-4751000000-3262000000Income Statement Supplemental SectionChanges in Operating Capital-2225000000-8000000-255000000392000000Reported Normalized and Operating Income/Expense Supplemental SectionChange in Trade and Other Receivables-5819000000-871000000-12330000001702000000Total Revenue as Reported, Supplemental2.58E+11753250000006188000000055314000000568980000004617300000038297000000Change in Trade/Accounts Receivable-5819000000-36610000002794000000-5445000000Total Operating Profit/Loss as Reported, Supplemental7871400000021885000000193610000001643700000015651000000112130000006383000000Change in Other Current Assets-399000000-36610000002794000000-5445000000Reported Effective Tax Rate0.1620.1570.1580.1580.159Change in Payables and Accrued Expenses6994000000-1990000007000000-738000000Reported Normalized IncomeChange in Trade and Other Payables11570000004074000000-49560000006938000000Reported Normalized Operating ProfitChange in Trade/Accounts Payable1157000000-130000000-982000000963000000Other Adjustments to Net Income Available to Common StockholdersChange in Accrued Expenses5837000000-130000000-982000000963000000Discontinued OperationsChange in Deferred Assets/Liabilities3680000004204000000-39740000005975000000Basic EPS113.8831.1527.6926.6322.5416.5510.21Change in Other Operating Capital-3369000000-3000000137000000207000000Basic EPS from Continuing Operations113.8831.1227.6926.6322.4616.5510.21Change in Prepayments and Deposits-1082000000785000000740000000Basic EPS from Discontinued OperationsCash Flow from Investing Activities-11016000000Diluted EPS112.230.6927.2626.2922.316.410.13Cash Flow from Continuing Investing Activities-11016000000-9074000000-5383000000-7281000000Diluted EPS from Continuing Operations112.230.6727.2626.2922.2316.410.13Purchase/Sale and Disposal of Property, Plant and Equipment, Net-6383000000-9074000000-5383000000-7281000000Diluted EPS from Discontinued OperationsPurchase of Property, Plant and Equipment-6383000000-5496000000-5942000000-5479000000Basic Weighted Average Shares Outstanding667650000662664000668958000673220000675581000679449000681768000Sale and Disposal of Property, Plant and Equipment-5496000000-5942000000-5479000000Diluted Weighted Average Shares Outstanding677674000672493000679612000682071000682969000685851000687024000Purchase/Sale of Business, Net-385000000Reported Normalized Diluted EPSPurchase/Acquisition of Business-385000000-308000000-1666000000-370000000Basic EPS113.8831.1527.6926.6322.5416.5510.21Purchase/Sale of Investments, Net-4348000000-308000000-1666000000-370000000Diluted EPS112.230.6927.2626.2922.316.410.13Purchase of Investments-40860000000-32930000002195000000-1375000000Basic WASO667650000662664000668958000673220000675581000679449000681768000Sale of Investments36512000000-24949000000-37072000000-36955000000Diluted WASO677674000672493000679612000682071000682969000685851000687024000Other Investing Cash Flow100000000216560000003926700000035580000000Fiscal year end September 28th., 2022. | USDPurchase/Sale of Other Non-Current Assets, Net2300000030000000-57000000Sales of Other Non-Current Assets31622,6:39 PMCash Flow from Financing Activities-16511000000Morningstar.com Intraday Fundamental Portfolio View Print ReportPrintCash Flow from Continuing Financing Activities-16511000000-15991000000-13606000000-9270000000Issuance of/Payments for Common Stock, Net-13473000000-15991000000-13606000000-92700000003/6/2022 at 6:37 PMPayments for Common Stock13473000000-12796000000-11395000000-7904000000Proceeds from Issuance of Common Stock-12796000000-11395000000-7904000000Issuance of/Repayments for Debt, Net115000000GOOGL_income-statement_Quarterly_As_Originally_ReportedIssuance of/Repayments for Long Term Debt, Net115000000-1042000000-37000000-57000000Cash Flow from Operating Activities, IndirectQ4 2021Q2 2021Q1 2021Q4 2020Proceeds from Issuance of Long Term Debt6250000000-1042000000-37000000-57000000Net Cash Flow from Continuing Operating Activities, Indirect24934000000374970000003121100000030818000000Repayments for Long Term Debt636500000066990000009000000000Cash Generated from Operating Activities24934000000218900000001928900000022677000000Proceeds from Issuance/Exercising of Stock Options/Warrants2923000000-7741000000-937000000-57000000Income/Loss before Non-Cash Adjustment24934000000218900000001928900000022677000000-2453000000-2184000000-1647000000Total Adjustments for Non-Cash Items20642000000185250000001793000000015227000000Depreciation, Amortization and Depletion, Non-Cash Adjustment6517000000423600000025920000005748000000Other Financing Cash FlowDepreciation and Amortization, Non-Cash Adjustment3439000000294500000027530000003725000000Cash and Cash Equivalents, End of PeriodDepreciation, Non-Cash Adjustment3439000000294500000027530000003725000000Change in Cash030000000010000000338000000000)Amortization, Non-Cash Adjustment3215000000273000000025250000003539000000Effect of Exchange Rate Changes20945000000236300000002662200000026465000000Stock-Based Compensation, Non-Cash Adjustment224000000215000000228000000186000000Cash and Cash Equivalents, Beginning of Period25930000000-31750000003000000006126000000Taxes, Non-Cash Adjustment3954000000380300000037450000003223000000Cash Flow Supplemental Section181000000000)183000000-143000000210000000Investment Income/Loss, Non-Cash Adjustment161600000037900000011000000001670000000Change in Cash as Reported, Supplemental2.3719E+132.6622E+132.6465E+132.0129E+13Gain/Loss on Financial Instruments, Non-Cash Adjustment-2478000000-2883000000-4751000000-3262000000Income Tax Paid, Supplemental2774000000-29920000006336000000Other Non-Cash Items-2478000000-2883000000-4751000000-3262000000Cash and Cash Equivalents, Beginning of Period13412000000-4990000000Changes in Operating Capital-14000000-8000000-255000000392000000Change in Trade and Other Receivables-2225000000-871000000-1233000000170200000012 Months EndedChange in Trade/Accounts Receivable-5819000000-36610000002794000000-5445000000_________________________________________________________Change in Other Current Assets-5819000000-36610000002794000000-5445000000Q4 2019Change in Payables and Accrued Expenses-399000000-1990000007000000-738000000Income StatementChange in Trade and Other Payables69940000004074000000-49560000006938000000USD in "000'"sChange in Trade/Accounts Payable1157000000-130000000-982000000963000000Repayments for Long Term DebtDec. 31, 2019Change in Accrued Expenses1157000000-130000000-982000000963000000Costs and expenses:Change in Deferred Assets/Liabilities58370000004204000000-39740000005975000000Cost of revenues161857Change in Other Operating Capital368000000-3000000137000000207000000Research and developmentChange in Prepayments and Deposits-3369000000-1082000000785000000740000000Sales and marketing71896Cash Flow from Investing ActivitiesGeneral and administrative26018Cash Flow from Continuing Investing Activities-11016000000-9074000000-5383000000-7281000000European Commission fines18464Purchase/Sale and Disposal of Property, Plant and Equipment, Net-11016000000-9074000000-5383000000-7281000000Total costs and expenses9551Purchase of Property, Plant and Equipment-6383000000-5496000000-5942000000-5479000000Income from operations1697Sale and Disposal of Property, Plant and Equipment-6383000000-5496000000-5942000000-5479000000Other income (expense), net127626Purchase/Sale of Business, NetIncome before income taxes34231Purchase/Acquisition of Business-385000000-308000000-1666000000-370000000Provision for income taxes5394Purchase/Sale of Investments, Net-385000000-308000000-1666000000-370000000Net income19289000000Purchase of Investments-4348000000-32930000002195000000-1375000000*include interest paid, capital obligation, and underweighting19289000000Sale of Investments-40860000000-24949000000-37072000000-3695500000019289000000Other Investing Cash Flow36512000000216560000003926700000035580000000Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Purchase/Sale of Other Non-Current Assets, Net1000000002300000030000000-57000000Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)Sales of Other Non-Current AssetsCash Flow from Financing ActivitiesCash Flow from Continuing Financing Activities-16511000000-15991000000-13606000000-9270000000For Paperwork Reduction Act Notice, see the seperate Instructions.Issuance of/Payments for Common Stock, Net-16511000000-15991000000-13606000000-9270000000Payments for Common Stock-13473000000-12796000000-11395000000-7904000000Proceeds from Issuance of Common Stock13473000000-12796000000-11395000000-7904000000Issuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, Net115000000-1042000000-37000000-57000000Proceeds from Issuance of Long Term Debt115000000-1042000000-37000000-57000000Repayments for Long Term Debt625000000066990000009000000000Proceeds from Issuance/Exercising of Stock Options/Warrants6365000000-7741000000-937000000-570000002923000000-2453000000-2184000000-1647000000Other Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in Cash030000000010000000338000000000)Effect of Exchange Rate Changes20945000000236300000002662200000026465000000Cash and Cash Equivalents, Beginning of Period25930000000-31750000003000000006126000000Cash Flow Supplemental Section181000000000)183000000-143000000210000000Change in Cash as Reported, Supplemental2.37E+132.66E+132.65E+132.01E+13Income Tax Paid, Supplemental2774000000-29920000006336000000Cash and Cash Equivalents, Beginning of Period13412000000-499000000012 Months Ended_________________________________________________________Q4 2019Income StatementUSD in "000'"sRepayments for Long Term DebtDec. 31, 2019Costs and expenses:Cost of revenues161857Research and developmentSales and marketing71896General and administrative26018European Commission fines18464Total costs and expenses9551Income from operations1697Other income (expense), net127626Income before income taxes34231Provision for income taxes5394Net income19289000000*include interest paid, capital obligation, and underweighting1928900000019289000000Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)For Paperwork Reduction Act Notice, see the seperate Instructions.Footer© 2022 GitHub, Inc.Footer navigationTermsPrivacySecurityStatusDocsContact GitHubPricingAPITrainingBlogAbout																										
+user/bin/bash'@frost'S'V8/nazt/intuit/util/install/content/config.yml'"''																										
+package.yam/API/adk.apk/sdk.S.E/Jdk.J.C.RUNETIME.ENVIROMENT'@sun.java.org'@py-flask.org'@rake.i'@cake.io'@bitore.net/API/ARM64'""'																										
+install :pkg.js :																										
+:Build ::																										
+PUBLISH ::LAUNCH ::RELEASE ::DEPLOYEE ::repositories'@zakwarlord7/zakwarlord7/README.md/README.md :																										
+																										
+																										Get answers to your investing questions from the SEC's website dedicated to retail investors :						
 941							
 ALPHABET							
 1600 AMPITHEATRE PARKWAY							Period Ending: 2003-01-19 :

- "[About {% data variables.product.prodname_oauth_app %} access restrictions](/articles/about-oauth-app-access-restrictions)"
- "[Authorizing GitHub Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[{% data variables.product.prodname_marketplace %} support](/articles/github-marketplace-support)"

{% endif %}
