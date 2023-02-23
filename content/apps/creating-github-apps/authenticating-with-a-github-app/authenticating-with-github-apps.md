---
title: Authenticating with GitHub Apps
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
  - /developers/apps/building-github-apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
---

## Authenticating as a {% data variables.product.prodname_github_app %}

Authenticating as a {% data variables.product.prodname_github_app %} is required for [`server-to-server`](/get-started/quickstart/github-glossary#server-to-server-request) API calls, which let your {% data variables.product.prodname_github_app %} do a couple things:

* Retrieve high-level management information about your {% data variables.product.prodname_github_app %}.
* Request access tokens for an installation of the app, allowing you to make API calls without a signed-in user.

To authenticate as a {% data variables.product.prodname_github_app %}, [generate a private key](#generating-a-private-key) in PEM format and download it to your local machine. You'll use this key to [sign a JSON Web Token (JWT)](#jwt-payload) and encode it using the `RS256` algorithm. {% data variables.product.product_name %} validates your app's identity by verifying the token with the app's stored public key. You'll exchange this JWT for an installation token, used to authenticate your app as a specific installation.

### Listing the installations for an app

To list the installations for your app, include the JWT in the Authorization header in an API request to `GET /app/installations`. For more information about generating a JWT, see "[JWT payload](#jwt-payload)."

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

The response will include a list of installations where each installation's `id` can be used for creating an installation access token. For more information about the response format, see "[AUTOTITLE](/rest/apps#list-installations-for-the-authenticated-app)."

## Authenticating as an installation

Authenticating as an installation lets your app access that organization or user via the API, as well as public resources on {% data variables.product.product_name %}. To authenticate as an installation, you must use an installation access token, which you get by sending a [JWT](#jwt-payload) to {% data variables.product.product_name %} to prove your app's identity. Ensure that you have already installed your GitHub App to at least one organization or user account; it is impossible to create an installation token without an installation. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps)."

By default, installation access tokens are scoped to all the repositories that an installation was granted access to. You can further limit the scope of the installation access token to specific repositories by using the `repository_ids` parameter. Installation access tokens have the permissions configured by the {% data variables.product.prodname_github_app %}, and like repository access, can also be scoped down using the `permissions` parameter. For more information, see the [Create an installation access token for an app](/rest/apps#create-an-installation-access-token-for-an-app) endpoint documentation. All installation tokens expire after 1 hour.

To create an installation access token, include the JWT in the Authorization header in the API request, replacing `:installation_id` with the installation's `id`. For more information about generating a JWT, see "[JWT payload](#jwt-payload)."

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

The response will include your installation access token, the expiration date, the token's permissions, and the repositories that the token can access. For more information about the response format, see the [Create an installation access token for an app](/rest/apps#create-an-installation-access-token-for-an-app) endpoint.

To authenticate with an installation access token, include it in the Authorization header in the API request. Replace `YOUR_INSTALLATION_ACCESS_TOKEN` with an installation access token:

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

{% note %}

**Note:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## Accessing API endpoints as an installation

For a list of REST API endpoints that are available for use by {% data variables.product.prodname_github_apps %} using an installation access token, see "[AUTOTITLE](/rest/overview/endpoints-available-for-github-apps)."

For a list of endpoints related to installations, see "[AUTOTITLE](/rest/apps#installations)."

## HTTP-based Git access by an installation

Installations with [permissions](/apps/creating-github-apps/creating-github-apps/setting-permissions-for-github-apps) on `contents` of a repository, can use their installation access tokens to authenticate for Git access. Use the installation access token as the HTTP password:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```

## Generating a JSON Web Token (JWT)

The [JWT](https://jwt.io/) that's used to authenticate your application is made up of several claims, as well as a signature that's used to validate its authenticity. Those claims are:

|Claim | Meaning | Details |
|---|---|---|
|`iat`| Issued At | The time the JWT was created. To protect against clock drift, we recommend you set this 60 seconds in the past. |
|`exp`| Expires At | The expiration time of the JWT, after which it can't be used to request an installation token. The `exp` must be no more than 10 minutes into the future. |
|`iss`| Issuer | Your application ID, used to find the right public key to verify the signature of the JWT. |

Tokens must be signed using the `RS256` algorithm, with a matching `alg` claim of `RS256`.

### Using Ruby

Here's a Ruby script you can use to generate a JWT. Note you'll have to run `gem install jwt` before using it. `YOUR_PATH_TO_PEM` and `YOUR_APP_ID` are the values you must replace. Make sure to enclose the values in double quotes.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

#### Using Python

Here is a similar script for generating a JWT in Python. Note you will have to use `pip install jwt` in order to use this script. This script will prompt you for the location of your PEM file and your app's ID, or you can pass them as inline arguments when you execute the script.

```python{:copy}
#!/usr/bin/env python3
import jwt
import time
import sys


# Get PEM file path
if len(sys.argv) > 1:
    pem = sys.argv[1]
else:
    pem = input("Enter path of private PEM file: ")

# Get the App ID
if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = input("Enter your APP ID: ")

# Open PEM
with open(pem, 'rb') as pem_file:
    signing_key = jwt.jwk_from_pem(pem_file.read())

payload = {
    # Issued at time
    'iat': int(time.time()),
    # JWT expiration time (10 minutes maximum)
    'exp': int(time.time()) + 600,
    # GitHub App's identifier
    'iss': app_id
}

# Create JWT
jwt_instance = jwt.JWT()
encoded_jwt = jwt_instance.encode(payload, signing_key, alg='RS256')

print(f"JWT:  ", encoded_jwt)
```

Use your {% data variables.product.prodname_github_app %}'s identifier (`YOUR_APP_ID`) as the value for the JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (issuer) claim. You can obtain the {% data variables.product.prodname_github_app %} identifier via the initial webhook ping after [creating the app](/apps/creating-github-apps/creating-github-apps/creating-a-github-app), or at any time from the app settings page in the GitHub.com UI.

After creating the JWT, set it in the `Header` of the API request:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` is the value you must replace.

The examples above uses the maximum expiration time of 10 minutes, after which the API will start returning a `401` error:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

You'll need to create a new JWT after the time expires.

## Accessing API endpoints as a {% data variables.product.prodname_github_app %}

For a list of REST API endpoints you can use to get high-level information about a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/rest/apps)."

## Generating a private key

After you create a {% data variables.product.prodname_github_app %}, you'll need to generate one or more private keys in order to make requests to the {% data variables.product.product_name %} API as the application itself. You'll use the private key to sign the [JWTs used to request an installation access token](#jwt-payload).

You can create multiple private keys and rotate them to prevent downtime if a key is compromised or lost. To verify that a private key matches a public key, see [Verifying private keys](#verifying-private-keys).

To generate a private key:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. Under "Private keys", click **Generate a private key**.
6. You will see a private key in PEM format downloaded to your computer. Make sure to store this file because GitHub only stores the public portion of the key.

{% note %}

**Note:** If you're using a library that requires a specific file format, the PEM file you download will be in `PKCS#1 RSAPrivateKey` format.

{% endnote %}

## Verifying private keys
{% data variables.product.product_name %} generates a fingerprint for each private and public key pair using the SHA-256 hash function. You can verify that your private key matches the public key stored on {% data variables.product.product_name %} by generating the fingerprint of your private key and comparing it to the fingerprint shown on {% data variables.product.product_name %}.

To verify a private key:

1. Find the fingerprint for the private and public key pair you want to verify in the "Private keys" section of your {% data variables.product.prodname_github_app %}'s developer settings page. For more information, see [Generating a private key](#generating-a-private-key).
![Private key fingerprint](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Generate the fingerprint of your private key (PEM) locally by using the following command:
    ```shell
    $ openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Compare the results of the locally generated fingerprint to the fingerprint you see in {% data variables.product.product_name %}.

## Deleting private keys
You can remove a lost or compromised private key by deleting it, but you must always have at least one private key registered for your {% data variables.product.prodname_github_app %}. When your {% data variables.product.prodname_github_app %} has only one key, you will need to generate a new one before deleting the old one.
![Deleting last private key](/assets/images/github-apps/github_apps_delete_key.png)
