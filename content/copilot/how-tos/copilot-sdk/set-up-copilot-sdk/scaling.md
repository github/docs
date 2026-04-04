---
title: Scaling Copilot SDK deployments
shortTitle: Scaling
intro: Design your {% data variables.copilot.copilot_sdk %} deployment to serve multiple users, handle concurrent sessions, and scale horizontally across infrastructure.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

Consider the different isolation patterns for CLI sessions, and how you want to manage concurrent sessions and resources, when implementing your application.

**Best for:** Platform developers, SaaS builders, and any deployment serving more than a few concurrent users.

## Session isolation patterns

Before choosing a pattern, consider three dimensions:

* **Isolation**: Who can see which sessions?
* **Concurrency**: How many sessions can run simultaneously?
* **Persistence**: How long do sessions live?

![Diagram showing the three scaling dimensions for Copilot SDK deployments: isolation, concurrency, and persistence.](/assets/images/help/copilot/copilot-sdk/scaling-core-concepts.png)

### Pattern 1: Isolated CLI per user

Each user gets their own CLI server instance. This is the strongest isolation—a user's sessions, memory, and processes are completely separated.

![Diagram showing the isolated CLI per user pattern, where each user gets a dedicated CLI server instance.](/assets/images/help/copilot/copilot-sdk/scaling-isolated-cli-pattern.png)

**When to use:**

* Multi-tenant SaaS where data isolation is critical.
* Users with different authentication credentials.
* Compliance requirements such as SOC 2 or HIPAA.

```typescript
// CLI pool manager—one CLI per user
class CLIPool {
    private instances = new Map<string, { client: CopilotClient; port: number }>();
    private nextPort = 5000;

    async getClientForUser(userId: string, token?: string): Promise<CopilotClient> {
        if (this.instances.has(userId)) {
            return this.instances.get(userId)!.client;
        }

        const port = this.nextPort++;

        // Spawn a dedicated CLI for this user
        await spawnCLI(port, token);

        const client = new CopilotClient({
            cliUrl: `localhost:${port}`,
        });

        this.instances.set(userId, { client, port });
        return client;
    }

    async releaseUser(userId: string): Promise<void> {
        const instance = this.instances.get(userId);
        if (instance) {
            await instance.client.stop();
            this.instances.delete(userId);
        }
    }
}
```

### Pattern 2: Shared CLI with session isolation

Multiple users share one CLI server but have isolated sessions via unique session IDs. This is lighter on resources, but provides weaker isolation.

![Diagram showing the shared CLI pattern, where multiple users share one CLI server with isolated sessions.](/assets/images/help/copilot/copilot-sdk/scaling-shared-cli-pattern.png)

**When to use:**

* Internal tools with trusted users.
* Resource-constrained environments.
* Lower isolation requirements.

```typescript
const sharedClient = new CopilotClient({
    cliUrl: "localhost:4321",
});

// Enforce session isolation through naming conventions
function getSessionId(userId: string, purpose: string): string {
    return `${userId}-${purpose}-${Date.now()}`;
}

// Access control: ensure users can only access their own sessions
async function resumeSessionWithAuth(
    sessionId: string,
    currentUserId: string
): Promise<Session> {
    const [sessionUserId] = sessionId.split("-");
    if (sessionUserId !== currentUserId) {
        throw new Error("Access denied: session belongs to another user");
    }
    return sharedClient.resumeSession(sessionId);
}
```

### Pattern 3: Shared sessions (collaborative)

Multiple users interact with the same session—like a shared chat room with Copilot. This pattern requires application-level session locking.

![Diagram showing the shared sessions pattern, where multiple users interact with the same session through a message queue and session lock.](/assets/images/help/copilot/copilot-sdk/scaling-shared-sessions.png)

**When to use:**

* Team collaboration tools.
* Shared code review sessions.
* Pair programming assistants.

> [!NOTE]
> The SDK doesn't provide built-in session locking. You must serialize access to prevent concurrent writes to the same session.

