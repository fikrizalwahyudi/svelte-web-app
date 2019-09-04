<script>
import Navbar from '../template/Navbar.svelte';
import Footer from '../template/F_Next.svelte';
</script>

<Navbar/>
<div id="app" class="mt-4" >
	<div role="toolbar" id="toolbar" class="mt-2">
		<div id="pager">
			<button data-pager="prev">prev</button>
			<button data-pager="next">next</button>
		</div>
		<!-- <div id="page-mode">
			<label>Page Mode <input type="number" value="1" min="1"/></label>
		</div> -->
	</div>
	<div id="viewport-container">
		<div role="main" id="viewport"></div>
	</div>
</div>
<Footer/>






