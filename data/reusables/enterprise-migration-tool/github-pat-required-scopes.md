The scopes that are required for your {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %} depend on your role and the task you want to complete.

{% note %}

**Note**: {% data reusables.user-settings.generic-classic-pat-only %} This means that you cannot use {% data variables.product.prodname_importer_proper_name %} if your organization uses the "Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations" policy. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens-classic)."

{% endnote %}

Task | Organization owner | Migrator
---- | -------- | ----- |
Assigning the migrator role for repository migrations | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a repository migration (destination organization) | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Downloading a migration log | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Reclaiming mannequins | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
