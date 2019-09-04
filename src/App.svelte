
<Router {routes}/>
<div id="app" class="mt-4 mb-4" >
<Navbar/>

<Card body color="danger">
  <CardBody>
    <Row class="row justify-content-center mt-5 pt-5">
        <Col xs="10" >
        <FormGroup>
            <p class="text-light text-center">Masukkan Password Anda</p>
            <Input xs="3" type="password" name="password" id="password" placeholder="Password" />
            <a href="/generatepdf" use:link use:active><Button  class="mt-3" block color="secondary">Masuk</Button></a>
            <a href="/persetujuan_nasabah" use:link use:active><Button  class="mt-3" block color="secondary">Ke halaman Persetujuan</Button></a>
          
            <!-- <a href="/persetujuan_nasabah" use:link use:active><Button  class="mt-3" block color="secondary">Masuk</Button></!--> 
        </FormGroup>
        </Col>
    </Row>
  </CardBody>
</Card>
</div>

<script>
  import Navbar from './template/Navbar.svelte';
  import { Col, Row, Button, Label, Card, CardBody, Form, FormGroup, FormText, Input } from 'sveltestrap';
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import active from 'svelte-spa-router/active';
  import {link, push, pop, replace, location, querystring} from 'svelte-spa-router';
  // Used for SSR. A falsy value is ignored by the Router.
</script>


