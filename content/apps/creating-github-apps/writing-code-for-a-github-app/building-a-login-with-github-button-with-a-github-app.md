---
title: Building a "Login with GitHub" button with a GitHub App
shortTitle: Build a "Login" button
intro: 'Follow this tutorial to write Ruby code to generate a user access token via the web application flow for your {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/creating-github-apps/guides/using-the-web-application-flow-to-generate-a-user-access-token-for-a-github-app
  - /apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app
---

## Introduction

This tutorial demonstrates how to build a "Login with GitHub" button for a website. The website will use a {% data variables.product.prodname_github_app %} to generate a user access token via the web application flow. Then, the website uses the user access token to make API requests on behalf of the authenticated user.

This tutorial uses Ruby, but you can use the web application flow with any programming language that is used for web development.

### About web application flow and user access tokens

Your app should use a user access token if you want to attribute the app's actions to a user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

There are two ways to generate a user access token for a {% data variables.product.prodname_github_app %}: web application flow and device flow. If your app has access to a web interface, you should use web application flow. If your app does not have access to a web interface, you should use device flow instead. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)" and "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)."

## Prerequisites

This tutorial assumes that you have already registered a {% data variables.product.prodname_github_app %}. For more information about registering a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)."

Before following this tutorial, you must set a callback URL for your app. This tutorial uses a local Sinatra server with the default URL of `http://localhost:4567`. For example, to work with the default URL for a local Sinatra application, your callback URL can be `http://localhost:4567/github/callback`. Once you are ready to deploy your app, you can change the callback URL to use your live server address. For more information about updating the callback URL for your app, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)."

