Members {% ifversion push-protection-bypass-fine-grained-permissions %}with permission to review and manage bypass requests {% else %}of the bypass list{% endif %} are still protected from accidentally pushing secrets to a repository. If they attempt to push a commit containing a secret, their push is still blocked, but they can choose to bypass the block by specifying a reason for allowing the push. The following types of people can bypass push protection without requesting bypass privileges:

* Organization owners
* Security managers
* Users in teams, default roles, or custom roles that have been added to the bypass list.{% ifversion push-protection-bypass-fine-grained-permissions %}
* Users who are assigned (either directly or via a team) a custom role with the "review and manage secret scanning bypass requests" fine-grained permission.{% endif %}
