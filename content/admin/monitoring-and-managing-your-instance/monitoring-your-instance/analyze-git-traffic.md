---
title: Analyzing Git traffic on your {% data variables.product.prodname_ghe_server %} instance
shortTitle: Analyze Git traffic
intro: 'Use Governor to identify Git traffic patterns that are driving load on your instance, so you can troubleshoot slow Git operations and reduce performance impact.'
versions:
  ghes: '*'
contentType: how-tos
category:
  - Monitor and audit your enterprise
---

## About Governor

Governor is a built-in monitor for Git activity on your instance. Use the `ghe-governor` command to see which repositories, users, IP addresses, and Git operations are creating load.

Use this data when CPU, memory, or disk usage increases and you need to confirm whether Git traffic is the cause. For command syntax and subcommands, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-governor).

Governor records Git operations only. It does not include API or web traffic. To inspect operations currently running, see the `ghe-btop` utility in [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-btop).

### About Governor data files

Governor stores its data in files under `/data/user/governor/`. Each file holds one hour of data and is retained for two weeks. The file names contain Unix timestamps that indicate the time period each file covers.

> [!NOTE]
> On {% data variables.product.prodname_ghe_server %} 3.13 and earlier, Governor data files are located under `/data/user/gitmon/` and use the naming pattern `gitmon.<timestamp>.db`.

To confirm the range of data currently held on disk, convert the timestamps in the earliest and latest file names to human-readable dates.

```shell
for epoch in $(sudo ls /data/user/governor/ 2>/dev/null | grep '^governor\.' | sort | sed -n '1p;$p' | cut -f2 -d.); do echo "${epoch} = $(date -d @${epoch})"; done
```

The output shows the start time of the earliest and latest data files.

```text
1551186000 = Tue Feb 26 13:00:00 UTC 2019
1552392000 = Tue Mar 12 12:00:00 UTC 2019
```

## Before you start

Before you run Governor queries, gather this information:

