# Middleware

Each file in this directory exports an Express Middleware function.

For more info, see https://expressjs.com/en/guide/using-middleware.html

## Mock Virtual Assistant portal

`mock-va-portal.ts` lets you test the Virtual Assistant integration without access to a staging portal. The production portal rejects `localhost:4000` because it is hardened to `https://docs.github.com`.

To test locally:

1. Add `SUPPORT_PORTAL_URL=http://localhost:4000` to your `.env` file.
2. Run `npm run dev`.
3. Navigate to a page listed in the `PagePathToVaFlowMapping` object in `ArticleContext`.

This mock is not secure. Use it only for local development.
