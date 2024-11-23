const form = document.getElementById('myForm');


    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries()); 
      console.log(data);
      
      try {
        const response = await fetch('https://hook.us1.make.com/l890jyjmi22s100dz7c0qzfivnwbc139', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Dados enviados com sucesso!');
        } else {
          alert('Erro ao enviar os dados.');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao enviar os dados.');
      }
    });
