{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce.

   - **No policy** - Allow each of your organizations to set their own policy. {% data variables.product.prodname_copilot_enterprise %} features will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings.
   - **Enabled** - Allow use of {% data variables.product.prodname_copilot_enterprise_short %} features by all members of organizations in your enterprise who have been granted access to {% data variables.product.prodname_copilot_short %}.
   - **Disabled** - Prevent use of {% data variables.product.prodname_copilot_enterprise_short %} features by anyone in your enterprise.

1. If you select **Enabled**, two check boxes are displayed. These are selected by default.

   - **Allow Bing access** - Clear this check box to prevent {% data variables.product.prodname_copilot_chat %} using Bing search results to provide information for its responses. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)."
   - **Opt in to user feedback collection** - Clear this check box to prevent detailed feedback being collected from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}. If this option is disabled, the thumbs-up/thumbs-down feedback icons will not be displayed after {% data variables.product.prodname_copilot_short %} generates a pull request summary. The feedback icons will still be displayed in the {% data variables.product.prodname_copilot_chat_short %} panel on {% data variables.product.prodname_dotcom_the_website %}, but the user will not be offered the opportunity to provide written feedback about a chat response.

   {% note %}

   **Notes:**
   - If you opt in to collection of user feedback from {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} then, when one of these icons is selected, the pull request summary will be returned to {% data variables.product.prodname_dotcom %} to provide context for the user's feedback.
   - If you choose **No policy** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" option, Bing access and collection of user feedback will be allowed for any organization that enables {% data variables.product.prodname_copilot_enterprise %}.
   - Bing search integration into {% data variables.product.prodname_copilot_chat_dotcom_short %} is currently in beta and is subject to change.

   {% endnote %}
