---
title: 'About security campaigns'
shortTitle: 'About security campaigns'
intro: 'You can fix security alerts at scale by creating security campaigns and collaborating with developers to burn down your security backlog.'
product: '{% data reusables.gated-features.security-campaigns %}'
allowTitleToDifferFromFilename: true
type: overview
versions:
  feature: security-campaigns
topics:
  - Code Security
  - Organizations
  - Security
---

Once you have identified security alerts in the default branches of your repositories, the next step is to identify the most urgent alerts and get them fixed. Security campaigns are a way to group alerts and share them with developers, so you can collaborate to remediate vulnerabilities in the code.

{% data reusables.security-campaigns.preview-note %}

## Security campaigns in your day-to-day work

You can use security campaigns to support many of your aims as a security leader.

* Improving the security posture of the company by leading work to remediate alerts.
* Reinforcing security training for developers by creating a campaign of related alerts to fix collaboratively.
* Building collaborative relationships between the security team and developers to promote shared ownership of security alerts.
* Providing clarity to developers on the most urgent alerts to fix and monitoring alert remediation.

## Benefits of using security campaigns

A security campaign has many benefits over other ways of encouraging developers to remediate security alerts. In particular,

* Developers are notified about any security campaigns taking place in repositories they work in or subscribe to (by email during the {% data variables.release-phases.public_preview %}).
* Developers can see the alerts you've highlighted for remediation without leaving their normal workflows.
* Each campaign has a named point of contact for questions, reviews, and collaboration.  {% ifversion security-campaigns-autofix %}
* {% data variables.product.prodname_copilot_autofix %} is automatically triggered to suggest a resolution for each security alert. {% endif %}

In addition, you can use one of the templates to select a group of closely related alerts for a campaign. This allows developers to build on the knowledge gained by resolving one alert and use it to fix several more, providing them with an incentive to fix multiple alerts.

## Next steps

* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale)
* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-tracking-security-campaigns)
