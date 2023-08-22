---
title: Securing your webhooks
intro: 'Ensure your server is only receiving the expected {% data variables.product.prodname_dotcom %} requests for security reasons.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
  - /developers/webhooks-and-events/webhooks/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
---
Once your server is configured to receive payloads, it'll listen for any payload sent to the endpoint you configured. For security reasons, you probably want to limit requests to those coming from GitHub. There are a few ways to go about this (for example, you could opt to allow requests from GitHub's IP address) but a far easier method is to set up a secret token and validate the information.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Setting your secret token

You'll need to set up your secret token in two places: GitHub and your server.

To set your token on GitHub:

1. Navigate to the repository where you're setting up your webhook.
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, click **{% octicon "webhook" aria-hidden="true" %} Webhooks**.
1. Next to the webhook, click **Edit**.
1. In the "Secret" field, type a random string with high entropy. You can generate a string with `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` in the terminal, for example.
1. Click **Update Webhook**.

Next, set up an environment variable on your server that stores this token. Typically, this is as simple as running:

```shell
export SECRET_TOKEN=YOUR-TOKEN
```

**Never** hardcode the token into your app!

## Validating payloads from GitHub

When your secret token is set, {% data variables.product.product_name %} uses it to create a hash signature with each payload. This hash signature is included with the headers of each request as `x-hub-signature-256`.

{% ifversion fpt or ghes or ghec %}
{% note %}

**Note:** For backward-compatibility, we also include the `x-hub-signature` header that is generated using the SHA-1 hash function. If possible, we recommend that you use the `x-hub-signature-256` header for improved security. The examples below demonstrate using the `x-hub-signature-256` header.

{% endnote %}
{% endif %}

You should calculate a hash using your `SECRET_TOKEN`, and ensure that the result matches the hash from {% data variables.product.product_name %}. {% data variables.product.product_name %} uses an HMAC hex digest to compute the hash.

{% note %}

**Note:** Webhook payloads can contain unicode characters. If your language and server implementation specifies a character encoding, ensure that you handle the payload as UTF-8.

{% endnote %}

Your language and server implementations may differ from the following examples. However, there are a number of very important things to point out:

- No matter which implementation you use, the hash signature starts with `sha256=`, using the key of your secret token and your payload body.

- Using a plain `==` operator is **not advised**. A method like [`secure_compare`][secure_compare] or [`crypto.timingSafeEqual`][timingSafeEqual] performs a "constant time" string comparison, which helps mitigate certain timing attacks against regular equality operators, or regular loops in JIT-optimized languages.

### Test values

Regardless of the programming language that you use to implement HMAC verification in your code, you can use the following `secret` and `payload` values to verify that your implementation is correct.

- secret: "It's a Secret to Everybody"
- payload: "Hello, World!"

If your implementation is correct and uses the SHA-256 algorithm, the signatures that you generate should match the following signature values:

- signature: 757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17
- x-hub-signature: sha256=757107ea0eb2509fc211221cce984b8a37570b6d7586c22c46f4379c8b043e17

If your implementation is correct and uses the SHA-1 algorithm, the signatures that you generate should match the following signature values:

- signature: 01dc10d0c83e72ed246219cdd91669667fe2ca59
- x-hub-signature: sha1=01dc10d0c83e72ed246219cdd91669667fe2ca59

### Ruby example

For example, you can define the following `verify_signature` function:

``` ruby
def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

Then you can call it when you receive a webhook payload:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end
```

### Python example

For example, you can define the following `verify_signature` function and call it when you receive a webhook payload:

```python
import hashlib
import hmac
def verify_signature(payload_body, secret_token, signature_header):
    """Verify that the payload was sent from GitHub by validating SHA256.
    
    Raise and return 403 if not authorized.
    
    Args:
        payload_body: original request body to verify (request.body())
        secret_token: GitHub app webhook token (WEBHOOK_SECRET)
        signature_header: header received from GitHub (x-hub-signature-256)
    """
    if not signature_header:
        raise HTTPException(status_code=403, detail="x-hub-signature-256 header is missing!")
    hash_object = hmac.new(secret_token.encode('utf-8'), msg=payload_body, digestmod=hashlib.sha256)
    expected_signature = "sha256=" + hash_object.hexdigest()
    if not hmac.compare_digest(expected_signature, signature_header):
        raise HTTPException(status_code=403, detail="Request signatures didn't match!")
```

### JavaScript example

For example, you can define the following `verifySignature` function and call it in any JavaScript environment when you receive a webhook payload:

```javascript
let encoder = new TextEncoder();

async function verifySignature(secret, header, payload) {
    let parts = header.split("=");
    let sigHex = parts[1];

    let algorithm = { name: "HMAC", hash: { name: 'SHA-256' } };

    let keyBytes = encoder.encode(secret);
    let extractable = false;
    let key = await crypto.subtle.importKey(
        "raw",
        keyBytes,
        algorithm,
        extractable,
        [ "sign", "verify" ],
    );

    let sigBytes = hexToBytes(sigHex);
    let dataBytes = encoder.encode(payload);
    let equal = await crypto.subtle.verify(
        algorithm.name,
        key,
        sigBytes,
        dataBytes,
    );

    return equal;
}

function hexToBytes(hex) {
    let len = hex.length / 2;
    let bytes = new Uint8Array(len);

    let index = 0;
    for (let i = 0; i < hex.length; i += 2) {
        let c = hex.slice(i, i + 2);
        let b = parseInt(c, 16);
        bytes[index] = b;
        index += 1;
    }

    return bytes;
}
```

### Typescript example

For example, you can define the following `verify_signature` function and call it when you receive a webhook payload:

```javascript copy
import * as crypto from "crypto";

const WEBHOOK_SECRET: string = process.env.WEBHOOK_SECRET;

const verify_signature = (req: Request) => {
  const signature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");
  let trusted = Buffer.from(`sha256=${signature}`, 'ascii');
  let untrusted =  Buffer.from(req.headers.get("x-hub-signature-256"), 'ascii');
  return crypto.timingSafeEqual(trusted, untrusted);
};

const handleWebhook = (req: Request, res: Response) => {
  if (!verify_signature(req)) {
    res.status(401).send("Unauthorized");
    return;
  }
  // The rest of your logic here
};
```

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
[timingSafeEqual]: https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b
