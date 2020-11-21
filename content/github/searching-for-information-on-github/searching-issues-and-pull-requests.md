---
title: Searching issues and pull requests
intro: 'You can search for issues and pull requests on {% data variables.product.product_name %} and narrow the results using these search qualifiers in any combination.'
redirect_from:
  - /articles/searching-issues/
  - /articles/searching-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

You can search for issues and pull requests globally across all of {% data variables.product.product_name %}, or search for issues and pull requests within a particular organization. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."

{% tip %}

**Tips:**{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  - This article contains example searches on the {% data variables.product.prodname_dotcom %}.com website, but you can use the same search filters on {% data variables.product.product_location %}.{% endif %}
  - For a list of search syntaxes that you can add to any search qualifier to further improve your results, see "[Understanding the search syntax](/articles/understanding-the-search-syntax)".
  - Use quotations around multi-word search terms. For example, if you want to search for issues with the label "In progress," you'd search for `label:"in progress"`. Search is not case sensitive.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

### Search only issues or pull requests

By default, {% data variables.product.product_name %} search will return both issues and pull requests. However, you can restrict search results to just issues or pull requests using the `type` or `is` qualifier.

| Qualifier  | Example
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) matches pull requests with the word "cat."
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) matches issues that contain the word "github," and have a comment by @defunkt.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) matches pull requests with the word "event."
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) matches closed issues with the label "bug."

### Search by the title, body, or comments

With the `in` qualifier you can restrict your search to the title, body, comments, or any combination of these. When you omit this qualifier, the title, body, and comments are all searched.

| Qualifier     | Example
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) matches issues with "warning" in their title.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) matches issues with "error" in their title or body.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) matches issues mentioning "shipit" in their comments.

### Search within a user's or organization's repositories

To search issues and pull requests in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier. To search issues and pull requests in a specific repository, you can use the `repo` qualifier.

| Qualifier        | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) matches issues with the word "ubuntu" from repositories owned by @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) matches issues in repositories owned by the GitHub organization.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) matches issues from @mozilla's shumway project that were created before March 2012.

### Search by open or closed state

You can filter issues and pull requests based on whether they're open or closed using the `state` or `is` qualifier.

| Qualifier        | Example
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) matches open issues that mention @vmg with the word "libraries."
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) matches closed issues with the word "design" in the body.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) matches open issues with the word "performance."
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) matches closed issues and pull requests with the word "android."

### Filter by repository visibility

You can filter by the visibility of the repository containing the issues and pull requests using the `is` qualifier. For more information, see "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualifier  | Example
| ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
| `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) matches issues and pull requests in public repositories.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) matches issues and pull requests in internal repositories.{% endif %}
| `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) matches issues and pull requests that contain the word "cupcake" in private repositories you can access.

### Search by author

The `author` qualifier finds issues and pull requests created by a certain user or integration account.

| Qualifier     | Example
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) matches issues and pull requests with the word "cool" that were created by @gjtorikian.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) matches issues written by @mdo that contain the word "bootstrap" in the body.
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) matches issues created by the integration account named "robot."

### Search by assignee

The `assignee` qualifier finds issues and pull requests that are assigned to a certain user. You cannot search for issues and pull requests that have _any_ assignee, however, you can search for [issues and pull requests that have no assignee](#search-by-missing-metadata).

| Qualifier     | Example
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) matches issues and pull requests in libgit2's project libgit2 that are assigned to @vmg.

### Search by mention

The `mentions` qualifier finds issues that mention a certain user. For more information, see "[Mentioning people and teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)."

| Qualifier     | Example
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [**resque mentions:defunkt**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) matches issues with the word "resque" that mention @defunkt.

### Search by team mention

For organizations and teams you belong to, you can use the `team` qualifier to find issues or pull requests that @mention a certain team within that organization. Replace these sample names with your organization and team name to perform a search.

| Qualifier        | Example
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **team:jekyll/owners** matches issues where the `@jekyll/owners` team is mentioned.
| | **team:myorg/ops is:open is:pr** matches open pull requests where the `@myorg/ops` team is mentioned.

### Search by commenter

