### Search based on the actor

The `actor` qualifier can scope events based on the person or agent that performed the action. For example:

* `actor:octocat` finds all events performed by `octocat`.
* `actor:octocat actor:Copilot` finds all events performed by `octocat` or `Copilot`.
* `-actor:Copilot` excludes all events performed by `Copilot`.

Note that you can only use a {% data variables.product.github %} username, not an individual's real name.
