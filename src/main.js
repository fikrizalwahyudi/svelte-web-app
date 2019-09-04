import App from './routes/Password.svelte';
//import App from './App.svelte';
//import App from './routes/GeneratePDF.svelte';
//import App from './Persetujuan_nasabah.svelte';
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