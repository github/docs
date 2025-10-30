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

As development teams works to deliver new features and keep their applications running smoothly, their focus is often on speed and functionality. However, over time, small issues can accumulate, such as:

* Known security weaknesses that haven't been fixed
* Reliance on older software components with potential flaws
* Delays in addressing problems when they are discovered

For many organizations, this accumulation of unresolved security issues and outdated components creates a significant backlog—a **security debt**.

This debt carries real risks. The longer it goes unaddressed, the larger it can grow and the more costly it becomes to resolve. A large security debt can leave systems vulnerable to attacks, expose sensitive data, and ultimately erode customer trust and impact the bottom line.

The challenge is to balance the need for rapid development with the crucial responsibility of maintaining a secure and stable software environment.

## 2. Evaluate your options

{% data reusables.copilot.evaluate-options-intro %}

<a href="https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How {% data variables.product.prodname_copilot_short %} can help

{% data variables.product.prodname_copilot %} can help mitigate security debt by integrating security considerations directly into the development lifecycle. Its capabilities can make it easier for developers to proactively identify and address potential vulnerabilities and keep their projects up-to-date.

{% data variables.product.prodname_copilot_short %} can help reduce security vulnerabilities throughout the software development lifecycle.

#### During development

{% data variables.product.prodname_copilot_short %} proactively reviews code as it's written, leveraging its understanding of common security flaws and patterns to flag areas that might be susceptible to exploitation. This real-time analysis can surface hidden vulnerabilities that might otherwise be missed during standard development or initial security reviews.

When issues are identified, {% data variables.product.prodname_copilot_short %} can instantly suggest actionable code changes to remediate vulnerabilities, empowering developers to address weaknesses early in the development cycle and prevent security debt from accumulating.

#### Ongoing maintenance

{% data variables.product.prodname_copilot_short %} integrates with {% data variables.product.github %}'s code scanning capabilities to keep your existing codebase secure. When code scanning identifies a potential security alert, {% data variables.copilot.copilot_autofix_short %} can intelligently analyze the vulnerability and provide targeted, context-specific recommendations to resolve it.

These concrete fix suggestions streamline remediation, reducing the time developers spend researching vulnerabilities and figuring out how to address them. As a result, security alerts are resolved more efficiently and are less likely to linger or contribute to ongoing security debt.

### Cultural considerations

{% data reusables.copilot.cultural-factors-intro %}

* Teams might **ignore or defer security debt**, allowing inefficient and vulnerable systems to persist. This could be caused by a deadline-driven focus on features, or a lack of education about the long-term impact of security debt.
* Teams might **build overly complex solutions** for simple problems, which makes code harder to maintain and security issues harder to detect. This could be caused by a desire to future-proof
unnecessarily or pressure to add value through complexity.

## 3. Implement changes

{% data reusables.copilot.implement-changes-intro %}

