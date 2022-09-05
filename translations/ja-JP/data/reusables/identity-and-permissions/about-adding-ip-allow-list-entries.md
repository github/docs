IPアドレスもしくはアドレスの範囲を含むエントリを追加することで、IP許可リストを作成できます。{% ifversion ip-allow-list-address-check %} エントリの追加を終えたら、特定のIPアドレスがリスト中の有効化エントリのいずれかによって許可されるかをチェックできます。{% endif %}

このリストが{% ifversion ghae %}Enterprise{% else %}Enterprise内のOrganizationが所有するプライベートアセット{% endif %}へのアクセスを制限する前に、許可IPアドレスも有効化しなければなりません。