---
title: Building and deploying AI-powered apps with GitHub Spark
shortTitle: Build apps with Spark
allowTitleToDifferFromFilename: true
intro: 'Learn how to build and deploy an intelligent web app with natural language using {% data variables.product.prodname_spark %}.'
versions:
  feature: spark
product: 'Anyone with a {% data variables.copilot.copilot_pro_plus_short %} license can use {% data variables.product.prodname_spark_short %}.'
topics:
  - Copilot
redirect_from:
  - /copilot/tutorials/building-ai-app-prototypes
contentType: tutorials
---

> [!NOTE]
> * {% data reusables.spark.preview-note-spark %}
> * The {% data variables.product.prodname_copilot %} setting that blocks suggestions matching public code may not work as intended when using {% data variables.product.prodname_spark_short %}. See [AUTOTITLE](/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-suggestions-matching-public-code).

## Introduction

With {% data variables.product.prodname_spark %}, you can describe what you want in natural language and get a fullstack web app with data storage, AI features, and {% data variables.product.github %} authentication built in. You can iterate using prompts, visual tools, or code, and then deploy with a click to a fully managed runtime.

{% data variables.product.prodname_spark_short %} is seamlessly integrated with {% data variables.product.github %} so you can develop your spark via a synced {% data variables.product.github %} codespace with {% data variables.product.prodname_copilot_short %} for advanced editing. You can also create a repository for team collaboration, and leverage {% data variables.product.github %}'s ecosystem of tools and integrations.

This tutorial will guide you through building and deploying an app with {% data variables.product.prodname_spark_short %} and exploring its features.

### Prerequisites

* A {% data variables.product.github %} account with {% data variables.copilot.copilot_pro_plus_short %}.

## Step 1: Create your web app

For this tutorial, we'll create a simple marketing tool app, where:
* The user enters a description of a product they want to market.
* The app generates marketing copy, and recommends a visual strategy and target audience.

1. Navigate to https://github.com/spark.
1. In the input field, enter a description of your app. For example:

   ```text copy
   Build an app called "AI-Powered Marketing Assistant."

   The app should allow users to input a brief description of a product or service. When the user submits their brief, send this information to a generative AI model with a prompt that asks the AI to return the following:
      - Persuasive and engaging marketing copy for the product or service.
      - A visual strategy for how to present the product/service (e.g., suggested imagery, colors, design motifs, or mood).
      - A recommendation for the ideal target audience.
   The app should display these three elements clearly and in an organized manner.  The app should look modern, fresh and engaging.
   ```

   > [!TIP]
   > * Be specific, and provide as many details as possible for the best results. You can [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot) to refine or suggest improvements to your initial prompt.
   > * Alternatively, drop a markdown document into the input field to provide {% data variables.product.prodname_spark_short %} with more context on what you're hoping to build.

1. Optionally, upload an image to provide {% data variables.product.prodname_spark_short %} with a visual reference for your app. Mocks, sketches, or screenshots all work to provide {% data variables.product.prodname_spark_short %} with an idea of what you want to build.
1. Click **{% octicon "paper-airplane" aria-label="Submit prompt" %}** to build your app.

   > [!NOTE]
   > {% data variables.product.prodname_spark_short %} will always generate a Typescript and React app.

## Step 2: Refine and expand your app

Once {% data variables.product.prodname_spark_short %} is done generating your app, you can test it out in the live preview window. From here, you can iterate on and expand your app using natural language, visual editing controls, or code.

1. To make changes to your app using **natural language**, under the "Iterate" tab in the left sidebar, enter your instructions in the main input field, then submit.
1. Optionally, click one of the "Suggestions" directly above the input field in the "Iterate" tab to develop your app.
1. {% data variables.product.prodname_spark_short %} automatically alerts you to detected errors. To fix the errors, click **Fix All** above the input field in the "Iterate" tab.
1. Optionally, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Code** to view and edit the underlying code. The code editing panel has {% data variables.product.prodname_copilot_short %} code completion built in.
1. To make targeted changes to a specific element of your app click the **target icon** in the top right corner then hover over and select an element in the live preview pane.

