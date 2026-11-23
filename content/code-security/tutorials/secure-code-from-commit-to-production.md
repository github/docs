---
title: Secure code from an agent's first commit to production
shortTitle: Agentic security journey
allowTitleToDifferFromFilename: true
intro: 'AI agents ship code faster than security teams can review it by hand. {% data variables.product.github %} closes that gap with security built into every stage of the software development lifecycle, from local review to organization-wide detection and automated remediation, all without leaving {% data variables.product.github %}.'
introLinks:
  get_a_free_risk_assessment: 'https://github.com/security/advanced-security/assessments?ref_product=code-scanning&ref_type=engagement&ref_style=button&utm_source=docs-cta-secure-code-commit-product-landing-code-security&utm_medium=docs&utm_campaign=ignite-nov-2026'
layout: journey-landing
versions:
  fpt: '*'
  ghec: '*'
contentType: tutorials
audience:
  - driver
category:
  - Secure at scale
journeyArticlesHeading: 'All code security articles'
journeyTracks:
  - id: 'local-review'
    title: 'Review an agent''s changes before you push'
    description: 'Run a local security review of an AI agent''s changes directly from {% data variables.copilot.copilot_cli %}, your IDE, or the {% data variables.product.prodname_copilot %} app, before code ever reaches {% data variables.product.github %}. Scan for exposed secrets and other vulnerabilities, then review and fix alerts without leaving your editor.'
    timeCommitment: '10–15 minutes'
    guides:
      - href: '/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server'
      - href: '/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts'
  - id: 'stop-leaks'
    title: 'Stop leaked credentials before they reach your repository'
    description: 'Detect secrets as they are pushed, including AI-powered detection of unstructured secrets like passwords. Push protection blocks the push before the secret reaches your repository.'
    timeCommitment: '15–30 minutes'
    guides:
      - href: '/code-security/concepts/secret-security/push-protection'
      - href: '/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enable-ai-push-protection'
  - id: 'hybrid-detection'
    title: 'Detect vulnerabilities at scale with hybrid detection'
    description: 'Combine {% data variables.product.prodname_codeql %} with AI-powered scanning for layered coverage. Qualifying pull requests get an extra AI review in languages {% data variables.product.prodname_codeql %} doesn''t support, and you can manually trigger an {% data variables.product.prodname_ai_scan %} of your repository''s default branch to catch more vulnerabilities.'
    timeCommitment: '1–2 hours'
    guides:
      - href: '/code-security/concepts/code-scanning/code-scanning'
      - href: '/code-security/concepts/code-scanning/ai-scan-for-repositories'
      - href: '/code-security/concepts/code-scanning/ai-powered-security-detections'
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-vulnerability-risk'
  - id: 'merge-governance'
    title: 'Define and enforce the rules for merging code'
    description: 'Set organization rulesets and policies that define your merge requirements, including required reviews and status checks. Every pull request, whether written by a person or an agent, stays subject to the same rules.'
    timeCommitment: '30–60 minutes'
    guides:
      - href: '/admin/overview/establishing-a-governance-framework-for-your-enterprise'
      - href: '/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization'
      - href: '/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection'
  - id: 'remediate-at-scale'
    title: 'Resolve alerts with draft pull requests'
    description: 'Assign alerts to {% data variables.copilot.agentic_autofix_caps %}. It investigates each alert and opens a draft pull request with a proposed fix, ready for your team to review and merge under your existing rules. Track remediation progress across your organization with security campaigns.'
    timeCommitment: '30–60 minutes'
    guides:
      - href: '/code-security/concepts/code-scanning/autofix-for-code-scanning'
      - href: '/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts'
      - href: '/code-security/concepts/security-at-scale/about-security-campaigns'
  - id: 'code-quality'
    title: 'Go beyond security to code quality'
    description: 'Catch quality issues alongside security issues, using the same {% data variables.product.prodname_codeql %} engine and AI-powered analysis. Findings appear as inline pull request comments with suggested fixes, so code stays maintainable as agents generate more of it.'
    timeCommitment: '15–30 minutes'
    guides:
      - href: '/get-started/learning-about-github/about-github-code-quality'
      - href: '/code-security/how-tos/maintain-quality-code/enable-code-quality'
---
