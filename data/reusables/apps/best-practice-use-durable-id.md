When a user signs in and performs actions in your application, you have to remember which user took that action in order to grant them access to the same resources the next time they sign in.

To store users in your database correctly, always use the `id` of the user. This value will never change for the user or be used to point to a different user, so it ensures you are providing access to the user you intend. You can find a user's `id` with the `GET /user` REST API endpoint. See "[AUTOTITLE](/rest/users/users#get-a-user)."

If you store references to repositories, organizations, and enterprises, use their `id` as well to ensure your links to them remain accurate.

_Never_ use identifiers that can change over time, including user handles, organization slugs, or email addresses.
