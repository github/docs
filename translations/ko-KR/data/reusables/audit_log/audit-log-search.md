The log lists the following information about each action:

* Which repository an action was performed in
* The user that performed the action
* The action that was performed
* Which country the action took place in
* The date and time the action occurred

Note that you cannot search for entries using text. You can, however, construct search queries using a variety of filters. Many operators used when querying the log, such as `-`, `>`, or `<`, match the same format as searching across {% data variables.product.product_name %}. For more information, see "[Searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
#### Search based on operation

Use the `operation` qualifier to limit actions to specific types of operations. 예시:

  * `operation:access` finds all events where a resource was accessed.
  * `operation:authentication` finds all events where an authentication event was performed.
  * `operation:create` finds all events where a resource was created.
  * `operation:modify` finds all events where an existing resource was modified.
  * `operation:remove` finds all events where an existing resource was removed.
  * `operation:restore` finds all events where an existing resource was restored.
  * `operation:transfer` finds all events where an existing resource was transferred.
{% endif %}

#### Search based on repository

Use the `repo` qualifier to limit actions to a specific repository. 예시:

  * `repo:my-org/our-repo` finds all events that occurred for the `our-repo` repository in the `my-org` organization.
  * `repo:my-org/our-repo repo:my-org/another-repo` finds all events that occurred for both the `our-repo` and `another-repo` repositories in the `my-org` organization.
  * `-repo:my-org/not-this-repo` excludes all events that occurred for the `not-this-repo` repository in the `my-org` organization.

Note that you must include the account name within the `repo` qualifier; searching for just `repo:our-repo` will not work.

#### Search based on the user

The `actor` qualifier can scope events based on who performed the action. 예시:

  * `actor:octocat` finds all events performed by `octocat`.
  * `actor:octocat actor:hubot` finds all events performed by both `octocat` and `hubot`.
  * `-actor:hubot` excludes all events performed by `hubot`.

Note that you can only use a {% data variables.product.product_name %} username, not an individual's real name.
