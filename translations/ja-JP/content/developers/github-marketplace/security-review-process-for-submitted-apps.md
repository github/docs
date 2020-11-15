---
title: サブミットされたアプリケーションに対するセキュリティレビューのプロセス
intro: 'GitHubのセキュリティチームは、{% data variables.product.prodname_marketplace %}にサブミットされたすべてのアプリケーションをレビューし、それらがセキュリティの要件を満たしていることを確認します。 このレビューのプロセスに備えるために、以下のベストプラクティスに従ってください。'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
versions:
  free-pro-team: '*'
---



承認のためにアプリケーションをサブミットすると、GitHubのセキュリティチームはそのアプリケーションと全体的なセキュリティプログラムに関するセキュリティアンケートへの回答を求めます。 レビューの一環として、回答をサポートするためのドキュメンテーションを提供することもできます。 {% data variables.product.prodname_marketplace %}が承認される前に、[インシデントレスポンス計画](#incident-response-plan)と[脆弱性管理ワークフロー](#vulnerability-management-workflow)という2つの必須ドキュメントを提出しなければなりません。


### セキュリティのベストプラクティス

セキュリティレビューを成功させ、セキュアなユーザ体験を提供するために、以下のベストプラクティスに従ってください。

#### 認可、認証、アクセスコントロール

OAuth Appよりは、GitHub Appをサブミットすることをおすすめします。 {% data reusables.marketplace.github_apps_preferred %}. 詳細については、「[GitHub AppsとOAuth Appsの違い](/apps/differences-between-apps/)」を参照してください。
- アプリケーションは「[最小の権限の原則](https://en.wikipedia.org/wiki/Principle_of_least_privilege)」を用いなければならず、要求するOAuthのスコープやGitHub Appの権限は、意図された機能を実行するのにアプリケーションが必要とするものだけにすべきです。
- アプリケーションは、サポート担当者にメールや連絡をすることなく、顧客が自分のアカウントを削除する方法を提供しなければなりません。
- アプリケーションは、異なる実装間でトークンを共有してはなりません。 たとえば、デスクトップのアプリケーションはWebベースのアプリケーションとは別のトークンを持つべきです。 個々のトークンを使うことで、それぞれのアプリケーションはGitHubのリソースに必要なアクセスを個別にリクエストできます。
- ユーザの種類に応じて求められる機能によって、様々なユーザのロールを持たせてアプリケーションを設計してください。 たとえば、標準的なユーザは管理機能を利用できるべきではなく、支払いマネージャーはリポジトリのコードにプッシュアクセスできるべきではありません。
- アプリケーションは、SaaSサービスを管理するためのメールやデータベースサービスのようなサービスアカウントを共有するべきではありません。
- アプリケーションで使用されるすべてのサービスは、固有のログインとパスワードクレデンシャルを持たなければなりません。
- プロダクションのホスティングインフラストラクチャへの管理権限でのアクセスは、管理業務を持つエンジニアや従業員にのみ与えられるべきです。
- Apps cannot use personal access tokens to authenticate and must authenticate as an [OAuth App](/apps/about-apps/#about-oauth-apps) or [GitHub App](/apps/about-apps/#about-github-apps):
  - OAuth Appsは、[OAuthトークン](/apps/building-oauth-apps/authorizing-oauth-apps/)を使って認証を受けなければなりません。
  - GitHub Apps must authenticate using either a [JSON Web Token (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/), or [installation access token](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

#### Data protection

- Apps must encrypt data transferred over the public internet using HTTPS, with a valid TLS certificate, or SSH for Git.
- Apps must store client ID and client secret keys securely. We recommend storing them as [environmental variables](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Apps must delete all GitHub user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with GitHub.
- Apps cannot require the user to provide their GitHub password.
- Apps should encrypt tokens, client IDs, and client secrets.

#### Logging and monitoring

- Apps must have logging and monitoring capabilities. App logs must be retained for at least 30 days and archived for at least one year. A security log should include:
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
