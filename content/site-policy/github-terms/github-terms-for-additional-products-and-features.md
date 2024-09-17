---
title: GitHub Terms for Additional Products and Features
redirect_from:
  - /github/site-policy/github-additional-product-terms
  - /github/site-policy/github-terms-for-additional-products-and-features
  - /github/site-policy-deprecated/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-com-connection-addendum-to-the-github-enterprise-license-agreement
  - /articles/github-connect-addendum-to-the-github-enterprise-license-agreement
  - /github/site-policy/github-connect-addendum-to-the-github-enterprise-license-agreement
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Version Effective Date: August 1, 2024

When you use GitHub, you may be given access to lots of additional products and features ("Additional Products and Features"). Because many of the Additional Products and Features offer different functionality, your Agreement with us (the "Agreement") includes the specific terms for that product or feature combined with your main agreement — the GitHub Terms of Service or GitHub Customer Agreement, or the GitHub Corporate Terms of Service or other legacy GitHub contract, or a Microsoft volume licensing agreement. Below, we've listed those products and features, along with the corresponding additional terms that apply to your use of them.

By using the Additional Products and Features, you also agree to the applicable GitHub Terms for Additional Products and Features listed below. A violation of these GitHub Terms for Additional Products and Features is a violation of the Agreement. Capitalized terms not defined here have the meaning given in the Agreement.

**For Enterprise users**
* **GitHub Enterprise Cloud** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Codespaces, Dependabot Preview, GitHub Enterprise Importer, Packages, and Pages.

* **GitHub Enterprise Server** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, GitHub Enterprise Importer, Packages, Pages, and SQL Server Images.

## Actions

GitHub Actions enables you to create custom software development lifecycle workflows directly in your GitHub repository. Actions is billed on a usage basis. The [Actions documentation](/actions) includes details, including compute and storage quantities (depending on your Account plan), and how to monitor your Actions minutes usage and set usage limits.

Actions and any elements of the Actions product or service may not be used in violation of the Agreement, the [GitHub Acceptable Use Policies](/site-policy/acceptable-use-policies/github-acceptable-use-policies), or the GitHub Actions service limitations set forth in the [Actions documentation](/actions/learn-github-actions/usage-limits-billing-and-administration). Additionally, regardless of whether an Action is using self-hosted runners, Actions should not be used for:
* Cryptomining;
* Disrupting, gaining, or attempting to gain unauthorized access to, any service, device, data, account, or network (other than those authorized by the [GitHub Bug Bounty program](https://bounty.github.com));
* The provision of a stand-alone or integrated application or service offering the Actions product or service, or any elements of the Actions product or service, for commercial purposes;
* Any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Actions as a content delivery network or as part of a serverless application, but a low benefit Action could be ok if it’s also low burden); or
* If using GitHub-hosted runners, any other activity unrelated to the production, testing, deployment, or publication of the software project associated with the repository where GitHub Actions are used.

In order to prevent violations of these limitations and abuse of GitHub Actions, GitHub may monitor your use of GitHub Actions. Misuse of GitHub Actions may result in termination of jobs, restrictions in your ability to use GitHub Actions, disabling of repositories created to run Actions in a way that violates these Terms, or in some cases, suspension or termination of your GitHub account.

_Use for Development and Testing_

You may only access and use GitHub Actions to develop and test your application(s). Only one licensed user may access a virtual machine provided by Actions at any time.

_Authorized Developer_

You appoint GitHub as your authorized developer with respect to Apple software included in Actions. GitHub is responsible for complying with the terms for any such software included in Actions and will keep confidential any confidential information of Apple accessed as part of Actions.

_Third Party Repository Service Access_

If you grant GitHub access to your third-party repository service account(s), you authorize GitHub to scan the account(s), including the contents of your Public and Private Repositories, for purposes of providing GitHub Actions.

_Self-Hosted Runners on GitHub Actions_

If you use self-hosted runners, you have the ability to turn off automatic updates but GitHub reserves the right to override your choice for critical security updates.

## Advanced Security

GitHub makes extra security features available to customers under an Advanced Security license. These features include code scanning, secret scanning, and dependency review. The [Advanced Security documentation](/get-started/learning-about-github/about-github-advanced-security) provides more details.

Advanced Security is licensed on a "Unique Committer" basis. A "Unique Committer" is a licensed user of GitHub Enterprise, GitHub Enterprise Cloud, or GitHub Enterprise Server, who has made a commit in the last 90 days to any repository with any GitHub Advanced Security functionality activated. You must acquire a GitHub Advanced Security User license for each of your Unique Committers. You may only use GitHub Advanced Security on codebases that are developed by or for you. For GitHub Enterprise Cloud users, some Advanced Security features also require the use of GitHub Actions.

For secret scanning with GitHub Advanced Security, when you opt-in to automatic validity checks for partner patterns, exposed third-party tokens may be shared with the relevant partner, in order to provide you with more information about the validity of the token. Not all partners are based in the United States. The [Secret scanning patterns documentation](/enterprise-cloud@latest/code-security/secret-scanning/introduction/supported-secret-scanning-patterns) provides more details on which partners support the validity check.

## Advisory Database

The GitHub Advisory Database allows you to browse or search for vulnerabilities that affect open source projects on GitHub.

_License Grant to Us_

We need the legal right to submit your contributions to the GitHub Advisory Database into public domain datasets such as the [National Vulnerability Database](https://nvd.nist.gov/) and to license the GitHub Advisory Database under open terms for use by security researchers, the open source community, industry, and the public. You agree to release your contributions to the GitHub Advisory Database under the [Creative Commons Zero license](https://creativecommons.org/publicdomain/zero/1.0/).

_License to the GitHub Advisory Database_

The GitHub Advisory Database is licensed under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/). The attribution term may be fulfilled by linking to the GitHub Advisory Database at <https://github.com/advisories> or to individual GitHub Advisory Database records used, prefixed by <https://github.com/advisories>.

## Codespaces

_Note: The github.dev service, available by pressing . on a repo or navigating directly to github.dev, is governed by GitHub's Beta Terms of service._

GitHub Codespaces enables you to develop code directly from your browser using the code within your GitHub repository. Codespaces and any elements of the Codespaces service may not be used in violation of the Agreement or the Acceptable Use Policies. Additionally, Codespaces should not be used for:
* Cryptomining;
* Using our servers to disrupt, or to gain or to attempt to gain unauthorized access to any service, device, data, account or network (other than those authorized by the GitHub Bug Bounty program);
* The provision of a stand-alone or integrated application or service offering Codespaces or any elements of Codespaces for commercial purposes;
* Any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Codespaces as a content delivery network, as part of a serverless application, or to host any kind of production-facing application); or
* Any other activity unrelated to the development or testing of the software project associated with the repository where GitHub Codespaces is initiated.

