{%- ifversion restrict-groups-to-workflows %}
1. ワークフローのアクセスにポリシーを割り当てます。

   ランナーグループを、特定のワークフローのリスト、もしくはすべてのワークフローにアクセスできるように設定できます。 この設定は、Enterpriseによって共有されているOrganizationのランナーグループを設定している場合には上書きできません。 ランナーグループにアクセスできるワークフローを指定する場合、リポジトリ名やオーナーを含むワークフローへの完全なパスを使わなければならず、ワークフローをブランチ、タグ、完全なSHAにピン止めしなければなりません。 例: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`

   選択されたワークフロー内で直接定義されたジョブだけが、ランナーグループにアクセスできます。{%- endif %}
