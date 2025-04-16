Commit d5ba4a1
bdarnell
bdarnell
committed
on Nov 22, 2024
httputil: Fix quadratic performance of cookie parsing
Maliciously-crafted cookies can cause Tornado to
spend an unreasonable amount of CPU time and block
the event loop.

This change replaces the quadratic algorithm with
a more efficient one. The implementation is copied
from the Python 3.13 standard library (the
previous one was from Python 3.5).

Fixes CVE-2024-52804
See CVE-2024-7592 for a similar vulnerability in cpython.

Thanks to github.com/kexinoh for the report.
branch6.4(#3446)
stable(#3446)
·
v6.4.2*******************📛n.github/FUNDING.ymltr4200812
tr4200812 commented now
``` content/copilot/managing-copilot/configure-personal-Helpful resources
Contributing
Code of conduct
Security policy
GitHub Community Guidelines/configuring-github-copilot-in-the-cli.md https://github.com/watching

<!--
Help Community Status
GitHub.com 
GitHub header
Disruption with some GitHub services
Incident Report for GitHub
Subscribe to Updates
Update
We have an updated ETA on correcting all Copilot metrics API data: 20 hours. We won't post more updates here unless the ETA changes.
Posted 42 minutes ago. Apr 16, 2025 - 05:11 UTC
Update
We are working on correcting the Copilot metrics API source data from March 19th to April 14th. Currently, the API returns about 10% lower usage numbers than the reality. We don't have an ETA for the resolution at the moment.
Posted 4 hours ago. Apr 16, 2025 - 01:46 UTC
Update
The Copilot metrics API (https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-metrics?apiVersion=2022-11-28) now returns accurate data for April 15th. We're working on correcting the past 27 days, as we are under-reporting certain metrics from this time.
Posted 5 hours ago. Apr 16, 2025 - 00:41 UTC
Update
We'll have accurate data for April 15th in the next 60 minutes. We're still working on correcting the data for the additional 27 days before April 15th. The complete correction is estimated to take up to 7 days, but we're working to speed this up.

https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-metrics?apiVersion=2022-11-28 is the specific impacted API.
Posted 6 hours ago. Apr 15, 2025 - 23:33 UTC
Update
As we've made further progress on correcting the inconsistencies, we estimate it will take approximately a week for a full recovery. We are investigating options for speeding up the recovery, and we appreciate your patience as we work through this incident.
Posted 8 hours ago. Apr 15, 2025 - 21:45 UTC
Update
We are working on correcting the inconsistencies now, our next update we will provide an estimated time when the issue will be fully resolved.
Posted 11 hours ago. Apr 15, 2025 - 19:02 UTC
Update
We are currently experiencing degraded performance with our Copilot metrics API, which is temporarily causing partial inconsistencies in the data returned. Our engineering teams are actively working to restore full functionality. We understand the importance of timely updates and are prioritizing a resolution to ensure all systems are operating normally as quickly as possible.
Posted 12 hours ago. Apr 15, 2025 - 18:20 UTC
Investigating
We are currently investigating this issue.
Posted 12 hours ago. Apr 15, 2025 - 18:20 UTC
Current StatusPowered by Atlassian Statuspage
Subscribe to our developer newsletter
Get tips, technical guides, and best practices. Twice a month. Right in your inbox.

Subscribe
Product
Features
Enterprise
Copilot
Security
Pricing
Team
Resources
Roadmap
Compare GitHub
Platform
Developer API
Partners
Education
GitHub CLI
GitHub Desktop
GitHub Mobile
Support
Docs
Community Forum
Professional Services
Skills
Contact GitHub
Company
About
Customer stories
Blog
The ReadME Project
Careers
Newsroom
Inclusion
Social Impact
Shop
© 2025 GitHub, Inc.
Terms
Privacy (Updated 08/2022)Overview

Manage enterprise account

Installation

Configuration

Administer your instance

Identity and access management

Manage accounts and repositories

Upgrade your instance

Back up and restore

Policies

Monitor user activity

Monitor and manage your instance

GitHub Actions

Packages

Secure coding
Guides
Release notes
Releases
@tr4200812
Update index.md 
b06760f
content/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-the-cli.md
https://github.com/watching
Merge info
Review required
At least 1 approving review is required by reviewers with write access.

Some checks haven't completed yet
33 expected checks


pending checks
archives
archivesExpected — Waiting for status to be reported
Required
article-api
article-apiExpected — Waiting for status to be reported
Required
assets
assetsExpected — Waiting for status to be reported
Required
audit-logs
audit-logsExpected — Waiting for status to be reported
Required
automated-pipelines
automated-pipelinesExpected — Waiting for status to be reported
Required
changelogs
changelogsExpected — Waiting for status to be reported
Required
check-links
check-linksExpected — Waiting for status to be reported
Required
color-schemes
color-schemesExpected — Waiting for status to be reported
Required
content-linter
content-linterExpected — Waiting for status to be reported
Required
content-render
content-renderExpected — Waiting for status to be reported
Required
data-directory
data-directoryExpected — Waiting for status to be reported
Required
early-access
early-accessExpected — Waiting for status to be reported
Required
events
eventsExpected — Waiting for status to be reported
Required
fixtures
fixturesExpected — Waiting for status to be reported
Required
frame
frameExpected — Waiting for status to be reported
Required
ghes-releases
ghes-releasesExpected — Waiting for status to be reported
Required
github-apps
github-appsExpected — Waiting for status to be reported
Required
graphql
graphqlExpected — Waiting for status to be reported
Required
landings
landingsExpected — Waiting for status to be reported
Required
learning-track
learning-trackExpected — Waiting for status to be reported
Required
local-dev
local-devExpected — Waiting for status to be reported
Required
observability
observabilityExpected — Waiting for status to be reported
Required
playwright-tests (playwright-rendering)
playwright-tests (playwright-rendering)Expected — Waiting for status to be reported
Required
products
productsExpected — Waiting for status to be reported
Required
redirects
redirectsExpected — Waiting for status to be reported
Required
release-notes
release-notesExpected — Waiting for status to be reported
Required
rest
restExpected — Waiting for status to be reported
Required
search
searchExpected — Waiting for status to be reported
Required
secret-scanning
secret-scanningExpected — Waiting for status to be reported
Required
shielding
shieldingExpected — Waiting for status to be reported
Required
versions
versionsExpected — Waiting for status to be reported
Required
webhooks
webhooksExpected — Waiting for status to be reported
Required
workflows
workflowsExpected — Waiting for status to be reported
Required
Merging is blocked
At least 1 approving review is required by reviewers with write accessAll checks have passed
2 successful checks

CodeQL analysis / build (push) Successful in 2m
Details

Keep caches warm / keep-caches-warm (push) Successful in 1m
DetailsAll checks have passed
2 successful checks

CodeQL analysis / build (push) Successful in 2m
Details

Keep caches warm / keep-caches-warm (push) Successful in 1m
Detailshttps://github.com/github/docs/tree/b06760f3768e79745d9aa6b3152ce86f742f22f5<a href='https://codespaces.new/github/docs/tree/ed12e668ae93da911c493b5679d21b2a09f811d7'><img src='https://github.com/codespaces/badge.svg' alt='Open in GitHub Codespaces' style='max-width: 100%;'></a>Review required
At least 1 approving review is required by reviewers with write access.

Some checks haven't completed yet
33 expected checks


Merging is blocked
At least 1 approving review is required by reviewers with write access.Helpful resources
Contributing
Code of conduct
Security policy
GitHub Community Guidelineshttps://github.com/tr4200812/sourcegraph-public-snapshot/releases/tag/v5.6.185
