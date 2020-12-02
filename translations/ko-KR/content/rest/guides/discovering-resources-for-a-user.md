---
title: Discovering resources for a user
intro: Learn how to find the repositories and organizations that your app can access for a user in a reliable way for your authenticated requests to the REST API.
redirect_from:
  - /guides/discovering-resources-for-a-user/
  - /v3/guides/discovering-resources-for-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

 

When making authenticated requests to the {% data variables.product.product_name %} API, applications often need to fetch the current user's repositories and organizations. In this guide, we'll explain how to reliably discover those resources.

To interact with the {% data variables.product.product_name %} API, we'll be using [Octokit.rb][octokit.rb]. You can find the complete source code for this project in the [platform-samples][platform samples] repository.

### 시작하기

If you haven't already, you should read the ["Basics of Authentication"][basics-of-authentication] guide before working through the examples below. The examples below assume that you have [registered an OAuth application][register-oauth-app] and that your [application has an OAuth token for a user][make-authenticated-request-for-user].

### Discover the repositories that your app can access for a user

In addition to having their own personal repositories, a user may be a collaborator on repositories owned by other users and organizations. Collectively, these are the repositories where the user has privileged access: either it's a private repository where the user has read or write access, or it's a public repository where the user has write access.

[OAuth scopes][scopes] and [organization application policies][oap] determine which of those repositories your app can access for a user. Use the workflow below to discover those repositories.

As always, first we'll require [GitHub's Octokit.rb][octokit.rb] Ruby library. Then we'll configure Octokit.rb to automatically handle [pagination][pagination] for us.

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Next, we'll pass in our application's [OAuth token for a given user][make-authenticated-request-for-user]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Then, we're ready to fetch the [repositories that our application can access for the user][list-repositories-for-current-user]:

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

### Discover the organizations that your app can access for a user

Applications can perform all sorts of organization-related tasks for a user. To perform these tasks, the app needs an [OAuth authorization][scopes] with sufficient permission. For example, the `read:org` scope allows you to [list teams][list-teams], and the `user` scope lets you [publicize the user’s organization membership][publicize-membership]. Once a user has granted one or more of these scopes to your app, you're ready to fetch the user’s organizations.

Just as we did when discovering repositories above, we'll start by requiring [GitHub's Octokit.rb][octokit.rb] Ruby library and configuring it to take care of [pagination][pagination] for us:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Next, we'll pass in our application's [OAuth token for a given user][make-authenticated-request-for-user] to initialize our API client:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Then, we can [list the organizations that our application can access for the user][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

#### Don’t rely on public organizations

If you've read the docs from cover to cover, you may have noticed an [API method for listing a user's public organization memberships][list-public-orgs]. Most applications should avoid this API method. This method only returns the user's public organization memberships, not their private organization memberships.

As an application, you typically want all of the user's organizations (public and private) that your app is authorized to access. The workflow above will give you exactly that.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
