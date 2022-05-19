---
title: Deploying GitHub Advanced Security in your enterprise
intro: 'Learn how to plan, prepare, and implement a phased approach for rolling out {% data variables.product.prodname_GH_advanced_security %} (GHAS) in your enterprise.'
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

## Overview of the deployment process

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

For a high-level summary of these different phases, see "[Overview of {% data variables.product.prodname_GH_advanced_security %} Deployment](/admin/advanced-security/overview-of-github-advanced-security-deployment)."

Before starting your deployment, we recommend you review the prerequisites for installing GHAS and best practices for GHAS deployment in "[Overview of {% data variables.product.prodname_GH_advanced_security %} Deployment](/admin/advanced-security/overview-of-github-advanced-security-deployment)."

## {% octicon "milestone" aria-label="The milestone icon" %} Phase 0: Planning & kickoff

{% note %}

{% octicon "clock" aria-label="Clock" %} **Estimated timing:** We estimate that phase 0 may last roughly between 1-4 weeks. This range can vary depending on your release needs and any necessary approvals your company may need on the deployment plan.

{% endnote %}

The goal of the planning and kickoff phase is to ensure that you have all of your people, processes, and technologies set up and ready for implementing GHAS.

To help you reach buy-in from the executive sponsor, we recommend preparing and aligning on a rollout plan and goals before releasing GHAS in your enterprise.

As a part of a phased rollout strategy, we recommend that you identify high-impact and critical teams or applications that should be targeted to join GHAS before the rest of your enterprise.

If a phased rollout doesn't work for your enterprise, you can skip to the [pilot project phase](#--phase-1-pilot-projects).

If you’re working with {% data variables.product.prodname_professional_services %}, during this phase you will also establish a plan for how your teams will work together throughout the rollout and implementation process. The {% data variables.product.prodname_professional_services_team %} team can support you with the creation of the phased rollout plan and goals as needed.

### Step 1: Kickoff meeting with {% data variables.product.prodname_professional_services %} (optional)

If you signed up for {% data variables.product.prodname_professional_services %}, you’ll begin the rollout and implementation process by meeting with your Services representative.

If you haven't signed up for {% data variables.product.prodname_professional_services %}, you can skip to the next step.

The goal of this meeting is to align the two teams on the necessary information to begin crafting a rollout and implementation plan that will work best for your company. In preparation for this meeting, we have created a survey that will help us better prepare for the discussion. Your Services representative will send you this survey.

To help you prepare for this initial meeting, review these topics.

-  Aligning on how your company and {% data variables.product.prodname_professional_services %} will work best together
  - Setting expectations on how to best utilize service hours/days purchased
  - Communications plans/frequency of meetings
  - Roles and responsibilities
- Review of how GHAS works within the Software Development Life cycle (SDLC). Your {% data variables.product.prodname_professional_services %} representative will explain how GHAS works.
- Review of best practices for deploying GHAS. This is offered as a refresher if your team finds it valuable or if your enterprise did not participate in the Proof of Concept (POC) exercise. This review includes a discussion of your existing Application Security program and its level of maturity, against something like the DevSecOps maturity model.
-  Alignment on next steps for your GHAS deployment. Your {% data variables.product.prodname_professional_services %} representative will outline your next steps and the support you can expect from your partnership.

To help you plan your rollout strategy, you can also expect to discuss these questions:
  - How many teams will be enabled?
  - What is the anatomy of the teams’ repositories? (Tech stack, current tooling, etc.)
    - Some of this might have already been covered during the Proof of Concept exercise if your company participated. If not, this is a crucial time to discuss this.
   - What level of adoption do we expect to be organic, assisted, or inorganic?
   - What does assisted adoption look like from a resourcing and documentation perspective?
   - How will you manage inorganic adoption down the line? (For example, using policy enforcement or centrally managed workflows.)

### Step 2: Internal kickoff at your company

Whether or not your company chooses to work with {% data variables.product.prodname_professional_services %}, we always recommend you hold your own kickoff meeting to align your own team(s).

During this kickoff meeting, it's important to ensure there is a clear understanding of goals, expectations, and that a plan is in place for how to move forward with your rollout and implementation.

In addition, this is a good time to begin thinking about training and preparations for your team to ensure they have the right tools and expertise to support the rollout and implementation of GHAS.

#### Topics for your internal kickoff meeting

