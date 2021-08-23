---
title: Authenticating with GitHub Apps
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/
  - /apps/building-github-apps/authentication-options-for-github-apps/
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
---


## Generating a private key

After you create a GitHub App, you'll need to generate one or more private keys. You'll use the private key to sign access token requests.

You can create multiple private keys and rotate them to prevent downtime if a key is compromised or lost. To verify that a private key matches a public key, see [Verifying private keys](#verifying-private-keys).

To generate a private key:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. In "Private keys", click **Generate a private key**.
![Generate private key](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. You will see a private key in PEM format downloaded to your computer. Make sure to store this file because GitHub only stores the public portion of the key.

{% note %}

**Note:** If you're using a library that requires a specific file format, the PEM file you download will be in `PKCS#1 RSAPrivateKey` format.

{% endnote %}

## Verifying private keys
{% data variables.product.product_name %} generates a fingerprint for each private and public key pair using the {% ifversion ghes < 3.0 %}SHA-1{% else %}SHA-256{% endif %} hash function. You can verify that your private key matches the public key stored on {% data variables.product.product_name %} by generating the fingerprint of your private key and comparing it to the fingerprint shown on {% data variables.product.product_name %}.

To verify a private key:

1. Find the fingerprint for the private and public key pair you want to verify in the "Private keys" section of your {% data variables.product.prodname_github_app %}'s developer settings page. For more information, see [Generating a private key](#generating-a-private-key).
![Private key fingerprint](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Generate the fingerprint of your private key (PEM) locally by using the following command:
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl {% ifversion ghes < 3.0 %}sha1 -c{% else %}sha256 -binary | openssl base64{% endif %}
    ```
3. Compare the results of the locally generated fingerprint to the fingerprint you see in {% data variables.product.product_name %}.

## Deleting private keys
You can remove a lost or compromised private key by deleting it, but you must have at least one private key. When you only have one key, you will need to generate a new one before deleting the old one.
![Deleting last private key](/assets/images/github-apps/github_apps_delete_key.png)

## Authenticating as a {% data variables.product.prodname_github_app %}

Authenticating as a {% data variables.product.prodname_github_app %} lets you do a couple of things:

* You can retrieve high-level management information about your {% data variables.product.prodname_github_app %}.
* You can request access tokens for an installation of the app.

To authenticate as a {% data variables.product.prodname_github_app %}, [generate a private key](#generating-a-private-key) in PEM format and download it to your local machine. You'll use this key to sign a [JSON Web Token (JWT)](https://jwt.io/introduction) and encode it using the `RS256` algorithm. {% data variables.product.product_name %} checks that the request is authenticated by verifying the token with the app's stored public key.

Here's a quick Ruby script you can use to generate a JWT. Note you'll have to run `gem install jwt` before using it.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read(YOUR_PATH_TO_PEM)
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: YOUR_APP_ID
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` and `YOUR_APP_ID` are the values you must replace.

Use your {% data variables.product.prodname_github_app %}'s identifier (`YOUR_APP_ID`) as the value for the JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (issuer) claim. You can obtain the {% data variables.product.prodname_github_app %} identifier via the initial webhook ping after [creating the app](/apps/building-github-apps/creating-a-github-app/), or at any time from the app settings page in the GitHub.com UI.

After creating the JWT, set it in the `Header` of the API request:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github.v3+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` is the value you must replace.

The example above uses the maximum expiration time of 10 minutes, after which the API will start returning a `401` error:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

You'll need to create a new JWT after the time expires.

## Accessing API endpoints as a {% data variables.product.prodname_github_app %}

For a list of REST API endpoints you can use to get high-level information about a {% data variables.product.prodname_github_app %}, see "[GitHub Apps](/rest/reference/apps)."

## Authenticating as an installation

Authenticating as an installation lets you perform actions in the API for that installation. Before authenticating as an installation, you must create an installation access token. Ensure that you have already installed your GitHub App to at least one repository; it is impossible to create an installation token without a single installation. These installation access tokens are used by {% data variables.product.prodname_github_apps %} to authenticate. For more information, see "[Installing GitHub Apps](/developers/apps/managing-github-apps/installing-github-apps)."

By default, installation access tokens are scoped to all the repositories that an installation can access. You can limit the scope of the installation access token to specific repositories by using the `repository_ids` parameter. See the [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app) endpoint for more details. Installation access tokens have the permissions configured by the {% data variables.product.prodname_github_app %} and expire after one hour.

To list the installations for an authenticated app, include the JWT [generated above](#jwt-payload) in the Authorization header in the API request:

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/app/installations
```

The response will include a list of installations where each installation's `id` can be used for creating an installation access token. For more information about the response format, see "[List installations for the authenticated app](/rest/reference/apps#list-installations-for-the-authenticated-app)."

To create an installation access token, include the JWT [generated above](#jwt-payload) in the Authorization header in the API request and replace `:installation_id` with the installation's `id`:

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

The response will include your installation access token, the expiration date, the token's permissions, and the repositories that the token can access. For more information about the response format, see the [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app) endpoint.

To authenticate with an installation access token, include it in the Authorization header in the API request:

```shell
$ curl -i \
-H "Authorization: token YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github.v3+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` is the value you must replace.

## Accessing API endpoints as an installation

For a list of REST API endpoints that are available for use by {% data variables.product.prodname_github_apps %} using an installation access token, see "[Available Endpoints](/rest/overview/endpoints-available-for-github-apps)."

For a list of endpoints related to installations, see "[Installations](/rest/reference/apps#installations)."

## HTTP-based Git access by an installation

Installations with [permissions](/apps/building-github-apps/setting-permissions-for-github-apps/) on `contents` of a repository, can use their installation access tokens to authenticate for Git access. Use the installation access token as the HTTP password:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
