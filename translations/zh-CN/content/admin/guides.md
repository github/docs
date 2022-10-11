---
title: GitHub Enterprise 指南
shortTitle: 指南
intro: '学习如何通过 {% data variables.product.product_name %} 提高开发人员的工作效率和代码质量。'
allowTitleToDifferFromFilename: true
layout: product-sublanding
versions:
  enterprise-server: '*'
  github-ae: '*'
learningTracks:
  - '{% if currentVersion == "github-ae@latest" %}get_started_with_github_ae{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion %}deploy_an_instance{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion %}upgrade_your_instance{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion %}increase_fault_tolerance{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion %}improve_security_of_your_instance{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}configure_github_actions{% endif %}'
  - '{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}configure_github_advanced_security{% endif %}'
includeGuides:
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/changing-authentication-methods
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/authentication/configuring-user-provisioning-for-your-enterprise
  - /admin/authentication/using-cas
  - /admin/authentication/using-ldap
  - /admin/authentication/using-saml
  - /admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-management-console
  - /admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-data-encryption-for-your-enterprise
  - /admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/configuration/configuring-tls
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/initializing-github-ae
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/network-ports
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/site-admin-dashboard
  - /admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/differences-between-clustering-and-high-availability-ha
  - /admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-appliance
  - /admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/github-actions/about-using-actions-in-your-enterprise
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/high-availability-for-github-actions
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
  - /admin/github-actions/using-a-staging-environment
  - /admin/overview/about-data-residency
  - /admin/overview/about-github-ae
  - /admin/overview/about-upgrades-to-new-releases
  - /admin/packages/configuring-package-ecosystem-support-for-your-enterprise
  - /admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages
  - /admin/policies/about-pre-receive-hooks
  - /admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/user-management/about-migrations
  - /admin/user-management/audited-actions
  - /admin/user-management/adding-people-to-teams
  - /admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-users-across-your-enterprise
  - /admin/user-management/configuring-git-large-file-storage-for-your-enterprise
  - /admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/continuous-integration-using-jenkins
  - /admin/user-management/disabling-git-ssh-access-on-your-enterprise
  - /admin/user-management/creating-teams
  - /admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/importing-data-from-third-party-version-control-systems
  - /admin/user-management/managing-dormant-users
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-projects-using-jira
  - /admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-to-internal-repositories
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preventing-users-from-creating-organizations
  - /admin/user-management/rebuilding-contributions-data
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/suspending-and-unsuspending-users
---

