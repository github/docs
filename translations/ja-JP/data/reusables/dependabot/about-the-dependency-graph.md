The dependency graph is a summary of the manifest and lock files stored in a repository{% ifversion dependency-submission-api %} and any dependencies that are submitted for the repository using the Dependency submission API (beta){% endif %}. それぞれのリポジトリにおいて、依存関係グラフは以下を表示します。{% ifversion fpt or ghec %}

- リポジトリが依存している依存関係、エコシステム、パッケージ
- リポジトリに依存する対象、リポジトリ、パッケージ{% else %}依存関係、すなわちリポジトリが依存するエコシステムとパッケージ。 {% data variables.product.product_name %}は、リポジトリに依存する対象、リポジトリ、パッケージに関する情報を計算しません。{% endif %}
