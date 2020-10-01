---
title: Using the GitHub API in your app
intro: Learn how to set up your app to listen for events and use the Octokit library to perform REST API operations.
redirect_from:
  - /apps/building-your-first-github-app/
  - /apps/quickstart-guides/using-the-github-api-in-your-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### Introduction

This guide will help you build a GitHub App and run it on a server. The app you build will add a label to all new issues opened in the repository where the app is installed.

This project will walk you through the following:

* Programming your app to listen for events
* Using the Octokit.rb library to do REST API operations

{% data reusables.apps.app-ruby-guides %}

Once you've worked through the steps, you'll be ready to develop other kinds of integrations using the full suite of GitHub APIs. {% if currentVersion == "free-pro-team@latest" %}You can check out successful examples of apps on [GitHub Marketplace](https://github.com/marketplace) and [Works with GitHub](https://github.com/works-with).{% endif %}

### Prerequisites

You may find it helpful to have a basic understanding of the following:

* [GitHub Apps](/apps/about-apps)
* [Webhooks](/webhooks)
* [The Ruby programming language](https://www.ruby-lang.org/en/)
* [REST APIs](/v3)
* [Sinatra](http://sinatrarb.com/)

But you can follow along at any experience level. We'll link out to information you need along the way!

Before you begin, you'll need to do the following:

1. Clone the [Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app) repository.
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  Inside the directory, you'll find a `template_server.rb` file with the template code you'll use in this quickstart and a `server.rb` file with the completed project code.

1. Follow the steps in the [Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/) quickstart to configure and run the `template_server.rb` app server. If you've previously completed a GitHub App quickstart other than [Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/), you should register a _new_ GitHub App and start a new Smee channel to use with this quickstart.

  This quickstart includes the same `template_server.rb` code as the [Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/) quickstart. **Note:** As you follow along with the [Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/) quickstart, make sure to use the project files included in the [Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app) repository.

  See the [Troubleshooting](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) section if you are running into problems setting up your template GitHub App.

### Building the app

Now that you're familiar with the `template_server.rb` code, you're going to create code that automatically adds the `needs-response` label to all issues opened in the repository where the app is installed.

The `template_server.rb` file contains app template code that has not yet been customized. In this file, you'll see some placeholder code for handling webhook events and some other code for initializing an Octokit.rb client.

{% note %}

**Note:** `template_server.rb` contains many code comments that complement this guide and explain additional technical details. You may find it helpful to read through the comments in that file now, before continuing with this section, to get an overview of how the code works.

The final customized code that you'll create by the end of this guide is provided in [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Try waiting until the end to look at it, though!

{% endnote %}

These are the steps you'll complete to create your first GitHub App:

1. [Update app permissions](#step-1-update-app-permissions)
2. [Add event handling](#step-2-add-event-handling)
3. [Create a new label](#step-3-create-a-new-label)
4. [Add label handling](#step-4-add-label-handling)

### Step 1. Update app permissions

When you [first registered your app](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), you accepted the default permissions, which means your app doesn't have access to most resources. For this example, your app will need permission to read issues and write labels.

To update your app's permissions:

1. Select your app from the [app settings page](https://github.com/settings/apps) and click **Permissions & Webhooks** in the sidebar.
1. In the "Permissions" section, find "Issues," and select **Read & Write** in the "Access" dropdown next to it. The description says this option grants access to both issues and labels, which is just what you need.
1. In the "Subscribe to events" section, select **Issues** to subscribe to the event.
{% data reusables.apps.accept_new_permissions_steps %}

Great! Your app has permission to do the tasks you want it to do. Now you can add the code to make it work.

### Step 2. Add event handling

The first thing your app needs to do is listen for new issues that are opened. Now that you've subscribed to the **Issues** event, you'll start receiving the [`issues`](/webhooks/event-payloads/#issues) webhook, which is triggered when certain issue-related actions occur. You can filter this event type for the specific action you want in your code.

GitHub sends webhook payloads as `POST` requests. Because you forwarded your Smee webhook payloads to `http://localhost/event_handler:3000`, your server will receive the `POST` request payloads in the `post '/event_handler'` route.

An empty `post '/event_handler'` route is already included in the `template_server.rb` file, which you downloaded in the [prerequisites](#prerequisites) section. The empty route looks like this:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use this route to handle the `issues` event by adding the following code:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Every event that GitHub sends includes a request header called `HTTP_X_GITHUB_EVENT`, which indicates the type of event in the `POST` request. Right now, you're only interested in `issues` event types. Each event has an additional `action` field that indicates the type of action that triggered the events. For `issues`, the `action` field can be `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed`, or `reopened`.

To test your event handler, try adding a temporary helper method. You'll update later when you [Add label handling](#step-4-add-label-handling). For now, add the following code inside the `helpers do` section of the code. You can put the new method above or below any of the other helper methods. Order doesn't matter.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

This method receives a JSON-formatted event payload as an argument. This means you can parse the payload in the method and drill down to any specific data you need. You may find it helpful to inspect the full payload at some point: try changing `logger.debug 'An issue was opened!` to `logger.debug payload`. The payload structure you see should match what's [shown in the `issues` webhook event docs](/webhooks/event-payloads/#issues).

Great! It's time to test the changes.

{% data reusables.apps.sinatra_restart_instructions %}

In your browser, visit the repository where you installed your app. Open a new issue in this repository. The issue can say anything you like. It's just for testing.

When you look back at your Terminal, you should see a message in the output that says, `An issue was opened!` Congrats! You've added an event handler to your app. 💪

### Step 3. Create a new label

Okay, your app can tell when issues are opened. Now you want it to add the label `needs-response` to any newly opened issue in a repository the app is installed in.

Before the label can be _added_ anywhere, you'll need to _create_ the custom label in your repository. You'll only need to do this one time. For the purposes of this guide, create the label manually on GitHub. In your repository, click **Issues**, then **Labels**, then click **New label**. Name the new label `needs-response`.

{% tip %}

**Tip**: Wouldn't it be great if your app could create the label programmatically? [It can](/v3/issues/labels/#create-a-label)! Try adding the code to do that on your own after you finish the steps in this guide.

{% endtip %}

Now that the label exists, you can program your app to use the REST API to [add the label to any newly opened issue](/v3/issues/labels/#add-labels-to-an-issue).

### Step 4. Add label handling

Congrats—you've made it to the final step: adding label handling to your app. For this task, you'll want to use the [Octokit.rb Ruby library](http://octokit.github.io/octokit.rb/).

In the Octokit.rb docs, find the list of [label methods](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). The method you'll want to use is [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

Back in `template_server.rb`, find the method you defined previously:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

The [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) docs show you'll need to pass three arguments to this method:

* Repo (string in `"owner/name"` format)
* Issue number (integer)
* Labels (array)

You can parse the payload to get both the repo and the issue number. Since the label name will always be the same (`needs-response`), you can pass it as a hardcoded string in the labels array. Putting these pieces together, your updated method might look like this:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

Try opening a new issue in your test repository and see what happens! If nothing happens right away, try refreshing.

You won't see much in the Terminal, _but_ you should see that a bot user has added a label to the issue.

{% note %}

**Note:** When GitHub Apps take actions via the API, such as adding labels, GitHub shows these actions as being performed by _bot_ accounts. For more information, see "[Machine vs. bot accounts](/apps/differences-between-apps/#machine-vs-bot-accounts)."

{% endnote %}

If so, congrats! You've successfully built a working app! 🎉

You can see the final code in `server.rb` in the [app template repository](https://github.com/github-developer/using-the-github-api-in-your-app).

See "[Next steps](#next-steps)" for ideas about where you can go from here.

### Troubleshooting

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the {% data variables.product.prodname_support_forum_with_url %}.

* **Q:** My server isn't listening to events! The Smee client is running in a Terminal window, and I'm sending events on GitHub.com by opening new issues, but I don't see any output in the Terminal window where I'm running the server.

    **A:** You may not have the correct Smee domain in your app settings. Visit your [app settings page](https://github.com/settings/apps) and double-check the fields shown in "[Register a new app with GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)." Make sure the domain in those fields matches the domain you used in your `smee -u <unique_channel>` command in "[Start a new Smee channel](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)."

* **Q:** My app doesn't work! I opened a new issue, but even after refreshing, no label has been added to it.

    **A:** Make sure all of the following are true:

    * You [installed the app](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) on the repository where you're opening the issue.
    * Your [Smee client is running](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) in a Terminal window.
    * Your [web server is running](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) with no errors in another Terminal window.
    * Your app has [read & write permissions on issues and is subscribed to issue events](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * You [checked your email](#step-1-update-app-permissions) after updating the permissions and accepted the new permissions.

### Conclusion

After walking through this guide, you've learned the basic building blocks for developing GitHub Apps! To review, you:

* Programmed your app to listen for events
* Used the Octokit.rb library to do REST API operations

### Next steps

Here are some ideas for what you can do next:

* [Rewrite your app using GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)!
* Rewrite your app in Node.js using [Probot](https://github.com/probot/probot)!
* Have the app check whether the `needs-response` label already exists on the issue, and if not, add it.
* When the bot successfully adds the label, show a message in the Terminal. (Hint: compare the `needs-response` label ID with the ID of the label in the payload as a condition for your message, so that the message only displays when the relevant label is added and not some other label.)
* Add a landing page to your app and hook up a [Sinatra route](https://github.com/sinatra/sinatra#routes) for it.
* Move your code to a hosted server (like Heroku). Don't forget to update your app settings with the new domain.
* Share your project or get advice in the {% data variables.product.prodname_support_forum_with_url %}{% if currentVersion == "free-pro-team@latest" %}
* Have you built a shiny new app you think others might find useful? [Add it to GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/)!{% endif %}
