---
title: System overview
intro: '{% data variables.product.prodname_ghe_server %} is your organization''s private copy of {% data variables.product.prodname_dotcom %} contained within a virtual appliance, hosted on premises or in the cloud, that you configure and control.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  enterprise-server: '*'
---

### Storage architecture

{% data variables.product.prodname_ghe_server %} requires two storage volumes, one mounted to the *root filesystem* path (`/`) and the other to the *user filesystem* path (`/data/user`). This architecture simplifies the upgrade, rollback, and recovery procedures by separating the running software environment from persistent application data.

The root filesystem is included in the distributed machine image. It contains the base operating system and the {% data variables.product.prodname_ghe_server %} application environment. The root filesystem should be treated as ephemeral. Any data on the root filesystem will be replaced when upgrading to future {% data variables.product.prodname_ghe_server %} releases.

The root filesystem contains:
  - Custom certificate authority (CA) certificates (in */usr/local/share/ca-certificates*)
  - Custom networking configurations
  - Custom firewall configurations
  - The replication state

The user filesystem contains user configuration and data, such as:
  - Git repositories
  - Databases
  - Search indexes
  - Content published on {% data variables.product.prodname_pages %} sites
  - Large files from {% data variables.large_files.product_name_long %}
  - Pre-receive hook environments

### Deployment options

You can deploy {% data variables.product.prodname_ghe_server %} as a single virtual appliance, or in a high availability configuration. For more information, see "[Configuring {% data variables.product.prodname_ghe_server %} for High Availability](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

Some organizations with tens of thousands of developers may also benefit from {% data variables.product.prodname_ghe_server %} Clustering. For more information, see "[About clustering](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-clustering)."

### Data retention and datacenter redundancy

{% danger %}

Before using {% data variables.product.prodname_ghe_server %} in a production environment, we strongly recommend you set up backups and a disaster recovery plan. For more information, see "[Configuring backups on your appliance](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)."

{% enddanger %}

{% data variables.product.prodname_ghe_server %} includes support for online and incremental backups with the [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils). You can take incremental snapshots over a secure network link (the SSH administrative port) over long distances for off-site or geographically dispersed storage. You can restore snapshots over the network into a newly provisioned appliance at time of recovery in case of disaster at the primary datacenter.

In addition to network backups, both AWS (EBS) and VMware disk snapshots of the user storage volumes are supported while the appliance is offline or in maintenance mode. Regular volume snapshots can be used as a low-cost, low-complexity alternative to network backups with {% data variables.product.prodname_enterprise_backup_utilities %} if your service level requirements allow for regular offline maintenance.

For more information, see "[Configuring backups on your appliance](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)."

### Безопасность

{% data variables.product.prodname_ghe_server %} is a virtual appliance that runs on your infrastructure and is governed by your existing information security controls, such as firewalls, IAM, monitoring, and VPNs. Using {% data variables.product.prodname_ghe_server %} can help you avoid regulatory compliance issues that arise from cloud-based solutions.

{% data variables.product.prodname_ghe_server %} also includes additional security features.

