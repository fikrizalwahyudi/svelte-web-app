<script>
import Navbar from './Navbar.svelte';
import Footer from './F_Confirm.svelte';
</script>

<style>
#ul{
  list-style-type: circle;
}
</style>

<Navbar/>

<div id="container" class="mt-5 mb-5" >
    <ul>
        <li class="mb-2"><a href="#">Syarat dan Ketentuan</a></li>
        <li class="mb-2"><a href="#">Tabel Manfaat PRUPrime Healthcare PLUS</a></li>
        <li class="mb-2"><a href="#">Informasi No Claim Bonus (NCB)</a></li>
        <li class="mb-2"><a href="#">Perhitungan Pro Rate</a></li>
        <li class="mb-2"><a href="#">Informasi Pengecualian</a></li>
    </ul>
</div>

<p class=" text-justify mt-5">
    “Saya dengan ini menyetujui perubahan Polis sesuai dengan Manfaat Kesehatan yang tertera pada penawaran ini, dan akan diproses tanpa melalui permintaan pemeriksaan kesehatan jika status Polis tetap aktif serta sesuai dengan syarat dan ketentuan.”
</p>

<p class=" text-justify mt-5">
    “Klik Setuju untuk pengajuan perubahan Polis ini.”
</p>
<Footer/>
	







