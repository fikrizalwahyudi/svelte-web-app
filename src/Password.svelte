<script>
import Navbar from './Navbar.svelte';
import Footer from './F_Next.svelte';
import { Col, Row, Button, Label, Card, CardBody, Form, FormGroup, FormText, Input } from 'sveltestrap';
</script>

<Navbar/>
<div id="app" class="mt-4 mb-4" >
<Card body color="danger">
  <CardBody>
    <Row class="row justify-content-center mt-5 pt-5">
        <Col xs="10" >
        <FormGroup>
            <p class="text-light text-center">Masukkan Password Anda</p>
            <Input xs="3" type="password" name="password" id="password" placeholder="Password" />
            <Button class="mt-3" block color="primary">Masuk</Button>
        </FormGroup>
        </Col>
    </Row>
  </CardBody>
</Card>
</div>







