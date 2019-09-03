//import App from './GeneratePDF.svelte';
//import App from './Password.svelte';
import App from './Persetujuan_nasabah.svelte';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/pdf.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


window.app = app;

export default app;