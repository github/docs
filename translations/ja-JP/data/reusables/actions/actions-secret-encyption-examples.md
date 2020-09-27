#### Node.jsを使用してシークレットを暗号化する例

[tweetsodium](https://github.com/github/tweetsodium)ライブラリを使ってシークレットを暗号化する

```js
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// メッセージとキーをUint8Array(このインターフェースを実装したBuffer)に変換する
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// LibSodiumを使って暗号化する。
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// 暗号化されたシークレットをBase64化
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

#### Pythonを使ってシークレットを暗号化する例

[pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox)をPython 3と使ってシークレットを暗号化する

```py
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
    """Unicode文字列を公開鍵を使って暗号化する。"""
    from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
    """Unicode文字列を公開鍵を使って暗号化する。
```

#### C#を使ってシークレットを暗号化する例

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```csharp
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

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
