---
title: Improve code quality at scale with GitHub
shortTitle: Code quality
allowTitleToDifferFromFilename: true
intro: 'Inconsistent code quality slows every team down and adds risk you can''t easily see. {% data variables.product.prodname_code_quality %} catches issues before they merge and reports on code health across your organization. Follow this adoption path to evaluate the feature, run a pilot, prove its value, and roll it out at scale.'
layout: journey-landing
versions:
  feature: code-quality
contentType: tutorials
audience:
  - driver
category:
  - Secure at scale
  - Improve code quality
journeyArticlesHeading: 'All code quality articles'
journeyTracks:
  - id: 'evaluate'
    title: 'Phase 1: Evaluate and build your business case'
    description: 'Evaluate {% data variables.product.prodname_code_quality_short %} alongside other code quality tools to determine whether it meets your organization''s needs and build a business case. Review its use cases, supported languages, quality findings, and code coverage reporting. Learn how usage is billed and which cost controls are available before you plan your budget.'
    timeCommitment: '1-2 hours'
    guides:
      - href: '/code-security/concepts/code-quality/code-quality'
      - href: '/billing/concepts/product-billing/github-code-quality'
      - href: '/code-security/how-tos/maintain-quality-code/view-and-manage-cost'
  - id: 'plan-pilot'
    title: 'Phase 2: Plan your pilot'
    description: 'Select a small, active group of repositories for your pilot and decide how you''ll measure success. Identify the teams and repository owners who will provide feedback, prepare them for the findings they''ll see on pull requests, and plan how you''ll communicate remediation options, gather feedback, and monitor costs during the pilot.'
    timeCommitment: '2-4 hours'
    guides:
      - href: '/code-security/concepts/code-quality/enablement-at-scale'
      - href: '/code-security/tutorials/improve-code-quality/catch-issues-before-merge'
  - id: 'launch-pilot'
    title: 'Phase 3: Launch your pilot'
    description: 'Allow {% data variables.product.prodname_code_quality_short %} for your enterprise, then enable it for your pilot repositories. Configure thresholds for {% data variables.product.prodname_code_quality_short %} findings and code coverage. Start the ruleset in evaluate mode to see which pull requests would be blocked, adjust the thresholds based on the results, then enable enforcement.'
    timeCommitment: '1-2 hours'
    guides:
      - href: '/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise'
      - href: '/code-security/how-tos/maintain-quality-code/enable-code-quality'
      - href: '/code-security/how-tos/maintain-quality-code/set-pr-thresholds'
      - href: '/code-security/how-tos/maintain-quality-code/restrict-code-coverage'
  - id: 'assess'
    title: 'Phase 4: Assess the pilot and decide'
    description: 'Compare the pilot results with the success measures you defined. Review code health at the repository and organization level, monitor costs, and gather feedback from developers. Use what you learn to decide whether to expand, adjust, or stop the rollout.'
    timeCommitment: '1-2 weeks'
    guides:
      - href: '/code-security/how-tos/maintain-quality-code/explore-code-quality'
      - href: '/code-security/how-tos/maintain-quality-code/interpret-results'
      - href: '/code-security/how-tos/maintain-quality-code/view-and-manage-cost'
      - href: '/code-security/how-tos/maintain-quality-code/disable-code-quality'
  - id: 'scale'
    title: 'Phase 5: Scale and optimize'
    description: 'Expand {% data variables.product.prodname_code_quality_short %} to more repositories based on what you learned from the pilot. As you expand, adjust organization-level enablement and enforcement, and continue to monitor code health, license usage, {% data variables.product.prodname_actions %} minutes, and {% data variables.product.prodname_ai_credits %} usage.'
    timeCommitment: 'Ongoing'
    guides:
      - href: '/code-security/how-tos/maintain-quality-code/roll-out-at-scale'
      - href: '/code-security/how-tos/maintain-quality-code/explore-code-quality'
      - href: '/code-security/how-tos/maintain-quality-code/view-and-manage-cost'
---
