---
title: Using image input with the Copilot SDK
shortTitle: Image input
intro: Send images to {% data variables.copilot.copilot_sdk_short %} sessions as file or blob attachments.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

There are two ways to attach images to a {% data variables.copilot.copilot_sdk_short %} session:

* **File attachment** (`type: "file"`)—provide an absolute path; the runtime reads the file from disk, converts it to base64, and sends it to the LLM.
* **Blob attachment** (`type: "blob"`)—provide base64-encoded data directly; useful when the image is already in memory (for example, screenshots, generated images, or data from an API).

For a sequence diagram of the image input flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/image-input.md#overview).

| Concept | Description |
|---------|-------------|
| **File attachment** | An attachment with `type: "file"` and an absolute `path` to an image on disk |
| **Blob attachment** | An attachment with `type: "blob"`, base64-encoded `data`, and a `mimeType`—no disk I/O needed |
| **Automatic encoding** | For file attachments, the runtime reads the image and converts it to base64 automatically |
| **Auto-resize** | The runtime automatically resizes or quality-reduces images that exceed model-specific limits |
| **Vision capability** | The model must have `capabilities.supports.vision = true` to process images |

## Quick start: file attachment

Attach an image file to any message using the file attachment type. The path must be an absolute path to an image on disk.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
});

await session.send({
    prompt: "Describe what you see in this image",
    attachments: [
        {
            type: "file",
            path: "/absolute/path/to/screenshot.png",
        },
    ],
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/image-input.md#quick-start--file-attachment).

## Quick start: blob attachment

When you already have image data in memory (for example, a screenshot captured by your app, or an image fetched from an API), use a blob attachment to send it directly without writing to disk.

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
});

const base64ImageData = "..."; // your base64-encoded image
await session.send({
    prompt: "Describe what you see in this image",
    attachments: [
        {
            type: "blob",
            data: base64ImageData,
            mimeType: "image/png",
            displayName: "screenshot.png",
        },
    ],
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/image-input.md#quick-start--blob-attachment).

## Supported formats

Supported image formats include JPG, PNG, GIF, and other common image types. For file attachments, the runtime reads the image from disk and converts it as needed. For blob attachments, you provide the base64 data and MIME type directly. Use PNG or JPEG for best results, as these are the most widely supported formats.

The model's `capabilities.limits.vision.supported_media_types` field lists the exact MIME types it accepts.

## Automatic processing

The runtime automatically processes images to fit within the model's constraints. No manual resizing is required.

* Images that exceed the model's dimension or size limits are automatically resized (preserving aspect ratio) or quality-reduced.
* If an image cannot be brought within limits after processing, it is skipped and not sent to the LLM.
* The model's `capabilities.limits.vision.max_prompt_image_size` field indicates the maximum image size in bytes.

## Vision model capabilities

Not all models support vision. Check the model's capabilities before sending images.

### Capability fields

| Field | Type | Description |
|-------|------|-------------|
| `capabilities.supports.vision` | `boolean` | Whether the model can process image inputs |
| `capabilities.limits.vision.supported_media_types` | `string[]` | MIME types the model accepts (for example, `["image/png", "image/jpeg"]`) |
| `capabilities.limits.vision.max_prompt_images` | `number` | Maximum number of images per prompt |
| `capabilities.limits.vision.max_prompt_image_size` | `number` | Maximum image size in bytes |

### Vision limits type

```typescript
vision?: {
    supported_media_types: string[];
    max_prompt_images: number;
    max_prompt_image_size: number; // bytes
};
```

## Receiving image results

When tools return images (for example, screenshots or generated charts), the result contains `"image"` content blocks with base64-encoded data.

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"image"` | Content block type discriminator |
| `data` | `string` | Base64-encoded image data |
| `mimeType` | `string` | MIME type (for example, `"image/png"`) |

These image blocks appear in `tool.execution_complete` event results. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/streaming-events).

## Tips and limitations

| Tip | Details |
|-----|---------|
| **Use PNG or JPEG** | Avoids conversion overhead—these are sent to the LLM as-is |
| **Keep images reasonably sized** | Large images may be quality-reduced, which can lose important details |
| **Use absolute paths for file attachments** | The runtime reads files from disk; relative paths may not resolve correctly |
| **Use blob attachments for in-memory data** | When you already have base64 data (for example, screenshots, API responses), blob avoids unnecessary disk I/O |
| **Check vision support first** | Sending images to a non-vision model wastes tokens without visual understanding |
| **Multiple images are supported** | Attach several attachments in one message, up to the model's `max_prompt_images` limit |
| **SVG is not supported** | SVG files are text-based and excluded from image processing |

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/streaming-events)—event lifecycle including tool result content blocks
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/steering-and-queueing)—sending follow-up messages with attachments
