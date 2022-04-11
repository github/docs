### Search based on repository

Use the `repo` qualifier to limit actions to a specific repository. For example:

  * `repo:my-org/our-repo` finds all events that occurred for the `our-repo` repository in the `my-org` organization.
  * `repo:my-org/our-repo repo:my-org/another-repo` finds all events that occurred for both the `our-repo` and `another-repo` repositories in the `my-org` organization.
  * `-repo:my-org/not-this-repo` excludes all events that occurred for the `not-this-repo` repository in the `my-org` organization.

Note that you must include the account name within the `repo` qualifier; searching for just `repo:our-repo` will not work.
