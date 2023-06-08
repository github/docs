---
title: Building CI checks with a GitHub App
shortTitle: Build CI checks
intro: 'Build a continuous integration server to run tests using a {% data variables.product.prodname_github_app %} and checks.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
  - /developers/apps/guides/creating-ci-tests-with-the-checks-api
  - /apps/creating-github-apps/guides/creating-ci-tests-with-the-checks-api
  - /apps/creating-github-apps/writing-code-for-a-github-app/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---
## Introduction

This tutorial demonstrates how to build a continuous integration (CI) server that runs tests on new code that's pushed to a repository. The tutorial shows how to build and configure a {% data variables.product.prodname_github_app %} to act as a server that receives and responds to Checks webhook events using {% data variables.product.prodname_dotcom %}'s REST API.

In this tutorial, you will use your computer or codespace as a server while you develop your app. Once the app is ready for production use, you should deploy your app to a dedicated server.

This tutorial uses Ruby, but you can use any programming language that you can run on your server.

### About continuous integration (CI)

CI is a software practice that requires frequently committing code to a shared repository. Committing code more often raises errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error. Frequent code updates also make it easier to merge changes from different members of a software development team. This is great for developers, who can spend more time writing code and less time debugging errors or resolving merge conflicts.

A CI server hosts code that runs CI tests such as code linters (which check style formatting), security checks, code coverage, and other checks against new code commits in a repository. CI servers can even build and deploy code to staging or production servers. For some examples of the types of CI tests you can create with a {% data variables.product.prodname_github_app %}, check out the [continuous integration apps](https://github.com/marketplace/category/continuous-integration) available in {% data variables.product.prodname_marketplace %}.

### About checks

{% data variables.product.prodname_dotcom %}'s REST API allows you to set up CI tests (checks) that are automatically run against each code commit in a repository. The API reports detailed information about each check in the pull request's **Checks** tab on {% data variables.product.prodname_dotcom %}. You can use checks in a repository to determine when a code commit introduces errors.

Checks include check runs, check suites, and commit statuses.

- A _check run_ is an individual CI test that runs on a commit.
- A _check suite_ is a group of check runs.
- A _commit status_ marks the state of a commit, for example `error`, `failure`, `pending`, or `success`, and is visible in a pull request on {% data variables.product.prodname_dotcom %}.

Both check suites and check runs contain commit statuses. For more information about checks, see "[AUTOTITLE](/rest/checks)" and "[AUTOTITLE](/rest/guides/using-the-rest-api-to-interact-with-checks)."

You can also create annotations with additional details for specific lines of code. Annotations are visible in the **Checks** tab. When you create an annotation for a file that is part of the pull request, the annotations are also shown in the **Files changed** tab.

Each time new code is pushed to a repository, {% data variables.product.prodname_dotcom %} sends the [`check_suite` webhook event](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite) to all {% data variables.product.prodname_github_apps %} installed on the repository. To receive all checks event actions, the app must have the `checks:write` permission. {% data variables.product.prodname_dotcom %} automatically creates `check_suite` events for new code commits in a repository using the default flow, although you can change the default settings. For more information, see "[AUTOTITLE](/rest/checks#update-repository-preferences-for-check-suites)." Here's how the default flow works:

1. Whenever someone pushes code to the repository, {% data variables.product.prodname_dotcom %} sends the `check_suite` event with an action of `requested` to all {% data variables.product.prodname_github_apps %} installed on the repository that have the `checks:write` permission. This event lets the apps know that code was pushed and that {% data variables.product.prodname_dotcom %} has automatically created a new check suite.
1. When your app receives this event, it can [add check runs](/rest/checks#create-a-check-run) to that suite.
1. Your check runs can include [annotations](/rest/checks#annotations-object) that are displayed on specific lines of code.

**In this guide, you’ll learn how to:**

* Part 1: Set up the framework for a CI server using the Checks API.
  * Configure a {% data variables.product.prodname_github_app %} as a server that receives Checks API events.
  * Create new check runs for CI tests when a repository receives newly pushed commits.
  * Re-run check runs when a user requests that action on {% data variables.product.prodname_dotcom %}.
* Part 2: Build on the CI server framework you created by adding a linter CI test.
  * Update a check run with a `status`, `conclusion`, and `output` details.
  * Create annotations on lines of code that {% data variables.product.prodname_dotcom %} displays in the **Checks** and **Files Changed** tab of a pull request.
  * Automatically fix linter recommendations by exposing a "Fix this" button in the **Checks** tab of the pull request.

## Prerequisites

Before you get started, you may want to familiarize yourself with the following concepts:

- [{% data variables.product.prodname_github_apps %}](/apps)
- [Webhooks](/webhooks-and-events/webhooks/about-webhooks)
- [REST API checks endpoints](/rest/checks)

The Checks endpoints are also available to use in GraphQL, but this tutorial focuses on REST. For more information about the GraphQL objects, see [Checks Suite](/graphql/reference/objects#checksuite) and [Check Run](/graphql/reference/objects#checkrun) in the GraphQL documentation.

You'll use the [Ruby programming language](https://www.ruby-lang.org/en/), the [Smee](https://smee.io/) webhook payload delivery service, the [Octokit.rb Ruby library](https://octokit.github.io/octokit.rb/) for the {% data variables.product.prodname_dotcom %} REST API, and the [Sinatra web framework](https://sinatrarb.com/) to create your Checks API CI server app.

TODOCS: Add blurb about node.js? ([Example](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-github-app-that-responds-to-webhook-events#prerequisites))

TODOCS: Incorporate any additional prerequisites from the [dev environment tutorial](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/setting-up-your-development-environment-to-create-a-github-app#prerequisites)?

## Setup

The following sections will lead you through setting up the following components:

- A repository to store the code for your app.
- A way to receive webhooks locally.
- A {% data variables.product.prodname_github_app %} that is subscribed to "Check suite" and "Check run" webhook events, has write permission for checks, and uses a webhook URL that you can receive locally.

### Create a repository to store code for your {% data variables.product.prodname_github_app %}

1. Create a repository to store the code for your app. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. Clone your repository from the previous step. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)." You may use a local clone or {% data variables.product.prodname_github_codespaces %}.
1. In a terminal, navigate to the directory where your clone is stored.
1. Create a Ruby file named `server.rb`. This file will contain all the code for your app. You will add content to this file later.
1. If the directory doesn't already include a `.gitignore` file, add a `.gitignore` file. You will add content to this file later. For more information about `.gitignore` files, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."
1. Create a file named `Gemfile`. This file will describe the gem dependencies that your Ruby code needs. Add the following contents to your `Gemfile`:
   ```ruby{:copy}
   source 'http://rubygems.org'

   gem 'sinatra', '~> 2.0'
   gem 'jwt', '~> 2.1'
   gem 'octokit', '~> 4.0'
   gem 'rubocop'
   gem 'dotenv'
   gem 'git'
   ```
1. Create a file named `config.ru`. This file will configure your Sinatra server to run. Add the following contents to your `config.ru` file:
   ```ruby{:copy}
   require './server'
   run GHAapp
   ```

### Get a webhook proxy URL

In order to develop your app locally, you can use a webhook proxy URL to forward webhook events from {% data variables.product.company_short %} to your computer or codespace. This tutorial uses Smee.io to provide a webhook proxy URL and forward events.

1. In your browser, navigate to https://smee.io/.
1. Click **Start a new channel**.
1. Copy the full URL under "Webhook Proxy URL". You will use this URL in a following step, and during the app registration steps later in the tutorial.
1. In a terminal, run the following command to install the Smee client:
   ```shell{:copy}
   npm install --global smee-client
   ```
1. In the terminal, run the following command to start the Smee client. Replace `https://smee.io/YOUR_DOMAIN` with the Webhook Proxy URL you copied in the previous step.
   ```shell{:copy}
   smee --url https://smee.io/YOUR_DOMAIN --path /event_handler --port 3000
   ```
   You should see output like the following:
   ```shell
   Forwarding https://smee.io/YOUR_DOMAIN to http://127.0.0.1:3000/event_handler
   Connected https://smee.io/YOUR_DOMAIN
   ```

The `smee --url https://smee.io/YOUR_DOMAIN` command tells Smee to forward all webhook events received by the Smee channel to the Smee client running on your computer. The `--path /event_handler` option forwards events to the `/event_handler` route, which we'll cover in a [later section](#review-the-template-code). The `--port 3000` option specifies port 3000, which is the port your server will be listening to. Using Smee, your machine does not need to be open to the public internet to receive webhooks from {% data variables.product.prodname_dotcom %}. You can also open that Smee URL in your browser to inspect webhook payloads as they come in.

We recommend leaving this terminal window open and keeping Smee connected while you complete the rest of the steps in this guide. Although you _can_ disconnect and reconnect the Smee client without losing your unique domain, you may find it easier to leave it connected and do other command-line tasks in a different terminal window.

### Register a {% data variables.product.prodname_github_app %}

For this tutorial, you must register a {% data variables.product.prodname_github_app %} that:

- Has webhooks active
- Uses a webhook URL that you can receive locally
- Has the "Checks" repository permission
- Subscribes to the "Checks" webhook event

The following steps will guide you through configuring a {% data variables.product.prodname_github_app %} with these settings. For more information about {% data variables.product.prodname_github_app %} settings, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Click **New GitHub App**.
1. Under "GitHub App name," enter a name for your app. For example, `USERNAME-ci-test-app` where `USERNAME` is your {% data variables.product.company_short %} username.
1. Under "Homepage URL," enter a URL for your app. For example, you can use the URL of the repository that you created to store the code for your app.
1. Skip the "Identifying and authorizing users" and "Post installation" sections for this tutorial. For more information about these settings, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."
1. Make sure that **Active** is selected under "Webhooks."
1. Under "Webhook URL", enter your webhook proxy URL from earlier. For more information, see "[Get a webhook proxy URL](#get-a-webhook-proxy-url)."
1. Under "Webhook secret," enter a random string. This secret is used to verify that webhooks are sent by {% data variables.product.prodname_dotcom %}. You will use this string later.
1. Under "Repository permissions," next to "Checks," select **Read & write**.
1. Under "Subscribe to events," select **Check suite** and **Check run**.
1. Under "Where can this GitHub App be installed?", select **Only on this account**. You can change this later if you want to publish your app.
1. Click **Create GitHub App**.

### Store your app's identifying information and credentials

This tutorial will show you how to store your app's credentials and identifying information as environment variables in a `.env` file. When you deploy your app, you will want to change how you store the credentials. For more information, see "[Deploy your app](#deploy-your-app)."

Make sure that you are on a secure machine before performing these steps since you will store your credentials locally.

1. In your terminal, navigate to the directory where your clone is stored.
1. Create a file called `.env` at the top level of this directory.
1. Add `.env` to your `.gitignore` file. This will prevent you from accidentally committing your app's credentials.
1. Add the following contents to your `.env` file. {% ifversion ghes or ghae %}Replace `YOUR_HOSTNAME` with the name of {% data variables.location.product_location %}. You will update the other values in a later step.{% else %}You will update the values in a later step.{% endif %}

   ```{:copy}
   GITHUB_APP_IDENTIFIER="YOUR_APP_ID"
   GITHUB_WEBHOOK_SECRET="YOUR_WEBHOOK_SECRET"
   GITHUB_PRIVATE_KEY="YOUR_PRIVATE_KEY"
   ```

1. {% data reusables.apps.navigate-to-app-settings-page %}
1. On your app's settings page, next to "App ID," find the app ID for your app.
1. In your `.env` file, replace `YOUR_APP_ID` with the app ID of your app.
1. In your `.env` file, replace `YOUR_WEBHOOK_SECRET` with the webhook secret for your app. If you have forgotten your webhook secret, under "Webhook secret (optional)," click **Change secret**. Enter a new secret, then click **Save changes**.
1. On your app's settings page, under "Private keys," click **Generate a private key**. You will see a private key `.pem` file downloaded to your computer.
1. Open the `.pem` file with a text editor, or use the following command on the command line to display the contents of the file: `cat PATH/TO/YOUR/private-key.pem`.
1. Copy and paste the entire contents of the file into your `.env` file as the value of `GITHUB_PRIVATE_KEY`, and add double quotes around the entire value.

   Here is an example .env file:

   ```
   GITHUB_APP_IDENTIFIER=12345
   GITHUB_WEBHOOK_SECRET=your webhook secret
   GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
   ...
   HkVN9...
   ...
   -----END DSA PRIVATE KEY-----"
   ```

## Add code for your {% data variables.product.prodname_github_app %}

This section will show you how to add some basic template code for your {% data variables.product.prodname_github_app %}, and it will explain what the code does. Later in the tutorial, you will learn how to modify and add to this code, to build out your app's functionality.

Add the following template code to your `server.rb` file:

```ruby{:copy}
require 'sinatra'
require 'octokit'
require 'dotenv/load' # Manages environment variables
require 'json'
require 'openssl'     # Verifies the webhook signature
require 'jwt'         # Authenticates a GitHub App
require 'time'        # Gets ISO 8601 representation of a Time object
require 'logger'      # Logs debug statements

set :port, 3000
set :bind, '0.0.0.0'


# This is template code to create a GitHub App server.
# You can read more about GitHub Apps here: https://docs.github.com/en/apps
#
# On its own, this app does absolutely nothing, except that it can be installed.
# This tutorial will show you how to add more functionality.
#
# This code is a Sinatra app, for two reasons:
#   1. Because the app will require a landing page for installation.
#   2. To easily handle webhook events.
#

class GHAapp < Sinatra::Application

  # Expects that the private key in PEM format. Converts the newlines
  PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

  # Your registered app must have a secret set. The secret is used to verify
  # that webhooks are sent by GitHub.
  WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

  # The GitHub App's identifier (type integer) set when registering an app.
  APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']

  # Turn on Sinatra's verbose logging during development
  configure :development do
    set :logging, Logger::DEBUG
  end


  # Before each request to the `/event_handler` route
  before '/event_handler' do
    get_payload_request(request)
    verify_webhook_signature
    authenticate_app
    # Authenticate the app installation in order to run API operations
    authenticate_installation(@payload)
  end


  post '/event_handler' do

    # ADD YOUR CODE HERE #

    200 # success status
  end


  helpers do

    # ADD YOUR HELPER METHODS HERE #

    # Saves the raw payload and converts the payload to JSON format
    def get_payload_request(request)
      # request.body is an IO or StringIO object
      # Rewind in case someone already read it
      request.body.rewind
      # The raw text of the body is required for webhook signature verification
      @payload_raw = request.body.read
      begin
        @payload = JSON.parse @payload_raw
      rescue => e
        fail  'Invalid JSON (#{e}): #{@payload_raw}'
      end
    end

    # Instantiate an Octokit client authenticated as a GitHub App.
    # GitHub App authentication requires that you construct a
    # JWT (https://jwt.io/introduction/) signed with the app's private key,
    # so GitHub can be sure that it came from the app an not altererd by
    # a malicious third party.
    def authenticate_app
      payload = {
          # The time that this JWT was issued, _i.e._ now.
          iat: Time.now.to_i,

          # JWT expiration time (10 minute maximum)
          exp: Time.now.to_i + (10 * 60),

          # Your GitHub App's identifier number
          iss: APP_IDENTIFIER
      }

      # Cryptographically sign the JWT.
      jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

      # Create the Octokit client, using the JWT as the auth token.
      @app_client ||= Octokit::Client.new(bearer_token: jwt)
    end

    # Instantiate an Octokit client, authenticated as an installation of a
    # GitHub App, to run API operations.
    def authenticate_installation(payload)
      @installation_id = payload['installation']['id']
      @installation_token = @app_client.create_app_installation_access_token(@installation_id)[:token]
      @installation_client = Octokit::Client.new(bearer_token: @installation_token)
    end

    # Check X-Hub-Signature to confirm that this webhook was generated by
    # GitHub, and not a malicious third party.
    #
    # GitHub uses the WEBHOOK_SECRET, registered to the GitHub App, to
    # create the hash signature sent in the `X-HUB-Signature` header of each
    # webhook. This code computes the expected hash signature and compares it to
    # the signature sent in the `X-HUB-Signature` header. If they don't match,
    # this request is an attack, and you should reject it. GitHub uses the HMAC
    # hexdigest to compute the signature. The `X-HUB-Signature` looks something
    # like this: 'sha1=123456'.
    # See https://developer.github.com/webhooks/securing/ for details.
    def verify_webhook_signature
      their_signature_header = request.env['HTTP_X_HUB_SIGNATURE'] || 'sha1='
      method, their_digest = their_signature_header.split('=')
      our_digest = OpenSSL::HMAC.hexdigest(method, WEBHOOK_SECRET, @payload_raw)
      halt 401 unless their_digest == our_digest

      # The X-GITHUB-EVENT header provides the name of the event.
      # The action value indicates the which action triggered the event.
      logger.debug "---- received event #{request.env['HTTP_X_GITHUB_EVENT']}"
      logger.debug "----    action #{@payload['action']}" unless @payload['action'].nil?
    end

  end

  # Finally some logic to let us run this server directly from the command line,
  # or with Rack. Don't worry too much about this code. But, for the curious:
  # $0 is the executed file
  # __FILE__ is the current file
  # If they are the same—that is, we are running this file directly, call the
  # Sinatra run method
  run! if __FILE__ == $0
end
```

The rest of this section will explain what the template code does. There aren't any steps that you need to complete in this section. If you're already familiar with the template code, you can skip ahead to "[Start the server](#start-the-server)."

### Review the template code

Open up the `server.rb` file in a text editor. You'll see comments throughout the file that provide additional context for the template code. We recommend reading those comments carefully and even adding your own comments to accompany new code you write.

At the top of the file you'll see `set :port 3000`, which sets the port used when starting the web server to match the port you redirected your webhook payloads to in "[Get a Webhook Proxy URL](#get-a-webhook-proxy-url)."

The next code you'll see is the `class GHApp < Sinatra::Application` declaration. You'll write all of the code for your {% data variables.product.prodname_github_app %} inside this class.

The class in the template does the following things:
* [Read the environment variables](#read-the-environment-variables)
* [Turn on logging](#turn-on-logging)
* [Define a before filter](#define-a-before-filter)
* [Define the route handler](#define-a-route-handler)
* [Define the helper methods](#define-the-helper-methods)

#### Read the environment variables

First, this class reads the three environment variables you set in "[Store your app's identifying information and credentials](#store-your-apps-identifying-information-and-credentials)," and stores them in variables to use later:

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

#### Turn on logging

Next is a code block that enables logging during development, which is the default environment in Sinatra. This code turns on logging at the `DEBUG` level to show useful output in the terminal while you are developing the app.

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

#### Define a before filter

Sinatra uses [before filters](https://github.com/sinatra/sinatra#filters) that allow you to execute code before the route handler. The `before` block in the template calls four [helper methods](https://github.com/sinatra/sinatra#helpers). The template app defines those helper methods in a [later section](#define-the-helper-methods).

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

#### Define a route handler

An empty route is included in the template code. This code handles all `POST` requests to the `/event_handler` route. You will add more code to this later.

TODOCS: Make sure we talk about adding more code to this later in the tutorial.

``` ruby
post '/event_handler' do

end
```

#### Define the helper methods

Four helper methods are called in the `before` block of the template code. The `helpers do` block in the template defines each of these helper methods.

##### Handling the webhook payload

The first method `get_payload_request` captures the webhook payload and converts it to JSON format, which makes accessing the payload's data much easier.

##### Verifying the webhook signature

The second method `verify_webhook_signature` performs verification of the webhook signature to ensure that {% data variables.product.prodname_dotcom %} generated the event. To learn more about the code in the `verify_webhook_signature` helper method, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks)." If the webhooks are secure, this method will log all incoming payloads to your terminal. The logger code is helpful in verifying your web server is working but you can always remove it later.

##### Authenticating as a {% data variables.product.prodname_github_app %}

To make API calls, you'll be using the [Octokit library](https://octokit.github.io/octokit.rb/). Doing anything interesting with this library will require your {% data variables.product.prodname_github_app %} to authenticate. {% data variables.product.prodname_github_apps %} have two methods of authentication:

- Authenticating as a {% data variables.product.prodname_github_app %} using a [JSON Web Token (JWT)](https://jwt.io/introduction).
- Authenticating as a specific installation of a {% data variables.product.prodname_github_app %} using an installation access token.

You'll learn about authenticating as an installation in the [next section](#authenticating-as-an-installation).

Authenticating as a {% data variables.product.prodname_github_app %} lets you do a couple of things:

 * You can retrieve high-level management information about your {% data variables.product.prodname_github_app %}.
 * You can request access tokens for an installation of the app.

For example, you would authenticate as a {% data variables.product.prodname_github_app %} to retrieve a list of the accounts (organization and personal) that have installed your app. But this authentication method doesn't allow you to do much with the API. To access a repository's data and perform operations on behalf of the installation, you need to authenticate as an installation. To do that, you'll need to authenticate as a {% data variables.product.prodname_github_app %} first to request an installation access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

Before you can use the Octokit.rb library to make API calls, you'll need to initialize an [Octokit client](https://octokit.github.io/octokit.rb/Octokit/Client.html) authenticated as a GitHub App, using the `authenticate_app` helper method.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

The code above generates a JSON Web Token (JWT) and uses it (along with your app's private key) to initialize the Octokit client. GitHub checks a request's authentication by verifying the token with the app's stored public key. To learn more about how this code works, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)."

##### Authenticating as an installation

An _installation_ refers to any user or organization account that has installed the app. Even if someone installs the app on more than one repository, it only counts as one installation because it's within the same account. The last helper method `authenticate_installation` initializes an [Octokit client](https://octokit.github.io/octokit.rb/Octokit/Client.html) authenticated as an installation. This Octokit client is what you'd use to make authenticated API calls.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

The [`create_app_installation_access_token`](https://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit method creates an installation token. This method accepts two arguments:

* Installation (integer): The ID of a {% data variables.product.prodname_github_app %} installation
* Options (hash, defaults to `{}`): A customizable set of options

Any time a {% data variables.product.prodname_github_app %} receives a webhook, it includes an `installation` object with an `id`. Using the client authenticated as a {% data variables.product.prodname_github_app %}, you pass this ID to the `create_app_installation_access_token` method to generate an access token for each installation. Since you're not passing any options to the method, the options default to an empty hash. The response for `create_app_installation_access_token` includes two fields: `token` and `expired_at`. The template code selects the token in the response and initializes an installation client.

With this method in place, each time your app receives a new webhook payload, it creates a client for the installation that triggered the event. This authentication process enables your {% data variables.product.prodname_github_app %} to work for all installations on any account.

## Start the server

Your app doesn't do anything yet, but at this point, you can get it running on the server.

Keep Smee running in the current tab in your terminal. Open a new tab and `cd` into the directory where you [cloned the template app code](#create-a-repository-to-store-code-for-your-app). The Ruby code in this repository will start up a [Sinatra](https://sinatrarb.com/) web server. This code has a few dependencies. You can install these by running:

```shell{:copy}
gem install bundler
```

Followed by:

```shell{:copy}
bundle install
```

With the dependencies installed, you can start the server:

```shell{:copy}
bundle exec ruby server.rb
```

You should see a response like:

```shell
> == Sinatra (v2.2.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Puma version: 6.3.0 (ruby 3.1.2-p20) ("Mugi No Toki Itaru")
> *  Min threads: 0
> *  Max threads: 5
> *  Environment: development
> *          PID: 14915
> * Listening on http://0.0.0.0:3000
> Use Ctrl-C to stop
```

If you see an error, make sure you've created the `.env` file in the directory that contains `server.rb`.

Once the server is running, test it by going to `http://localhost:3000` in your browser. If you see an error page that says "Sinatra doesn't know this ditty," the app is working as expected.

Even though it's an error page, it's a Sinatra error page, which means your app is connected to the server as expected. You're seeing this message because you haven't given the app anything else to show.

## Test that the server is listening to your app

You can test that the server is listening to your app by triggering an event for it to receive. A simple event you can test is installing the app on your {% data variables.product.prodname_dotcom %} account, which should send the [`installation`](/webhooks-and-events/webhooks/webhook-events-and-payloads#installation) event. If the app receives it, you should see some output in the terminal tab where you started `server.rb`.

1. Install the {% data variables.product.prodname_github_app %} on your account. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app#installing-your-own-github-app)." You can choose to install it on all of your repositories, or just one. For example, you could install it on the repository you created for this tutorial.
2. After you click **Install**, look at the output in the terminal tab where you started `server.rb`. You should see something like this:

   ```shell
   > D, [2023-06-08T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
   > D, [2023-06-08T15:45:43.773141 #30488] DEBUG -- : ----         action created
   > 192.30.252.44 - - [08/Jun/2023:15:45:43 -0400] "POST /event_handler HTTP/1.1" 200 - 0.5390
   > D, [2023-06-08T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
   > D, [2023-06-08T15:45:43.833062 #30488] DEBUG -- : ----         action created
   > 192.30.252.39 - - [08/Jun/2023:15:45:43 -0400] "POST /event_handler HTTP/1.1" 200 - 0.5390
   ```

   If you see output like this, it means your app received a notification that it was installed on your {% data variables.product.prodname_dotcom %} account. The app is running on the server as expected.

If you don't see this output, make sure Smee is running correctly in another terminal tab. If you need to restart Smee, note that you'll also need to _uninstall_ and _reinstall_ the app to send the `installation` event to your app again and see the output in terminal. If Smee isn't the problem, see the "[Troubleshooting](#troubleshooting)" section for other ideas. [TODOCS: Remove troubleshooting link if we remove troubleshooting section.]

If you're wondering where the terminal output above is coming from, it's written in the app template code you added to `server.rb` in "[Add code for your {% data variables.product.prodname_github_app %}](#add-code-for-your-github-app)".

## Part 1. Creating the Checks API interface

In this part, you will add the code necessary to receive `check_suite` webhook events and create and update check runs. You'll also learn how to create check runs when a check was re-requested on {% data variables.product.prodname_dotcom %}. At the end of this section, you'll be able to view the check run you created in a {% data variables.product.prodname_dotcom %} pull request.

Your check run will not be performing any checks on the code in this section. You'll add that functionality in [Part 2: Creating the Octo RuboCop CI test](#part-2-creating-the-octo-rubocop-ci-test).

You should already have a Smee channel configured that is forwarding webhook payloads to your local server. Your server should be running and connected to the {% data variables.product.prodname_github_app %} you registered and installed on a test repository.

Let's get started! These are the steps you'll complete in Part 1:

1. [Add event handling](#step-11-add-event-handling)
1. [Create a check run](#step-12-create-a-check-run)
1. [Update a check run](#step-13-update-a-check-run)

## Step 1.1. Add event handling

Because your app is subscribed to the **Check suite** and **Check run** events, it will receive the [`check_suite`](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite) and [`check_run`](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run) webhooks. {% data variables.product.prodname_dotcom %} sends webhook payloads as `POST` requests. Because you forwarded your Smee webhook payloads to `http://localhost:3000/event_handler`, your server will receive the `POST` request payloads at the `post '/event_handler'` route.

An empty `post '/event_handler'` route is already included in the template code in the `server.rb` file that you created in "[Add code for your {% data variables.product.prodname_github_app %}](#add-code-for-your--data-variablesproductprodname_github_app)." The empty route looks like this:

``` ruby
  post '/event_handler' do

    # ADD YOUR CODE HERE  #

    200 # success status
  end
```

Use this route to handle the `check_suite` event by adding the following code. Under `post '/event_handler' do`, where it says `# ADD YOUR CODE HERE  #`, add the following code:

``` ruby{:copy}
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Every event that {% data variables.product.prodname_dotcom %} sends includes a request header called `HTTP_X_GITHUB_EVENT`, which indicates the type of event in the `POST` request. Right now, you're only interested in events of type `check_suite`, which are emitted when a new check suite is created. Each event has an additional `action` field that indicates the type of action that triggered the events. For `check_suite`, the `action` field can be `requested`, `rerequested`, or `completed`.

The `requested` action requests a check run each time code is pushed to the repository, while the `rerequested` action requests that you re-run a check for code that already exists in the repository. Because both the `requested` and `rerequested` actions require creating a check run, you'll call a helper called `create_check_run`. Let's write that method now.

## Step 1.2. Create a check run

You'll add this new method as a [Sinatra helper](https://github.com/sinatra/sinatra#helpers) in case you want other routes to use it too.

Under `helpers do`, where it says `# ADD YOUR HELPER METHODS HERE #`, add this `create_check_run` method:

``` ruby{:copy}
# Create a new check run with status "queued"
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

This code calls the "[AUTOTITLE](/rest/checks#create-a-check-run)" endpoint using the Octokit [create_check_run method](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method).

To create a check run, only two input parameters are required: `name` and `head_sha`. We will use [RuboCop](https://rubocop.readthedocs.io/en/latest/) to implement the CI test later in this tutorial, which is why the name "Octo RuboCop" is used here, but you can choose any name you'd like for the check run.

You're only supplying the required parameters now to get the basic functionality working, but you'll update the check run later as you collect more information about the check run. By default, {% data variables.product.prodname_dotcom %} sets the `status` to `queued`.

{% data variables.product.prodname_dotcom %} creates a check run for a specific commit SHA, which is why `head_sha` is a required parameter. You can find the commit SHA in the webhook payload. Although you're only creating a check run for the `check_suite` event right now, it's good to know that the `head_sha` is included in both the `check_suite` and `check_run` objects in the event payloads.

In the code above, you're using the [ternary operator](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), which works like an `if/else` statement, to check if the payload contains a `check_run` object. If it does, you read the `head_sha` from the `check_run` object, otherwise you read it from the `check_suite` object.

To test this code, restart the server from your terminal:

```shell{:copy}
ruby server.rb
```

{% note %}

**Note:** You'll need to restart the Sinatra server before you can test changes. Enter `Ctrl-C` to stop the server, and then run `ruby server.rb` again. If you don't want to do this every time you change your app code, you can look into [reloading](http://sinatrarb.com/faq.html#reloading).

{% endnote %}

Now open a pull request in the repository where you installed your app. Your app should respond by creating a check run on your pull request. Click on the **Checks** tab, and you should see a check run with the name "Octo RuboCop", or whichever name you chose earlier for the check run.

If you see other apps in the Checks tab, it means you have other apps installed on your repository that have **Read & write** access to checks and are subscribed to **Check suite** and **Check run** events.

Great! You've told {% data variables.product.prodname_dotcom %} to create a check run. You can see the check run status is set to `queued` next to a yellow icon. Next, you'll want to wait for {% data variables.product.prodname_dotcom %} to create the check run and update its status.

## Step 1.3. Updating a check run

When your `create_check_run` method runs, it asks {% data variables.product.prodname_dotcom %} to create a new check run. When {% data variables.product.prodname_dotcom %} finishes creating the check run, you'll receive the `check_run` webhook event with the `created` action. That event is your signal to begin running the check.

You'll want to update your event handler to look for the `created` action. While you're updating the event handler, you can add a conditional for the `rerequested` action. When someone re-runs a single test on {% data variables.product.prodname_dotcom %} by clicking the "Re-run" button, {% data variables.product.prodname_dotcom %} sends the `rerequested` check run event to your app. When a check run is `rerequested`, you'll want to start the process all over and create a new check run.

To include a condition for the `check_run` event in the `post '/event_handler'` route, add the following code under `case request.env['HTTP_X_GITHUB_EVENT']`:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

{% data variables.product.prodname_dotcom %} sends all events for `created` check runs to every app installed on a repository that has the necessary checks permissions. That means that your app will receive check runs created by other apps. A `created` check run is a little different from a `requested` or `rerequested` check suite, which {% data variables.product.prodname_dotcom %} sends only to apps that are being requested to run a check. The code above looks for the check run's application ID. This filters out all check runs for other apps on the repository.

Next you'll write the `initiate_check_run` method, which is where you'll update the check run status and prepare to kick off your CI test.

In this section, you're not going to kick off the CI test yet, but you'll walk through how to update the status of the check run from `queued` to `pending` and then from `pending` to `completed` to see the overall flow of a check run. In "[Part 2: Creating the Octo RuboCop CI test](#part-2-creating-the-octo-rubocop-ci-test)," you'll add the code that actually performs the CI test.

Let's create the `initiate_check_run` method and update the status of the check run. Add the following code to the helpers section:

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

The code above calls the "[AUTOTITLE](/rest/checks#update-a-check-run)" API endpoint using the [`update_check_run` Octokit method](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method) to update the check run that you already created.

Here's what this code is doing. First, it updates the check run's status to `in_progress` and implicitly sets the `started_at` time to the current time. In [Part 2](#part-2-creating-the-octo-rubocop-ci-test) of this tutorial, you'll add code that kicks off a real CI test under `***** RUN A CI TEST *****`. For now, you'll leave that section as a placeholder, so the code that follows it will just simulate that the CI process succeeds and all tests pass. Finally, the code updates the status of the check run again to `completed`.

You'll notice in the "[AUTOTITLE](/rest/checks#update-a-check-run)" docs that when you provide a status of `completed`, the `conclusion` and `completed_at` parameters are required. The `conclusion` summarizes the outcome of a check run and can be `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `skipped`, or `action_required`. You'll set the conclusion to `success`, the `completed_at` time to the current time, and the status to `completed`.

You could also provide more details about what your check is doing, but you'll get to that in the next section. Let's test this code again by re-running `template_server.rb`:

```shell
$ ruby template_server.rb
```

Head over to your open pull request and click the **Checks** tab. Click the "Re-run all" button in the upper right corner. You should see the check run move from `pending` to `in_progress` and end with `success`.

## Part 2. Creating the Octo RuboCop CI test

[RuboCop](https://rubocop.readthedocs.io/en/latest/) is a Ruby code linter and formatter. It checks Ruby code to ensure that it complies with the "[Ruby Style Guide](https://github.com/rubocop-hq/ruby-style-guide)." RuboCop has three primary functions:

* Linting to check code style
* Code formatting
* Replaces the native Ruby linting capabilities using `ruby -w`

Now that you've got the interface created to receive Checks API events and create check runs, you can create a check run that implements a CI test.

Your app will run RuboCop on the CI server and create check runs (CI tests in this case) that report the results that RuboCop reports to {% data variables.product.prodname_dotcom %}.

The Checks API allows you to report rich details about each check run, including statuses, images, summaries, annotations, and requested actions.

Annotations are information about specific lines of code in a repository. An annotation allows you to pinpoint and visualize the exact parts of the code you'd like to show additional information for. That information can be anything: for example, a comment, an error, or a warning. This tutorial uses annotations to visualize RuboCop errors.

To take advantage of requested actions, app developers can create buttons in the **Checks** tab of pull requests. When someone clicks one of these buttons, the click sends a `requested_action` `check_run` event to the {% data variables.product.prodname_github_app %}. The action that the app takes is completely configurable by the app developer. This tutorial will walk you through adding a button that allows users to request that RuboCop fix the errors it finds. RuboCop supports automatically fixing errors using a command-line option, and you'll configure the `requested_action` to take advantage of this option.

Let's get started! These are the steps you'll complete in this section:

1. [Adding a Ruby file](#step-21-adding-a-ruby-file)
1. [Cloning the repository](#step-22-cloning-the-repository)
1. [Running RuboCop](#step-23-running-rubocop)
1. [Collecting RuboCop errors](#step-24-collecting-rubocop-errors)
1. [Updating the check run with CI test results](#step-25-updating-the-check-run-with-ci-test-results)
1. [Automatically fixing RuboCop errors](#step-26-automatically-fixing-rubocop-errors)
1. [Security tips](#step-27-security-tips)

## Step 2.1. Adding a Ruby file

You can pass specific files or entire directories for RuboCop to check. In this tutorial, you'll run RuboCop on an entire directory. Because RuboCop only checks Ruby code, you'll want at least one Ruby file in your repository that contains errors. The example file provided below contains a few errors. Add this example Ruby file to the repository where your app is installed (make sure to name the file with an `.rb` extension, as in `myfile.rb`):

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

## Step 2.2. Cloning the repository

RuboCop is available as a command-line utility. That means your {% data variables.product.prodname_github_app %} will need to clone a local copy of the repository on the CI server so RuboCop can parse the files. To run Git operations in your Ruby app, you can use the [ruby-git](https://github.com/ruby-git/ruby-git) gem.

The `Gemfile` in the `building-a-checks-api-ci-server` repository already includes the ruby-git gem, and you installed it when you ran `bundle install` in the [prerequisite steps](#prerequisites). To use the gem, add this code to the top of your `template_server.rb` file:

``` ruby
require 'git'
```

Your app needs read permission for "Repository contents" to clone a repository. Later in this tutorial, you'll need to push contents to {% data variables.product.prodname_dotcom %}, which requires write permission. Go ahead and set your app's "Repository contents" permission to **Read & write** now so you don't need to update it again later. To update your app's permissions:

1. Select your app from the [app settings page](https://github.com/settings/apps) and click **Permissions & Webhooks** in the sidebar.
1. In the "Permissions" section, find "Repository contents", and select **Read & write** in the "Access" dropdown next to it.
{% data reusables.apps.accept_new_permissions_steps %}

To clone a repository using your {% data variables.product.prodname_github_app %}'s permissions, you can use the app's installation token (`x-access-token:<token>`) shown in the example below:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

The code above clones a repository over HTTP. It requires the full repository name, which includes the repository owner (user or organization) and the repository name. For example, the [octocat Hello-World](https://github.com/octocat/Hello-World) repository has a full name of `octocat/hello-world`.

After your app clones the repository, it needs to pull the latest code changes and check out a specific Git ref. The code to do all of this will fit nicely into its own method. To perform these operations, the method needs the name and full name of the repository and the ref to checkout. The ref can be a commit SHA, branch, or tag. Add the following new method to the helper method section in `template_server.rb`:

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

The code above uses the `ruby-git` gem to clone the repository using the app's installation token. This code clones the code in the same directory as `template_server.rb`. To run Git commands in the repository, the code needs to change into the repository directory. Before changing directories, the code stores the current working directory in a variable (`pwd`) to remember where to return before exiting the `clone_repository` method.

From the repository directory, this code fetches and merges the latest changes (`@git.pull`), checks out the ref (`@git.checkout(ref)`), then changes the directory back to the original working directory (`pwd`).

Now you've got a method that clones a repository and checks out a ref. Next, you need to add code to get the required input parameters and call the new `clone_repository` method. Add the following code under the `***** RUN A CI TEST *****` comment in your `initiate_check_run` helper method:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

The code above gets the full repository name and the head SHA of the commit from the `check_run` webhook payload.

## Step 2.3. Running RuboCop

Great! You're cloning the repository and creating check runs using your CI server. Now you'll get into the nitty gritty details of the [RuboCop linter](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) and [Checks API annotations](/rest/checks#create-a-check-run).

The following code runs RuboCop and saves the style code errors in JSON format. Add this code below the call to `clone_repository` you added in the [previous step](#step-22-cloning-the-repository) and above the code that updates the check run to complete.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

The code above runs RuboCop on all files in the repository's directory. The option `--format json` is a handy way to save a copy of the linting results in a machine-parsable format. See the [RuboCop docs](https://docs.rubocop.org/rubocop/formatters.html#json-formatter) for details and an example of the JSON format.

Because this code stores the RuboCop results in a `@report` variable, it can safely remove the checkout of the repository. This code also parses the JSON so you can easily access the keys and values in your {% data variables.product.prodname_github_app %} using the `@output` variable.

{% note %}

**Note:** The command used to remove the repository (`rm -rf`) cannot be undone. See [Step 2.7. Security tips](#step-27-security-tips) to learn how to check webhooks for injected malicious commands that could be used to remove a different directory than intended by your app. For example, if a bad actor sent a webhook with the repository name `./`, your app would remove the root directory. 😱 If for some reason you're _not_ using the method `verify_webhook_signature` (which is included in `template_server.rb`) to validate the sender of the webhook, make sure you check that the repository name is valid.

{% endnote %}

You can test that this code works and see the errors reported by RuboCop in your server's debug output. Start up the `template_server.rb` server again and create a new pull request in the repository where you're testing your app:

```shell
$ ruby template_server.rb
```

You should see the linting errors in the debug output, although they aren't printed with formatting. You can use a web tool like [JSON formatter](https://jsonformatter.org/) to format your JSON output like this formatted linting error output:

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

## Step 2.4. Collecting RuboCop errors

The `@output` variable contains the parsed JSON results of the RuboCop report. As shown above, the results contain a `summary` section that your code can use to quickly determine if there are any errors. The following code will set the check run conclusion to `success` when there are no reported errors. RuboCop reports errors for each file in the `files` array, so if there are errors, you'll need to extract some data from the file object.

The Checks API allows you to create annotations for specific lines of code. When you create or update a check run, you can add annotations. In this tutorial you are [updating the check run](/rest/checks#update-a-check-run) with annotations.

The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [AUTOTITLE](/rest/checks#update-a-check-run) endpoint. For example, to create 105 annotations you'd need to call the [AUTOTITLE](/rest/checks#update-a-check-run) endpoint three times. The first two requests would each have 50 annotations, and the third request would include the five remaining annotations. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run.

A check run expects annotations as an array of objects. Each annotation object must include the `path`, `start_line`, `end_line`, `annotation_level`, and `message`. RuboCop provides the `start_column` and `end_column` too, so you can include those optional parameters in the annotation. Annotations only support `start_column` and `end_column` on the same line. See the [`annotations` object](/rest/checks#annotations-object-1) reference documentation for details.

You'll extract the required information from RuboCop needed to create each annotation. Append the following code to the code you added in the [previous section](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

This code limits the total number of annotations to 50. But you can modify this code to update the check run for each batch of 50 annotations. The code above includes the variable `max_annotations` that sets the limit to 50, which is used in the loop that iterates through the offenses.

When the `offense_count` is zero, the CI test is a `success`. If there are errors, this code sets the conclusion to `neutral` in order to prevent strictly enforcing errors from code linters. But you can change the conclusion to `failure` if you would like to ensure that the check suite fails when there are linting errors.

When errors are reported, the code above iterates through the `files` array in the RuboCop report. For each file, it extracts the file path and sets the annotation level to `notice`. You could go even further and set specific warning levels for each type of [RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html), but to keep things simpler in this tutorial, all errors are set to a level of `notice`.

This code also iterates through each error in the `offenses` array and collects the location of the offense and error message. After extracting the information needed, the code creates an annotation for each error and stores it in the `annotations` array. Because annotations only support start and end columns on the same line, `start_column` and `end_column` are only added to the `annotation` object if the start and end line values are the same.

This code doesn't yet create an annotation for the check run. You'll add that code in the next section.

## Step 2.5. Updating the check run with CI test results

Each check run from {% data variables.product.prodname_dotcom %} contains an `output` object that includes a `title`, `summary`, `text`, `annotations`, and `images`. The `summary` and `title` are the only required parameters for the `output`, but those alone don't offer much detail, so this tutorial adds `text` and `annotations` too. The code here doesn't add an image, but feel free to add one if you'd like!

For the `summary`, this example uses the summary information from RuboCop and adds some newlines (`\n`) to format the output. You can customize what you add to the `text` parameter, but this example sets the `text` parameter to the RuboCop version. To set the `summary` and `text`, append this code to the code you added in the [previous section](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Now you've got all the information you need to update your check run. In the [first half of this tutorial](#step-14-updating-a-check-run), you added this code to set the status of the check run to `success`:

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

You'll need to update that code to use the `conclusion` variable you set based on the RuboCop results (to `success` or `neutral`). You can update the code with the following:

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
  output: {
    title: 'Octo RuboCop',
    summary: summary,
    text: text,
    annotations: annotations
  },
  actions: [{
    label: 'Fix this',
    description: 'Automatically fix all linter notices.',
    identifier: 'fix_rubocop_notices'
  }],
  accept: 'application/vnd.github+json'
)
```

Now that you're setting a conclusion based on the status of the CI test and you've added the output from the RuboCop results, you've created a CI test! Congratulations. 🙌

The code above also adds a feature to your CI server called [requested actions](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) via the `actions` object. {% ifversion fpt or ghec %}(Note this is not related to [GitHub Actions](/actions).) {% endif %}Requested actions add a button in the **Checks** tab on {% data variables.product.prodname_dotcom %} that allows someone to request the check run to take additional action. The additional action is completely configurable by your app. For example, because RuboCop has a feature to automatically fix the errors it finds in Ruby code, your CI server can use a requested actions button to allow people to request automatic error fixes. When someone clicks the button, the app receives the `check_run` event with a `requested_action` action. Each requested action has an `identifier` that the app uses to determine which button was clicked.

The code above doesn't have RuboCop automatically fix errors yet. You'll add that in the next section. But first, take a look at the CI test that you just created by starting up the `template_server.rb` server again and creating a new pull request:

```shell
$ ruby template_server.rb
```

The annotations will show up in the **Checks** tab. Also notice the "Fix this" button that you created by adding a requested action.

If the annotations are related to a file already included in the PR, the annotations will also show up in the **Files changed** tab.

## Step 2.6. Automatically fixing RuboCop errors

If you've made it this far, kudos! 👏 You've already created a CI test. In this section, you'll add one more feature that uses RuboCop to automatically fix the errors it finds. You already added the "Fix this" button in the [previous section](#step-25-updating-the-check-run-with-ci-test-results). Now you'll add the code to handle the `requested_action` check run event triggered when someone clicks the "Fix this" button.

The RuboCop tool [offers](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses) the `--auto-correct` command-line option to automatically fix errors it finds. When you use the `--auto-correct` feature, the updates are applied to the local files on the server. You'll need to push the changes to {% data variables.product.prodname_dotcom %} after RuboCop does its magic.

To push to a repository, your app must have write permissions for "Repository contents." You set that permission back in [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) to **Read & write**, so you're all set.

In order to commit files, Git must know which [username](/get-started/getting-started-with-git/setting-your-username-in-git) and [email](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address) to associate with the commit. Add two more environment variables in your `.env` file to store the name (`GITHUB_APP_USER_NAME`) and email (`GITHUB_APP_USER_EMAIL`) settings. Your name can be the name of your app and the email can be any email you'd like for this example. For example:

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Once you've updated your `.env` file with the name and email of the author and committer, you'll be ready to add code to read the environment variables and set the Git configuration. You'll add that code soon.

When someone clicks the "Fix this" button, your app receives the [check run webhook](/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run) with the `requested_action` action type.

In [Step 1.4. Updating a check run](#step-14-updating-a-check-run) you updated the your `event_handler` to handle look for actions in the `check_run` event. You already have a case statement to handle the `created` and `rerequested` action types:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Add another `when` statement after the `rerequested` case to handle the `rerequested_action` event:

``` ruby
when 'requested_action'
  take_requested_action
```

This code calls a new method that will handle all `requested_action` events for your app. Add the following method to the helper methods section of your code:

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

The code above clones a repository just like the code you added in [Step 2.2. Cloning the repository](#step-22-cloning-the-repository). An `if` statement checks that the requested action's identifier matches the RuboCop button identifier (`fix_rubocop_notices`). When they match, the code clones the repository, sets the Git username and email, and runs RuboCop with the option `--auto-correct`. The `--auto-correct` option applies the changes to the local CI server files automatically.

The files are changed locally, but you'll still need to push them to {% data variables.product.prodname_dotcom %}. You'll use the handy `ruby-git` gem again to commit all of the files. Git has a single command that stages all modified or deleted files and commits them: `git commit -a`. To do the same thing using `ruby-git`, the code above uses the `commit_all` method. Then the code pushes the committed files to {% data variables.product.prodname_dotcom %} using the installation token, using the same authentication method as the Git `clone` command. Finally, it removes the repository directory to ensure the working directory is prepared for the next event.

That's it! The code you have written now completes your Checks API CI server. 💪 Restart your `template_server.rb` server again and create a new pull request:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

This time, click the "Fix this" button to automatically fix the errors RuboCop found from the **Checks** tab.

In the **Commits** tab, you'll see a brand new commit by the username you set in your Git configuration. You may need to refresh your browser to see the update.

Because a new commit was pushed to the repo, you'll see a new check suite for Octo RuboCop in the **Checks** tab. But this time there are no errors because RuboCop fixed them all.

To see the full final code for the app you just built, see "[Full code example](#full-code-example)."

## Step 2.7. Security tips

The template {% data variables.product.prodname_github_app %} code already has a method to verify incoming webhook payloads to ensure they are from a trusted source. If you are not validating webhook payloads, you'll need to ensure that when repository names are included in the webhook payload, the webhook does not contain arbitrary commands that could be used maliciously. The code below validates that the repository name only contains Latin alphabetic characters, hyphens, and underscores. To provide you with a complete example, the complete `server.rb` code available in the [companion repository](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) for this tutorial includes both the method of validating incoming webhook payloads and this check to verify the repository name.

``` ruby
# This tutorial example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

## Full code example

This is what the final code in `server.rb` should look like, after you've followed all of the steps in this tutorial. There are also comments throughout the code that provide additional context.

```ruby{:copy}
require 'sinatra'
require 'octokit'
require 'dotenv/load' # Manages environment variables
require 'json'
require 'openssl'     # Verifies the webhook signature
require 'jwt'         # Authenticates a GitHub App
require 'time'        # Gets ISO 8601 representation of a Time object
require 'logger'      # Logs debug statements
require 'git'

set :port, 3000
set :bind, '0.0.0.0'

class GHAapp < Sinatra::Application

  # Converts the newlines. Expects that the private key has been set as an
  # environment variable in PEM format.
  PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

  # Your registered app must have a secret set. The secret is used to verify
  # that webhooks are sent by GitHub.
  WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

  # The GitHub App's identifier (type integer) set when registering an app.
  APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']

  # Turn on Sinatra's verbose logging during development
  configure :development do
    set :logging, Logger::DEBUG
  end


  # Executed before each request to the `/event_handler` route
  before '/event_handler' do
    get_payload_request(request)
    verify_webhook_signature

    # This tutorial example uses the repository name in the webhook with
    # command line utilities. For security reasons, you should validate the
    # repository name to ensure that a bad actor isn't attempting to execute
    # arbitrary commands or inject false repository names. If a repository name
    # is provided in the webhook, validate that it consists only of latin
    # alphabetic characters, `-`, and `_`.
    unless @payload['repository'].nil?
      halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
    end

    authenticate_app
    # Authenticate the app installation in order to run API operations
    authenticate_installation(@payload)
  end


  post '/event_handler' do
    # Get the event type from the HTTP_X_GITHUB_EVENT header
    case request.env['HTTP_X_GITHUB_EVENT']

    when 'check_suite'
      # A new check_suite has been created. Create a new check run with status queued
      if @payload['action'] === 'requested' || @payload['action'] === 'rerequested'
        create_check_run
      end

    when 'check_run'
      # Check that the event is being sent to this app
      if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
        case @payload['action']
        when 'created'
          initiate_check_run
        when 'rerequested'
          create_check_run
        when 'requested_action'
          take_requested_action
        end
      end
    end

    200 # success status
  end


  helpers do

    # Create a new check run with the status queued
    def create_check_run
      # At the time of writing, Octokit does not support the Checks API, but
      # it does provide generic HTTP methods you can use:
      # https://developer.github.com/v3/checks/runs/#create-a-check-run
      check_run = @installation_client.post(
        "repos/#{@payload['repository']['full_name']}/check-runs",
        {
          # This header allows for beta access to Checks API
          accept: 'application/vnd.github.antiope-preview+json',
          # The name of your check run.
          name: 'Octo RuboCop',
          # The payload structure differs depending on whether a check run or a check suite event occurred.
          head_sha: @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha']
        }
      )

      # You requested the creation of a check run from GitHub. Now, you'll wait
      # to get confirmation from GitHub, in the form of a webhook, that it was
      # created before starting CI. Equivalently, a 201 response from
      # POST /repos/:owner/:repo/check-runs could also be used as confirmation.
    end

    # Start the CI process
    def initiate_check_run
      # Once the check run is created, you'll update the status of the check run
      # to 'in_progress' and run the CI process. When the CI finishes, you'll
      # update the check run status to 'completed' and add the CI results.

      # At the time of writing, Octokit doesn't support the Checks API, but
      # it does provide generic HTTP methods you can use:
      # https://developer.github.com/v3/checks/runs/#update-a-check-run
      updated_check_run = @installation_client.patch(
        "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
        {
          accept: 'application/vnd.github.antiope-preview+json',
          name: 'Octo RuboCop',
          status: 'in_progress',
          started_at: Time.now.utc.iso8601
        }
      )

      # ***** RUN A CI TEST *****
      # Ideally this would be performed async, so you could return immediately.
      # But for now you'll do a simulated CI process syncronously, and update
      # the check run right here.
      full_repo_name = @payload['repository']['full_name']
      repository     = @payload['repository']['name']
      head_sha       = @payload['check_run']['head_sha']

      clone_repository(full_repo_name, repository, head_sha)

      # Run RuboCop on all files in the repository
      @report = `rubocop '#{repository}' --format json`
      logger.debug @report
      `rm -rf #{repository}`
      @output = JSON.parse @report
      annotations = []
      # You can create a maximum of 50 annotations per request to the Checks
      # API. To add more than 50 annotations, use the "Update a check run" API
      # endpoint. This example code limits the number of annotations to 50.
      # See https://developer.github.com/v3/checks/runs/#update-a-check-run
      # for details.
      max_annotations = 50

      # RuboCop reports the number of errors found in 'offense_count'
      if @output['summary']['offense_count'] == 0
        conclusion = 'success'
      else
        conclusion = 'neutral'
        @output['files'].each do |file|

          # Only parse offenses for files in this app's repository
          file_path = file['path'].gsub(/#{repository}\//,'')
          annotation_level = 'notice'

          # Parse each offense to get details and location
          file['offenses'].each do |offense|
            # Limit the number of annotations to 50
            next if max_annotations == 0
            max_annotations -= 1

            start_line   = offense['location']['start_line']
            end_line     = offense['location']['last_line']
            start_column = offense['location']['start_column']
            end_column   = offense['location']['last_column']
            message      = offense['message']

            # Create a new annotation for each error
            annotation = {
              path: file_path,
              start_line: start_line,
              end_line: end_line,
              annotation_level: annotation_level,
              message: message
            }
            # Annotations only support start and end columns on the same line
            if start_line == end_line
              annotation.merge({start_column: start_column, end_column: end_column})
            end

            annotations.push(annotation)
          end
        end
      end

      # Updated check run summary and text parameters
      summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
      text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"

      # Mark the check run as complete! And if there are warnings, share them.
      updated_check_run = @installation_client.patch(
        "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
        {
          accept: 'application/vnd.github.antiope-preview+json',
          name: 'Octo RuboCop',
          status: 'completed',
          conclusion: conclusion,
          completed_at: Time.now.utc.iso8601,
          output: {
            title: 'Octo RuboCop',
            summary: summary,
            text: text,
            annotations: annotations
          },
          actions: [{
            label: 'Fix this',
            description: 'Automatically fix all linter notices.',
            identifier: 'fix_rubocop_notices'
          }]
        }
      )

    end

    # Handles the check run `requested_action` event
    # See https://developer.github.com/v3/activity/events/types/#checkrunevent
    def take_requested_action
      full_repo_name = @payload['repository']['full_name']
      repository     = @payload['repository']['name']
      head_branch    = @payload['check_run']['check_suite']['head_branch']

      if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
        clone_repository(full_repo_name, repository, head_branch)

        # Sets your commit username and email address
        @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
        @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

        # Automatically correct RuboCop style errors
        @report = `rubocop '#{repository}/*' --format json --auto-correct`

        pwd = Dir.getwd()
        Dir.chdir(repository)
        begin
          @git.commit_all('Automatically fix Octo RuboCop notices.')
          @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
        rescue
          # Nothing to commit!
          puts 'Nothing to commit'
        end
        Dir.chdir(pwd)
        `rm -rf '#{repository}'`
      end
    end

    # Clones the repository to the current working directory, updates the
    # contents using Git pull, and checks out the ref.
    #
    # full_repo_name  - The owner and repo. Ex: octocat/hello-world
    # repository      - The repository name
    # ref             - The branch, commit SHA, or tag to check out
    def clone_repository(full_repo_name, repository, ref)
      @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
      pwd = Dir.getwd()
      Dir.chdir(repository)
      @git.pull
      @git.checkout(ref)
      Dir.chdir(pwd)
    end

    # Saves the raw payload and converts the payload to JSON format
    def get_payload_request(request)
      # request.body is an IO or StringIO object
      # Rewind in case someone already read it
      request.body.rewind
      # The raw text of the body is required for webhook signature verification
      @payload_raw = request.body.read
      begin
        @payload = JSON.parse @payload_raw
      rescue => e
        fail  "Invalid JSON (#{e}): #{@payload_raw}"
      end
    end

    # Instantiate an Octokit client authenticated as a GitHub App.
    # GitHub App authentication requires that you construct a
    # JWT (https://jwt.io/introduction/) signed with the app's private key,
    # so GitHub can be sure that it came from the app an not altererd by
    # a malicious third party.
    def authenticate_app
      payload = {
          # The time that this JWT was issued, _i.e._ now.
          iat: Time.now.to_i,

          # JWT expiration time (10 minute maximum)
          exp: Time.now.to_i + (10 * 60),

          # Your GitHub App's identifier number
          iss: APP_IDENTIFIER
      }

      # Cryptographically sign the JWT.
      jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

      # Create the Octokit client, using the JWT as the auth token.
      @app_client ||= Octokit::Client.new(bearer_token: jwt)
    end

    # Instantiate an Octokit client, authenticated as an installation of a
    # GitHub App, to run API operations.
    def authenticate_installation(payload)
      @installation_id = payload['installation']['id']
      @installation_token = @app_client.create_app_installation_access_token(@installation_id)[:token]
      @installation_client = Octokit::Client.new(bearer_token: @installation_token)
    end

    # Check X-Hub-Signature to confirm that this webhook was generated by
    # GitHub, and not a malicious third party.
    #
    # GitHub uses the WEBHOOK_SECRET, registered to the GitHub App, to
    # create the hash signature sent in the `X-HUB-Signature` header of each
    # webhook. This code computes the expected hash signature and compares it to
    # the signature sent in the `X-HUB-Signature` header. If they don't match,
    # this request is an attack, and you should reject it. GitHub uses the HMAC
    # hexdigest to compute the signature. The `X-HUB-Signature` looks something
    # like this: 'sha1=123456'.
    # See https://developer.github.com/webhooks/securing/ for details.
    def verify_webhook_signature
      their_signature_header = request.env['HTTP_X_HUB_SIGNATURE'] || 'sha1='
      method, their_digest = their_signature_header.split('=')
      our_digest = OpenSSL::HMAC.hexdigest(method, WEBHOOK_SECRET, @payload_raw)
      halt 401 unless their_digest == our_digest

      # The X-GITHUB-EVENT header provides the name of the event.
      # The action value indicates the which action triggered the event.
      logger.debug "---- received event #{request.env['HTTP_X_GITHUB_EVENT']}"
      logger.debug "----    action #{@payload['action']}" unless @payload['action'].nil?
    end

  end

  # Finally some logic to let us run this server directly from the command line,
  # or with Rack. Don't worry too much about this code. But, for the curious:
  # $0 is the executed file
  # __FILE__ is the current file
  # If they are the same—that is, we are running this file directly, call the
  # Sinatra run method
  run! if __FILE__ == $0
end
```

## Troubleshooting

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the {% data reusables.support.prodname_support_forum_with_url %}.

* **Q:** My app isn't pushing code to {% data variables.product.prodname_dotcom %}. I don't see the fixes that RuboCop automatically makes!

    **A:** Make sure you have **Read & write** permissions for "Repository contents," and that you are cloning the repository with your installation token. See [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) for details.

* **Q:** I see an error in the `template_server.rb` debug output related to cloning my repository.

    **A:** If you see the following error, you haven't deleted the checkout of the repository in one or both of the `initiate_check_run` or `take_requested_action` methods:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compare your code to the `server.rb` file to ensure you have the same code in your `initiate_check_run` and `take_requested_action` methods.

* **Q:** New check runs are not showing up in the "Checks" tab on {% data variables.product.prodname_dotcom %}.

    **A:** Restart Smee and re-run your `template_server.rb` server.

* **Q:** I do not see the "Re-run all" button in the "Checks" tab on {% data variables.product.prodname_dotcom %}.

    **A:** Restart Smee and re-run your `template_server.rb` server.

## Conclusion

After walking through this guide, you've learned the basics of using the Checks API to create a CI server! To review, you:

* Configured your server to receive Checks API events and create check runs.
* Used RuboCop to check code in repositories and create annotations for the errors.
* Implemented a requested action that automatically fixes linter errors.

## Next steps

Here are some ideas for what you can do next:

* Currently, the "Fix this" button is always displayed. Update the code you wrote to display the "Fix this" button only when RuboCop finds errors.
* If you'd prefer that RuboCop doesn't commit files directly to the head branch, you can update the code to [create a pull request](/rest/pulls#create-a-pull-request) with a new branch based on the head branch.
