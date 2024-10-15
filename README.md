# vscode-guid-generator README

This extension generates GUIDs and inserts them into the current editor window, including the option to insert multiple GUIDs in the same operation by using the VS Code multi-cursor feature.

There is also a command to create a new GUID and copy it to the clipboard.

Various [configuration](#extension-settings) options exist to format the GUID.

GUIDs here are UUIDs in the style used by Microsoft for things like COM interface definitions. Specifically, this extension creates type 4 UUIDs.

## Features

Commands exist for:
* Insert New GUID
* Copy New GUID to the Clipboard

The extension is design to work with VS Code on the desktop and for the web, for example with [vscode.dev](https://vscode.dev).

## Requirements

This uses the [`uuid`](https://www.npmjs.com/package/uuid) package.

## Extension Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `vscode-guid-generator.contextMenu.insert` | boolean | true | Whether to show the Insert New GUID function in the editor context menu. |
| `vscode-guid-generator.uppercase` | boolean | false | Whether the hex digits in the GUID should be uppercase. |
| `vscode-guid-generator.append` | string | nothing | Append a string to each inserted GUID, such as a comma and/or space. |
| `vscode-guid-generator.decoration` | string | "none" | Choose whether the generated GUID should be wrapped in braces ([{}]) or quotes ("'``'"). |

## Known Issues

None at this time

## Release Notes

### 0.0.1

Initial release

### 0.0.2

Address size of package