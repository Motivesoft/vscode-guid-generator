// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { v4 as uuidv4 } from 'uuid';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	if (vscode.env.uiKind === vscode.UIKind.Web) {
		console.log("'vscode-guid-generator' is active in an web extension host");
	} else if (vscode.env.uiKind === vscode.UIKind.Desktop) {
		console.log("'vscode-guid-generator' is active in an desktop extension host");
	} else {
		console.log("'vscode-guid-generator' is active in an unknown extension host");
	}

	// For each cursor in the current editor window, generate a GUID and insert it
	// This works for a single cursor, or when in multi-cursor mode
	context.subscriptions.push(vscode.commands.registerCommand('vscode-guid-generator.insertGUID', () => {
		let editor = vscode.window.activeTextEditor;
        if (editor) {
			editor.edit( edit => {
				editor.selections.forEach( v => edit.replace( v, makeGuid() ) );
			} );
		}
	}));

	// Generate and copy a single GUID to the clipboard
	context.subscriptions.push(vscode.commands.registerCommand('vscode-guid-generator.copy', () => {
		vscode.env.clipboard.writeText( makeGuid() );
		vscode.window.showInformationMessage("'GUID copied to clipboard");
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}

function makeGuid() : string {
	return uuidv4();
}