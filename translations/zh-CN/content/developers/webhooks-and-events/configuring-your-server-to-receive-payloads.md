---
title: Configuring your server to receive payloads
intro: Learn to set up a server to manage incoming webhook payloads.
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Now that our webhook is ready to deliver messages, we'll set up a basic Sinatra server to handle incoming payloads.

Recall that we specifically set our webhook URL to `http://localhost:4567/payload`. Since we're developing locally, we'll need to expose our local development environment to the Internet, so that GitHub can send out messages, and our local server can process them.

注：您可以[从平台样本仓库][platform samples]下载此项目的完整源代码。

### Using ngrok

First, we'll install a program to expose our local host to the Internet. We'll use ngrok to do this. [ngrok is a free download](https://ngrok.com/download) available for all major operating systems.

When you're done with that, you can expose your localhost by running `./ngrok http 4567` on the command line. You should see a line that looks something like this:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Copy that funky `*.ngrok.io` URL! We're now going to go *back* to the Payload URL and pasting this server into that field. It should look something like `http://7e9ea9dc.ngrok.io/payload`.

By doing this, we've set ourselves up to expose our localhost at path `/payload` to the Internet.

### Writing the server

Now comes the fun part! We want our server to listen to `POST` requests, at `/payload`, because that's where we told GitHub our webhook URL was. Since ngrok is exposing our local environment, we don't need to set up a real server somewhere online, and can happily test out our code locally.

Let's set up a little Sinatra app to do something with the information. Our initial setup might look something like this:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

（如果您不熟悉 Sinatra 的工作方式，建议您阅读 [ Sinatra 指南][Sinatra]）。

启动此服务器。

Since we set up our webhook to listen to events dealing with `Issues`, go ahead and create a new Issue on the repository you're testing with. Once you create it, switch back to your terminal. You should see something like this in your output:

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