* **SSH access to the appliance.** You need access to the administrative shell to run `ghe-governor`. See [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
* **Which node to query.** For standalone or high-availability deployments, start on the primary node. For clusters, run queries on each `git-server` node because no single node contains all Git traffic.
* **The impact window.** Note the start and end times of reported degradation so you can scope queries with `-t` and `-u`.
* **Repository or organization names**, if users have reported problems with specific repositories or organizations.

## Identify whether Git is contributing to load

Start with a broad summary, then attribute load to specific repositories or programs.

* Summarize all recent Git activity on your instance:

  ```shell
  ghe-governor health
  ```

* Find repositories with the slowest average response time:

  ```shell
  ghe-governor aggregate repo avg_rt
  ```

* Find repositories with the longest single operation:

  ```shell
  ghe-governor aggregate repo max_rt
  ```

* Find the slowest individual operations (not grouped):

  ```shell
  ghe-governor top rt -n 50
  ```

* Find the repositories consuming the most CPU time:

  ```shell
  ghe-governor aggregate repo cpu
  ```

* For a repository that stands out, find which Git subprogram is responsible for its CPU usage:

  ```shell
  ghe-governor aggregate program cpu -r OWNER/REPOSITORY
  ```

* Find the repositories where `pack-objects` consumed the most CPU time. The `pack-objects` program assembles data sent to clients during clones and fetches; a high count places significant CPU and memory pressure on the appliance:

  ```shell
  ghe-governor aggregate repo cpu -P pack-objects
  ```

* Find the individual operations that used the most CPU time (not grouped):

  ```shell
  ghe-governor top cpu -n 50
  ```

* Find the repositories driving the most disk writes during a specific time interval:

  ```shell
  ghe-governor aggregate repo disk_write_kb -t START-TIME -u END-TIME
  ```

* Check for high concurrency, which indicates many Git operations running simultaneously:

  ```shell
  ghe-governor aggregate repo max_parallelism
  ```

If the results point to a specific repository or program, continue with the relevant section below.

## Identify top clone and fetch traffic

The `upload-pack` program handles data served to clients during clones and fetches. Use these queries to find which repositories, users, and IP addresses are driving the most clone and fetch activity.

* Count clone and fetch operations by repository:

  ```shell
  ghe-governor aggregate repo count -P upload-pack
  ```

* Identify users running clones and fetches and count their operations:

  ```shell
  ghe-governor aggregate user_id count -P upload-pack
  ```

* Identify the IP addresses generating the most clone and fetch requests. A small set of IP addresses with a high count often indicates a CI runner fleet:

  ```shell
  ghe-governor aggregate ip count -P upload-pack
  ```

* Measure the total volume of data served per repository:

  ```shell
  ghe-governor aggregate repo uploaded_kb -P upload-pack
  ```

* Measure the average volume of data uploaded per user:

  ```shell
  ghe-governor aggregate user_id avg_uploaded -P upload-pack
  ```

* Find peak clone and fetch concurrency per repository. The `MAXPL` column shows the highest number of simultaneous operations recorded for each repository. A high value for a small number of repositories suggests a thundering herd:

  ```shell
  ghe-governor aggregate repo max_parallelism -P upload-pack
  ```

* Find the largest individual clone or fetch operations (not grouped):

  ```shell
  ghe-governor top uploaded -P upload-pack -n 50
  ```

## Identify push-heavy traffic

The `receive-pack` and `spokes-receive-pack` programs handle data received from clients during pushes. Use these queries to find which repositories, users, and IP addresses are generating the most push activity.

* Count push operations by repository:

  ```shell
  ghe-governor aggregate repo count -P receive-pack -P spokes-receive-pack
  ```

* Identify users pushing to an organization and count their push operations:

  ```shell
  ghe-governor aggregate user_id count -o ORGANIZATION -P receive-pack -P spokes-receive-pack
  ```

* Measure the total volume of data received per repository:

  ```shell
  ghe-governor aggregate repo received_kb -P receive-pack -P spokes-receive-pack
  ```

* Identify IP addresses sending the most push data:

  ```shell
  ghe-governor aggregate ip received_kb -P receive-pack -P spokes-receive-pack
  ```

* Find the largest individual push operations (not grouped):

  ```shell
  ghe-governor top received -P receive-pack -P spokes-receive-pack -n 50
  ```

## Narrow the analysis

You can add any combination of the following options to a `ghe-governor top` or `ghe-governor aggregate` command to focus the query on a specific time window, repository, owner, or program.

### Time filters

| Option | Description |
| --- | --- |
| `-t <timespec>` | Consider only operations since a given start time. The default is 48 hours ago. |
| `-u <timespec>` | Consider only operations up to a given end time. The default is the current time. |

The following formats are accepted for `<timespec>`.

| Format | Example | Meaning |
| --- | --- | --- |
| Unix timestamp | `-t 1371614483` | Seconds since January 1, 1970 |
| Java timestamp | `-t 1371614483637` | Milliseconds since January 1, 1970 |
| Relative days | `-t 1d` | The last day |
| Relative hours | `-t 2h` | The last two hours |
| Relative minutes | `-t 20m` | The last twenty minutes |

### Scope filters

| Option | Description |
| --- | --- |
| `-r <owner>/<repository>` | Consider only operations matching a given owner and repository. Specify this option multiple times to match several repositories. |
| `-o <owner>` | Consider only operations matching a given owner, such as a user or organization. Specify this option multiple times to match several owners. |
| `-P <program>` | Consider only operations that ran a given Git subprogram, such as `upload-pack`, `receive-pack`, `rev-list`, or `pack-objects`. Specify this option multiple times to match several programs. |
| `-I <address>` | Consider only operations from a specific IP address. Specify this option multiple times to match several addresses. |

### Output options

| Option | Description |
| --- | --- |
| `-j` | Set the output format to JSON instead of an ASCII table. |
| `-n <N>` | Limit the output to N records. The default is 20 for aggregate queries and 200 for top queries. |
| `--count-only` | Show only the `KEY` and `COUNT` columns. Applies to aggregate queries only. |

### Interpreting result columns

The following abbreviations appear in `ghe-governor` result tables.

| Column | Meaning |
| --- | --- |
| `AVG RT` | Average time, in seconds, that Git invocations took |
| `MAX RT` | Running time, in seconds, of the longest-running invocation, per host |
| `MAXPL` / `AVGPL` | Maximum and average parallelism: how many Git invocations were outstanding at one time |
| `CPU/SEC` | Seconds of CPU time used by Git per second of wall-clock time. Divide by the number of CPU cores and multiply by 100 to get the Git-specific CPU percentage. This value cannot exceed the number of CPU cores. |
| `UPL` | Data the server uploaded to clients, such as during fetches and clones |
| `RECV` | Data the server received from clients, such as during pushes |

The `READ`, `WRITE`, `UPL`, and `RECV` columns are reported in gigabytes (GB), and the corresponding rate is reported in megabytes per second (MB/s).

## Interpret common patterns

The following table maps common Governor output patterns to their likely causes.

| Pattern | Likely cause |
| --- | --- |
| High `upload-pack` count from a small set of IP addresses | A CI runner fleet is repeatedly cloning one or more repositories instead of reusing local checkouts |
| High `max_parallelism` for a small number of repositories | Thundering herd: many runners triggering concurrent clones at the same time, often because scheduled jobs start simultaneously |
| Large `uploaded_kb` per repository combined with high `avg_uploaded` per user | Repeated full clones; clients are not reusing local checkouts or are not using shallow or partial clones |
| High `received_kb` for a repository or organization | Push-intensive workload; may involve large binary files or frequent commits to a monorepo |
| High `pack-objects` CPU with moderate operation counts | Expensive object packing; the repository may benefit from a maintenance run or from client-side use of partial clones with `--filter` |
| High `avg_rt` or `max_rt` for a repository | Slow operations; often caused by large `pack-objects` runs, high concurrency, or resource contention from another workload |

## Recommended actions for Git load reduction

If Governor data shows that a repository, user, or runner fleet is generating excessive load, the following actions can reduce the impact.

* **Reuse local checkouts.** Replace fresh clones with `git fetch` in automated workflows. This avoids transferring the full object graph on each run.
* **Use shallow clones.** For workflows that do not require full commit history, pass `--depth` to the clone command, for example `git clone --depth 1`. This reduces both the data transferred and the work `pack-objects` must do.
* **Use partial clones.** For repositories with large binary objects or many files not needed in a given workflow, use `--filter` to request only the objects the workflow requires, for example `git clone --filter=blob:none`.
* **Add a local mirror or caching proxy.** For large runner fleets that clone the same repositories repeatedly, a pull-through proxy or local mirror can absorb fetch traffic and reduce load on your instance.
* **Stagger scheduled jobs.** Offset CI/CD workflows triggered on a schedule so that not all runners start at the same time, reducing the size of concurrent clone bursts.
* **Reduce workflow parallelism.** Workflows that clone multiple repositories in parallel can be reconfigured to limit concurrency and spread the load over time.

## When to contact {% data variables.product.company_short %} Support

Contact {% data variables.contact.contact_ent_support %} and include a support bundle if any of the following apply.

* Performance remains degraded after reducing clone pressure or staggering scheduled jobs.
* Your instance is serving widespread Git errors or connection failures that are not explained by client workload.
* Governor shows persistent `max_parallelism` values suggesting the instance is at or near capacity, and workload changes alone are unlikely to resolve the issue.
* You see a clear pattern in Governor output but are uncertain how to interpret it or what action to take.

For more information about generating a support bundle, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

## Further reading

For more information about monitoring system resources, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).
