

/**
 * 将 ISO 字符串格式的日期转换为 "August 04, 2025" 格式
 * @param {string} isoString - ISO 格式时间字符串
 * @returns {string} 格式化后的日期，如 "August 04, 2025"
 */
export function formatDate(isoString) {
  if (!isoString) return '';

  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
}
