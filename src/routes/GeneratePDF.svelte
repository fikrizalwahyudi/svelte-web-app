<script>
import App from '../App.svelte'
//import * as PDFjs from '../../public/pdfjs.js';
import Header from '../template/Navbar.svelte';
import {Col, Navbar, NavItem, Nav, Button, ButtonGroup} from 'sveltestrap';
//import Persetujuan_nasabah from "../routes/Persetujuan_nasabah.svelte";
//import GeneratePDF from "../routes/GeneratePDF.svelte";
import Router from 'svelte-spa-router';
import routes from '../routes.js';
import active from 'svelte-spa-router/active';
import {link} from 'svelte-spa-router';
//initPDFViewer("output.pdf");
</script>

<!-- <Router {routes}/> -->
<Header/>
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
	<Navbar color="white" class="navbar navbar fixed-bottom">
		<small class="text-justify mb-4">Klik lanjutkan untuk membaca syarat dan ketentuan, tabel manfaat PRUForce Helathcare Plus, informasi <i>No Claim Bonus,</i> Perhitungan Pro Rata dan Informasi Pengecualian dibawah.</small>
		<small class="font-italic font-weight-small">Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.</small>
		<a href="/persetujuan_nasabah" use:link><Button block color="danger">Lanjutkan</Button></a>
	</Navbar>
</div>







