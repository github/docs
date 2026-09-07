Response parameter | Type | Description
--- | --- | ---
`access_token` | `string` | The user access token. The token starts with `ghu_`.
`expires_in` | `integer` | The number of seconds until `access_token` expires. If you disabled expiration of user access tokens, this parameter will be omitted. The value will always be `28800` (8 hours).
`refresh_token` | `string` | The refresh token. If you disabled expiration of user access tokens, this parameter will be omitted. The token starts with `ghr_`.
`refresh_token_expires_in` | `integer` | The number of seconds until `refresh_token` expires. If you disabled expiration of user access tokens, this parameter will be omitted. The value will always be `15897600` (6 months).
`scope` | `string` | The scopes that the token has. This value will always be an empty string. Unlike a traditional OAuth token, the user access token is limited to the permissions that both your app and the user have.
`token_type` | `string` | The type of token. The value will always be `bearer`.
