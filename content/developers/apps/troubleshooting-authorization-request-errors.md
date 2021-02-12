---
title: Troubleshooting authorization request errors
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Application suspended

If the OAuth App you set up has been suspended (due to reported abuse, spam, or a mis-use of the API), GitHub will redirect to the registered callback URL using the following parameters to summarize the error:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

To solve issues with suspended applications, please contact {% data variables.contact.contact_support %}.

### Redirect URI mismatch

If you provide a `redirect_uri` that doesn't match what you've registered with your application, GitHub will redirect to the registered callback URL with the following parameters summarizing the error:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

To correct this error, either provide a `redirect_uri` that matches what you registered or leave out this parameter to use the default one registered with your application.

#### Access denied

If the user rejects access to your application, GitHub will redirect to
the registered callback URL with the following parameters summarizing
the error:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

There's nothing you can do here as users are free to choose not to use
your application. More often than not, users will just close the window
or press back in their browser, so it is likely that you'll never see
this error.
