---
title: GitHub Terms for Additional Products and Features
redirect_from:
  - /github/site-policy/github-additional-product-terms
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Version Effective Date: August 10, 2021

When you use GitHub, you may be given access to lots of additional products and features ("Additional Products and Features"). Because many of the Additional Products and Features offer different functionality, specific terms for that product or feature may apply in addition to your main agreement with us—the GitHub Terms of Service, GitHub Corporate Terms of Service, GitHub General Terms, or Microsoft volume licensing agreement (each, the "Agreement"). Below, we've listed those products and features, along with the corresponding additional terms that apply to your use of them.

By using the Additional Products and Features, you also agree to the applicable GitHub Terms for Additional Products and Features listed below. A violation of these GitHub terms for Additional Product and Features is a violation of the Agreement. Capitalized terms not defined here have the meaning given in the Agreement.

**For Enterprise users**
- **GitHub Enterprise Cloud** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Codespaces, Dependabot Preview, Learning Lab, Octoshift, Packages and Pages. 

- **GitHub Enterprise Server** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, Connect, Dependabot Preview, Learning Lab, Octoshift, Packages, Pages and SQL Server Images. 

- **GitHub AE** users may have access to the following Additional Products and Features: Actions, Advanced Security, Advisory Database, {% ifversion ghae-next %}Connect, {% endif %}Dependabot Preview, Octoshift, Packages and Pages.

## Actions
GitHub Actions enables you to create custom software development lifecycle workflows directly in your GitHub repository. Actions is billed on a usage basis. The [Actions documentation](/actions) includes details, including compute and storage quantities (depending on your Account plan), and how to monitor your Actions minutes usage and set usage limits. 

