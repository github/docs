---
title: Generating a JSON Web Token (JWT) for a GitHub App
shortTitle: Generate a JWT
intro: 'Learn how to create a JSON Web Token (JWT) to authenticate to certain REST API endpoints with your {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About JSON Web Tokens (JWTs)

In order to authenticate as an app or generate an installation access token, you must generate a JSON Web Token (JWT). If a REST API endpoint requires a JWT, the documentation for that endpoint will indicate that you must use a JWT to access the endpoint.

Your JWT must be signed using the `RS256` algorithm and must contain the following claims.

|Claim | Meaning | Details |
|---|---|---|
|`iat`| Issued At | The time that the JWT was created. To protect against clock drift, we recommend that you set this 60 seconds in the past and ensure that your server's date and time is set accurately (for example, by using the Network Time Protocol). |
|`exp`| Expires At | The expiration time of the JWT, after which it can't be used to request an installation token. The time must be no more than 10 minutes into the future. |
|`iss`| Issuer | The {% ifversion client-id-for-app %}client ID or {% endif %}application ID of your {% data variables.product.prodname_github_app %}. This value is used to find the right public key to verify the signature of the JWT. You can find your app's ID{% ifversion client-id-for-app %}s{% endif %} on the settings page for your {% data variables.product.prodname_github_app %}.{% ifversion client-id-for-app %} Use of the client ID is recommended.{% endif %} For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)."|
|`alg`| Message authentication code algorithm | This should be `RS256` since your JWT must be signed using the `RS256` algorithm. |

To use a JWT, pass it in the `Authorization` header of an API request. For example:

```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/app" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR_JWT" \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

{% data reusables.getting-started.bearer-vs-token %}

## Generating a JSON Web Token (JWT)

Most programming languages have a package that can generate a JWT. In all cases, you must have a private key and the ID of your {% data variables.product.prodname_github_app %}. For more information about generating a private key, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)". You can find your app's ID with the `GET /app` REST API endpoint. For more information, see "[Apps](/rest/apps/apps)" in the REST API documentation.

{% note %}

Note: Instead of creating a JWT, you can use {% data variables.product.company_short %}'s Octokit SDKs to authenticate as an app. The SDK will take care of generating a JWT for you and will regenerate the JWT once the token expires. For more information, see "[Scripting with the REST API and JavaScript](/rest/guides/scripting-with-the-rest-api-and-javascript#authenticating-with-a-github-app)."

{% endnote %}

### Example: Using Ruby to generate a JWT

{% note %}

**Note:** You must run `gem install jwt` to install the `jwt` package in order to use this script.

{% endnote %}

In the following example, replace `YOUR_PATH_TO_PEM` with the file path where your private key is stored. Replace `YOUR_APP_ID` with the ID of your app. Make sure to enclose the values for `YOUR_PATH_TO_PEM` and `YOUR_APP_ID` in double quotes.

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
  {% ifversion client-id-for-app %}
# {% data variables.product.prodname_github_app %}'s client ID
  iss: "YOUR_CLIENT_ID"{% else %}
# {% data variables.product.prodname_github_app %}'s app ID
  iss: "YOUR_APP_ID"{% endif %}
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

### Example: Using Python to generate a JWT

{% note %}

**Note:** You must run `pip install PyJWT` to install the `PyJWT` package in order to use this script.

{% endnote %}

```python copy
#!/usr/bin/env python3
import sys
import time

import jwt


# Get PEM file path
if len(sys.argv) > 1:
    pem = sys.argv[1]
else:
    pem = input("Enter path of private PEM file: ")

{% ifversion client-id-for-app %}
# Get the Client ID
if len(sys.argv) > 2:
    client_id = sys.argv[2]
else:
    client_id = input("Enter your Client ID: ")
{% else %}
# Get the App ID
if len(sys.argv) > 2:
    app_id = sys.argv[2]
else:
    app_id = input("Enter your APP ID: ")
{% endif %}

# Open PEM
with open(pem, 'rb') as pem_file:
    signing_key = pem_file.read()

