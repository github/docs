{% ifversion actions-workflow-lockfiles %}

> [!NOTE]
> For workflows covered by a dependency lockfile, this policy checks each locked dependency by its commit SHA instead of the tag or branch in the workflow file. Tags and branches are mutable, so they can't identify the code that runs. The locked SHA can. This has two effects:
>
> * Allowlist entries pinned to a tag or branch, such as `{% data reusables.actions.action-checkout %}`, don't match, even when the workflow uses `{% data reusables.actions.action-checkout %}`. A locked SHA can't be reliably matched back to a tag, because the tag may have moved since you locked it, and a tag's history includes every earlier release. To allow a locked dependency, use a wildcard such as `actions/checkout@*` or `actions/*`, or the full commit SHA.
> * Locked dependencies satisfy **Require actions to be pinned to a full-length commit SHA** without changes to the workflow file. Dependencies that aren't in the lockfile still need a full-length SHA.
>
> For more information, see [AUTOTITLE](/actions/concepts/security/workflow-dependency-lockfiles).

{% endif %}
