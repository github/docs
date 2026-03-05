---
title: "Granting the migrator role"
shortTitle: Migrator role
intro: "The migrator role gives a user or team the ability to run migrations on behalf of an organization."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

To allow someone other than an organization owner to run a migration or download migration logs, you can grant the migrator role to a user or team.

To grant the migrator role using the CLI, you can use the {% data variables.product.prodname_ado2gh_cli %}.

{% data reusables.enterprise-migration-tool.gei-install-and-update %}

1. On {% data variables.product.prodname_dotcom %}, create and record a {% data variables.product.pat_generic %} that has the `admin:org` scope.
{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh ado2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh ado2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

   {% data reusables.enterprise-migration-tool.grant-migrator-role-ghecom %}
