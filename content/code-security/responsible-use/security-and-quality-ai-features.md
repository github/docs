---
title: 'Application card: GitHub security and quality AI features'
shortTitle: Security and quality AI features
intro: Use GitHub's AI-powered code security and code quality features responsibly by understanding their purposes, capabilities, and limitations.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning
  - /code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning
  - /code-security/responsible-use/responsible-use-autofix-code-scanning
  - /code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/about-the-detection-of-generic-secrets-with-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/responsible-ai-generic-secrets
  - /code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets
  - /code-security/secret-scanning/copilot-secret-scanning
  - /code-security/responsible-use/responsible-ai-generic-secrets
  - /code-security/secret-scanning/about-the-regular-expression-generator-for-custom-patterns
  - /code-security/secret-scanning/about-generating-regular-expressions-with-ai
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/about-generating-regular-expressions-with-ai
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/responsible-use-ai-regex-generator
  - /code-security/secret-scanning/copilot-secret-scanning/responsible-use-ai-regex-generator
  - /code-security/secret-scanning/copilot-secret-scanning/responsible-ai-regex-generator
  - /code-security/responsible-use/responsible-ai-regex-generator
  - /code-security/code-quality/responsible-use/code-quality
  - /code-security/responsible-use/code-quality
contentType: rai
category:
  - Responsible use
---

## What is an Application Card?

{% data reusables.rai.copilot.application-card-intro %}

## 1. Overview

GitHub's security and quality platform includes several AI-powered capabilities that help developers find and fix security vulnerabilities, detect leaked secrets, and improve code quality. This application card covers the following experiences:

* **Copilot Autofix for code scanning**: Automatically generates fix suggestions for CodeQL alerts on pull requests and the default branch.
* **Generic secret detection**: Uses a model to identify unstructured secrets in source code that deterministic pattern matching cannot find.
* **Custom pattern regex generator**: Uses AI to generate regular expressions for custom secret scanning patterns from natural language descriptions.
* **GitHub Code Quality**: Surfaces code quality issues and offers LLM-powered fix suggestions on pull requests and the default branch.

Copilot Autofix is an expansion of code scanning that provides users with targeted recommendations to help them fix code scanning alerts, avoiding the introduction of new security vulnerabilities. Potential fixes are generated automatically by large language models (LLMs) using data from the codebase and from code scanning analysis. Copilot Autofix is available for CodeQL analysis and does not require a GitHub Copilot subscription.

Code scanning users can already see security alerts on their pull requests. However, developers often have little training in secure coding, so fixing these alerts requires substantial effort. Copilot Autofix lowers the barrier of entry by combining information on best practices with details of the codebase and alert to suggest a potential fix. Instead of starting with a search for information about the vulnerability, the developer starts with a code suggestion that demonstrates a potential solution for their codebase. The developer evaluates the potential fix to determine whether it is the best solution for their codebase and to ensure that it maintains the intended behavior.

Secret scanning's generic secret detection is an AI-powered expansion of secret scanning that identifies unstructured secrets in source code or other GitHub surfaces and generates an alert. GitHub Secret Protection and GitHub Advanced Security users can already receive secret scanning alerts for partner or custom patterns found in their source code, but unstructured secrets are not easily discoverable. Secret scanning uses models to identify these secrets. When a finding is detected, an alert is displayed in the "Generic" list of secret scanning alerts (under the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} {% ifversion security-and-quality-tab %}Security and quality{% else %}Security{% endif %}** tab of the repository, organization, or enterprise), so that maintainers and security managers can review the alert and, where necessary, remove the credential or implement a fix. Generic secret detection does not require a GitHub Copilot subscription.

Secret scanning's custom pattern regular expression generator makes it possible to define custom secret scanning patterns without knowledge of regular expressions. Users input a natural language description of what they want to detect, along with optional example strings, and the generator produces up to three candidate regular expressions. These patterns can then be validated via the dry-run mechanism before being deployed as custom patterns. The regular expression generator does not require a GitHub Copilot subscription.

