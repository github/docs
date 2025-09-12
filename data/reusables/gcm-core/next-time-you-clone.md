The next time you clone an HTTPS URL that requires authentication, Git will prompt you to log in using a browser window. You may first be asked to authorize an {% data variables.product.prodname_oauth_app %}. If your account or organization requires [two-factor auth](/authentication/securing-your-account-with-two-factor-authentication-2fa), you'll also need to complete the 2FA challenge.

{% ifversion not ghes %}

> [!TIP]
>
> If you're a member of an enterprise that uses {% data variables.product.prodname_emus %}, your enterprise view has the "Users managed by ACCOUNT NAME" header bar at the top of the screen. In that case you will need to disable account filtering locally in GCM to prevent getting prompted for authentication each time a remote Git operation is performed. For more details, see the [`git-credential-manager` repository](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/configuration.md#credentialgithubaccountfiltering).
>
> To configure the Git Credential Manager run the following command:
>
> ```bash
> git config --global credential.gitHubAccountFiltering "false"
> ```

{% endif %}
