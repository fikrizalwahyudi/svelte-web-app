<script>
import FaBars from 'svelte-icons/fa/FaBars.svelte';
import IoIosMore from 'svelte-icons/io/IoIosMore.svelte';
import {Navbar, Nav, NavItem, NavLink, } from 'sveltestrap';

  let isOpen = false;

</script>

<style>
  .icon {
    color: red;
    width: 25px;
    height: 25px;
  }
</style>

<Navbar  expand="md">
	<Nav class="navbar navbar fixed-top  bg-white shadow-md">
		<NavItem class="nav navbar-nav pull-right"></NavItem>
		<img class="rounded float-right" src="logo_pru.png" alt="logo_pru" width="150" height="35" >
	</Nav>	
</Navbar>