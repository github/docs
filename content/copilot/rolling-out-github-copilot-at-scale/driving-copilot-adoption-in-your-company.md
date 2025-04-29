---
title: Driving Copilot adoption in your company
shortTitle: Drive Copilot adoption
intro: 'Learn how to plan an effective enablement process to drive Copilot adoption.'
versions:
  feature: copilot
topics:
  - Copilot
---

An effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your organization. This process should be tailored to your organization's needs and goals, and should be designed to help your teams understand how to use {% data variables.product.prodname_copilot_short %} effectively.

Your enablement process may evolve based on feedback and results. You should regularly review and update the process to ensure it continues to meet your organization's needs.

The {% data variables.product.prodname_copilot %} enablement process can be broken down into the following stages:

* Granting licenses
* Supporting users setting up their environment
* Supporting effective use of {% data variables.product.prodname_copilot_short %}

## Prerequisites

* {% data variables.product.prodname_copilot %} must be set up in your {% ifversion ghec %}enterprise and {% endif %}organization. For more information, see {% ifversion ghec %}[AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise) and {% endif %}[AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-organization).

## Granting licenses

Before you can drive adoption of {% data variables.product.prodname_copilot %}, you need to ensure that your teams have access to the product. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

Depending on the size of your organization, you may want to start with a small pilot program. This will allow you to test your enablement process and make any necessary adjustments before rolling it out to the rest of your organization.

You can start by identifying a small number of teams that are interested in using {% data variables.product.prodname_copilot_short %}. You can then work with these teams to help them get started with {% data variables.product.prodname_copilot_short %}.

{% data reusables.copilot.self-serve-license-link %}

## Supporting users setting up their environment

Once your teams have access to {% data variables.product.prodname_copilot %}, ensure they're confident with setting up their environment. {% data variables.product.github %} provides comprehensive documentation to help users set up their environment and resolve common issues. See [AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself) and [AUTOTITLE](/copilot/troubleshooting-github-copilot).

If your company uses a corporate proxy or firewall, there are additional steps for ensuring users can connect to {% data variables.product.prodname_copilot %}:

* Ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).
* Provide guidance for your users to set up their environment to connect via your proxy. You may also need to install custom SSL certificates on your users' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot).

For more complex issues, you may also choose to designate an internal point of contact to help users resolve issues, or escalate them to {% data variables.contact.github_support %}. You should choose a point of contact who is confident troubleshooting firewall and network configuration issues.

## Supporting effective use of {% data variables.product.prodname_copilot_short %} in your organization

This section offers examples of how you can support effective use of {% data variables.product.prodname_copilot_short %}. You can use these examples as a starting point and adapt them to meet your organization's needs and goals.

### Creating onboarding resources

You may choose to create internal onboarding materials to help teams get started with {% data variables.product.prodname_copilot_short %}. These materials could include your organization's policies and guidelines for using {% data variables.product.prodname_copilot_short %}, {% data variables.product.github %} documentation, relevant {% data variables.product.github %} blog posts, and any other resources that you think will be helpful.

{% data variables.product.github %} documentation that you may want to feature in your onboarding materials includes:

* [AUTOTITLE](/copilot/using-github-copilot/best-practices-for-using-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)

You can also create a {% data variables.product.github %} repository to store these materials, and encourage teams to contribute their own resources and best practices. This can help foster a sense of community among teams that are using {% data variables.product.prodname_copilot_short %}, and make it easier for new teams to get started.

### Working with your pilot program

Once the users in your pilot program have used your onboarding resources, you will have an initial opportunity for feedback, to see whether there are any sticking points that should be resolved before rolling out {% data variables.product.prodname_copilot_short %} on a larger scale.

One way to gather feedback is with a survey. You can use the {% data variables.product.prodname_copilot_short %} survey engine to create an app that will trigger a survey at specific points in the {% data variables.product.prodname_copilot_short %} experience. See the [{% data variables.product.prodname_copilot_short %} survey engine](https://github.com/github/copilot-survey-engine).

### Offering training and support

From your pilot program, you can identify a group of {% data variables.product.prodname_copilot_short %} champions who are enthusiastic about using {% data variables.product.prodname_copilot_short %} and are willing to help others get started. You can work with these champions to create training sessions, workshops, and other resources to help teams get started with {% data variables.product.prodname_copilot_short %}.

You can also use {% data variables.product.prodname_discussions %} to create a space where teams can ask questions, share best practices, and learn from each other. This can help foster a sense of community among teams that are using {% data variables.product.prodname_copilot_short %}, and make it easier for new teams to get started.

{% data variables.product.github %} also provides a dedicated {% data variables.product.prodname_copilot_short %} Workshops repository, which contains a selection of workshops designed to help teams learn how to use {% data variables.product.prodname_copilot_short %} effectively. See [Copilot Workshops](https://github.com/copilot-workshops).

### Providing learning resources

In addition to your onboarding resources, you may want to provide a library of learning resources to help teams advance their skills with {% data variables.product.prodname_copilot_short %}. The {% data variables.product.prodname_copilot_chat_short %} Cookbook is a great place to start. The Cookbook is a collection of example prompts that you can use to learn how to ask {% data variables.product.prodname_copilot_short %} for help with a wide range of tasks. See [AUTOTITLE](/copilot/copilot-chat-cookbook).

### Communicating expectations

If your organization has specific {% data variables.product.prodname_copilot_short %} usage guidelines, these should be clearly communicated in onboarding materials and anywhere else that teams might look for information. For example, if you plan to revoke access to {% data variables.product.prodname_copilot_short %} for users who have not used it in a certain period of time, ensure that your users are aware of this policy.

### Ongoing analysis and optimization

Once you have implemented your {% data variables.product.prodname_copilot_short %} enablement process, you should regularly review and optimize it to ensure it continues to meet your organization's needs. Some ways you can do this are:

* Monitoring usage data to identify trends and patterns. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/analyzing-usage-over-time-with-the-copilot-metrics-api).
* Following up with users who haven't been using their assigned license. You can use the API to see the latest activity date for each assigned seat. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/reminding-inactive-users).
* Gathering feedback from teams to understand what is working well and what could be improved.
* Reviewing {% data variables.product.prodname_discussions %} and other communication channels to identify common issues and questions.