GitHub Code Quality helps users improve code reliability, maintainability, and overall project health by surfacing actionable feedback and offering automatic fixes for findings in pull requests and on the default branch. When Code Quality is enabled, two types of analysis run: CodeQL quality queries identify problems with the maintainability, reliability, or style of code, and LLM-powered analysis provides additional insights beyond what deterministic engines can find. When a quality issue is detected, Copilot Autofix suggests a relevant fix. On pull requests, results are displayed as comments left by the `github-code-quality` bot. On the default branch, LLM-powered findings are displayed in the **AI findings** dashboard under the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} {% ifversion security-and-quality-tab %}Security and quality{% else %}Security{% endif %}** tab.

The primary supported language for GitHub Code Security AI features is English.

## 2. Key terms

The following list provides a glossary of key terms related to GitHub Code Security AI features:

* **CodeQL**: GitHub's semantic code analysis engine for identifying security vulnerabilities in source code.
* **Copilot Autofix**: GitHub's LLM-powered feature that automatically generates fix suggestions for code scanning alerts. Copilot Autofix is available for CodeQL analysis and does not require a GitHub Copilot subscription.
* **Large language model (LLM)**: A type of neural network trained on a large body of text data that can generate, analyze, and transform natural language and code. Copilot Autofix uses one or more LLMs to process code scanning alerts and produce fix suggestions.
* **AI detection for secret scanning**: AI-powered capabilities that extend secret scanning, including generic secret detection. Does not require a GitHub Copilot subscription.
* **Generic secret detection**: AI identification of unstructured secrets (such as passwords) that are not covered by partner or custom patterns. Generic secret detection uses models to scan for password-like strings in source code.
* **Custom pattern**: A user-defined regular expression used by secret scanning to detect secrets that match a specific format. The custom pattern regular expression generator helps create these patterns from natural language descriptions.
* **SARIF**: Static Analysis Results Interchange Format—the standard format CodeQL uses to report code scanning findings, including alert locations and descriptions.
* **GitHub Code Quality**: A feature that surfaces code quality issues and offers LLM-powered fixes. Code Quality combines CodeQL quality queries with LLM-powered analysis to identify maintainability, reliability, and style issues.
* **AI findings**: The dashboard under the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} {% ifversion security-and-quality-tab %}Security and quality{% else %}Security{% endif %}** tab where LLM-powered Code Quality findings for the default branch are displayed.

## 3. Key features or capabilities

The key features and capabilities outlined here describe what GitHub Code Security AI features are designed to do and how they perform across supported tasks.

* **Automated fix suggestions for security alerts**: Copilot Autofix automatically generates code change suggestions for CodeQL alerts found on pull requests and on the default branch. Each suggestion includes both the proposed code change and a natural language explanation of the fix.
* **Alert-to-fix translation**: Copilot Autofix translates the description and location of a code scanning alert into actionable code changes that may resolve the underlying security vulnerability. The system uses CodeQL alert data in SARIF format, surrounding code snippets, and query help text to generate relevant fixes.
* **Multi-language support**: Copilot Autofix supports fix generation for a subset of queries included in the default and security-extended CodeQL query suites for C#, C/C++, Go, Java/Kotlin, Swift, JavaScript/TypeScript, Python, Ruby, and Rust. For more information on these query suites, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/codeql-query-suites#built-in-codeql-query-suites).
* **AI-powered password detection**: Secret scanning's generic secret detection scans repository content using AI to identify unstructured secrets (like passwords) that deterministic pattern matching cannot find. Detected secrets are surfaced as alerts in the secret scanning alert list under the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} {% ifversion security-and-quality-tab %}Security and quality{% else %}Security{% endif %}** tab.
* **AI-powered regular expression generation**: Secret scanning's regular expression generator takes a natural language description of the pattern you want to detect, along with optional example strings, and produces up to three candidate regular expressions. Each result includes an AI-generated plain language description, and you can validate patterns via a dry run before deployment.
* **Code quality issue detection**: GitHub Code Quality runs CodeQL quality queries on changed code in pull requests and periodically on the full default branch. These queries identify maintainability, reliability, and style issues.
* **LLM-powered code quality analysis**: After each push to the default branch, an LLM analyzes recently changed files for quality issues beyond what deterministic engines can find. Findings are displayed in the **AI findings** dashboard.
* **Automated fix suggestions for quality findings**: When a quality issue is detected by either type of analysis, Copilot Autofix generates a fix suggestion. On pull requests, the `github-code-quality` bot posts a comment with the suggested change.

