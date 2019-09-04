    
<script>
  import { Router, Route, Link } from "svelte-routing";
  //import Link from "./components/Link.svelte";
  import Password from "./routes/Password.svelte";
  import Persetujuan_nasabah from "./routes/Persetujuan_nasabah.svelte";
  import GeneratePDF from "./routes/GeneratePDF.svelte";
  // Used for SSR. A falsy value is ignored by the Router.

</script>

<Router>
  <nav>
    <Link to="Password">Password</Link>
    <Link to="Persetujuan_nasabah">Persetujuan_nasabah</Link>
    <Link to="GeneratePDF">GeneratePDF</Link>
  </nav>
  <div>
    <Route path="Password" component="{Password}" />
    <Route path="Persetujuan_nasabah" component="{Persetujuan_nasabah}" />
    <Route path="GeneratePDF" component="{GeneratePDF}" />
  </div>
</Router>