リポジトリをスコープとするパッケージは、そのパッケージを所有するリポジトリから権限と可視性を継承します。 以下のレジストリは、この種の権限を使用します。
- Dockerレジストリ(`docker.pkg.github.com`)
- npmレジストリ
- RubyGemsレジストリ
- Apache Mavenレジストリ
- NuGetレジストリ

{% if currentVersion == "free-pro-team@latest" %}
Containerレジストリ(`ghcr.io`)は、個人ユーザもしくはOrganizationアカウントが所有する各パッケージごとにカスタマイズできる、詳細な権限及び可視性の設定を提供します。
{% endif %}

詳しい情報については「[GitHub Packagesの権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」{% if currentVersion == "free-pro-team@latest" %}あるいは「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」{% endif %}を参照してください。