## 4. Intended uses

GitHub Code Security AI features can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

* **Accelerating remediation of security vulnerabilities**: Use Copilot Autofix to quickly generate fix suggestions for CodeQL alerts, reducing the time and expertise required to address security issues found during code scanning.
* **Reducing the barrier to secure coding**: Copilot Autofix helps developers with limited secure-coding training. Instead of researching vulnerabilities independently, developers start with a code suggestion that demonstrates a potential solution for their codebase.
* **Streamlining pull request review**: When code scanning finds alerts on a pull request, Copilot Autofix provides suggested fixes inline, helping developers resolve security issues before merging.
* **Fixing alerts on the default branch**: Copilot Autofix can also generate fix suggestions for existing alerts on the default branch, helping teams reduce their backlog of security findings.
* **Detecting leaked passwords in source code**: Use generic secret detection to find unstructured secrets in repositories that fall outside the coverage of partner and custom secret scanning patterns.
* **Triaging credentials with contextual alerts**: When a password is detected, an alert with AI-detection context is displayed in the alerts list, enabling maintainers and security managers to review the finding and take action.
* **Creating custom secret scanning patterns without regex expertise**: Use the regular expression generator to define custom patterns by describing what you want to detect in natural language, removing the need to write regular expressions manually.
* **Validating generated patterns before deployment**: After generating regular expressions, use the dry-run mechanism to test patterns across your repository or organization before deploying them as custom patterns.
* **Surfacing code quality issues across a repository**: Use GitHub Code Quality to identify maintainability, reliability, and style issues so developers and administrators can quickly prioritize areas of risk.
* **Accelerating remediation of code quality findings**: Copilot Autofix suggests fixes for quality findings, combining information on best practices with details of the codebase to propose a potential fix directly on the pull request or in the AI findings dashboard.
* **Providing actionable feedback on pull requests**: The `github-code-quality` bot posts comments with suggested fixes on pull requests, helping developers address quality issues before merging.

## 5. Models and training data

Copilot Autofix uses internal GitHub Copilot APIs interfacing with the large language models, which produce both suggested fixes in code and explanatory text for those fixes.

Generic secret detection uses models to scan for unstructured secrets.

The custom pattern regular expression generator uses LLMs and the GitHub Copilot API to generate regular expressions that match user-provided descriptions and examples.

GitHub Code Quality's LLM-powered analysis uses Copilot language models to analyze recently changed files for quality issues. The CodeQL quality queries component does not use an LLM. Copilot Autofix for Code Quality findings uses the same LLM pipeline as Copilot Autofix for code scanning.

For a comparison of the models available for Copilot, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison). For the full list of supported models, see [AUTOTITLE](/copilot/reference/ai-models/supported-models). For information on where models are hosted, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting). To learn more about the data used to train the foundation models behind GitHub security and quality, see [What data has GitHub Copilot been trained on?](https://github.com/features/copilot#faq) in the GitHub Copilot FAQ.

Data handled by Copilot Autofix is not employed for LLM training purposes. The use of this feature is governed by the existing terms and conditions associated with GitHub Advanced Security. For more information, see [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security){% ifversion fpt %}.{% else %} in the Free, Pro, & Team documentation.{% endif %}

## 6. Performance

When Copilot Autofix is enabled for a repository, code scanning alerts are processed through the following pipeline:

1. **Input processing**: When a code scanning alert is identified, GitHub assembles the relevant data into a prompt for the language model. This data includes:
   * CodeQL alert data in SARIF format
   * Code from the current version of the branch, including short snippets around each source location, sink location, and any location referenced in the alert message or flow path
   * The first ~10 lines from each file involved in any of those locations
   * Help text for the CodeQL query that identified the problem
1. **Language model analysis**: The assembled prompt is sent to the language model, which analyzes the alert context, code structure, and query help information.
1. **Response generation**: The model generates a potential fix, including both the proposed code change and an explanatory text describing the fix.
1. **Output formatting**: The suggestion is stored within the code scanning backend and displayed as an inline suggestion on the pull request or alert detail page. No user interaction is needed beyond enabling code scanning on the codebase and creating a pull request.

### Differences by experience

**AI secret detection** processes input and produces output as follows:

1. **Input processing**: Input is limited to text (typically code) that a user has checked into a repository. The system provides this text to the model along with a meta prompt asking the model to find unstructured secrets within the scope of the input. The user does not interact with the model directly. Multiple models may be used to validate a single finding.
1. **Model analysis**: The model scans for strings that resemble unstructured secrets like passwords.
1. **Response generation**: The model verifies that the identified strings included in the response actually exist in the input.
1. **Output formatting**: Detected strings are surfaced as alerts on the secret scanning alerts page in a separate list from regular secret scanning alerts. Each alert notes that it was detected using AI.{% ifversion secret-scanning-ai-generic-secret-detection %} For information on how to view alerts for generic secrets, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts).{% endif %}

