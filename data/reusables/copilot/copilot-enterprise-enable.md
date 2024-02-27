{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce.

   - **No policy** - Allow each of your organizations to set their own policy. {% data variables.product.prodname_copilot_enterprise %} features will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings.
   - **Enabled** - Allow use of {% data variables.product.prodname_copilot_enterprise_short %} features by all members of organizations in your enterprise who have been granted access to {% data variables.product.prodname_copilot_short %}.
   - **Disabled** - Prevent use of {% data variables.product.prodname_copilot_enterprise_short %} features by anyone in your enterprise.

1. If you select **Enabled**, two check boxes are displayed. These are selected by default.

   - **Allow Bing access** - Clear this check box to prevent {% data variables.product.prodname_copilot_chat %} using Bing search results to provide information for its responses. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-general-question-about-software-development)."
   - **Opt in to user feedback collection** - Clear this check box to prevent the display of the thumbs up and thumbs down feedback icons after {% data variables.product.prodname_copilot_short %} generates a pull request summary. If you opt in to collection of user feedback, when a user selects one of these icons, the pull request summary will be returned to {% data variables.product.prodname_dotcom %} to provide context for the user's feedback. If you clear this check box, the thumbs up and thumbs down feedback icons will still be displayed below each response in the {% data variables.product.prodname_copilot_chat_short %} panel, and users will still be able to submit written feedback to {% data variables.product.prodname_dotcom %} about {% data variables.product.prodname_copilot_short %} generally via the "Give feedback" link in the chat panel. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#sharing-feedback-about-github-copilot-chat-in-githubcom)."

   {% note %}

   **Notes:**
   - If you choose **No policy** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" option, Bing access and collection of user feedback will be allowed for any organization that enables {% data variables.product.prodname_copilot_enterprise %}.
   - Bing search integration into {% data variables.product.prodname_copilot_chat_dotcom_short %} is currently in beta and is subject to change.

   {% endnote %}
