---
title: Traversing with pagination
intro: Explore how to use pagination to manage your responses with some examples using the Search API.
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
---

The {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API provides a vast wealth of information for developers to consume.
Most of the time, you might even find that you're asking for _too much_ information,
and in order to keep our servers happy, the API will automatically [paginate the requested items](/rest/overview/resources-in-the-rest-api#pagination).

In this guide, we'll make some calls to the Search API, and iterate over
the results using pagination. You can find the complete source code for this project
in the [platform-samples][platform samples] repository.

{% data reusables.rest-api.dotcom-only-guide-note %}



## Basics of Pagination

To start with, it's important to know a few facts about receiving paginated items:


1. Different API calls respond with different defaults. For example, a call to
[List public repositories](/rest/reference/repos#list-public-repositories)
provides paginated items in sets of 30, whereas a call to the GitHub Search API
provides items in sets of 100
2. You can specify how many items to receive (up to a maximum of 100); but,
3. For technical reasons, not every endpoint behaves the same. For example,
[events](/rest/reference/activity#events) won't let you set a maximum for items to receive.
Be sure to read the documentation on how to handle paginated results for specific endpoints.

{% note %}

**Note**: You should always rely on URLs included in the link header. Don't try to guess or construct your own URLs.

{% endnote %}


### Link header

The response header includes information about pagination. For more information about headers, see "[Getting started with the REST API](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers)." To get the response header, include the `-I` flag in your request. For example:

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

The `-I` flag returns only the response header. If the response is paginated, the response header will include a `link` header. The header will look something like this:

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

or

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### Types of pagination

{% data variables.product.company_short %}'s API uses two pagination methods: page-based pagination and cursor-based pagination. If the `link` header includes `page`, then the operation uses page-based pagination. If the `link` header includes `before` and `after`, then the operation uses cursor-based pagination.


#### Page based pagination

The link header for page-based pagination will tell you information about the previous, next, first, and last pages. If you did not request a specific page, then the response will default to the first page and information about the first and previous pages will be omitted.

For example, for a request that did not specify a page, this header states that the next page is `2` and the last page is `511`.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

For example, for a request that specified page 5, this header states that the previous page is `4`, the next page is `6`, the last page is `511`, and the first page is `1`.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### Cursor based pagination

Cursor pagination uses terms `before` and `after` in order to navigate through pages. `rel="next"` and `rel="prev"` this mark the cursor point in the data set and provides a reference for traveling to the page `before` and `after` the current page.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

In this example, `rel=next` says that the next page is located at:

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>
```




### Using pagination

#### Cursor based pagination

Using cursor based pagination requires you to use the terms `before` and `after`. To navigate using `before` and `after`, copy the link header generated above into your curl request:

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>
```

The above example will generate a page of results and new header information that you can use to make the next request. `rel="next"` provides the next page of results. `rel="prev"` provides the previous page of results. The important part of the output here is the link header needs to be generated rather than manually imputed. Copy the entire link from the following output.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Unlike page-based pagination, the results will not return the last page number in the response.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
Because cursor based pagination creates a reference point in the data set, it cannot calculate the total number of results.


#### Page based pagination

To navigate using page based pagination pass in a `page`
parameter. By default, `page` always starts at `1`. In the following example, we have made a curl request to the search API Mozilla projects use the phrase `addClass`. Instead of starting at 1, lets jump to page 14. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Here's an except of the link header in the HTTP request:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

In this example, `rel="next"` is at 15, and `rel="last"` is 34. But now we've
got some more information: `rel="first"` indicates the URL for the _first_ page,
and more importantly, `rel="prev"` lets you know the page number of the previous
page. Using this information, you could construct some UI that lets users jump
between the first, previous, next, or last list of results in an API call.


### Changing the number of items received

#### Page based pagination

By passing the `per_page` parameter, you can specify how many items you want
each page to return, up to 100 items. Let's try asking for 50 items about `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Notice what it does to the header response:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

As you might have guessed, the `rel="last"` information says that the last page
is now 20. This is because we are asking for more information per page about
our results.

#### Cursor based pagination

You can also pass the `per_page` parameter for cursor-based pagination. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>&per_page=50
```

## Consuming the information

You don't want to be making low-level curl calls just to be able to work with
pagination, so let's write a little Ruby script that does everything we've
just described above.

As always, first we'll require [GitHub's Octokit.rb][octokit.rb] Ruby library, and
pass in our [{% data variables.product.pat_generic %}][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Next, we'll execute the search, using Octokit's `search_code` method. Unlike
using `curl`, we can also immediately retrieve the number of results, so let's
do that:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Now, let's grab the number of the last page, similar to `page=34>; rel="last"`
information in the link header. Octokit.rb support pagination information through
an implementation called "[Hypermedia link relations][hypermedia-relations]."
We won't go into detail about what that is, but, suffice to say, each element
in the `results` variable has a hash called `rels`, which can contain information
about `:next`, `:last`, `:first`, and `:prev`, depending on which result you're
on. These relations also contain information about the resulting URL, by calling
`rels[:last].href`.

Knowing this, let's grab the page number of the last result, and present all
this information to the user:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Finally, let's iterate through the results. You could do this with a loop `for i in 1..number_of_pages.to_i`,
but instead, let's follow the `rels[:next]` headers to retrieve information from
each page. For the sake of simplicity, let's just grab the file path of the first
result from each page. To do this, we'll need a loop; and at the end of every loop,
we'll retrieve the data set for the next page by following the `rels[:next]` information.
The loop will finish when there is no `rels[:next]` information to consume (in other
words, we are at `rels[:last]`). It might look something like this:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Changing the number of items per page is extremely simple with Octokit.rb. Simply
pass a `per_page` options hash to the initial client construction. After that,
your code should remain intact:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Constructing Pagination Links

Normally, with pagination, your goal isn't to concatenate all of the possible
results, but rather, to produce a set of navigation, like this:

![Sample of pagination links](/assets/images/pagination_sample.png)

Let's sketch out a micro-version of what that might entail.

From the code above, we already know we can get the `number_of_pages` in the
paginated results from the first call:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

From there, we can construct a beautiful ASCII representation of the number boxes:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Let's simulate a user clicking on one of these boxes, by constructing a random
number:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Now that we have a page number, we can use Octokit to explicitly retrieve that
individual page, by passing the `:page` option:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

If we wanted to get fancy, we could also grab the previous and next pages, in
order to generate links for back (`<<`) and forward (`>>`) elements:

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
