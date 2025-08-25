import { registerAuditorCommand } from './commands/auditor';
import { registerQuickAccessibilityFixes } from './commands/quickFixes';
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
  registerAuditorCommand(context);
  registerQuickAccessibilityFixes(context);
  console.log('Extension "vscode-accessibility-assistant" is now active!');

  // Register ARIA button snippet command
  registerInsertAriaButtonCommand(context);
  registerInsertAriaDialogCommand(context);
  registerInsertAriaFormFieldCommand(context);
  registerInsertAriaMenuCommand(context);
  registerInsertAriaDisclosureCommand(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
