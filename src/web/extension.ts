// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { v4 as uuidv4 } from 'uuid';

const decorators = new Map<string, string>([
	['surroundSquareBraces', '[x]'],
	['surroundRoundedBraces', '(x)'],
	['surroundCurlyBraces', '{x}'],
	['surroundSingleQuotes', "'x'"],
	['surroundDoubleQuotes', '"x"'],
	['surroundBackTicks', '`x`']
  ]);

// Called when the extension is activated; the first time the command is executed
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
	context.subscriptions.push(vscode.commands.registerCommand('vscode-guid-generator.insert', () => {
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

function makeGuid() {
	// Modify here to create other types of UUID or configure the creation
	return decorateGuid( uuidv4() );
}

function decorateGuid(guid: string) : string {
	// Find out how we need to style the GUID
	const configuration = vscode.workspace.getConfiguration("vscode-guid-generator");
	
	// Surround by brackets or quotes
	const decoration = configuration.get("decoration");
	if( decoration !== "none" )	{
		var decorated = decorators.get(String(decoration))?.replace(/x/g, () => guid);
		if( decorated ) {
			guid = decorated;
		}
	}
		
	// Set the hex characters to uppercase
	const uppercase = configuration.get("uppercase");
	guid = uppercase ? guid.toUpperCase() : guid.toLowerCase();
	
	// Add a string at the end, such as ", "
	const append = configuration.get("append");
	if( append ) {
		guid = guid + append;
	}
	
	// Add a newline at the end. This might be especially useful if the Insert
	// command is bound to a keystroke and used to repeated insert UUIDs into the
	// editor
	const newline = configuration.get("newline");
	if( newline ) {
		guid = guid + "\n";
	}

	return guid;
}