payload = {
    # Issued at time
    'iat': int(time.time()),
    # JWT expiration time (10 minutes maximum)
    'exp': int(time.time()) + 600,
    {% ifversion client-id-for-app %}
    # {% data variables.product.prodname_github_app %}'s client ID
    'iss': client_id{% else %}
    # {% data variables.product.prodname_github_app %}'s app ID
    'iss': app_id{% endif %}
}

# Create JWT
encoded_jwt = jwt.encode(payload, signing_key, algorithm='RS256')

print(f"JWT:  {encoded_jwt}")
```

This script will prompt you for the file path where your private key is stored and for the ID of your app. Alternatively, you can pass those values as inline arguments when you execute the script.

### Example: Using Bash to generate a JWT

{% note %}

**Note:** You must pass your {% ifversion client-id-for-app %}Client ID{% else %}App ID{% endif %}  and the file path where your private key is stored as arguments when running this script.

{% endnote %}

```bash copy
#!/usr/bin/env bash

set -o pipefail
{% ifversion client-id-for-app %}
client_id=$1 # Client ID as first argument
{% else %}
app_id=$1 # App ID as first argument
{% endif %}
pem=$( cat $2 ) # file path of the private key as second argument

now=$(date +%s)
iat=$((${now} - 60)) # Issues 60 seconds in the past
exp=$((${now} + 600)) # Expires 10 minutes in the future

b64enc() { openssl base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n'; }

header_json='{
    "typ":"JWT",
    "alg":"RS256"
}'
# Header encode
header=$( echo -n "${header_json}" | b64enc )

payload_json="{
    \"iat\":${iat},
    \"exp\":${exp},
    {% ifversion client-id-for-app %}\"iss\":\"${client_id}\"{% else %}\"iss\":\"${app_id}\"{% endif %}
}"
# Payload encode
payload=$( echo -n "${payload_json}" | b64enc )

# Signature
header_payload="${header}"."${payload}"
signature=$(
    openssl dgst -sha256 -sign <(echo -n "${pem}") \
    <(echo -n "${header_payload}") | b64enc
)

# Create JWT
JWT="${header_payload}"."${signature}"
printf '%s\n' "JWT: $JWT"
```

### Example: Using PowerShell to generate a JWT

In the following example, replace `YOUR_PATH_TO_PEM` with the file path where your private key is stored. Replace {% ifversion client-id-for-app %}`YOUR_CLIENT_ID`{% else %}`YOUR_APP_ID`{% endif %} with the ID of your app. Make sure to enclose the values for `YOUR_PATH_TO_PEM` in double quotes.

```powershell copy
#!/usr/bin/env pwsh

{% ifversion client-id-for-app %}
$client_id = YOUR_CLIENT_ID
{% else %}
$app_id = YOUR_APP_ID
{% endif %}
$private_key_path = "YOUR_PATH_TO_PEM"

$header = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((ConvertTo-Json -InputObject @{
  alg = "RS256"
  typ = "JWT"
}))).TrimEnd('=').Replace('+', '-').Replace('/', '_');

$payload = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((ConvertTo-Json -InputObject @{
  iat = [System.DateTimeOffset]::UtcNow.AddSeconds(-10).ToUnixTimeSeconds()
  exp = [System.DateTimeOffset]::UtcNow.AddMinutes(10).ToUnixTimeSeconds()
  {% ifversion client-id-for-app %}  iss = $client_id{% else %}  iss = $app_id{% endif %}
}))).TrimEnd('=').Replace('+', '-').Replace('/', '_');

$rsa = [System.Security.Cryptography.RSA]::Create()
$rsa.ImportFromPem((Get-Content $private_key_path -Raw))

$signature = [Convert]::ToBase64String($rsa.SignData([System.Text.Encoding]::UTF8.GetBytes("$header.$payload"), [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)).TrimEnd('=').Replace('+', '-').Replace('/', '_')
$jwt = "$header.$payload.$signature"
Write-Host $jwt
```
