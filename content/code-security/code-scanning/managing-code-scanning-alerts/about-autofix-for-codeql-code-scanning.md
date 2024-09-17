---
title: About Copilot Autofix for CodeQL code scanning
shortTitle: Copilot Autofix for code scanning
intro: Learn how GitHub uses AI to suggest potential fixes for {% data variables.product.prodname_code_scanning %} alerts found by {% data variables.product.prodname_codeql %}.
allowTitleToDifferFromFilename: true
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
  fpt: '*'
type: rai
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - AI
---
<!--Note on the versioning above ^. This article is visible to free, pro, team users for transparency. They cannot use the feature so `fpt` is not included in the feature definition.-->

{% data reusables.rai.code-scanning.autofix-note %}

## About {% data variables.product.prodname_copilot_autofix_short %} for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_copilot_autofix %} is an expansion of {% data variables.product.prodname_code_scanning %} that provides users with targeted recommendations to help them fix {% data variables.product.prodname_code_scanning %} alerts so they can avoid introducing new security vulnerabilities. The potential fixes are generated automatically by large language models (LLMs) using data from the codebase and from {% data variables.product.prodname_codeql %} analysis.

> [!NOTE]
> While {% data variables.product.prodname_copilot_autofix_short %} is powered by {% data variables.product.prodname_copilot %}, your enterprise does not need a subscription to {% data variables.product.prodname_copilot %} to use {% data variables.product.prodname_copilot_autofix_short %}. As long as your enterprise has {% data variables.product.prodname_GH_advanced_security %}, you will have access to {% data variables.product.prodname_copilot_autofix_short %}.

{% data variables.product.prodname_copilot_autofix_short %} generates potential fixes that are relevant to the existing source code and translates the description and location of an alert into code changes that may fix the alert. {% data variables.product.prodname_copilot_autofix_short %} uses internal {% data variables.product.prodname_copilot %} APIs interfacing with the large language model GPT-4o from OpenAI, which has sufficient generative capabilities to produce both suggested fixes in code and explanatory text for those fixes.

{% ifversion code-scanning-autofix %}While {% data variables.product.prodname_copilot_autofix_short %} is allowed by default in an enterprise and enabled for every repository using {% data variables.product.prodname_codeql %}, you can choose to opt out and disable {% data variables.product.prodname_copilot_autofix_short %}. To learn how to disable {% data variables.product.prodname_copilot_autofix_short %} at the enterprise, organization and repository levels, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning)."{% endif %}

In an organization's security overview dashboard, you can view the total number of code suggestions generated on open and closed pull requests in the organization for a given time period. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/security-overview/viewing-security-insights#autofix-suggestions)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

## Developer experience

{% data variables.product.prodname_GH_advanced_security %} users can already see any security alerts detected by {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %} to analyze their pull requests. However, developers often have little training in code security so fixing these alerts requires substantial effort. They must first read and understand the alert location and description, and then use that understanding to edit the source code to fix the vulnerability.

{% data variables.product.prodname_copilot_autofix_short %} lowers the barrier of entry to developers by combining information on best practices with details of the codebase and alert to suggest a potential fix to the developer. Instead of starting with a search for information about the vulnerability, the developer starts with a code suggestion that demonstrates a potential solution for their codebase. The developer evaluates the potential fix to determine whether it is the best solution for their codebase and to ensure that it maintains the intended behavior.

After committing a suggested fix or modified fix, the developer should always verify that continuous integration testing (CI) for the codebase continues to pass and that the alert is shown as resolved before they merge their pull request.

## Supported languages

{% data variables.product.prodname_copilot_autofix_short %} supports fix generation for a subset of queries included in the default and security-extended query suites for {% data variables.code-scanning.code_scanning_autofix_languages %}. For more information on these query suites, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#built-in-codeql-query-suites)."

## Suggestion generation process

