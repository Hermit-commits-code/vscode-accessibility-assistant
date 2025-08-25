import * as vscode from 'vscode';

export function registerInsertAriaDialogCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'accessibilityAssistant.insertAriaDialog',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(
            editor.selection.active,
            `<div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialogTitle\" aria-describedby=\"dialogDesc\">\n  <h2 id=\"dialogTitle\">Dialog Title</h2>\n  <div id=\"dialogDesc\">Dialog description goes here.</div>\n  <button aria-label=\"Close dialog\">Close</button>\n</div>`
          );
        });
        vscode.window.showInformationMessage('ARIA dialog snippet inserted!');
      }
    }
  );
  context.subscriptions.push(disposable);
}
