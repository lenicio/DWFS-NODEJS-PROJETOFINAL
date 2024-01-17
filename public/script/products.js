// Carrega os produtos na tabela
document.addEventListener('DOMContentLoaded', function () {
  const token = localStorage.getItem('token')
  if (!token) {
    window.location.href = '/login'
  }

  $.ajax({
    url: '/api/v1/products',
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function (data) {
      let row = 0;
      data.forEach(function (product) {
        row++;
        $('#table-products tbody').append(`
            <tr>
                <th scope="row" id="${product.id}">${row}</th>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.brand}</td>
                <td>
                <button class="btn btn-primary btn-sm" id="btn-edit-${product.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" id="btn-delete-${product.id}"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
          `)
      })

    },
    error: function (error) {
      window.location.href = '/login';
    }
  })
})


// Prepara modal para adicionar novo produto
$(document).on('click', '#addProductBtn', function () {
  $('#newProductModal').modal('show')
})


// Cria um novo produto
$(document).on('click', '#btn-new-product-modal', function () {
  const token = localStorage.getItem('token')

  $.ajax({
    url: '/api/v1/products',
    type: 'POST',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify({
      description: $('#new-product-description').val(),
      price: $('#new-product-price').val(),
      brand: $('#new-product-brand').val()
    }),
    success: function (data) {
      console.log(data)
      $('#newProductModal').modal('hide')
      window.location.href = '/';
    },
    error: function (error) {
      window.location.href = '/login'
    }
  })
})


// Deleta um produto
$(document).on('click', 'button[id^="btn-delete-"]', function () {
  const id = $(this).attr('id').split('-')[2]
  const token = localStorage.getItem('token')

  $.ajax({
    url: '/api/v1/products/' + id,
    type: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function (data) {
      $(`#${id}`).parent().remove()
    },
    error: function (error) {
      console.log(error)
    }
  })
})


// Prepara modal para edição de produto
$(document).on('click', 'button[id^="btn-edit-"]', function () {
  const id = $(this).attr('id').split('-')[2]
  const token = localStorage.getItem('token')

  $.ajax({
    url: '/api/v1/products/' + id,
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function (data) {
      $('#description').val(data[0].description)
      $('#price').val(data[0].price)
      $('#brand').val(data[0].brand)
      $('#id-product').val(data[0].id)

      $('#editModal').modal('show')
    },
    error: function (error) {
      console.log(error);
      window.location.href = '/login';
    }
  })
})


// Edita um produto
$(document).on('click', '#btn-editar-modal', function () {
  const id = $('#id-product').val()
  const token = localStorage.getItem('token')

  $.ajax({
    url: '/api/v1/products/' + id,
    type: 'PUT',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    data: JSON.stringify({
      description: $('#description').val(),
      price: $('#price').val(),
      brand: $('#brand').val()
    }),
    success: function (data) {
      $('#editModal').modal('hide')
      window.location.href = '/';

    },
    error: function (error) {
      window.location.href = '/login'
    }
  })
})

function decimalFormat(e) {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, '') // Remove tudo que não é dígito ou ponto
    .replace(/(\..*)\./g, '$1') // Substitui múltiplos pontos por um único ponto
    .replace(/(\.\d{2})./g, '$1'); // Limita a duas casas decimais após o ponto
}

document.getElementById('new-product-price').addEventListener('input', decimalFormat);
document.getElementById('price').addEventListener('input', decimalFormat);


