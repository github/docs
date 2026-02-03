---
title: About GitHub Spark
shortTitle: Spark
intro: 'Learn about building and deploying intelligent apps with natural language using {% data variables.product.prodname_spark %}.'
versions:
  feature: spark
topics:
  - Copilot
contentType: concepts
category: 
  - Learn about Copilot
---

## Overview

{% data reusables.copilot.spark-overview %}

## Benefits of using {% data variables.product.prodname_spark_short %}

{% data variables.product.prodname_spark_short %} can provide a wide range of benefits at all stages of app development.

### Build apps with natural language or code

You don't need to know how to code to build an app with {% data variables.product.prodname_spark_short %}. You can describe what you want your app to do in natural language, and {% data variables.product.prodname_spark_short %} will generate all the necessary code for you, along with a live, interactive preview of the app.

If you do want to explore and edit the code, you can simply open the code panel in {% data variables.product.prodname_spark_short %}, or go further and open your app in a {% data variables.product.github %} codespace (a cloud-based development environment).

See [AUTOTITLE](/codespaces/about-codespaces/what-are-codespaces).

### Leverage AI capabilities

{% data variables.product.prodname_spark_short %} is natively integrated with {% data variables.product.prodname_github_models %}, so you can add AI features to your app (for example, summarizing text or suggesting image tags) simply by prompting {% data variables.product.prodname_spark_short %}. {% data variables.product.prodname_spark_short %} will add the required inference components automatically, and you can edit the system prompts that control those capabilities yourself.

### Managed data store

If {% data variables.product.prodname_spark_short %} detects the need to store data in your app, it will automatically set up a managed key-value store, so you don't need to worry about setting up and managing a database. The data store runs on Azure (Cosmos DB) and it's intended for small records (up to 512 KB per entry).

### Built-in security protections

{% data variables.product.prodname_spark_short %} has built-in authentication, since users need to sign in with their {% data variables.product.github %} account to access your app. You control who has access to your app by setting visibility and data access options.

### One-click deployment

{% data variables.product.prodname_spark_short %} comes with a fully integrated runtime environment that allows you to deploy your app in one click. All necessary infrastructure is provisioned automatically, so you don't have to worry about setting up servers or managing deployments.

All sparks are hosted and deployed by Azure Container Apps (ACA).

### Fully integrated with {% data variables.product.github %}

{% data variables.product.prodname_spark_short %} is fully integrated with {% data variables.product.github %}, so you can use familiar tools and workflows to build and manage your app.

#### Work in {% data variables.product.prodname_github_codespaces %}

* You can open a {% data variables.product.github %} codespace (a cloud-based development environment) directly from {% data variables.product.prodname_spark_short %}, so you can continue building your app there, with access to {% data variables.product.prodname_copilot_short %} and all your usual development tools.

* There's automatic syncing between the codespace and {% data variables.product.prodname_spark_short %}, so you can seamlessly switch between the two environments.

#### Create a repository with two-way syncing

* You can create a repository for your spark in one click, allowing you to manage your app's code and collaborate with others using standard {% data variables.product.github %} workflows.

* There's a two-way sync between your spark and the repository, so changes made in either {% data variables.product.prodname_spark_short %} or the main branch of your repository are automatically reflected in both places. Any changes made to your spark prior to repository creation will be added to your repository so you have a full record of all changes and commits made to your spark since its creation.

#### Invite collaborators

* If you want to invite others to contribute to building your spark, you can add them as collaborators to your repository.

#### Leverage standard {% data variables.product.github %} features

* Once you've created a repository for your spark, you can use all the standard {% data variables.product.github %} features such as pull requests, issues, and project boards to manage your spark development process, as well as leverage {% data variables.product.prodname_actions %} for CI/CD workflows.

## Enterprise considerations

If you’re an enterprise admin evaluating {% data variables.product.prodname_spark_short %}, there are specific benefits and controls available at the enterprise level.

For details about enabling {% data variables.product.prodname_spark_short %} for your enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-spark).

### Why enable {% data variables.product.prodname_spark_short %} for your enterprise?

Enabling {% data variables.product.prodname_spark_short %} empowers your teams to move faster from idea to production while maintaining the security, governance, and cost controls that enterprise admins expect.

Benefits include:

