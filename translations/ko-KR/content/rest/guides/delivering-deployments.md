---
title: Delivering deployments
intro: 'Using the Deployments REST API, you can build custom tooling that interacts with your server and a third-party app.'
redirect_from:
  - /guides/delivering-deployments/
  - /guides/automating-deployments-to-integrators/
  - /v3/guides/delivering-deployments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



The [Deployments API][deploy API] provides your projects hosted on {% data variables.product.product_name %} with the capability to launch them on a server that you own. Combined with [the Status API][status API], you'll be able to coordinate your deployments the moment your code lands on `master`.

This guide will use that API to demonstrate a setup that you can use. In our scenario, we will:

* Merge a pull request
* When the CI is finished, we'll set the pull request's status accordingly.
* When the pull request is merged, we'll run our deployment to our server.

Our CI system and host server will be figments of our imagination. They could be Heroku, Amazon, or something else entirely. The crux of this guide will be setting up and configuring the server managing the communication.

If you haven't already, be sure to [download ngrok][ngrok], and learn how to [use it][using ngrok]. We find it to be a very useful tool for exposing local connections.

Note: you can download the complete source code for this project [from the platform-samples repo][platform samples].

### Writing your server

We'll write a quick Sinatra app to prove that our local connections are working. Let's start with this:

``` ruby
require 'sinatra'
require 'json'

post '/event_handler' do
  payload = JSON.parse(params[:payload])
  "Well, it worked!"
end
```

(If you're unfamiliar with how Sinatra works, we recommend [reading the Sinatra guide][Sinatra].)

Start this server up. By default, Sinatra starts on port `4567`, so you'll want to configure ngrok to start listening for that, too.

In order for this server to work, we'll need to set a repository up with a webhook. The webhook should be configured to fire whenever a pull request is created, or merged. Go ahead and create a repository you're comfortable playing around in. Might we suggest [@octocat's Spoon/Knife repository](https://github.com/octocat/Spoon-Knife)? After that, you'll create a new webhook in your repository, feeding it the URL that ngrok gave you, and choosing `application/x-www-form-urlencoded` as the content type:

![A new ngrok URL](/assets/images/webhook_sample_url.png)

Click **Update webhook**. You should see a body response of `Well, it worked!`. Great! Click on **Let me select individual events.**, and select the following:

* Deployment
* Deployment status
* Pull Request

These are the events {% data variables.product.product_name %} will send to our server whenever the relevant action occurs. We'll configure our server to *just* handle when pull requests are merged right now:

``` ruby
post '/event_handler' do
  @payload = JSON.parse(params[:payload])

  case request.env['HTTP_X_GITHUB_EVENT']
  when "pull_request"
    if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
      puts "A pull request was merged! A deployment should start now..."
    end
  end
end
```

What's going on? Every event that {% data variables.product.product_name %} sends out attached a `X-GitHub-Event` HTTP header. We'll only care about the PR events for now. When a pull request is merged (its state is `closed`, and `merged` is `true`), we'll kick off a deployment.

To test out this proof-of-concept, make some changes in a branch in your test repository, open a pull request, and merge it. Your server should respond accordingly!

### Working with deployments

With our server in place, the code being reviewed, and our pull request merged, we want our project to be deployed.

We'll start by modifying our event listener to process pull requests when they're merged, and start paying attention to deployments:

``` ruby
when "pull_request"
  if @payload["action"] == "closed" && @payload["pull_request"]["merged"]
    start_deployment(@payload["pull_request"])
  end
when "deployment"
  process_deployment(@payload)
when "deployment_status"
  update_deployment_status
end
```

Based on the information from the pull request, we'll start by filling out the `start_deployment` method:

``` ruby
def start_deployment(pull_request)
  user = pull_request['user']['login']
  payload = JSON.generate(:environment => 'production', :deploy_user => user)
  @client.create_deployment(pull_request['head']['repo']['full_name'], pull_request['head']['sha'], {:payload => payload, :description => "Deploying my sweet branch"})
end
```

Deployments can have some metadata attached to them, in the form of a `payload` and a `description`. Although these values are optional, it's helpful to use for logging and representing information.

When a new deployment is created, a completely separate event is triggered. That's why we have a new `switch` case in the event handler for `deployment`. You can use this information to be notified when a deployment has been triggered.

Deployments can take a rather long time, so we'll want to listen for various events, such as when the deployment was created, and what state it's in.

Let's simulate a deployment that does some work, and notice the effect it has on the output. First, let's complete our `process_deployment` method:

``` ruby
def process_deployment
  payload = JSON.parse(@payload['payload'])
  # you can send this information to your chat room, monitor, pager, etc.
  puts "Processing '#{@payload['description']}' for #{payload['deploy_user']} to #{payload['environment']}"
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'pending')
  sleep 2 # simulate work
  @client.create_deployment_status("repos/#{@payload['repository']['full_name']}/deployments/#{@payload['id']}", 'success')
end
```

Finally, we'll simulate storing the status information as console output:

``` ruby
def update_deployment_status
  puts "Deployment status for #{@payload['id']} is #{@payload['state']}"
end
```

Let's break down what's going on. A new deployment is created by `start_deployment`, which triggers the `deployment` event. From there, we call `process_deployment` to simulate work that's going on. During that processing, we also make a call to `create_deployment_status`, which lets a receiver know what's going on, as we switch the status to `pending`.

After the deployment is finished, we set the status to `success`.

### Conclusion

At GitHub, we've used a version of [Heaven][heaven] to manage our deployments for years. The basic flow is essentially the exact same as the server we've built above. At GitHub, we:

* Wait for a response on the state of the CI
* If the code is green, we merge the pull request
* Heaven takes the merged code, and deploys it to our production and staging servers
* In the meantime, Heaven also notifies everyone about the build, via [Hubot][hubot] sitting in our chat rooms

간단하죠? You don't need to build your own deployment setup to use this example. You can always rely on [GitHub integrations][integrations].

[deploy API]: /v3/repos/deployments/
[status API]: /guides/building-a-ci-server
[ngrok]: https://ngrok.com/
[using ngrok]: /webhooks/configuring/#using-ngrok
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/delivering-deployments
[Sinatra]: http://www.sinatrarb.com/
[heaven]: https://github.com/atmos/heaven
[hubot]: https://github.com/github/hubot
[integrations]: https://github.com/integrations
