import * as vscode from 'vscode';

export function registerInsertAriaDisclosureCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'accessibilityAssistant.insertAriaDisclosure',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(
            editor.selection.active,
            `<button aria-expanded=\"false\" aria-controls=\"section1\">Show More</button>\n<div id=\"section1\" hidden>Hidden content goes here.</div>`
          );
        });
        vscode.window.showInformationMessage('ARIA disclosure snippet inserted!');
      }
    }
  );
  context.subscriptions.push(disposable);
}
