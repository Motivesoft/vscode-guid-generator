# GUID Generator

This VS Code extension generates [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) values and inserts them into the current editor or onto the clipboard.

Various [configuration](#extension-settings) options are provided to format the GUID to reduce keystrokes.

> GUID is a term used by Microsoft for a type of UUID and used for things like COM interface definitions. Specifically, this extension creates type 4 UUIDs.

## Features

Commands exist for:
* Insert New GUID
* Copy New GUID to the Clipboard

The commands can be accessed from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac), typing `GUID` and selecting the desired function. Alternately, the commands can be bound to a [keyboard shortcut](https://code.visualstudio.com/docs/getstarted/keybindings).

The _Insert New GUID_ command supports [multi-cursor selection](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_multi-cursor-selection), which can be used to insert multiple GUIDs at the same time.

The extension is design to work with VS Code on the desktop and for the web, for example with [vscode.dev](https://vscode.dev).

## Requirements

This uses the [`uuid`](https://www.npmjs.com/package/uuid) package.

## Extension Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `vscode-guid-generator.contextMenu.insert` | boolean | true | Whether to show the Insert New GUID function in the editor context menu. |
| `vscode-guid-generator.uppercase` | boolean | false | Whether the hex digits in the GUID should be uppercase. |
| `vscode-guid-generator.append` | string | nothing | Append a string to each inserted GUID, such as a comma and/or space. |
| `vscode-guid-generator.newline` | boolean | false | Append a newline after each inserted GUID. |
| `vscode-guid-generator.decoration` | string | none | Choose whether the generated GUID should be wrapped in braces ([{}]) or quotes ("'``'"). |

> The `vscode-guid-generator.newline` setting may be especially useful when the _Insert New GUID_ command is bound to a keystroke and used to repeatedly insert UUIDs into the editor.

## Known Issues

None at this time.

## Release Notes

### 1.0.2

* Update dependencies

### 1.0.1

* Update dependencies

### 1.0.0

* Address need for VS Code restart after installation
* Runs on desktop and web
* Feature complete release

### 0.1.0

* Expanded README
* Added [`vscode-guid-generator.newline`](#extension-settings) setting

### 0.0.2

* Address size of package

### 0.0.1

* Initial release