* [Analyze your code for security vulnerabilities](#analyze-your-code-for-security-vulnerabilities)
* [Use {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts](#use-copilot-autofix-for-code-scanning-alerts)
* [Best practices for developers](#best-practices-for-developers)
* [Resources for developers](#resources-for-developers)

### Analyze your code for security vulnerabilities

Depending on the size of your codebase, {% data variables.product.prodname_copilot_short %} may not be able to analyze the entire project while developers are writing code, due to context restraints. However, developers can adopt a practice of asking {% data variables.product.prodname_copilot_short %} to analyze specific files for insecure code practices.

1. Open the files to analyze in {% data variables.product.prodname_vscode %}.
1. In {% data variables.copilot.copilot_chat_short %}, ask: `Analyze this code for potential security vulnerabilities and suggest fixes`

   You can also use the `#file` chat variable to specifically include a file's content in the prompt, or use prompt files and custom instructions to guide {% data variables.product.prodname_copilot_short %}'s responses.

1. {% data variables.copilot.copilot_chat_short %} will analyze the code, identify the security vulnerabilities, and suggest the appropriate fixes.
1. Review the suggested changes and apply them as appropriate.

Other examples of prompts include:
* `Are there any security vulnerabilities in my code? If so, can you explain them and suggest fixes?`
* `Does this code follow secure code best practices? If not, what specific improvements can I make?`
* `What are the potential security risks in this code if it were deployed to production? How can I mitigate them?`

### Use {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts

{% data variables.copilot.copilot_autofix_short %} is a component of {% data variables.product.prodname_GH_code_security %} that can suggest potential fixes to {% data variables.product.prodname_code_scanning %} alerts. {% data variables.copilot.copilot_autofix_short %} is available in public repositories and repositories with a license for {% data variables.product.prodname_GH_code_security %}.

When someone runs a code scan on a repository, potential issues are raised as {% data variables.product.prodname_code_scanning %} alerts in the repository. Developers can resolve the alerts by following this flow:

1. Open an alert on GitHub.
1. Click **Generate fix**, which is displayed if Copilot can resolve the alert.
1. {% data variables.copilot.copilot_autofix_short %} will generate a potential fix for this alert, showing you the code changes in the alert itself. It then gives you the option to commit this code change to a new branch or an existing branch.
1. At this point you can test the code, then open a pull request to move the changes to the main branch.
1. Once you move the changes to the main branch and {% data variables.product.prodname_code_scanning %} verifies the alert is fixed, the alert will be closed automatically.

### Best practices for developers

Developers **should**:

* **Use {% data variables.copilot.copilot_chat_short %} regularly to analyze code snippets for vulnerabilities**: Make it a habit to proactively check code for security issues before committing changes.
* **Leverage {% data variables.copilot.copilot_autofix_short %} for {% data variables.product.prodname_code_scanning %} alerts**: When alerts appear, use {% data variables.copilot.copilot_autofix_short %} as a first step to quickly address them.
* **Provide clear and specific prompts to {% data variables.copilot.copilot_chat_short %}**: The more detailed your request, the better {% data variables.product.prodname_copilot_short %} can analyze the code and suggest relevant fixes. For example, include the programming language and specific areas of concern in your prompts.
* **Combine {% data variables.product.prodname_copilot_short %} with existing security tools**: Use {% data variables.product.prodname_copilot_short %} as an additional layer of security analysis, not as a replacement for dedicated security scanners and practices.

Developers **should not**:

* **Automatically accept {% data variables.product.prodname_copilot_short %}'s security suggestions**: Always review and test the code changes suggested by {% data variables.product.prodname_copilot_short %} to ensure they are appropriate and effective.
* **Rely solely on {% data variables.product.prodname_copilot_short %} for comprehensive security audits**: {% data variables.product.prodname_copilot_short %} is a helpful tool, but it should not replace thorough security reviews and penetration testing.
* **Ignore {% data variables.product.prodname_code_scanning %} alerts**: Address all alerts promptly, even if they seem minor, to prevent the accumulation of security debt.
* **Use {% data variables.product.prodname_copilot_short %} as an excuse to avoid learning secure coding practices**: Continue to educate yourself and your team on security best practices.
* **Assume {% data variables.product.prodname_copilot_short %} will catch every vulnerability**: Security is an ongoing process, and vigilance is always necessary.
* **Use {% data variables.product.prodname_copilot_short %} to bypass security policies**: Adhere to your organization's security protocols, and use {% data variables.product.prodname_copilot_short %} as a tool to enhance them, not circumvent them.

### Resources for developers

* [{% data variables.copilot.copilot_chat_dotcom_short %}](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github)
* [AUTOTITLE](/copilot/copilot-chat-cookbook/security-analysis/finding-existing-vulnerabilities-in-code)
* [{% data variables.product.prodname_learning %} - Getting Started with {% data variables.product.prodname_copilot %}](https://github.com/skills/getting-started-with-github-copilot)

## Metrics to watch

{% data reusables.copilot.measure-changes-intro %}

* **Security debt ratio**: Use security overview to see if the number of alerts falls over time.
* **Time to remediate security issues**: Use security overview to see if the time to remediate security issues falls over time.

See [AUTOTITLE](/code-security/security-overview/assessing-code-security-risk).
