---
title: Accessing reports for your instance
shortTitle: Access reports
intro: "You can download reports with information about the users, organizations, and repositories on {% data variables.location.product_location %}."
permissions: Enterprise owners can download reports for a {% data variables.product.prodname_ghe_server %} instance.
versions:
  ghes: '*'
topics:
  - Enterprise
---

## About reports for {% data variables.product.product_name %}

If you need to get information about the users, organizations, and repositories on {% data variables.location.product_location %}, you can fetch data using the REST API. For more information, see "[AUTOTITLE](/rest/about-the-rest-api/about-the-rest-api)."

The REST API might not provide all of the data that you want, and requires some technical expertise to use. Alternatively, you can reports containing overviews of users, organizations, and repositories on your instance.

## Downloading reports using the web UI
  
1. From an administrative account on {% data variables.product.product_name %}, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Reports**.
1. Next to the report you want to download, click **Download**.

You can download CSV files that report the following information:

* All users
* All active users
* All [dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)
* All users who have been suspended
* All organizations
* All repositories

## Downloading reports programmatically

You can also access reports programmatically via standard HTTP authentication and a {% data variables.product.pat_v1 %}. You must use a {% data variables.product.pat_v1 %} with the `site_admin` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

For example, you can download the "all users" report using curl:

```shell
curl --remote-name \
     --location \
     --user 'USERNAME:TOKEN' \
     http(s)://HOSTNAME/stafftools/reports/all_users.csv
```

To access the other reports programmatically, replace `all_users` with `active_users`, `dormant_users`, `suspended_users`, `all_organizations`, or `all_repositories`.

{% note %}

**Note:** The initial curl request will return an HTTP `202` response if there are no cached reports available. Your instance will generate a report in the background. You can send a second request to download the report. You can use a password or an OAuth token with the `site_admin` scope in place of a password.

{% endnote %}

## User reports

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

## Organization reports

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

## Repository reports

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
