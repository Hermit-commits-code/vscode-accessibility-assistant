import * as vscode from 'vscode';

export function registerInsertAriaFormFieldCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'accessibilityAssistant.insertAriaFormField',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(
            editor.selection.active,
            `<label for=\"username\" id=\"usernameLabel\">Username</label>\n<input id=\"username\" aria-labelledby=\"usernameLabel\" aria-describedby=\"usernameDesc\" />\n<div id=\"usernameDesc\">Enter your username.</div>`
          );
        });
        vscode.window.showInformationMessage('ARIA form field snippet inserted!');
      }
    }
  );
  context.subscriptions.push(disposable);
}
