## Choosing between push rules and pre-receive hooks
You can use push rules and pre-receive hooks to control what changes users can push to your repository. Both help you enforce policies, but they work in different ways and are designed for different use cases.

Push rules are a built-in way to enforce common policies across repositories. You can use them to block pushes that don’t meet specific conditions, such as updates to specific files and paths, file size, or file type.
You can manage push rules through the UI or API. As they are a type of repository rulesets, push rules support audit logs, and can be used with evaluate mode to preview changes or bypassed when needed.

Use push rules if you want to easily:

* Enforce standard policies without writing scripts.
* Apply policies consistently across organizations and repositories.
* Manage rules through {% data variables.product.github %}'s UI and APIs.
* Use {% data variables.product.github %} native features like audit logging, bypass lists and rule insights.
