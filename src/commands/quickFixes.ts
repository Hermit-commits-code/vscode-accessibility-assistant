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
    // Find <i> or <span> with role="img" but missing aria-label
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
    // Find elements with aria-describedby missing
    const describedbyRegex = /<(input|textarea|select)[^>]*>/gi;
    while ((match = describedbyRegex.exec(text)) !== null) {
      if (!/aria-describedby=/.test(match[0])) {
        fixes.push({
          index: match.index,
          message: `<${match[1]}> is missing aria-describedby.`,
        });
      }
    }
    // Find headings with incorrect structure (e.g., h1 followed by h3)
    const headingRegex = /<h([1-6])[^>]*>/gi;
    let lastLevel = 0;
    while ((match = headingRegex.exec(text)) !== null) {
      const level = parseInt(match[1], 10);
      if (lastLevel && level > lastLevel + 1) {
        fixes.push({
          index: match.index,
          message: `Heading structure skips a level: <h${lastLevel}> followed by <h${level}>.`,
        });
      }
      lastLevel = level;
    }
    // Find <input> missing associated <label>
    const inputRegex = /<input[^>]*id=["']([^"']+)["'][^>]*>/gi;
    while ((match = inputRegex.exec(text)) !== null) {
      const labelRegex = new RegExp(`<label[^>]*for=["']${match[1]}["'][^>]*>`, 'i');
      if (!labelRegex.test(text)) {
        fixes.push({
          index: match.index,
          message: `Input with id="${match[1]}" is missing associated <label>.`,
        });
      }
    }
    if (fixes.length === 0) {
      vscode.window.showInformationMessage('No quick accessibility fixes found.');
    } else {
      vscode.window.showInformationMessage(
        `${fixes.length} quick accessibility fix(es) found. See output for details.`
      );
      const output = vscode.window.createOutputChannel('Accessibility Quick Fixes');
      output.clear();
      output.appendLine('Accessibility Quick Fixes Found:');
      fixes.forEach((fix) => output.appendLine(`Index ${fix.index}: ${fix.message}`));
      output.show();
    }
  });
  context.subscriptions.push(disposable);
}
