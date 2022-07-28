{% ifversion ghec %}
{% note %}

**ノート:** Gitイベントをエクスポートすると、WebブラウザもしくはRESTないしGraphQL APIから開始されたイベントは含まれません。 たとえば、ユーザがPull RequestをWebブラウザでマージすると、変更はベースブランチにプッシュされますが、そのプッシュのGitイベントはエクスポートに含まれません。

{% endnote %}
{% endif %}
