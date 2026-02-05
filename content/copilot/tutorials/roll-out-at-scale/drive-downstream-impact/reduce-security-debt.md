---
title: Reducing security debt in your company with GitHub Copilot
shortTitle: Reduce security debt
intro: 'Understand features, enable developers, and measure {% data variables.product.prodname_copilot_short %}''s impact.'
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/driving-downstream-impact/reduce-security-debt
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/drive-downstream-impact/reduce-security-debt
contentType: tutorials
category:
  - Roll Copilot out at scale
  - Manage Copilot for a team
---

{% data reusables.copilot.essp-intro %}

## 1. Identify barriers to success

{% data reusables.copilot.identify-barriers-intro %}

Development teams often focus on speed and functionality to deliver new features and keep applications running smoothly. Over time, small issues can accumulate, such as:

* Known security weaknesses that remain unfixed
* Reliance on older software components with potential flaws
* Delays in addressing discovered problems

This creates a **security debt**, a significant backlog of issues.

Security debt carries real risks. The longer it goes unaddressed, the larger and more costly it becomes. Large security debt leaves systems vulnerable to attacks, exposes sensitive data, and erodes customer trust.

The challenge is balancing rapid development with maintaining a secure and stable software environment.

## 2. Evaluate your options

{% data reusables.copilot.evaluate-options-intro %}

<a href="https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How {% data variables.product.prodname_copilot_short %} can help

{% data variables.product.prodname_copilot_short %} integrates security considerations directly into the development lifecycle. This helps developers proactively identify and address potential vulnerabilities while keeping projects up-to-date.

{% data variables.product.prodname_copilot_short %} reduces security vulnerabilities throughout the software development lifecycle.

#### During development

{% data variables.product.prodname_copilot_short %} reviews code as you write it. It uses its understanding of common security flaws to flag areas that might be vulnerable to exploitation. This real-time analysis surfaces hidden vulnerabilities that might be missed during standard development or initial security reviews.

When {% data variables.product.prodname_copilot_short %} identifies issues, it suggests code changes to fix vulnerabilities. This empowers you to address weaknesses early and prevent security debt from accumulating.

#### Ongoing maintenance

{% data variables.product.prodname_copilot_short %} integrates with {% data variables.product.github %}'s code scanning capabilities to keep your existing codebase secure. When code scanning identifies a security alert, {% data variables.copilot.copilot_autofix_short %} analyzes it and provides targeted recommendations to resolve it.

These suggested fixes reduce the time you spend researching vulnerabilities and determining how to address them. This helps you resolve security alerts more efficiently and prevents ongoing security debt.

### Cultural considerations

{% data reusables.copilot.cultural-factors-intro %}

* Teams might **ignore or defer security debt**. This allows inefficient and vulnerable systems to persist. This could be caused by a deadline-driven focus on features or a lack of education about the long-term impact of security debt.
* Teams might **build overly complex solutions** for simple problems. This makes code harder to maintain and security issues harder to detect. This could be caused by a desire to future-proof unnecessarily or by pressure to add value through complexity.

## 3. Implement changes

{% data reusables.copilot.implement-changes-intro %}

