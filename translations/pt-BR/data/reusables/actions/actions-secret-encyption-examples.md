#### Exemplo de criptografia de um segredo usando Node.js

Criptografe seu segredo usando a biblioteca [tweetsodium](https://github.com/github/tweetsodium).

```js
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Converta a mensagem e a chave para Uint8Array's (Buffer implementa essa interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Criptografe usando LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 o segredo criptografado
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

#### Exemplo de criptografar um segredo usando Python

Criptografe seu segredo usando [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) com Python 3.

```py
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
    """Encrypt a Unicode string using the public key."""
    const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Converta a mensagem e a chave para Uint8Array's (Buffer implementa essa interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Criptografe usando LibSodium.
```

#### Exemplo de criptografar um segredo usando C\#

Criptografe seu segredo usando o [Sodium. Core](https://www.nuget.org/packages/Sodium. Core/) package.

```csharp
var secretValue = System. Text. Encoding.UTF8. GetBytes("mySecret");
var publicKey = Convert. FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium. SealedPublicKeyBox. Create(secretValue, publicKey); Console. WriteLine(Convert. ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Criptografe seu segredo usando o gem [rbnacl](https://github.com/RubyCrypto/rbnacl).

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
