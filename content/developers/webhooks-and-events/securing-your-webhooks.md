---
title: Securing your webhooks
intro: 'Ensure your server is only receiving the expected {% data variables.product.prodname_dotcom %} requests for security reasons.'
redirect_from:
  - /webhooks/securing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Once your server is configured to receive payloads, it'll listen for any payload sent to the endpoint you configured. For security reasons, you probably want to limit requests to those coming from GitHub. There are a few ways to go about this--for example, you could opt to allow requests from GitHub's IP address--but a far easier method is to set up a secret token and validate the information.


### Setting your secret token

You'll need to set up your secret token in two places: GitHub and your server.

To set your token on GitHub:

1. Navigate to the repository where you're setting up your webhook.
2. Fill out the Secret textbox. Use a random string with high entropy (e.g., by taking the output of `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` at the terminal).
![Webhook secret token field](/assets/images/webhook_secret_token.png)
3. Click **Update Webhook**.

Next, set up an environment variable on your server that stores this token. Typically, this is as simple as running:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**Never** hardcode the token into your app!

### Validating payloads from GitHub

When your secret token is set, GitHub uses it to create a hash signature with each payload.

This hash signature is passed along with each request in the headers as `X-Hub-Signature`. Suppose you have a basic server listening to webhooks that looks like this:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

The goal is to compute a hash using your `SECRET_TOKEN`, and ensure that the hash from GitHub matches. GitHub uses an HMAC hexdigest to compute the hash, so you could change your server to look a little like this:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end
```

Obviously, your language and server implementations may differ than this code. There are a couple of very important things to point out, however:

* No matter which implementation you use, the hash signature starts with `sha1=`, using the key of your secret token and your payload body.

* Using a plain `==` operator is **not advised**. A method like [`secure_compare`][secure_compare] performs a "constant time" string comparison, which renders it safe from certain timing attacks against regular equality operators.

[secure_compare]: http://rubydoc.info/github/rack/rack/master/Rack/Utils.secure_compare