## Step 3: Customize the styling of your app

Next, let's change the styling of your app using {% data variables.product.prodname_spark_short %}'s built-in tools. Alternatively, you can edit the code directly.

1. Change your app's overall appearance:
   * Click the **Theme** tab to adjust typography, colors, border radius, spacing, and other visual elements.
   * Choose from pre-generated themes to easily update the overall style your app.
1. To target visual edits at a specific component, click the **target icon**, then select an element of the app in the preview pane. Styling controls related to that specific element will show up in the left sidebar.
1. Optionally, edit styles in code:
   * Click **{% octicon "code" aria-label="Code" %}** to open the code editor.
   * Modify CSS, Tailwind CSS, or custom variables for fine-grained control (e.g., padding, spacing, fonts, colors).

     > [!TIP]
     > You can import custom fonts (like Google Fonts) or add advanced styles directly in the Spark code editor.
     > Ask [{% data variables.copilot.copilot_chat_short %}](https://github.com/copilot) for step-by-step guidance if you're not familiar with styling syntax.

1. Click the **Assets** tab to upload assets you want to surface in your app.
   * Add images, logos, videos, documents or other assets to personalize your app.
   * Once uploaded, instruct {% data variables.product.prodname_spark_short %} on how you'd like to incorporate those assets into your app in the "Iterate" tab.

## Step 4: Store and manage data

If {% data variables.product.prodname_spark_short %} detects the need to store data in your app, it will automatically set up data storage for you using a key-value store.

> [!NOTE]
> If you deploy your spark and make it visible to other users, the data in your app is **shared across all users** that can access your app. Make sure no sensitive data is included in your spark prior to updating visibility settings.

For our marketing app, let's add data storage so that users can save their favorite pieces of marketing copy and easily access them again later:

1. Use the following instruction in the "Iterate" tab to guide {% data variables.product.prodname_spark_short %}:

   ```text copy
   Add a "Favorites" page where users can save and view their favorite marketing copy results.
   ```

1. Interact with the app once it's done generating to test saving and retrieving favorites.
1. Check the "Data" tab to view and edit the stored values.
1. If you explicitly **don't** want {% data variables.product.prodname_spark_short %} to save data, ask {% data variables.product.prodname_spark_short %} to "store data locally" or "don't persist data".

## Step 5: Refine AI capabilities

Next, let's iterate on the AI capabilities included in our app, which are powered by {% data variables.product.prodname_github_models %}.

{% data variables.product.prodname_spark_short %} automatically detects when AI is needed for features in your app. It will auto-generate the prompts for each AI feature, integrate with the best-fit models, and manage API integration and LLM inference on your behalf.

1. Click the **Prompts** tab.
1. Review the prompts {% data variables.product.prodname_spark_short %} generated to power each of the AI features used in your app.
   * In the case of our marketing app there are three separate prompts {% data variables.product.prodname_spark_short %} has generated for us (marketing copy generation, visual strategy recommendation, and target audience recommendation).
1. Click on each prompt to view and edit without needing to go into the code. Make adjustments to better fit your use case.
1. Test the app to see updated results.

## Step 6: Edit and debug with code and {% data variables.product.prodname_copilot_short %}

You can view or edit your app’s code directly in {% data variables.product.prodname_spark_short %} or via a synced {% data variables.product.github %} codespace.

> [!NOTE]
> * {% data variables.product.prodname_spark_short %} uses an opinionated stack (**React**, **TypeScript**) for reliability.
> * For best results, you should **work within {% data variables.product.prodname_spark_short %}'s SDK** and core framework.
> * You can **add external libraries**, but compatibility isn’t guaranteed — you should test thoroughly.
> * Directly editing the React code **lets you add model context**, as long as you follow valid syntax and {% data variables.product.prodname_spark_short %}'s framework.

1. To edit code in {% data variables.product.prodname_spark_short %}:
   * Click **{% octicon "code" aria-label=“Code” %} Code**.
   * Navigate the file tree and make any edits, with access to Copilot code completions in the editor. Changes are reflected instantly in the live preview window.
1. To make more advanced edits:
   * In the top right corner, click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "codespaces" aria-label=“Open codespace” %} Open codespace** (a full-featured cloud IDE) to launch a codespace in a new browser tab.
   * Once inside the codespace, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %}** to open {% data variables.product.prodname_copilot_short %} to make more advanced changes.
      * In the prompt box, select **Agent** mode to enable {% data variables.product.prodname_copilot_short %} to autonomously build, review, and troubleshoot your code.
      * Select **Edit** mode for {% data variables.product.prodname_copilot_short %} to review your app's code and suggest improvements and fixes.
      * Choose **Ask** mode for {% data variables.product.prodname_copilot_short %} to explain and help you understand the code or any errors you see in {% data variables.product.prodname_spark_short %}.
   * Changes you make in the codespace are automatically synced to {% data variables.product.prodname_spark_short %}.

