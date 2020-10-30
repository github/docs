##### 签名验证对象

响应将包含一个 `verification` 对象，以描述验证提交签名的结果。 以下字段包含在 `verification` 对象中：

| 名称          | 类型    | 描述                                                                                                 |
| ----------- | ----- | -------------------------------------------------------------------------------------------------- |
| `已验证`       | `布尔值` | Indicates whether GitHub considers the signature in this commit to be verified.                    |
| `原因`        | `字符串` | The reason for `verified` value. Possible values and their meanings are enumerated in table below. |
| `signature` | `字符串` | The signature that was extracted from the commit.                                                  |
| `payload`   | `字符串` | The value that was signed.                                                                         |

以下是 `verification` 对象中 `reason` 的可能值：

| 值                        | 描述                                                |
| ------------------------ | ------------------------------------------------- |
| `expired_key`            | 表示签名过期的键。                                         |
| `not_signing_key`        | “签名”标志不在生成签名的 GPG 密钥的使用标志中。                       |
| `gpgverify_error`        | 与签名验证服务通信时出错。                                     |
| `gpgverify_unavailable`  | 签名验证服务当前不可用。                                      |
| `unsigned`               | 对象不包括签名。                                          |
| `unknown_signature_type` | 在提交中发现非 PGP 签名。                                   |
| `no_user`                | 没有用户与提交中的 `committer` 电子邮件地址相关联。                  |
| `unverified_email`       | 提交中的 `committer` 电子邮件地址与某个用户相关联，但未在其帐户中验证该电子邮件地址。 |
| `bad_email`              | 提交中的 `committer` 电子邮件地址未包含在生成签名的 PGP 密钥的标识中。      |
| `unknown_key`            | 进行签名的密钥尚未向任何用户帐户注册。                               |
| `malformed_signature`    | 解析签名时出错。                                          |
| `invalid`                | 无法使用在签名中找到密钥 ID 的密钥进行加密验证签名。                      |
| `有效`                     | 未出现上述任何错误，因此该签名被视为已验证。                            |
