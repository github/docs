{% ifversion code-scanning-scheduled-scan-activity %}

By default, {% data variables.product.prodname_code_scanning %} default setup runs weekly scheduled scans only on active repositories. A repository is active if a push or pull request has triggered a default setup scan in the last 180 days. Initial scans, scans triggered by configuration or language changes, and scheduled scans do not count as activity.

When you enable default setup, an initial scan runs, but weekly scheduled scans do not start until a push or pull request triggers a scan. Pushes and pull requests from before default setup was enabled do not count as activity.

{% else %}

By default, {% data variables.product.prodname_code_scanning %} default setup pauses weekly scheduled scans on repositories that have had no commits pushed or pull requests opened for 180 days.

{% endif %}
