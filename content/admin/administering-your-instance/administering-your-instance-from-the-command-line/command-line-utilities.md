---
title: Command-line utilities
intro: '{% data variables.product.prodname_ghe_server %} includes a variety of utilities to help resolve particular problems or perform specific tasks.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
  - /admin/configuration/configuring-your-enterprise/command-line-utilities
  - /admin/administering-your-instance/command-line-utilities
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
---
You can execute these commands from anywhere on the VM after signing in as an SSH admin user. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

## General

### ghe-announce

This utility sets a banner at the top of every {% data variables.product.prodname_enterprise %} page. You can use it to broadcast a message to your users.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %}
To allow each user to dismiss the announcement for themselves, use the `-d` flag.

```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user
> dismissible: MESSAGE
```

{% endif %}

You can also set an announcement banner using the enterprise settings on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)."

<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

This utility displays information on background jobs, both active and in the queue. It provides the same job count numbers as the admin stats bar at the top of every page.

This utility can help identify whether the Aqueduct server is having problems processing background jobs. Any of the following scenarios might be indicative of a problem with Aqueduct:

- The number of background jobs is increasing, while the active jobs remain the same.
- The event feeds are not updating.
- Webhooks are not being triggered.
- The web interface is not updating after a Git push.

If you suspect Aqueduct is failing, visit {% data variables.contact.contact_ent_support %} for help.

With this command, you can also pause or resume jobs in the queue.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs
# for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the
# specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```

### ghe-check-disk-usage

This utility checks the disk for large files or files that have been deleted but still have open file handles. This should be run when you're trying to free up space on the root partition.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

This utility cleans up a variety of caches that might potentially take up extra disk space on the root volume. If you find your root volume disk space usage increasing notably over time it would be a good idea to run this utility to see if it helps reduce overall usage.

```shell
ghe-cleanup-caches
```

### ghe-cleanup-settings

This utility wipes all existing {% data variables.enterprise.management_console %} settings.

{% tip %}

**Tip**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

With this utility, you can both retrieve and modify the configuration settings of {% data variables.location.product_location %}.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname`
# to the specified URL
$ ghe-config -l
# Lists all the configuration values
```

Allows you to find the universally unique identifier (UUID) of your node in `cluster.conf`.

```shell
  ghe-config HOSTNAME.uuid
```

Allows you to exempt a list of users from REST API rate limits. A hard limit of 120,000 requests will still apply to these users. Usernames you provide for this command are case-sensitive. For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "hubot github-actions[bot]"
# Exempts the users hubot and github-actions[bot] from rate limits.
# Usernames are case-sensitive.
```

### ghe-config-apply

This utility applies {% data variables.enterprise.management_console %} settings, reloads system services, prepares a storage device, reloads application services, and runs any pending database migrations. It is equivalent to clicking **Save settings** in the {% data variables.enterprise.management_console %}'s web UI or to sending a POST request to [the `/setup/api/configure` endpoint](/rest/enterprise-admin/management-console).

You will probably never need to run this manually, but it's available if you want to automate the process of saving your settings via SSH.

```shell
ghe-config-apply
```

### ghe-console

This utility opens the GitHub Rails console on your {% data variables.product.prodname_enterprise %} appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

This utility opens a MySQL database session on your {% data variables.product.prodname_enterprise %} appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status

This utility returns a summary of Elasticsearch indexes in CSV format.

Print an index summary with a header row to `STDOUT`:

```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Print an index summary and pipe results to `column` for readability:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

This utility lists repositories on your appliance that use {% data variables.product.prodname_dotcom %} Services, an integration method that will be discontinued on October 1, 2018. Users on your appliance may have set up {% data variables.product.prodname_dotcom %} Services to create notifications for pushes to certain repositories. For more information, see "[Announcing the deprecation of {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" on {% data variables.product.prodname_blog %}. For more information about this command or for additional options, use the `-h` flag.

```shell
ghe-legacy-github-services-report
```

### ghe-logs-tail

This utility lets you tail log all relevant log files from your installation. You can pass options in to limit the logs to specific sets. Use the -h flag for additional options.

```shell
ghe-logs-tail
```

### ghe-maintenance

This utility allows you to control the state of the installation's maintenance mode. It's designed to be used primarily by the {% data variables.enterprise.management_console %} behind-the-scenes, but it can be used directly. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."

```shell
ghe-maintenance -h
```

### ghe-motd

This utility re-displays the message of the day (MOTD) that administrators see when accessing the instance via the administrative shell. The output contains an overview of the instance's state.

