To enable team synchronization for Entra ID, your Entra ID installation needs the following permissions.
* [Read all group memberships](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadall) : GitHub gets a list of Entra groups so users can select one to synchronize to a specific GitHub team.
* [Read all users’ full profiles](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadall) : GitHub gets a list of members' Entra ID and Entra display/full names for syncing an Entra group and a GitHub team.
* [Sign in and read user profile](https://learn.microsoft.com/en-us/graph/permissions-reference#userread) : When SAML SSO is enabled, users must single sign-on to the Entra application as a prerequisite for team syncing.
