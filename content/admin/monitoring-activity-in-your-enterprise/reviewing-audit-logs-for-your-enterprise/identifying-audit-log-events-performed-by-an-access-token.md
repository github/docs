---
title: Identifying audit log events performed by an access token
shortTitle: Identify events by token
intro: 'You can identify the actions performed by a specific {% data variables.product.pat_generic %} or OAuth token in your enterprise.'
versions:
  feature: token-audit-log
---

## About token data in the audit log

In your enterprise's audit log, for any actions that were performed using a {% data variables.product.pat_generic %} or OAuth application for authentication, the event data will show the authentication method used and the SHA-256 hash of the token.

If you learn that a token was compromised, you can understand the actions taken by the compromised token by searching your enterprise's audit log for all events associated with that token.

Hashed token values are not included when you export the audit log.

## Searching for events associated with a token

When searching for events associated with a specific token, you can use the UI or REST API. In either case, you will need to know the SHA-256 hash of the token first.

### Generating a SHA-256 hash value for a token

If you only have a raw token value, you'll need to generate a SHA-256 hash before you can search for the token.

For MacOS and Linux, you can use `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, replacing TOKEN with the token value.

For Powershell, you can use the following script to return a SHA-256 hash for a given string.

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### Searching on {% data variables.product.prodname_dotcom %}

While searching the audit log on {% data variables.product.prodname_dotcom %}, include `hashed_token:"VALUE"` in your search query, replacing `VALUE` with the SHA-256 hash of the token.

{% note %}

**Note:** Make sure to wrap the hashed token value in quotation marks.

{% endnote %}

### Searching with the REST API

Before you can search for a token using the REST API, after you generate a SHA-256 hash, you also need to URI-escape the hash. Most major programming languages provide a utility for URI escaping. For example, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) encodes a string for JavaScript.

Then, include `hashed_token:"VALUE"` in your search phrase, replacing VALUE with the URI-escaped hash.

For example, if the name of the enterprise account is `octo-corp`, the following curl command would search @octo-corp's audit log for all events that are associated with the token whose URI-encoded SHA-256 hash is `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --header "Accept: application/vnd.github+json" --header "Authorization: Bearer YOUR-TOKEN" {% data reusables.rest-api.version-header %} 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"'
```

## Further reading

- "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)"
