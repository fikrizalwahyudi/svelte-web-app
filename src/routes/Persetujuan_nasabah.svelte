<script>
import Header from '../template/Navbar.svelte';
import {Col, Navbar, NavItem, Nav, Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup} from 'sveltestrap';
let open = false;
let open1 = false;
let size;

const tidaksetuju = () => {
	  size = "lg"; 
	  open = !open;
	  };

const setuju = () => {
	  size = "lg"; 
	  open1 = !open1;
	  };
</script>

<Header/>
<div id="app" class="mt-4" >
    <div id="container" class="mt-5 mb-5" >
        <ul>
            <li class="mb-2 text-primary"><a on:click={tidaksetuju}>Syarat dan Ketentuan</a></li>
            <li class="mb-2 text-primary"><a on:click={tidaksetuju}>Tabel Manfaat PRUPrime Healthcare PLUS</a></li>
            <li class="mb-2 text-primary"><a on:click={tidaksetuju}>Informasi No Claim Bonus (NCB)</a></li>
            <li class="mb-2 text-primary"><a on:click={tidaksetuju}>Perhitungan Pro Rate</a></li>
            <li class="mb-2 text-primary"><a on:click={tidaksetuju}>Informasi Pengecualian</a></li>
        </ul>
    </div>

    <p class=" text-justify mt-5">
        “Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan.”
    </p>

    <p class=" text-justify mt-5">
        “Klik Setuju untuk pengajuan perubahan Polis ini.”
    </p>
    <Navbar color="light" class="navbar navbar fixed-bottom">
	<Col xs="12">
		<small class="font-italic font-weight-smal mb-2">Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.</small>
	</Col>
	<Col xs="6">
	<div>
		<Button block color="secondary" on:click={tidaksetuju}>Tidak Setuju</Button>
		<Modal isOpen={open} {tidaksetuju} {size}>
			<ModalHeader class="justify-content-center">Pengajuan Tidak Setuju</ModalHeader>
			<ModalBody>
			Terima kasih atas konfirmasi Anda. Hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut
			</ModalBody>
			<ModalFooter>
			<Button block color="danger"  on:click={tidaksetuju}>Tutup</Button>
			</ModalFooter>
		</Modal>
	</Col>
	<Col xs="6">
		<Button block color="danger" on:click={setuju}>Setuju</Button>
		<Modal isOpen={open1} {setuju} {size}>
			<ModalHeader class="justify-content-center">Pengajuan Setuju</ModalHeader>
			<ModalBody>
			Pengajuan Anda telah kami terima dan akan segera diproses, hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut. Terima kasih
			</ModalBody>
			<ModalFooter>
			<Button block color="danger"  on:click={setuju}>Tutup</Button>
			</ModalFooter>
		</Modal>
	</Col>
</Navbar>
</div>

	