When {% data variables.product.prodname_copilot_autofix_short %} is enabled for a repository, {% data variables.product.prodname_code_scanning %} alerts that are identified by supported {% data variables.product.prodname_codeql %} queries send input to the LLM. If the LLM can generate a potential fix, the fix is shown as a suggestion.

{% data variables.product.prodname_dotcom %} sends the LLM a variety of data from the {% data variables.product.prodname_codeql %} analysis.

* {% data variables.product.prodname_codeql %} alert data in SARIF format. For more information, see “[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning).”
* Code from the current version of the branch.
    * Short snippets of code around each source location, sink location, and any location referenced in the alert message or included on the flow path.
    * First ~10 lines from each file involved in any of those locations.
* Help text for the {% data variables.product.prodname_codeql %} query that identified the problem. For examples, see “[{% data variables.product.prodname_codeql %} query help](https://codeql.github.com/codeql-query-help/).”

Any {% data variables.product.prodname_copilot_autofix_short %} suggestions are generated and stored within the {% data variables.product.prodname_code_scanning %} backend. They are displayed as suggestions. No user interaction is needed beyond enabling {% data variables.product.prodname_code_scanning %} on the codebase and creating a pull request.

The process of generating fixes does not gather or utilize any customer data beyond the scope outlined above. Therefore, the use of this feature is governed by the existing terms and conditions associated with {% data variables.product.prodname_GH_advanced_security %}. Moreover, data handled by {% data variables.product.prodname_copilot_autofix_short %} is strictly not employed for LLM training purposes. For more information on  {% data variables.product.prodname_GH_advanced_security %} terms and conditions, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security){% ifversion fpt %}."{% else %} in the Free, Pro, & Team documentation.{% endif %}

## Quality of suggestions

{% data variables.product.prodname_dotcom %} uses an automated test harness to continuously monitor the quality of suggestions from {% data variables.product.prodname_copilot_autofix_short %}. This allows us to understand how the suggestions generated by the LLM change as the model develops.

The test harness includes a set of over 2,300 alerts from a diverse set of public repositories where the highlighted code has test coverage. Suggestions for these alerts are tested to see how good they are, that is, how much a developer would need to edit them before committing them to the codebase. For many of the test alerts, suggestions generated by the LLM could be committed as-is to fix the alert while continuing to successfully pass all the existing CI tests.

In addition, the system is stress-tested to check for any potential harm (often referred to as red teaming), and a filtering system on the LLM helps prevent potentially harmful suggestions being displayed to users.

### How GitHub tests suggestions

We test the effectiveness of suggestions by merging all suggested changes, unedited, before running {% data variables.product.prodname_code_scanning %} and the repository's unit tests on the resulting code.

1. Was the {% data variables.product.prodname_code_scanning %} alert fixed by the suggestion?
1. Did the fix introduce any new {% data variables.product.prodname_code_scanning %} alerts?
1. Did the fix introduce any syntax errors that {% data variables.product.prodname_codeql %} can detect?
1. Has the fix changed the output of any of the repository tests?

In addition, we spot check many of the successful suggestions and verify that they fix the alert without introducing new problems. When one or more of these checks failed, our manual triage showed that in many cases the proposed fix was nearly correct but needed some minor modifications that a user could identify and manually perform.

### Effectiveness on other projects

The test set contains a broad range of different types of projects and alerts. We predict that suggestions for other projects using languages supported by {% data variables.product.prodname_copilot_autofix_short %} should follow a similar pattern.

* {% data variables.product.prodname_copilot_autofix_short %} is likely to add a code suggestion to the majority of alerts.
* When developers evaluate the suggestions we expect that the majority of fixes can be committed without editing or with minor updates to reflect the wider context of the code.
* A small percentage of suggested fixes will reflect a significant misunderstanding of the codebase or the vulnerability.

However, each project and codebase is unique, so developers may need to edit a larger percentage of suggested fixes before committing them. {% data variables.product.prodname_copilot_autofix_short %} provides valuable information to help you resolve {% data variables.product.prodname_code_scanning %} alerts, but ultimately it remains your responsibility to evaluate the proposed change and ensure the security and accuracy of your code.

