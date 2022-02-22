---
title: Overview of GitHub Advanced Security deployment
intro: 'Help your company successfully prepare to adopt {% data variables.product.prodname_GH_advanced_security %} (GHAS) by reviewing and understanding these best practices, rollout examples, and our enterprise-tested phased approach.'
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data variables.product.prodname_GH_advanced_security %} (GHAS) helps teams build more secure code faster using integrated tooling such as CodeQL, the world’s most advanced semantic code analysis engine. GHAS is a suite of tools that requires active participation from developers across your enterprise. To realize the best return on your investment, you must learn how to use, apply, and maintain GHAS to truly protect your code.

One of the biggest challenges in tackling new software for an company can be the rollout and implementation process, as well as bringing about the cultural change to drive the organizational buy-in needed to make the rollout successful.

To help your company better understand and prepare for this process with GHAS, this overview is aimed at:
  - Giving you an overview of what a GHAS rollout might look like for your company.
  - Helping you prepare your company for a rollout.
  - Sharing key best practices to help increase your company’s rollout success.

To understand the security features available through {% data variables.product.prodname_GH_advanced_security %}, see "[{% data variables.product.prodname_dotcom %} security features](/code-security/getting-started/github-security-features)."

## Recommended phased approach for GHAS rollouts

We’ve created a phased approach to GHAS rollouts developed from industry and GitHub best practices. You can utilize this approach for your rollout, either in partnership with {% data variables.product.prodname_professional_services %} or independently.

While the phased approach is recommended, adjustments can be made based on the needs of your company. We also suggest creating and adhering to a timeline for your rollout and implementation. As you begin your planning, we can work together to identify the ideal approach and timeline that works best for your company.

