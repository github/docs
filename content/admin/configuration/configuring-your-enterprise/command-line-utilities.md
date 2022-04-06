---
title: Command-line utilities
intro: '{% data variables.product.prodname_ghe_server %} includes a variety of utilities to help resolve particular problems or perform specific tasks.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
---
You can execute these commands from anywhere on the VM after signing in as an SSH admin user. For more information, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."

## General

### ghe-announce

This utility sets a banner at the top of every {% data variables.product.prodname_enterprise %} page. You can use it to broadcast a message to your users.

{% ifversion ghes %}
You can also set an announcement banner using the enterprise settings on {% data variables.product.product_name %}. For more information, see "[Customizing user messages on your instance](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)."
{% endif %}

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghes > 3.1 %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

This utility displays information on background jobs, both active and in the queue. It provides the same job count numbers as the admin stats bar at the top of every page.

This utility can help identify whether the Aqueduct server is having problems processing background jobs. Any of the following scenarios might be indicative of a problem with Aqueduct:

* The number of background jobs is increasing, while the active jobs remain the same.
* The event feeds are not updating.
* Webhooks are not being triggered.
* The web interface is not updating after a Git push.

If you suspect Aqueduct is failing, contact {% data variables.contact.contact_ent_support %} for help.

With this command, you can also pause or resume jobs in the queue.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue <em>QUEUE</em>
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue <em>QUEUE</em>
# pauses the specified queue
$ ghe-aqueduct resume --queue <em>QUEUE</em>
# resumes the specified queue
```
{% endif %}

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

With this utility, you can both retrieve and modify the configuration settings of {% data variables.product.product_location %}.

```shell
$ ghe-config <em>core.github-hostname</em>
# Gets the configuration value of `core.github-hostname`
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Sets the configuration value of `core.github-hostname` to `example.com`
$ ghe-config -l
# Lists all the configuration values
```
Allows you to find the universally unique identifier (UUID) of your node in `cluster.conf`.

```shell
  $ ghe-config <em>HOSTNAME</em>.uuid
```

{% ifversion ghes %}
Allows you to exempt a list of users from API rate limits. A hard limit of 120,000 requests will still apply to these users. For more information, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)."

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

This utility applies {% data variables.enterprise.management_console %} settings, reloads system services, prepares a storage device, reloads application services, and runs any pending database migrations. It is equivalent to clicking **Save settings** in the {% data variables.enterprise.management_console %}'s web UI or to sending a POST request to [the `/setup/api/configure` endpoint](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console).

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

This utility lists repositories on your appliance that use {% data variables.product.prodname_dotcom %} Services, an integration method that will be discontinued on October 1, 2018. Users on your appliance may have set up {% data variables.product.prodname_dotcom %} Services to create notifications for pushes to certain repositories. For more information, see "[Announcing the deprecation of {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" on {% data variables.product.prodname_blog %} or "[Replacing {% data variables.product.prodname_dotcom %} Services](/developers/overview/replacing-github-services)." For more information about this command or for additional options, use the `-h` flag.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

This utility lets you tail log all relevant log files from your installation. You can pass options in to limit the logs to specific sets. Use the -h flag for additional options.

```shell
ghe-logs-tail
```

### ghe-maintenance

This utility allows you to control the state of the installation's maintenance mode. It's designed to be used primarily by the {% data variables.enterprise.management_console %} behind-the-scenes, but it can be used directly.

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
ghe-nwo <em>REPOSITORY_ID</em>
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
ghe-org-admin-promote -u <em>USERNAME</em> -o <em>ORGANIZATION</em>
```

Give organization owner privileges in all organizations to a specific site admin

```shell
ghe-org-admin-promote -u <em>USERNAME</em>
```

Give organization owner privileges in a specific organization to all site admins

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

Give organization owner privileges in all organizations to all site admins

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Use this command to immediately unlock the {% data variables.enterprise.management_console %} after 10 failed login attempts in the span of 10 minutes.

```shell
$ ghe-reactivate-admin-login
```

{% ifversion ghes < 3.2 %}
<!--For more recent releases of GHES, see the replacement service `ghe-aqueduct`-->

### ghe-resque-info

