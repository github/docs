---
title: Secure your secrets at scale with GitHub
shortTitle: Secret protection
allowTitleToDifferFromFilename: true
intro: 'Leaked credentials expose your organization to data breaches. GitHub Secret Protection detects and prevents secret leaks automatically. Follow this adoption path to assess risk, pilot the solution, and scale protection organization-wide.'
layout: journey-landing
versions:
  feature: secret-risk-assessment
contentType: tutorials
category:
  - Secure at scale
  - Protect your secrets
journeyArticlesHeading: 'All secret protection articles'
journeyTracks:
  - id: 'quick_start'
    title: 'Quick start: Essential reading'
    description: 'New to secret protection? Start here for the most important concepts and procedures. These articles provide foundational knowledge to help you understand secret risks, evaluate GitHub Secret Protection (GHSP), and begin your adoption journey.'
    guides:
      - href: '/code-security/concepts/secret-security/secret-leakage-risks'
      - href: '/code-security/concepts/secret-security/about-secret-scanning'
      - href: '/code-security/tutorials/secure-your-organization/interpreting-secret-risk-assessment-results'
      - href: '/code-security/tutorials/remediate-leaked-secrets/assessing-ghsp-impact'
      - href: '/code-security/concepts/secret-security/about-push-protection'
  - id: 'assess'
    title: 'Phase 1: Assess your current secret risk'
    description: 'Run a free secret risk assessment (SRA) to understand your organization exposure and establish baseline metrics. Before purchasing GHSP, identify how many secrets are exposed across your organization and build a data-driven business case for the investment.'
    timeCommitment: '10 minutes to run, 30 minutes to analyze results'
    guides:
      - href: '/code-security/concepts/secret-security/secret-leakage-risks'
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk'
      - href: '/code-security/tutorials/secure-your-organization/interpreting-secret-risk-assessment-results'
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/viewing-your-security-risk-assessment-reports'
  - id: 'evaluate'
    title: 'Phase 2: Evaluate GitHub Secret Protection'
    description: 'Determine if GHSP meets your needs and build a business case. Review detection capabilities, push protection features, and validity checking. Use the pricing calculator to estimate costs and calculate potential cost savings from preventing manual remediation.'
    timeCommitment: '2-4 hours'
    guides:
      - href: '/code-security/concepts/secret-security/about-secret-scanning'
      - href: '/code-security/concepts/secret-security/about-push-protection'
      - href: '/code-security/reference/secret-security/supported-secret-scanning-patterns'
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/estimating-the-price-of-secret-protection'
      - href: '/code-security/tutorials/remediate-leaked-secrets/calculating-the-cost-savings-of-push-protection'
  - id: 'pilot'
    title: 'Phase 3: Pilot GitHub Secret Protection'
    description: 'Run a pilot to validate GHSP with a small set of repositories before organization-wide enablement. Select 5-10 repositories with active development and known secret exposure. If you estimated pricing in Phase 2, you''ll confirm costs as part of the enablement flow. A successful pilot demonstrates security value quickly, identifies workflow adjustments, and gathers feedback to refine your rollout strategy.'
    timeCommitment: '2-4 weeks'
    guides:
      - href: '/code-security/concepts/security-at-scale/best-practices-for-selecting-pilot-repositories'
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/protect-your-secrets'
      - href: '/code-security/how-tos/secure-your-secrets/prevent-future-leaks/enabling-push-protection-for-your-repository'
      - href: '/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret'
  - id: 'monitor'
    title: 'Phase 4: Monitor and assess value'
    description: 'Track metrics to demonstrate ROI and identify areas for improvement. Monitor how many secrets are being detected, how often developers bypass push protection, and how quickly leaked secrets are remediated. Use these insights to refine your rollout strategy, prove value to stakeholders, and justify organization-wide deployment.'
    timeCommitment: '1-2 hours per week during pilot'
    guides:
      - href: '/code-security/tutorials/remediate-leaked-secrets/assessing-ghsp-impact'
      - href: '/code-security/concepts/secret-security/push-protection-metrics'
      - href: '/code-security/tutorials/secure-your-organization/organizing-remediation-efforts-for-leaked-secrets'
      - href: '/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts'
  - id: 'scale'
    title: 'Phase 5: Scale, customize, and automate'
    description: 'Expand GHSP organization-wide and tailor it to your specific workflows. Use validity checks to prioritize remediation, define custom patterns for organization-specific secrets, and apply security configurations at scale. For advanced use cases, enable AI-powered detection and integrate with automated workflows.'
    timeCommitment: '1-2 weeks for initial rollout, ongoing for optimization'
    guides:
      - href: '/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/applying-a-custom-security-configuration'
      - href: '/code-security/how-tos/secure-your-secrets/customize-leak-detection/defining-custom-patterns-for-secret-scanning'
      - href: '/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enabling-delegated-bypass-for-push-protection'
      - href: '/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-non-provider-patterns'
      - href: '/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-ai-powered-generic-secret-detection'
      - href: '/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server'
---