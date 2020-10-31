# Pagination

Some API methods may return very large lists of data. To reduce the response size, many of these API methods support pagination. With paginated results, your application can iteratively request and process large lists one page at a time. When using API methods that support pagination, responses will come back with a next_page property, which builds a request for the next page for you.

To process the first page of results, construct a request as you normally would. There's usually an API-level parameter you can provide to specify the maximum size of each page, so be sure to check the API's documentation.

`stamps = service.list_stamps(cents: 5, max_results: 20)`

For further pages, repeat the request including the next page token from the previous result.

`stamps = service.list_stamps(cents:5, max_results: 20, page_token: stamps.next_page_token)`

Here is a full example which loops through the paginated results of a user's public Google Plus activities feed:

```rb
require 'google/apis/plus_v1'

plus = Google::Apis::PlusV1::PlusService.new
plus.key = '...' # API Key from the Google Developers Console
next_page = nil
begin
  puts "Fetching page of activities"
  activities = plus.list_activities('103354693083460731603', 'public', page_token: next_page)
  activities.items.each do |activity|
    puts "#{activity.published} #{activity.title}"
  end
  next_page = activities.next_page_token
end while next_page
```