```shell
ghe-motd
```

### ghe-nwo

This utility returns a repository's name and owner based on the repository ID.

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Use this command to give organization owner privileges to users with site admin privileges on the appliance, or to give organization owner privileges to any single user in a single organization. You must specify a user and/or an organization. The `ghe-org-admin-promote` command will always ask for confirmation before running unless you use the `-y` flag to bypass the confirmation.

You can use these options with the utility:

- The `-u` flag specifies a username. Use this flag to give organization owner privileges to a specific user. Omit the `-u` flag to promote all site admins to the specified organization.
- The `-o` flag specifies an organization. Use this flag to give owner privileges in a specific organization. Omit the `-o` flag to give owner permissions in all organizations to the specified site admin.
- The `-a` flag gives owner privileges in all organizations to all site admins.
- The `-y` flag bypasses the manual confirmation.

This utility cannot promote a non-site admin to be an owner of all organizations. You can promote an ordinary user account to a site admin with [ghe-user-promote](#ghe-user-promote).

Give organization owner privileges in a specific organization to a specific site admin

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Give organization owner privileges in all organizations to a specific site admin

```shell
ghe-org-admin-promote -u USERNAME
```

Give organization owner privileges in a specific organization to all site admins

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Give organization owner privileges in all organizations to all site admins

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Use this command to immediately unlock the {% data variables.enterprise.management_console %} after {% ifversion enterprise-authentication-rate-limits %}an account lockout. To configure authentication policies for {% data variables.location.product_location %}, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits)".{% else %}10 failed login attempts in the span of 10 minutes.{% endif %}

```shell
ghe-reactivate-admin-login
```

### ghe-saml-mapping-csv

This utility allows administrators to output or update the SAML `NameID` mappings for users on an instance. The utility can output a CSV file that lists all existing mappings. You can also update mappings for users on your instance by editing the resulting file, then using the utility to assign new mappings from the file.

To output a CSV file containing a list of all user SAML `NameID` mappings on the instance, run the following command.

```shell
ghe-saml-mapping-csv -d
```

By default, the utility writes the file to `/data/user/tmp`.

If you plan to update mappings, to ensure that the utility can access the file, we recommend that you keep the file in the default location.

To prepare to update mappings, edit the file and make the desired changes. To see the result of updating the mappings using the new values in your edited CSV file, perform a dry run. Run the following command, replacing /PATH/TO/FILE with the actual path to the file you edited.

```shell
ghe-saml-mapping-csv -u -n -f /PATH/TO/FILE
```

To update SAML mappings on the instance with new values from the file, run the following command, replacing /PATH/TO/FILE with the actual path to the file you edited.

```shell
ghe-saml-mapping-csv -u -f /PATH/TO/FILE
```

### ghe-service-list

This utility lists all of the services that have been started or stopped (are running or waiting) on your appliance.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

This utility allows you to set a new {% ifversion enterprise-management-console-multi-user-auth %}root site administrator {% endif %}password for authentication to the {% data variables.enterprise.management_console %}. For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-web-ui/managing-access-to-the-management-console)."

```shell
ghe-set-password
```

### ghe-setup-network

This utility allows you to configure the primary network interface.

To enter visual mode, which will guide you through configuration of network settings:

```shell
ghe-setup-network -v
```

Use the -h flag for additional options.

### ghe-ssh-check-host-keys

This utility checks the existing SSH host keys against the list of known leaked SSH host keys.

```shell
ghe-ssh-check-host-keys
```

If a leaked host key is found the utility exits with status `1` and a message:

```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

If a leaked host key was not found, the utility exits with status `0` and a message:

```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

This utility rolls the SSH host keys and replaces them with newly generated keys.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

