```markdown
Below are common `status` and `conclusion` values you may see for workflow runs, check runs, and jobs, with an explanation and typical use cases. Use these as a reference when interpreting results returned by the REST and Checks APIs.

**Quick summary:**
- **`status`**: the current lifecycle state of the run or job (for example: `queued`, `in_progress`, `completed`).
- **`conclusion`**: the final outcome when `status` is `completed` (for example: `success`, `failure`, `neutral`, `cancelled`).

**Common `status` values and meaning**
- **`queued`**: The run or job has been scheduled and is waiting for a runner to pick it up (waiting for available runner resources).
- **`requested`**: The run or check run has been requested (for example, by an app or integration) and is awaiting scheduling; it is a precursor to `queued` in some APIs.
- **`waiting`**: The run/job is blocked and waiting on an external gate (for example: a required environment approval, manual intervention, or a required reviewer). This state often indicates human or policy action is needed before the job can proceed.
- **`in_progress`**: The run or job is actively executing on a runner.
- **`completed`**: Execution has finished — look at `conclusion` for the outcome.

**Common `conclusion` values (apply when `status` is `completed`)**
- **`success`**: The run completed successfully.
- **`failure`**: The run failed (one or more failing jobs or checks).
- **`neutral`**: The run completed without a success *or* failure being attributed to it — typically used for informational or non-blocking runs/checks (for example, a lint job that reports results but is configured not to fail the workflow).
- **`cancelled`**: The run was canceled by a user or system action before completion.
- **`skipped`**: The run or job was intentionally skipped (for example, conditionals prevented the job from running).
- **`timed_out`**: The run or job exceeded the allowed time limit and was aborted.
- **`action_required`**: The run finished in a state that requires human action to continue (for example: environment protection rules require approval to proceed or a required review was not completed). This is an actionable state signalling manual intervention is necessary.
- **`stale`**: The run or check is considered out-of-date or no longer relevant (for example, a later commit was pushed that supersedes this run). Behavior may vary by API — often used by the Checks API to indicate a run that no longer applies to the current commit.

State diagram (linear flow, simplified):

`requested` -> `queued` -> `in_progress` -> `completed` -> `conclusion` (one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, `action_required`, `stale`)

Notes on overlapping terms:
- **`pending` vs `queued` vs `requested`**: Different APIs and contexts sometimes use slightly different words for similar queueing states. `requested` is often the earliest state (a run was requested), `queued` means the run is in the runner queue, and `pending` is a generic term used by the Statuses API to mean the result is not yet available. Treat these as queue/pending states that precede `in_progress`.
- **`waiting`**: Typically indicates the run/job is blocked by an external requirement (manual approval, environment protection, required reviewers). A `waiting` state may appear instead of `queued` when the job cannot be scheduled until the blocking condition is resolved.
- **`action_required`**: Although listed as a `conclusion` value in some API responses, this value indicates the run cannot progress or be considered fully successful until a person performs a required action (for example granting an environment approval). Consider it a terminal-but-actionable conclusion.

Usage guidance
- When inspecting a workflow run object from the REST API: check `status` first. If `status` is `completed`, read `conclusion` to determine the final outcome.
- For UI or automation that responds to runs, treat `neutral` as a completed but non-failing outcome and treat `action_required` and `waiting` as requiring human attention before considering a job fully resolved.
- If you need definitive behaviour for a particular webhook or API (for example, whether `stale` should be treated as failure or ignored), consult the specific endpoint docs or test against the API in your environment — some conclusion values are used differently between the Checks API and the Workflow Runs API.

If you'd like, I can also add a small diagram image or a more detailed job-by-job mapping for the Checks API vs Workflow Runs API.
```
