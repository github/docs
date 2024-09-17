>[!NOTE] Delegated bypass for push rules is currently in beta and subject to change.

Delegated bypass for push rulesets lets you control who can bypass push protection and which blocked pushes should be allowed.

 With delegated bypass, contributors to a repository must request "bypass privileges" when pushing commits that contain restricted content. The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push rules.

If the request to bypass push rules is approved, the contributor can push the commit containing restricted content. If the request is denied, the contributor must remove the content from the commit (or commits) containing the restricted content before pushing again.

To configure delegated bypass, organization owners or repository administrators first create a "bypass list". The bypass list includes specific roles and teams, such as team or repository administrators, who oversee requests to bypass push protection. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization)" and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."