* [Analyze your code for security vulnerabilities](#analyze-your-code-for-security-vulnerabilities)
* [Use {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts](#use-copilot-autofix-for-code-scanning-alerts)
* [Best practices for developers](#best-practices-for-developers)
* [Resources for developers](#resources-for-developers)

### Analyze your code for security vulnerabilities

Depending on the size of your codebase, {% data variables.product.prodname_copilot_short %} may not be able to analyze your entire project while you are writing code. This is due to context constraints. However, you can ask it to analyze specific files for insecure code practices.

1. Open the files to analyze in {% data variables.product.prodname_vscode %}.
1. In {% data variables.copilot.copilot_chat_short %}, ask: `Analyze this code for potential security vulnerabilities and suggest fixes`

   Use the `#file` chat variable to specifically include a file's content in the prompt. You can also use prompt files and custom instructions to guide {% data variables.product.prodname_copilot_short %}'s responses.

1. {% data variables.copilot.copilot_chat_short %} analyzes the code, identifies security vulnerabilities, and suggests fixes.
1. Review the suggested changes and apply them as appropriate.

Other examples of prompts:
* `Are there any security vulnerabilities in my code? If so, can you explain them and suggest fixes?`
* `Does this code follow secure code best practices? If not, what specific improvements can I make?`
* `What are the potential security risks in this code if it were deployed to production? How can I mitigate them?`

### Use {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts

{% data variables.copilot.copilot_autofix_short %} is a part of {% data variables.product.prodname_GH_code_security %} that suggests potential fixes to {% data variables.product.prodname_code_scanning %} alerts. It is available in public repositories and repositories with a license for {% data variables.product.prodname_GH_code_security %}.

When you run a code scan on a repository, potential issues are raised as {% data variables.product.prodname_code_scanning %} alerts. Resolve the alerts by following these steps:

1. Open an alert on GitHub.
1. Click **Generate fix**. This displays when Copilot can resolve the alert.
1. {% data variables.copilot.copilot_autofix_short %} generates a potential fix and shows you the code changes in the alert. You can commit this code change to a new branch or an existing branch.
1. Test the code. Then open a pull request to move the changes to the main branch.
1. After you move the changes to the main branch and {% data variables.product.prodname_code_scanning %} verifies the fix, the alert closes automatically.

### Best practices for developers

Developers **should**:

* **Use {% data variables.copilot.copilot_chat_short %} regularly to analyze code snippets for vulnerabilities**. Make it a habit to check code for security issues before committing changes.
* **Use {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts**. When alerts appear, use {% data variables.copilot.copilot_autofix_short %} as a first step to quickly address them.
* **Provide clear and specific prompts to {% data variables.copilot.copilot_chat_short %}**. The more detailed your request, the better {% data variables.product.prodname_copilot_short %} can analyze the code and suggest relevant fixes. For example, include the programming language and specific areas of concern.
* **Combine {% data variables.product.prodname_copilot_short %} with existing security tools**. Use {% data variables.product.prodname_copilot_short %} as an additional layer of security analysis, not as a replacement for dedicated security scanners and practices.

Developers **should not**:

* **Automatically accept {% data variables.product.prodname_copilot_short %}'s security suggestions**. Always review and test the suggested code changes to ensure they are appropriate and effective.
* **Rely solely on {% data variables.product.prodname_copilot_short %} for comprehensive security audits**. {% data variables.product.prodname_copilot_short %} is a helpful tool, but it should not replace thorough security reviews and penetration testing.
* **Ignore {% data variables.product.prodname_code_scanning %} alerts**. Address all alerts promptly, even if they seem minor, to prevent the accumulation of security debt.
* **Use {% data variables.product.prodname_copilot_short %} as an excuse to avoid learning secure coding practices**. Continue to educate yourself and your team on security best practices.
* **Assume {% data variables.product.prodname_copilot_short %} will catch every vulnerability**. Security is an ongoing process, and vigilance is always necessary.
* **Use {% data variables.product.prodname_copilot_short %} to bypass security policies**. Adhere to your organization's security protocols. Use {% data variables.product.prodname_copilot_short %} as a tool to enhance them, not circumvent them.

### Resources for developers

* [{% data variables.copilot.copilot_chat_dotcom_short %}](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github)
* [AUTOTITLE](/copilot/copilot-chat-cookbook/security-analysis/finding-existing-vulnerabilities-in-code)
* [{% data variables.product.prodname_learning %} - Getting Started with {% data variables.product.prodname_copilot %}](https://github.com/skills/getting-started-with-github-copilot)

## Metrics to watch

{% data reusables.copilot.measure-changes-intro %}

* **Security debt ratio**. Use security overview to see if the number of alerts falls over time.
* **Time to remediate security issues**. Use security overview to see if the time to remediate security issues falls over time.

See [AUTOTITLE](/code-security/security-overview/assessing-code-security-risk).