This utility returns a report of known weak SSH keys stored on the {% data variables.product.prodname_enterprise %} appliance. You can optionally revoke user keys as a bulk action. The utility will report weak system keys, which you must manually revoke in the [{% data variables.enterprise.management_console %}](/admin/configuration/administering-your-instance-from-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

This utility allows you to install a Let's Encrypt certificate on your {% data variables.product.prodname_enterprise %} appliance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-tls)."

You can use the `-x` flag to remove the ACME configuration.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

This utility allows you to install a custom root CA certificate on your {% data variables.product.prodname_enterprise %} server. The certificate must be in PEM format. Furthermore, if your certificate provider includes multiple CA certificates in a single file, you must separate them into individual files that you then pass to `ghe-ssl-ca-certificate-install` one at a time.

Run this utility to add a certificate chain for S/MIME commit signature verification. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

Run this utility when {% data variables.location.product_location %} is unable to connect to another server because the latter is using a self-signed SSL certificate or an SSL certificate for which it doesn't provide the necessary CA bundle. One way to confirm this is to run `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` from {% data variables.location.product_location %}. If the remote server's SSL certificate can be verified, your `SSL-Session` should have a return code of 0, as shown below.

```text
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

If, on the other hand, the remote server's SSL certificate can _not_ be verified, your `SSL-Session` should have a nonzero return code:

```text
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

You can use these additional options with the utility:
- The `-r` flag allows you to uninstall a CA certificate.
- The `-h` flag displays more usage information.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

To apply the configuration, run the following command. During a configuration run, services on {% data variables.location.product_location %} may restart, which can cause brief downtime for users.

```shell copy
ghe-config-apply
```

### ghe-ssl-certificate-setup

This utility allows you to update an SSL certificate for {% data variables.location.product_location %}.

For more information about this command or for additional options, use the `-h` flag.

```shell
/usr/local/share/enterprise/ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

This utility allows you to generate a private key and certificate signing request (CSR), which you can share with a commercial or private certificate authority to get a valid certificate to use with your instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-tls)."

For more information about this command or for additional options, use the `-h` flag.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Some platforms require this script to expand the user volume. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)".

```shell
ghe-storage-extend
```

### ghe-version

This utility prints the version, platform, and build of {% data variables.location.product_location %}.

```shell
ghe-version
```

### ghe-webhook-logs

This utility returns webhook delivery logs for administrators to review and identify any issues.

```shell
ghe-webhook-logs
```

To show all failed hook deliveries in the past day:

```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

The date format should be `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS`, or `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.

To show the full hook payload, result, and any exceptions for the delivery:

```shell
ghe-webhook-logs -g DELIVERY_GUID
```

## Clustering

{% ifversion cluster-rebalancing %}

### ghe-cluster-balance

This utility allows you to enforce an even distribution of allocations across your cluster nodes by checking the status of your cluster's allocations, then rebalancing problematic allocations. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/rebalancing-cluster-workloads)."

To output a list of balanceable jobs and their associated allocation spread:

```shell
ghe-cluster-balance status
```

To output allocation counts for a given job or comma-delimited list of jobs:

```shell
ghe-cluster-balance -j JOB
```

To rebalance problematic allocations for a given job or comma-delimited list of jobs:

```shell
ghe-cluster-balance rebalance -j JOB
```

You can use the following flags with `ghe-cluster-balance rebalance`.

Flag | Description
---- | ----------
`-j/--job-names` | Specify the jobs to rebalance. Accepts a job name or comma-delimited list of names.
`-n/--dry-run` | Output the Nomad operations that the utility will run, without actually running them. Can be used in tandem with `-j/--job-name`.
`-y/--yes` | Skip the user prompt.
`w/--workers` | Specify the maximum number of simultaneous jobs to stop and wait for reallocation to complete on. Defaults to 4.
`-t/--timeout` | Specify how many seconds to wait for a stopped allocation for a job to be replaced. Defaults to 300 seconds.

To output completion scripts for the given shell:

```shell
ghe-cluster-balance completion
```

To display a short description of the utility and any valid subcommands:

```shell
ghe-cluster-balance help
```

{% endif %}

### ghe-cluster-maintenance

With the `ghe-cluster-maintenance` utility, you can set or unset maintenance mode for every node in a cluster.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
{%- ifversion custom-maintenance-mode-message %}
$ ghe-cluster-maintenance -s "MESSAGE"
# Sets maintenance mode with a custom message
$ ghe-cluster-maintenance -m "MESSAGE"
# Updates the custom message
{%- endif %}
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```

{% ifversion cluster-ha-tooling-improvements %}

### ghe-cluster-repl-bootstrap

This utility configures high availability replication to a secondary set of cluster nodes. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/configuring-high-availability-replication-for-a-cluster)."

```shell
ghe-cluster-repl-bootstrap
```

### ghe-cluster-repl-teardown

This utility disables replication to replica nodes for a cluster in a high availability configuration. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/configuring-high-availability-replication-for-a-cluster#disabling-high-availability-replication-for-a-cluster)."

```shell
ghe-cluster-repl-teardown
```

{% endif %}

### ghe-cluster-status

Check the health of your nodes and services in a cluster deployment of {% data variables.product.prodname_ghe_server %}.

