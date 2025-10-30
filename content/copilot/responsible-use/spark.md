---
title: Responsible use of GitHub Spark
shortTitle: Spark
intro: 'Learn how to use {% data variables.product.prodname_spark %} responsibly by understanding its purposes, capabilities, and limitations.'
versions:
  feature: spark
topics:
  - Copilot
  - AI
redirect_from:
  - /copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark
  - /copilot/responsible-use-of-github-copilot-features/spark
contentType: rai
category: 
  - Responsible use
---

{% data reusables.rai.spark-preview-note %}

## About {% data variables.product.prodname_spark %}

{% data variables.product.prodname_spark_short %} is a {% data variables.product.prodname_copilot_short %}-powered platform for creating and sharing applications (“sparks”) that can be tailored to individual needs and accessed seamlessly across desktop and mobile devices \- without requiring users to write or deploy code.

{% data variables.product.prodname_spark_short %} offers a natural language centric development environment for application creation and a fully managed runtime environment that scales with your sparks’ needs. {% data variables.product.prodname_spark_short %} eliminates the need to manually manage infrastructure or stitch together multiple tools, letting you focus on building.

### Input processing

{% data reusables.copilot.spark-model %}

Input prompts in {% data variables.product.prodname_spark_short %} are pre-processed by {% data variables.product.prodname_copilot_short %}, augmented with contextual information from your current {% data variables.product.prodname_spark_short %} inputs and sent to a large language model powered agent within your development environment. Included context includes information from your spark such as code from your current application, previous prompts supplied in the {% data variables.product.prodname_spark_short %} interface, and any error logs from  your spark’s development environment.

The system is only designed to generate code based on submitted prompts. It is not capable of conversational interactions. English is the preferred language for submitted prompts.

### Language model analysis

The prompt is then passed through a large language model, which is a neural network that has been trained on a large body of text data. The language model analyzes the input prompt to help the agent reason on the task and leverage necessary tools.

### Agent execution

The agent which runs in your development environment accepts your prompt and the additional context passed, and decides how to update your spark to satisfy your request. The agent is able to operate your development environment by writing code, running commands, and reading execution outputs. All of the actions taken by the agent are to ensure functional, accurate code to execute your prompt. The only output from the agent is your application code.

### {% data variables.product.prodname_spark_short %} frameworks

The {% data variables.product.prodname_spark_short %} agent is trained to use frameworks and SDKs supplied by {% data variables.product.prodname_spark_short %} that ensure modern design and secure deployments seamlessly integrated into {% data variables.product.prodname_spark_short %}’s runtime component. The design framework is designed to be flexible and modular, enabling you to easily modify the theme to match your desired look and feel. {% data variables.product.prodname_spark_short %}’s runtime integration, accessible via the SDK, uses best practices for web deployments to ensure secure, scalable deployments.

### Adding inference capabilities to your spark

{% data variables.product.prodname_spark_short %}’s SDK natively integrates with {% data variables.product.prodname_github_models %}, allowing you to incorporate model inference into your spark. If {% data variables.product.prodname_spark_short %} determines that your application requires inference capabilities, it will add them using the {% data variables.product.prodname_spark_short %} SDK.

{% data variables.product.prodname_spark_short %} gives you the tools to create, modify, and test the prompts that will be used with these inference capabilities. {% data variables.product.prodname_spark_short %} does not do any testing of the prompts that you create within your application, so you must ensure that your included capabilities act as intended. For more information on responsible use within {% data variables.product.prodname_github_models %}, see the [AUTOTITLE](/github-models/responsible-use-of-github-models).

### Data processing

{% data variables.product.prodname_spark_short %} collects data to operate the service - this includes prompts, suggestions, and code snippets necessary to ensuring continuity between sessions. {% data variables.product.prodname_spark_short %} also collects additional usage information including usage patterns, submitted feedback, and performance telemetry.

## Use cases for {% data variables.product.prodname_spark_short %}

### Building and deploying full stack web applications

You can use {% data variables.product.prodname_spark_short %} to build full stack web applications for you using natural language. {% data variables.product.prodname_spark_short %}’s integrated runtime environment allows you to deploy these applications to the public internet. You can define permissions to these deployed applications based on {% data variables.product.github %} account visibility, allowing them to be visible to the general public, specific {% data variables.product.github %} members, members of your team or organization, or just you. Sparks can be anything \- from board game score trackers to full software-as-a-service products \- however whatever you deploy remains subject to {% data variables.product.github %}’s [Terms](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) for user generated content.

### Prototyping ideas

