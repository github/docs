---
title: About system logs
intro: 'To help administrators understand activity and errors, {% data variables.product.product_name %} stores system logs.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
redirect_from:
  - /admin/enterprise-management/monitoring-your-appliance/about-system-logs
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/about-system-logs
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/about-system-logs
---

## About system logs for {% data variables.product.product_name %}

To trace, review, and troubleshoot activity and exceptions on {% data variables.location.product_location %}, you can review system logs. Your instance stores the following two types of system logs.

* Plain text log files on disk, stored by syslog or specific services
* Binary log files, stored by journald

By default, {% data variables.product.product_name %} rotates system logs automatically every 24 hours and retains rotated logs for seven days. System logs include system-level events, application logs, and data about Git events. Because log files are written often and can be large in size, you may prefer to extract and parse log entries on a host separate from {% data variables.location.product_location %}.

People with administrative SSH access to a {% data variables.product.product_name %} instance can access and read system logs. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

You can forward system logs and audit logs to an external system for analysis or longer retention. For more information see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."

In addition to reviewing your system logs, you can monitor activity on your instance in other ways. For example, you can review audit logs and push logs, or configure global webhooks. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise)."

{% note %}

**Note**: The following lists of logs are not intended to be comprehensive.

{% endnote %}

## System log files

{% data variables.product.product_name %} writes several categories of system logs to the instance's disk in plain text. People with administrative SSH access to the instance can parse these files using Linux command-line tools such as `cat`, `tail`, `head`, `less`, and `more`.

