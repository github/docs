---
title: Searching discussions
intro: 'You can search for discussions on {% data variables.product.product_name %} and narrow the results using search qualifiers.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
---

## About searching for discussions

You can search for discussions globally across all of {% data variables.product.product_name %}, or search for discussions within a particular organization or repository. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% data reusables.search.syntax_tips %}

## Search by the title, body, or comments

With the `in` qualifier you can restrict your search for discussions to the title, body, or comments. You can also combine qualifiers to search a combination of title, body, or comments. When you omit the `in` qualifier, {% data variables.product.product_name %} searches the title, body, and comments.

| Qualifier | Example |
| :- | :- |
| `in:title` | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) matches discussions with "welcome" in the title. |
| `in:body` | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) matches discussions with "onboard" in the title or body. |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) matches discussions with "thanks" in the comments for the discussion. |

## Search within a user's or organization's repositories

To search discussions in all repositories owned by a certain user or organization, you can use the  `user` or `org` qualifier. To search discussions in a specific repository, you can use the `repo` qualifier.

| Qualifier | Example |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) matches discussions with the word "feedback" from repositories owned by @octocat. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) matches discussions in repositories owned by the GitHub organization. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) matches discussions from @nodejs' Node.js runtime project that were created before January 2021. |

## Search by open or closed state

You can filter discussions based on whether they're open or closed using the `is` qualifier.

| Qualifier        | Example
| ------------- | -------------
| `is:open` | [**performance is:open is:discussion**](https://github.com/search?q=is%3Adiscussion+performance+is%3Aopen&type=discussions) matches open discussions with the word "performance."
| `is:closed` | [**android is:closed**](https://github.com/search?q=android+is%3Aclosed&type=discussions) matches closed discussions with the word "android."

## Search based on whether a discussion was answered

You can search for a discussion that has been answered using the `is` qualifier.

| Qualifier        | Example
| ------------- | -------------
| `is:answered` | [**performance is:answered is:discussion**](https://github.com/search?q=is%3Adiscussion+performance+is%3Aanswered&type=discussions) matches answered discussions with the word "performance."
| `is:unanswered` | [**android is:unanswered**](https://github.com/search?q=android+is%3Aunanswered&type=discussions) matches unanswered discussions with the word "android."

## Search based on whether a discussion is locked

You can search for a discussion that has been locked using the `is` qualifier. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions)."

| Qualifier        | Example
| ------------- | -------------
| `is:locked` | [**"code of conduct" is:locked is:discussion**](https://github.com/search?q=%22code+of+conduct%22+is%3Alocked+is%3Adiscussion&type=discussions) matches discussions with the words "code of conduct" that have been locked.
| `is:unlocked` | [**code of conduct is:unlocked is:discussion**](https://github.com/search?q=%22code+of+conduct%22+is%3Aunlocked&type=discussions) matches discussions with the words "code of conduct" that are unlocked.

## Filter by repository visibility

You can filter by the visibility of the repository containing the discussions using the `is` qualifier. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

| Qualifier  | Example |
| :- | :- |
| `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) matches discussions in public repositories. |
|  {% ifversion ghec %} |
| `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) matches discussions in internal repositories. |
|  {% endif %} |
| `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) matches discussions that contain the word "tiramisu" in private repositories you can access.

## Search by author

The `author` qualifier finds discussions created by a certain user.

| Qualifier | Example |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) matches discussions with the word "cool" that were created by @octocat. |
| `in:body` <code>author:<em>USERNAME</em></code> | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) matches discussions created by @octocat that contain the word "bootstrap" in the body. |

## Search by commenter

The `commenter` qualifier finds discussions that contain a comment from a certain user.

| Qualifier | Example |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) matches discussions in repositories owned by GitHub, that contain the word "github," and have a comment by @becca.

## Search by user who has answered a discussion

The `answered-by` qualifier finds discussions where a certain user's comment was marked as an answer.

| Qualifier | Example |
| :- | :- |
| <code>answered-by:<em>USERNAME</em></code> | [**cool answered-by:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) matches discussions with the word "cool" that were answered by @octocat. |

## Search by a user that's involved in a discussion

You can use the `involves` qualifier to find discussions that involve a certain user. The qualifier returns discussions that were either created by a certain user, mention the user, or contain comments by the user. The `involves` qualifier is a logical OR between the `author`, `mentions`, and `commenter` qualifiers for a single user.

| Qualifier | Example |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** matches discussions either @becca or @octocat are involved in.
| `in:body` <code>involves:<em>USERNAME</em></code> | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) matches discussions @becca is involved in that do not contain the word "beta" in the body.

## Search by number of comments

You can use the `comments` qualifier along with greater than, less than, and range qualifiers to search by the number of comments. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)."

| Qualifier | Example |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) matches discussions with more than 100 comments.
| <code>comments:<em>n</em></code> | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) matches discussions with comments ranging from 500 to 1,000.

## Search by when a discussion was created or last updated

You can filter discussions based on times of creation, or when the discussion was last updated. For discussion creation, you can use the `created` qualifier; to find out when an discussion was last updated, use the `updated` qualifier.

Both qualifiers take a date as a parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier | Example |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) matches discussions that were created after November 15, 2020.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) matches discussions with the word "weird" in the body that were updated after December 2020.

## Search by category

You can filter discussions by specific discussions categories.

| Qualifier | Example |
| :- | :- |
| <code>category:<em>CATEGORYNAME</em></code> | [**category:Ideas**](https://github.com/search?utf8=%E2%9C%93&q=category%3Aideas) matches discussions categories that match the name "Ideas".

## Search by label

You can filter discussions by specific labels that are applied to discussions.

| Qualifier | Example |
| :- | :- |
| <code>label: <em>"LABEL NAME"</em></code> | [**label:"Product Feedback"**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22product+feedback%22&type=discussions) matches discussions that match the label "Product Feedback".

## Further reading

* "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/sorting-search-results)"
