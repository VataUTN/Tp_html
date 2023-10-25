document.addEventListener("DOMContentLoaded", function() {
    function LoadTasks(category) {
      fetch(`http://localhost:3000/tasks?category=${category}`)
        .then(response => response.json())
        .then(data => {
          const taskList = document.getElementById("tasks");
          taskList.innerHTML = "";
          data.forEach(function(task) {
            const card = document.createElement("div");
            card.className = "card mx-2 mb-3";
            card.style = "width: 18rem;";
  
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
  
            const cardImage = document.createElement("img");
            cardImage.className = "card-img-top";
            cardImage.src = task.image;
            cardImage.alt = task.title;
  
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.innerText = task.title;
  
            const detailButton = document.createElement("button");
            detailButton.className = "btn btn-outline-info";
            detailButton.innerText = "Ver Detalle";
            detailButton.addEventListener("click", function() {
              showDetailModal(task.title, task.description, task.image);
            });
  
            cardBody.appendChild(cardImage);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(detailButton);
  
            card.appendChild(cardBody);
            taskList.appendChild(card);
          });
        })
        .catch(error => console.error(error));
    }

    function showDetailModal(title, description, imageUrl) {
      const modal = document.getElementById("detailModal");
      const modalTitle = modal.querySelector(".modal-title");
      const modalText = modal.querySelector(".modal-text");
      const modalImage = modal.querySelector(".modal-image");
  
      modalTitle.innerText = title;
      modalText.innerText = description;
      modalImage.src = imageUrl;
  
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }
  
    LoadTasks("Por Hacer");
  
    const categoryButtons = document.querySelectorAll(".category");
    categoryButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        LoadTasks(category);
      });
    });
  });
  