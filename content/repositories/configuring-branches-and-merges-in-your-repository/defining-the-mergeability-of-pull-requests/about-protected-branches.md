---
Fetch
This documents the polyfillable parts of the WHATWG Fetch standard. See Caveats for notable exceptions.

Usage synopsis (use the argument links to find out more):

fetch(url, options).then(function(response) {
  // handle HTTP response
}, function(error) {
  // handle network error
})
More comprehensive usage example:

fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
}).then(function(response) {
  response.status     //=> number 100–599
  response.statusText //=> String
  response.headers    //=> Headers
  response.url        //=> String

  return response.text()
}, function(error) {
  error.message //=> String
})
Request
Synopsis: new Request(url, options)

Request represents a HTTP request to be performed via fetch(). Typically a Request doesn't need to be constructed manually, as it's instantiated internally when fetch() is called.

URL (Request or string)
The URL of the resource which is being fetched. Typically this is an absolute URL without the host component, e.g. "/path". If the URL has the host of another site, the request is performed in accordance to CORS.

Any non-Request object will be converted to a String, making it possible to pass an instance of URL, for example.

A request can be initialized using another instance of Request in place of the URL. In that case, the URL and other options are inherited from the provided Request object.

Options
method (String) - HTTP request method. Default: "GET"
body (String, body types) - HTTP request body
headers (Object, Headers) - Default: {}
credentials (String) - Authentication credentials mode. Default: "omit"
"omit" - don't include authentication credentials (e.g. cookies) in the request
"same-origin" - include credentials in requests to the same site
"include" - include credentials in requests to all sites
Body types
Class	Default Content-Type
String	text/plain;charset=UTF-8
URLSearchParams	application/x-www-form-urlencoded;charset=UTF-8
FormData	multipart/form-data
Blob	inherited from the blob.type property
ArrayBuffer	
TypedArray	
DataView	
Other data structures need to be encoded beforehand as one of the above types. For instance, JSON.stringify(data) can be used to serialize a data structure into a JSON string.

Note that HTTP servers often require that requests that are posted with a body also specify their type via a Content-Type request header.

Response
Response represents a HTTP response from the server. Typically a Response is not constructed manually, but is available as argument to the resolved promise callback.

Properties
status (number) - HTTP response code in the 100–599 range
statusText (String) - Status text as reported by the server, e.g. "Unauthorized"
ok (boolean) - True if status is HTTP 2xx
headers (Headers)
url (String)
Body methods
Each of the methods to access the response body returns a Promise that will be resolved when the associated data type is ready.

text() - yields the response text as String
json() - yields the result of JSON.parse(responseText)
blob() - yields a Blob
arrayBuffer() - yields an ArrayBuffer
formData() - yields FormData that can be forwarded to another request
Other response methods
clone()
Response.error()
Response.redirect()
Headers
Synopsis: new Headers(hash)

Headers represents a set of request/response HTTP headers. It allows for case-insensitive lookup of header by name, as well as merging multiple values of a single header.

Methods
has(name) (boolean)
get(name) (String)
set(name, value)
append(name, value)
delete(name)
forEach(function(value, name){ ... }, [thisContext])
Error
If there is a network error or another reason why the HTTP request couldn't be fulfilled, the fetch() promise will be rejected with a reference to that error.

Note that the promise won't be rejected in case of HTTP 4xx or 5xx server responses. The promise will be resolved just as it would be for HTTP 2xx. Inspect the response.status number within the resolved callback to add conditional handling of server errors to your code.


fetch(...).then(function(response) {
  if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
})
Caveats
The whatwg-fetch polyfill isn't able nor does it aim to implement the entire WHATWG Fetch standard, since some of the standard features would be non-trivial or otherwise unfeasible to implement. Notable examples include:

Inability to set the redirect mode
Inability to change the cache directive
Inability to disable same-origin cookies
title: About protected branches
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule.

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{% data reusables.repositories.branch-rules-example %} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{% data reusables.pull_requests.you-can-auto-merge %}

