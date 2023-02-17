**---
**#Name :slate.yml
mod.mtml :
On ::starts''
 Check failure on line 3 in .github/workflows/Rust.yml

GitHub Actions
/ .github/workflows/Rust.yml
Invalid workflow file
You have an error in your yaml syntax on line 3
starts'' :GLOW4 ::BEGIN :'::'Run:'#Test'@ci'' :run-on :'Name ::'Run'' :
-on:
  push:
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: anishathalye/proof-html@v1.1.0
        with:
          directory: ./
 [![Auto Assign](https://github.com/https-www-bitore-net/demo-repository/actions/workflows/auto-assign.yml/badge.svg?branch=Main.yml)](https://github.com/https-www-bitore-net/demo-repository/actions/workflows/auto-assign.yml)
Search logs
1s
##[debug]Starting: Set up job
Current runner version: '2.301.1'
Operating System
Runner Image
Runner Image Provisioner
GITHUB_TOKEN Permissions
Secret source: Actions
##[debug]Primary repository: https-www-bitore-net/demo-repository
Prepare workflow directory
##[debug]Creating pipeline directory: '/home/runner/work/demo-repository'
##[debug]Creating workspace directory: '/home/runner/work/demo-repository/demo-repository'
##[debug]Update context data
##[debug]Evaluating job-level environment variables
##[debug]Evaluating job container
##[debug]Evaluating job service containers
##[debug]Evaluating job defaults
Prepare all required actions
Getting action download info
Download action repository 'wow-actions/auto-assign@v1' (SHA:707ec486377e28a595619469e26b375d8746b330)
##[debug]Download 'https://api.github.com/repos/wow-actions/auto-assign/tarball/707ec486377e28a595619469e26b375d8746b330' to '/home/runner/work/_actions/_temp_b511ebcf-63c1-4305-8674-0253f9fbcf13/01abee82-ec57-4330-9447-86d5db93791e.tar.gz'
##[debug]Unwrap 'wow-actions-auto-assign-707ec48' to '/home/runner/work/_actions/wow-actions/auto-assign/v1'
##[debug]Archive '/home/runner/work/_actions/_temp_b511ebcf-63c1-4305-8674-0253f9fbcf13/01abee82-ec57-4330-9447-86d5db93791e.tar.gz' has been unzipped into '/home/runner/work/_actions/wow-actions/auto-assign/v1'.
##[debug]action.yml for action: '/home/runner/work/_actions/wow-actions/auto-assign/v1/action.yml'.
##[debug]Set step '__wow-actions_auto-assign' display name to: 'Run wow-actions/auto-assign@v1'
Complete job name: run
##[debug]Collect running processes for tracking orphan processes.
##[debug]Finishing: Set up job
1s
##[debug]Evaluating condition for step: 'Run wow-actions/auto-assign@v1'
##[debug]Evaluating: success()
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Run wow-actions/auto-assign@v1
##[debug]Loading inputs
##[debug]Evaluating: secrets.GITHUB_TOKEN
##[debug]Evaluating Index:
##[debug]..Evaluating secrets:
##[debug]..=> Object
##[debug]..Evaluating String:
##[debug]..=> 'GITHUB_TOKEN'
##[debug]=> '***'
##[debug]Result: '***'
##[debug]Loading env
Run wow-actions/auto-assign@v1
##[debug]event: issues
##[debug]action: opened
(node:1620) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
##[debug]Load config from ".github/auto-assign.yml": 
##[debug]{
##[debug]  "addReviewers": true,
##[debug]  "addAssignees": "author",
##[debug]  "numberOfAssignees": 0,
##[debug]  "numberOfReviewers": 1,
##[debug]  "reviewers": [
##[debug]    "mowjoejoejoejoe"
##[debug]  ],
##[debug]  "assignees": [
##[debug]    "mowjoejoejoejoe"
##[debug]  ],
##[debug]  "skipKeywords": [
##[debug]    "wip"
##[debug]  ]
##[debug]}
##[debug]Assignees: [
##[debug]  "mowjoejoejoejoe"
##[debug]]
Error: HttpError: Resource not accessible by integration
Error: Resource not accessible by integration
##[debug]Node Action run completed with exit code 1
##[debug]Finishing: Run wow-actions/auto-assign@v1
.github/workflows/proof-html.yml → .github/workflows/slate.yml
@@ -1,5 +1,8 @@
name: Proof HTML
on:
#Name :slate.yml
mod.mtml :
On ::starts''
starts'' :GLOW4 ::BEGIN :'::'Run:'#Test'@ci'' :run-on :'Name ::'Run'' :
-on:
  push:
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: anishathalye/proof-html@v1.1.0
        with:
          directory: ./title: About billing for GitHub Actions
intro: 'If you want to use {% data variables.product.prodname_actions %} beyond the storage or minutes included in your account, you will be billed for additional usage.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
---
## About billing for {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% ifversion ghec %}
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_actions %} usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

Minutes reset every month, while storage usage does not.

### Included storage and minutes

{% ifversion actions-hosted-runners %} 
{% note %}

**Note**: Entitlement minutes cannot be used for Windows and Ubuntu runners over 2-cores. These runners will always be charged for, including in public repos. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)."

