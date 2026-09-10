.

> [!NOTE]
> If you don’t see the options described below, check that you’re in your **Organization settings**. Domain verification doesn’t take place in repository settings.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% octicon "browser" aria-hidden="true" aria-label="browser" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Wait for your DNS configuration to change. This may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `ORGANIZATION` with the name of your organization and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```

{% data reusables.pages.settings-verify-domain-confirm %}
