---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: Use filters to choose which items appear in your project's views.
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

You can customize which items appear in your views using filters for item metadata, such as assignees and the labels applied to issues, and by the fields in your project. You can combine filters and save them as views. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)."

To filter a view, click {% octicon "filter" aria-label="Filter by keyword or by field" %} and start typing the fields and values you would like to filter for. As you type, possible values will appear. You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

![Screenshot of "Mona's project". A field labeled "Filter by keyword or by field" is highlighted with an orange outline.](/assets/images/help/projects-v2/filter-example.png)

In board layout, you can click on item data to filter for items with that value. For example, click on an assignee to show only items for that assignee. To remove the filter, click the item data again.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label and the "In progress" status. You can also provide multiple values for the same field to act as a logical OR filter. For example, `label:bug,support` will return items with either the `bug` or `support` labels. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

{% ifversion projects-v2-insights %}

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)."

{% endif %}

When you filter a view and then add an item, the filtered metadata will be applied to new item. For example, if you're filtering by `status:"In progress"` and you add an item, the new item will have its status set to "In progress."

You can use filters to produce views for very specific purposes. For example, you could use `assignee:@me status:todo last-updated:5days` to create a view of all work assigned to the current user, with the "todo" status, that hasn't been updated in the last five days. You could create a triage view by using a negative filter, such as `no:label no:assignee repo:octocat/game`, which would show items without a label and without an assignee that are located in the `octocat/game` repository.

## Filtering for fields

| Qualifier  | Example
| ---------- | -------------
| <code>assignee:<em>USERNAME</em></code> | **assignee:octocat** will show items assigned to @octocat.
| <code>label:<em>LABEL</em></code> | **label:bug** will show items with the "bug" label applied.
| <code>field:<em>VALUE</em></code> | **status:done** will show items with the "status" field set to "done."
| <code>reviewers:<em>USERNAME</em> | **reviewers:octocat** will show items that have been reviewed by @octocat.
| <code>milestone:&quot;<em>MILESTONE</em>&quot; | **milestone:"Beta release"** will show items assigned to the "Beta release" milestone.

## Combining filters

You can create filters for multiple fields. Your view will show items that match all filters.

| Qualifier  | Example
| ---------- | -------------
|<code>assignee:<em>USERNAME</em> field:<em>VALUE</em></code> | **assignee:octocat priority:1** will show items assigned to @octocat that have a priority of **1**.

You can also filter for multiple values from the same field. If you separate the values with commas, your view will show items that match any of the provided values.

| Qualifier  | Example
| ---------- | -------------
|<code>assignee:<em>USERNAME</em>,<em>USERNAME</em></code> | **assignee:octocat,stevecat** will show items assigned to either @octocat or @stevecat.

To filter for multiple values from the same field but show items that match all of the provided values, you can repeat the qualifier for each value.

| Qualifier  | Example
| ---------- | -------------
|<code>assignee:<em>USERNAME</em> assignee:<em>USERNAME</em></code> | **assignee:octocat assignee:stevecat** will show items that are assigned to both @octocat and @stevecat.

You can also combine filters that match some and match all items.

| Qualifier  | Example
| ---------- | -------------
|<code>field:<em>VALUE</em>,<em>VALUE</em> assignee:<em>USER</em> assignee:<em>USER</em> | **label:bug,onboarding assignee:octocat assignee:stevecat** will show items that have either the bug or onboarding labels but are assigned to both @octocat and @stevecat.

## Negating a filter

You can invert any filter, including combinations, by prefixing with a hyphen.

| Qualifier  | Example
| ---------- | -------------
|<code>-assignee:<em>USERNAME</em></code> | **-assignee:octocat** will not show any items assigned to @octocat.
|<code>-field:<em>VALUE</em></code> | **-status:done** will not show any items with a status of "done."
|<code>-field:<em>VALUE,VALUE</em></code> | **-priority:1,2** will not show any items with a priority of either 1 or 2.

## Filtering for items that are missing a value

You can use `no:` to filter for items that are missing a value

| Qualifier  | Example
| ---------- | -------------
|<code>no:assignee</code> | **no:assignee** will show any unassigned items.
|<code>no:reviewers</code> | **no:reviewers** will show pull requests that do not have a reviewer.
|<code>no:<em>FIELD</em> | **no:priority** will show items with an empty priority field.

You can also prefix a hyphen to negate this behavior and only return items that have a value.

| Qualifier  | Example
| ---------- | -------------
|<code>-no:assignee</code> | **-no:assignee** will only show items that are assigned.
|<code>-no:<em>FIELD</em></code> | **-no:priority** will only show items that have a value in the priority field.

## Filtering by item location

Use the `repo` qualifier to filter for items in a particular repository.

| Qualifier  | Example
| ---------- | -------------
|<code>repo:<em>OWNER/REPO</em></code> | **repo:octocat/game** will items in the "octocat/game" repository.

## Filtering for item state or item type

You can use the `is` qualifier to filter for particular types of item or items in particular states.

| Qualifier  | Example
| ---------- | -------------
|<code>is:<em>STATE</em></code> | **is:open** will show open issues and pull requests.
|                               | **is:closed** will show closed issues and pull requests.
|                               | **is:merged** will show any merged pull requests.
|<code>is:<em>TYPE</em></code>  | **is:issue** will show only issues.
|                               | **is:pr** will show only pull requests.
|                               | **is:draft** will show draft issues and draft pull requests.
|                               | **is:issue is:open** will show open issues.

## Filtering by close reason

