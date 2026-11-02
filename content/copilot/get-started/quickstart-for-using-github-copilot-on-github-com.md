---
title: Quickstart for using GitHub Copilot on GitHub.com
shortTitle: Copilot on GitHub.com
intro: 'Understand code and work faster by asking questions and assigning coding tasks to {% data variables.copilot.copilot_in_the_cloud_short %} without leaving {% data variables.product.github %}.'
product: '{% data reusables.gated-features.copilot-in-the-cloud %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=dotcom-quickstart-purchase&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
redirect_from:
  - /copilot/get-started/quickstart
contentType: get-started
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} is built into {% data variables.product.github %}, so you can use it without installing anything.

This quickstart takes about fifteen minutes and shows how to ask questions about a repository, request and review a code change, and continue your work on {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_copilot_short %}.

## Prerequisites

* For Task 1, you need read access to a repository, such as the public [github/docs](https://github.com/github/docs?utm_source=dotcom-quickstart-os-docs-repo&utm_medium=docs&utm_campaign=universe-2026) repository.
* For Tasks 2 and 3, you need write access to a repository. We recommend using a repository that you own or have permission to make changes to.
* To complete each task in this quickstart, {% data variables.product.prodname_copilot_short %} must be available for your account and enabled for the repository you will use. For setup guidance, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot).
* To perform Task 3, you need to have {% data variables.product.prodname_mobile %} installed and set up for your account. See [AUTOTITLE](/get-started/using-github/github-mobile).

## Task 1: Ask {% data variables.product.prodname_copilot_short %} questions about a repository

1. [Start a session with {% data variables.product.prodname_copilot_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=dotcom-quickstart-start-session-cta&utm_medium=docs&utm_campaign=universe-2026), from the {% data variables.product.prodname_copilot_short %} home page.
1. Below the prompt box, open the **Chat** session scope picker.
1. Under **Work in a repository**, search for and select the repository you want to explore.
   * If you need a repository to try, use the public [github/docs](https://github.com/github/docs?utm_source=dotcom-quickstart-os-docs-repo&utm_medium=docs&utm_campaign=universe-2026) repository.
1. If a specific file, issue, or pull request is relevant, type `@` in the prompt box and select it from the suggestions. This gives {% data variables.product.prodname_copilot_short %} a specific place to look for context.
1. Ask a question about the repository. For example:

   ```copilot copy
   I'm new to github/docs. How is this repository organized,
   and where should I start to understand how the site is built?
   ```

   ```copilot copy
   In /package.json, which scripts look relevant for validating
   a change, and what command does each run?
   ```

   ```copilot copy
   What behavior does
   /src/color-schemes/tests/color-mode-script.ts cover?
   Suggest one additional test case that would fit the
   existing tests, and explain why.
   ```

   To create a prompt from the above examples, select **Copy**, and paste it into the prompt box. Then press <kbd>Enter</kbd> to send the prompt.

   {% data variables.product.prodname_copilot_short %}'s answer appears in the conversation. Ask a focused question about a file, feature, or error to get a more useful answer.
1. Ask a follow-up question by typing it in the same prompt box and pressing <kbd>Enter</kbd>. The conversation gives {% data variables.product.prodname_copilot_short %} context for your next question.

## Task 2: Request and review a code change

1. [Start a session with {% data variables.product.prodname_copilot_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=dotcom-quickstart-start-session-cta-2&utm_medium=docs&utm_campaign=universe-2026), from your {% data variables.product.prodname_copilot_short %} home page.
1. In a repository where you have write access, use the **Chat** session scope picker and select the repository under **Work in a repository**.
1. Request a code change. State the result you want and any relevant file or behavior. For example, copy and send this prompt:

   ```copilot copy
   Add a small ASCII art image to the top of the README file.
   ```

   Paste the prompt into the prompt box and press <kbd>Enter</kbd> to send it. {% data variables.product.prodname_copilot_short %} works on the task in the background.

   > [!IMPORTANT]
   > Review all {% data variables.product.prodname_copilot_short %} requests for permissions or action, before allowing changes.
1. As {% data variables.product.prodname_copilot_short %} works on the request, you can continue to interact with the session. You can also expand each of the steps {% data variables.product.prodname_copilot_short %} takes in the session log to see the work performed and tools used.
1. When {% data variables.product.prodname_copilot_short %} finishes, it will display the changes above the prompt box, and present an option to create a pull request.
1. Click **Changes** to view the proposed changes.
1. To make further changes, type a follow-up request in the same prompt box and press <kbd>Enter</kbd>. The session retains the context from your earlier prompts.
1. Click **Create pull request**, then click the **View PR** link to view your changes.

Proceed to Task 3 to continue your session in {% data variables.product.prodname_mobile %}.

## Task 3: Continue your session in {% data variables.product.prodname_mobile %}

1. Open {% data variables.product.prodname_mobile %} on your device.
1. From the home page, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.
1. Under the list of recent sessions, tap the name of the session you created above. The name is often based on the first prompt you sent. In this example, it may be something like `README ascii art`.
1. Click on **View PR**, and then **Files changed**, to review the proposed changes again.
1. Optionally, to request another change, click the affected line. Add a comment that mentions `@copilot` and describes what to change. Then select **Comment** and click **Finish your review** so {% data variables.product.prodname_copilot_short %} can see and act on your request.

   {% data variables.product.prodname_copilot_short %} will acknowledge your comment with a reaction, and start a session to make the requested changes if possible. Timeline events on the pull request page will show when {% data variables.product.prodname_copilot_short %} is finished, and {% data variables.product.prodname_copilot_short %} will request your review again as well as reply to your previous comment with the results.
1. When you are happy with your pull request, you must **Mark as ready for review**.
1. Review the changes made by {% data variables.product.prodname_copilot_short %} to ensure they meet your expectations. If needed, click **Approve** and then **Finish your review**, to bring the PR to a merge-ready state.
1. Click **Merge** to merge the pull request.

   Next, let's check to see your updated README file.
1. Return to your **Home** on {% data variables.product.prodname_mobile %} to search for your repository, and open it.
1. Scroll to the bottom of the page to view the repository's README, and admire your artwork!

## Next steps

- [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github)
- [AUTOTITLE](/billing/how-tos/products/estimate-spending)
- [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-ai-usage)