{% data variables.product.prodname_spark_short %} helps developers, designers, product managers, or other builders rapidly prototype ideas without needing to build applications from scratch or construct complex mockups. These prototypes can be deployed for ease of sharing, or can remain unpublished as a way for builders to instantly see their vision.

## Improving performance for {% data variables.product.prodname_spark_short %}

{% data variables.product.prodname_spark_short %} can build a wide variety of applications, and iterate on them over time to increase complexity as new requirements are surfaced. To enhance performance and address some limitations of {% data variables.product.prodname_spark_short %}, there are various best practices you can adopt. For more information about the limitations of {% data variables.product.prodname_spark_short %}, see [Limitations of {% data variables.product.prodname_spark_short %}](#limitations-of-github-spark).

### Keep your prompts specific and on topic

{% data variables.product.prodname_spark_short %} is intended to build and iterate on your spark. The more specific you can be about the intended behaviors and interactions, the better the output will be from {% data variables.product.prodname_spark_short %}. Incorporating relevant context such as specific scenarios, mockups, or specifications will help {% data variables.product.prodname_spark_short %} understand your intent, which will improve the output you receive.

{% data variables.product.prodname_spark_short %} also incorporates context from previous prompts into each subsequent revision it generates. Submitting off-topic prompts may hinder performance on subsequent revisions. Therefore try to keep your prompts as relevant as possible to the application you are building.

### Use targeted edits appropriately

Targeted edits in {% data variables.product.prodname_spark_short %} allow you to specify elements within your application, letting you refine style, substance, or behavior of individual elements of your application. These targeted edits are an excellent way to constrain edit surface area and express intent to {% data variables.product.prodname_spark_short %}. Using targeted edits when possible (rather than global prompts) will result in more accurate changes, as well as fewer side effects in your application as {% data variables.product.prodname_spark_short %} generates new revisions.

### Verify {% data variables.product.prodname_spark_short %}’s output

While {% data variables.product.prodname_spark_short %} is an extremely powerful tool, it may still make mistakes. These mistakes can be misunderstandings of your goals, or more simple syntax errors within your generated spark. You should always use {% data variables.product.prodname_spark_short %}’s provided application preview to verify that your spark behaves as intended in different scenarios. If you are comfortable with code, it is also best practice to ensure the generated code is up to your code quality standards.

## Limitations of {% data variables.product.prodname_spark %}

### Interpretation of user intent

{% data variables.product.prodname_spark_short %} is not always correct in its interpretation of your intent. You should always use {% data variables.product.prodname_spark_short %}’s provided preview to confirm accurate behavior within your spark.

### Limited scope

{% data variables.product.prodname_spark_short %} is backed by {% data variables.product.prodname_copilot_short %}, and therefore has been trained on a large body of code and relevant applications. However it may still struggle with complex or truly novel applications. {% data variables.product.prodname_spark_short %} will perform best on common/personal application scenarios (e.g. productivity tools, learning aids, life management utilities), and when the natural language instruction is provided in English.

### Public code

{% data variables.product.prodname_spark_short %} may generate code that is a match or near match of publicly available code, even if the "Suggestions matching public code" policy is set to "Block." See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code).

If this happens, {% data variables.product.prodname_copilot_short %} will not provide code references pointing to the original source of the code. See [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

### Security limitations

While {% data variables.product.prodname_spark_short %}’s runtime follows best practices for application deployment, it does generate code probabilistically, which can potentially introduce vulnerabilities especially if those vulnerabilities are common in the training set of applications. You should be careful when building applications that manage personal or sensitive data and always review and test the generated application thoroughly.

### Legal and regulatory considerations

Users need to evaluate potential specific legal and regulatory obligations when using any AI services and solutions, which may not be appropriate for use in every industry or scenario. Additionally, AI services or solutions are not designed for and may not be used in ways prohibited in applicable terms of service and relevant codes of conduct.

### Offensive content

{% data variables.product.prodname_spark_short %} has built-in protections against harmful, hateful, or offensive content. Please report any examples of offensive content to copilot-safety@github.com. Please include your spark’s URL so that we can identify the spark.

You can report problematic or illegal content via Feedback, or you can report a spark as abuse or spam. See [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) and {% data variables.product.github %}'s [Content Removal Policies](/free-pro-team@latest/site-policy/content-removal-policies).

## Further Reading

* [AUTOTITLE](/copilot/tutorials/building-your-first-app-in-minutes-with-github-spark)
* [AUTOTITLE](/copilot/tutorials/building-ai-app-prototypes)
* [AUTOTITLE](/copilot/concepts/copilot-billing/about-billing-for-github-spark)
* [AUTOTITLE](/github-models/responsible-use-of-github-models)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