{% endnote %}
{% endif %}

|Product | Storage | Minutes (per month)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} for organizations | 500 MB | 2,000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50,000 |

Jobs that run on Windows and macOS runners that {% data variables.product.prodname_dotcom %} hosts consume minutes at 2 and 10 times the rate that jobs on Linux runners consume. For example, using 1,000 Windows minutes would consume 2,000 of the minutes included in your account. Using 1,000 macOS minutes, would consume 10,000 minutes included in your account.

### Minute multipliers

| Operating system | Minute multiplier |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

The storage used by a repository is the total storage used by {% data variables.product.prodname_actions %} artifacts and {% data variables.product.prodname_registry %}. Your storage cost is the total usage for all repositories owned by your account. For more information about pricing for  {% data variables.product.prodname_registry %}, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

 If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.008 USD per GB of storage per day and per-minute usage depending on the operating system used by the {% data variables.product.prodname_dotcom %}-hosted runner. {% data variables.product.prodname_dotcom %} rounds the minutes and partial minutes each job uses up to the nearest whole minute.

{% note %}

**Note:** Minute multipliers do not apply to the per-minute rates shown below.

{% endnote %}

### Per-minute rates

{% data reusables.billing.billing-standard-runners %}
{%- ifversion actions-hosted-runners %}
{% data reusables.billing.billing-hosted-runners %}
{%- endif %}

- The number of jobs you can run concurrently across all repositories in your user or organization account depends on your GitHub plan. For more information, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[AUTOTITLE](/actions/hosting-your-own-runners/about-self-hosted-runners#usage-limits)" for self-hosted runner usage limits.
- {% data reusables.user-settings.context_switcher %}
{% ifversion actions-hosted-runners %} 
- For {% data variables.actions.hosted_runner %}s, there is no additional cost for configurations that assign public static IP addresses to a {% data variables.actions.hosted_runner %}. For more information on {% data variables.actions.hosted_runner %}s, see "[AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners)."
- Entitlement minutes cannot be used for {% data variables.actions.hosted_runner %}s.
- The {% data variables.actions.hosted_runner %}s are not free for public repositories.
{% endif %}

## Calculating minute and storage spending

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

At the end of the month, {% data variables.product.prodname_dotcom %} calculates the cost of minutes and storage used over the amount included in your account.

### Sample minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 5,000 minutes could have a total storage and minute overage cost of $56 USD, depending on the operating systems used to run jobs.

- 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  - 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  - 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage during that month.

### Sample storage cost calculation

For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

Your {% data variables.product.prodname_actions %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

## About spending limits

{% data reusables.actions.actions-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
