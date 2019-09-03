<script>
import {Col, Navbar, NavItem, Nav, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader} from 'sveltestrap';

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

<Navbar color="light" class="navbar navbar fixed-bottom">
	<Col xs="12">
		<small class="font-italic font-weight-smal mb-2">Penawaran ini berlaku hingga dd-mm-yy pukul hh:mm.</small>
	</Col>
	<Col xs="6">
	<div>
		<Button block color="secondary" on:click={tidaksetuju}>Tidak Setuju</Button>
		<Modal isOpen={open} {tidaksetuju} {size}>
			<ModalHeader class="text-justify">Pengajuan Tidak Setuju</ModalHeader>
			<ModalBody>
			Terima kasih atas konfirmasi Anda. Hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut
			</ModalBody>
			<ModalFooter>
			<Button block color="danger"  onclick={tidaksetuju}>Tutup</Button>
			</ModalFooter>
		</Modal>
	</Col>
	<Col xs="6">
		<Button block color="danger" on:click={setuju}>Setuju</Button>
		<Modal isOpen={open1} {setuju} {size}>
			<ModalHeader class="text-justify">Pengajuan Setuju</ModalHeader>
			<ModalBody>
			Pengajuan Anda telah kami terima dan akan segera diproses, hubungi Tenaga Pemasar Anda untuk informasi lebih lanjut. Terima kasih
			</ModalBody>
			<ModalFooter>
			<Button block color="danger"  onclick={setuju}>Tutup</Button>
			</ModalFooter>
		</Modal>
	</Col>
</Navbar>
