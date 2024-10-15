// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	if (vscode.env.uiKind === vscode.UIKind.Web) {
		console.log("'vscode-ulid-generator' is active in an web extension host");
	} else if (vscode.env.uiKind === vscode.UIKind.Desktop) {
		console.log("'vscode-ulid-generator' is active in an desktop extension host");
	} else {
		console.log("'vscode-ulid-generator' is active in an unknown extension host");
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('vscode-guid-generator.insertGUID', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		if (vscode.env.uiKind === vscode.UIKind.Web) {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an web extension host");
		} else if (vscode.env.uiKind === vscode.UIKind.Desktop) {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an desktop extension host");
		} else {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an unknown extension host");
		}
	}));

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('vscode-guid-generator.copy', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		if (vscode.env.uiKind === vscode.UIKind.Web) {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an web extension host");
		} else if (vscode.env.uiKind === vscode.UIKind.Desktop) {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an desktop extension host");
		} else {
			vscode.window.showInformationMessage("'vscode-ulid-generator' is active in an unknown extension host");
		}
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
