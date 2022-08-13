{% ifversion ghes %}
### 2FAをサポートする認証方式

| 認証方式                    | 説明                                                                                                                                         | 2要素認証のサポート                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ビルトイン                   | Authentication is performed against personal accounts that are stored on the {% data variables.product.prodname_ghe_server %} appliance. | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。 |{% ifversion ghes %}
| アイデンティティプロバイダ付きのビルトイン認証 | Authentication is performed against accounts that are stored on the identity provider.                                                     | アイデンティティプロバイダに依存します。{% endif %}
| LDAP                    | 会社のディレクトリサービスとの認証のインテグレーションができます。                                                                                                          | {% data variables.product.prodname_ghe_server %}アプライアンスでサポートされ、管理されます。 Organizationの管理者は、Organizationのメンバーに対して2FAの有効化を要求できます。                       |
| SAML                    | 認証は外部のアイデンティティプロバイダに対して行われます。                                                                                                              | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}
| CAS                     | 外部のサーバーによってシングルサインオンサービスが提供されます。                                                                                                           | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
