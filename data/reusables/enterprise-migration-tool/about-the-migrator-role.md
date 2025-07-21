To remove the need for organization owners to complete migrations, {% data variables.product.prodname_dotcom %} includes a distinct role for using {% data variables.product.prodname_importer_proper_name %}.

Granting the migrator role allows you to designate other teams or individuals to handle your migrations.

* You can only grant the migrator role for an organization on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}.
* You can grant the migrator role to an individual user or a team. We strongly recommend that you assign the migrator role to a team. Then, you can further customize who can run a migration by adjusting team membership. See [AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) or [AUTOTITLE](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team).
* The migrator must use a {% data variables.product.pat_generic %} that meets all the requirements for running migrations.

> [!WARNING]
> When you grant the migrator role in an organization to a user or team, you are granting them the ability to import or export any repository in that organization.

To grant the migrator role, see [Granting the migrator role](#granting-the-migrator-role).
