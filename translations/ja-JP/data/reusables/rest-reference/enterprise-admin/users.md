## ユーザ

ユーザ管理 API では、Enterprise でユーザをサスペンド{% ifversion ghes %}、サスペンド解除、昇格、降格、{% endif %}{% ifversion ghae %}およびサスペンド解除{% endif %}できます。 *これは[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。*通常のユーザがアクセスしようとすると、`403` レスポンスを受け取ります。