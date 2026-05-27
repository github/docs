// Static pod-identity fields — read once at module load, never change.
// Only populated when running in Kubernetes (env vars set via Downward API + kube-cluster-metadata).
export const POD_IDENTITY: Record<string, string> = {}
if (process.env.POD_NAME) POD_IDENTITY.podName = process.env.POD_NAME
if (process.env.POD_NAMESPACE) POD_IDENTITY.podNamespace = process.env.POD_NAMESPACE
if (process.env.KUBE_NODE_HOSTNAME) POD_IDENTITY.nodeHostname = process.env.KUBE_NODE_HOSTNAME