* **Centralized control**. {% data variables.product.prodname_spark_short %} is included in the {% data variables.product.prodname_copilot_short %} license and respects existing enterprise access policies.
* **Governance and security**. Built on {% data variables.product.github %} and Azure, sparks inherit enterprise-grade reliability, authentication, and compliance.
* **Transparency and cost management**. {% data variables.product.prodname_spark_short %} consumption draws from {% data variables.product.prodname_copilot_short %} premium requests, which you can monitor through the {% data variables.product.github %} billing platform.
* **Accelerated innovation**. Teams can validate ideas in hours instead of months, without relying on fragmented toolchains.

### Billing

Each natural-language prompt in {% data variables.product.prodname_spark_short %} consumes four premium requests.
See [AUTOTITLE](/billing/concepts/product-billing/github-spark).

### Infrastructure

The {% data variables.product.prodname_spark_short %} development environment is powered by {% data variables.product.prodname_github_codespaces %}. If your enterprise disables {% data variables.product.prodname_codespaces %}, users can still access the {% data variables.product.prodname_spark_short %} interface but won’t be able to open the underlying codespace.

All sparks are deployed to Azure Container Apps (ACA).

## Develop your spark with {% data variables.product.prodname_copilot_short %}

You can combine the functionality of {% data variables.product.prodname_spark %} with {% data variables.product.prodname_copilot %} to support your app development.

### {% data variables.product.prodname_copilot_short %} agent mode

When you open your spark in a {% data variables.product.github %} codespace, you have access to all of {% data variables.product.prodname_copilot_short %}'s capabilities, including {% data variables.copilot.copilot_chat_short %} and {% data variables.product.prodname_copilot_short %} agent mode.

Agent mode is useful when you have a specific task in mind and want to enable {% data variables.product.prodname_copilot_short %} to autonomously edit your code. In agent mode, {% data variables.product.prodname_copilot_short %} determines which files to make changes to, offers code changes and terminal commands to complete the task, and iterates to remediate issues until the original task is complete. You can take your app's development to the next level, as well as leveraging {% data variables.product.prodname_copilot_short %} to debug and troubleshoot issues in your code.

See [{% data variables.product.prodname_copilot_short %} agent mode](/copilot/how-tos/chat-with-copilot/chat-in-ide#agent-mode).

### {% data variables.copilot.copilot_coding_agent %}

Once your spark is connected to a {% data variables.product.github %} repository, you can use {% data variables.copilot.copilot_coding_agent %} to help you to continue to build and maintain your app, while you focus on other things.

With the coding agent, you delegate specific tasks to {% data variables.product.prodname_copilot_short %} (either by assigning an issue to {% data variables.product.prodname_copilot_short %}, or prompting {% data variables.product.prodname_copilot_short %} to create a pull request), and {% data variables.product.prodname_copilot_short %} will autonomously work in the background to complete the task. {% data variables.copilot.copilot_coding_agent %} can fix bugs, refactor code, improve test coverage and more.

See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent).

## Sharing your spark

When you're ready to publish your spark, you can choose from the following visibility options:

* Private to you only
* Visible to members of a specific organization on {% data variables.product.github %}
* Visible to all {% data variables.product.github %} users (may be disabled for certain {% data variables.enterprise.prodname_managed_users %} based on admin configuration)

You can then share your spark with others, so they can view and interact with your app. The link to your spark remains undiscoverable except for those who have the link.

Optionally, you can publish your spark as "read-only", meaning you can showcase your app to others without them being able to edit or delete app contents.

## Limitations of {% data variables.product.prodname_spark_short %}

{% data variables.product.prodname_spark_short %} uses an opinionated stack (React, TypeScript) for reliability. For best results, you should work within {% data variables.product.prodname_spark_short %}'s SDK and core framework.

You can add external libraries, but compatibility with {% data variables.product.prodname_spark_short %}'s SDK isn’t guaranteed. You should always test your spark thoroughly after adding any external libraries.

By default, your spark's data store is shared for all users of the published spark. You should make sure to delete any private or sensitive data from your app prior to making it visible to other users. You can optionally publish your spark as "read-only", meaning you can showcase your app to others without them being able to edit or delete app contents.

## Further reading

* [AUTOTITLE](/copilot/responsible-use/spark)
* [AUTOTITLE](/copilot/tutorials/spark/build-apps-with-spark)
* [AUTOTITLE](/copilot/how-tos/troubleshoot-copilot/troubleshoot-spark)
