---
title: Discovering resources for a user
intro: Learn how to find the repositories and organizations that your app can access for a user in a reliable way for your authenticated requests to the REST API.
redirect_from:
  - /guides/discovering-resources-for-a-user
  - /v3/guides/discovering-resources-for-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
shortTitle: Discover resources for a user
---



When making authenticated requests to the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, applications often need to fetch the current user's repositories and organizations. In this guide, we'll explain how to reliably discover those resources.

To interact with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, we'll be using [Octokit.rb](https://github.com/octokit/octokit.rb). You can find the complete source code for this project in the [platform-samples](https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user) repository.

## Getting started

If you haven't already, you should read the "[Basics of Authentication](/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app)" guide before working through the examples below. The examples below assume that you have [registered an {% data variables.product.prodname_oauth_app %}](/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#registering-your-app) and that your [application has an OAuth token for a user](/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#making-authenticated-requests).

## Discover the repositories that your app can access for a user

In addition to having their own personal repositories, a user may be a collaborator on repositories owned by other users and organizations. Collectively, these are the repositories where the user has privileged access: either it's a private repository where the user has read or write access, or it's {% ifversion fpt %}a public{% elsif ghec or ghes %}a public or internal{% endif %} repository where the user has write access.

[OAuth scopes](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) and [organization application policies](https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/) determine which of those repositories your app can access for a user. Use the workflow below to discover those repositories.

As always, first we'll require [GitHub's Octokit.rb](https://github.com/octokit/octokit.rb) Ruby library. Then we'll configure Octokit.rb to automatically handle pagination for us. For more information about pagination, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Next, we'll pass in our application's [OAuth token for a given user](/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#making-authenticated-requests):

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Then, we're ready to fetch the [repositories that our application can access for the user](/rest/repos/repos#list-repositories-for-the-authenticated-user):

``` ruby
client.repositories.each do |repository|
  full_name = repository[:full_name]
  has_push_access = repository[:permissions][:push]

  access_type = if has_push_access
                  "write"
                else
                  "read-only"
                end

  puts "User has #{access_type} access to #{full_name}."
end
```

## Discover the organizations that your app can access for a user

Applications can perform all sorts of organization-related tasks for a user. To perform these tasks, the app needs an [OAuth authorization](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) with sufficient permission. For example, the `read:org` scope allows you to [list teams](/rest/teams/teams#list-teams), and the `user` scope lets you [publicize the user’s organization membership](/rest/orgs/members#set-public-organization-membership-for-the-authenticated-user). Once a user has granted one or more of these scopes to your app, you're ready to fetch the user’s organizations.

Just as we did when discovering repositories above, we'll start by requiring [GitHub's Octokit.rb](https://github.com/octokit/octokit.rb) Ruby library and configuring it to take care of pagination for us. For more information about pagination, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Next, we'll pass in our application's [OAuth token for a given user](/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#making-authenticated-requests) to initialize our API client:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Then, we can [list the organizations that our application can access for the user](/rest/orgs/orgs#list-organizations-for-the-authenticated-user):

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Return all of the user's organization memberships

If you've read the docs from cover to cover, you may have noticed an [API method for listing a user's public organization memberships](/rest/orgs/orgs#list-organizations-for-a-user). Most applications should avoid this API method. This method only returns the user's public organization memberships, not their private organization memberships.

As an application, you typically want all of the user's organizations that your app is authorized to access. The workflow above will give you exactly that.
