(function () {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("DOM content loaded");
  
      const deleteButtons = document.querySelectorAll("button[data-product-id]");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const productId = button.getAttribute("data-product-id");
          deleteProduct(productId);
        });
      });
    });
  
    async function deleteProduct(productId) {
      console.log("Este es el ID de producto del botón:", productId);
  
      try {
        const responseProduct = await fetch(`/api/testDelete/${productId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        });
  
        if (responseProduct.ok) {
          console.log("Producto eliminado con éxito");
          // Recargar la página después de la eliminación exitosa
          location.reload();
        } else {
          console.error("Error al intentar eliminar el producto");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  })();
  