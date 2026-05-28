1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Type a prompt describing your request. You can also add visual inputs like screenshots or UI mockups by pasting, dragging, or uploading an image. Files supported: image/png, image/jpeg, image/gif, image/webp.

    For example, `Implement a user friendly message for common errors.`

    If you want {% data variables.product.prodname_copilot_short %} to open a pull request, you can ask in your prompt, for example `Open a pull request to implement a user friendly message for common errors.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s changes. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch.
{% data reusables.copilot.optional-select-custom-agent-dotcom %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}
1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.

    {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push any code changes.

    You can track {% data variables.product.prodname_copilot_short %}'s work and open a pull request in one click from the session logs. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/track-copilot-sessions).
