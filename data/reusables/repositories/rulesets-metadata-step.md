Your metadata restrictions should be intended to increase consistency between commits in your repository. They are not intended to replace security measures such as requiring code review via pull requests.

{% data reusables.repositories.rulesets-metadata-restrictions-notes %}

1. To add a rule to control commit metadata or branch names, in the "Restrictions" section when creating or editing a ruleset, click **Restrict commit metadata** or **Restrict branch names**.

1. Configure the settings for the restriction, then click **Add**. You can add multiple restrictions to the same ruleset.
1. To match a given regex pattern, in the "Requirement" dropdown, select **Must match a given regex pattern**.

   For most requirements, such as "Must start with a matching pattern," the pattern you enter is interpreted literally, and wildcards are not supported. For example, the `*` character only represents the literal `*` character.

   For more complex patterns, you can select "Must match a given regex pattern" or "Must not match a given regex pattern," then use regular expression syntax to define the matching pattern. For more information, see [About regular expressions for commit metadata](/enterprise-cloud@latest/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#using-regular-expressions-for-commit-metadata){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

   Anyone who views the rulesets for a repository will be able to see the description you provide.

1. Optionally, before enacting your ruleset with metadata restrictions, select the "Evaluate" enforcement status for your ruleset to test the effects of any metadata restrictions without impacting contributors. For more information on metadata restrictions, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#important-considerations-for-metadata-restrictions).
