---
title: Write effective prompts and provide useful context for Spark
shortTitle: Prompt tips
intro: 'Learn how to get the best results when you are describing your app idea to {% data variables.product.prodname_spark_short %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: spark
product: 'Anyone with a {% data variables.copilot.copilot_pro_plus_short %} or {% data variables.copilot.copilot_enterprise_short %} license can use {% data variables.product.prodname_spark_short %}.'
contentType: tutorials
category:
  - Rapid prototyping
  - Learn about Copilot
  - Author and optimize with Copilot
---

## Introduction

{% data variables.product.prodname_spark_short %} can build a publishable web app from a single natural language prompt.

There are a couple of ways to improve the prompt and context you send to {% data variables.product.prodname_spark_short %}, to help {% data variables.product.prodname_spark_short %} most effectively turn your app idea into reality.

To start building with {% data variables.product.prodname_spark_short %}, go to https://github.com/spark.

## Pair with {% data variables.product.prodname_copilot_short %} to fine-tune your initial {% data variables.product.prodname_spark_short %} prompt

By providing {% data variables.product.prodname_copilot_short %} with some context and instruction, {% data variables.product.prodname_copilot_short %} can help you refine your initial prompt to {% data variables.product.prodname_spark_short %} so that it best communicates your requirements.

1. Open [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Send the following prompt to {% data variables.product.prodname_copilot_short %}, editing the wording to align with your own app idea.

   ```copilot copy
   I have a no-code app builder that can build an entire app through a single prompt. It's called GitHub Spark. Let's work together to build a Spark prompt.

   The prompt should focus on adequately describing the features and requirements so I can get an great app that [DESCRIBE APP IDEA].

   Do not include in the prompt where to place files in the project directory, explain coding standards, tell the agent how to code a feature, or request a README.

   The prompt should use vibrant and specific language to describe the app idea.

   The final prompt should allow the app to be extensible and easily iterated on.

   Ask follow up questions if necessary.
   ```

1. In a new browser tab, open [{% data variables.product.prodname_spark_short %}](https://github.com/spark).
1. Paste {% data variables.product.prodname_copilot_short %}'s output into {% data variables.product.prodname_spark_short %}'s input field to generate your spark.

## Upload a markdown document

To include very detailed requirements in your prompt to {% data variables.product.prodname_spark_short %}, you can drag and drop a markdown file, such as a `README.md`, into {% data variables.product.prodname_spark_short %}'s input field, and then use the following example prompt.

### Example prompt

```copilot copy
Build a production-ready app inspired by the requirements outlined in this markdown file.

Carefully interpret the features, user flows, and design details described, and transform them into a visually engaging, intuitive, and responsive application.

Prioritize usability, accessibility, and seamless user experience throughout.
```

## Upload a sketch or image

You can sketch out your app idea using a digital tool or by hand. Then, take a photo or screenshot of your design and attach the image into {% data variables.product.prodname_spark_short %}'s input field, together with the following example prompt.

### Example prompt

```copilot copy
Build a production-ready app inspired by the attached image.

Interpret the visual design, layout, and any details shown in the image to create a vibrant, intuitive, and user-friendly experience.

Prioritize usability, accessibility, and seamless user experience throughout.
```

## Be specific with styling requirements

With {% data variables.product.prodname_spark_short %}, you can reference specific design styles, such as glassmorphic, minimalist, retro, playful. You can also provide details on font styles, color palettes or animation effects, and {% data variables.product.prodname_spark_short %} can create an interface that matches your vision.

### Example prompt

```copilot copy
Design my task management app with a glassmorphic style. Use modern, rounded sans-serif fonts for a sleek, contemporary look, and add gentle animations when tasks are completed.
```