In order to prevent violations of these limitations and abuse of GitHub Codespaces, GitHub may monitor your use of GitHub Codespaces. Misuse of GitHub Codespaces may result in termination of your access to Codespaces, restrictions in your ability to use GitHub Codespaces, or the disabling of repositories created to run Codespaces in a way that violates these Terms.

Codespaces allows you to load extensions from the Microsoft Visual Studio Marketplace (“Marketplace Extensions”) for use in your development environment, for example, to process the programming languages that your code is written in. Marketplace Extensions are licensed under their own separate terms of use as noted in the Visual Studio Marketplace, and the terms of use located at https://aka.ms/vsmarketplace-ToU. GitHub makes no warranties of any kind in relation to Marketplace Extensions and is not liable for actions of third-party authors of Marketplace Extensions that are granted access to Your Content. Codespaces also allows you to load software into your environment through devcontainer features. Such software is provided under the separate terms of use accompanying it. Your use of any third-party applications is at your sole risk.

The generally available version of Codespaces is not currently available for U.S. government customers. U.S. government customers may continue to use the Codespaces Beta Preview under separate terms. See [Beta Preview terms](/site-policy/github-terms/github-terms-of-service#j-beta-previews).

## Competitive Benchmarking

If you offer a product or service competitive to any GitHub product or service, by using that GitHub product or service, you agree to and hereby waive any restrictions as to GitHub on competitive use and benchmark testing in the terms governing your competitive product or service. If you do not intend to waive such restrictions in your terms of use, you are not allowed to use that GitHub product or service.

## Connect

With GitHub Connect, you can share certain features and data between your GitHub Enterprise Server deployment and your GitHub Enterprise Cloud organization or enterprise account on GitHub.com. In order to enable GitHub Connect, you must have at least one (1) account on GitHub Enterprise Cloud or GitHub.com, and one (1) licensed deployment of GitHub Enterprise Server. Your use of GitHub Enterprise Cloud or GitHub.com through Connect is governed by the terms under which you license GitHub Enterprise Cloud or GitHub.com. Use of Personal Data is governed by the [GitHub Privacy Statement](/site-policy/privacy-policies/github-privacy-statement).

## GitHub Copilot

For GitHub Copilot Business and Copilot Enterprise users, your use of GitHub Copilot is governed by the [GitHub Copilot Product Specific Terms](https://github.com/customer-terms/github-copilot-product-specific-terms).

To use GitHub Copilot in your code editor, you need to install the GitHub Copilot extension to that editor. To use GitHub Copilot in the CLI (Command Line Interface), you need to install the GitHub Copilot CLI extension. To use GitHub Copilot Chat on GitHub Mobile, you need to install the GitHub Mobile application. The code you write using GitHub Copilot (“**Your Code**”) is not “Content” under the Agreement until you upload it to GitHub.com.

The code, functions, and other output returned to you by GitHub Copilot are called “**Suggestions**.” GitHub does not own Suggestions. You retain ownership of Your Code and you retain responsibility for Suggestions you include in Your Code.

_Acceptable Use_

Your use of GitHub Copilot is subject to the GitHub [Acceptable Use Policies](/site-policy/acceptable-use-policies/github-acceptable-use-policies). For example, you may not prompt GitHub Copilot with content that is unlawful or otherwise prohibited by the GitHub Acceptable Use Policies on GitHub.com.

_Data_

GitHub Copilot (i) may, depending on your settings and which GitHub Copilot Service you use, collect snippets of Your Code, and (ii) will collect additional usage information through the GitHub Copilot Service you use tied to your Account. This may include personal data, as referenced in the [GitHub Privacy Statement](/site-policy/privacy-policies/github-privacy-statement). You can learn more about the collection and use of GitHub Copilot data in the [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/).

## GitHub Enterprise Importer

Importer is a framework for exporting data from other sources to be imported to the GitHub platform. Importer is provided “AS-IS”.

## npm

npm is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. npm is the registry of record for the JavaScript ecosystem. The npm public registry is free to use but customers are billed if they want to publish private packages or manage private packages using teams. The [npm documentation](https://docs.npmjs.com/) includes details about the limitation of account types and how to manage [private packages](https://docs.npmjs.com/about-private-packages) and [organizations](https://docs.npmjs.com/organizations). Acceptable use of the npm registry is outlined in the [open-source terms](https://www.npmjs.com/policies/open-source-terms). There are supplementary terms for both the npm [solo](https://www.npmjs.com/policies/solo-plan) and [org](https://www.npmjs.com/policies/orgs-plan) plans. The npm [Terms of Use](https://www.npmjs.com/policies/terms) apply to your use of npm.

## Packages

GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. GitHub Packages is billed on a usage basis. The [Packages documentation](/packages/learn-github-packages/introduction-to-github-packages) includes details, including bandwidth and storage quantities (depending on your Account plan), and how to monitor your Packages usage and set usage limits. Packages bandwidth usage is limited by the [GitHub Acceptable Use Policies](/site-policy/acceptable-use-policies/github-acceptable-use-policies).

## Pages

Each Account comes with access to the [GitHub Pages static hosting service](/pages/getting-started-with-github-pages/about-github-pages). GitHub Pages is intended to host static web pages, but primarily as a showcase for personal and organizational projects.

GitHub Pages is not intended for or allowed to be used as a free web hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). Some monetization efforts are permitted on Pages, such as donation buttons and crowdfunding links.

_Bandwidth and Usage Limits_

GitHub Pages are subject to some specific bandwidth and usage limits, and may not be appropriate for some high-bandwidth uses. Please see our [GitHub Pages limits](/pages/getting-started-with-github-pages/about-github-pages) for more information.

_Prohibited Uses_

GitHub Pages may not be used in violation of the Agreement, the GitHub [Acceptable Use Policies](/site-policy/acceptable-use-policies/github-acceptable-use-policies), or the GitHub Pages service limitations set forth in the [Pages documentation](/pages/getting-started-with-github-pages/about-github-pages#guidelines-for-using-github-pages).

If you have questions about whether your use or intended use falls into these categories, please contact us through the [GitHub Support portal](https://support.github.com/). GitHub reserves the right at all times to reclaim any GitHub subdomain without liability.

_Educational Exercises_

Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited. However, you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes.

## Previews

Previews means software, online services and additional products and features provided for preview, evaluation, demonstration or trial purposes, or pre-release versions of those, such as alpha, beta, or early access. If your Agreement does not include terms and conditions that address Previews, then the following terms apply. GitHub grants a limited right to use a non-production instance of the Preview. Previews are provided “AS-IS”, “WITH ALL FAULTS” and “AS AVAILABLE”. GitHub may change or discontinue Previews at any time without notice. Any information we give you about a private Preview will be considered GitHub’s confidential information. If you choose to provide comments or suggestions about a Preview, we may use that feedback for any purpose without obligation of any kind. GitHub’s maximum liability is limited to direct damages up to US $500. GitHub has no obligation to defend, indemnify, or hold you harmless for claims brought by third parties arising from your use of Previews.

## Sponsors Program

GitHub Sponsors allows the developer community to financially support the people and organizations who design, build, and maintain the open source projects they depend on, directly on GitHub. In order to become a Sponsored Developer, you must agree to the [GitHub Sponsors Program Additional Terms](/site-policy/github-terms/github-sponsors-additional-terms).

## SQL Server Images

You may download Microsoft SQL Server Standard Edition container image for Linux files ("SQL Server Images"). You must uninstall the SQL Server Images when your right to use the Software ends. Microsoft Corporation may disable SQL Server Images at any time.

## GitHub Models

GitHub Models is a feature that allows you to learn, try, and test artificial intelligence models on GitHub.com. You can access GitHub Models via the [GitHub Marketplace](https://github.com/marketplace). Learn more about GitHub Models by visiting [Prototyping with AI models](/github-models/prototyping-with-ai-models).

Your use of this feature is subject to the terms of the company hosting the model and the model license.
