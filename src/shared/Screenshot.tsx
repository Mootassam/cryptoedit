import html2canvas from "html2canvas";

class Screenshot {
  static async handleCaptureScreenshot(divRef: React.RefObject<HTMLElement>) {
    if (!divRef.current) return;

    // Optional: wait for any pending reflows / fonts
    await document.fonts.ready;

    const element = divRef.current;
    const pixelRatio = window.devicePixelRatio || 1;
    // Use 3× device pixel ratio or at least 4 – adjust based on your needs
    const scale = Math.max(4, pixelRatio * 3);

    try {
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true,           // Load cross-origin images with CORS
        allowTaint: false,       // Prevent tainting (required for clipboard)
        backgroundColor: '#ffffff', // Solid background (change as needed)
        logging: false,
        imageTimeout: 0,
        foreignObjectRendering: false, // Set to true if you have SVG/iframes
        onclone: (clonedDoc, element) => {
          // Optional: force any lazy-loaded images inside the clone
          const images = clonedDoc.querySelectorAll('img');
          images.forEach(img => {
            if (img.complete === false) {
              // Wait for image loading (simple approach, extend as needed)
              img.decode().catch(() => {});
            }
          });
        }
      });

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, 'image/png', 1.0); // PNG ignores quality param
      });

      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        // console.log("High-quality screenshot copied");
      }
    } catch (error) {
      console.error("Screenshot failed:", error);
    }
  }
}

export default Screenshot;