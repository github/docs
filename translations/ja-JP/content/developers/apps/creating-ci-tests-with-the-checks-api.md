---
title: Checks API で CI テストを作成する
intro: '{% data variables.product.prodname_github_app %} と Checks API を使用して、テストを実行するための継続的インテグレーションサーバーを構築します。'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### はじめに

このガイドでは、[Github App](/apps/) と [Checks API](/v3/checks/) について紹介します。Checks API は、テストを実行する継続的インテグレーション (CI) サーバーを構築するために使用します。

CI とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの発生が早くなり、開発者がエラーの原因を見つけようとしてデバッグする必要性も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 開発者がコードの記述にばかり時間をとられ、エラーのデバッグやマージコンフリクトの解決にかける時間が少ないときに威力を発揮します。 🙌

CI サーバーは、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コード網羅率、その他のチェックといった CI テストをリポジトリの新しいコードコミットに対して実行するコードをホストします。 CI サーバーは、ステージングサーバーや本番サーバーにコードを構築しデプロイすることも可能です。 GitHub App で作成できる CI テストのタイプの例については、GitHub Marketplace で入手できる[継続的インテグレーションアプリケーション](https://github.com/marketplace/category/continuous-integration)を確認してください。

{% data reusables.apps.app-ruby-guides %}

#### Checks API の概要

[Checks API](/v3/checks/) を使用すると、リポジトリでコミットされている各コードに対して自動的に実行される CI テストを設定できます。 The Checks API reports detailed information about each check on GitHub in the pull request's **Checks** tab. Checks API を使用すると、コードの特定の行に対して追加的な情報を含むアノテーションを作成できます。 アノテーションは **Checks** タブに表示されます。 プルリクエストの一部であるファイルに対してアノテーションを作成すると、そのアノテーションは**Files changed** タブにも表示されます。

_チェックスイート_とは、 _チェック実行_ (個々の CI テスト) をグループ化したものです。 チェックスイートにもチェック実行にも_ステータス_が含まれており、GitHub のプルリクエストで表示できます。 You can use statuses to determine when a code commit introduces errors. これらのステータスを[保護されたブランチ](/v3/repos/branches/)で使用すると、プルリクエストを早まってマージすることを防げます。 詳細は「[ステータスチェック必須の有効化](/articles/enabling-required-status-checks/)」を参照してください。

Checks API は、新しいコードがリポジトリにプッシュされるたびに、リポジトリにインストールされている全ての GitHub App に [`check_suite` webhook イベント](/webhooks/event-payloads/#check_suite)を送信します。 Checks API イベントの全てのアクションを受信するには、アプリケーションに `checks:write` 権限が必要です。 GitHub はデフォルトのフローを使ってリポジトリの新しいコードのコミットに `check_suite` イベントを自動的に作成しますが、[チェックスイートのためのリポジトリプリファレンスの更新](/v3/checks/suites/#update-repository-preferences-for-check-suites)を行っても構いません。 デフォルトのフローは以下の通りです。

1. 誰かがリポジトリにコードをプッシュすると、GitHubは、`checks:write` 権限を持つ、リポジトリにインストールされている全ての GitHub Apps に `requested` のアクションと共に `check_suite` イベントを送信します。 このイベントにより、コードがプッシュされたことと、GitHub が新しいチェックスイートを自動的に作成したことがアプリケーションに通知されます。
1. アプリケーションがこのイベントを受信すると、アプリケーションはスイートに[チェック実行を追加](/v3/checks/runs/#create-a-check-run)できます。
1. チェック実行には、コードの特定の行で表示される[アノテーション](/v3/checks/runs/#annotations-object)を含めることができます。

**In this guide, you’ll learn how to:**

* パート 1: Checks API を使用して CI サーバー用のフレームワークをセットアップする。
  * Checks API イベントを受信するサーバーとして GitHub App を構成します。
  * Create new check runs for CI tests when a repository receives newly pushed commits.
  * Re-run check runs when a user requests that action on GitHub.
* Part 2: Build on the CI server framework you created by adding a linter CI test.
  * Update a check run with a `status`, `conclusion`, and `output` details.
  * Create annotations on lines of code that GitHub displays in the **Checks** and **Files Changed** tab of a pull request.
  * Automatically fix linter recommendations by exposing a "Fix this" button in the **Checks** tab of the pull request.

To get an idea of what your Checks API CI server will do when you've completed this quickstart, check out the demo below:

![Demo of Checks API CI sever quickstart](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

### 必要な環境

Before you get started, you may want to familiarize yourself with [Github Apps](/apps/), [Webhooks](/webhooks), and the [Checks API](/v3/checks/), if you're not already. You'll find more APIs in the [REST API docs](/v3/). The Checks API is also available to use in [GraphQL](/v4/), but this quickstart focuses on REST. See the GraphQL [Checks Suite](/v4/object/checksuite/) and [Check Run](/v4/object/checkrun/) objects for more details.

You'll use the [Ruby programming language](https://www.ruby-lang.org/en/), the [Smee](https://smee.io/) webhook payload delivery service, the [Octokit.rb Ruby library](http://octokit.github.io/octokit.rb/) for the GitHub REST API, and the [Sinatra web framework](http://sinatrarb.com/) to create your Checks API CI server app.

You don't need to be an expert in any of these tools or concepts to complete this project. This guide will walk you through all the required steps. Before you begin creating CI tests with the Checks API, you'll need to do the following:

1. Clone the [Creating CI tests with the Checks API](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) repository.
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  Inside the directory, you'll find a `template_server.rb` file with the template code you'll use in this quickstart and a `server.rb` file with the completed project code.

1. Follow the steps in the "[Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/)" quickstart to configure and run the app server. **Note:** Instead of [cloning the GitHub App template repository](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites), use the `template_server.rb` file in the repository you cloned in the previous step in this quickstart.

  If you've completed a GitHub App quickstart before, make sure to register a _new_ GitHub App and start a new Smee channel to use with this quickstart.

  See the [troubleshooting](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) section if you are running into problems setting up your template GitHub App.

### パート1. Checks API インターフェースを作成する

In this part, you will add the code necessary to receive `check_suite` webhook events and create and update check runs. You'll also learn how to create check runs when a check was re-requested on GitHub. At the end of this section, you'll be able to view the check run you created in a GitHub pull request.

Your check run will not be performing any checks on the code in this section. You'll add that functionality in [Part 2: Creating the Octo RuboCop CI test](#part-2-creating-the-octo-rubocop-ci-test).

You should already have a Smee channel configured that is forwarding webhook payloads to your local server. Your server should be running and connected to the GitHub App you registered and installed on a test repository. If you haven't completed the steps in "[Setting up your development environment](/apps/quickstart-guides/setting-up-your-development-environment/)," you'll need to do that before you can continue.

Let's get started! These are the steps you'll complete in Part 1:

1. [Updating app permissions](#step-11-updating-app-permissions)
1. [Adding event handling](#step-12-adding-event-handling)
1. [Creating a check run](#step-13-creating-a-check-run)
1. [Updating a check run](#step-14-updating-a-check-run)

### ステップ 1.1. Updating app permissions

When you [first registered your app](#prerequisites), you accepted the default permissions, which means your app doesn't have access to most resources. For this example, your app will need permission to read and write checks.

To update your app's permissions:

1. Select your app from the [app settings page](https://github.com/settings/apps) and click **Permissions & Webhooks** in the sidebar.
1. In the "Permissions" section, find "Checks", and select **Read & write** in the Access dropdown next to it.
1. In the "Subscribe to events" section, select **Check suite** and **Check run** to subscribe to these events.
{% data reusables.apps.accept_new_permissions_steps %}

これでうまくいきました。 Your app has permission to do the tasks you want it to do. Now you can add the code to handle the events.

### ステップ 1.2. Adding event handling

Now that your app is subscribed to the **Check suite** and **Check run** events, it will start receiving the [`check_suite`](/webhooks/event-payloads/#check_suite) and [`check_run`](/webhooks/event-payloads/#check_run) webhooks. GitHub sends webhook payloads as `POST` requests. Because you forwarded your Smee webhook payloads to `http://localhost/event_handler:3000`, your server will receive the `POST` request payloads at the `post '/event_handler'` route.

An empty `post '/event_handler'` route is already included in the `template_server.rb` file, which you downloaded in the [prerequisites](#prerequisites) section. The empty route looks like this:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use this route to handle the `check_suite` event by adding the following code:

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Every event that GitHub sends includes a request header called `HTTP_X_GITHUB_EVENT`, which indicates the type of event in the `POST` request. Right now, you're only interested in events of type `check_suite`, which are emitted when a new check suite is created. Each event has an additional `action` field that indicates the type of action that triggered the events. For `check_suite`, the `action` field can be `requested`, `rerequested`, or `completed`.

The `requested` action requests a check run each time code is pushed to the repository, while the `rerequested` action requests that you re-run a check for code that already exists in the repository. Because both the `requested` and `rerequested` actions require creating a check run, you'll call a helper called `create_check_run`. Let's write that method now.

### ステップ 1.3. Creating a check run

You'll add this new method as a [Sinatra helper](https://github.com/sinatra/sinatra#helpers) in case you want other routes to use it too. Under `helpers do`, add this `create_check_run` method:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Create a new check run with the status queued
def create_check_run
  # # At the time of writing, Octokit does not support the Checks API yet, but
  # it does provide generic HTTP methods you can use:
  # /v3/checks/runs/#create-a-check-run
  check_run = @installation_client.post(
    "repos/#{@payload['repository']['full_name']}/check-runs",
    {
      accept: 'application/vnd.github.v3+json',
      # The name of your check run.
      name: 'Octo RuboCop',
      # The payload structure differs depending on whether a check run or a check suite event occurred.
      head_sha: @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha']
    }
  )
end
```
{% else %}
``` ruby
# Create a new check run with the status queued
def create_check_run
  # # At the time of writing, Octokit does not support the Checks API yet, but
  # it does provide generic HTTP methods you can use:
  # /v3/checks/runs/#create-a-check-run
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
end
```
{% endif %}

This code calls the "[Create a check run](/v3/checks/runs/#create-a-check-run)" endpoint using the generic [HTTP `POST` method](http://octokit.github.io/octokit.rb/Octokit/Connection.html#post-instance_method). This method takes two parameters: the URL of the endpoint and the input parameters to the method.

To create a check run, only two input parameters are required: `name` and `head_sha`. We will use [Rubocop](https://rubocop.readthedocs.io/en/latest/) to implement the CI test later in this quickstart, which is why the name "Octo Rubocop" is used here, but you can choose any name you'd like for the check run.

You're only supplying the required parameters now to get the basic functionality working, but you'll update the check run later as you collect more information about the check run. By default, GitHub sets the `status` to `queued`.

GitHub creates a check run for a specific commit SHA, which is why `head_sha` is a required parameter. You can find the commit SHA in the webhook payload. Although you're only creating a check run for the `check_suite` event right now, it's good to know that the `head_sha` is included in both the `check_suite` and `check_run` objects in the event payloads.

In the code above, you're using the [ternary operator](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), which works like an `if/else` statement, to check if the payload contains a `check_run` object. If it does, you read the `head_sha` from the `check_run` object, otherwise you read it from the `check_suite` object.

To test this code, restart the server from your terminal:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Now open a pull request in the repository where you installed your app. Your app should respond by creating a check run on your pull request. Click on the **Checks** tab, and you should see something like this:

![Queued check run](/assets/images/github-apps/github_apps_queued_check_run.png)

If you see other apps in the Checks tab, it means you have other apps installed on your repository that have **Read & write** access to checks and are subscribed to **Check suite** and **Check run** events.

これでうまくいきました。 You've told GitHub to create a check run. You can see the check run status is set to `queued` next to a yellow icon. Next, you'll want to wait for GitHub to create the check run and update its status.

### ステップ 1.4. Updating a check run

When your `create_check_run` method runs, it asks GitHub to create a new check run. When Github finishes creating the check run, you'll receive the `check_run` webhook event with the `created` action. That event is your signal to begin running the check.

You'll want to update your event handler to look for the `created` action. While you're updating the event handler, you can add a conditional for the `rerequested` action. When someone re-runs a single test on GitHub by clicking the "Re-run" button, GitHub sends the `rerequested` check run event to your app. When a check run is `rerequested`, you'll want to start the process all over and create a new check run.

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

GitHub sends all events for `created` check runs to every app installed on a repository that has the necessary checks permissions. That means that your app will receive check runs created by other apps. A `created` check run is a little different from a `requested` or `rerequested` check suite, which GitHub sends only to apps that are being requested to run a check. The code above looks for the check run's application ID. This filters out all check runs for other apps on the repository.

Next you'll write the `initiate_check_run` method, which is where you'll update the check run status and prepare to kick off your CI test.

In this section, you're not going to kick off the CI test yet, but you'll walk through how to update the status of the check run from `queued` to `pending` and then from `pending` to `completed` to see the overall flow of a check run. In "[Part 2: Creating the Octo RuboCop CI test](#part-2-creating-the-octo-rubocop-ci-test)," you'll add the code that actually performs the CI test.

Let's create the `initiate_check_run` method and update the status of the check run. Add the following code to the helpers section:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  # Octokit doesn't yet support the Checks API, but it does provide generic
  # HTTP methods you can use:
  # /v3/checks/runs/#update-a-check-run
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.v3+json',
      name: 'Octo RuboCop',
      status: 'in_progress',
      started_at: Time.now.utc.iso8601
    }
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.v3+json',
      name: 'Octo RuboCop',
      status: 'completed',
      conclusion: 'success',
      completed_at: Time.now.utc.iso8601
    }
  )
end
```
{% else %}
``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  # Octokit doesn't yet support the Checks API, but it does provide generic
  # HTTP methods you can use:
  # /v3/checks/runs/#update-a-check-run
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
      name: 'Octo RuboCop',
      status: 'in_progress',
      started_at: Time.now.utc.iso8601
    }
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  updated_check_run = @installation_client.patch(
    "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
    {
      # This header is necessary for beta access to Checks API
      accept: 'application/vnd.github.antiope-preview+json',
      name: 'Octo RuboCop',
      status: 'completed',
      conclusion: 'success',
      completed_at: Time.now.utc.iso8601
    }
  )
end
```
{% endif %}

The code above calls the "[Update a check run](/v3/checks/runs/#update-a-check-run)" API endpoint using the generic [`patch` HTTP method](http://octokit.github.io/octokit.rb/Octokit/Connection.html#patch-instance_method) to update the check run that you already created.

Here's what this code is doing. First, it updates the check run's status to `in_progress` and sets the `started_at` time to the current time. In [Part 2](#part-2-creating-the-octo-rubocop-ci-test) of this quickstart, you'll add code that kicks off a real CI test under `***** RUN A CI TEST *****`. For now, you'll leave that section as a placeholder, so the code that follows it will just simulate that the CI process succeeds and all tests pass. Finally, the code updates the status of the check run again to `completed`.

You'll notice in the "[Update a check run](/v3/checks/runs/#update-a-check-run)" docs that when you provide a status of `completed`, the `conclusion` and `completed_at` parameters are required. The `conclusion` summarizes the outcome of a check run and can be `success`, `failure`, `neutral`, `cancelled`, `timed_out`, or `action_required`. You'll set the conclusion to `success`, the `completed_at` time to the current time, and the status to `completed`.

You could also provide more details about what your check is doing, but you'll get to that in the next section. Let's test this code again by re-running `template_server.rb`:

```shell
$ ruby template_server.rb
```

Head over to your open pull request and click the **Checks** tab. Click the "Re-run all" button in the upper left corner. You should see the check run move from `pending` to `in_progress` and end with `success`:

![Completed check run](/assets/images/github-apps/github_apps_complete_check_run.png)

### パート2. Octo RuboCop CI テストを作成する

[RuboCop](https://rubocop.readthedocs.io/en/latest/) is a Ruby code linter and formatter. It checks Ruby code to ensure that it complies with the "[Ruby Style Guide](https://github.com/rubocop-hq/ruby-style-guide)." RuboCop has three primary functions:

* Linting to check code style
* Code formatting
* Replaces the native Ruby linting capabilities using `ruby -w`

Now that you've got the interface created to receive Checks API events and create check runs, you can create a check run that implements a CI test.

Your app will run RuboCop on the CI server and create check runs (CI tests in this case) that report the results that RuboCop reports to GitHub.

The Checks API allows you to report rich details about each check run, including statuses, images, summaries, annotations, and requested actions.

Annotations are information about specific lines of code in a repository. An annotation allows you to pinpoint and visualize the exact parts of the code you'd like to show additional information for. That information can be anything: for example, a comment, an error, or a warning. This quickstart uses annotations to visualize RuboCop errors.

To take advantage of requested actions, app developers can create buttons in the **Checks** tab of pull requests. When someone clicks one of these buttons, the click sends a `requested_action` `check_run` event to the GitHub App. The action that the app takes is completely configurable by the app developer. This quickstart will walk you through adding a button that allows users to request that RuboCop fix the errors it finds. RuboCop supports automatically fixing errors using a command-line option, and you'll configure the `requested_action` to take advantage of this option.

Let's get started! These are the steps you'll complete in this section:

1. [Adding a Ruby file](#step-21-adding-a-ruby-file)
1. [Cloning the repository](#step-22-cloning-the-repository)
1. [Running RuboCop](#step-23-running-rubocop)
1. [Collecting RuboCop errors](#step-24-collecting-rubocop-errors)
1. [Updating the check run with CI test results](#step-25-updating-the-check-run-with-ci-test-results)
1. [Automatically fixing RuboCop errors](#step-26-automatically-fixing-rubocop-errors)
1. [Security tips](#step-27-security-tips)

### ステップ 2.1. Adding a Ruby file

You can pass specific files or entire directories for RuboCop to check. In this quickstart, you'll run RuboCop on an entire directory. Because RuboCop only checks Ruby code, you'll want at least one Ruby file in your repository that contains errors. The example file provided below contains a few errors. Add this example Ruby file to the repository where your app is installed (make sure to name the file with an `.rb` extension, as in `myfile.rb`):

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

### ステップ 2.2. Cloning the repository

RuboCop is available as a command-line utility. That means your GitHub App will need to clone a local copy of the repository on the CI server so RuboCop can parse the files. To run Git operations in your Ruby app, you can use the [ruby-git](https://github.com/ruby-git/ruby-git) gem.

The `Gemfile` in the `building-a-checks-api-ci-server` repository already includes the ruby-git gem, and you installed it when you ran `bundle install` in the [prerequisite steps](#prerequisites). To use the gem, add this code to the top of your `template_server.rb` file:

``` ruby
require 'git'
```

Your app needs read permission for "Repository contents" to clone a repository. Later in this quickstart, you'll need to push contents to GitHub, which requires write permission. Go ahead and set your app's "Repository contents" permission to **Read & write** now so you don't need to update it again later. To update your app's permissions:

1. Select your app from the [app settings page](https://github.com/settings/apps) and click **Permissions & Webhooks** in the sidebar.
1. In the "Permissions" section, find "Repository contents", and select **Read & write** in the "Access" dropdown next to it.
{% data reusables.apps.accept_new_permissions_steps %}

To clone a repository using your GitHub App's permissions, you can use the app's installation token (`x-access-token:<token>`) shown in the example below:

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

### ステップ 2.3. Running RuboCop

これでうまくいきました。 You're cloning the repository and creating check runs using your CI server. Now you'll get into the nitty gritty details of the [RuboCop linter](https://rubocop.readthedocs.io/en/latest/basic_usage/#rubocop-as-a-code-style-checker) and [Checks API annotations](/v3/checks/runs/#create-a-check-run).

The following code runs RuboCop and saves the style code errors in JSON format. Add this code below the call to `clone_repository` you added in the [previous step](#step-22-cloning-the-repository) and above the code that updates the check run to complete.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

The code above runs RuboCop on all files in the repository's directory. The option `--format json` is a handy way to save a copy of the linting results in a machine-parsable format. See the [RuboCop docs](https://rubocop.readthedocs.io/en/latest/formatters/#json-formatter) for details and an example of the JSON format.

Because this code stores the RuboCop results in a `@report` variable, it can safely remove the checkout of the repository. This code also parses the JSON so you can easily access the keys and values in your GitHub App using the `@output` variable.

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

### ステップ 2.4. Collecting RuboCop errors

The `@output` variable contains the parsed JSON results of the RuboCop report. As shown above, the results contain a `summary` section that your code can use to quickly determine if there are any errors. The following code will set the check run conclusion to `success` when there are no reported errors. RuboCop reports errors for each file in the `files` array, so if there are errors, you'll need to extract some data from the file object.

The Checks API allows you to create annotations for specific lines of code. When you create or update a check run, you can add annotations. In this quickstart you are [updating the check run](/v3/checks/runs/#update-a-check-run) with annotations.

The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](/v3/checks/runs/#update-a-check-run) endpoint. For example, to create 105 annotations you'd need to call the [Update a check run](/v3/checks/runs/#update-a-check-run) endpoint three times. The first two requests would each have 50 annotations, and the third request would include the five remaining annotations. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run.

A check run expects annotations as an array of objects. Each annotation object must include the `path`, `start_line`, `end_line`, `annotation_level`, and `message`. RuboCop provides the `start_column` and `end_column` too, so you can include those optional parameters in the annotation. Annotations only support `start_column` and `end_column` on the same line. See the [`annotations` object](/v3/checks/runs/#annotations-object-1) reference documentation for details.

You'll extract the required information from RuboCop needed to create each annotation. Append the following code to the code you added in the [previous section](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /v3/checks/runs/#update-a-check-run
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

When errors are reported, the code above iterates through the `files` array in the RuboCop report. For each file, it extracts the file path and sets the annotation level to `notice`. You could go even further and set specific warning levels for each type of [RuboCop Cop](https://rubocop.readthedocs.io/en/latest/cops/), but to keep things simpler in this quickstart, all errors are set to a level of `notice`.

This code also iterates through each error in the `offenses` array and collects the location of the offense and error message. After extracting the information needed, the code creates an annotation for each error and stores it in the `annotations` array. Because annotations only support start and end columns on the same line, `start_column` and `end_column` are only added to the `annotation` object if the start and end line values are the same.

This code doesn't yet create an annotation for the check run. You'll add that code in the next section.

### ステップ 2.5. Updating the check run with CI test results

Each check run from GitHub contains an `output` object that includes a `title`, `summary`, `text`, `annotations`, and `images`. The `summary` and `title` are the only required parameters for the `output`, but those alone don't offer much detail, so this quickstart adds `text` and `annotations` too. The code here doesn't add an image, but feel free to add one if you'd like!

For the `summary`, this example uses the summary information from RuboCop and adds some newlines (`\n`) to format the output. You can customize what you add to the `text` parameter, but this example sets the `text` parameter to the RuboCop version. To set the `summary` and `text`, append this code to the code you added in the [previous section](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Now you've got all the information you need to update your check run. In the [first half of this quickstart](#step-14-updating-a-check-run), you added this code to set the status of the check run to `success`:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Mark the check run as complete!
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.v3+json',
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: 'success',
    completed_at: Time.now.utc.iso8601
  }
)
```
{% else %}
``` ruby
# Mark the check run as complete!
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.antiope-preview+json', # This header is necessary for beta access to Checks API
    name: 'Octo RuboCop',
    status: 'completed',
    conclusion: 'success',
    completed_at: Time.now.utc.iso8601
  }
)
```
{% endif %}

You'll need to update that code to use the `conclusion` variable you set based on the RuboCop results (to `success` or `neutral`). You can update the code with the following:

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
``` ruby
# Mark the check run as complete! And if there are warnings, share them.
updated_check_run = @installation_client.patch(
  "repos/#{@payload['repository']['full_name']}/check-runs/#{@payload['check_run']['id']}",
  {
    accept: 'application/vnd.github.v3+json',
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
```
{% else %}
``` ruby
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
```
{% endif %}

Now that you're setting a conclusion based on the status of the CI test and you've added the output from the RuboCop results, you've created a CI test! Congratulations. 🙌

The code above also adds a feature to your CI server called [requested actions](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) via the `actions` object. {% if currentVersion == "free-pro-team@latest" %}(Note this is not related to [GitHub Actions](/actions).) {% endif %}Requested actions add a button in the **Checks** tab on GitHub that allows someone to request the check run to take additional action. The additional action is completely configurable by your app. For example, because RuboCop has a feature to automatically fix the errors it finds in Ruby code, your CI server can use a requested actions button to allow people to request automatic error fixes. When someone clicks the button, the app receives the `check_run` event with a `requested_action` action. Each requested action has an `identifier` that the app uses to determine which button was clicked.

The code above doesn't have RuboCop automatically fix errors yet. You'll add that in the next section. But first, take a look at the CI test that you just created by starting up the `template_server.rb` server again and creating a new pull request:

```shell
$ ruby template_server.rb
```

The annotations will show up in the **Checks** tab.

![Check run annotations in the checks tab](/assets/images/github-apps/github_apps_checks_annotations.png)

Notice the "Fix this" button that you created by adding a requested action.

![チェック実行のリクエストされたアクションのボタン](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

If the annotations are related to a file already included in the PR, the annotations will also show up in the **Files changed** tab.

![Check run annotations in the files changed tab](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

### ステップ 2.6. Automatically fixing RuboCop errors

If you've made it this far, kudos! 👏 You've already created a CI test. In this section, you'll add one more feature that uses RuboCop to automatically fix the errors it finds. You already added the "Fix this" button in the [previous section](#step-25-updating-the-check-run-with-ci-test-results). Now you'll add the code to handle the `requested_action` check run event triggered when someone clicks the "Fix this" button.

The RuboCop tool [offers](https://rubocop.readthedocs.io/en/latest/basic_usage/#auto-correcting-offenses) the `--auto-correct` command-line option to automatically fix errors it finds. When you use the `--auto-correct` feature, the updates are applied to the local files on the server. You'll need to push the changes to GitHub after RuboCop does its magic.

To push to a repository, your app must have write permissions for "Repository contents." You set that permission back in [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) to **Read & write**, so you're all set.

In order to commit files, Git must know which [username](/articles/setting-your-username-in-git/) and [email](/articles/setting-your-commit-email-address-in-git/) to associate with the commit. Add two more environment variables in your `.env` file to store the name (`GITHUB_APP_USER_NAME`) and email (`GITHUB_APP_USER_EMAIL`) settings. Your name can be the name of your app and the email can be any email you'd like for this example. 例:

```
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Once you've updated your `.env` file with the name and email of the author and committer, you'll be ready to add code to read the environment variables and set the Git configuration. You'll add that code soon.

When someone clicks the "Fix this" button, your app receives the [check run webhook](/webhooks/event-payloads/#check_run) with the `requested_action` action type.

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

The files are changed locally, but you'll still need to push them to GitHub. You'll use the handy `ruby-git` gem again to commit all of the files. Git has a single command that stages all modified or deleted files and commits them: `git commit -a`. To do the same thing using `ruby-git`, the code above uses the `commit_all` method. Then the code pushes the committed files to GitHub using the installation token, using the same authentication method as the Git `clone` command. Finally, it removes the repository directory to ensure the working directory is prepared for the next event.

これで完了です。 The code you have written now completes your Checks API CI server. 💪 Restart your `template_server.rb` server again and create a new pull request:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

This time, click the "Fix this" button to automatically fix the errors RuboCop found from the **Checks** tab.

In the **Commits** tab, you'll see a brand new commit by the username you set in your Git configuration. You may need to refresh your browser to see the update.

![A new commit to automatically fix Octo RuboCop notices](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Because a new commit was pushed to the repo, you'll see a new check suite for Octo RuboCop in the **Checks** tab. But this time there are no errors because RuboCop fixed them all. 🎉

![No check suite or check run errors](/assets/images/github-apps/github_apps_checks_api_success.png)

You can find the completed code for the app you just built in the `server.rb` file in the [Creating CI tests with the Checks API](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) repository.

### ステップ 2.7. Security tips

The template GitHub App code already has a method to verify incoming webhook payloads to ensure they are from a trusted source. If you are not validating webhook payloads, you'll need to ensure that when repository names are included in the webhook payload, the webhook does not contain arbitrary commands that could be used maliciously. The code below validates that the repository name only contains Latin alphabetic characters, hyphens, and underscores. To provide you with a complete example, the complete `server.rb` code available in the [companion repository](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) for this quickstart includes both the method of validating incoming webhook payloads and this check to verify the repository name.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

### トラブルシューティング

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the {% data variables.product.prodname_support_forum_with_url %}.

* **Q:** My app isn't pushing code to GitHub. I don't see the fixes that RuboCop automatically makes!

    **A:** Make sure you have **Read & write** permissions for "Repository contents," and that you are cloning the repository with your intallation token. See [Step 2.2. Cloning the repository](#step-22-cloning-the-repository) for details.

* **Q:** I see an error in the `template_server.rb` debug output related to cloning my repository.

    **A:** If you see the following error, you haven't deleted the checkout of the repository in one or both of the `initiate_check_run` or `take_requested_action` methods:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:v1.9b2080277016f797074c4debd350745f4257f8dd@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compare your code to the `server.rb` file to ensure you have the same code in your `initiate_check_run` and `take_requested_action` methods.

* **Q:** New check runs are not showing up in the "Checks" tab on GitHub.

    **A:** Restart Smee and re-run your `template_server.rb` server.

* **Q:** I do not see the "Re-run all" button in the "Checks" tab on GitHub.

    **A:** Restart Smee and re-run your `template_server.rb` server.

### おわりに

After walking through this guide, you've learned the basics of using the Checks API to create a CI server! To review, you:

* Configured your server to receive Checks API events and create check runs.
* Used RuboCop to check code in repositories and create annotations for the errors.
* Implemented a requested action that automatically fixes linter errors.

### 次のステップ

Here are some ideas for what you can do next:

* Currently, the "Fix this" button is always displayed. Update the code you wrote to display the "Fix this" button only when RuboCop finds errors.
* If you'd prefer that RuboCop doesn't commit files directly to the head branch, you can update the code to [create a pull request](/v3/pulls/#create-a-pull-request) with a new branch based on the head branch.
