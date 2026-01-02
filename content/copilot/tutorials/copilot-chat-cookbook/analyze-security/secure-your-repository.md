---
title: Securing your repository
shortTitle: Secure your repository
intro: '{% data variables.copilot.copilot_chat_short %} can help you to secure your repository and your code.'
versions:
  feature: copilot
category:
  - Security analysis
complexity:
  - Simple
octicon: code
topics:
  - Copilot
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/security-analysis/securing-your-repository
  - /copilot/tutorials/copilot-chat-cookbook/security-analysis/secure-your-repository
contentType: tutorials
---

## Configure essential security features

### Example scenario

Let's say you recently created a repository for a new web application, you want to secure it and you don't know where to start.

{% data variables.copilot.copilot_chat_short %} can walk you through configuring the most essential security features to ensure your repository remains secure.

### Example prompt

`Provide step-by-step instructions on how to enable the following essential security features in my GitHub repository:`

`* Secret scanning`

`* Push protection`

`* Dependabot alerts`

`* Dependabot security updates`

`* Branch protection rules, including enforced code reviews before merging`

`Explain why each feature is important and how it helps secure my repository.`

### Example response

{% data variables.copilot.copilot_chat_short %} provides information on each security feature and explains how to enable it.

```markdown
Why it's important:

Secret scanning automatically detects accidentally committed secrets (API keys, credentials, etc.) in your repository.

How it helps:

Leaked secrets can allow attackers to access systems, steal data, or cause other harm. Early detection prevents misuse.

How to Enable:

1. Go to your repository on {% data variables.product.github %}.
1. Click on Settings.
1. In the left sidebar, click Code security.
1. Scroll to Secret scanning.
1. Ensure "Secret scanning" and "Push protection" are both enabled.
1. If not, click Enable.
```

## Encourage secure contributions and best practices with a security policy

### Example scenario

Let's say you want to share your project publicly, and want to set out a clear security policy to guide users on how to safely report vulnerabilities found in your repository.

{% data variables.copilot.copilot_chat_short %} can write a security policy for your repository.

### Example prompt

`Write a GitHub security policy (SECURITY.md) for my repository. The policy should include:`

`* A clear description of how users can report security vulnerabilities.`

`* A response timeline for security issues.`

`* Guidelines for responsible disclosure.`

`* Supported versions of the software.`

`Format it as a well-structured Markdown document.`

### Example output

{% data variables.copilot.copilot_chat_short %} produces a `SECURITY.md` file that you can commit to your repository.

```markdown
# Security Policy

Thank you for helping to keep this project and its users secure! This document outlines the security policy and responsible disclosure guidelines for this repository.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it by emailing **security@yourdomain.com** or by using the GitHub [security advisories](https://github.com/octocat/octocat-repo/security/advisories) feature.  
**Do not** report security vulnerabilities via public GitHub issues or pull requests.

When reporting a vulnerability, please include as much information as possible to help us understand and reproduce the issue:
- A clear description of the vulnerability.
- Steps to reproduce the issue.
- Any relevant logs, screenshots, or proof-of-concept code.
- Your assessment of the potential impact.

## Response Timeline

We take security issues seriously and will respond according to the following guidelines:
- **Acknowledgment:** We will acknowledge receipt of your report within **3 business days**.
- **Investigation:** We will investigate and assess the report as quickly as possible, usually within **7 business days**.
- **Resolution:** Once a fix is identified, we will work to release a security update promptly. We will coordinate with you as needed, especially if you are the reporter.
- **Disclosure:** We will notify the community of the vulnerability and fix via a GitHub security advisory, and credit the reporter as appropriate.

## Responsible Disclosure Guidelines

To protect users of this project, we ask that you:
- Avoid public disclosure of the vulnerability until it has been investigated and patched.
- Allow us a reasonable amount of time to resolve the issue before any public disclosure.
- Provide relevant details privately (see "Reporting a Vulnerability" above).
- Act in good faith and avoid exploiting the vulnerability beyond what is necessary for your report.

We are committed to working with security researchers and the community to ensure a safe and secure software ecosystem.
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
