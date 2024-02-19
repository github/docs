{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce.
   - To allow each of your organizations to set their own policy, select **No policy**.
   - To allow use of these features, select **Enabled**.
   - To prevent use of these features, select **Disabled**.
1. If you select **Enabled**, the **Allow Bing access** check box is displayed. This is selected by default. Clear this check box to prevent {% data variables.product.prodname_copilot_chat %} using Bing search results to provide information for its responses. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)."

{% note %}

**Notes:**
- If you choose **No policy**, {% data variables.product.prodname_copilot_enterprise %} features will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings. Bing access will be allowed for any organization that enables {% data variables.product.prodname_copilot_enterprise %}.
- Bing search integration into {% data variables.product.prodname_copilot_chat_dotcom_short %} is currently in beta and is subject to change.

{% endnote %}
