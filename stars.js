// JavaScript para capturar o valor da avaliação
        const ratingContainer = document.querySelector('.rating-container');
        const ratingValueSpan = document.getElementById('rating-value');

        ratingContainer.addEventListener('change', (event) => {
            const selectedRating = event.target.value;
            ratingValueSpan.textContent = `${selectedRating} estrela(s)`;

            console.log(`Avaliação selecionada: ${selectedRating}`);

            /*
            Aqui você pode adicionar o código para enviar a avaliação para o seu servidor.
            Exemplo:
            fetch('/api/rate-product', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating: selectedRating })
            }).then(response => {
                // Lidar com a resposta do servidor
            }).catch(error => {
                // Lidar com erros
            });
            */
        });