---
title: Securing your webhooks
intro: 'Ensure your server is only receiving the expected {% data variables.product.prodname_dotcom %} requests for security reasons.'
redirect_from:
  - /webhooks/securing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - веб-перехватчики
---



Once your server is configured to receive payloads, it'll listen for any payload sent to the endpoint you configured. For security reasons, you probably want to limit requests to those coming from GitHub. There are a few ways to go about this--for example, you could opt to allow requests from GitHub's IP address--but a far easier method is to set up a secret token and validate the information.

{% data reusables.webhooks.webhooks-rest-api-links %}

### Setting your secret token

You'll need to set up your secret token in two places: GitHub and your server.

To set your token on GitHub:

1. Navigate to the repository where you're setting up your webhook.
2. Fill out the Secret textbox. Use a random string with high entropy (e.g., by taking the output of `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` at the terminal). ![Webhook secret token field](/assets/images/webhook_secret_token.png)
3. Click **Update Webhook**.

Next, set up an environment variable on your server that stores this token. Typically, this is as simple as running:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**Never** hardcode the token into your app!

### Validating payloads from GitHub

When your secret token is set, {% data variables.product.product_name %} uses it to create a hash signature with each payload. This hash signature is included with the headers of each request as {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`X-Hub-Signature-256`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`X-Hub-Signature`{% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Note:** For backward-compatibility, we also include the `X-Hub-Signature` header that is generated using the SHA-1 hash function. If possible, we recommend that you use the `X-Hub-Signature-256` header for improved security. The example below demonstrates using the `X-Hub-Signature-256` header.

{% endnote %}
{% endif %}

For example, if you have a basic server that listens for webhooks, it might be configured similar to this:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

The intention is to calculate a hash using your `SECRET_TOKEN`, and ensure that the result matches the hash from {% data variables.product.product_name %}. {% data variables.product.product_name %} uses an HMAC hex digest to compute the hash, so you could reconfigure your server to look a little like this:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end{% elsif currentVersion ver_lt "enterprise-server@2.23" %}
def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end{% endif %}
```

{% note %}

**Note:** Webhook payloads can contain unicode characters. If your language and server implementation specifies a character encoding, ensure that you handle the payload as UTF-8.

{% endnote %}

Your language and server implementations may differ from this example code. However, there are a number of very important things to point out:

* No matter which implementation you use, the hash signature starts with {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or "github-ae@latest" %}`sha256=`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`sha1=`{% endif %}, using the key of your secret token and your payload body.

* Using a plain `==` operator is **not advised**. A method like [`secure_compare`][secure_compare] performs a "constant time" string comparison, which helps mitigate certain timing attacks against regular equality operators.

[secure_compare]: http://rubydoc.info/github/rack/rack/master/Rack/Utils.secure_compare
