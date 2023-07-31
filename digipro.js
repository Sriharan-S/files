document.addEventListener('keydown', async function (event) {
      if (event.altKey && event.key === 'l') {
        try {
          const pastedContent = await navigator.clipboard.readText();
          const focusedElement = document.activeElement;
          if (focusedElement.tagName === 'TEXTAREA') {
            focusedElement.value = pastedContent;
            focusedElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
          }
        } catch (error) {
          console.error('Failed to read from clipboard:', error);
        }
      }
    });
