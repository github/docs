---
title: Provide visual inputs to GitHub Copilot
shortTitle: Provide visual inputs
intro: 'You can attach images to issues or {% data variables.copilot.copilot_chat_short %} prompts to help {% data variables.product.prodname_copilot_short %} understand your task.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

> [!NOTE]
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

{% data variables.copilot.copilot_coding_agent_short_cap_c %} can process images, such as a photo or screenshot of a sketch or design, as part of your task description. This is useful when you want to show {% data variables.product.prodname_copilot_short %} what you're trying to achieve visually, for example, when updating a UI or implementing a design.

You can provide images to {% data variables.product.prodname_copilot_short %} in two ways:

* **In an issue**: Add an image to the issue body, with a description of the task you want {% data variables.product.prodname_copilot_short %} to complete, then assign the issue to {% data variables.product.prodname_copilot_short %}.
* **In {% data variables.copilot.copilot_chat_short %}**: Attach images to your prompt when you ask {% data variables.product.prodname_copilot_short %} to create a pull request.

## Attaching images to an issue

1. Navigate to the repository where you want to create the issue.
1. Create a new issue or open an existing issue.
1. In the issue body, drag and drop your image.
1. Add a clear description of what you want {% data variables.product.prodname_copilot_short %} to do with the image. For example, "Let's update the login form to match this mockup".
1. Assign the issue to {% data variables.product.prodname_copilot_short %}. For detailed instructions, see [Assign an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#assigning-an-issue-to-copilot-on-githubcom).

{% data variables.product.prodname_copilot_short %} will analyze the image along with your description when working on the task.

## Attaching images in {% data variables.copilot.copilot_chat_short %}

1. Open {% data variables.copilot.copilot_chat_short %}.
1. Attach your image to the chat prompt, and use `/task` to describe what you want {% data variables.product.prodname_copilot_short %} to do. For example, "Update the notification badge to match this mockup". 

   For detailed instructions, see [Asking {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %}](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#asking-copilot-to-create-a-pull-request-from-copilot-chat-in-githubcom).
1. {% data variables.product.prodname_copilot_short %} will create a pull request using the image as context for the task.

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr)
* [AUTOTITLE](/copilot/tutorials/coding-agent/best-practices)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs)