> [!NOTE]
> Fix generation for supported languages is subject to LLM operational capacity. In addition, each suggested fix is tested before it is added to a pull request. If no suggestion is available, or if the suggested fix fails internal testing, then no suggestion is displayed.

## Limitations of suggestions

When you review a suggestion from {% data variables.product.prodname_copilot_autofix_short %}, you must always consider the limitations of AI and edit the changes as needed before you accept the changes. You should also consider updating the CI testing and dependency management for a repository before enabling {% data variables.product.prodname_copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %}. For more information, see "[Mitigating the limitations of suggestions](#mitigating-the-limitations-of-suggestions)."

### Limitations of code suggestions

* _Human languages:_ The system primarily uses English data, including the prompts sent to the system, the code seen by the LLMs in their datasets, and the test cases used for internal evaluation. Suggestions generated by the LLM may have a lower success rate for source code and comments written in other languages and using other character sets.
* _Syntax errors:_ The system may suggest fixes that are not syntactically correct code changes, so it is important to run syntax checks on pull requests.
* _Location errors:_ The system may suggest fixes that are syntactically correct code but are suggested at the incorrect location, which means that if a user accepts a fix without editing the location they will introduce a syntax error.
* _Semantic errors_: The system may suggest fixes that are syntactically valid but that change the semantics of the program. The system has no understanding of the programmer or codebase’s intent in how the code should behave. Having good test coverage helps developers verify that a fix does not change the behavior of the codebase.
* _Security vulnerabilities and misleading fixes:_ The system may suggest fixes that fail to remediate the underlying security vulnerability and/or introduce new security vulnerabilities.
* _Partial fixes:_ The system may suggest fixes that only partially address the security vulnerability, or only partially preserve the intended code functionality. The system sees only a small subset of the code in the codebase and does not always produce globally optimal or correct solutions.

### Limitations of dependency suggestions

Sometimes a suggested fix includes a change in the dependencies of the codebase. If you use a dependency management system, any changes will be highlighted automatically for the developer to review. Before merging a pull request always verify that any dependency changes are secure and maintain the intended behavior of the codebase.

* _New or updated dependencies:_ The system may suggest adding or updating software dependencies as part of a suggested fix. For example, by suggesting changing the `package.json` file for JavaScript projects to add dependencies from npm.
* _Unsupported or insecure dependencies:_ The system does not know which versions of an existing dependency are supported or secure.
* _Fabricated dependencies:_ The system has incomplete knowledge of the dependencies published in the wider ecosystem. This can lead to suggestions that add a new dependency on malicious software that attackers have published under a statistically probable dependency name.

## Mitigating the limitations of suggestions

The best way to mitigate the limitations of suggestions from {% data variables.product.prodname_copilot_autofix_short %} is to follow best practices. For example, using CI testing of pull requests to verify functional requirements are unaffected and using dependency management solutions, such as the dependency review API and action. For more information, see “[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).”

It is important to remember that the author of a pull request retains responsibility for how they respond to review comments and suggested code changes, whether proposed by colleagues or automated tools. Developers should always look at suggestions for code changes critically. If needed, they should edit the suggested changes to ensure that the resulting code and application are correct, secure, meet performance criteria, and satisfy all other functional and non-functional requirements for the application.

## Next steps

{% ifversion code-scanning-autofix %}

* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)"
* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#working-with-autofix-suggestions-for-alerts-on-a-pull-request)"
* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#generating-suggested-fixes-for-code-scanning-alerts)
* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning)"

{% elsif fpt %}

* "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)"
* [AUTOTITLE](/enterprise-cloud@latest/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#working-with-autofix-suggestions-for-alerts-on-a-pull-request) in the {% data variables.product.prodname_ghe_cloud %} documentation

{% endif %}
