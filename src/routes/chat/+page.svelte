<script>
    import db from './firebase.js';
    let input;
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(db);
      console.log(input);
    };
  </script>
  
  <main>
  <form on:submit={handleSubmit}>
  <input type="text" bind:value={input} />
  <button type="submit">Submit</button>
  </form>
  </main>
  
  <style>
  </style>