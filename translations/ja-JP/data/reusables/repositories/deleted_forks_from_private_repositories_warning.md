{% warning %}

**警告:**

- プライベートリポジトリへの個人のアクセス権を削除すると、そのプライベートリポジトリからその人が作成したフォークはすべて削除されます。 プライベートリポジトリのローカルクローンは残ります。 プライベートリポジトリへのTeamのアクセス権が削除されたり、プライベートリポジトリへのアクセス権を持つTeamが削除された場合、Teamのメンバーが他のTeamを通じてそのリポジトリへのアクセス権を持っていなければ、そのリポジトリのプライベートフォークは削除されます。{% if enterpriseServerVersions contains currentVersion %}
- [LDAP Syncが有効化されている](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#enabling-ldap-sync)場合、リポジトリから個人を削除すると、その人はアクセス権を失いますが、その人のフォークは削除されません。 元々のOrganizationのリポジトリへのアクセスできるように3ヶ月以内にその人がTeamに追加されたなら、次回の同期の際にフォークへのアクセスは自動的に回復されます。{% endif %}
- リポジトリへのアクセスを失った個人に、機密情報や知的財産を確実に削除してもらうのは、あなたの責任です。

- プライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}もしくはインターナル{% endif %}リポジトリに対する管理権限を持っている人は、そのリポジトリのフォークを禁止でき、OrganizationのオーナーはOrganization内の任意のプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}もしくはインターナル{% endif %}リポジトリのフォークを禁止できます。 詳しい情報については「[Organizationのためのフォークのポリシーの管理](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」及び「[リポジトリのフォークのポリシーの管理](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% endwarning %}