This utility displays information on background jobs, both active and in the queue. It provides the same job count numbers as the admin stats bar at the top of every page.

This utility can help identify whether the Resque server is having problems processing background jobs. Any of the following scenarios might be indicative of a problem with Resque:

* The number of background jobs is increasing, while the active jobs remain the same.
* The event feeds are not updating.
* Webhooks are not being triggered.
* The web interface is not updating after a Git push.

If you suspect Resque is failing, contact {% data variables.contact.contact_ent_support %} for help.

With this command, you can also pause or resume jobs in the queue.

```shell
$ ghe-resque-info
# lists queues and the number of currently queued jobs
$ ghe-resque-info -p <em>QUEUE</em>
# pauses the specified queue
$ ghe-resque-info -r <em>QUEUE</em>
# resumes the specified queue
```
{% endif %}

### ghe-saml-mapping-csv

This utility can help map SAML records.

To create a CSV file containing all the SAML mapping for your {% data variables.product.product_name %} users:
```shell
$ ghe-saml-mapping-csv -d
```

To perform a dry run of updating SAML mappings with new values:
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

To update SAML mappings with new values:
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

This utility lists all of the services that have been started or stopped (are running or waiting) on your appliance.

```shell
$ ghe-service-list
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
```

### ghe-set-password

With `ghe-set-password`, you can set a new password to authenticate into the [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
ghe-set-password <new_password>
```

### ghe-ssh-check-host-keys

This utility checks the existing SSH host keys against the list of known leaked SSH host keys.

```shell
$ ghe-ssh-check-host-keys
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

This utility returns a report of known weak SSH keys stored on the {% data variables.product.prodname_enterprise %} appliance. You can optionally revoke user keys as a bulk action. The utility will report weak system keys, which you must manually revoke in the [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console).

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

This utility allows you to install a Let's Encrypt certificate on your {% data variables.product.prodname_enterprise %} appliance. For more information, see "[Configuring TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)."

You can use the `-x` flag to remove the ACME configuration.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

This utility allows you to install a custom root CA certificate on your {% data variables.product.prodname_enterprise %} server. The certificate must be in PEM format. Furthermore, if your certificate provider includes multiple CA certificates in a single file, you must separate them into individual files that you then pass to `ghe-ssl-ca-certificate-install` one at a time.

Run this utility to add a certificate chain for S/MIME commit signature verification. For more information, see "[About commit signature verification](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)."

Run this utility when {% data variables.product.product_location %} is unable to connect to another server because the latter is using a self-signed SSL certificate or an SSL certificate for which it doesn't provide the necessary CA bundle. One way to confirm this is to run `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` from {% data variables.product.product_location %}. If the remote server's SSL certificate can be verified, your `SSL-Session` should have a return code of 0, as shown below.

```
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

If, on the other hand, the remote server's SSL certificate can *not* be verified, your `SSL-Session` should have a nonzero return code:

```
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
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

### ghe-ssl-certificate-setup

This utility allows you to update an SSL certificate for {% data variables.product.product_location %}. 

For more information about this command or for additional options, use the `-h` flag.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

This utility allows you to generate a private key and certificate signing request (CSR), which you can share with a commercial or private certificate authority to get a valid certificate to use with your instance. For more information, see "[Configuring TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)."

For more information about this command or for additional options, use the `-h` flag.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Some platforms require this script to expand the user volume. For more information, see "[Increasing Storage Capacity](/enterprise/admin/guides/installation/increasing-storage-capacity/)".

```shell
$ ghe-storage-extend
```

### ghe-version

This utility prints the version, platform, and build of {% data variables.product.product_location %}.

```shell
$ ghe-version
```

### ghe-webhook-logs

This utility returns webhook delivery logs for administrators to review and identify any issues.

```shell
ghe-webhook-logs
```

To show all failed hook deliveries in the past day:
{% ifversion ghes %}
```shell
ghe-webhook-logs -f -a <em>YYYY-MM-DD</em>
```

The date format should be `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS`, or `YYYY-MM-DD HH:MM:SS (+/-) HH:M`.
{% else %}
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```
{% endif %}

To show the full hook payload, result, and any exceptions for the delivery:
{% ifversion ghes %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em>
```
{% else %}
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```
{% endif %}

## Clustering

### ghe-cluster-status

Check the health of your nodes and services in a cluster deployment of {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

This utility creates a support bundle tarball containing important logs from each of the nodes in either a Geo-replication or Clustering configuration.

By default, the command creates the tarball in */tmp*, but you can also have it `cat` the tarball to `STDOUT` for easy streaming over SSH. This is helpful in the case where the web UI is unresponsive or downloading a support bundle from */setup/support* doesn't work. You must use this command if you want to generate an *extended* bundle, containing older logs. You can also use this command to upload the cluster support bundle directly to {% data variables.product.prodname_enterprise %} support.

To create a standard bundle:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

To create an extended bundle:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

To send a bundle to {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

To send a bundle to {% data variables.contact.github_support %} and associate the bundle with a ticket:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% ifversion ghes %}
### ghe-cluster-failover

Fail over from active cluster nodes to passive cluster nodes. For more information, see "[Initiating a failover to your replica cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

```shell
ghe-cluster-failover
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
ghe-dpages evacuate pages-server-<em>UUID</em>
```

### ghe-spokes

This utility allows you to manage the three copies of each repository on the distributed git servers.

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
ghe-spokes server evacuate git-server-<em>UUID</em>
```

### ghe-storage

This utility allows you to evacuate all storage services before evacuating a cluster node.

```shell
ghe-storage evacuate storage-server-<em>UUID</em>
```

## Git

### ghe-btop

A `top`-like interface for current Git operations.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

This utility helps to analyze Git traffic. It queries _Governor_ data files, located under `/data/user/gitmon`. {% data variables.product.company_short %} holds one hour of data per file, retained for two weeks. For more information, see [Analyzing Git traffic using Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) in {% data variables.product.prodname_gcf %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
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
ghe-repo <em>username</em>/<em>reponame</em>
```

### ghe-repo-gc

This utility manually repackages a repository network to optimize pack storage. If you have a large repository, running this command may help reduce its overall size. {% data variables.product.prodname_enterprise %} automatically runs this command throughout your interaction with a repository network.

You can add the optional `--prune` argument to remove unreachable Git objects that aren't referenced from a branch, tag, or any other ref. This is particularly useful for immediately removing [previously expunged sensitive information](/enterprise/user/articles/remove-sensitive-data/).

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

This utility checks that all services for {% data variables.product.prodname_actions %} are healthy. For more information, see  "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)" and "[Troubleshooting {% data variables.product.prodname_actions %} for your enterprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)."

```shell
ghe-actions-check
```

### ghe-actions-precheck

This utility tests the blob storage configuration for {% data variables.product.prodname_actions %} on {% data variables.product.product_location %}. You can use the utility to verify your storage configuration before you enable {% data variables.product.prodname_actions %} for your instance.

For more information about the configuration of {% data variables.product.prodname_actions %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."

```shell
ghe-actions-precheck -p [<em>provider</em>] -cs ["<em>connectionstring</em>"]
```

If your storage system is configured correctly, you'll see the following output.

```
All Storage tests passed
```

## Import and export

### ghe-migrator

`ghe-migrator` is a hi-fidelity tool to help you migrate from one GitHub instance to another. You can consolidate your instances or move your organization, users, teams, and repositories from GitHub.com to {% data variables.product.prodname_enterprise %}.

For more information, please see our guides on [migrating data to and from your enterprise](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

Given a URL, detect which type of source control management system is at the other end. During a manual import this is likely already known, but this can be very useful in automated scripts.
```shell
git-import-detect
```

### git-import-hg-raw

This utility imports a Mercurial repository to this Git repository. For more information, see "[Importing data from third party version control systems](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-hg-raw
```

### git-import-svn-raw

This utility imports Subversion history and file data into a Git branch. This is a straight copy of the tree, ignoring any trunk or branch distinction. For more information, see "[Importing data from third party version control systems](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-svn-raw
```

### git-import-tfs-raw

This utility imports from Team Foundation Version Control (TFVC). For more information, see "[Importing data from third party version control systems](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-tfs-raw
```

### git-import-rewrite

This utility rewrites the imported repository. This gives you a chance to rename authors and, for Subversion and TFVC, produces Git branches based on folders. For more information, see "[Importing data from third party version control systems](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)."
```shell
git-import-rewrite
```

## Support

### ghe-diagnostics

This utility performs a variety of checks and gathers information about your installation that you can send to support to help diagnose problems you're having.

Currently, this utility's output is similar to downloading the diagnostics info in the {% data variables.enterprise.management_console %}, but may have additional improvements added to it over time that aren't available in the web UI. For more information, see "[Creating and sharing diagnostic files](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)."

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
This utility creates a support bundle tarball containing important logs from your instance.

By default, the command creates the tarball in */tmp*, but you can also have it `cat` the tarball to `STDOUT` for easy streaming over SSH. This is helpful in the case where the web UI is unresponsive or downloading a support bundle from */setup/support* doesn't work. You must use this command if you want to generate an *extended* bundle, containing older logs. You can also use this command to upload the support bundle directly to {% data variables.product.prodname_enterprise %} support.

To create a standard bundle:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

To create an extended bundle:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

To send a bundle to {% data variables.contact.github_support %}:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

To send a bundle to {% data variables.contact.github_support %} and associate the bundle with a ticket:

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

### ghe-support-upload

This utility sends information from your appliance to {% data variables.product.prodname_enterprise %} support. You can either specify a local file, or provide a stream of up to 100MB of data via `STDIN`. The uploaded data can optionally be associated with a support ticket.

To send a file to {% data variables.contact.github_support %} and associate the file with a ticket:
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

To upload data via `STDIN` and associating the data with a ticket:
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

In this example, `ghe-repl-status -vv` sends verbose status information from a replica appliance. You should replace `ghe-repl-status -vv` with the specific data you'd like to stream to `STDIN`, and `Verbose Replication Status` with a brief description of the data. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Upgrading {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

This utility installs or verifies an upgrade package. You can also use this utility to roll back a patch release if an upgrade fails or is interrupted. For more information, see "[Upgrading {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)."

To verify an upgrade package:
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

To install an upgrade package:
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

This utility manages scheduled installation of upgrade packages. You can show, create new, or remove scheduled installations. You must create schedules using cron expressions. For more information, see the [Cron Wikipedia entry](https://en.wikipedia.org/wiki/Cron#Overview).

To schedule a new installation for a package:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

To show scheduled installations for a package:
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

To remove scheduled installations for a package:
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

### ghe-update-check

This utility will check to see if a new patch release of {% data variables.product.prodname_enterprise %} is available. If it is, and if space is available on your instance, it will download the package. By default, it's saved to */var/lib/ghe-updates*. An administrator can then [perform the upgrade](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

A file containing the status of the download is available at */var/lib/ghe-updates/ghe-update-check.status*.

To check for the latest {% data variables.product.prodname_enterprise %} release, use the `-i` switch.

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

## User management

### ghe-license-usage

This utility exports a list of the installation's users in JSON format. If your instance is connected to {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %} uses this information for reporting licensing information to {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %} ](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

By default, the list of users in the resulting JSON file is encrypted. Use the `-h` flag for more options.

```shell
ghe-license-usage
```

### ghe-org-membership-update

This utility will enforce the default organization membership visibility setting on all members in your instance. For more information, see "[Configuring visibility for organization membership](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)." Setting options are `public` or `private`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

### `ghe-user-csv`

This utility exports a list of all the users in the installation into CSV format. The CSV file includes the email address, which type of user they are (e.g., admin, user), how many repositories they have, how many SSH keys, how many organization memberships, last logged IP address, etc. Use the `-h` flag for more options.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

This utility demotes the specified user from admin status to that of a regular user. We recommend using the web UI to perform this action, but provide this utility in case the `ghe-user-promote` utility is run in error and you need to demote a user again from the CLI.

```shell
ghe-user-demote <em>some-user-name</em>
```

### ghe-user-promote

This utility promotes the specified user account to a site administrator.

```shell
ghe-user-promote <em>some-user-name</em>
```

### ghe-user-suspend

This utility suspends the specified user, preventing them from logging in, pushing, or pulling from your repositories.

```shell
ghe-user-suspend <em>some-user-name</em>
```

### ghe-user-unsuspend

This utility unsuspends the specified user, granting them access to login, push, and pull from your repositories.

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
