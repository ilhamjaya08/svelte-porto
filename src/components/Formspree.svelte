<h1>Send Message To Me (Private)</h1>

<!-- Formspree -->
<!-- svelte-ignore a11y-no-redundant-roles -->
<form role="form" method="POST" action="https://formspree.io/xvoeznra">
  
  <label for="f1">Name</label>
  <input type="text" name="name" placeholder="Name *" id="f1" required>
  
  <label for="f2">Email</label>
  <input type="email" name="_replyto" placeholder="Email *" id="f2" required>
  
  <label for="f4">Phone</label>
  <input type="tel" name="phone" placeholder="Phone *" pattern="[0-9]+$" title="Only numbers!" id="f4" required>
  
  <label for="f5">Website</label>
  <input type="url" name="website" placeholder="Website *" id="f5" required>
  
  <input type="hidden" name="_subject" value="A HIDDEN SUBJECT TITLE HERE">
  
  <label for="f3">Message</label>
  <textarea name="text" placeholder="Message *" id="f3" required="required"></textarea>
  
  <input type="submit" value="Submit">
  <input type="hidden" name="_next" value="FRIENDLY_THANK_YOU_PAGE.html">
</form>

<style>
:root { font-size: 16px; }
* { margin: 0; padding: 0; box-sizing: border-box; }


h1 {
  font-size: 27px;
  margin-bottom: 2.5rem;
  font-family: 'Courier New', Courier, monospace;
  color: black;
}

form {
  display: inline-block;
  float: none;
  max-width: 500px;
  margin: 0 auto;
}
form input {
  width: 100%;
  color: #000;
}
form textarea {
  width: 100%;
  height: 160px;
  resize: none;
}
form input, form textarea {
  font-weight: 400;
  font-size: 1.2rem;
  font-family: monospace;
  border-radius: 4px;
 }
form label {
  font-size: 0;
  opacity: 0;
  display: none;
 }
form input, form textarea {
  float: left;
  padding: 0 1.25rem;
  margin: 0 0 1.25rem;
  line-height: 54px;
  background: #fff;
  border: 2px solid #000;
  color: #000;
  outline: none;
  /*-webkit-appearance: none;*/
} 
form textarea:focus, form textarea:active {
  color: #000;

  border-color: #000;
}
form input[type="submit"] {
  float: left;
  cursor: pointer;
    margin: 0;
    border: none;
  font-weight: bold;
  width: 100%;
  color: #fff;
  background: #000;
}
form input[type="submit"]:hover,
form input[type="submit"]:focus {
  opacity: .7;
}
</style>