- [Operating system, software, and patches](#operating-system-software-and-patches)
- [Network security](#network-security)
- [Application security](#application-security)
- [External services and support access](#external-services-and-support-access)
- [Encrypted communication](#encrypted-communication)
- [Users and access permissions](#users-and-access-permissions)
- [Authentication](#authentication)
- [Audit and access logging](#audit-and-access-logging)

#### Operating system, software, and patches

{% data variables.product.prodname_ghe_server %} runs a customized Linux operating system with only the necessary applications and services. {% data variables.product.prodname_dotcom %} manages patching of the appliance's core operating system as part of its standard product release cycle. Patches address functionality, stability, and non-critical security issues for {% data variables.product.prodname_dotcom %} applications. {% data variables.product.prodname_dotcom %} also provides critical security patches as needed outside of the regular release cycle.

#### Network security

{% data variables.product.prodname_ghe_server %}'s internal firewall restricts network access to the appliance's services. Only services necessary for the appliance to function are available over the network. For more information, see "[Network ports](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports)."

#### Application security

{% data variables.product.prodname_dotcom %}'s application security team focuses full-time on vulnerability assessment, penetration testing, and code review for {% data variables.product.prodname_dotcom %} products, including {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} also contracts with outside security firms to provide point-in-time security assessments of {% data variables.product.prodname_dotcom %} products.

#### External services and support access

{% data variables.product.prodname_ghe_server %} can operate without any egress access from your network to outside services. You can optionally enable integration with external services for email delivery, external monitoring, and log forwarding. For more information, see "[Configuring email for notifications](/enterprise/{{ currentVersion }}/admin/user-management/configuring-email-for-notifications)," "[Setting up external monitoring](/enterprise/{{ currentVersion }}/admin/installation/setting-up-external-monitoring)," and "[Log forwarding](/enterprise/{{ currentVersion }}/admin/installation/log-forwarding)."

You can manually collect and send troubleshooting data to {% data variables.contact.github_support %}. For more information, see "[Providing data to {% data variables.contact.github_support %}](/enterprise/{{ currentVersion }}/admin/enterprise-support/providing-data-to-github-support)."

#### Encrypted communication

{% data variables.product.prodname_dotcom %} designs {% data variables.product.prodname_ghe_server %} to run behind your corporate firewall. To secure communication over the wire, we encourage you to enable Transport Layer Security (TLS). {% data variables.product.prodname_ghe_server %} supports 2048-bit and higher commercial TLS certificates for HTTPS traffic. For more information, see "[Configuring TLS](/enterprise/{{ currentVersion }}/admin/installation/configuring-tls)."

By default, the appliance also offers Secure Shell (SSH) access for both repository access using Git and administrative purposes. For more information, see "[About SSH](/enterprise/user/articles/about-ssh)" and "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)."

#### Users and access permissions

{% data variables.product.prodname_ghe_server %} provides three types of accounts.

- The `admin` Linux user account has controlled access to the underlying operating system, including direct filesystem and database access. A small set of trusted administrators should have access to this account, which they can access over SSH. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)."
- User accounts in the appliance's web application have full access to their own data and any data that other users or organizations explicitly grant.
- Site administrators in the appliance's web application are user accounts that can manage high-level web application and appliance settings, user and organization account settings, and repository data.

For more information about {% data variables.product.prodname_ghe_server %}'s user permissions, see "[Access permissions on GitHub](/enterprise/user/articles/access-permissions-on-github)."

#### Authentication

{% data variables.product.prodname_ghe_server %} provides four authentication methods.

- SSH public key authentication provides both repository access using Git and administrative shell access. For more information, see "[About SSH](/enterprise/user/articles/about-ssh)" and "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)."
- Username and password authentication with HTTP cookies provides web application access and session management, with optional two-factor authentication (2FA). For more information, see "[Using built-in authentication](/enterprise/{{ currentVersion }}/admin/user-management/using-built-in-authentication)."
- External LDAP, SAML, or CAS authentication using an LDAP service, SAML Identity Provider (IdP), or other compatible service provides access to the web application. For more information, see "[Authenticating users for your GitHub Enterprise Server instance](/enterprise/{{ currentVersion }}/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance)."
- OAuth and Personal Access Tokens provide access to Git repository data and APIs for both external clients and services. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

#### Audit and access logging

{% data variables.product.prodname_ghe_server %} stores both traditional operating system and application logs. The application also writes detailed auditing and security logs, which {% data variables.product.prodname_ghe_server %} stores permanently. You can forward both types of logs in realtime to multiple destinations via the `syslog-ng` protocol. For more information, see "[Log forwarding](/enterprise/{{ currentVersion }}/admin/installation/log-forwarding)."

Access and audit logs include information like the following.

##### Access logs

- Full web server logs for both browser and API access
- Full logs for access to repository data over Git, HTTPS, and SSH protocols
- Administrative access logs over HTTPS and SSH

##### Audit logs

- User logins, password resets, 2FA requests, email setting changes, and changes to authorized applications and APIs
- Site administrator actions, such as unlocking user accounts and repositories
- Repository push events, access grants, transfers, and renames
- Organization membership changes, including team creation and destruction

### Open source dependencies for {% data variables.product.prodname_ghe_server %}

You can see a complete list of dependencies in your appliance's version of {% data variables.product.prodname_ghe_server %}, as well as each project's license, at `http(s)://HOSTNAME/site/credits`.

Tarballs with a full list of dependencies and associated metadata are available on your appliance:
- For dependencies common to all platforms, at `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- For dependencies specific to a platform, at `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Tarballs are also available, with a full list of dependencies and metadata, at `https://enterprise.github.com/releases/<version>/download.html`.

### Дополнительная литература

- "[Setting up a trial of {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)"
- "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)"
- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) in the  `github/roadmap` repository