**Custom pattern regex generator** processes input and produces output as follows:

1. **Input processing**: Users input a natural language text description of the pattern they want to detect, along with optional example strings that should be matched.
1. **Language model analysis**: The description and examples are sent to the LLM via the GitHub Copilot API, which generates regular expressions matching the input.
1. **Response generation**: The model returns up to three candidate regular expressions. Each result includes an AI-generated plain language description. Some results may be quite similar, and some may not match every instance of the intended pattern.
1. **Output formatting**: Results are displayed in the custom pattern definition form. When you click **Use result**, the expression and any examples are copied to the main custom pattern form, where you can perform a dry run to validate the pattern across your repository or organization. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

**GitHub Code Quality LLM-powered analysis** processes input and produces output as follows:

1. **Input processing**: After each push to the default branch, recently changed files are combined with other relevant contextual information to form a prompt. The prompt is sent to a Copilot language model.
1. **Language model analysis**: The language model analyzes the code for maintainability, reliability, and other quality issues.
1. **Response generation**: The model generates a response that can include natural language suggestions and code suggestions linked to specific lines.
1. **Output formatting**: Findings are displayed in the **AI findings** dashboard under the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} {% ifversion security-and-quality-tab %}Security and quality{% else %}Security{% endif %}** tab. Where Code Quality provides a code suggestion, it is presented as a suggested change that can be applied with a couple of clicks.

**Copilot Autofix for Code Quality findings** on pull requests:

1. **Input processing**: Code quality findings from CodeQL analysis on a pull request are sent to the LLM along with surrounding code context.
1. **Language model analysis**: The LLM analyzes the finding and generates a potential fix.
1. **Response generation**: If the LLM can generate a fix, it produces a suggested code change.
1. **Output formatting**: The `github-code-quality` bot posts a comment on the pull request with the suggested change. Users can also request autofix generation for results on the default branch.

## 7. Limitations

Understanding GitHub Code Security AI features' limitations is crucial to determine if it is used within safe and effective boundaries. While we encourage customers to leverage GitHub Code Security AI features in their innovative solutions or applications, it's important to note that GitHub Code Security AI features was not designed for every possible scenario. We encourage users to refer to [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms) as well as the following considerations when choosing a use case:

* **Non-determinism**: Copilot Autofix uses a generative model that is non-deterministic. Even with the same alert and code, it might fail to produce a viable suggestion, or the suggestion might vary across attempts.
* **Problem complexity and context**: Some security alerts—such as those that require tracing data flow across a complex, multi-file codebase, or those that represent subtle logic flaws—could be difficult for the model to resolve.
* **File size**: If the affected code is within a very large file or repository, the context provided to the LLM may be truncated. When the context is limited, the feature will not attempt a fix.
* **Language and framework coverage**: While Copilot Autofix supports a growing list of languages and CodeQL alerts, it doesn't cover every possible alert type or language.
* **LLM operational capacity**: Fix generation is subject to LLM operational capacity. If no suggestion is available, or if a suggested fix fails internal testing, no suggestion is displayed.
* **English-centric data**: The system primarily uses English data, including the prompts, the code in the LLM's training datasets, and the test cases used for internal evaluation. Suggestions may have a lower success rate for source code and comments in other languages.
* **Syntax errors**: The system may suggest fixes that are not syntactically correct code changes.
* **Location errors**: The system may suggest fixes at incorrect locations. Accepting such a fix without editing the location may introduce a syntax error.
* **Semantic errors**: The system may suggest fixes that are syntactically valid but change the semantics of the program. The system has no understanding of the programmer's intent.
* **Security vulnerabilities and misleading fixes**: The system may suggest fixes that fail to remediate the underlying vulnerability or introduce new vulnerabilities.
* **Partial fixes**: The system may suggest fixes that only partially address the security vulnerability or only partially preserve intended code functionality.
* **Dependency changes**: Suggested fixes may include adding or updating software dependencies. The system does not know which dependency versions are supported or secure, and may suggest fabricated dependencies published under statistically probable names. Always verify dependency changes before merging.

### Limitations specific to AI secret detection

* **Incomplete reporting**: AI secret detection may miss instances of credentials checked into a repository. AI detection for secrets will improve over time. You retain ultimate responsibility for ensuring the security of your code.
* **Test code**: AI secret detection may not detect secrets in test code. Secret scanning skips detections when certain conditions are met, such as:
    * The file path contains "test", "mock", or "spec"
    * The file extension is `.cs`, `.go`, `.java`, `.js`, `.kt`, `.php`, `.py`, `.rb`, `.scala`, `.swift`, or `.ts`.

### Limitations specific to the custom pattern regex generator

* **Incomplete pattern coverage**: Generated regular expressions may not match all intended tokens. The quality of results depends on the specificity and clarity of the input description.
* **Invalid or inappropriate results**: The generator may produce regular expressions that are invalid or inappropriate for the intended use case.
* **Structured patterns only**: The regular expression generator is only suitable for creating patterns to detect structured, predictable formats—not free-form text matching.
* **English-centric performance**: The model was trained predominantly on English-language content. Performance may be lower when providing natural language input prompts in languages other than English.
* **Similar results**: Some of the returned regular expressions may be quite similar to each other, reducing the effective number of distinct candidate patterns.

### Limitations specific to GitHub Code Quality

* **Shared limitations with Copilot code review**: Code Quality's LLM-powered analysis uses the same underlying language model and analysis engine as Copilot code review. It shares similar limitations, including incomplete detection, false positives, code suggestion accuracy, and potential biases. For more information, see [AUTOTITLE](/copilot/responsible-use/code-review).
* **Best-effort autofix**: Copilot Autofix for Code Quality findings operates on a best-effort basis and is not guaranteed to generate a fix for every finding.
* **Review required**: You must always review suggestions from Copilot Autofix and edit changes as needed before accepting them.

## 8. Evaluations

{% data reusables.rai.copilot.application-card-evaluations %}

### Performance and quality evaluations

GitHub Security AI features are evaluated across its supported surfaces using a combination of industry-standard benchmarks (e.g., SWE-Bench) and internally developed evaluation suites. Benchmark tasks are sourced from public open-source repositories and synthetic scenarios; no real user queries or customer code are used without permission. Each evaluation includes multiple independent runs to account for nondeterminism in model outputs. Key metrics include resolution rate (percentage of tasks successfully completed), token efficiency, latency, and tool call reliability. Models are re-evaluated when updates are made and monitored continuously in production via error rates, response latency, and aggregate usage patterns. 

### Performance and quality evaluation methods

New models undergo a staged evaluation process before deployment to Code Security, Code Quality, and Secret Protection. Integrator teams run benchmark suites specific to their surface, testing the model on representative coding tasks such as bug fixes, code generation, and multi-file refactoring. Results are reviewed against established baselines and existing production models. Models must meet or exceed baseline performance across key metrics like resolution rate, token efficiency, and latency, before advancing to the next stage.

### Risk and safety evaluations

{% data reusables.rai.copilot.application-card-risk-and-safety-evaluations %}

### Evaluation data for quality and safety

