---
title: Migrating to internal repositories
intro: 'You can migrate to internal repositories to unify the innersource experience for developers using both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  enterprise-server: '>=2.20'
type: how_to
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
---

### About internal repositories

Internal repositories are available in {% data variables.product.prodname_ghe_server %} 2.20+. {% data reusables.repositories.about-internal-repos %} For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)."

In future releases of {% data variables.product.prodname_ghe_server %}, we will adjust how repository visibility works so that the terms public, internal, and private have a uniform meaning for developers on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.

To prepare for these changes, if you have private mode enabled, you can run a migration on your instance to convert public repositories to internal. This migration is currently optional, to allow you to test the changes on a non-production instance. The migration will become mandatory in the future.

When you run the migration, all public repositories owned by organizations on your instance will become internal repositories. If any of those repositories have forks, the forks will become private. Private repositories will remain private.

All public repositories owned by user accounts on your instance will become private repositories. If any of those repositories have forks, the forks will also become private. The owner of each fork will be given read permissions to the fork's parent.

Anonymous Git read access will be disabled for each public repository that becomes internal or private.

If your current default visibility for repositories is public, the default will become internal. If the current default is private, the default will not change. You can change the default at any time. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise)."

The repository creation policy for the instance will change to disable public repositories and allow private and internal repositories. You can update the policy at any time. For more information, see "[Restricting repository creation in your instances](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)."

If you don't have private mode enabled, the migration script will have no effect.

### Running the migration

1. Connect to the administrative shell. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)."
{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
2. Run the migration command.
   ```shell
   github-env bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w |  tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% else %}
2. Navigate to the `/data/github/current` directory.
   ```shell
   cd /data/github/current
   ```
3. Run the migration command.
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```
{% endif %}

Log output will appear in the terminal and `/tmp/convert_public_ghes_repos_to_internal.log`.

### Дополнительная литература

- "[Enabling private mode](/enterprise/admin/installation/enabling-private-mode)"
