# Logging

Instead of using `console.<method>` e.g. `console.log` in our server-side code, we use `logger.<method>` e.g. `logger.info`.

## TOC

- [Benefits of using a central logger over `console.log`](#benefits-of-using-a-central-logger-over-consolelog)
- [How to use our logger](#how-to-use-our-logger)
- [Automatic logging](#automatic-logging)
- [Querying server logs with Splunk](#querying-server-logs-with-splunk)
  - [Accessing logs in Splunk by requestUuid](#accessing-logs-in-splunk-by-requestuuid)
- [How we pass context to logs](#how-we-pass-context-to-logs)

## Benefits of using a central logger over `console.log`

1. Logs are formatting in [logfmt](https://brandur.org/logfmt) in production. This allows us to easily provide additional context to the log and query them in Splunk. However, we only log strings in development, to visually simplify them since `logfmt` can be difficult to read.

2. Application logs can be grouped by their log level. You can use `logger.<log-level>`, like `logger.debug('Success')` to group logs into a certain level. We have 4 levels:

   1. `error` -> `logger.error()`
   2. `warn` -> `logger.warn()`
   3. `info` -> `logger.info()`
   4. `debug` -> `logger.debug()`

3. You can enable / disable groups of logs by their log level using the `LOG_LEVEL` environment variable. In development, this lets you reduce logging noise by filtering out logs lower than the level you set. For instance, `LOG_LEVEL=info` will filter out `debug` level logs. In production, log levels help us query the most important logs. For instance, if you wanted to see all `error` logs, you could do so in Splunk with `level=error`.

4. Each log will include additional context in production, like the `path` the request was originated from, and a `requestUuid` that can tie all logs from a single request together.

5. Errors caught by Sentry include a `requestUuid`. We can use Splunk to see all the relevant logs from the same request where the error arose using the `requestUuid`.

## How to use our logger

Create a logger at the top of the file,

```typescript
import { createLogger } from "@/observability/logger";

// We pass `import.meta.url` so we can see the filename that the log originated from
const logger = createLogger(import.meta.url);
```

Then call the relevant methods for the log,

```typescript
function foo() {
  logger.debug("Performing foo");
  try {
    const information = bar();
    // "extraContext" will be included with the log in production
    logger.info("Bar ${information.thing}", {
      extraContext: information.context,
    });
  } catch (error) {
    // The `error` will be formatted with stack trace in production
    logger.error("Error calling bar()", { error });
  }
}
```

The first argument to `logger.<method>` will always be a message string. The second argument is an optional object whose keys and values will be included as context in production in `logfmt` format.

## Automatic logging

In addition to application logging, e.g. `logger.info` we use a custom Express middleware for "automatic" request logging.

In local development, this will shows logs like `GET /en 200 2ms` when the `/en` route is visited.

Our custom request logger is configured in [get-automatic-request-logger.ts](./logger/middleware/get-automatic-request-logger.ts) to include useful log strings in development. In production, it logs in `logfmt` format that includes the full context used by our `logger`, including `requestUuid`.

The `requestUuid` of automatic logs can be tied to any application logs (`logger.info`) made in the same request.

## Querying server logs with Splunk

We use [Splunk](https://splunk.githubapp.com/en-US/app/gh_reference_app/search) to query our logs.

All queries should specify the index as `docs-internal`,

```splunk
index=docs-internal
```

For production logs, specify `gh_app` to `docs-internal`

```splunk
index=docs-internal gh_app=docs-internal
```

For staging logs, specify `kube_namespace` to `docs-internal-staging-<env>`

```splunk
index=docs-internal gh_app=docs-internal kube_namespace=docs-internal-staging-cedar
```

### Accessing logs in Splunk by requestUuid

You can access all log by a specific `requestUuid`,

```
index=docs-internal gh_app=docs-internal requestUuid="<>"
```

This pattern applies for all contextual fields sent to Splunk, like `level`, `method`, `path`, `status`, `query`, `body`, `language`, `version`, etc.

## How we pass context to logs

We use [async_hooks](https://nodejs.org/api/async_hooks.html#overview), a newer native library in Node.js to capture context from each request in logs without having to pass down context as arguments to each child function in a chain.  

If you have experience with a Redux store, `async_hooks` are similar, but for the backend.

During an early middleware, we call `asyncLocalStorage.run(store, () => { next() })`

This ensures that all downstream middleware can access `store` from the asyncLocalStorage, using `asyncLocalStorage.getStore()`.

We can update the `store` object like we'd update any other mutable object,

```typescript
export function updateLoggerContext(newContext: Partial<LoggerContext>): void {
  const store = asyncLocalStorage.getStore()
  if (!store) {
    return
  }
  Object.assign(store, newContext)
}
```