{% data reusables.rai.copilot.application-card-evaluation-data-for-quality-and-safety %}

### Custom evaluations

GitHub uses an automated test harness to continuously monitor the quality of Copilot Autofix suggestions. The test harness includes a set of over 2,300 alerts from a diverse set of public repositories where the highlighted code has test coverage. Suggestions for these alerts are tested to determine how much a developer would need to edit them before committing them to the codebase. For many of the test alerts, suggestions generated by the LLM could be committed as-is to fix the alert while continuing to successfully pass all existing CI tests.

GitHub tests the effectiveness of suggestions by merging all suggested changes, unedited, before running code scanning and the repository's unit tests on the resulting code:

1. Was the code scanning alert fixed by the suggestion?
1. Did the fix introduce any new code scanning alerts?
1. Did the fix introduce any syntax errors that code scanning can detect?
1. Has the fix changed the output of any of the repository tests?

In addition, GitHub spot-checks many successful suggestions and verifies that they fix the alert without introducing new problems. When one or more of these checks fail, manual triage showed that in many cases the proposed fix was nearly correct but needed some minor modifications that a user could identify and manually perform.

The system is also stress-tested to check for potential harm (red teaming), and a filtering system on the LLM helps prevent potentially harmful suggestions from being displayed to users.

AI secret detection has been subject to Responsible AI Red Teaming and GitHub continues to monitor the efficacy and safety of the feature over time.

Custom pattern regex generator results are validated through the dry-run mechanism, which allows users to test generated patterns across their repository or organization before deploying them as custom patterns. This built-in validation step helps ensure that generated regular expressions perform as expected before they are used in production.

GitHub Code Quality's LLM-powered analysis shares the evaluation framework of Copilot code review. Copilot Autofix suggestions for Code Quality findings follow the same test harness as Copilot Autofix for code scanning.

## 9. Safety components and mitigations

* **Human-in-the-loop review**: Copilot Autofix presents all suggestions as proposed code changes that require explicit developer review and acceptance before being applied. Developers must evaluate each suggestion and verify it maintains the codebase's intended behavior.
* **Content filtering**: A filtering system on the LLM detects and prevents potentially harmful suggestions from being displayed to users. The system is stress-tested through red teaming to identify potential vulnerabilities.
* **Internal quality testing**: Suggestions that fail internal testing are not displayed to users. Fix generation is only shown when the system has sufficient confidence in the suggestion's quality.
* **Opt-in/opt-out controls**: Copilot Autofix is allowed by default and enabled for every repository using CodeQL, but administrators can disable Copilot Autofix at the enterprise, organization, and repository levels. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning).
* **No training on customer data**: Data handled by Copilot Autofix is not employed for LLM training purposes. The use of this feature is governed by the existing terms and conditions associated with GitHub Advanced Security.
* **False positive feedback loop**: When users close a generic secret detection alert and mark the reason as "False positive," GitHub uses the false positive volume to improve the model. GitHub does not have access to the secret literals themselves.
* **Dry-run validation for generated patterns**: Generated regular expressions from the custom pattern regex generator must go through a dry-run validation step before deployment. Users explicitly import a result into the custom pattern form and test it across their repository or organization, ensuring patterns perform as expected before they are used in production.
* **Explicit user action required**: The regex generator does not automatically deploy patterns. Users must click **Use result** to copy a generated expression into the custom pattern form, then manually save and enable the pattern.
* **Feedback mechanism for Code Quality**: Users can provide feedback on Code Quality suggestions using the thumbs up and thumbs down buttons on the `github-code-quality` bot's comments, helping GitHub improve suggestion quality.
* **Preview-gated availability**: GitHub Code Quality is available as a preview, allowing organizations to evaluate the feature before broader adoption.

## 10. Best practices for deploying and adopting GitHub Code Security AI features

Responsible AI is a shared commitment between GitHub and its customers. While GitHub builds AI applications with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