* [Log files for databases](#log-files-for-databases)
* [Log files for the {% data variables.product.prodname_dotcom %} application](#log-files-for-the-github-application)
* [Log files for the HTTP server](#log-files-for-the-http-server)
* [Log files for the {% data variables.enterprise.management_console %}](#log-files-for-the-management-console)
* [Log files for instance configuration](#log-files-for-instance-configuration)
* [Log files for search](#log-files-for-search)
* [Log files for system services](#log-files-for-system-services)

### Log files for databases

The following log files record events from database services on your instance.

| Path | Description |
| :- | :- |
| <pre>/var/log/mysql/mysql.log</pre> | Records events related to the instance's MySQL database. |
| <pre>/var/log/mysql/mysql.err</pre> | Records errors related to the instance's MySQL database. |
| <pre>/data/user/mssql/log/errorlog</pre> | Records errors related to the instance's MSSQL database. See [Journal logs for databases](#journal-logs-for-databases) later in this article for other events. |

### Log files for the {% data variables.product.prodname_dotcom %} application

The following log files record events from the {% data variables.product.prodname_dotcom %} application on your instance.

| Path | Description |
| :- | :- |
| <pre>/var/log/github/audit.log</pre> | Records user, repository, and system events for activity in the {% data variables.product.prodname_dotcom %} application on your instance. You can filter entries in the log using the `github_audit` keyword. |
| <pre>/var/log/github/exceptions.log</pre> | Records exceptions that the {% data variables.product.prodname_dotcom %} application encounters. |
| <pre>/var/log/github/gitauth.log</pre> | Records Git authentication requests using HTTPS or SSH. The `babeld` service processes all Git authentication requests and activity. |
| <pre>/var/log/github/production.log</pre> | Records internal events for the {% data variables.product.prodname_dotcom %} application. For requests to the website, includes the controller action that responded. May contain entries with different structures, depending on the origin of the job or request. |

### Log files for the HTTP server

The following log files record events from the instance's HTTP server.

| Path | Description |
| :- | :- |
| <pre>/var/log/nginx/error.log*</pre> | Records errors for web requests. |
| <pre>/var/log/nginx/gist.log</pre> | Records HTTP requests related to gists. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)." |
| <pre>/var/log/nginx/gist.error.log</pre> | Records errors related to HTTP requests for gists. |
| <pre>/var/log/nginx/github.log</pre> | Records HTTP requests to the {% data variables.product.prodname_dotcom %} application. |
| <pre>/var/log/nginx/github.error.log</pre> | Records errors associated with HTTP requests. |
| <pre>/var/log/nginx/pages.log</pre> | Records HTTP requests associated with {% data variables.product.prodname_pages %}. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages)." |
| <pre>/var/log/nginx/pages.error.log</pre> | Records errors related to HTTP requests for {% data variables.product.prodname_pages %}. |

### Log files for the {% data variables.enterprise.management_console %}

The following log files contain events from your instance's {% data variables.enterprise.management_console %}. For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/about-the-management-console)."

| Path | Description |
| :- | :- |
| <pre>/var/log/enterprise-manage/audit.log</pre> | Records activity in the instance's {% data variables.enterprise.management_console %}. |
| <pre>/var/log/enterprise-manage/unicorn.log</pre> | Records HTTP and HTTPS operations that administrators perform in the {% data variables.enterprise.management_console %} using the web UI or REST API. |

### Log files for instance configuration

The following log files contain events related to the configuration of your instance.

| Path | Description |
| :- | :- |
| <pre>/data/user/common/ghe-config.log</pre> | Records events associated with {% ifversion unique-config-run-logs %}the latest{% else %}each{% endif %} configuration run. If a configuration run fails, output to the log stops. This log also records information about migrations that run during the process of upgrading an instance's software. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-config-apply)." |
|  {% ifversion unique-config-run-logs %} |
| <pre>/data/user/config-apply/logs/YYYYMMDD/*</pre> | Stores log files for previous configuration runs. The instance stores the files in a directory that reflects the date, and each file name reflects the node and the ID of the run. |
|  {% endif %} |

### Log files for search

The following log files contain events from services that provide search functionality for your instance.

| Path | Description |
| :- | :- |
| <pre>/var/log/elasticsearch/github-enterprise.log</pre> | Records events associated with the Elasticsearch service, which your instance uses to provide search services. |

### Log files for system services

The following logs contain events from system services on your instance.

| Path | Description |
| :- | :- |
| <pre>/var/log/coredumps.log</pre> | Records information about system processes that terminate unexpectedly. |
| <pre>/var/log/boot.log</pre> | Records information about the instance's boot process. |
| <pre>/var/log/chrony/</pre> | This directory contains logs related to Network Time Protocol (NTP) synchronization and the instance's system clock. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-time-synchronization)." |
| <pre>/var/log/haproxy.log</pre> | Records all web and API requests to the instance. For HTTP connections, entries include the URL that the client requested, as well as the HTTP method for the request. |
| <pre>/var/log/ssh-console-audit.log</pre> | Records commands that administrators run using the administrative shell (SSH). For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)." |
| <pre>/var/log/mail-replies/metroplex.log</pre> | Records information about mail that your instance receives. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)." |

## System logs in the systemd journal

Several {% data variables.product.product_name %} services, such as the `babeld` service, are containerized. {% data variables.product.product_name %} writes system logs for these services to the systemd journal in a binary format.

People with administrative SSH access to the instance can parse these logs using the `journalctl` command. For more information, see [journalctl(1)](http://man7.org/linux/man-pages/man1/journalctl.1.html) in the online Linux manual pages.

To view logs in the systemd journal, run the following command, replacing SERVICE-NAME with a service name from the following list of logs. For view logs of all other containerized services, run `nomad job status` and use the `ID` as the SERVICE-NAME.

```shell
journalctl -t SERVICE-NAME
```

* [Journal logs for the {% data variables.product.prodname_dotcom %} application](#journal-logs-for-the-github-application)
* [Journal logs for Git](#journal-logs-for-git)
* [Journal logs for storage](#journal-logs-for-storage)

### Journal logs for the {% data variables.product.prodname_dotcom %} application

The following logs record events from the {% data variables.product.prodname_dotcom %} application on your instance.

| Service name | Description |
| :- | :- |
| <pre>github-resqued</pre> | Records events related to background jobs. {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}If the job involves built-in or external authentication, this log includes information about the request. <br/><br/> If the instance uses LDAP authentication and LDAP Sync is enabled, events for LDAP Sync appear in this log. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync)."{% endif %} |
| <pre>github-unicorn</pre> | Records HTTP and HTTPS operations that users perform in the instance's web UI or via the APIs. {% ifversion opentelemetry-and-otel-log-migration-phase-1 %}If the operation involves built-in or external authentication, this log includes information about the request. <br/><br/> If debug logging is enabled for LDAP or SAML authentication, the debug-level information for authenticated requests appear in this log. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap)" or "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."{% endif %} |

### Journal logs for Git

The following logs contain events related to Git activity on your instance.

| Service name | Description |
| :- | :- |
| <pre>babeld</pre> | Records events for all Git activity on the instance, including authentication to access the repository. |
| <pre>codeload</pre> | Records events for activity related to the generation or retrieval of code archives for repositories on the instance. |
| <pre>gpgverify</pre> | Records events related to commit signature verification. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)." |

### Journal logs for storage

The following logs contain events from services that store or retrieve data on your instance.

| Service name | Description |
| :- | :- |
| <pre>alambic</pre> | Records events related to the storage and retrieval of files, such as {% data variables.large_files.product_name_short %} objects, avatar images, file attachments from comments in the web UI, and release archives. |

### Journal logs for databases

The following logs contain events related to database services on your instance.

| Service name | Description |
| :- | :- |
| <pre>mysql</pre> | Records events related to the instance's MySQL database. |
| <pre>mssql</pre> | Records events related to the instance's MSSQL database. |

### Journal logs for webhooks

The following log files contain events related to webhooks that your instance sends.

| Service name | Description |
| :- | :- |
| <pre>hookshot-go</pre> | Records events for all webhook activity on the instance, including triggered webhooks, deliveries, and failures.|

## About system logs in support bundles

If you generate a support bundle, the file includes system logs. For more information, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support)."
