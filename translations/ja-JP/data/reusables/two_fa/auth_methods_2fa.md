{% if currentVersion != "free-pro-team@latest" %}
### 2FAをサポートする認証方式

| 認証方式                    | 説明                                                                                     | 2要素認証のサポート                                                                                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ビルトイン                   | 認証は{% data variables.product.prodname_ghe_server %}アプライアンスに保存されているユーザアカウントに対して行われます。 | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。 |{% if currentVersion != "free-pro-team@latest" %}
| アイデンティティプロバイダ付きのビルトイン認証 | 認証は、アイデンティティプロバイダに保存されたユーザアカウントに対して行われます。                                              | アイデンティティプロバイダに依存します。{% endif %}
| LDAP                    | 会社のディレクトリサービスとの認証のインテグレーションができます。                                                      | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。                                                    |
| SAML                    | 認証は外部のアイデンティティプロバイダに対して行われます。                                                          | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}
| CAS                     | 外部のサーバーによってシングルサインオンサービスが提供されます。                                                       | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
