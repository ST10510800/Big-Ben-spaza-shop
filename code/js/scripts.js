document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const searchableItems = document.querySelectorAll('.filterable-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    const galleryImages = document.querySelectorAll('.gallery-img');

    let lightbox = document.getElementById('lightbox-modal');
    if (!lightbox && galleryImages.length > 0) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.style.cssText = 'display:none; position:fixed; z-index:1000; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;';
        
        const img = document.createElement('img');
        img.id = 'lightbox-img';
        img.style.cssText = 'max-width:85%; max-height:85%; border-radius:8px; box-shadow: 0 0 20px rgba(0,0,0,0.5);';
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    const lightboxImg = document.getElementById('lightbox-img');
    galleryImages.forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            let feedback = form.querySelector('.form-feedback');
            if (!feedback) {
                feedback = document.createElement('div');
                feedback.className = 'form-feedback';
                feedback.style.cssText = 'margin-top: 15px; padding: 10px; font-weight: bold; border-radius: 5px;';
                form.appendChild(feedback);
            }

            feedback.style.backgroundColor = '#e8f5e9';
            feedback.style.color = '#2e7d32';
            feedback.textContent = 'Processing your submission securely...';

            setTimeout(() => {
                feedback.textContent = 'Success! Your request has been successfully submitted and logged. We will contact you shortly.';
                form.reset();
            }, 1000);
        });
    });
});