* **Exercise caution and evaluate outcomes when using GitHub Security AI features for consequential decisions or in sensitive domains**: {% data reusables.rai.copilot.application-card-consequential-decisions %}
* **Evaluate legal and regulatory considerations**: {% data reusables.rai.copilot.application-card-evaluate-legal-regulatory %}
* **Always review suggestions before accepting**: Evaluate the proposed code change to ensure it correctly fixes the security vulnerability without changing the intended behavior of your code. Having good test coverage helps verify that a fix does not change the behavior of the codebase.
* **Verify CI tests pass**: After committing a suggested fix or modified fix, always verify that continuous integration testing (CI) for the codebase continues to pass and that the alert is shown as resolved before merging your pull request.
* **Review dependency changes carefully**: If a suggested fix includes changes to dependencies, verify that any added or updated dependencies are secure, supported, and maintain the intended behavior of the codebase. Use dependency management solutions, such as the dependency review API and action, to evaluate changes. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
* **Close false positive alerts appropriately**: Since AI secret detection may generate more false positives than partner pattern detection, review the accuracy of each alert. When you verify an alert to be a false positive, close the alert and mark the reason as "False positive" in the GitHub UI. This feedback helps improve the model.
* **Validate generated regex patterns with a dry run**: When using the custom pattern regex generator, always perform a dry run across representative repositories before deploying a generated pattern organization-wide.
* **Be specific with descriptions**: To improve the quality of generated regular expressions, be as specific as possible with your natural language descriptions and include diverse example strings that represent the patterns you want to detect.
* **Review all generated patterns**: Carefully review each of the generated regular expressions, including the AI-generated plain language descriptions, and consider modifying results to more fully meet your needs. You remain ultimately responsible for any custom patterns you decide to use.
* **Review Code Quality findings before applying fixes**: Always verify the accuracy and applicability of Code Quality findings and Autofix suggestions to your codebase before accepting them.
* **Provide feedback on Code Quality suggestions**: Use the thumbs up and thumbs down buttons on the `github-code-quality` bot's comments to help improve the tool and address any concerns or limitations.
* **Exercise human oversight when appropriate**: Human oversight is an important safeguard when interacting with AI applications. While we continuously improve our AI applications, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by GitHub Code Security AI features and verify that they match their expectations and requirements.
* **Be aware of the risk of overreliance**: {% data reusables.rai.copilot.application-card-overreliance %}
* **Exercise caution when designing agentic AI in sensitive domains**: {% data reusables.rai.copilot.application-card-agentic-ai-caution %}
* **Enable CI testing on pull requests**: Ensure continuous integration testing is in place before enabling Copilot Autofix, so that functional requirements are verified after developers apply fixes.
* **Use dependency management solutions**: Enable dependency review on pull requests to catch potentially risky dependency changes introduced by Autofix suggestions.
* **Review security overview metrics**: Use your organization's security overview dashboard to view the total number of Copilot Autofix suggestions generated on open and closed pull requests for a given time period. For more information, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights#autofix-suggestions).
* **Evaluate false-positive volume for secret detection**: Evaluate the false-positive volume and establish triage processes for the alerts list.
* **Monitor Code Quality suggestion volume and quality**: Evaluate the volume and quality of Code Quality suggestions and adjust enablement as appropriate for your organization.

## 11. Learn more about GitHub Security AI features

For additional guidance on the responsible use of GitHub Security AI features, we recommend reviewing the following documentation:

* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests#working-with-autofix-suggestions-for-alerts-on-a-pull-request)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts#generating-suggested-fixes-for-code-scanning-alerts)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/disabling-autofix-for-code-scanning)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#advanced-security)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/enabling-ai-powered-generic-secret-detection)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning){% ifversion ghec %}
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-the-use-of-generic-secret-detection-for-secret-scanning-in-your-enterprises-repositories){% endif %}
* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-copilot-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)
* [AUTOTITLE](/code-security/code-quality/get-started/quickstart)
* [AUTOTITLE](/copilot/responsible-use/code-review)
* [Community discussion for Code Quality feedback](https://github.com/orgs/community/discussions/177488)

### Learn more about responsible AI

* [Microsoft AI principles](https://www.microsoft.com/en-us/ai/responsible-ai)
* [Microsoft responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)
* [Microsoft Azure Learning courses on responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)