We recommend you cover these topics in your internal kickoff meeting at your company if you haven't already covered these with the same group in your kickoff meeting with {% data variables.product.prodname_professional_services %}.

- What are your business success metrics, how do you plan to measure and report on those measures?
  - If these have not been defined, please define them. If they have been defined, communicate them and talk about how you plan to provide data-driven progress updates.
- Review of how GHAS works within the SDLC (Software Development Life cycle) and how this is expected to work for your company.
- Review of best practices if your company did not participate in the Proof of Concept exercise (or a refresher if your team finds value in this review)
  - How does this compare/contrast with your existing Application Security Program?
- Discuss and agree how your internal team will work best together throughout rollout and implementation.
  - Align on your communications plans and frequency of meetings for your internal team
  - Review tasks for rollout and implementation completion, defining roles and responsibilities. We have outlined the majority of the tasks in this article, but there may be additional tasks your company requires we have not included.
  - Consider establishing a “Champions Program” for scaled enablement
  - Begin discussing timing for the completion of tasks
- Begin working on ideal rollout approaches that will work best for your company. This will include understanding a few important items:
  - How many teams will be enabled? Some of this might have already been covered during the POC (Proof of Concept) exercise if your company participated. If not, this is a crucial time to discuss this.
  - Of the critical applications identified for the initial rollout, how many are built on a technology supported by GHAS?
  - How much organizational preparation is needed? To learn more, see "[Phase 2](#--phase-2-organizational-buy-in--rollout-preparation)."

### Step 3: Prepare your rollout & implementation plan and goals

Before you can move forward with pilot project(s) for the first phase of the rollout, it’s crucial to ensure a rollout plan and business goals have been established for how your company plans to proceed.

If you’re working with {% data variables.product.prodname_professional_services %}, they can play a significant role in the creation of this plan.

If you’re working independently, this section outlines some things to ensure are included in your plan as you prepare to move forward.

Plans for process changes (if needed) and training for team members as needed:
  - Documented team assignments for roles and responsibilities. For more information on the permissions required for each feature, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)."
  - Documented plan of tasks and timelines/timeframes where possible. This should include infrastructure changes, process changes/training, and all subsequent phases of enablement of GHAS, allowing for timeframes for remediations and configuration adjustments as needed. For more information, see "[Phase 1: Pilot projects(s)](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects)" below.
  - Prioritized plan for which projects/teams will have GHAS enabled first, and subsequent plans for which projects/teams will come in following phases
  - Success metrics based on business goals. This will be a crucial reference point following the Pilot Project(s) to gain buy-in for the full rollout.

{% note %}

**Note:** To ensure awareness, buy-in, and adoption comes from all groups in your company, it's important to set realistic expectations around the rollout timing and impact on your company's infrastructure, processes, and general day-to-day development workflows. For a smoother and more successful rollout, ensure your security and development teams understand the impact of GHAS.

{% endnote %}

{% ifversion ghes %}

For {% data variables.product.prodname_ghe_server %} customers, to help ensure your instance can support the rollout and implementation of GHAS, review the following:

- While upgrading to GHES 3.0 is not required, you must upgrade to GHES 3.0 or higher to take advantage of feature combinations such as code scanning and {% data variables.product.prodname_actions %}. 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)」を参照してください。

- High Availability 設定では、完全に冗長なセカンダリの {% data variables.product.prodname_ghe_server %} アプライアンスは、すべての主要なデータストアのレプリケーションによってプライマリアプライアンスとの同期を保ちます。 For more information on setting up high availability, see "[Configuring High Availability](/admin/enterprise-management/configuring-high-availability)."

- To help support any discussions regarding potential changes to your company's set up, you can review the {% data variables.product.prodname_ghe_server %} system overview. 詳しい情報については「[システムの概要](/admin/overview/system-overview)」を参照してください。

{% endif %}

### Step 4: Establish a baseline of organizational insights

As your company prepares to begin your pilot project(s), it’s crucial to ensure that you have set a baseline for where your enterprise is today and have defined clear success metrics to measure your pilot project(s) progress against.

There are likely key business goals your company has that will need to be measured against, but there are other metrics we can identify to help gauge your pilot’s success.

As a starting point, some of these metrics might include:
  - The mean time to remediation for GHAS vulnerabilities versus the previous tooling and practices the pilot project(s) / team(s) utilized.
  - The code scanning integration's findings for the top X most critical applications.
  - The number of applications that have SAST (Static application security testing) integrated versus before the engagement.

