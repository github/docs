{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce. By default, {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} is disabled at the organization level.
1. Optionally, if you select **Enabled** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" policy, you can also choose to allow or disallow feedback on pull request summaries.
   * To allow feedback after {% data variables.product.prodname_copilot_short %} generates a pull request summary, select **Opt in to user feedback collection**. Developers will be able to provide feedback after {% data variables.product.prodname_copilot_short %} generates a pull request summary, and the summary will be sent to {% data variables.product.prodname_dotcom %} for context.
   * To disallow feedback after {% data variables.product.prodname_copilot_short %} generates a pull request summary, deselect **Opt in to user feedback collection**. Developers will still be able to provide feedback on {% data variables.product.prodname_copilot_short %} with the feedback icons attached to each {% data variables.product.prodname_copilot_chat_short %} response, and via the "Give feedback" link in conversations.

   For more information about user feedback collection for {% data variables.product.prodname_copilot_short %}, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#sharing-feedback-about-github-copilot-chat-in-githubcom)."

   > [!NOTE] If you choose **No policy** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" option, and an organization owner enables "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" in their organization, user feedback collection is enabled by default, and can be managed at the organization level.

1. Next to "Give {% data variables.product.prodname_copilot_short %} access to Bing," click the dropdown menu and select the policy you want to enforce. By default, Bing is disabled at the organization level.

   > [!NOTE] Bing search integration into {% data variables.product.prodname_copilot_chat_dotcom_short %}, {% data variables.product.prodname_vscode_shortname %}, and {% data variables.product.prodname_vs %} is currently in beta and is subject to change.
