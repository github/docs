{%- ifversion custom-pattern-dry-run-ga %}
1. Select the repositories where you want to perform the dry run.
   * To perform the dry run across the entire organization, select **All repositories in the organization**.
   ![Screenshot showing repositories selected for the dry run](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * To specify the repositories where you want to perform the dry run, select **Selected repositories**, then search for and select up to 10 repositories.
   ![Screenshot showing repositories selected for the dry run](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. When you're ready to test your new custom pattern, click **Run**.
{%- else %}
1. Search for and select up to 10 repositories where you want to perform the dry run.
   ![Screenshot showing repositories selected for the dry run](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. When you're ready to test your new custom pattern, click **Dry run**.
{%- endif %}