You can filter closed items by their close reason.

| Qualifier  | Example
| ---------- | -------------
|<code>reason:<em>CLOSE REASON</em></code> | **reason:completed** will show items closed because they were completed.
|                                          | **reason:"not planned"** will show closed items with the "not planned" reason.
|                                          | **reason:reopened** will show items that have been reopened after previously being closed.

{% ifversion projects-v2-tasklists %}

## Filtering by the tracked-by field

You can filter for issues that are tracked by another issue in a tasklist. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-tasklists)."

| Qualifier  | Example
| ---------- | -------------
| <code>tracked-by:"<em>OWNER</em>/<em>REPO</em>#<em>ISSUE NUMBER</em>"</code> | **tracked-by:"octocat/game#11"** will show any issue tracked by a tasklist in issue #11 of the `octocat/game` repository.

{% endif %}

## Filtering for when an item was last updated

You can use the `{number}days` syntax to filter for when items were last updated.

| Qualifier  | Example
| ---------- | -------------
| <code>last-updated:<em>NUMBER</em>days</code> | **last-updated:1day** will show items last updated one or more days ago.
|                                               | **last-updated:7days** will show items last updated seven or more days ago.
|                                               | **-last-updated:10days** will show items that have been updated in the last ten days.

{% data reusables.projects.last-updated-explanation %}

## Filtering number, date, and iteration fields

You can use `>`, `>=`, `<`, and `<=` to compare number, date, and iteration fields. Dates should be provided in the `YYYY-MM-DD` format.

| Qualifier  | Example
| ---------- | -------------
| <code>field:&gt;<em>VALUE</em></code>  | **priority:&gt;1** will show items with a priority greater than 1.
| <code>field:&gt;=<em>VALUE</em></code> | **date:&gt;=2022-06-01** will show items with a date of "2022-06-01" or later.
| <code>field:&lt;<em>VALUE</em></code>  | **iteration:<"Iteration 5"** will show items with an iteration before "Iteration 5."
| <code>field:&gt;=<em>VALUE</em></code> | **points:&lt;=10** will show items with 10 or less points.

You can also use `..` to filter for an inclusive range. When working with a range, `*` can be supplied as a wildcard operator.

| Qualifier  | Example
| ---------- | -------------
| <code>field:<em>VALUE</em>..<em>VALUE</em></code> | **priority:1..3** will show items with a priority of 1, 2, or 3.
|                                                   | **date:2022-01-01..2022-12-31** will show items from the year 2022.
|                                                   | **points:\*..10** will show items with an points value of anything up to and including 10.
|                                                   | **iteration:"Iteration 1".."Iteration 4"** will show items in "Iteration 1", "Iteration 2", "Iteration 3", and "Iteration 4."

## Filtering assignees and reviewers using keywords

You can use the `@me` keyword to represent yourself in a filter.

| Qualifier  | Example
| ---------- | -------------
| <code>field:<em>@me</em></code>  | **assignee:@me** will show items assigned to the signed-in user.
|                                      | **-reviewers:@me** will show items that have not been reviewed by the signed-in user.

## Filtering iteration and date fields using keywords

You can use the `@previous`, `@current`, and `@next` keywords to filter for iterations relative to the current iteration. You can also use `@today` to filter for the current day.

| Qualifier  | Example
| ---------- | -------------
| <code>field:<em>@keyword<em></code> | **iteration:@current** will show items assigned to the current iteration.
|                                     | **iteration:@next** will show items assigned to the next iteration.
| <code>field:<em>@today</em></code>  | **date:@today** will show items with their date set to the current day.

You can also use `>`, `>=`, `<`, `<=`, `+`, `-`, and `..` ranges with keywords.

| Qualifier  | Example
| ---------- | -------------
| <code>field:<em>@keyword</em>..<em>@keyword</em>+<em>n</em></code> | **iteration:@current..@current+3** will show items assigned to the current iteration and the next three iterations.
|                                                                    | **date:@today..@today+7** will show items with a date set to today or the next seven days.
| <code>field:<<em>@keyword</em></code>                              | **iteration:<@current** will show items assigned to any iteration before the current iteration.
| <code>field:>=<em>@keyword</em></code>                             | **date:>=@today** will show items with a date set to today or later.

## Filtering by text fields

You can filter by specific text fields or use a general text filter across all text fields and titles. When filtering with text that contains spaces or special characters, enclose your text in `"` or `'` quotation marks.

| Qualifier  | Example
| ---------- | -------------
| <code>field:"<em>TEXT</em>"    | **title:"API deprecation"** will show items with titles that exactly match "API deprecation."
| <code>field:<em>TEXT</em>      | **note:complete** will show items with a note text field that exactly match "complete."
| <code><em>TEXT</em></code>     | **API** will show items with "API" in the title or any other text field.
| <code>field:<em>TEXT</em> TEXT | **label:bug rendering** will show items with the "bug" label and with "rendering" in the title or any other text field.

{% ifversion projects-v2-wildcard-text-filtering %}

You can also use a <code>&ast;</code> as a wildcard.

| Qualifier  | Example
| ---------- | -------------
| <code>field:&ast;<em>TEXT</em>&ast;    | **label:&ast;bug&ast;** will show items with a label that contains the word "bug."
| <code>field:<em>TEXT</em>&ast;         | **title:API&ast;** will show items with a title that begins with "API."
| <code>field:&ast;<em>TEXT</em>         | **label:&ast;support** will show items with a label that ends with "support."

{% endif %}
