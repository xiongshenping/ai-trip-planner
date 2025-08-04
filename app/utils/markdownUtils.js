/**
 * 从 Markdown 文本中提取标题和描述段落
 * @param {string} markdown - Markdown 格式的原始文本
 * @returns {{ title: string, description: string }}
 */
export function extractTitleAndDescription(markdown) {
  const doubleNewline = '\n\n';

  const titleStart = markdown.indexOf('# ');
  if (titleStart === -1) return { title: '', description: '' };

  const firstDoubleNewline = markdown.indexOf(doubleNewline, titleStart);
  if (firstDoubleNewline === -1) return { title: '', description: '' };

  const titleRaw = markdown.substring(titleStart, firstDoubleNewline).trim();
  const title = titleRaw.replace(/^#\s*/, '');

  const secondDoubleNewline = markdown.indexOf(doubleNewline, firstDoubleNewline + 2);
  const description = secondDoubleNewline !== -1
    ? markdown.substring(firstDoubleNewline + 2, secondDoubleNewline).trim()
    : markdown.substring(firstDoubleNewline + 2).trim();

  return { title, description };
}