```typescript
import Redis from "ioredis";

const redis = new Redis();

async function withSessionLock<T>(
    sessionId: string,
    fn: () => Promise<T>,
    timeoutSec = 300
): Promise<T> {
    const lockKey = `session-lock:${sessionId}`;
    const lockId = crypto.randomUUID();

    // Acquire lock
    const acquired = await redis.set(lockKey, lockId, "NX", "EX", timeoutSec);
    if (!acquired) {
        throw new Error("Session is in use by another user");
    }

    try {
        return await fn();
    } finally {
        // Release lock only if we still own it
        const currentLock = await redis.get(lockKey);
        if (currentLock === lockId) {
            await redis.del(lockKey);
        }
    }
}

// Serialize access to a shared session
app.post("/team-chat", authMiddleware, async (req, res) => {
    const result = await withSessionLock("team-project-review", async () => {
        const session = await client.resumeSession("team-project-review");
        return session.sendAndWait({ prompt: req.body.message });
    });

    res.json({ content: result?.data.content });
});
```

## Comparison of isolation patterns

| | Isolated CLI per user | Shared CLI + session isolation | Shared sessions |
|---|---|---|---|
| **Isolation** | Complete | Logical | Shared |
| **Resource usage** | High (CLI per user) | Low (one CLI) | Low (one CLI and session) |
| **Complexity** | Medium | Low | High (requires locking) |
| **Auth flexibility** | Per-user tokens | Service token | Service token |
| **Best for** | Multi-tenant SaaS | Internal tools | Collaboration |

## Horizontal scaling

### Multiple CLI servers behind a load balancer

To serve more concurrent users, run multiple CLI server instances behind a load balancer. Session state must be on **shared storage** so any CLI server can resume any session.

![Diagram showing multiple CLI servers behind a load balancer with shared storage for session state.](/assets/images/help/copilot/copilot-sdk/scaling-multiple-cli-servers.png)

```typescript
// Route sessions across CLI servers
class CLILoadBalancer {
    private servers: string[];
    private currentIndex = 0;

    constructor(servers: string[]) {
        this.servers = servers;
    }

    // Round-robin selection
    getNextServer(): string {
        const server = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        return server;
    }

    // Sticky sessions: same user always hits same server
    getServerForUser(userId: string): string {
        const hash = this.hashCode(userId);
        return this.servers[hash % this.servers.length];
    }

    private hashCode(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash);
    }
}

const lb = new CLILoadBalancer([
    "cli-1:4321",
    "cli-2:4321",
    "cli-3:4321",
]);

app.post("/chat", async (req, res) => {
    const server = lb.getServerForUser(req.user.id);
    const client = new CopilotClient({ cliUrl: server });

    const session = await client.createSession({
        sessionId: `user-${req.user.id}-chat`,
        model: "gpt-4.1",
    });

    const response = await session.sendAndWait({ prompt: req.body.message });
    res.json({ content: response?.data.content });
});
```

### Sticky sessions vs. shared storage

![Diagram comparing sticky sessions and shared storage approaches for scaling Copilot SDK deployments.](/assets/images/help/copilot/copilot-sdk/scaling-stick-and-shared-sessions.png)

**Sticky sessions** pin each user to a specific CLI server. No shared storage is needed, but load distribution can be uneven if user traffic varies significantly.

**Shared storage** enables any CLI to handle any session. Load distribution is more even, but requires networked storage for `~/.copilot/session-state/`.

## Vertical scaling

### Tuning a single CLI server

A single CLI server can handle many concurrent sessions. The key is managing session lifecycle to avoid resource exhaustion:

![Diagram showing the resource dimensions for vertical scaling: CPU, memory, disk I/O, and network.](/assets/images/help/copilot/copilot-sdk/scaling-vertical-scaling.png)

```typescript
// Limit concurrent active sessions
class SessionManager {
    private activeSessions = new Map<string, Session>();
    private maxConcurrent: number;

    constructor(maxConcurrent = 50) {
        this.maxConcurrent = maxConcurrent;
    }

    async getSession(sessionId: string): Promise<Session> {
        // Return existing active session
        if (this.activeSessions.has(sessionId)) {
            return this.activeSessions.get(sessionId)!;
        }

        // Enforce concurrency limit
        if (this.activeSessions.size >= this.maxConcurrent) {
            await this.evictOldestSession();
        }

        // Create or resume
        const session = await client.createSession({
            sessionId,
            model: "gpt-4.1",
        });

        this.activeSessions.set(sessionId, session);
        return session;
    }

    private async evictOldestSession(): Promise<void> {
        const [oldestId] = this.activeSessions.keys();
        const session = this.activeSessions.get(oldestId)!;
        // Session state is persisted automatically—safe to disconnect
        await session.disconnect();
        this.activeSessions.delete(oldestId);
    }
}
```

