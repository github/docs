If the destination organization or enterprise of your migration has rulesets enabled, the migrated repository's history may violate those rules. To allow the migration without disabling your rulesets, add "Repository migrations" to the bypass list for each applicable ruleset.  This bypass applies only during the migration. Once complete, rulesets will be enforced on all new contributions. 

To configure the bypass: 

1. Navigate to each enterprise or organization ruleset. 
1. In the "Bypass list" section, click **Add bypass**. 
1. Select **Repository migrations**. 

For more information, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#granting-bypass-permissions-for-your-branch-or-tag-ruleset).
