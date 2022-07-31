{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}ワークフローはOrganization内でパブリックにもプライベートにも共有できます。これは、1つのワークフローを他のワークフロー内から呼び出すことによって行えます。{% else %}1つのワークフローを他のワークフロー内から呼び出すことができます。{% endif %} これによって、ワークフローを再利用し、重複を避け、ワークフローをメンテナンスしやすくできます。 詳しい情報については「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。
{% endif %}