The `commenter` qualifier finds issues that contain a comment from a certain user.

| Qualifier        | Example
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) matches issues in repositories owned by GitHub, that contain the word "github," and have a comment by @defunkt.

### Search by a user that's involved in an issue or pull request

You can use the `involves` qualifier to find issues that in some way involve a certain user. The `involves` qualifier is a logical OR between the `author`, `assignee`, `mentions`, and `commenter` qualifiers for a single user. In other words, this qualifier finds issues and pull requests that were either created by a certain user, assigned to that user, mention that user, or were commented on by that user.

| Qualifier        | Example
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** matches issues either @defunkt or @jlord are involved in.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) matches issues @mdo is involved in that do not contain the word "bootstrap" in the body.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Search for linked issues and pull requests
You can narrow your results to only include issues that are linked to a pull request by a closing reference, or pull requests that are linked to an issue that the pull request may close.

| Qualifier | Example |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) matches open issues in the `desktop/desktop` repository that are linked to a pull request by a closing reference. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) matches closed pull requests in the `desktop/desktop` repository that were linked to an issue that the pull request may have closed. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) matches open issues in the `desktop/desktop` repository that are not linked to a pull request by a closing reference. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) matches open pull requests in the `desktop/desktop` repository that are not linked to an issue that the pull request may close. |{% endif %}

### Search by label

You can narrow your results by labels, using the `label` qualifier. Since issues can have multiple labels, you can list a separate qualifier for each issue.

| Qualifier        | Example
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) matches issues with the label "help wanted" that are in Ruby repositories.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) matches issues with the word "broken" in the body, that lack the label "bug", but *do* have the label "priority."
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) matches issues with the labels "bug" and "resolved."

### Search by milestone

The `milestone` qualifier finds issues or pull requests that are a part of a [milestone](/articles/about-milestones) within a repository.

| Qualifier        | Example
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) matches issues that are in a milestone named "overhaul."
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) matches issues that are in a milestone named "bug fix."

### Search by project board

You can use the `project` qualifier to find issues that are associated with a specific [project board](/articles/about-project-boards/) in a repository or organization. You must search project boards by the project board number. You can find the project board number at the end of a project board's URL.

| Qualifier        | Example
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** matches issues owned by GitHub that are associated with the organization's project board 57.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** matches issues that are associated with project board 1 in @github's linguist repository.

### Search by commit status

You can filter pull requests based on the status of the commits. This is especially useful if you are using [the Status API](/v3/repos/statuses/) or a CI service.

| Qualifier        | Example
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) matches pull requests opened into Go repositories where the status is pending.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) matches open pull requests with the word "finally" in the body with a successful status.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) matches pull requests opened on May 2015 with a failed status.

### Search by commit SHA

If you know the specific SHA hash of a commit, you can use it to search for pull requests that contain that SHA. The SHA syntax must be at least seven characters.

| Qualifier        | Example
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) matches pull requests with a commit SHA that starts with `e1109ab`.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) matches merged pull requests with a commit SHA that starts with `0eff326d6213c`.

### Search by branch name

You can filter pull requests based on the branch they came from (the "head" branch) or the branch they are merging into (the "base" branch).

| Qualifier        | Example
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) matches pull requests opened from branch names beginning with the word "change" that are closed.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) matches pull requests that are being merged into the `gh-pages` branch.

### Search by language

With the `language` qualifier you can search for issues and pull requests within repositories that are written in a certain language.

| Qualifier        | Example
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) matches open issues that are in Ruby repositories.

### Search by number of comments

You can use the `comments` qualifier along with [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax) to search by the number of comments.

| Qualifier        | Example
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3C100&type=Issues) matches closed issues with more than 100 comments.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) matches issues with comments ranging from 500 to 1,000.

### Search by number of interactions

You can filter issues and pull requests by the number of interactions with the `interactions` qualifier along with [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax). The interactions count is the number of reactions and comments on an issue or pull request.

| Qualifier        | Example
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) matches pull requests or issues with more than 2000 interactions.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) matches pull requests or issues with interactions ranging from 500 to 1,000.

### Search by number of reactions

