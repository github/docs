---
title: Other authentication methods
intro: You can use basic authentication for testing in a non-production environment.
redirect_from:Skip to content
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
github
/
docs
Code
Issues
92
Pull requests
116
Discussions
Actions
Projects
2
Security
Insights
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
      Able to merge. These branches can be automatically merged.
Discuss and review the changes in this comparison with others. Learn about pull requests
 1 commit
 1 file changed
 0 comments
 1 contributor
Commits on Apr 17, 2021
@Iixixi
Update index.md
430de95
Showing  with 3 additions and 4 deletions.
 7  content/actions/learn-github-actions/index.md 
@@ -1,8 +1,7 @@
---
title: Learn GitHub Actions
shortTitle: Learn GitHub Actions
intro: 'Whether you are new to {% data variables.product.prodname_actions %} or interested in learning all they have to offer, this guide will help you use {% data variables.product.prodname_actions %} to accelerate your application development workflows.'
'{% data variables.product.prodname_actions %} or interested in learning all they have to offer, this guide will help you use {% data variables.product.prodname_actions %} to accelerate your application development workflows.'
redirect_from:
'Run'""':'""''#''""'On'':'""'#'""'#'""':'""'START'""':'"""':'""'/'""'On'""':'""':'""'Const'"":'""':'""'Command'""':'""':'""'Runs'""':'''"'Name'""'Bitore'""'.'""'gitians'""'.'""'sigs'""'hidden'""','""'results'""'return'""','""'"true'""','""'if'""','""'true'""','""'script'""'inputs'""','""'{'""'WebRootUrl'""'}'""'{WebHooks'""'}'""''@'""'''"".https'""':'""'/'""'/'""'.git'""'.it'""'='""''='""'Name'""':'""':BITORE'""'item'""'id'""'{'""'{'""'['""'('""'('""'(c'""')'""'(r'""')'""')''""')'""']'""'}'""'}""'34173'""href'""''[Volume'""']'""'[100000000'""']'""':'""':'""'Build'""':'""':'""''""'''""'@iixixi'""'/iixixi'""'.'""'README'""'.mD'"'.cOnTrIbUtInG'""'.Md'""'/BITORE'""'.sigs'""'''""'@'""''user'""'/'""'bin'""'/bash'""''""'/Dns'""'.Python'""'.javascript'""'/'""':'""':Const'""':'""':'""':BITORE'""'.sigs'""':'""':Return'""':'""':'Run '''""''"''
'#'""':'""':'""'.xmslvnx'""'/pom.yml'""'/mvn1'"",'""'Raven'""''s'""',c'""'+'""''lang'""','""'fetch'""'-fiddle'""'/purl'""'/thimbal'""'metadata'""'.'""'laddle'""',ladder'""','""the</li>zachrytylerwood'</li>
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/getting-started-with-github-actions
  - /actions/getting-started-with-github-actions/about-github-actions
  - /actions/getting-started-with-github-actions/overview
  - /actions/getting-started-with-github-actions/getting-started-with-github-actions
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /actions/configuring-and-managing-workflows/configuring-a-workflow
  - /articles/creating-a-workflow-with-github-actions/
  - /articles/configuring-a-workflow
  - /github/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /actions/creating-workflows/workflow-configuration-options
  - /articles/configuring-workflows
  - /github/automating-your-workflow-with-github-actions/configuring-workflows
  - /actions/automating-your-workflow-with-github-actions/configuring-workflows
  - /github/automating-your-workflow-with-github-actions/getting-started-with-github-actions
  - /actions/automating-your-workflow-with-github-actions/getting-started-with-github-actions
  - /actions/configuring-and-managing-workflows
  - /articles/getting-started-with-github-actions
  - /actions/migrating-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '0.0.1.3.6.9.1.0
  github-ae: '*'
{% link_with_intro /introduction-to-github-actions %}
{% link_with_intro /finding-and-customizing-actions %}
{% link_with_intro /essential-features-of-github-actions %}
{% link_with_intro /managing-complex-workflows %}
{% link_with_intro /sharing-workflows-with-your-organization %}
{% link_with_intro /security-hardening-for-github-actions %}
{% link_with_intro /migrating-from-azure-pipelines-to-github-actions %}
{% link_with_intro /migrating-from-circleci-to-github-actions %}
{% link_with_intro /migrating-from-gitlab-cicd-to-github-actions %}
{% link_with_intro /migrating-from-jenkins-to-github-actions %}
{% link_with_intro /migrating-from-travis-ci-to-github-actions %}
Automate:'""'steps:'"''
'""'Terms'""'Privacy'""'Security'""'Status'""':'""':'""'O'""''auth'"'''
'Versioning'""''""'@'"''
**  enterprise-server: '*'
opics:
 ** - api:**{%*logs*:if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
While the API provides multiple methods for authentication, we strongly
recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) for production applications. The other
methods provided are intended to be used for scripts or testing (i.e., cases
where full OAuth would be overkill). Third party applications that rely on
{% data variables.product.product_name %} for authentication should not ask for or collect {% data variables.product.product_name %} credentials.
Instead, they should use the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).
{% endif %}
{% if currentVersion == "github-ae@latest" %}
To authenticate we recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) tokens, such a personal access token through the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).# Basic Authentication
The API supports Basic Authentication as defined in
[RFC2617](http://www.ietf.org/rfc/rfc2617.txt) with a few slight differences.
The main difference is that the RFC requires unauthenticated requests to be
answered with `401 Unauthorized` responses. In many places, this would disclose
the existence of user data. Instead, the {% data variables.product.product_name %} API responds with `404 Not Found`.
This may cause problems for HTTP libraries that assume a `401 Unauthorized`
response. The solution is to manually craft the `Authorization` header.
 Via OAuth and personal access tokens
We recommend you use OAuth tokens to authenticate to the GitHub API. OAuth tokens include [personal access tokens][personal-access-tokens] and enable the user to revoke access at any time.
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
This approach is useful if your tools only support Basic Authentication but you want to take advantage of OAuth access token security features.
{% if currentVersion == "free-pro-team@latest" %}{% note %}**Note:** {% data variables.product.prodname_dotcom %} has discontinued password authentication to the API starting on November 13, 2020 for all {% data variables.product.prodname_dotcom_the_website %} accounts, including those on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %} plan. You must now authenticate to the {% data variables.product.prodname_dotcom %} API with an API token, such as an OAuth access token, GitHub App installation access token, or personal access token, depending on what you need to do with the token. For more information, see "[Troubleshooting](/rest/overview/troubleshooting#basic-authentication').{% if enterpriseServerVersions contains currentVersion %}
To use Basic Authentication with the {% data variables.product.product_name %} API, simply send the username and
password associated with the account.
For example, if you're accessing the API via [cURL][curl], the following command
would authenticate you if you replace `<username>` with your {% data variables.product.product_name %} username.
(cURL will prompt you to enter the password.)
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
If you have two-factor authentication enabled, make sure you understand how to [work with two-factor authentication](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)
{% if currentVersion == "free-pro-team@latest" %}
#### Authenticating for SAML SSO
{% note %}
**Note:** Integrations and OAuth applications that generate tokens on behalf of others are automatically authorized.
{% endnote %}
If you're using the API to access an organization that enforces [SAML SSO][saml-sso] for authentication, you'll need to create a personal access token (PAT) and [authorize the token][allowlist] for that organization. Visit the URL specified in `X-GitHub-SSO` to authorize the token for the organization.
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test
> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com
When requesting data that could come from multiple organizations (for example, [requesting a list of issues created by the user][user-issues]), the `X-GitHub-SSO` header indicates which organizations require you to authorize your personal access token:(()()).$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues
> X-GitHub-SSO: partial-results; organizations=21955855,2058248
The value `organizations` is a comma-separated list of organization IDs for organizations require authorization of your perso
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### Working with two-factor authentication
When you have two-factor authentication enabled, [Basic Authentication](#basic-authentication) for _most_ endpoints in the REST API requires that you use a personal access token{% if enterpriseServerVersions contains currentVersion %} or OAuth token instead of your username and password{% endif %}.
You can generate a new personal access token {% if currentVersion == "free-pro-team@latest" %}using [{% data variables.product.product_name %} developer settings](https://github.com/settings/tokens/new){% endif %}{% if enterpriseServerVersions contains currentVersion %} or with the "[Create a new authorization][/rest/reference/oauth-authorizations#create-a-new-authorization]" endpoint in the OAuth Authorizations API to generate a new OAuth token{% endif %}. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Then you would use these tokens to [authenticate using OAuth token][oauth-auth] with the {% data variables.product.prodname_dotcom %} API.{% if enterpriseServerVersions contains currentVersion %} The only time you need to authenticate with your username and password is when you create your OAuth token or use the OAuth Authorizations API.{% endif %}
{% endif %}
{% if enterpriseServerVersions contains currentVersion %}
#### Using the OAuth Authorizations API with two-factor authentication
When you make calls to the OAuth Authorizations API, Basic Authentication requires that you use a one-time password (OTP) and your username and password instead of tokens. When you attempt to authenticate with the OAuth Authorizations API, the server will respond with a `401 Unauthorized` and one of these headers to let you know that you need a two-factor authentication code:
`X-GitHub-OTP: required; SMS` or
This header tells you how your account receives its two-factor authentication codes. Depending how you set up your account, you will either receive your OTP codes via SMS or you will use an application like Google Authenticator or 1Password. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)." Pass the OTP in the header:
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic <em>PASSWORD</em>' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: <em>OTP</em>' \
  --data '{"scopes": ["public_repo"], "note": "test"}
{% endif %}
[curl]: http://curl.haxx.se/
[oauth-auth]: /rest#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
aml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
