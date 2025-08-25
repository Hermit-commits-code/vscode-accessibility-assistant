import * as vscode from 'vscode';

export function registerInsertAriaMenuCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'accessibilityAssistant.insertAriaMenu',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(
            editor.selection.active,
            `<div role=\"menu\" aria-label=\"Main Menu\">\n  <button role=\"menuitem\" aria-label=\"Home\">Home</button>\n  <button role=\"menuitem\" aria-label=\"Profile\">Profile</button>\n  <button role=\"menuitem\" aria-label=\"Settings\">Settings</button>\n</div>`
          );
        });
        vscode.window.showInformationMessage('ARIA menu snippet inserted!');
      }
    }
  );
  context.subscriptions.push(disposable);
}
