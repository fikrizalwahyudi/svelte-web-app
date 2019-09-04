<script>
import { Router, Route, } from "svelte-routing";
import Navbar from '../template/Navbar.svelte';
import Footer from '../template/F_Next.svelte';
import { Col, Row, Button, Label, Card, CardBody, Form, FormGroup, FormText, Input } from 'sveltestrap';
import Link from "../components/Link.svelte";
import GeneratePDF from "./GeneratePDF.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";
</script>

<Router url="{url}">
<Route path="GeneratePDF" component={GeneratePDF} />
<div id="app" class="mt-4 mb-4" >
<Navbar/>

<Card body color="danger">
  <CardBody>
    <Row class="row justify-content-center mt-5 pt-5">
        <Col xs="10" >
        <FormGroup>
            <p class="text-light text-center">Masukkan Password Anda</p>
            <Input xs="3" type="password" name="password" id="password" placeholder="Password" />
            <Link to="GeneratePDF">
                <Button class="mt-3" block color="secondary">Masuk</Button> 
            </Link> 
            
        </FormGroup>
        </Col>
    </Row>
  </CardBody>
</Card>
</div>

</Router>







