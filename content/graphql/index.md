---
title: GitHub GraphQL API
intro: 'You can use the {% data variables.product.prodname_dotcom %} GraphQL API to create precise and flexible queries for the data you need to integrate with {% data variables.product.prodname_dotcom %}.'
shortTitle: GraphQL API
redirect_from:
  - /v4
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
children:
  - /overview
  - /reference
  - /guides
---

CLI
Manual
Release notes
gh api
Make an authenticated GitHub API request

Synopsis
Makes an authenticated HTTP request to the GitHub API and prints the response.

The endpoint argument should either be a path of a GitHub API v3 endpoint, or "graphql" to access the GitHub API v4.

Placeholder values "{owner}", "{repo}", and "{branch}" in the endpoint argument will get replaced with values from the repository of the current directory. Note that in some shells, for example PowerShell, you may need to enclose any value that contains "{...}" in quotes to prevent the shell from applying special meaning to curly braces.

The default HTTP request method is "GET" normally and "POST" if any parameters were added. Override the method with --method.

Pass one or more --raw-field values in "key=value" format to add string parameters to the request payload. To add non-string parameters, see --field below. Note that adding request parameters will automatically switch the request method to POST. To send the parameters as a GET query string instead, use --method GET.

The --field flag behaves like --raw-field with magic type conversion based on the format of the value:

literal values "true", "false", "null", and integer numbers get converted to appropriate JSON types;
placeholder values "{owner}", "{repo}", and "{branch}" get populated with values from the repository of the current directory;
if the value starts with "@", the rest of the value is interpreted as a filename to read the value from. Pass "-" to read from standard input.
For GraphQL requests, all fields other than "query" and "operationName" are interpreted as GraphQL variables.

Raw request body may be passed from the outside via a file specified by --input. Pass "-" to read from standard input. In this mode, parameters specified via --field flags are serialized into URL query parameters.

In --paginate mode, all pages of results will sequentially be requested until there are no more pages of results. For GraphQL requests, this requires that the original query accepts an $endCursor: String variable and that it fetches the pageInfo{ hasNextPage, endCursor } set of fields from a collection.

gh api <endpoint> [flags]
Examples
# list releases in the current repository
$ gh api repos/{owner}/{repo}/releases

# post an issue comment
$ gh api repos/{owner}/{repo}/issues/123/comments -f body='Hi from CLI'

# add parameters to a GET request
$ gh api -X GET search/issues -f q='repo:cli/cli is:open remote'

# set a custom HTTP header
$ gh api -H 'Accept: application/vnd.github.v3.raw+json' ...

# opt into GitHub API previews
$ gh api --preview baptiste,nebula ...

# print only specific fields from the response
$ gh api repos/{owner}/{repo}/issues --jq '.[].title'

# use a template for the output
$ gh api repos/{owner}/{repo}/issues --template \
  ' ()\n'

# list releases with GraphQL
$ gh api graphql -F owner='{owner}' -F name='{repo}' -f query='
  query($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
      releases(last: 3) {
        nodes { tagName }
      }
    }
  }
'

