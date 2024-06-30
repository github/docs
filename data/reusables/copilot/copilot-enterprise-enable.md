{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce.

   * **No policy** - Allow each of your organizations to set their own policy. "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings.
   * **Enabled** - Allow use of "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" by all members of organizations in your enterprise who have been granted access to {% data variables.product.prodname_copilot_short %}.
   * **Disabled** - Prevent organizations from assigning {% data variables.product.prodname_copilot_enterprise_short %} seats to members under the enterprise's {% data variables.product.prodname_copilot_enterprise_short %} subscription.

1. If you select **Enabled** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" policy, the **Opt in to user feedback collection** check box is displayed.

   Clear the **Opt in to user feedback collection** check box to prevent the display of the thumbs up and thumbs down feedback icons after {% data variables.product.prodname_copilot_short %} generates a pull request summary. The thumbs up and thumbs down feedback icons will still be displayed below each response in the {% data variables.product.prodname_copilot_chat_short %} panel, and users will still be able to submit written feedback to {% data variables.product.prodname_dotcom %} about {% data variables.product.prodname_copilot_short %} generally via the "Give feedback" link in the chat panel.

   If you select the **Opt in to user feedback collection** check box, then when a user clicks the thumbs up or thumbs down icon, after a pull request summary is generated, the summary will be returned to {% data variables.product.prodname_dotcom %} to provide context for the user's feedback.

   For more information about user feedback collection for {% data variables.product.prodname_copilot_short %}, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#sharing-feedback-about-github-copilot-chat-in-githubcom)."

   > [!NOTE] If you choose **No policy** for the "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" option, user feedback collection will initially be enabled at the organization level, but organization owners can choose to opt out for their organization.

1. Next to "Give {% data variables.product.prodname_copilot_short %} access to Bing," click the dropdown menu and select the policy you want to enforce.

   * **No policy** - Allow each of your organizations to set their own policy. Access to Bing will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings.
   * **Enabled** - Allow {% data variables.product.prodname_copilot_chat_short %} to use results from a Bing web search to provide information for its responses. See "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#asking-a-general-question-about-software-development)" and "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#using-github-skills-for-copilot)."
   * **Disabled** - Prevent {% data variables.product.prodname_copilot_chat_short %} from accessing Bing.

   > [!NOTE] Bing search integration into {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode_shortname %}, and {% data variables.product.prodname_vs %} is currently in beta and is subject to change.
