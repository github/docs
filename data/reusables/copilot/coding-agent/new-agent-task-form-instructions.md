1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Type a prompt describing your request.

    For example, `Implement a user friendly message for common errors.`

1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
1. {% data reusables.copilot.optional-select-custom-agent %}
1. Click **{% octicon "paper-airplane" aria-label="Start task" %} Start task** or press <kbd>Return</kbd>.

    {% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.