If you participated in the POC exercise prior to purchasing GHAS, these objectives might look familiar. This success criteria includes several objectives for the following high-level roles:
  - Implementation & Administration teams
  - Security / CISO (Chief Information Security Officer)
  - Application Development Teams

If you’d like to take things a step further, you can look at utilizing OWASP’s DevSecOps Maturity Model (DSOMM) to work towards reaching a Level 1 maturity. There are four main evaluation criteria in DSOMM:

- **Static depth:** How comprehensive is the static code scan that you’re performing within the AppSec CI pipeline
- **Dynamic depth:** How comprehensive is the dynamic scan that is being run within the AppSec CI pipeline
- **Intensity:** Your schedule frequency for the security scans running in AppSec CI pipeline
- **Consolidation:** Your remediation workflow for handling findings and process completeness

To learn more about this approach and how to implement it in GHAS, you can download our white paper "[Achieving DevSecOps Maturity with GitHub](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/)."

Based on your wider company’s goals and current levels of DevSecOps maturity, we can help you determine how to best measure your pilot’s progress and success.

## {% octicon "milestone" aria-label="The milestone icon" %}  Phase 1: Pilot project(s)

{% note %}

{% octicon "clock" aria-label="Clock" %} **Estimated timing:** We estimate that phase 1 may last roughly between 2 weeks to 3+ months. This range can vary largely depending on your company’s infrastructure or systems complexity, internal processes to manage/approve these changes, as well as if larger organizational process changes are needed to move forward with GHAS.

{% endnote %}

To begin enabling GHAS across your company, we recommend beginning with a few high-impact projects or teams to pilot an initial rollout. This will allow an initial group within your company to get familiar with GHAS and build a solid foundation on GHAS before rolling out to the remainder of your company.

Before you start your pilot project(s), we recommend that you schedule some checkpoint meetings for your team(s), such as an initial meeting, midpoint review, and a wrap-up session when the pilot is complete. These checkpoint meetings will help you all make adjustments as needed and ensure your team(s) are prepared and supported to complete the pilot successfully.

These steps will help you enable GHAS on your enterprise, begin using its features, and review your results.

If you’re working with {% data variables.product.prodname_professional_services %}, they can provide additional assistance through this process through onboarding sessions, GHAS workshops, and troubleshooting as needed.

### Step 1: GHAS set-up & installation

{% ifversion ghes %}

If you haven't already enabled GHAS for your {% data variables.product.prodname_ghe_server %} instance, see "[Enabling GitHub Advanced Security for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

You need to enable GHAS for each pilot project, either by enabling the GHAS feature for each repository or for all repositories in any organizations taking part in the project. For more information, see "[Managing security and analysis settings for your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"

The vast majority of GHAS set-up and installation is centered around enabling and configuring code scanning on your enterprise and in your repositories.

Code scanning allows you to analyze code in a {% data variables.product.prodname_dotcom %} repository to find security vulnerabilities and coding errors. Code scanning can be used to find, triage, and prioritize fixes for existing problems in your code, as well as help prevent developers from introducing new problems that may otherwise reach production. 詳しい情報については、「[コードスキャニングについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

### Step 2: Set up {% data variables.product.prodname_code_scanning_capc %}

{% ifversion ghes %}

To enable {% data variables.product.prodname_code_scanning %} on your {% data variables.product.prodname_ghe_server %} instance, see "[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

{% endif %}

To set up code scanning, you must decide whether you'll run code scanning with [{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning) or your own [third-party CI system](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning).

#### Using {% data variables.product.prodname_actions %} for {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

To set up code scanning with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}, you'll need to provision one or more self-hosted {% data variables.product.prodname_actions %} runners in your environment. For more information, see "[Setting up a self-hosted runner](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions)."

{% endif %}

