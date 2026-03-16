---
title: Running a security campaign to fix alerts at scale
shortTitle: Fix alerts at scale
intro: Launch a focused security campaign to remediate a specific class of security alerts, such as cross-site scripting (XSS), across your organization.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.security-campaigns %}'
audience:
  - driver
contentType: tutorials
versions:
  feature: security-campaigns
redirect_from:
  - /code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale
  - /code-security/securing-your-organization/fixing-security-alerts-at-scale
---

## Launching your first campaign

In this tutorial, you’ll plan and run your first organization-wide security campaign focused on XSS alerts. Along the way, you’ll learn how to select the right alerts, prepare developers for success, and structure a campaign that drives meaningful improvements in your security posture.

Imagine you’ve identified a recurring pattern of XSS vulnerabilities in several repositories. Rather than addressing alerts one by one, you decide to run a coordinated campaign that reduces risk while helping developers build confidence in secure coding.

## 1. Define a focused goal

When running a campaign at scale, it’s tempting to target all urgent alerts at once. If your developers already have a strong foundation in secure coding and available capacity, that may work.

However, if your goal is to both reduce risk and improve secure coding practices, a focused campaign is often more effective. Choosing a single vulnerability type, such as cross-site scripting, allows developers to recognize patterns, apply learning across multiple fixes, and build momentum.

For this campaign, you decide to focus on XSS alerts across your organization, within the limits of how many alerts a single campaign can include.

## 2. Select alerts for your campaign

On the security alerts page, start by filtering for cross-site scripting alerts. You can also use a predefined campaign template, such as **Cross-site scripting (CWE-79)**, to quickly define the scope. For information on filtering alerts, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).

> [!NOTE]
> Security campaigns can include up to 1000 alerts. If your organization has more than 1000 XSS alerts, narrow your filters (for example, by repository, severity, or language) until the number of matching alerts is within this limit, or plan multiple campaigns to cover the remaining alerts.

{% ifversion security-campaigns-autofix %}If {% data variables.copilot.copilot_autofix_short %} is available for your campaign, you can further refine the scope by using the `autofix:supported` filter. This allows developers to take advantage of AI-generated fix suggestions to remediate alerts more efficiently.{% endif %}

Before launching the campaign, you also prepare supporting educational materials. For example:

* Create a repository with guidance on preventing XSS vulnerabilities.
* Link to resources from the OWASP Foundation, such as [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/).
* Provide examples of secure coding patterns and testing approaches.

You’ll include links to these resources in the campaign description so developers can reference them as they work through their assigned alerts.

## 3. Assign campaign managers and define communication channels

Before launching the campaign, decide who will support developers throughout the remediation process.

When you create a security campaign, you must assign one or more **campaign managers**. Campaign managers must be:

* A user with the organization owner role or the security manager role, or
* A member of a team with one of those roles

Choose managers who can:

* Answer questions about XSS vulnerabilities
* Review pull requests for fixes
* Help resolve edge cases or complex remediation scenarios

Because campaign managers are visible to developers participating in the campaign, this is also an opportunity to establish clear communication. When creating the campaign, include a contact link, such as a link to a {% data variables.product.prodname_discussions %} thread or another communication channel, so developers know where to ask questions.

By setting expectations early and making support visible, you increase trust and improve remediation rates.

## 4. Create and publish the campaign

Now you’re ready to create the campaign.

When defining the campaign:

* Use your XSS filter or template to select the alerts.
* Add a clear description explaining the goal of the campaign.
* Include links to the educational resources you prepared earlier.
* Set a realistic due date based on the number of alerts and expected remediation capacity.

If you’re unsure about the scope, create a **draft campaign** first. A draft allows you to review the alerts that will be included and collaborate internally before publishing.

## 5. Enable issue tracking to increase visibility

To help developers track their work and provide visibility to managers, you can choose to automatically create an issue in each repository included in the campaign. This allows developers to manage their remediation work within their existing workflows and project boards.

When you enable issue creation, the campaign’s "Short description", "Contact link", and due date are automatically included in the issue body. If you update the short description, contact link, or due date, those changes are reflected in the issues. Additionally, when the campaign reaches its due date or is closed, a comment is posted on each issue to notify developers. This integration helps maintain clear communication and keeps the campaign organized across multiple repositories.

## 6. Support developers during remediation

Once the campaign is live, your role shifts from organizer to enabler. Developers will begin reviewing and fixing XSS alerts in their repositories. To help them move efficiently and confidently:

* Ensure campaign managers are available to review pull requests and answer questions.
* Encourage developers to use {% data variables.copilot.copilot_chat_short %} to better understand why code is vulnerable and how to validate their fixes. {% ifversion security-campaigns-autofix %}
* Where supported, encourage developers to review and test {% data variables.copilot.copilot_autofix_short %} suggestions before merging changes.{% endif %}

If you prepared educational resources earlier, reference them in discussions and pull request reviews. Reinforcing shared guidance reduces repeated questions and helps build long-term secure coding habits.

By staying visible and responsive during the campaign, you reinforce that this is a collaborative effort, not just a compliance exercise.

## 7. Set a realistic deadline

You set a due date when creating the campaign. As the campaign progresses, ensure that timeline remains achievable.

When setting or adjusting the deadline, consider:

* The number of alerts included in the campaign
* The expected remediation capacity of developers (for example, how much time they can dedicate to fixing alerts alongside their regular work)
* Any upcoming company deadlines or holidays that may impact availability

Unless alert remediation is a dedicated initiative, most developers will be balancing this work alongside feature development. Setting a realistic timeline increases participation and prevents discouragement.

If needed, you can run multiple focused campaigns over time rather than attempting to address all alert types at once.

## 8. Close the campaign and iterate

As the deadline approaches, monitor progress and collaborate on any remaining complex fixes.

When the campaign is closed:

* Repository issues are updated automatically.
* Developers have resolved a focused set of vulnerabilities.
* Your organization has reduced risk in a measurable way.

Most importantly, developers have gained practical experience recognizing and fixing a specific class of vulnerability.

From here, you can repeat the process with another targeted set of alerts, such as SQL injection, insecure deserialization, or exposed secrets, to steadily improve your organization’s security posture over time.

## Next steps

Ready to launch your campaign? To create and manage your security campaign, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns).
