---
title: Timezones and the REST API
shortTitle: Timezones
intro: 'Some REST API endpoints allow you to specify timezone information with your request.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
---

Some requests that create new data, such as creating a new commit, allow you to provide timezone information when specifying or generating timestamps.

Note that these rules apply only to data passed to the API, not to data returned by the API. Timestamps returned by the API are in UTC time, ISO 8601 format.

## Determining the timezone for a request

To determine timezone information for applicable API calls, we apply these rules in order of priority:

1. [Explicitly providing an ISO 8601 timestamp with timezone information](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
1. [Using the `Time-Zone` header](#using-the-time-zone-header)
1. [Using the last known timezone for the user](#using-the-last-known-timezone-for-the-user)
1. [Defaulting to UTC without other timezone information](#defaulting-to-utc-without-other-timezone-information)

### Explicitly providing an ISO 8601 timestamp with timezone information

For API calls that allow for a timestamp to be specified, we use that exact timestamp. These timestamps look something like `2014-02-27T15:05:06+01:00`.

An example of this is the API to manage commits. For more information, see "[AUTOTITLE](/rest/git/commits#create-a-commit)."

### Using the `Time-Zone` header

It is possible to supply a `Time-Zone` header, which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.rest_url %}/repos/github-linguist/linguist/contents/new_file.md
```

This means that we generate a timestamp for the moment your API call is made, in the timezone this header defines.

For example, the API to manage contents generates a git commit for each addition or change, and it uses the current time as the timestamp. For more information, see "[AUTOTITLE](/rest/repos/contents)." The `Time-Zone` header will determine the timezone used for generating that current timestamp.

### Using the last known timezone for the user

If no `Time-Zone` header is specified and you make an authenticated call to the API, we use the last known timezone for the authenticated user. The last known timezone is updated whenever you browse the {% data variables.product.product_name %} website.

### Defaulting to UTC without other timezone information

If the steps above don't result in any information, we use UTC as the timezone.
