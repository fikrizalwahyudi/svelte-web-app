<script>
import FaBars from 'svelte-icons/fa/FaBars.svelte';
import IoIosMore from 'svelte-icons/io/IoIosMore.svelte';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
	NavLink,
	Button,
	Col,
  } from 'sveltestrap';

  let isOpen = false;


  
</script>

<style>
  .icon {
    color: red;
    width: 25px;
    height: 25px;
  }
</style>

<Navbar color="light" light expand="lg">
		<Nav class="navbar navbar fixed-top  bg-light shadow-sm">
			<NavItem class=" pull-sm-left">
				<NavLink  href="#">
					<div class="icon">
						<FaBars />
					</div>
				</NavLink>
			</NavItem>

			<NavItem class="nav navbar-nav navbar-logo mx-auto">
				<NavLink  href="#">
					<img src="logo_pru.png" alt="logo_pru" width="200" height="50" >
				</NavLink>
			</NavItem>
			
			<NavItem class=" pull-sm-right">
				<NavLink  href="#">
					<div class="icon">
						<IoIosMore />
					</div>
				</NavLink>
			</NavItem>
		</Nav>	
</Navbar>
<div id="app" class="mt-5" >
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
<Navbar color="light" light>
	<Nav class="navbar navbar fixed-bottom  bg-light shadow-sm justify-content-center">
		<NavItem class ="nav-item  ">
			<p>Apakah anda setuju dengan penawaran ini ?</p>
			<Col sm="12" class="d-flex justify-content-center">
				<Button size="md" class="mr-2" outline color="secondary">Ya</Button>
				<Button size="md" outline color="secondary">Tidak</Button>
			</Col>
		</NavItem>
	</Nav>
</Navbar>