import * as vscode from 'vscode';

export function registerInsertAriaButtonCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'accessibilityAssistant.insertAriaButton',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(
            editor.selection.active,
            '<button aria-pressed="false" aria-label="Toggle">Toggle</button>'
          );
        });
        vscode.window.showInformationMessage('ARIA button snippet inserted!');
      }
    }
  );
  context.subscriptions.push(disposable);
}