```shell
ghe-cluster-status
```

### ghe-cluster-support-bundle

This utility creates a support bundle tarball containing important logs from each of the nodes in either a Geo-replication or Clustering configuration.

By default, the command creates the tarball in _/tmp_, but you can also have it `cat` the tarball to `STDOUT` for easy streaming over SSH. This is helpful in the case where the web UI is unresponsive or downloading a support bundle from _/setup/support_ doesn't work. You must use this command if you want to generate an _extended_ bundle, containing older logs. You can also use this command to upload the cluster support bundle directly to {% data variables.product.prodname_enterprise %} support.

To create a standard bundle:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

To create a standard bundle including data from the last 2 days:

```shell
ssh -p 122 admin@HOSTNAME -- "ghe-cluster-support-bundle -p {% ifversion bundle-cli-syntax-no-quotes %}2days {% endif %} -o" > support-bundle.tgz
```

To create an extended bundle including data from the last 8 days:

```shell
ssh -p 122 admin@HOSTNAME -- ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

To send a bundle to {% data variables.contact.github_support %}:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

To send a bundle to {% data variables.contact.github_support %} and associate the bundle with a ticket:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

### ghe-cluster-failover

{% ifversion ghes < 3.13 %}

{% data reusables.enterprise_clustering.cluster-ip-note %}

{% endif %}

With the `ghe-cluster-failover` utility, you can fail over to your replica cluster. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/initiating-a-failover-to-your-replica-cluster)."

```shell
ghe-cluster-failover
```

{% ifversion ghes < 3.13 %}

### ghe-cluster-block-ips

This utility allows you to block all the IPs in the `/data/user/common/cluster-ip-blocklist` file. The command reads the list of IPs and blocks each IP by calling `ghe-cluster-block-ip` on each node in the current cluster.

The `/data/user/common/cluster-ip-blocklist` file only supports IPv4 addresses.

```shell
ghe-cluster-block-ips
```

### ghe-cluster-block-ip

This utility allows you to block a specific IP address on a specific node. You can't block the IP of the current host, or any of the IPs for the hosts in the current `cluster.conf`.

```shell
ghe-cluster-block-ip IPV4 ADDRESS
```

### ghe-cluster-unblock-ips

This utility allows you to unblock all the IPs currently blocked on each node in the cluster.

```shell
ghe-cluster-unblock-ips
```

### ghe-cluster-unblock-ip

This utility allows you to unblock a specific IP address on a specific node.

```shell
ghe-cluster-unblock-ip IPV4 ADDRESS
```

{% endif %}

### ghe-dpages

This utility allows you to manage the distributed {% data variables.product.prodname_pages %} server.

```shell
ghe-dpages
```

To show a summary of repository location and health:

```shell
ghe-dpages status
```

To evacuate a {% data variables.product.prodname_pages %} storage service before evacuating a cluster node:

```shell
ghe-dpages evacuate pages-server-UUID
```

{% ifversion cluster-node-removal %}

### ghe-remove-node

This utility removes a node from a cluster. If you're replacing a node, after you've set up a replacement node, you can use this command to take the old node offline. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/replacing-a-cluster-node)."

You must run this command from the primary MySQL node in your cluster, which is typically the node designated as `mysql-master` in your cluster configuration file (`cluster.conf`). You can use this command to remove any node, with the exception of the `mysql-master` or `redis-master` node. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/configuring-clustering/initializing-the-cluster#about-the-cluster-configuration-file)."

```shell
ghe-remove-node HOSTNAME
```

The command does the following things:
- Evacuates data from any data services running on the node, so that the remaining nodes in your cluster contain copies of the data
- Marks the node as offline in your configuration, applies this change to the rest of the nodes in the cluster, and stops traffic being routed to the node

You can run the command with the following flags.

Flag | Description
---- | ----------
`-ne/--no-evacuate` | Skips evacuation of data services (warning: may result in data loss).
`-v/--verbose` | Prints additional information to the console.
`-h/--help` | Displays help text for the command.

{% note %}

**Notes:**

- This command can only be used to remove a node from a cluster configuration. It cannot be used to remove a node from a high availability configuration.
- This command does not support parallel execution. To remove multiple nodes, you must wait until this command has finished before running it for another node.

{% endnote %}

{% endif %}

{% ifversion ghe-spokes-deprecation-phase-1 %}

### ghe-spokesctl

This utility allows you to manage replication of repositories on the distributed Git servers.

```shell
ghe-spokesctl
```

To show the servers where the repository is stored:

```shell
ghe-spokesctl routes
```

To evacuate storage services on a cluster node:

```shell
ghe-spokesctl server set evacuating git-server-UUID
```

{% else %}

### ghe-spokes

This utility allows you to manage the three copies of each repository on the distributed Git servers.

```shell
ghe-spokes
```

To show a summary of repository location and health:

```shell
ghe-spokes status
```

To show the servers in which the repository is stored:

```shell
ghe-spokes route
```

To evacuate storage services on a cluster node:

```shell
ghe-spokes server evacuate git-server-UUID
```

{% endif %}

### ghe-storage

This utility allows you to evacuate all storage services before evacuating a cluster node.

```shell
ghe-storage evacuate storage-server-UUID
```

{% ifversion node-eligibility-service %}

### nes

This utility allows you to monitor the health of cluster nodes using {% data variables.product.prodname_nes %}. By default, {% data variables.product.prodname_nes %} is disabled. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/monitoring-the-health-of-your-cluster-nodes-with-node-eligibility-service)."

To view the health of the cluster's nodes:

```shell
nes get-cluster-health
```

To verify TTL settings:

```shell
nes get-node-ttl all
```

To set the TTL for the `fail` state in minutes:

```shell
nes set-node-ttl fail MINUTES
```

The TTL for the `fail` state must be higher than the TTL for the `warn` state.

To set the TTL for the `warn` state in minutes:

```shell
nes set-node-ttl warn TIME
```

To review whether {% data variables.product.prodname_nes %} can take administrative action when a node with the hostname HOSTNAME goes offline:

```shell
nes get-node-adminaction HOSTNAME
```

To allow {% data variables.product.prodname_nes %} to automatically take administrative action when a node with the hostname HOSTNAME goes offline:

```shell
nes set-node-adminaction approved HOSTNAME
```

To revoke {% data variables.product.prodname_nes %}'s ability to take the node with hostname HOSTNAME offline:

```shell
nes set-node-adminaction approved HOSTNAME
```

To manually update a node's eligibility for re-addition to the cluster:

```shell
nes set-node-eligibility eligible HOSTNAME
```

{% endif %}

## Git

### ghe-btop

A `top`-like interface for current Git operations.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

This utility helps to analyze Git traffic. It queries _Governor_ data files, located under `/data/user/gitmon`. {% data variables.product.company_short %} holds one hour of data per file, retained for two weeks. For more information, see [Analyzing Git traffic using Governor](https://github.com/orgs/community/discussions/34220) in {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```text
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