![Diagram showing the three phases of GitHub Advanced Security rollout and deployment, including Phase 0: Planning & Kickoff, Phase 1: Pilot projects, Phase 2: Org Buy-in and Rollout for early adopters, and Phase 3: Full org rollout & change management](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


Based on our experience helping customers with a successful deployment of {% data variables.product.prodname_GH_advanced_security %}, we expect most customers will want to follow these phases. Depending on the needs of your company, you may need to modify this approach and alter or remove some phases or steps.

For a detailed guide on implementing each of these phases, see "[Deploying {% data variables.product.prodname_GH_advanced_security %} in your enterprise](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)." The next section gives you a high-level summary of each of these phases.

### {% octicon "milestone" aria-label="The milestone icon" %} Phase 0: Planning & kickoff

During this phase, the overall goal is to plan and prepare for your rollout, ensuring that you have your people, processes, and technologies in place and ready for your rollout. You should also consider what success criteria will be used to measure GHAS adoption and usage across your teams.

### {% octicon "milestone" aria-label="The milestone icon" %}  Phase 1: Pilot project(s)

To begin implementing GHAS, we recommend beginning with a few high-impact projects/teams with which to pilot an initial rollout. This will allow an initial group within your company to get familiar with GHAS, learn how to enable and configure GHAS, and build a solid foundation on GHAS before rolling out to the remainder of your company.

### {% octicon "milestone" aria-label="The milestone icon" %}  Phase 2: Organizational buy-in & rollout preparation

Phase 2 is a recap of previous phases and preparing for a larger rollout across the remainder of the company. In this phase, organizational buy-in can refer to your company’s decision to move forward after the pilot project(s) or the company’s use and adoption of GHAS over time (this is most common). If your company decides to adopt GHAS over time, then phase 2 can continue into phase 3 and beyond.

### {% octicon "milestone" aria-label="The milestone icon" %}  Phase 3: Full organizational rollout & change management

Once your company is in alignment, you can begin rolling GHAS out to the remainder of the company based on your rollout plan. During this phase, it’s crucial to ensure that a plan has been made for any organizational changes that may need to be made during your rollout of GHAS and ensuring teams understand the need, value, and impact of the change on current workflows.

## Best practices for a successful GHAS rollout

We’ve found that companies that have completed successful GHAS rollouts have several similar characteristics that help drive their success. To help your company increase the success of your GHAS rollout, review these best practices.

### {% octicon "checklist" aria-label="The checklist icon" %} Set clear goals for your company’s rollout

Setting goals may seem obvious, but we do see some companies that begin GHAS rollouts with no clear goals in mind. It’s more difficult for these companies to gain the true organizational buy-in that’s needed to complete the rollout process and realize the value of GHAS within their company.

As you begin planning for your rollout and implementation, begin outlining goals for GHAS within your company and ensure these are communicated to your team. Your goals can be highly detailed or something simple, as long as there is a starting point and alignment. This will help build a foundation for the direction of your company’s rollout and can help you build a plan to get there. If you need assistance with your goals, {% data variables.product.prodname_professional_services %} can help with recommendations based on our experience with your company and prior engagements with other customers.

Here are some high-level examples of what your goals for rolling out GHAS might look like:
  - **Reducing the number of vulnerabilities:** This may be in general, or because your  company was recently impacted by a significant vulnerability that you believe could  have been prevented by a tool like GHAS.
  - **Identifying high-risk repositories:** Some companies may simply want to target repositories that contain the most risk, ready to begin remediating vulnerabilities and reducing risk.
  -  **Increasing remediation rates:** This can be accomplished by driving developer adoption of findings and ensuring these vulnerabilities are remediated in a timely manner, preventing  the accumulation of security debt.
  - **Meeting compliance requirements:** This can be as simple as creating new compliance  requirements or something more specific. We find many healthcare companies use GHAS to prevent the exposure of PHI (Personal Health Information).
  - **Preventing secrets leakage:** This is often a goal of companies that have had (or want to  prevent) critical information leaked such as software keys, customer or financial data, etc.
  - **Dependency management:** This is often a goal for companies that may have fallen  victim due to hacks from unpatched dependencies, or those seeking to prevent these  types of attacks by updating vulnerable dependencies.

### {% octicon "checklist" aria-label="The checklist icon" %} Establish clear communication and alignment between your teams

Clear communication and alignment are critical to the success of any project, and the rollout of GHAS is no different. We’ve found that companies that have clear communication and alignment between their security and development groups, as well as their executive sponsor (either CISO or VP) from the purchase of GHAS through rollout, often have more success with their rollouts.

In addition to ensuring these groups are aligned throughout your GHAS rollout, there are a few specific areas we recommend focusing on.

#### Rollout planning

How will you roll out GHAS to your company? There will likely be many ideas and opinions. Here are some questions you should consider answering and aligning on before moving  forward:
  - What teams will be included in the pilot?
  - What projects are focused on in the pilot?
  - How should projects be prioritized for rollout?
  - How do you plan to measure success in the pilot and beyond?
  - What is the level of daily change your teams will be taking on? How will that be  communicated?
  - How will your rollout plans be communicated across the company?
  - How do you plan to train your teams?
  - How do you plan to manage scan results initially? (For more information, see the next section on "Processing results")

#### Processing results

Before GHAS is rolled out to your teams, there should be clear alignment on how results  should be managed over time. We recommend initially looking at results as more informative  and non-blocking. It’s likely your company has a full CI/CD pipeline, so we recommend this  approach to avoid blocking your company’s process. As you get used to processing these  results, then you can incrementally increase the level of restriction to a point that feels more  accurate for your company.

### {% octicon "checklist" aria-label="The checklist icon" %}  Lead your rollout with both your security and development groups

Many companies lead their GHAS rollout efforts with their security group. Often, development teams aren’t included in the rollout process until the pilot has concluded. However, we’ve found that companies that lead their rollouts with both their security and development teams tend to have more success with their GHAS rollout.

为什么？ GHAS takes a developer-centered approach to software security by integrating seamlessly into the developer workflow. Not having key representation from your development group early in the process increases the risk of your rollout and creates an uphill path towards organizational buy-in.

When development groups are involved earlier (ideally from purchase), security and development groups can achieve alignment early in the process. This helps to remove silos  between the two groups, builds and strengthens their working relationships, and helps shift the  groups away from a common mentality of “throwing things over the wall.” All of these things help support the overall goal to help companies shift and begin  utilizing GHAS to address security concerns earlier in the development process.

#### {% octicon "people" aria-label="The people icon" %} Recommended key roles for your rollout team

We recommend a few key roles to have on your team to ensure that your groups are well represented throughout the planning and execution of your rollout and implementation.

We highly recommend your rollout team include these roles:
- **Executive Sponsor:** This is often the CISO, CIO, VP of Security, or VP of Engineering.
- **Technical Security Lead:** The technical security lead provides technical support on behalf of the security team throughout the implementation process.
- **Technical Development Lead:** The technical development lead provides technical support and will likely lead the implementation effort with the development team.

We also recommend your rollout team include these roles:
- **Project Manager:** We’ve found that the earlier a project manager can be introduced into the rollout process the higher the likelihood of success.
- **Quality Assurance Engineer:** Including a member of your company’s Quality Assurance team helps ensure process changes are taken into account for the QA team.

### {% octicon "checklist" aria-label="The checklist icon" %} Understand key GHAS facts to prevent common misconceptions

Going into a GHAS implementation, it’s important to understand some key basic facts about what GHAS is and can do, to prevent many common misconceptions companies have going into their GHAS rollouts.

{% note %}

**Note:** If you’re interested in furthering your GHAS education, {% data variables.product.prodname_professional_services %} provides a variety of options for additional education and training, including topics that your company needs to prepare for GHAS. These offerings may take the form of workshops, demonstrations, and bootcamps. Topics can range from deploying GHAS and basic usage of GHAS to more advanced topics to continue to build your team’s skills. For more information on working with the {% data variables.product.prodname_professional_services_team %} team, see "[{% data variables.product.prodname_professional_services %}](#github-professional-services)."

{% endnote %}


#### Fact 1: GHAS is a suite of security tools that require action to protect your code.

It’s not security software that is installed and forgotten—just having GHAS on its own does not protect your code. GHAS is a suite of tools that increases with value when configured, maintained, used in daily  workflows, and in combination with other tools.

#### Fact 2: GHAS will require adjustment out of the box.

Once GHAS is set up on your repositories, there are additional steps that need to be taken to ensure it works for your company’s needs. Code scanning in particular requires further configuration to fine-tune your results, for example, customizing what is flagged by the scans to adjust what is picked up in future scans. Many customers find that initial scans either pick up no results or results that are not relevant based on the application's threat model and need to be adjusted to their company’s needs.

#### Fact 3: GHAS tools are most effective when used together, but the most effective AppSec programs involve the use of additional tools/activities.

GHAS is most effective when all of the tools are used together. When companies integrate GHAS with other tools and activities, such as penetration testing and dynamic scans, it further improves the effectiveness of the AppSec program. We recommend always utilizing multiple layers of protection.

#### Fact 4: Not all companies will use/need custom {% data variables.product.prodname_codeql %} queries, but they can  help you customize/target scan results.

Code scanning is powered by {% data variables.product.prodname_codeql %}—the world’s most powerful code analysis engine. While  many companies are excited at the prospect of being able to write custom queries, for a  large portion of our customers the base query set and additional queries available in the  community are typically more than sufficient. However, many companies may find the need  for custom {% data variables.product.prodname_codeql %} queries to help reduce false positives rates in results or crafting new  queries to target results your company may need.

However, if your company is interested in writing custom {% data variables.product.prodname_codeql %} queries, we recommend  you complete your rollout and implementation of GHAS before exploring custom queries.

{% note %}

**Note:** It’s crucial for your company to have a solid foundation on GHAS before diving deeper into deeper security  practices.

{% endnote %}

When your company is ready, our Customer Success team can help you navigate the requirements that need to be met and can help ensure your company has good use  cases for custom queries.

#### Fact 5: {% data variables.product.prodname_codeql %} scans the whole code base, not just the changes made in a pull request.

When code scanning is run from a pull request, the scan will include the full codebase and not just the changes made in the pull request. While this may seem unnecessary at times, this is an important step to ensure the change has been reviewed all against all interactions in the codebase.

## Examples of successful {% data variables.product.prodname_GH_advanced_security %} rollouts

Now that you have a better understanding of some of the keys to a successful GHAS rollout  and implementation, here are some examples of how our customers made their rollouts successful. Even if your company is in a different place, {% data variables.product.prodname_dotcom %} can help you with building a customized path that suits the needs of your rollout.

### Example rollout for a mid-sized healthcare technology company

A mid-sized healthcare technology company based out of San Francisco completed a successful GHAS rollout process. While they may not have  had a large number of repositories that needed to be enabled, this company’s keys to success included having a well-organized and aligned team for the rollout, with a clearly established key contact to work with {% data variables.product.prodname_dotcom %} to troubleshoot any issues during the process. This allowed them to complete their rollout within two months.

In addition, having an engaged development team allowed the company to have teams using code scanning at the pull request level following the completion of their rollout.

### Example rollout for a mid-sized data platform company

A global data platform company has had great success with GHAS to  date. They’ve completed their initial implementation and are currently progressing through the rollout process. This company is mature in their security posture and tooling, and are well-aligned as an company. This allows them to operate very self-sufficiently and has enabled them to move quickly and smoothly through their rollout.

This company's strong alignment, efficient operations, and security tooling maturity allowed them to implement GHAS quickly and build a good foundation for {% data variables.product.prodname_codeql %}. Since their implementation, they can now automatically enable {% data variables.product.prodname_codeql %} across different repositories.

In addition to their security and technical maturity, another critical key to this company’s success is having a project owner and single point of contact from their team to drive the project forward. Not only is having this key contact crucial, but they are incredibly resourceful and skilled, and directly contribute to the success of the rollout.

## Prerequisites for your company before rolling out GHAS

{% data variables.product.prodname_professional_services %} can help to provide additional support to help your company break down and understand these prerequisites and help you get prepared for the GHAS implementation process.

 ### CI/CD systems and process

If your company has not yet invested in or implemented continuous integration or continuous delivery (CI/CD) systems and processes, we recommend taking this step in conjunction with moving forward with GHAS. This may be a significant shift for your company—we can work with you to provide recommendations and guidance for implementing a CI/CD system, as well as supporting any training that might be needed.

### Requirements to install {% data variables.product.prodname_GH_advanced_security %}

There are a few different paths that can be taken for your GHAS installation based on what combinations of technologies your company uses. This section outlines a quick breakdown of the different paths your company may need to take.

{% ifversion ghes %}

#### {% data variables.product.prodname_ghe_server %}

It’s important that you’re utilizing a version of {% data variables.product.prodname_ghe_server %} (GHES) that will support your company’s needs.

If you’re using an earlier version of GHES (prior to 3.0) and would like to upgrade, there are some requirements that you’ll need to meet before moving forward with the upgrade. 更多信息请参阅：
  - "[Upgrading {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)"
  - "[Upgrade requirements](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)"

If you’re using a third-party CI/CD system and want to use {% data variables.product.prodname_code_scanning %}, make sure you have downloaded the {% data variables.product.prodname_codeql_cli %}. For more information, see "[About CodeQL code scanning in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

If you're working with {% data variables.product.prodname_professional_services %} for your GHAS rollout, please be prepared to discuss these items at length in your kickoff meeting.

{% endif %}

{% ifversion ghec %}

#### {% data variables.product.prodname_ghe_cloud %}

If you’re a {% data variables.product.prodname_ghe_cloud %} (GHEC) customer there are prerequisites that you’ll need to meet depending on what CI/CD you plan to utilize.

Using {% data variables.product.prodname_actions %} for your CI/CD:
- To ensure {% data variables.product.prodname_code_scanning %} can be integrated and utilized properly, you should have a basic understanding of {% data variables.product.prodname_actions %} before proceeding with your installation.

Using a third-party tool for CI/CD:
- To integrate the {% data variables.product.prodname_codeql_cli %}, you should have a basic understanding of the CI/CD system, as well as *nix and Windows—in particular how commands are executed and how success/failure is signaled. For more information about how to integrate a third-party tool, see "[Using CodeQL code scanning with your existing CI system ](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)."

{% endif %}

## Partnering with GitHub for your rollout

As you prepare for your GHAS implementation, it’s important to  consider what will be required from your company to make this  project successful. Our most successful implementations of GHAS  rely on shared responsibilities between both GitHub and our customers throughout the process with a clearly identified stakeholder from the customer owning the project.

#### Success model for customer and GitHub responsibilities

**Customer responsibilities**
- Completing infrastructure and process prerequisites
- Managing rollout and implementation, including planning and execution
- Internal training
- (Optional) Contributing {% data variables.product.prodname_codeql %} queries to the GitHub Community

**GitHub responsibilities**

- Maintenance and enhancements for features, such as {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_GH_advanced_security %}
- Providing, maintaining, and delivering the following services: {% data variables.product.prodname_dotcom %} Docs, {% data variables.product.prodname_dotcom %} Community, {% data variables.product.prodname_dotcom %} Support

{% note %}

**Note:**  {% data variables.product.prodname_professional_services %} can help support many of the customer responsibilities. To learn more, see "[GitHub services and support](#github-services-and-support)."

{% endnote %}

## {% data variables.product.prodname_dotcom %} services and support

### {% data variables.product.prodname_dotcom %} Support

If you run into any issues during your implementation, you can search our deep documentation for solutions or engage with {% data variables.product.prodname_dotcom %} Support, a team of highly technical engineers that can support you as issues arise. For more information, see "[GitHub Enterprise Support](https://enterprise.github.com/support).

In addition, you can also try our [ {% data variables.product.prodname_gcf %}](https://github.community/).

If you purchased a Premium Support plan, you can submit your ticket in the [Premium Support Portal](https://enterprise.github.com/support). If you’re unsure of which Support plan you purchased, you can reach out to your sales representative or review the plan options.

For more information the Premium support plan options, see:
  - "[Premium Support](https://github.com/premium-support)" {% ifversion ghec %}
  - "[About GitHub Premium Support for {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)"{% endif %}{% ifversion ghes %}
  - "[About GitHub Premium Support for {% data variables.product.prodname_ghe_server %}](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)"{% endif %}

### {% data variables.product.prodname_professional_services %}

Our {% data variables.product.prodname_professional_services_team %} team can partner with you for a successful rollout and implementation of {% data variables.product.prodname_GH_advanced_security %}. We offer a variety of options for the type of guidance and support you expect to need for your implementation. We also have training and bootcamps available to help your company to optimize the value of GHAS.

If you’d like to work with our {% data variables.product.prodname_professional_services_team %} team for your implementation, we recommend you begin thinking about your system design and infrastructure, as well as the number of repositories that you want to set up with GHAS, to begin these conversations. In addition, begin thinking about goals for what you would like to achieve with this rollout.

Implementation is just one step in a successful security-driven journey where you’ll learn how to use GHAS. Once you’ve completed your implementation, there will be more to learn with the rollout throughout your infrastructure and codebases. Speak with your sales representative for more information about all the {% data variables.product.prodname_professional_services_team %} options available.

If you initially opted out of additional services, but find that additional support is  needed as you begin your implementation, please reach out to your sales representative to discuss what services options may be needed to support your implementation.
