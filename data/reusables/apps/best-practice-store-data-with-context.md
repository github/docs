Beyond tracking user identity via the `id` field, you should retain data for the organization or enterprise each user is operating under. This will help ensure you don't leak sensitive information if a user switches roles.

For example:

1. A user is in the `Mona` organization, which requires SAML SSO, and signs into your app after performing SSO. Your app now has access to whatever the user does within `Mona`.
1. The user pulls a bunch of code out of a repository in `Mona` and saves it in your app for analysis.
1. Later, the user switches jobs, and is removed from the `Mona` organization.

When the user accesses your app, can they still see the code and analysis from the `Mona` organization in their user account?

This is why it's critical to track the source of the data that your app is saving. Otherwise, your app is a data protection threat for organizations, and they're likely to ban your app if they can't trust that your app correctly protects their data.