Actions and any elements of the Actions service may not be used in violation of the Agreement, the [GitHub Acceptable Use Polices](/github/site-policy/github-acceptable-use-policies), or the GitHub Actions service limitations set forth in the [Actions documentation](/actions/reference/usage-limits-billing-and-administration). Additionally, Actions should not be used for:
- cryptomining;
- using our servers to disrupt, or to gain or to attempt to gain unauthorized access to, any service, device, data, account, or network (other than those authorized by the [GitHub Bug Bounty program](https://bounty.github.com));
- the provision of a stand-alone or integrated application or service offering Actions or any elements of Actions for commercial purposes;
- any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Actions as a content delivery network or as part of a serverless application, but a low benefit Action could be ok if it’s also low burden); or
- any other activity unrelated to the production, testing, deployment, or publication of the software project associated with the repository where GitHub Actions are used.

In order to prevent violations of these limitations and abuse of GitHub Actions, GitHub may monitor your use of GitHub Actions. Misuse of GitHub Actions may result in termination of jobs, restrictions in your ability to use GitHub Actions, or the disabling of repositories created to run Actions in a way that violates these Terms.


## Advanced Security
GitHub makes extra security features available to customers under an Advanced Security license. These features include code scanning, secret scanning, and dependency review. The [Advanced Security documentation](/github/getting-started-with-github/about-github-advanced-security) provides more details.

Advanced Security is licensed on a "Unique Committer" basis. A "Unique Committer" is a licensed user of GitHub Enterprise, GitHub Enterprise Cloud, GitHub Enterprise Server, or GitHub AE, who has made a code commit in the last 90 days to any repository with any GitHub Advanced Security functionality activated. You must acquire a GitHub Advanced Security User license for each of your Unique Committers. You may only use GitHub Advanced Security on codebases that are developed by or for you. For GitHub Enterprise Cloud users, some Advanced Security features also require the use of GitHub Actions. 

## Advisory Database
The GitHub Advisory Database allows you to browse or search for vulnerabilities that affect open source projects on GitHub.

_License Grant to Us_

We need the legal right to submit your contributions to the GitHub Advisory Database into public domain datasets such as the [National Vulnerability Database](https://nvd.nist.gov/) and to license the GitHub Advisory Database under open terms for use by security researchers, the open source community, industry, and the public. You agree to release your contributions to the GitHub Advisory Database under the [Creative Commons Zero license](https://creativecommons.org/publicdomain/zero/1.0/).

_License to the GitHub Advisory Database_

The GitHub Advisory Database is licensed under the [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/). The attribution term may be fulfilled by linking to the GitHub Advisory Database at <https://github.com/advisories> or to individual GitHub Advisory Database records used, prefixed by <https://github.com/advisories>.

## Codespaces
_Note: The github.dev service, available by pressing `.` on a repo or navigating directly to github.dev, is governed by [GitHub's Beta Terms of service](/github/site-policy/github-terms-of-service#j-beta-previews)._

GitHub Codespaces enables you to develop code directly from your browser using the code within your GitHub repository. Codespaces and any elements of the Codespaces service may not be used in violation of the Agreement or the Acceptable Use Policies. Additionally, Codespaces should not be used for:
- cryptomining;
- using our servers to disrupt, or to gain or to attempt to gain unauthorized access to any service, device, data, account or network (other than those authorized by the GitHub Bug Bounty program);
- the provision of a stand-alone or integrated application or service offering Codespaces or any elements of Codespaces for commercial purposes;
- any activity that places a burden on our servers, where that burden is disproportionate to the benefits provided to users (for example, don't use Codespaces as a content delivery network, as part of a serverless application, or to host any kind of production-facing application); or
- any other activity unrelated to the development or testing of the software project associated with the repository where GitHub Codespaces is initiated.

In order to prevent violations of these limitations and abuse of GitHub Codespaces, GitHub may monitor your use of GitHub Codespaces. Misuse of GitHub Codespaces may result in termination of your access to Codespaces, restrictions in your ability to use GitHub Codespaces, or the disabling of repositories created to run Codespaces in a way that violates these Terms.

Codespaces allows you to load extensions from the Microsoft Visual Studio Marketplace (“Marketplace Extensions”) for use in your development environment, for example, to process the programming languages that your code is written in. Marketplace Extensions are licensed under their own separate terms of use as noted in the Visual Studio Marketplace, and the terms of use located at https://aka.ms/vsmarketplace-ToU. GitHub makes no warranties of any kind in relation to Marketplace Extensions and is not liable for actions of third-party authors of Marketplace Extensions that are granted access to Your Content. Your use of any third-party applications is at your sole risk.

The generally available version of Codespaces is not currently available for U.S. government customers. U.S. government customers may continue to use the Codespaces Beta Preview under separate terms. See [Beta Preview terms](/github/site-policy/github-terms-of-service#j-beta-previews).

## Connect
With GitHub Connect, you can share certain features and data between your GitHub Enterprise Server {% ifversion ghae-next %}or GitHub AE {% endif %}instance and your GitHub Enterprise Cloud organization or enterprise account on GitHub.com. In order to enable GitHub Connect, you must have at least one (1) account on GitHub Enterprise Cloud or GitHub.com, and one (1) licensed instance of GitHub Enterprise Server{% ifversion ghae-next %} or GitHub AE{% endif %}. Your use of GitHub Enterprise Cloud or GitHub.com through Connect is governed by the terms under which you license GitHub Enterprise Cloud or GitHub.com. Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

## Learning Lab
GitHub Learning Lab offers free interactive courses that are built into GitHub with instant automated feedback and help.

*Course Materials.* GitHub owns course materials that it provides and grants you a worldwide, non-exclusive, limited-term, non-transferable, royalty-free license to copy, maintain, use and run such course materials for your internal business purposes associated with Learning Lab use. 

Open source license terms may apply to portions of source code provided in the course materials. 

You own course materials that you create and grant GitHub a worldwide, non-exclusive, perpetual, non-transferable, royalty-free license to copy, maintain, use, host, and run such course materials. 

The use of GitHub course materials and creation and storage of your own course materials do not constitute joint ownership to either party's respective intellectual property.

Use of Personal Data is governed by the [GitHub Privacy Statement](/github/site-policy/github-privacy-statement).

## npm
npm is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. npm is the registry of record for the JavaScript ecosystem. The npm public registry is free to use but customers are billed if they want to publish private packages or manage private packages using teams. The [npm documentation](https://docs.npmjs.com/) includes details about the limitation of account types and how to manage [private packages](https://docs.npmjs.com/about-private-packages) and [organizations](https://docs.npmjs.com/organizations). Acceptable use of the npm registry is outlined in the [open-source terms](https://www.npmjs.com/policies/open-source-terms). There are supplementary terms for both the npm [solo](https://www.npmjs.com/policies/solo-plan) and [org](https://www.npmjs.com/policies/orgs-plan) plans. The npm [Terms of Use](https://www.npmjs.com/policies/terms) apply to your use of npm.

## Octoshift
Octoshift is a framework for exporting data from other sources to be imported to the GitHub platform. Octoshift is provided “AS-IS”.

## Packages
GitHub Packages is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. GitHub Packages is billed on a usage basis. The [Packages documentation](/packages/learn-github-packages/introduction-to-github-packages) includes details, including bandwidth and storage quantities (depending on your Account plan), and how to monitor your Packages usage and set usage limits. Packages bandwidth usage is limited by the [GitHub Acceptable Use Polices](/github/site-policy/github-acceptable-use-policies).

## Pages

Each Account comes with access to the [GitHub Pages static hosting service](/github/working-with-github-pages/about-github-pages). GitHub Pages is intended to host static web pages, but primarily as a showcase for personal and organizational projects. 

GitHub Pages is not intended for or allowed to be used as a free web hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). Some monetization efforts are permitted on Pages, such as donation buttons and crowdfunding links. 

### a. Bandwidth and Usage Limits
GitHub Pages are subject to some specific bandwidth and usage limits, and may not be appropriate for some high-bandwidth uses. Please see our [GitHub Pages guidelines](/github/working-with-github-pages/about-github-pages) for more information. 

### b. Prohibited Uses
Prohibited uses of GitHub Pages include
- Content or activity that is illegal or otherwise prohibited by our [Terms of Service](/github/site-policy/github-terms-of-service), [Acceptable Use Policies](/github/site-policy/github-acceptable-use-policies) or [Community Guidelines](/github/site-policy/github-community-guidelines)
- Violent or threatening content or activity
- Excessive automated bulk activity (for example, spamming)
- Activity that compromises GitHub users or GitHub services
- Get-rich-quick schemes
- Sexually obscene content
- Content that misrepresents your identity or site purpose

If you have questions about whether your use or intended use falls into these categories, please contact [GitHub Support](https://support.github.com/contact?tags=docs-policy). GitHub reserves the right at all times to reclaim any GitHub subdomain without liability.

## Sponsors Program

GitHub Sponsors allows the developer community to financially support the people and organizations who design, build, and maintain the open source projects they depend on, directly on GitHub. In order to become a Sponsored Developer, you must agree to the [GitHub Sponsors Program Additional Terms](/github/site-policy/github-sponsors-additional-terms).

## SQL Server Images

You may download Microsoft SQL Server Standard Edition container image for Linux files ("SQL Server Images"). You must uninstall the SQL Server Images when your right to use the Software ends. Microsoft Corporation may disable SQL Server Images at any time.
