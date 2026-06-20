1. Visit [{% data variables.product.pat_v2_caps_plural %}](https://github.com/settings/personal-access-tokens/new).
1. Under **Resource owner**, select your **personal account**. Do not select an organization. The **{% data variables.product.prodname_copilot_short %} Requests** permission is only available on user-owned {% data variables.product.pat_v2_plural %}.
1. Under **Repository access**, select the level of access appropriate for your use case:
   * **Public repositories** if you only need to work with public repos.
   * **All repositories** if you need access across all your current and future repos.
   * **Only select repositories** f you want to restrict access to specific repos.
1. Under **Permissions**, select the **Account** tab. 
1. Click **Add permissions** and select **{% data variables.product.prodname_copilot_short %} Requests**.
1. Click **Generate token**.
1. Export the token in your terminal or environment configuration. Use the `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN` environment variable (in order of precedence).
