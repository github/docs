If you only have a raw token value, you'll need to generate a SHA-256 hash before you can search for the token.

For macOS and Linux, you can use `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, replacing TOKEN with the token value.

For Powershell, you can use the following script to return a SHA-256 hash for a given string.

```shell copy
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```
