Before you enable team synchronization for Okta, you or your IdP administrator must:

- Configure the SAML, SSO, and SCIM integration for your organization using Okta. 詳しい情報については「[Oktaを使用したSAMLシングルサインオンとSCIMの設定](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)」を参照してください。
- OktaインスタンスのテナントURLを提供してください。
- Okta環境にサービスユーザとして読み取りのみの管理権限を持つ、有効なSSWSトークンを生成してください。 詳しい情報についてはOktaのドキュメンテーションの[トークンの生成](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/)及び[サービスユーザ](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm)を参照してください。
