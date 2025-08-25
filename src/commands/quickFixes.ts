import * as vscode from 'vscode';

export function registerQuickAccessibilityFixes(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('accessibilityAssistant.quickFixes', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active editor found.');
      return;
    }
    const text = editor.document.getText();
    let fixes = [];
    // Example: Find <i> or <span> with role="img" but missing aria-label
    const imgRoleRegex = /<(i|span)[^>]*role=["']img["'][^>]*>/gi;
    let match;
    while ((match = imgRoleRegex.exec(text)) !== null) {
      if (!/aria-label=/.test(match[0])) {
        fixes.push({
          index: match.index,
          message: 'Element with role="img" is missing aria-label.',
        });
      }
    }
    if (fixes.length === 0) {
      vscode.window.showInformationMessage('No quick accessibility fixes found.');
    } else {
      vscode.window.showInformationMessage(
        `${fixes.length} quick accessibility fix(es) found. Check your code for missing aria-labels on role="img" elements.`
      );
    }
  });
  context.subscriptions.push(disposable);
}
