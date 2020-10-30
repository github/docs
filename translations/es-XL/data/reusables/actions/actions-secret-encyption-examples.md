#### Ejemplo para cifrar un secreto utilizando Node.js

Cifra tu secreto utilizando la biblioteca [tweetsodium](https://github.com/github/tweetsodium).

```js
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

#### Ejemplo para cifrar un secreto utilizando Python

Cifra tu secreto utilizando [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) con Python 3.

```py
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
    """Encrypt a Unicode string using the public key."""
    const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
```

#### Ejemplo para cifrar un secreto utilizando C\#

Cifra tu secreto utilizando el [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) Paquete.

```csharp
var secretValue = System. Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert. FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium. SealedPublicKeyBox.Create(secretValue, publicKey);

Console. WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Ejemplo para cifrar un secreto utilizando Ruby

Cifra tu secreto utilizando la gema [rbnacl](https://github.com/RubyCrypto/rbnacl).

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```
