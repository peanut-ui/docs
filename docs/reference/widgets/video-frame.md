---
title: VideoFrame
---

# VideoFrame

Plays a video. Maps to Roblox [VideoFrame](https://create.roblox.com/docs/reference/engine/classes/VideoFrame).

```luau
Widgets.VideoFrame {
    properties = {
        video = "rbxassetid://123456",
        playing = true,
    }
}
```

## Properties

In addition to the [shared widget properties](/reference/widgets/#shared-properties):

| Property | Type | Description |
|---|---|---|
| `video` | `string` | Video asset. |
| `playing` | `boolean` | Whether the video is playing. |
| `looped` | `boolean` | Whether the video loops. |
| `volume` | `number` | Playback volume. |
| `timePosition` | `number` | Current playback position. |
| `playbackSpeed` | `number` | Playback speed. |
| `imageColor` | `Color3` | Tint color. |
| `imageTransparency` | `number` | Transparency. |

## Events

In addition to the [shared widget events](/reference/widgets/#shared-events):

| Event | Signature |
|---|---|
| `DidLoop` | `(video: string) -> ...boolean?` |
| `Ended` | `(video: string) -> ...boolean?` |
| `Loaded` | `(video: string) -> ...boolean?` |
| `Paused` | `(video: string) -> ...boolean?` |
| `Played` | `(video: string) -> ...boolean?` |