# list all repositories for a user
$ gh api graphql --paginate -f query='
  query($endCursor: String) {
    viewer {
      repositories(first: 100, after: $endCursor) {
        nodes { nameWithOwner }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
'

Options
      --cache duration        Cache the response, e.g. "3600s", "60m", "1h"
  -F, --field key=value       Add a typed parameter in key=value format
  -H, --header key:value      Add a HTTP request header in key:value format
      --hostname string       The GitHub hostname for the request (default "github.com")
  -i, --include               Include HTTP response headers in the output
      --input file            The file to use as body for the HTTP request
  -q, --jq string             Query to select values from the response using jq syntax
  -X, --method string         The HTTP method for the request (default "GET")
      --paginate              Make additional HTTP requests to fetch all pages of results
  -p, --preview strings       Opt into GitHub API previews
  -f, --raw-field key=value   Add a string parameter in key=value format
      --silent                Do not print the response body
  -t, --template string       Format the response using a Go template
Options inherited from parent commands
      --help   Show help for command
Product
Features
Security
Enterprise
Customer stories
Pricing
Resources
Platform
Developer API
Partners
Atom
Electron
GitHub Desktop
Support
Help
Community Forum
Professional Services
Learning Lab
Status
Contact GitHub
Company
About
Blog
Careers
Press
Shop
© 2021 GitHub, Inc.
Terms
Privacy---
title: Webhook events for the GitHub Marketplace API
intro: 'A {% data variables.product.prodname_marketplace %} app receives information about changes to a user''s plan from the Marketplace purchase event webhook. A Marketplace purchase event is triggered when a user purchases, cancels, or changes their payment plan.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
topics:
  - Marketplace
shortTitle: Webhook events
---
## {% data variables.product.prodname_marketplace %} purchase webhook payload

Webhooks `POST` requests have special headers. See "[Webhook delivery headers](/webhooks/event-payloads/#delivery-headers)" for more details. GitHub doesn't resend failed delivery attempts. Ensure your app can receive all webhook payloads sent by GitHub.

Cancellations and downgrades take effect on the first day of the next billing cycle. Events for downgrades and cancellations are sent when the new plan takes effect at the beginning of the next billing cycle. Events for new purchases and upgrades begin immediately. Use the `effective_date` in the webhook payload to determine when a change will begin.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Each `marketplace_purchase` webhook payload will have the following information:


Key | Type | Description
----|------|-------------
`action` | `string` | The action performed to generate the webhook. Can be `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled`, or `changed`. For more information, see the example webhook payloads below. **Note:** The `pending_change` and `pending_change_cancelled` payloads contain the same keys as shown in the [`changed` payload example](#example-webhook-payload-for-a-changed-event).
`effective_date` | `string` | The date the `action` becomes effective.
`sender` | `object` | The person who took the `action` that triggered the webhook.
`marketplace_purchase` | `object` | The {% data variables.product.prodname_marketplace %} purchase information.

The `marketplace_purchase` object has the following keys:

Key | Type | Description
----|------|-------------
`account` | `object` | The `organization` or `user` account associated with the subscription. Organization accounts will include `organization_billing_email`, which is the organization's administrative email address. To find email addresses for personal accounts, you can use the [Get the authenticated user](/rest/reference/users#get-the-authenticated-user) endpoint.
`billing_cycle` | `string` | Can be `yearly` or `monthly`. When the `account` owner has a free GitHub plan and has purchased a free {% data variables.product.prodname_marketplace %} plan, `billing_cycle` will be `nil`.
`unit_count`  | `integer` | Number of units purchased.
`on_free_trial` | `boolean` | `true` when the `account` is on a free trial.
`free_trial_ends_on` | `string` | The date the free trial will expire.
`next_billing_date` | `string` | The date that the next billing cycle will start. When the `account` owner has a free GitHub.com plan and has purchased a free {% data variables.product.prodname_marketplace %} plan, `next_billing_date` will be `nil`.
`plan` | `object` | The plan purchased by the `user` or `organization`.

The `plan` object has the following keys:

Key | Type | Description
----|------|-------------
`id` | `integer` | The unique identifier for this plan.
`name` | `string` | The plan's name.
`description` | `string` | This plan's description.
`monthly_price_in_cents` | `integer` | The monthly price of this plan in cents (US currency). For example, a listing that costs 10 US dollars per month will be 1000 cents.
`yearly_price_in_cents` | `integer` | The yearly price of this plan in cents (US currency). For example, a listing that costs 100 US dollars per month will be 10000 cents.
`price_model` | `string` | The pricing model for this listing. Can be one of `flat-rate`, `per-unit`, or `free`.
`has_free_trial` | `boolean` | `true` when this listing offers a free trial.
`unit_name` | `string` | The name of the unit. If the pricing model is not `per-unit` this will be `nil`.
`bullet` | `array of strings` | The names of the bullets set in the pricing plan.

<br/>

### Example webhook payload for a `purchased` event
This example provides the `purchased` event payload.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Example webhook payload for a `changed` event

Changes in a plan include upgrades and downgrades. This example represents the `changed`,`pending_change`, and `pending_change_cancelled` event payloads. The action identifies which of these three events has occurred.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Example webhook payload for a `cancelled` event

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}content/actions/learn-github-actions/introduction-to-github-actions.md.gitignorehttps://cloud.google.com/maps-platform/terms/?_ga=2.153556856.1738386131.1626394962-1896555879.1626392430#3.-license.
