<svelte:head>
	<title>Generate PDF</title>
</svelte:head>
<style>
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 0.9rem;
  }
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #toolbar {
    display: flex;
    align-items: center;
    background-color: #555;
    color: #fff;
    padding: 0.5em;
  }
  #toolbar button,
  #page-mode input {
    color: currentColor;
    background-color: transparent;
    font: inherit;
    border: 1px solid currentColor;
    border-radius: 3px;
    padding: 0.25em 0.5em;
  }
  #toolbar button:hover,
  #toolbar button:focus,
  #page-mode input:hover,
  #page-mode input:focus {
    color: #fff;
  }
  #page-mode {
    display: flex;
    align-items: center;
    padding: 0.25em 0.5em;
  }

  #viewport-container {
    flex: 1;
    background: #eee;
    overflow: auto;
  }
  #viewport {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #viewport > div {
    text-align: center;
    max-width: 100%;
  }
  #viewport canvas {
    width: 100%;
    box-shadow: 0 2px 5px gray;
  }
</style>

<main>
  <body>
  <div id="container" class="mt-5 mb-5" >
    <div id="app">
      <div role="toolbar" id="toolbar">
        <div id="pager">
          <button data-pager="prev">prev</button>
          <button data-pager="next">next</button>
        </div>
      </div>
      <div id="viewport-container"><div role="main" id="viewport"></div></div>
    </div>
   </div>
    <script>
      (function() {
      let currentPageIndex = 0;
      let pageMode = 1;
      let cursorIndex = Math.floor(currentPageIndex / pageMode);
      let pdfInstance = null;
      let totalPagesCount = 0;

      const viewport = document.querySelector("#viewport");
      window.initPDFViewer = function(pdfURL) {
        pdfjsLib.getDocument(pdfURL).then(pdf => {
          pdfInstance = pdf;
          totalPagesCount = pdf.numPages;
          initPager();
          initPageMode();
          render();
        });
      };

      function onPagerButtonsClick(event) {
        const action = event.target.getAttribute("data-pager");
        if (action === "prev") {
          if (currentPageIndex === 0) {
            return;
          }
          currentPageIndex -= pageMode;
          if (currentPageIndex < 0) {
            currentPageIndex = 0;
          }
          render();
        }
        if (action === "next") {
          if (currentPageIndex === totalPagesCount - 1) {
            return;
          }
          currentPageIndex += pageMode;
          if (currentPageIndex > totalPagesCount - 1) {
            currentPageIndex = totalPagesCount - 1;
          }
          render();
        }
      }
      function initPager() {
        const pager = document.querySelector("#pager");
        pager.addEventListener("click", onPagerButtonsClick);
        // I like this pattern, but this is never actually called, is it?
        return () => {
          pager.removeEventListener("click", onPagerButtonsClick);
        };
      }

      function onPageModeChange(event) {
        pageMode = Number(event.target.value);
        render();
      }
      function initPageMode() {
        const input = document.querySelector("#page-mode input");
        input.setAttribute("max", totalPagesCount);
        input.addEventListener("change", onPageModeChange);
        // Same here.
        return () => {
          input.removeEventListener("change", onPageModeChange);
        };
      }

      function render() {
        cursorIndex = Math.floor(currentPageIndex / pageMode);
        // Could also be:
        // const startPageIndex = currentPageIndex - (currentPageIndex % pageMode);
        const startPageIndex = cursorIndex * pageMode;
        const endPageIndex =
          startPageIndex + pageMode < totalPagesCount
            ? startPageIndex + pageMode - 1
            : totalPagesCount - 1;

        const renderPagesPromises = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          renderPagesPromises.push(pdfInstance.getPage(i + 1));
        }

        Promise.all(renderPagesPromises).then(pages => {
          const pagesHTML = `<div style="width: ${
            pageMode > 1 ? "50%" : "100%"
          }"><canvas></canvas></div>`.repeat(pages.length);
          viewport.innerHTML = pagesHTML;
          pages.forEach(renderPage);
        });
      }

      function renderPage(page) {
        let pdfViewport = page.getViewport(1);

        const container =
          viewport.children[page.pageIndex - cursorIndex * pageMode];
        pdfViewport = page.getViewport(container.offsetWidth / pdfViewport.width);
        const canvas = container.children[0];
        const context = canvas.getContext("2d");
        canvas.height = pdfViewport.height;
        canvas.width = pdfViewport.width;

        page.render({
          canvasContext: context,
          viewport: pdfViewport
        });
      }
    })();

	</script>
  <script src="https://unpkg.com/pdfjs-dist@2.0.489/build/pdf.min.js"></script>
  <script>initPDFViewer("output.pdf");</script>
	<navbar  class="navbar bg-white fixed-bottom shadow-lg">
		<div class="col-12">
			<small class="font-italic font-weight-small mb-2">Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.</small>
		</div>
		<div class="col-12">
			<a rel='prefetch' href='persetujuan_nasabah'><button  class="btn btn-block btn-danger">Lanjutkan</button></a>
		</div>
	</navbar>
</main>
