You can sort and filter {% data variables.product.prodname_dependabot_alerts %} by typing filters as `key:value` pairs into the search bar.

| Option | Description | Example |
|:---|:---|:---|
| `ecosystem` | Displays alerts for the selected ecosystem | Use `ecosystem:npm` to show {% data variables.product.prodname_dependabot_alerts %} for npm |
| `has` | Displays alerts meeting the selected filter criteria | Use `has:patch` to show alerts related to advisories that have a patch{% ifversion dependabot-alerts-vulnerable-calls %}</br>Use `has:vulnerable-calls` to show alerts relating to calls to vulnerable functions{% endif %} |
| `is` | Displays alerts based on their state | Use `is:open` to show open alerts |
| `manifest` | Displays alerts for the selected manifest | Use `manifest:webwolf/pom.xml` to show alerts on the pom.xml file of the webwolf application |
| `package` | Displays alerts for the selected package | Use `package:django` to show alerts for django |
| `resolution` | Displays alerts of the selected resolution status | Use `resolution:no-bandwidth` to show alerts previously parked due to lack of resources or time to fix them |
| `repo` |  Displays alerts based on the repository they relate to</br>Note that this filter is only available for security overview. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)" | Use `repo:octocat-repo` to show alerts in the repository called `octocat-repo` |
| {% ifversion dependabot-alerts-development-label %} |
| `scope` | Displays alerts based on the scope of the dependency they relate to | Use `scope:development` to show alerts for dependencies that are only used during development |
| {% endif %} |
| `severity` | Displays alerts based on their level of severity | Use `severity:high` to show alerts with a severity of High |
| {% ifversion dependabot-most-important-sort-option %} |
| `sort` | Displays alerts according to the selected sort order | The default sorting option for alerts is `sort:most-important`, which ranks alerts by importance</br>Use `sort:newest` to show the latest alerts reported by {% data variables.product.prodname_dependabot %} |
| {% endif %} |
