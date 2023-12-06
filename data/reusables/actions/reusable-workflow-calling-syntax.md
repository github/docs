- `{owner}/{repo}/.github/workflows/{filename}@{ref}` for reusable workflows in {% ifversion fpt %}public and private{% elsif ghec or ghes > 3.7 or ghae > 3.7 %}public, internal and private{% else %}public and internal{% endif %} repositories.
- `./.github/workflows/{filename}` for reusable workflows in the same repository.

In the first option, `{ref}` can be a SHA, a release tag, or a branch name. If a release tag and a branch have the same name, the release tag takes precedence over the branch name. Using the commit SHA is the safest option for stability and security. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)."

If you use the second syntax option (without `{owner}/{repo}` and `@{ref}`) the called workflow is from the same commit as the caller workflow. Ref prefixes such as `refs/heads` and `refs/tags` are not allowed.
