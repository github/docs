> [!NOTE]
> These endpoints are currently in {% data variables.release-phases.public_preview %} and subject to change.
>
> This API documentation is for enterprises on {% data variables.product.prodname_ghe_cloud %}.
>
> If your enterprise is Copilot Business for non-GHE, please refer to the early access documentation link that was previously shared to you.

These endpoints are only available to authenticated members of the enterprise team's enterprise with classic {% data variables.product.pat_generic_plural %} with the `read:enterprise` [scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) for `GET` APIs and `admin:enterprise` for other APIs.

These endpoints are not compatible with {% data variables.product.pat_v2_plural %} or GitHub App access tokens.

{% data variables.product.prodname_dotcom %} generates the enterprise team's `slug` from the team `name` and adds the `ent:` prefix.
