/**
 * Resume Configuration
 * You can use the local file '/resume.pdf' (stored in frontend/public/resume.pdf)
 * or replace it with a direct Google Drive / Dropbox shareable link anytime.
 */
export const resumeConfig = {
  pdfUrl: "/resume.pdf",
  downloadFileName: "Kazol_Chandra_Roy_Resume.pdf",
  interactiveRoute: "/resume",
};

/**
 * Returns the absolute URL to the resume PDF
 * Useful for copying the direct link to the clipboard or sharing with recruiters
 */
export const getResumeFullUrl = () => {
  if (typeof window !== "undefined") {
    if (resumeConfig.pdfUrl.startsWith("http")) {
      return resumeConfig.pdfUrl;
    }
    return `${window.location.origin}${resumeConfig.pdfUrl}`;
  }
  return resumeConfig.pdfUrl;
};