## About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
- [Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
- [Require status checks before merging](#require-status-checks-before-merging)
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
- [Require conversation resolution before merging](#require-conversation-resolution-before-merging){% endif %}
- [Require signed commits](#require-signed-commits)
- [Require linear history](#require-linear-history)
{% ifversion fpt or ghec %}
- [Require merge queue](#require-merge-queue)
{% endif %}
- [Include administrators](#include-administrators)
- [Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
- [Allow force pushes](#allow-force-pushes)
- [Allow deletions](#allow-deletions)

For more information on how to set up branch protection, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

### Require pull request reviews before merging

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. For information about the base branch, see "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

### Require status checks before merging

Required status checks ensure that all required CI tests are passing before collaborators can make changes to a protected branch. Required status checks can be checks or statuses. For more information, see "[About status checks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)."

Before you can enable required status checks, you must configure the repository to use the status API. For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. After all required status checks pass, any commits must either be pushed to another branch and then merged or pushed directly to the protected branch.

Any person or integration with write permissions to a repository can set the state of any status check in the repository{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}, but in some cases you may only want to accept a status check from a specific {% data variables.product.prodname_github_app %}. When you add a required status check, you can select an app that has recently set this check as the expected source of status updates.{% endif %} If the status is set by any other person or integration, merging won't be allowed. If you select "any source", you can still manually verify the author of each status, listed in the merge box.

You can set up required status checks to either be "loose" or "strict." The type of required status check you choose determines whether your branch is required to be up to date with the base branch before merging.

| Type of required status check | Setting | Merge requirements | Considerations |
| --- | --- | --- | --- |
| **Strict** | The **Require branches to be up to date before merging** checkbox is checked. | The branch **must** be up to date with the base branch before merging. | This is the default behavior for required status checks. More builds may be required, as you'll need to bring the head branch up to date after other collaborators merge pull requests to the protected base branch.|
| **Loose** | The **Require branches to be up to date before merging** checkbox is **not** checked. | The branch **does not** have to be up to date with the base branch before merging. | You'll have fewer required builds, as you won't need to bring the head branch up to date after other collaborators merge pull requests. Status checks may fail after you merge your branch if there are incompatible changes with the base branch. |
| **Disabled** | The **Require status checks to pass before merging** checkbox is **not** checked. | The branch has no merge restrictions. | If required status checks aren't enabled, collaborators can merge the branch at any time, regardless of whether it is up to date with the base branch. This increases the possibility of incompatible changes.

For troubleshooting information, see "[Troubleshooting required status checks](/github/administering-a-repository/troubleshooting-required-status-checks)."

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### Require conversation resolution before merging

Requires all comments on the pull request to be resolved before it can be merged to a protected branch. This ensures that all comments are addressed or acknowledged before merge.
{% endif %}

### Require signed commits

When you enable required commit signing on a branch, contributors {% ifversion fpt or ghec %}and bots{% endif %} can only push commits that have been signed and verified to the branch. For more information, see "[About commit signature verification](/articles/about-commit-signature-verification)."

{% note %}

{% ifversion fpt or ghec %}
**Notes:** 

* If you have enabled vigilant mode, which indicates that your commits will always be signed, any commits that {% data variables.product.prodname_dotcom %} identifies as "Partially verified" are permitted on branches that require signed commits. For more information about vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."
* If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% else %}
**Note:** If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.
{% endif %}

{% endnote %}

You can always push local commits to the branch if the commits are signed and verified. {% ifversion fpt or ghec %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% ifversion fpt or ghec %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)."

{% ifversion fpt or ghec %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

### Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the branch. This means that any pull requests merged into the protected branch must use a squash merge or a rebase merge. A strictly linear commit history can help teams reverse changes more easily. For more information about merge methods, see "[About pull request merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

Before you can require a linear commit history, your repository must allow squash merging or rebase merging. For more information, see "[Configuring pull request merges](/github/administering-a-repository/configuring-pull-request-merges)."

{% ifversion fpt or ghec %}
### Require merge queue

{% data reusables.pull_requests.merge-queue-beta %}
{% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %}
{% data reusables.pull_requests.merge-queue-references %}

{% endif %}
### Include administrators

By default, protected branch rules do not apply to people with admin permissions to a repository. You can enable this setting to include administrators in your protected branch rules.

### Restrict who can push to matching branches

{% ifversion fpt or ghec %}
You can enable branch restrictions if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings. When status checks are required, the people, teams, and apps that have permission to push to a protected branch will still be prevented from merging if the required checks fail. People, teams, and apps that have permission to push to a protected branch will still need to create a pull request when pull requests are required.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with write access to a repository. People and apps with admin permissions to a repository are always able to push to a protected branch.

### Allow force pushes

{% ifversion fpt or ghec %}
By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. When you enable force pushes to a protected branch, you can choose one of two groups who can force push:

1. Allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
1. Allow only specific people or teams to force push to the branch.

If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.

{% else %}
By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. When you enable force pushes to a protected branch, anyone with at least write permissions to the repository can force push to the branch, including those with admin permissions. If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.
{% endif %}

Enabling force pushes will not override any other branch protection rules. For example, if a branch requires a linear commit history, you cannot force push merge commits to that branch.

{% ifversion ghes or ghae %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. For more information, see "[Blocking force pushes to repositories owned by a user account or organization](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

If a site administrator has blocked force pushes to the default branch only, you can still enable force pushes for any other protected branch.{% endif %}

### Allow deletions

By default, you cannot delete a protected branch. When you enable deletion of a protected branch, anyone with at least write permissions to the repository can delete the branch.
