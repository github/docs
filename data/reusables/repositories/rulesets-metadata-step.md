1. Optionally, in the "Metadata restrictions" section, to add a rule to control the metadata of commits being pushed to the branch or tag, click {% octicon "plus" aria-label="Add metadata restriction" %}.

   ![Screenshot of the "Metadata restriction" section. To the right of the header, a plus icon is highlighted with an orange outline.](/assets/images/help/repository/add-metadata-restriction.png)

   {% note %}

   **Note:** Adding metadata restrictions can impact the experience of people contributing to your repository. Before you add metadata restrictions to a ruleset, make sure you understand their potential consequences. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#important-considerations-for-metadata-restrictions)."

   {% endnote %}

1. If you're adding a metadata restriction, configure the settings for the metadata restriction rule, then click **Add**. You can add multiple restrictions to the same ruleset.

   For most requirements, such as "Must start with a matching pattern," the pattern you enter is interpreted literally, and wildcards are not supported. For example, the `*` character only represents the literal `*` character.
   
   For more complex patterns, you can select "Must match a given regex pattern" or "Must not match a given regex pattern," then use regular expression syntax to define the matching pattern. For more information, see "[Using regular expressions for commit metadata](#using-regular-expressions-for-commit-metadata)." 
   
   Anyone who views the rulesets for a repository will be able to see the description you provide.