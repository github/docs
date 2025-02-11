---
title: Best practices for fixing security alerts at scale
shortTitle: Best practices
intro: 'Guidance on how to create successful security campaigns that engage developers and help them grow their understanding of secure coding.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.security-campaigns %}'
type: reference
versions:
  feature: security-campaigns
topics:
  - Advanced Security
  - Organizations
  - Security
---
{% data reusables.security-campaigns.preview-note %}

## Elements of a successful security campaign

Successful security campaigns to fix alerts at scale have many features in common, including:

* Selecting a related group of security alerts for remediation.
* Using {% data variables.product.prodname_copilot_autofix_short %} suggestions where possible to help developers remediate alerts faster and more effectively.
* Making sure that the campaign managers are available for collaboration, reviews, and questions about fixes.
* Providing access to educational information about the type of alerts included in the campaign.{% ifversion ghec %}
* Making {% data variables.product.prodname_copilot_chat %} available for developers to use to learn about the vulnerabilities highlighted by the security alerts in the campaign. {% endif %}
* Defining a realistic deadline for campaign, bearing in mind the number of alerts you aim to fix.
* Publicizing the collaboration to developer teams and identifying the best way to engage them for your organization.

For information about the developer experience, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign).

## Selecting security alerts for remediation

Your first thought may be to identify all the most urgent alerts and create a security campaign to fix them. If your developers already have a good understanding of secure coding and are keen to remediate potential vulnerabilities, this could be a successful approach for your company. However, if you need to build up knowledge of secure coding and common vulnerabilities, you will benefit from a more stategic approach.

For example, if you have many alerts for cross-site scripting vulnerabilities, you could:

* Create educational content for developers in a repository using resources from the OWASP Foundation, see [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).
* Create a campaign to remediate all alerts for this vulnerability, including a link to the educational content in the campaign description.
* Hold a training session or other event to highlight this opportunity to gain confidence in secure coding while fixing real bugs.
* Make sure that the security team members assigned to manage the campaign are available to review the pull requests created to fix the campaign alerts, collaborating as needed.

### Using {% data variables.product.prodname_copilot_autofix_short %} to help remediate security alerts

{% data variables.product.prodname_copilot_autofix %} is an expansion of {% data variables.product.prodname_code_scanning %} that provides users with targeted recommendations to help fix {% data variables.product.prodname_code_scanning %} alerts. When you select alerts to include in a security campaign, you can preferentially include alerts that are eligible to be fixed with the help of {% data variables.product.prodname_copilot_autofix %} using the `autofix:supported` filter.

### Campaign filter templates

When you select alerts to include in a security campaign, you can use any of the filters on the security alerts page to define a subset of alerts. Alternatively, you can choose a campaign template to use one of the pre-defined filters for common needs, for example: "Cross-site scripting (CWE-79)."

### Limitations on security campaigns

The following limitations are intended to encourage you to take a balanced and measured approach to remediating alerts in your code. An iterative approach, addressing a few targeted sets of alerts at a time, is likely to lead to a sustainable and long-term change in security posture.

* A maximum of 10 active security campaigns at a time (no limits on closed campaigns).
* Each campaign can contain up to 1000 alerts.

If you choose to create a campaign that exceeds these limits, alerts will be omitted to bring the campaign into line with the limits. Alerts in repositories with recent pushes are prioritized for inclusion in the campaign.

## Specifying campaign managers and contact links

When you create a security campaign, you must select one or more "Campaign managers." A campaign manager must be either:
* A user with the organization owner role,  or the security manager role.
* A member of a team with either the organization owner role, or the security manager role.

The names of the campaign managers are visible to developers when they take part in the campaign. To support communication between developers and the campaigns managers, you can also provide a contact link, such as a link to a {% data variables.product.prodname_discussions %} or another communication channel, when you create a campaign.

If you want to increase the remediation rate for alerts and scale the knowledge of the security team, this is a key opportunity to build collaborative relationships with developers. Ideally, the campaign managers are available to answer questions and collaborate on difficult fixes via the contact link. Campaign managers should also be available to review pull requests for fixes over the whole course of the campaign.

## Combining security training with a security campaign

If your security team already provides training for developers on secure coding, creating a campaign with alerts chosen to allow developers to use the skills from the training session is a great way to reinforce their learning. Even if you don't have a formal training program, it makes sense to provide information on the types of security vulnerabilities included in the campaign, examples of how to fix them, and how to test the fixes. This will simplify the role of the campaign manager as they will be able to direct developers to these resources for answers to basic questions.

The OWASP Foundation provides many resources for learning about the most common vulnerabilities and MITRE Corporation maintain a detailed list of common weaknesses, see [About the OWASP Foundation](https://owasp.org/about/) and [About CWE](https://cwe.mitre.org/about/index.html).

{% ifversion security-campaigns-autofix %}

## Providing AI support for learning about security vulnerabilities

{% data variables.product.prodname_copilot_autofix %} is automatically triggered to suggest a resolution for each security alert. However, developers will often want more information about why the original code is insecure and how to test that the fix is correct and doesn't break other components.

{% data variables.product.prodname_copilot %} is an important tool for developers who have questions about secure coding, how to fix security alerts, and test their fix. Check that all developers in your organization have access to {% data variables.product.prodname_copilot_short %} in both their IDE and {% data variables.product.github %}, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

> [!TIP] The {% data variables.product.prodname_GH_advanced_security %} skill provides {% data variables.product.prodname_copilot_chat_short %} with additional context to answer questions about security alerts.

{% endif %}

## Considerations in starting a security campaign and defining a deadline

As with any other project, it's important to define realistic timescales to avoid discouraging developers from participating in the security campaign. Unless your company is fixing security alerts as part of a larger campaign to reduce technical debt, most developers will not have time allocated to fixing alerts. You need to estimate remediation rates based on the time developers can find between scheduled tasks. It's also always worth checking on key company deadlines that developers may be working towards and checking national holidays.

## Next steps

* [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-tracking-security-campaigns)