This tutorial assumes that you have a basic understanding of Ruby and of the Ruby template system, ERB. For more information, see [Ruby](https://www.ruby-lang.org) and [ERB](https://github.com/ruby/erb).

## Install dependencies

This tutorial uses the Ruby gem, Sinatra, to create a web application with Ruby. For more information, see [the Sinatra README](https://github.com/sinatra/sinatra#readme).

This tutorial uses the Ruby gem, dotenv, to access values stored in a `.env` file. For more information, see [the dotenv README](https://github.com/bkeepers/dotenv#readme).

To follow this tutorial, you must install the Sinatra and dotenv gems in your Ruby project. For example, you can do this with [Bundler](https://bundler.io/):

1. If you don't already have Bundler installed, run the following command in your terminal:

   ```shell
   gem install bundler
   ```

1. If you don't already have a Gemfile for your app, run the following command in your terminal:

   ```shell
   bundle init
   ```

1. If you don't already have a Gemfile.lock for your app, run the following command in your terminal:

   ```shell
   bundle install
   ```

1. Install the gems by running the following commands in your terminal:

   ```shell
   bundle add sinatra
   ```

   ```shell
   bundle add dotenv
   ```

## Store the client ID and client secret

This tutorial will show you how to store the client ID and client secret in environment variables and access them with `ENV.fetch`. When you deploy your app, you will want to change how you store the client ID and client secret. For more information, see "[Securely store your client secret](#securely-store-your-client-secret)."

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to work with, click **Edit**.
1. On the app's settings page, find the client ID for your app. You will add it to a `.env` file in a following step. Note that the client ID is different from the app ID.
1. On the app's settings page, click **Generate a new client secret**. You will add the client secret to a `.env` file in a following step.
1. Create a file called `.env` at the same level as your `Gemfile`.
1. If your project doesn't already have a `.gitignore` file, create a `.gitignore` file at the same level as your `Gemfile`.
1. Add `.env` to your `.gitignore` file. This will prevent you from accidentally committing your client secret. For more information about `.gitignore` files, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."
1. Add the following contents to your `.env` file. Replace `YOUR_CLIENT_ID` with the client ID of your app. Replace `YOUR_CLIENT_SECRET` with the client secret for your app.

   ```text
   CLIENT_ID="YOUR_CLIENT_ID"
   CLIENT_SECRET="YOUR_CLIENT_SECRET"
   ```

## Add code to generate a user access token

To get a user access token, you first need to prompt the user to authorize your app. When a user authorizes your app, they are redirected to the callback URL for your app. The request to the callback URL includes a `code` query parameter. When your app gets a request to serve that callback URL, you can exchange the `code` parameter for a user access token.

These steps lead you through writing code to generate a user access token. To skip ahead to the final code, see "[Full code example](#full-code-example)."

1. In the same directory as your `.env` file, create a Ruby file to hold the code that will generate a user access token. This tutorial will name the file `app.rb`.
1. At the top of `app.rb`, add these dependencies:

   ```ruby copy
   require "sinatra"
   require "dotenv/load"
   require "net/http"
   require "json"
   ```

   The `sinatra` and `dotenv/load` dependencies use the gems that you installed earlier. `net/http` and `json` are part of the Ruby standard library.

1. Add the following code to `app.rb`, to get your app's client ID and client secret from your `.env` file.

   ```ruby copy
   CLIENT_ID = ENV.fetch("CLIENT_ID")
   CLIENT_SECRET = ENV.fetch("CLIENT_SECRET")
   ```

1. Add the following code to `app.rb` to display a link that will prompt users to authenticate your app.

   ```ruby copy
   get "/" do
     link = '<a href="{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=<%= CLIENT_ID %>">Login with GitHub</a>'
     erb link
   end
   ```

1. Add the following code to `app.rb` to handle requests to your app's callback URL and get the `code` parameter from the request. Replace `CALLBACK_URL` with the callback URL for your app, minus the domain. For example, if your callback URL is `http://localhost:4567/github/callback`, replace `CALLBACK_URL` with `/github/callback`.

   ```ruby copy
   get "CALLBACK_URL" do
     code = params["code"]
     render = "Successfully authorized! Got code #{code}."
     erb render
   end
   ```

   Currently, the code just renders a message along with the `code` parameter. The following steps will expand this code block.

1. Optionally, check your progress:

   `app.rb` now looks like this, where `CALLBACK_URL` is the callback URL for your app, minus the domain:

   ```ruby copy
   require "sinatra"
   require "dotenv/load"
   require "net/http"
   require "json"

   CLIENT_ID = ENV.fetch("CLIENT_ID")
   CLIENT_SECRET = ENV.fetch("CLIENT_SECRET")

   get "/" do
     link = '<a href="{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=<%= CLIENT_ID %>">Login with GitHub</a>'
     erb link
   end

   get "CALLBACK_URL" do
     code = params["code"]
     render = "Successfully authorized! Got code #{code}."
     erb render
   end
   ```

   1. In your terminal, from the directory where `app.rb` is stored, run `ruby app.rb`. A local Sinatra server should start.
   1. In your browser, navigate to `http://localhost:4567`. You should see a link with the text "Login with GitHub".
   1. Click on the "Login with GitHub" link.

      If you have not authorized the app, clicking on the link should take you to `{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=CLIENT_ID`, where `CLIENT_ID` is the client ID of your app. This is a GitHub page that prompts users to authorize your app. If you click the button to authorize your app, you will go to the callback URL for your app.

      If you previously authorized your app and the authorization has not been revoked, you will skip the authorization prompt and go directly to the callback URL instead. You can revoke your previous authorization if you want to see the authorization prompt. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."
   1. The callback URL page, reached by clicking the "Login with GitHub" link and then authorizing the app if prompted to do so, should display the text similar to "Successfully authorized! Got code agc622abb6135be5d1f2."
   1. In your terminal where Sinatra is running, stop the server by entering <kbd>Ctrl</kbd>+<kbd>C</kbd>.
1. Replace the content of `app.rb` with the following code, where `CALLBACK_URL` is the callback URL for your app, minus the domain.

   This code adds logic to exchange the `code` parameter for a user access token:

   - The `parse_response` function parses the response from the GitHub API.
   - The `exchange_code` function exchanges the `code` parameter for a user access token.
   - The handler for the callback URL request now calls `exchange_code` to exchange the code parameter for a user access token.
   - The callback page now shows text to indicate that a token was generated. If the token generation was not successful, the page will indicate that failure.

   ```ruby copy
   require "sinatra"
   require "dotenv/load"
   require "net/http"
   require "json"

   CLIENT_ID = ENV.fetch("CLIENT_ID")
   CLIENT_SECRET = ENV.fetch("CLIENT_SECRET")

   def parse_response(response)
     case response
     when Net::HTTPOK
       JSON.parse(response.body)
     else
       puts response
       puts response.body
       {}
     end
   end

   def exchange_code(code)
     params = {
       "client_id" => CLIENT_ID,
       "client_secret" => CLIENT_SECRET,
       "code" => code
     }
     result = Net::HTTP.post(
       URI("{% data variables.product.oauth_host_code %}/login/oauth/access_token"),
       URI.encode_www_form(params),
       {"Accept" => "application/json"}
     )

     parse_response(result)
   end

   get "/" do
     link = '<a href="{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=<%= CLIENT_ID %>">Login with GitHub</a>'
     erb link
   end

   get "CALLBACK_URL" do
     code = params["code"]

     token_data = exchange_code(code)

     if token_data.key?("access_token")
       token = token_data["access_token"]

       render = "Successfully authorized! Got code #{code} and exchanged it for a user access token ending in #{token[-9..-1]}."
       erb render
     else
       render = "Authorized, but unable to exchange code #{code} for token."
       erb render
     end
   end
   ```

1. Optionally, check your progress:
   1. In your terminal, from the directory where `app.rb` is stored, run `ruby app.rb`. A local Sinatra server should start.
   1. In your browser, navigate to `http://localhost:4567`. You should see a link with the text "Login with GitHub".
   1. Click on the "Login with GitHub" link.
   1. If prompted to do so, authorize your app.
   1. The callback URL page, reached by clicking the "Login with GitHub" link and then authorizing the app if prompted to do so, should display the text similar to "Successfully authorized! Got code 4acd44861aeda86dacce and exchanged it for a user access token ending in 2zU5kQziE."
   1. In your terminal where Sinatra is running, stop the server by entering <kbd>Ctrl</kbd>+<kbd>C</kbd>.

1. Now that you have a user access token, you can use the token to make API requests on behalf of the user. For example:

   Add this function to `app.rb` to get information about the user with the `/user` REST API endpoint:

   ```ruby copy
   def user_info(token)
     uri = URI("{% data variables.product.api_url_code %}/user")

     result = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
       body = {"access_token" => token}.to_json

       auth = "Bearer #{token}"
       headers = {"Accept" => "application/json", "Content-Type" => "application/json", "Authorization" => auth}

       http.send_request("GET", uri.path, body, headers)
     end

     parse_response(result)
   end
   ```

   Update the callback handler to call the `user_info` function and to display the user's name and GitHub login. Remember to replace `CALLBACK_URL` with the callback URL for your app, minus the domain.

   ```ruby copy
   get "CALLBACK_URL" do
     code = params["code"]

     token_data = exchange_code(code)

     if token_data.key?("access_token")
       token = token_data["access_token"]

       user_info = user_info(token)
       handle = user_info["login"]
       name = user_info["name"]

       render = "Successfully authorized! Welcome, #{name} (#{handle})."
       erb render
     else
       render = "Authorized, but unable to exchange code #{code} for token."
       erb render
     end
   end
   ```

1. Check your code against the full code example in the next section. You can test your code by following the steps outlined in the "[Testing](#testing)" section below the full code example.

## Full code example

This is the full code example that was outlined in the previous section.

Replace `CALLBACK_URL` with the callback URL for your app, minus the domain. For example, if your callback URL is `http://localhost:4567/github/callback`, replace `CALLBACK_URL` with `/github/callback`.

```ruby copy
require "sinatra"
require "dotenv/load"
require "net/http"
require "json"

CLIENT_ID = ENV.fetch("CLIENT_ID")
CLIENT_SECRET = ENV.fetch("CLIENT_SECRET")

def parse_response(response)
  case response
  when Net::HTTPOK
    JSON.parse(response.body)
  else
    puts response
    puts response.body
    {}
  end
end

def exchange_code(code)
  params = {
    "client_id" => CLIENT_ID,
    "client_secret" => CLIENT_SECRET,
    "code" => code
  }
  result = Net::HTTP.post(
    URI("{% data variables.product.oauth_host_code %}/login/oauth/access_token"),
    URI.encode_www_form(params),
    {"Accept" => "application/json"}
  )

  parse_response(result)
end

def user_info(token)
  uri = URI("{% data variables.product.api_url_code %}/user")

  result = Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
    body = {"access_token" => token}.to_json

    auth = "Bearer #{token}"
    headers = {"Accept" => "application/json", "Content-Type" => "application/json", "Authorization" => auth}

    http.send_request("GET", uri.path, body, headers)
  end

  parse_response(result)
end

get "/" do
  link = '<a href="{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=<%= CLIENT_ID %>">Login with GitHub</a>'
  erb link
end

get "CALLBACK_URL" do
  code = params["code"]

  token_data = exchange_code(code)

  if token_data.key?("access_token")
    token = token_data["access_token"]

    user_info = user_info(token)
    handle = user_info["login"]
    name = user_info["name"]

    render = "Successfully authorized! Welcome, #{name} (#{handle})."
    erb render
  else
    render = "Authorized, but unable to exchange code #{code} for token."
    erb render
  end
end
```

## Testing

This tutorial assumes that your app code is stored in a file named `app.rb` and that you are using the default URL for a local Sinatra application, `http://localhost:4567`.

1. In your terminal, from the directory where `app.rb` is stored, run `ruby app.rb`. A local Sinatra server should start.
1. In your browser, navigate to `http://localhost:4567`. You should see a link with the text "Login with GitHub".
1. Click on the "Login with GitHub" link.

   If you have not authorized the app, clicking on the link should take you to `{% data variables.product.oauth_host_code %}/login/oauth/authorize?client_id=CLIENT_ID`, where `CLIENT_ID` is the client ID of your app. This is a GitHub page that prompts users to authorize your app. If you click the button to authorize your app, you will go to the callback URL for your app.

   If you previously authorized your app and the authorization has not been revoked, you will skip the authorization prompt and go directly to the callback URL instead. You can revoke your previous authorization if you want to see the authorization prompt. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."

1. The callback URL page, reached by clicking the "Login with GitHub" link and then authorizing the app if prompted to do so, should display the text similar to "Successfully authorized! Welcome, Mona Lisa (octocat)."
1. In your terminal where Sinatra is running, stop the server by entering <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Next steps

### Securely store your client secret

You should never publicize your app's client secret. This tutorial stored the client secret in a gitignored `.env` file and accessed the value with `ENV.fetch`. When you deploy your app, you should choose a secure way to store the client secret and update your code to get the value accordingly.

For example, you can store the secret in an environment variable on the server where your application is deployed. You can also use a secret management service like Azure Key Vault.

### Update the callback URL for deployment

This tutorial used a callback URL starting with `http://localhost:4567`. However, `http://localhost:4567` is only available locally to your computer when you start the Sinatra server. Before you deploy your app, you should update the callback URL to use the callback URL that you use in production. For more information about updating the callback URL for your app, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)."

### Handle multiple callback URLs

This tutorial used a single callback URL, but your app can have up to 10 callback URLs. If you want to use multiple callback URLs:

- Add the additional callback URLs to your app. For more information about adding callback URLs, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
- When you link to `{% data variables.product.oauth_host_code %}/login/oauth/authorize`, use the `redirect_uri` query parameter to redirect users to the desired callback URL. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-web-application-flow-to-generate-a-user-access-token)."
- In your app code, handle each callback URL, similar to the code block starting in `get "CALLBACK_URL" do`.

### Specify additional parameters

When you link to `{% data variables.product.oauth_host_code %}/login/oauth/authorize`, you can pass additional query parameters. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-web-application-flow-to-generate-a-user-access-token)."

Unlike a traditional OAuth token, the user access token does not use scopes so you cannot specify scopes via the `scope` parameter. Instead, it uses fine-grained permissions. A user access token only has permissions that both the user and the app have.

### Adjust the code to meet your app's needs

This tutorial demonstrated how to display information about the authenticated user, but you can adjust this code to take other actions. Remember to update your app's permissions if your app needs additional permissions for the API requests that you want to make. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."

This tutorial stored all of the code into a single file, but you may want to move functions and components into separate files.

### Securely store tokens

This tutorial generates a user access token. Unless you opted out of expiration for user access tokens, the user access token will expire after eight hours. You will also receive a refresh token that can regenerate a user access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens)."

If you plan on interacting further with {% data variables.product.company_short %}'s APIs, you should store the token for future use. If you choose to store the user access token or refresh token, you must store it securely. You should never publicize the token.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

### Follow best practices

You should aim to follow best practices with your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."