For {% data variables.product.prodname_ghe_cloud %}, you can start to create a {% data variables.product.prodname_actions %} workflow using the [CodeQL action](https://github.com/github/codeql-action/) to run code scanning on a repository. {% data variables.product.prodname_code_scanning_capc %} uses [GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners) by default, but this can be customized if you plan to host your own runner with your own hardware specifications. 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners)」を参照してください。

For more information about {% data variables.product.prodname_actions %}, see:
  - "[Learn GitHub Actions](/actions/learn-github-actions)"
  - "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions)"
  - [ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows)
  - "[Filter Pattern Cheat Sheet](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

#### Using a third-party CI system with the CodeQL CLI for {% data variables.product.prodname_code_scanning %}

If you’re not using {% data variables.product.prodname_actions %} and have your own continuous integration system, you can use the CodeQL CLI to perform CodeQL code scanning in a third-party CI system.

詳しい情報については、以下を参照してください。
  - "[About CodeQL code scanning in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)"

### Step 3: Enable {% data variables.product.prodname_code_scanning_capc %} in repositories

If you’re using a phased approach to roll out GHAS, we recommend enabling {% data variables.product.prodname_code_scanning %} on a repository-by-repository basis as part of your rollout plan. For more information, see "[Setting up code scanning for a repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)."

If you’re not planning on a phased rollout approach and want to enable code scanning for many repositories, you may want to script the process.

For an example of a script that opens pull requests to add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository for an example using PowerShell, or [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) for teams who do not have PowerShell and instead would like to use NodeJS.

### Step 4: Run code scans and review your results

With code scanning enabled in the necessary repositories, you're ready to help your development team(s) understand how to run code scans and reports, view reports, and process results.

#### {% data variables.product.prodname_code_scanning_capc %}

With code scanning, you can find vulnerabilities and errors in your project's code on GitHub, as well as view, triage, understand, and resolve the related {% data variables.product.prodname_code_scanning %} alerts.

When code scanning identifies a problem in a pull request, you can review the highlighted code and resolve the alert. 詳しい情報については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

If you have write permission to a repository you can manage code scanning alerts for that repository. With write permission to a repository, {% if delete-code-scanning-alerts %}you can view, fix, dismiss, or delete alerts {% else %}you can view, fix, or dismiss alerts{% endif %} for potential vulnerabilities or errors in your repository's code. 詳しい情報については、「[リポジトリの Code scanningアラートを管理する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)」を参照してください。

#### Generate reports of {% data variables.product.prodname_code_scanning %} alerts

If you’d like to create a report of your code scanning alerts, you can use the {% data variables.product.prodname_code_scanning_capc %} API. 詳しい情報については、「[{% data variables.product.prodname_code_scanning_capc %} API](/rest/reference/code-scanning)」を参照してください。

For an example of how to use the {% data variables.product.prodname_code_scanning_capc %} API, see the [`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample) repository.

### Step 5: Configure {% data variables.product.prodname_code_scanning_capc %} to fine tune your results

When running initial code scans, you may find that no results are found or that an unusual number of results are returned. You may want to adjust what is flagged in future scans.

詳しい情報については、「[コードスキャンを設定する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)」を参照してください。

If your company wants to use other third-party code analysis tools with GitHub code scanning, you can use actions to run those tools within GitHub. Alternatively, you can upload results, generated by third-party tools as SARIF files, to code scanning. For more information, see "[Integrating with code scanning](/code-security/code-scanning/integrating-with-code-scanning)."

### Step 6: Set up secret scanning

GitHub scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.

{% ifversion ghes %}

To enable secret scanning for your {% data variables.product.prodname_ghe_server %} instance, see "[Configuring secret scanning for your appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)."

{% endif %}

You need to enable secret scanning for each pilot project, either by enabling the feature for each repository or for all repositories in any organizations taking part in the project. For more information, see "[Managing security and analysis settings for your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"

To learn how to view and close alerts for secrets checked into your repository, see "[Managing alerts from secret scanning](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

### Step 7: Set up dependency management

GitHub helps you avoid using third-party software that contains known vulnerabilities. We provide the following tools for removing and avoiding vulnerable dependencies.

| Dependency Management Tool                     | 説明                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dependabot Alerts                              | You can track your repository's dependencies and receive Dependabot alerts when your enterprise detects vulnerable dependencies. 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)」を参照してください。                                                  |
| 依存関係グラフ                                        | 依存関係グラフは、リポジトリに保存されているマニフェストファイルおよびロックファイルのサマリーです。 コードベースが依存するエコシステムとパッケージ（依存関係）、およびプロジェクトに依存するリポジトリとパッケージ（依存関係）が表示されます。 詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。 |{% ifversion ghes > 3.1 or ghec %}
| 依存関係のレビュー                                      | プルリクエストに依存関係への変更が含まれている場合は、変更内容の概要と、依存関係に既知の脆弱性があるかどうかを確認できます。 For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" or  "[Reviewing Dependency Changes in a Pull Request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)." |{% endif %} {% ifversion ghec or ghes > 3.2 %}
| Dependabot Security Updates                    | Dependabot can fix vulnerable dependencies for you by raising pull requests with security updates. For more information, see "[About Dependabot security updates](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."                                                                                                              |
| Dependabot Version Updates                     | Dependabot can be used to keep the packages you use updated to the latest versions. 詳しい情報については、「[ Dependabot のバージョン更新について](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)」を参照してください。 | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### Step 8: Establish a remediation process

Once your team(s) have been able to run scans, identify vulnerabilities and dependencies, and can consume the results of each security feature, the next step is to ensure that they can remediate the vulnerabilities identified within their normal development processes without involving your security team.

This means that the development teams understand how to utilize the GHAS features throughout the development process, can run scans, read reports, consume the results, and remediate vulnerabilities within their normal development workflows, without having to have a separate security phase at the end of development, or have a need to involve your security team to understand reports/results.

### Step 9: Set up custom analysis if needed

Custom analysis is an optional deeper use of code scanning when custom CodeQL queries are needed beyond the available default (and community) set of queries. The need for custom queries is rare.

Custom queries are used to identify custom security alerts or help developers follow coding standards by detecting certain code patterns.

If your company is interested in writing custom CodeQL queries, there are certain requirements your company should meet.

If your team can provide some examples of existing vulnerabilities you'd like to find via CodeQL, please let the GitHub team know and we can schedule an introductory session to review the basics of the language and discuss how to tackle one of your problems. If you want to cover CodeQL in more depth, then we offer additional engagement options to cover more topics to enable your team to build their own queries.

You can learn more about [CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/) in our [CodeQL documentation](https://codeql.github.com/docs/codeql-overview/), or reach out to your {% data variables.product.prodname_professional_services %} team or sales representative.

### Step 10: Create & maintain documentation

All throughout the pilot phase, it’s essential to create and maintain high-quality internal documentation of the infrastructure and process changes made within your company, as well as learnings from the pilot process and configuration changes made as your team(s) progress throughout the rollout and implementation process.

Having thorough and complete documentation helps make the remaining phases of your rollout more of a repeatable process. Good documentation also ensures that new teams can be onboarded consistently throughout the rollout process and as new team members join your team(s).

Good documentation doesn’t end when rollout and implementation are complete. The most helpful documentation is actively updated and evolves as your teams expand their experience using GHAS and as their needs grow.

In addition to your documentation, we recommend your company provides clear channels to your team(s) for support and guidance all throughout rollout, implementation, and beyond. Depending on the level of change your company needs to take on in order to support the rollout and implementation of GHAS, having well-supported teams will help ensure a successful adoption into your development teams’ daily workflow.

## {% octicon "milestone" aria-label="The milestone icon" %}  Phase 2: Organizational buy-in & rollout preparation

{% note %}

{% octicon "clock" aria-label="Clock" %} **Estimated timing:** We estimate that phase 2 may last roughly between 1 week to over a month. This range can vary largely depending on your company’s internal approval processes.

{% endnote %}

One of the main goals of this phase is to ensure you have the organizational buy-in to make the full deployment of GHAS successful.

During this phase, your company reviews the results of the pilot project(s) to determine if the pilot was successful, what adjustments may need to be made, and if the company is ready to continue forward with the rollout.

Depending on your company’s approval process, organizational buy-in from your executive sponsor may be necessary to continue forward. In most cases, organizational buy-in from your team(s) is necessary to begin utilizing the value of GHAS for your company.

Before moving forward to the next phase of rolling out GHAS more widely across your company, modifications are often made to the original rollout plan based on learnings from the pilot.

Any changes that may impact the documentation should also be made to ensure it is current for continued rollout.

We also recommend that you consider your plan to train any teams or team members that will be introduced to GHAS in the next phases of your rollout if you haven't already.

### Step 1: Organize results

At the completion of Phase 1, your team(s) should have {% ifversion ghes %} GHAS enabled on your {% data variables.product.prodname_ghe_server %} instance and have{% endif %} been able to utilize all of the key features of GHAS successfully, potentially with some configuration changes to optimize results. If your company clearly defined success metrics in Phase 0, you should be able to measure against these metrics to determine the success of your pilot.

It’s important to revisit your baseline metrics when preparing your results to ensure that incremental progress can be demonstrated based on metrics collected from the pilot against your original business goals. If you need assistance with this information, GitHub can help by ensuring that your company has the right metrics to measure your progress against. For more information on help available, see "[GitHub services and support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)."

### Step 2: Secure organizational buy-in

Organizational buy-in will vary depending on a variety of factors, including your company’s size, approval process, or even the level of change required to rollout GHAS to name a few.

For some companies, securing buy-in is a one-time meeting, but for others, this process can take quite some time (potentially weeks or months). Buy-in may require approval from your executive sponsor or may require the adoption of GHAS into your teams’ daily workflows.

This duration of this stage is entirely up to your company and how quickly you would like to proceed. We recommend seeking support or services from GitHub where possible to help answer questions and provide any recommendations that may be needed to help support this process. For more information on help available, see "[GitHub services and support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)."

### Step 3: Revise and update documentation

Review the results and findings from your pilot project(s) and the needs of the remaining teams at your company. Based on your findings and needs analysis, update/revise your documentation.

We've found that it’s essential to ensure that your documentation is up-to-date before continuing with the rollout to the remainder of your company's enterprise.

### Step 4: Prepare a full rollout plan for your company

Based on what you learned from your pilot project(s), update the rollout plan you designed in stage 0. To prepare for rolling out to your company, consider any training your teams will need, such as training on using GHAS, process changes, or migration training if your enterprise is migrating to GitHub.

## {% octicon "milestone" aria-label="The milestone icon" %}  Phase 3: Full organizational rollout & change management

{% note %}

{% octicon "clock" aria-label="Clock" %} **Estimated timing:** We estimate that phase 3 may
last anywhere from 2 weeks to multiple months. This range can vary largely depending on your company’s size, number of repositories/teams, level of change the GHAS rollout will be for your company, etc.

{% endnote %}

Once your company has aligned on the results and findings from your pilot project(s) and all rollout preparation steps have been completed from Phase 2, you can move forward with the full rollout to your company based on your plan.

### Step 1: Evaluate your rollout as you go

If you're using a phased approach to rolling out GHAS, we recommend taking a brief pause and completing a short evaluation after rolling out GHAS to a different segment of your company to ensure the rollout is moving forward smoothly. Your evaluation can ensure that teams are enabled and trained properly, that any unique GHAS configuration needs are met, and that plans and documentation can be adjusted as needed.

### Step 2: Set up any needed training

When rolling GHAS out to any teams beyond your pilot project team(s), it’s important to ensure teams are either trained or there are training resources available to provide additional support where needed.

These are the main areas where we see companies needing further support:
  - training on GHAS
  - training for customers new to GitHub
  - training on how to migrate to GitHub

Our {% data variables.product.prodname_professional_services_team %} team provides a variety of training services, bootcamps, and just general advice to help support your team(s) throughout the rollout and implementation process. For more information, see "[GitHub services and support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)."

To help support your teams, here's a recap of relevant GitHub documentation.

For documentation on how to enable GHAS, see:
  - "[Enabling Advanced Security features](/get-started/learning-about-github/about-github-advanced-security)"
  - 「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」
  - 「[リポジトリのセキュリティおよび分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」

For documentation on how to migrate to GitHub, see:
  - 「[GitHub にソースコードをインポートする](/github/importing-your-projects-to-github/importing-source-code-to-github)」

For documentation on getting started with GitHub, see:
  - "[Get started](/get-started)"

### Step 3: Help your company manage change

In step 4 of phase 2, we recommended that you update the initial rollout plan based on your learnings from the pilot project(s). Ensure that you continue to update your plan as you implement any necessary organizational changes to successfully roll out GHAS to your company.

Successful GHAS rollouts and the adoption of best practices into daily workflows depend on ensuring that your teams understand why it’s necessary to include security in their work.

### Step 4: Continued customization

Configuration and customization of GHAS are not complete once it’s rolled out across your company's enterprise. Further custom configuration changes should continue to be made over time to ensure GHAS continues to support your company's changing needs.

As your team becomes more experienced and skilled with GHAS over time, this will create additional opportunities for further customization.
