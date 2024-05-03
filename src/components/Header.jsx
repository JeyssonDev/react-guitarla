import PropTypes from 'prop-types';

export const Header = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}) => {
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <header className='py-5 header'>
      <div className='container-xl'>
        <div className='row justify-content-center justify-content-md-between'>
          <div className='col-8 col-md-3'>
            <a href='index.html'>
              <img
                className='img-fluid'
                src='./img/logo.svg'
                alt='imagen logo'
              />
            </a>
          </div>
          <nav className='col-md-6 a mt-5 d-flex align-items-start justify-content-end'>
            <div className='carrito'>
              <img
                className='img-fluid'
                src='./img/carrito.png'
                alt='imagen carrito'
              />

              <div id='carrito' className='bg-white p-3'>
                {cart.length === 0 ? (
                  <p className='text-center'>El carrito esta vacio</p>
                ) : (
                  <>
                    <table className='w-100 table'>
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(({ id, image, price, name, quantity }) => (
                          <tr key={id}>
                            <td>
                              <img
                                className='img-fluid'
                                src={`./img/${image}.jpg`}
                                alt='imagen guitarra'
                              />
                            </td>
                            <td>{name}</td>
                            <td className='fw-bold'>{price}</td>
                            <td className='flex align-items-start gap-4'>
                              <button
                                type='button'
                                className='btn btn-dark'
                                onClick={() => decreaseQuantity(id)}
                              >
                                -
                              </button>
                              {quantity}
                              <button
                                type='button'
                                className='btn btn-dark'
                                onClick={() => increaseQuantity(id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className='btn btn-danger'
                                type='button'
                                onClick={() => removeFromCart(id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className='text-end'>
                      Total pagar:{' '}
                      <span className='fw-bold'>${cartTotal()}</span>
                    </p>
                  </>
                )}
                <button
                  className='btn btn-dark w-100 mt-3 p-2'
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};