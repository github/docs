---
title: Managing search indices for your instance
shortTitle: Manage search indices
intro: '{% data variables.product.product_name %} uses Elasticsearch to power search features, and provides tools for managing search and index behavior.'
permissions: Enterprise owners can manage search indices for a {% data variables.product.prodname_ghe_server %} instance.
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
---

## About search for {% data variables.product.prodname_ghe_server %}

Users can search your instance to find, navigate, and understand issues, pull requests, code, and other content on {% data variables.product.product_name %}. Elasticsearch powers the search functionality on your instance. You can view the current status of Elasticsearch, and you can control search and index behavior.

For more information about search for {% data variables.product.product_name %}, see "[AUTOTITLE](/search-github)." For more information about Elasticsearch, see the [Elasticsearch website](https://elastic.co).

## About index management

{% data variables.product.product_name %} reconciles the state of the search index with data on the instance automatically and regularly, including:

* Issues, pull requests, repositories, and users in the database
* Git repositories (source code) on disk

In normal use, enterprise owners do not need to create new indices or schedule repair jobs. For troubleshooting or other support purposes, {% data variables.contact.github_support %} may instruct you to run a repair job.

## Viewing search indices

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Search indexes**.
1. Under "Index management", click the search index you want to view.

## Creating a new search index

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Search indexes**.
1. Next to "Index management", click **Create new index**.
1. Select the **Select the index to create** dropdown, then click the search index you want to create.
1. If you want the index to be searchable, select the **Make this index searchable** checkbox.
1. If you want the index to be writable, select the **Make this index writable** checkbox.
1. Click **Create index**.
1. If your instance uses a high availability or cluster configuration, you will need to run a script to ensure the number of search indices is correctly configured across the instance.

   Access the administrative shell for your primary appliance via SSH, then run one of the following commands.

   For high availability configurations:

   ```shell copy
   /usr/local/share/enterprise/ghe-es-auto-expand -v 0-all
   ```

   For cluster configurations:

   ```shell copy
   /usr/local/share/enterprise/ghe-es-auto-expand -v 0-1
   ```

   See "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."

## Managing search indices

When you view an existing search index in the site admin dashboard, you can perform the following actions:

* Make the index searchable.
* Make the index writable.
* Update the index.
* Delete the index.
* Reset the index repair state.
* Start a new index repair job.
* Enable or disable index repair jobs.

## Managing code search

You can enable or disable both search and index operations for source code. For more information about code search, see "[AUTOTITLE](/search-github/searching-on-github/searching-code)."

1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. In the left sidebar, click **Search indexes**.
1. In the "Code search" section, next to "Searching" or "Indexing", click **Enable** or **Disable**.

## Repairing search indices

Your instance uses repair jobs to reconcile the data, and schedules a repair job in the background when the following events occur:

* A new search index is created.
* Missing data needs to be backfilled.
* Old search data needs to be updated.

In the "Repair" section of the search index, a progress bar shows the current status of a repair job across background workers. You can ignore the value shown in the progress bar after a repair job has completed. The progress bar shows the difference between the repair offset and the highest record ID in the database, and will decrease as more repositories are added to {% data variables.location.product_location %} even though those repositories are actually indexed.

To minimize the effects on I/O performance and reduce the chances of operations timing out, run the repair job during off-peak hours. As the job reconciles the search index with database and Git repository data, one CPU will be used. Monitor your system's load averages and CPU usage with a utility like `top`. If you don't notice any significant increase in resource consumption, it should also be safe to run an index repair job during peak hours.

Repair jobs use a "repair offset" for parallelization. This is an offset into the database table for the record being reconciled. Multiple background jobs can synchronize work based on this offset.
