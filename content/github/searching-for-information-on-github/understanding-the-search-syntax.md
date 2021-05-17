---
title: Understanding the search syntax
intro: 'When searching {% data variables.product.product_name %}, you can construct queries that match specific numbers and words.'
redirect_from:
  - /articles/search-syntax/
  - /articles/understanding-the-search-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

### Query for values greater or less than another value

You can use `>`, `>=`, `<`, and `<=` to search for values that are greater than, greater than or equal to, less than, and less than or equal to another value.

Query  | Example
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** matches repositories with the word "cats" that have more than 1000 stars.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** matches repositories with the word "cats" that have 5 or more topics.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** matches code with the word "cats" in files that are smaller than 10 KB.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** matches repositories with the word "cats" that have 50 or fewer stars.

You can also use [range queries](#query-for-values-between-a-range) to search for values that are greater than or equal to, or less than or equal to, another value.

Query  | Example
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** is equivalent to `stars:>=10` and matches repositories with the word "cats" that have 10 or more stars.
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** is equivalent to `stars:<=10` and matches repositories with the word "cats" that have 10 or fewer stars.

### Query for values between a range

You can use the range syntax <code><em>n</em>..<em>n</em></code> to search for values within a range, where the first number _n_ is the lowest value and the second is the highest value.

Query  | Example
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** matches repositories with the word "cats" that have between 10 and 50 stars.

### Query for dates

You can search for dates that are earlier or later than another date, or that fall within a range of dates, by using `>`, `>=`, `<`, `<=`, and [range queries](#query-for-values-between-a-range). {% data reusables.time_date.date_format %}

Query  | Example
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** matches issues with the word "cats" that were created after April 29, 2016.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** matches issues with the word "cats" that were created on or after April 1, 2017.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** matches code with the word "cats" in repositories that were pushed to before July 5, 2012.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** matches issues with the word "cats" that were created on or before July 4, 2012.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** matches repositories with the word "cats" that were pushed to between the end of April and July of 2016.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** matches issues created after April 30th, 2012 containing the word "cats."
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** matches issues created before July 4th, 2012 containing the word "cats."

{% data reusables.time_date.time_format %}

Query  | Example
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** matches issues created between January 1, 2017 at 1 a.m. with a UTC offset of `07:00` and March 1, 2017 at 3 p.m. with a UTC offset of `07:00`.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** matches issues created between March 21, 2016 at 2:11pm and April 7, 2106 at 8:45pm.

### Exclude certain results

You can exclude results containing a certain word, using the `NOT` syntax. The `NOT` operator can only be used for string keywords. It does not work for numerals or dates.

Query  | Example
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** matches repositories that have the word "hello" but not the word "world."

Another way you can narrow down search results is to exclude certain subsets. You can prefix any search qualifier with a `-` to exclude all results that are matched by that qualifier.

Query  | Example
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[cats stars:>10 -language:javascript](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** matches repositories with the word "cats" that have more than 10 stars but are not written in JavaScript.
 | **[mentions:defunkt -org:github](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** matches issues mentioning @defunkt that are not in repositories in the GitHub organization

### Use quotation marks for queries with whitespace

If your search query contains whitespace, you will need to surround it with quotation marks. For example:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) matches repositories with the word "cats" but not the words "hello world."
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) matches issues with the word "build" that have the label "bug fix."

Some non-alphanumeric symbols, such as spaces, are dropped from code search queries within quotation marks, so results can be unexpected.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Queries with usernames

If your search query contains a qualifier that requires a username, such as `user`, `actor`, or `assignee`, you can use any {% data variables.product.product_name %} username, to specify a specific person, or `@me`, to specify the current user.

Query  | Example
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) matches commits authored by @nat
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) matches issues assigned to the person viewing the results

You can only use `@me` with a qualifier and not as search term, such as `@me main.workflow`.
{% endif %}