You can filter issues and pull requests by the number of reactions using the `reactions` qualifier along with [greater than, less than, and range qualifiers](/articles/understanding-the-search-syntax).

| Qualifier        | Example
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) matches issues with more than 1000 reactions.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) matches issues with reactions ranging from 500 to 1,000.

### Search for draft pull requests
You can filter for draft pull requests. For more information, see "[About pull requests](/articles/about-pull-requests#draft-pull-requests)."

| Qualifier        | Example
| ------------- | -------------{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) matches draft pull requests.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) matches pull requests that are ready for review.{% else %}
| `is:draft` | [**is:draft**](https://github.com/search?q=is%3Adraft) matches draft pull requests.{% endif %}

### Search by pull request review status and reviewer

You can filter pull requests based on their [review status](/articles/about-pull-request-reviews) (_none_, _required_, _approved_, or _changes requested_), by reviewer, and by requested reviewer.

| Qualifier        | Example
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) matches pull requests that have not been reviewed.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) matches pull requests that require a review before they can be merged.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) matches pull requests that a reviewer has approved.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) matches pull requests in which a reviewer has asked for changes.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) matches pull requests reviewed by a particular person.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) matches pull requests where a specific person is requested for review. Requested reviewers are no longer listed in the search results after they review a pull request. If the requested person is on a team that is requested for review, then review requests for that team will also appear in the search results.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) matches pull requests that have review requests from the team `atom/design`. Requested reviewers are no longer listed in the search results after they review a pull request.

### Search by when an issue or pull request was created or last updated

You can filter issues based on times of creation, or when they were last updated. For issue creation, you can use the `created` qualifier; to find out when an issue was last updated, you'll want to use the `updated` qualifier.

Both take a date as a parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier        | Example
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) matches open issues that were created before 2011 in repositories written in C#.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) matches issues with the word "weird" in the body that were updated after February 2013.

### Search by when an issue or pull request was closed

You can filter issues and pull requests based on when they were closed, using the `closed` qualifier.

This qualifier takes a date as its parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier        | Example
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) matches issues and pull requests in Swift that were closed after June 11, 2014.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) matches issues and pull requests with the word "data" in the body that were closed before October 2012.

### Search by when a pull request was merged

You can filter pull requests based on when they were merged, using the `merged` qualifier.

This qualifier takes a date as its parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier        | Example
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [**language:javascript merged:<2011-01-01**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) matches pull requests in JavaScript repositories that were merged before 2011.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) matches pull requests in Ruby with the word "fast" in the title that were merged after May 2014.

### Search based on whether a pull request is merged or unmerged

You can filter pull requests based on whether they're merged or unmerged using the `is` qualifier.

| Qualifier        | Example
| ------------- | -------------
| `is:merged` | [**bugfix is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) matches merged pull requests with the word "bugfix."
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) matches closed issues and pull requests with the word "error."

### Search based on whether a repository is archived

The `archived` qualifier filters your results based on whether an issue or pull request is in an archived repository.

| Qualifier     | Example
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) matches issues and pull requests that contain the word "GNOME" in archived repositories you have access to.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) matches issues and pull requests that contain the word "GNOME" in unarchived repositories you have access to.

### Search based on whether a conversation is locked

You can search for an issue or pull request that has a locked conversation using the `is` qualifier. For more information, see "[Locking conversations](/articles/locking-conversations)."

| Qualifier        | Example
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) matches issues or pull requests with the words "code of conduct" that have a locked conversation in a repository that is not archived.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) matches issues or pull requests with the words "code of conduct" that have an unlocked conversation in a repository that is not archived.

### Search by missing metadata

You can narrow your search to issues and pull requests that are missing certain metadata, using the `no` qualifier. That metadata includes:

* Labels
* Milestones
* Assignees
* Projects

| Qualifier        | Example
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) matches issues and pull requests with the word "priority" that also don't have any labels.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) matches issues not associated with a milestone containing the word "sprint."
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) matches issues not associated with an assignee, containing the word "important," and in Java repositories.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) matches issues not associated with a project board, containing the word "build."

### Further reading

- "[Sorting search results](/articles/sorting-search-results/)"