## Ephemeral vs. persistent sessions

![Diagram comparing ephemeral sessions and persistent sessions for Copilot SDK deployments.](/assets/images/help/copilot/copilot-sdk/scaling-ephemeral-vs-persistent-sessions.png)

**Ephemeral sessions** are created per request and destroyed after use. They are ideal for one-shot tasks and stateless APIs.

**Persistent sessions** are named, survive restarts, and are resumable. They are ideal for multi-turn chat and long workflows.

### Ephemeral sessions

```typescript
app.post("/api/analyze", async (req, res) => {
    const session = await client.createSession({
        model: "gpt-4.1",
    });

    try {
        const response = await session.sendAndWait({
            prompt: req.body.prompt,
        });
        res.json({ result: response?.data.content });
    } finally {
        await session.disconnect();
    }
});
```

### Persistent sessions

```typescript
// Start a conversation
app.post("/api/chat/start", async (req, res) => {
    const sessionId = `user-${req.user.id}-${Date.now()}`;

    const session = await client.createSession({
        sessionId,
        model: "gpt-4.1",
        infiniteSessions: {
            enabled: true,
            backgroundCompactionThreshold: 0.80,
        },
    });

    res.json({ sessionId });
});

// Continue the conversation
app.post("/api/chat/message", async (req, res) => {
    const session = await client.resumeSession(req.body.sessionId);
    const response = await session.sendAndWait({ prompt: req.body.message });

    res.json({ content: response?.data.content });
});

// Clean up when done
app.post("/api/chat/end", async (req, res) => {
    await client.deleteSession(req.body.sessionId);
    res.json({ success: true });
});
```

## Container deployments

### Kubernetes with persistent storage

The following example deploys three CLI replicas sharing a `PersistentVolumeClaim` so that any replica can resume any session.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: copilot-cli
spec:
  replicas: 3
  selector:
    matchLabels:
      app: copilot-cli
  template:
    metadata:
      labels:
        app: copilot-cli
    spec:
      containers:
        - name: copilot-cli
          image: ghcr.io/github/copilot-cli:latest
          args: ["--headless", "--port", "4321"]
          env:
            - name: COPILOT_GITHUB_TOKEN
              valueFrom:
                secretKeyRef:
                  name: copilot-secrets
                  key: github-token
          ports:
            - containerPort: 4321
          volumeMounts:
            - name: session-state
              mountPath: /root/.copilot/session-state
      volumes:
        - name: session-state
          persistentVolumeClaim:
            claimName: copilot-sessions-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: copilot-cli
spec:
  selector:
    app: copilot-cli
  ports:
    - port: 4321
      targetPort: 4321
```

![Diagram showing a Kubernetes deployment with multiple CLI server pods sharing a PersistentVolumeClaim for session state.](/assets/images/help/copilot/copilot-sdk/scaling-container-deployments.png)

## Production checklist

| Concern | Recommendation |
|---|---|
| **Session cleanup** | Run periodic cleanup to delete sessions older than your TTL. |
| **Health checks** | Ping the CLI server periodically; restart if unresponsive. |
| **Storage** | Mount persistent volumes for `~/.copilot/session-state/`. |
| **Secrets** | Use your platform's secret manager (Vault, Kubernetes Secrets, etc.). |
| **Monitoring** | Track active session count, response latency, and error rates. |
| **Locking** | Use Redis or similar for shared session access. |
| **Shutdown** | Drain active sessions before stopping CLI servers. |

## Limitations

| Limitation | Details |
|---|---|
| **No built-in session locking** | Implement application-level locking for concurrent access. |
| **No built-in load balancing** | Use an external load balancer or service mesh. |
| **Session state is file-based** | Requires a shared filesystem for multi-server setups. |
| **30-minute idle timeout** | Sessions without activity are auto-cleaned by the CLI. |
| **CLI is single-process** | Scale by adding more CLI server instances, not threads. |

## Next steps

* For core server-side setup, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services).
* For multi-user authentication, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth).
* For installation and your first message, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
