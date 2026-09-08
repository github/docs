* `$/.github/workflows/{filename}` for a reusable workflow in the same repository. This is the recommended syntax for referencing a reusable workflow in the same repository. This syntax is not available in {% data variables.product.prodname_ghe_server %}.
* `{owner}/{repo}/.github/workflows/{filename}@{ref}` for reusable workflows in {% ifversion fpt %}public and private{% elsif ghec or ghes %}public, internal and private{% endif %} repositories.
* `./.github/workflows/{filename}` for reusable workflows in the same repository.

When you reference a reusable workflow with `{owner}/{repo}` and `@{ref}`, the `{ref}` can be a SHA, a release tag, or a branch name. If a release tag and a branch have the same name, the release tag takes precedence over the branch name. Using the commit SHA is the safest option for stability and security. For more information, see [AUTOTITLE](/actions/reference/security/secure-use#reusing-third-party-workflows).

When you reference a reusable workflow in the same repository using `$/` or `./` (without `{owner}/{repo}` and `@{ref}`), the called workflow is from the same commit as the caller workflow. A `$/` reference must not include an `@{ref}` suffix, and `$/` is not available in {% data variables.product.prodname_ghe_server %}. Ref prefixes such as `refs/heads` and `refs/tags` are not allowed. You cannot use contexts or expressions in this keyword.
