// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { registerInsertAriaButtonCommand } from './commands/insertAriaButton';
import { registerInsertAriaDialogCommand } from './commands/insertAriaDialog';
import { registerInsertAriaDisclosureCommand } from './commands/insertAriaDisclosure';
import { registerInsertAriaFormFieldCommand } from './commands/insertAriaFormField';
import { registerInsertAriaMenuCommand } from './commands/insertAriaMenu';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "vscode-accessibility-assistant" is now active!');
  // Register Hello World command
  const disposable = vscode.commands.registerCommand(
    'vscode-accessibility-assistant.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from VS Code Accessibility Assistant!');
    }
  );
  context.subscriptions.push(disposable);

  // Register ARIA button snippet command
  registerInsertAriaButtonCommand(context);
  registerInsertAriaDialogCommand(context);
  registerInsertAriaFormFieldCommand(context);
  registerInsertAriaMenuCommand(context);
  registerInsertAriaDisclosureCommand(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
