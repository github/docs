{% rowheaders %}

| Data available | Web interface | JSON/CSV exports | REST API endpoint | Streaming to an external system |
| :- | :-: | :-: | :-: | :-: |
| Range of web events | 180 days | 180 days | 180 days | Determined by the retention policy of your external system |
| [API request events](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#api) | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} (If enabled) |
| [Git events](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} (JSON only). {% data reusables.audit_log.git-events-retention-period %} | {% octicon "check" aria-label="Available" %}. {% data reusables.audit_log.git-events-retention-period %} | {% octicon "check" aria-label="Available" %} |
| Single sign-on responses (organization and enterprise) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Created and completed workflow runs](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Started workflow jobs, including the secrets provided to each job](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| Online and offline self-hosted runners | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |

{% endrowheaders %}