This utility allows you to change to a repository's directory and open an interactive shell as the `git` user. You can perform manual inspection or maintenance of a repository via commands like `git-*` or `git-nw-*`.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

This utility manually repackages a repository network to optimize pack storage. If you have a large repository, running this command may help reduce its overall size. {% data variables.product.prodname_enterprise %} automatically runs this command throughout your interaction with a repository network.

You can add the optional `--prune` argument to remove unreachable Git objects that aren't referenced from a branch, tag, or any other ref. This is particularly useful for immediately removing [previously expunged sensitive information](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

This utility checks that all services for {% data variables.product.prodname_actions %} are healthy. For more information, see  "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)" and "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)."

```shell
ghe-actions-check
```

### ghe-actions-precheck

This utility tests the blob storage configuration for {% data variables.product.prodname_actions %} on {% data variables.location.product_location %}. You can use the utility to verify your storage configuration before you enable {% data variables.product.prodname_actions %} for your instance.

For more information about the configuration of {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."

{% ifversion ghes-actions-storage-oidc %}
{% note %}

**Note:** This utility only works with configurations that use a credentials-based connection to the storage provider. To test OpenID Connect (OIDC) configurations, use [`ghe-actions-test-storage-with-oidc`](#ghe-actions-test-storage-with-oidc).

{% endnote %}
{% endif %}

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

If your storage system is configured correctly, you'll see the following output.

```text
All Storage tests passed
```

{% ifversion ghes-actions-storage-oidc %}

### ghe-actions-test-storage-with-oidc

This utility checks that the blob storage provider for {% data variables.product.prodname_actions %} on {% data variables.location.product_location %} is valid when OpenID Connect (OIDC) is used.

{% note %}

**Note:** This utility only works with configurations that use an OpenID Connect (OIDC) configuration. To test credentials-based configurations, use [`ghe-actions-precheck`](#ghe-actions-precheck).

{% endnote %}

```shell
ghe-actions-test-storage-with-oidc -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

{% endif %}

### ghe-actions-stop

This utility stops {% data variables.product.prodname_actions %} from running on {% data variables.location.product_location %}.

{% note %}

**Notes**:

- {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}
- In high availability configurations, run this command from the primary.

{% endnote %}

### ghe-actions-start

This utility starts {% data variables.product.prodname_actions %} on {% data variables.location.product_location %} after it has been previously stopped.

{% note %}

**Notes**:

- {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}
- In high availability configurations, run this command from the primary.

{% endnote %}

If your system is configured correctly, you'll see the following output:

```shell
Actions was enabled!
```

## {% data variables.product.prodname_registry %}

### ghe-check-blob-connection

This utility checks that a blob storage provider for {% data variables.product.prodname_registry %} is valid on {% data variables.location.product_location %}.

```shell
ghe-check-blob-connection --help
```

If a connection was previously configured, tests may be performed by directly running the command without any parameters.

```shell
ghe-check-blob-connection
```

If your system is configured correctly, you'll see the following output:

```shell
All Storage tests passed
```

## High availability

### ghe-repl-promote

This command disables replication on an existing replica node and converts the replica node to a primary node using the same settings as the original primary node. All replication services are enabled. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/initiating-a-failover-to-your-replica-appliance)."

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
ghe-repl-promote
```

### ghe-repl-setup

Run this utility on an existing node to begin enabling a high availability configuration. The utility puts the node in standby mode before you begin replication with [`ghe-repl-start`](#ghe-repl-start). For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)."

After running the utility, the following configuration occurs on the node.

- An encrypted WireGuard VPN tunnel is established for communication between the nodes.
- Database services are configured for replication and started.
- Application services are disabled. Attempts to access the replica node over HTTP or HTTPS, Git, or other supported protocols will display "Server in replication mode" message, a maintenance page, or an error message.

When running this utility, replace PRIMARY-NODE-IP with the IP address of your instance's primary node.

```shell
ghe-repl-setup PRIMARY-NODE-IP
```

### ghe-repl-start

This utility begins replication of all datastores on a node. Run this utility after running [`ghe-repl-setup`](#ghe-repl-setup). For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)."

```shell
ghe-repl-start
```

### ghe-repl-status

This utility displays the status of replication on a node, returning an `OK`, `WARNING` or `CRITICAL` status for each datastore's replication stream. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-high-availability/monitoring-a-high-availability-configuration)."

- If any of the replication channels are in a `WARNING` state, the command will exit with code `1`.
- If you have not started replication, the command will exit with code `1`.
- If any of the channels are in a `CRITICAL` state, the command will exit with code `2`.
- The output conforms to the expectations of Nagios' check_by_ssh plugin. For more information, see the [check_by_ssh plugin](https://nagios-plugins.org/doc/man/check_by_ssh.html) on the official Nagios plugins page.

```shell
ghe-repl-status
```

The `-v` and `-vv` options provide additional details about each datastore's replication state.

```shell
ghe-repl-status -v
```

### ghe-repl-stop

This command temporarily disables replication for all datastores on an existing replica node. All replication services are stopped. To resume replication, use [`ghe-repl-start`](#ghe-repl-start).

```shell
ghe-repl-stop
```

### ghe-repl-teardown

This utility completely disables replication on an existing replica node, removing the replica configuration. You can run the following command from a replica node, but if the replica node is unreachable, you can also run the command from the primary node.

```shell
ghe-repl-teardown
```

## Import and export

### ghe-migrator

`ghe-migrator` is a hi-fidelity tool to help you migrate from one GitHub instance to another. You can consolidate your instances or move your organization, users, teams, and repositories from GitHub.com to {% data variables.product.prodname_enterprise %}.

For more information, please see our guides on [migrating data to and from your enterprise](/migrations/using-ghe-migrator).

### git-import-detect

Given a URL, detect which type of source control management system is at the other end. During a manual import this is likely already known, but this can be very useful in automated scripts.

```shell
git-import-detect
```

### git-import-hg-raw

This utility imports a Mercurial repository to this Git repository. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-from-other-version-control-systems-with-the-administrative-shell)."

```shell
git-import-hg-raw
```

### git-import-svn-raw

This utility imports Subversion history and file data into a Git branch. This is a straight copy of the tree, ignoring any trunk or branch distinction. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-from-other-version-control-systems-with-the-administrative-shell)."

```shell
git-import-svn-raw
```

### git-import-tfs-raw

This utility imports from Team Foundation Version Control (TFVC). For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-from-other-version-control-systems-with-the-administrative-shell)."

```shell
git-import-tfs-raw
```

### git-import-rewrite

This utility rewrites the imported repository. This gives you a chance to rename authors and, for Subversion and TFVC, produces Git branches based on folders. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-from-other-version-control-systems-with-the-administrative-shell)."

```shell
git-import-rewrite
```

{% ifversion ghes > 3.12 %}

## License

### ghe-license

This utility lets you interact with your current active license, or with new licenses without needing to import them first. You can also directly apply the license to make the changes effective using `--apply`. Applying changes with the `ghe-license` utility avoids a configuration run and only restarts the affected services.

You can review the possible commands and flags using `ghe-license -h`.

Alternatively, you can manage licenses using the REST API or the {% data variables.product.prodname_cli %}. See "[AUTOTITLE](/rest/enterprise-admin/manage-ghes)" and "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli)."

Display license information. Alternatively, use the `-j` flag for JSON formatting.

```shell
ghe-license info
# "advanced_security_enabled" : true
# "advanced_security_seats" : 0
# "cluster_support" : false
# "company" : "GitHub"
# "croquet_support" : true
# "custom_terms" : true
# "evaluation" : false
# "expire_at" : "2025-01-01T23:59:59-08:00"
# "insights_enabled" : true
# "insights_expire_at" : "2025-01-01T23:59:59.999-08:00"
# "learning_lab_evaluation_expires" : "2023-01-01T23:59:59.000-08:00"
# "learning_lab_seats" : 100
# "perpetual" : false
# "reference_number" : "123456"
# "seats" : 0
# "ssh_allowed" : true
# "support_key" : null
# "unlimited_seating" : true
```

Check the license.

```shell
ghe-license check
# License is valid.
```

All commands are performed on the existing license. However, you can also provide a license from STDOUT using `--pipe`.

```shell
cat license | ghe-license import --pipe
# License imported at /data/user/common/enterprise.ghl.
# License synchronized.
```

You can also provide a license by assigning a file path to the `GHE_LICENSE_FILE` environment variable.

```shell
GHE_LICENSE_FILE=/path/license ghe-license import
# License imported at /data/user/common/enterprise.ghl.
# License synchronized.
```

{% endif %}

## Security

### ghe-find-insecure-git-operations

This utility searches your instance's logs and identifies Git operations over SSH that use insecure algorithms or hash functions, including DSA, RSA-SHA-1, HMAC-SHA-1, and CBC ciphers. You can use the output to support each client's transition to a more secure SSH connection. For more information, see [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server) and "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."

```shell
ghe-find-insecure-git-operations
```

## Support

### ghe-diagnostics

This utility performs a variety of checks and gathers information about your installation that you can send to support to help diagnose problems you're having.

Currently, this utility's output is similar to downloading the diagnostics info in the {% data variables.enterprise.management_console %}, but may have additional improvements added to it over time that aren't available in the web UI. For more information, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)."

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
This utility creates a support bundle tarball containing important logs from your instance.

By default, the command creates the tarball in _/tmp_, but you can also have it `cat` the tarball to `STDOUT` for easy streaming over SSH. This is helpful in the case where the web UI is unresponsive or downloading a support bundle from _/setup/support_ doesn't work. You must use this command if you want to generate an _extended_ bundle, containing older logs. You can also use this command to upload the support bundle directly to {% data variables.product.prodname_enterprise %} support.

To create a standard bundle:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

To create a standard bundle including data from the last 2 days:

```shell
ssh -p 122 admin@HOSTNAME -- "ghe-support-bundle -p {% ifversion bundle-cli-syntax-no-quotes %}2days {% endif %} -o" > support-bundle.tgz
```

To create an extended bundle including data from the last 8 days:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

To send a bundle to {% data variables.contact.github_support %}:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

To send a bundle to {% data variables.contact.github_support %} and associate the bundle with a ticket:

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

This utility sends information from your appliance to {% data variables.product.prodname_enterprise %} support. You can either specify a local file, or provide a stream of up to 100MB of data via `STDIN`. The uploaded data can optionally be associated with a support ticket.

To send a file to {% data variables.contact.github_support %} and associate the file with a ticket:

```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

To upload data via `STDIN` and associating the data with a ticket:

```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

In this example, `ghe-repl-status -vv` sends verbose status information from a replica appliance. You should replace `ghe-repl-status -vv` with the specific data you'd like to stream to `STDIN`, and `Verbose Replication Status` with a brief description of the data. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Upgrading {% data variables.product.prodname_ghe_server %}

{% ifversion ghes-upgrade-complete-indicator %}

### ghe-check-background-upgrade-jobs

During an upgrade to a feature release, this utility displays the status of background jobs on {% data variables.location.product_location %}. If you're running back-to-back upgrades, you should use this utility to check that all background jobs are complete before proceeding with the next upgrade.

{% ifversion ghes < 3.12 %}
{% note %}

**Note:** To use `ghe-check-background-upgrade-jobs` with {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}, your instance must run version {{ allVersions[currentVersion].currentRelease }}.{% ifversion ghes = 3.9 %}7{% elsif ghes = 3.10 %}4{% elsif ghes = 3.11 %}1{% endif %} or later.

{% endnote %}
{% endif %}

```shell
ghe-check-background-upgrade-jobs
```

{% endif %}

{% ifversion ghe-migrations-cli-utility %}

### ghe-migrations

During an upgrade to a feature release, this utility displays the status of active database migrations on {% data variables.location.product_location %}. The output includes a version identifier for the migration, the migration's name, the migration's status, and the current duration of the migration.

To display the list of migrations:

```shell
ghe-migrations
```

By default, the utility outputs a table with 10 lines. To adjust the height of the table in lines:

```shell
ghe-migrations -height LINES
```

By default, the visualizer refreshes every second. To specify the duration in seconds to refresh the visualizer:

```shell
ghe-migrations -refresh_rate SECONDS
```

{% endif %}

### ghe-update-check

This utility will check to see if a new patch release of {% data variables.product.prodname_enterprise %} is available. If it is, and if space is available on your instance, it will download the package. By default, it's saved to _/var/lib/ghe-updates_. An administrator can then [perform the upgrade](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources).

A file containing the status of the download is available at _/var/lib/ghe-updates/ghe-update-check.status_.

To check for the latest {% data variables.product.prodname_enterprise %} release, use the `-i` switch.

```shell
ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

### ghe-upgrade

This utility installs or verifies an upgrade package. You can also use this utility to roll back a patch release if an upgrade fails or is interrupted. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)."

To verify an upgrade package:

```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

To install an upgrade package:

```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

This utility manages scheduled installation of upgrade packages. You can show, create new, or remove scheduled installations. You must create schedules using cron expressions. For more information, see the [Cron Wikipedia entry](https://en.wikipedia.org/wiki/Cron#Overview).

The `ghe-upgrade-scheduler` utility is best suited for scheduling hotpatch upgrades, which do not require maintenance mode or a reboot in most cases. This utility is not practical for full package upgrades, which require an administrator to manually set maintenance mode, reboot the instance, and unset maintenance mode. For more information about the different types of upgrades, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package)"

To schedule a new installation for a package:

```shell
ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

To show scheduled installations for a package:

```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

To remove scheduled installations for a package:

```shell
ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

## User management

### {% ifversion ghes > 3.12 %}ghe-license usage{% else %}ghe-license-usage{% endif %}

This utility exports a list of the installation's users in JSON format. If your instance is connected to {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} uses this information for reporting licensing information to {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

By default, the list of users in the resulting JSON file is encrypted. {% ifversion ghes > 3.12 %}Review optional flags via `ghe-license --help`{% else %}Use the `-h` flag for more options{% endif %}.

```shell
{% ifversion ghes > 3.12 %}ghe-license usage{% else %}ghe-license-usage{% endif %}
```

### ghe-org-membership-update

This utility will enforce the default organization membership visibility setting on all members in your instance. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/configuring-visibility-for-organization-membership)." Setting options are `public` or `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### ghe-user-csv

This utility exports a list of all the users in the installation into CSV format. The CSV file includes the email address, which type of user they are (e.g., admin, user), how many repositories they have, how many SSH keys, how many organization memberships, last logged IP address, etc. Use the `-h` flag for more options.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

This utility demotes the specified user from admin status to that of a regular user. We recommend using the web UI to perform this action, but provide this utility in case the `ghe-user-promote` utility is run in error and you need to demote a user again from the CLI.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

This utility promotes the specified user account to a site administrator.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

This utility suspends the specified user, preventing them from logging in, pushing, or pulling from your repositories.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

This utility unsuspends the specified user, granting them access to login, push, and pull from your repositories.

```shell
ghe-user-unsuspend USERNAME
```
