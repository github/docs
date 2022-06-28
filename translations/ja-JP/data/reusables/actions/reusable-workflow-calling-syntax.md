* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} for reusable workflows in public {% ifversion ghes or ghec or ghae %}or internal{% endif %} repositories.
* `./.github/workflows/{filename}` for reusable workflows in the same repository.{% endif %}

`{ref}` can be a SHA, a release tag, or a branch name. Using the commit SHA is the safest for stability and security. 詳しい情報については「[GitHub Actionsのためのセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)」を参照してください。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}If you use the second syntax option (without `{owner}/{repo}` and `@{ref}`) the called workflow is from the same commit as the caller workflow.{% endif %}
