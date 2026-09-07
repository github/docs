The scopes that are required for your {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %} depend on your role and the task you want to complete.

> [!NOTE]
> {% data reusables.user-settings.generic-classic-pat-only %} This means that you cannot use {% data variables.product.prodname_importer_proper_name %} if your organization uses the "Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations" policy. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens).

Task | Organization owner | Migrator
---- | -------- | ----- |
Assigning the migrator role for repository migrations | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a repository migration (destination organization) | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Downloading a migration log | `repo`, `workflow`, `admin:org` | `repo`, `workflow`, `read:org`
Reclaiming mannequins | `repo`, `workflow`, `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
