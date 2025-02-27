You can sort and filter {% data variables.product.prodname_dependabot_alerts %} by typing filters as `key:value` pairs into the search bar.

| Option | Description | Example |
|:---|:---|:---|
| `ecosystem` | Displays alerts for the selected ecosystem | Use `ecosystem:npm` to show {% data variables.product.prodname_dependabot_alerts %} for npm |
| `has` | Displays alerts meeting the selected filter criteria | Use `has:patch` to show alerts related to advisories that have a patch |
| `is` | Displays alerts based on their state | Use `is:open` to show open alerts |
| `manifest` | Displays alerts for the selected manifest | Use `manifest:webwolf/pom.xml` to show alerts on the pom.xml file of the webwolf application |
| `package` | Displays alerts for the selected package | Use `package:django` to show alerts for django |
| `resolution` | Displays alerts of the selected resolution status | Use `resolution:no-bandwidth` to show alerts previously parked due to lack of resources or time to fix them |
| `repo` |  Displays alerts based on the repository they relate to</br>Note that this filter is only available for security overview. For more information, see [AUTOTITLE](/code-security/security-overview/about-security-overview) | Use `repo:octocat-repo` to show alerts in the repository called `octocat-repo` |
| `scope` | Displays alerts based on the scope of the dependency they relate to | Use `scope:development` to show alerts for dependencies that are only used during development |
| `severity` | Displays alerts based on their level of severity | Use `severity:high` to show alerts with a severity of High |
| `sort` | Displays alerts according to the selected sort order | The default sorting option for alerts is `sort:most-important`, which ranks alerts by importance</br>Use `sort:newest` to show the latest alerts reported by {% data variables.product.prodname_dependabot %}{% ifversion dependabot-alerts-epss-score %}</br>Use `sort:epss-percentage` to show alerts ordered by descending EPSS score.{% endif %} |

{% ifversion dependabot-alerts-epss-score %}

>[!NOTE] The Exploit Prediction Scoring System, or EPSS, provides a **score** (from 0 to 100%) or probability of the vulnerability to be exploited in the next 30 days, and a **percentile** (nth percentile) or relative measure of threat. This score comes from the Forum of Incident Response and Security Teams (FIRST) and is updated daily. To learn more, see [Exploit Prediction Scoring System](https://www.first.org/epss/) in the FIRST documentation.

{% endif %}
