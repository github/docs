---
title: Site admin dashboard
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard/
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

To access the dashboard, in the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
![Rocketship icon for accessing site admin settings](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Search

Refer to this section of the site admin dashboard to search for users and repositories, and to query the [audit log](#audit-log).

{% else %}

### License info & search

Refer to this section of the site admin dashboard to check your current {% data variables.product.prodname_enterprise %} license; to search for users and repositories; and to query the [audit log](#audit-log).

{% endif %}

### {% data variables.enterprise.management_console %}

Here you can launch the {% data variables.enterprise.management_console %} to manage virtual appliance settings such as the domain, authentication, and SSL.

### Explore

Data for GitHub's [trending page][] is calculated into daily, weekly, and monthly time spans for both repositories and developers. You can see when this data was last cached and queue up new trending calculation jobs from the **Explore** section.

  [trending page]: https://github.com/blog/1585-explore-what-is-trending-on-github

### Audit log

{% data variables.product.prodname_enterprise %} keeps a running log of audited actions that you can query.

By default, the audit log shows you a list of all audited actions in reverse chronological order. You can filter this list by entering key-value pairs in the **Query** text box and then clicking **Search**, as explained in "[Searching the audit log](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)."

For more information on audit logging in general, see "[Audit logging](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)." For a full list of audited actions, see "[Audited actions](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)."

### Reports

If you need to get information on the users, organizations, and repositories in {% data variables.product.product_location %}, you would ordinarily fetch JSON data through the [GitHub API](/rest). Unfortunately, the API may not provide all of the data that you want and it requires a bit of technical expertise to use. The site admin dashboard offers a **Reports** section as an alternative, making it easy for you to download CSV reports with most of the information that you are likely to need for users, organizations, and repositories.

Specifically, you can download CSV reports that list

- all users
- all users who have been active within the last month
- all users who have been inactive for one month or more
- all users who have been suspended
- all organizations
- all repositories

You can also access these reports programmatically via standard HTTP authentication with a site admin account. You must use a personal access token with the `site_admin` scope. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

For example, here is how you would download the "all users" report using cURL:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

To access the other reports programmatically, replace `all_users` with `active_users`, `dormant_users`, `suspended_users`, `all_organizations`, or `all_repositories`.

{% note %}

**Note:** The initial `curl` request will return a 202 HTTP response if there are no cached reports available; a report will be generated in the background. You can send a second request to download the report. You can use a password or an OAuth token with the `site_admin` scope in place of a password.

{% endnote %}

#### User reports

Key               | Description
-----------------:| ------------------------------------------------------------
`created_at`      | When the user account was created (as an ISO 8601 timestamp)
`id`              | Account ID for the user or organization
`login`           | Account's login name
`email`           | Account's primary email address
`role`            | Whether the account is an admin or an ordinary user
`suspended?`      | Whether the account has been suspended
`last_logged_ip`  | Most recent IP address to log into the account
`repos`           | Number of repositories owned by the account
`ssh_keys`        | Number of SSH keys registered to the account
`org_memberships` | Number of organizations to which the account belongs
`dormant?`        | Whether the account is dormant
`last_active`     | When the account was last active (as an ISO 8601 timestamp)
`raw_login`       | Raw login information (in JSON format)
`2fa_enabled?`    | Whether the user has enabled two-factor authentication

#### Organization reports

Key            | Description
--------------:| ------------------------------------
`id`           | Organization ID
`created_at`   | When the organization was created
`login`        | Organization's login name
`email`        | Organization's primary email address
`owners`       | Number of organization owners
`members`      | Number of organization members
`teams`        | Number of organization teams
`repos`        | Number of organization repositories
`2fa_required?`| Whether the organization requires two-factor authentication

#### Repository reports

Key             | Description
---------------:| ------------------------------------------------------------
`created_at`    | When the repository was created
`owner_id`      | ID of the repository's owner
`owner_type`    | Whether the repository is owned by a user or an organization
`owner_name`    | Name of the repository's owner
`id`            | Repository ID
`name`          | Repository name
`visibility`    | Whether the repository is public or private
`readable_size` | Repository's size in a human-readable format
`raw_size`      | Repository's size as a number
`collaborators` | Number of repository collaborators
`fork?`         | Whether the repository is a fork
`deleted?`      | Whether the repository has been deleted

### Indexing

GitHub's [code search][] features are powered by [ElasticSearch][]. This section of the site admin dashboard shows you the current status of your ElasticSearch cluster and provides you with several tools to control the behavior of searching and indexing. These tools are split into the following three categories.

  [Code Search]: https://github.com/blog/1381-a-whole-new-code-search
  [ElasticSearch]: http://www.elasticsearch.org/

#### Code search

This allows you to enable or disable both search and index operations on source code.

#### Code search index repair

This controls how the code search index is repaired. You can

- enable or disable index repair jobs
- start a new index repair job
- reset all index repair state

{% data variables.product.prodname_enterprise %} uses repair jobs to reconcile the state of the search index with data stored in a database (issues, pull requests, repositories, and users) and data stored in Git repositories (source code). This happens when

- a new search index is created;
- missing data needs to be backfilled; or
- old search data needs to be updated.

In other words, repair jobs are started as needed and run in the background—they are not scheduled by site admins in any way.

Furthermore, repair jobs use a "repair offset" for parallelization. This is an offset into the database table for the record being reconciled. Multiple background jobs can synchronize work based on this offset.

A progress bar shows the current status of a repair job across all of its background workers. It is the percentage difference of the repair offset with the highest record ID in the database. Don't worry about the value shown in the progress bar after a repair job has completed: because it shows the difference between the repair offset and the highest record ID in the database, it will decrease as more repositories are added to {% data variables.product.product_location %} even though those repositories are actually indexed.

You can start a new code-search index repair job at any time. It will use a single CPU as it reconciles the search index with database and Git repository data. To minimize the effects this will have on I/O performance and reduce the chances of operations timing out, try to run a repair job during off-peak hours first. Monitor your system's load averages and CPU usage with a utility like `top`; if you don't notice any significant changes, it should be safe to run an index repair job during peak hours, as well.

#### Issues index repair

This controls how the [Issues][] index is repaired. You can

  [Issues]: https://github.com/blog/831-issues-2-0-the-next-generation

- enable or disable index repair jobs
- start a new index repair job
- reset all index repair state

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### Enterprise overview

Refer to this section of the site admin dashboard to manage organizations, people, policies, and settings.

{% endif %}

### Repositories

This is a list of the repositories on {% data variables.product.product_location %}. You can click on a repository name and access functions for administering the repository.

- [Blocking force pushes to a repository](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Configuring {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Archiving and unarchiving repositories](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)

### All users

Here you can see all of the users on {% data variables.product.product_location %}—, and [initiate an SSH key audit](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Site admins

Here you can see all of the administrators on {% data variables.product.product_location %}, and [initiate an SSH key audit](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).

### Dormant users

Here you can see and [suspend](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users) all of the inactive users on {% data variables.product.product_location %}. A user account is considered to be inactive ("dormant") when it:

- Has existed for longer than the dormancy threshold that's set for {% data variables.product.product_location %}.
- Has not generated any activity within that time period.
- Is not a site administrator.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} For more information, see "[Managing dormant users](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)."

### Suspended users

Here you can see all of the users who have been suspended on {% data variables.product.product_location %}, and [initiate an SSH key audit](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys).
