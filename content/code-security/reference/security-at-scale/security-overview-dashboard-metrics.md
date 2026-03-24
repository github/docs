---
title: Security overview dashboard metrics
intro: Detailed explanations of metrics, calculations, and data visualizations on the overview page of your security overview.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: reference
category:
  - Secure at scale
---

## Dashboard metrics

The overview dashboard of security overview displays security alert metrics for your organization{% ifversion security-overview-dashboard-enterprise %} or enterprise{% endif %}.

**Trend indicators** show percentage change compared to the previous period. For example:
* 10 alerts this week vs. 20 alerts last week = 50% decrease
* An average alert age of 15 days vs. 5 days = 200% increase

**Alert severity filtering:** The dashboard only includes alerts with security severity levels: `Critical`, `High`, `Medium`, or `Low`. Non-security alerts (`Error`, `Warning`, or `Note`) are excluded. This may cause the dashboard count to differ from {% data variables.product.prodname_code_scanning %} alert totals. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels).

{% ifversion security-overview-3-tab-dashboard %}
<!--Content for FPT, GHEC, and GHES 3.16+ see next HTML comment for GHES <= 3.15-->

## Dashboard structure

The **Detection** tab includes information on:
* Alert status and age
* Secrets blocked or bypassed
* High-risk repositories and vulnerabilities

The **Remediation** tab includes information on:
* How alerts are resolved
* Alert activity over time

The **Prevention** tab includes information on:
* Vulnerabilities prevented and fixed in pull requests
* {% data variables.product.prodname_codeql %} alerts in merged pull requests (not on the default branch)

{% endif %}

## Detection metrics

{% ifversion security-overview-3-tab-dashboard %}Track the current state of security alerts.{% else %}Track current state and trends of security alerts.{% endif %}

### Open alerts over time

{% ifversion security-overview-3-tab-dashboard %}Shows{% else %}Graph showing{% endif %} the number of open alerts over time.

**Included**
* New alerts (shown on creation date)
* Existing open alerts (shown at start of period)

**Excluded**
* Remediated or dismissed alerts

**Default grouping:** Alert severity

### Age of alerts

Average age of alerts still open at the end of the time period.

**Formula:** (Period end date - Alert creation date) averaged across all open alerts

**Note:** Reopened alerts use the original creation date, not the reopen date

### Reopened alerts

Total open alerts that were reopened during the time period.

**Counted if:**
* Closed before the period and still open at period end
* Created, closed, and reopened during the period
* Open at period start, closed, then reopened during the period

**Requirement:** Must be open at the end of the reporting period.

### Secrets bypassed or blocked

Ratio of secrets bypassed to total secrets blocked by push protection.

**Metrics**
* **Bypassed:** Detected secrets that were committed anyway
* **Successfully blocked:** Total blocked minus bypassed

**View details:** Click to see the {% data variables.product.prodname_secret_scanning %} report with matching filters.

For more information, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-secret-scanning-push-protection).

{% ifversion security-overview-3-tab-dashboard %}

### Impact analysis table

Shows repositories and vulnerabilities with the highest security risk.

**Repositories tab**
* Top 10 repositories by open alert count
* Total alerts and severity breakdown

**Advisories tab**
* Top 10 CVE advisories by alert count
* {% data variables.product.prodname_dependabot %} alerts only

**SAST vulnerabilities tab**
* Top 10 Static Application Security Testing (SAST) vulnerabilities
* {% data variables.product.prodname_dependabot_alerts %} only

{% else %}

### Alert trends graph

Graph showing alert count changes over time. Toggle between open and closed alerts.

**Open alerts**
* New alerts (shown on creation date)
* Existing alerts (shown at start of period)

**Closed alerts**
* Alerts closed during period (shown on close date)
* Alerts closed before period (shown at start of period)

**Default grouping:** Alert severity

### Impact analysis table

Shows repositories and advisories with the highest security risk.

**Repositories tab**
* Top 10 repositories by open alert count
* Total alerts and severity breakdown

**Advisories tab**
* Top 10 CVE advisories by alert count
* {% data variables.product.prodname_dependabot_alerts %} only

{% endif %}

## Remediation metrics

Track how quickly and effectively alerts are resolved.

### Closed alerts over time

Graph showing the number of closed alerts over time.

**Included**
* Alerts closed during period (shown on close date)
* Alerts closed before period (shown at start of period)

**Default grouping:** Alert severity

### Mean time to remediate

Average age of alerts remediated or dismissed during the time period.

**Formula:** (Alert close date - Alert creation date) averaged across all closed alerts

**Excluded:** Alerts closed as "false positive"

>[!NOTE]
> Reopened alerts use the original creation date, not the reopen date.

### Net resolve rate

Rate at which alerts are being closed (measures resolution velocity).

**Formula:** Closed alerts (that stayed closed) ÷ New alerts created

**Important:** Uses all new and closed alerts in the period. These may be different alert populations.

**Excluded:** Alerts reopened and re-closed during the period.

### Alert activity graph

Shows alert inflows and outflows over time.

**Visual key**
* **Green bars:** New alerts created
* **Purple bars:** Alerts closed
* **Blue line:** Net activity (new minus closed)

{% ifversion security-overview-3-tab-dashboard %}

## Prevention metrics

Track vulnerabilities caught and fixed before reaching production.

**Data source:** {% data variables.product.prodname_codeql %} alerts in merged pull requests (not on the default branch)

### Introduced versus prevented

Cumulative vulnerabilities caught versus introduced.

**Prevented**
* Pull request alerts fixed before merge
* Detected by {% data variables.product.prodname_codeql %}
* Dates based on fix date

**Introduced**
* New pull request alerts dismissed as "Risk accepted" or unresolved at merge
* Detected by {% data variables.product.prodname_codeql %}
* Dates based on creation date

### Vulnerabilities fixed in pull requests

Count of pull request alerts with close reason "Fixed" in merged pull requests.

**Alert types:** {% data variables.product.prodname_codeql %} or {% data variables.product.prodname_secret_scanning %}

{% ifversion code-scanning-autofix %}

### Pull request alerts fixed with {% data variables.copilot.copilot_autofix_short %} suggestions

Ratio of accepted to total {% data variables.copilot.copilot_autofix_short %} suggestions on pull request alerts.

**{% data variables.copilot.copilot_autofix_short %}** provides targeted fix recommendations for {% data variables.product.prodname_code_scanning %} alerts. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

{% endif %}

{% else %}

{% ifversion code-scanning-autofix %}

## {% data variables.copilot.copilot_autofix_short %} suggestions

Total {% data variables.copilot.copilot_autofix_short %} suggestions generated in open and closed pull requests during the time period.

**{% data variables.copilot.copilot_autofix_short %}** provides targeted fix recommendations for {% data variables.product.prodname_code_scanning %} alerts (including {% data variables.product.prodname_codeql %} alerts). For more information, see [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/responsible-use-autofix-code-scanning).

{% endif %}

{% endif %}