## Step 7: Deploy and share your app

{% data variables.product.prodname_spark_short %} comes with a fully integrated runtime environment that allows you to deploy your app in one click.

> [!NOTE]
> If you make your spark accessible to all {% data variables.product.github %} users, all users will be able to access and edit the data stored in your spark. Make sure to delete any private or sensitive data from your app prior to making it visible to other users.

1. In the top right corner, click **Publish**.
1. By default, your spark will be private and only accessible to you. Under "Visibility", choose whether you want your spark to remain private, or make it available to all {% data variables.product.github %} users.

   ![Screenshot of the {% data variables.product.prodname_spark %} publication menu. The "All {% data variables.product.github %} users" visibility option is outlined in orange.](/assets/images/help/copilot/spark-github-user-visibility.png)

1. Click **Visit site** to be taken to your live, deployed app. Copy your site's URL to share with others.
   > [!NOTE]
   > When you publish your app, {% data variables.product.prodname_spark_short %} automatically includes cloud-based storage and LLM inference for your application to use as part of the integrated runtime.
   >
   > The URL for your spark is generated based on the name of your spark. You can edit the name of your app and {% data variables.product.prodname_spark_short %} will automatically manage re-routing of old URLs to your latest URL.

## Step 8: Invite collaborators with a repository

Now that you have a functional, deployed app, you can continue to build and collaborate on your app in the same way you would with any other {% data variables.product.github %} project, by creating and linking a {% data variables.product.github %} repository to your spark.

1. In the top right corner, click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "repo-push" aria-hidden="true" aria-label="repo-push" %} Create repository**.
1. In dialog box that opens, click **Create**.

A new, private repository is created under your personal account on {% data variables.product.github %}, with the name of the repository based on the name of your spark.

Any changes made to your spark prior to repository creation will be added to your repository so you have a full record of all changes and commits made to your spark since its creation.

There's a two-way sync between your spark and the repository, so changes made in either {% data variables.product.prodname_spark_short %} or the main branch of your repository are automatically reflected in both places.

You can also create issues in your repository and assign them to {% data variables.copilot.copilot_coding_agent %} so it can draft pull requests for fixes and improvements.

## Next steps

Explore more ideas you can build with {% data variables.product.prodname_spark_short %}:
* **Prototype new ideas quickly**: if you have a specific idea for a feature or app, upload a mockup, sketch, screenshot, or even paste a markdown documentation into {% data variables.product.prodname_spark_short %} and ask {% data variables.product.prodname_spark_short %} to build out your idea.
* **Build internal tools for yourself and your team**: If you have a common workflow or process that currently sits in a document or spreadsheet, explain your workflow or process to {% data variables.product.prodname_spark_short %} and {% data variables.product.prodname_spark_short %} can turn it into an interactive web app.

## Further reading

* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
* [AUTOTITLE](/copilot/concepts/copilot-billing/about-billing-for-github-spark)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms)
