import * as vscode from 'vscode';

export function registerAuditorCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('accessibilityAssistant.runAuditor', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active editor found.');
      return;
    }
    const text = editor.document.getText();
    let issues: string[] = [];
    // Rule 1: <i> or <span> with role="img" but missing aria-label
    const imgRoleRegex = /<(i|span)[^>]*role=["']img["'][^>]*>/gi;
    let match;
    while ((match = imgRoleRegex.exec(text)) !== null) {
      if (!/aria-label=/.test(match[0])) {
        issues.push(
          `Element at index ${match.index}: <${match[1]}> with role="img" missing aria-label.`
        );
      }
    }
    // Rule 2: <button> missing accessible text or aria-label
    const buttonRegex = /<button([^>]*)>(\s*)<\/button>/gi;
    while ((match = buttonRegex.exec(text)) !== null) {
      if (!/aria-label=/.test(match[1])) {
        issues.push(`Button at index ${match.index} missing accessible text or aria-label.`);
      }
    }
    // Rule 3: <input> missing associated <label>
    const inputRegex = /<input[^>]*id=["']([^"']+)["'][^>]*>/gi;
    while ((match = inputRegex.exec(text)) !== null) {
      const labelRegex = new RegExp(`<label[^>]*for=["']${match[1]}["'][^>]*>`, 'i');
      if (!labelRegex.test(text)) {
        issues.push(`Input with id="${match[1]}" missing associated <label>.`);
      }
    }
    if (issues.length === 0) {
      vscode.window.showInformationMessage('No accessibility issues found by auditor.');
    } else {
      vscode.window.showInformationMessage(
        `Auditor found ${issues.length} issue(s). See output for details.`
      );
      const output = vscode.window.createOutputChannel('Accessibility Auditor');
      output.clear();
      output.appendLine('Accessibility Issues Found:');
      issues.forEach((issue) => output.appendLine(issue));
      output.show();
    }
  });
  context.subscriptions.push(disposable);
}
