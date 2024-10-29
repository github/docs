---
title: GitHub Enterprise Service Level Agreement
hidden: true
redirect_from:
  - /github-enterprise-cloud-addendum
  - /github-business-cloud-addendum
  - /articles/github-enterprise-cloud-addendum
  - /github/site-policy/github-enterprise-service-level-agreement
  - /github/site-policy-deprecated/github-enterprise-cloud-addendum
versions:
  fpt: '*'
---

_These terms apply to Customers who licensed the Products prior to January 4, 2021. Customers who purchase GitHub Products after that date are directed to https://github.com/customer-terms for current terms._

**Short version:** GitHub guarantees a 99.9% quarterly uptime commitment for the applicable GitHub service (the “**Service Level**” or “**SLA**”). If GitHub does not meet the SLA, then Customer will be entitled to a service credit to Customer’s account (“**Service Credits**”).

For definitions of each Service feature (“**Service Feature**”) and to review historical and current Uptime, visit the [GitHub Status Page](https://www.githubstatus.com/). Capitalized terms used but not defined in this SLA have the meaning assigned in Customer’s applicable agreement.

## Uptime Guarantee

“**Uptime**” is the percentage of total possible minutes the applicable GitHub service was available in a given calendar quarter. GitHub commits to maintain at least 99.9% Uptime for the applicable GitHub service. The Uptime calculation for each Service Feature that may be included with the applicable GitHub service is described below (“**Uptime Calculation**”). If GitHub does not meet the SLA, Customer will be entitled to Service Credits based on the calculation below (“**Service Credits Calculation**”). Note, Downtime does not affect every customer at the same time or in the same way.

| **Service Feature** | **Uptime Calculation** | **Definitions** | **Service Credits Calculation** |
|---|---|---|---|
| **Issues**,<br>**Pull&nbsp;Requests**,<br>**Git&nbsp;Operations**,<br>**API&nbsp;Requests (for Service Features only)**,<br>**Webhooks**,<br>**Pages** | (total minutes in a calendar quarter - Downtime) / total minutes in a calendar quarter | “**Downtime**” is a period of time where either (a) the error rate exceeds five percent (5%) in a given minute for any Service Feature or (b) the Service was unavailable as determined by a combination of GitHub's internal and external monitoring systems. | A Service Credits claim may be based on either (not both) of the following calculations: <ul><li>10% of the amount Customer paid for a Service Feature in a calendar quarter where the Uptime for that Service Feature was less than or equal to 99.9%, but greater than 99.0%. <BR><BR>OR <BR><BR></li><li>25% of the amount Customer paid for a Service Feature in a calendar quarter where the Uptime of that Service Feature was less than 99.0%.</li></ul> | |
| **Actions** | (Total Triggered Executions – Unavailable Executions) / (Total Triggered Executions) x 100 | “**Total Triggered Executions**” is the total number of all Actions executions triggered by Customer in a calendar quarter. <br><br> “**Unavailable Executions**” is the total number of executions within Total Triggered Executions which failed to run in a calendar quarter.  An execution failed to run when the Actions history log did not capture any output five (5) minutes after the trigger was successfully fired. | Same as above |
| **Packages** | Transfers Uptime = same as Actions <br> <br> Storage Uptime = 100% - Average Error Rate*<br> <br>*The Uptime Calculation excludes public usage and storage transactions that do not count toward either Total Storage Transactions or Failed Storage Transactions (including pre-authentication failures; authentication failures; attempted transactions for storage accounts over their prescribed quotas). | “**Error Rate**” is the total number of Failed Storage Transactions divided by the Total Storage Transactions during a set time interval (currently set at one hour). If the Total Storage Transactions in a given one-hour interval is zero, the error rate for that interval is 0%. <br><br> “**Average Error Rate**” is the sum of Error Rates for each hour in a calendar quarter divided by the total number of hours in a calendar quarter. | Same as above |

## Exclusions

Excluded from the Uptime Calculation are Service Feature failures resulting from (i) Customer’s acts, omissions, or misuse of the applicable GitHub service including violations of the Agreement; (ii) failure of Customer’s internet connectivity; (iii) factors outside GitHub's reasonable control, including force majeure events; or (iv) Customer’s equipment, services, or other technology.

## Service Credits Redemption

If GitHub does not meet this SLA, Customer may redeem Service Credits only upon written request to GitHub within thirty (30) days of the end of the calendar quarter. Written requests for Service Credits redemption and GitHub Enterprise Cloud custom monthly or quarterly reports should be sent to GitHub using the contact form available at [GitHub Support](https://support.github.com/).

Service Credits may take the form of a refund or credit to Customer’s account, cannot be exchanged into a cash amount, are limited to a maximum of ninety (90) days of paid service per calendar quarter, require Customer to have paid any outstanding invoices, and expire upon termination of Customer’s agreement with GitHub. Service Credits are the sole and exclusive remedy for any failure by GitHub to meet any obligations in this SLA.
