{% rowheaders %}

| Data available | Web interface | JSON/CSV exports | REST API endpoint | Streaming to an external system |
| :- | :-: | :-: | :-: | :-: |
| Range of web events | 180 days | 180 days | 180 days | Determined by the retention policy of your external system |
| [Git events](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#git) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} (JSON only). {% data reusables.audit_log.git-events-retention-period %} | {% octicon "check" aria-label="Available" %}. {% data reusables.audit_log.git-events-retention-period %} | {% octicon "check" aria-label="Available" %} |
| Single sign-on responses | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Created and completed workflow runs](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| [Started workflow jobs, including the secrets provided to each job](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#workflows) | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |
| Online and offline self-hosted runners | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} |

{% endrowheaders %}
