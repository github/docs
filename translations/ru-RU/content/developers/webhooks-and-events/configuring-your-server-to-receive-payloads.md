---
title: Configuring your server to receive payloads
intro: Learn to set up a server to manage incoming webhook payloads.
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - веб-перехватчики
---



Now that our webhook is ready to deliver messages, we'll set up a basic Sinatra server to handle incoming payloads.

{% note %}

**Note:** You can download the complete source code for this project [from the platform-samples repo][platform samples].

{% endnote %}

### Writing the server

We want our server to listen to `POST` requests, at `/payload`, because that's where we told GitHub our webhook URL was. Because we're using ngrok to expose our local environment, we don't need to set up a real server somewhere online, and can happily test out our code locally.

Let's set up a little Sinatra app to do something with the information. Our initial setup might look something like this:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(If you're unfamiliar with how Sinatra works, we recommend [reading the Sinatra guide][Sinatra].)

Start this server up.

Since we set up our webhook to listen to events dealing with `Issues`, go ahead and create a new issue on the repository you're testing with. Once you create it, switch back to your terminal. You should see something like this in your output:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Success! You've successfully configured your server to listen to webhooks. Your server can now process this information any way you see fit. For example, if you were setting up a "real" web application, you might want to log some of the JSON output to a database.

For additional information on working with webhooks for fun and profit, head on over to the [Testing Webhooks](/webhooks/testing) guide.

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
