/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTExMWExUVFRUSExgYFxoWFhgVFxcXFxUYFxUYHCggGB0lHxUWITEhJSorMC4uGB8zODMtNygtLisBCgoKDg0OGxAQGy8lICYtLS0tLi8tLS4tLy0vLy0rLy0tLS8tKy0vLS0tLS0tLS0tLjUwLS0tLS0tLS4tLTUtLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABKEAABAwIDAgoDCwoFBQAAAAABAAIDBBEFEiEGMQcTIkFRYXGBkaEysdEURFJUYnKCkpPB0hcjM0JDg6Oy0/AWJFOi4jRzw+Hx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EADQRAQACAQIDBQYGAgIDAAAAAAABAgMEERIhMQUTQVGRImFxodHwFDKBscHhQlIVIyQz8f/aAAwDAQACEQMRAD8A7igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8JQRaiqIIDRcalzrizbetRMp2YTaXaVtIGDK6aeU5aeFnpyO7OYDeSdy64sfHPOdo8ZUvbh6c5ZXAIp2wg1LgZnEveG+gy+5jTzhosL85uVGSazPsxyKRMR7U7yyKosICAgIKXSAd2pQegoPUBAQEBAQEBAQEBAQEBAQEHhNtSgiOxKK9swJ/vnUcUJ2lyvanhKqaWtjMlIYoG5gWPeOMljOmdmUlmhAtr1X1uOtu7iNqzMz5+CIpk4eOZiI8t+f9ffNomJYlPPJJLFUTPiMjzE45tGZjlBud4Fhv5laO0slPZ4Y9G7F2Jp8+OL95O8+kfNL2d2jraebjmETvDMhzjO/i75rNvyrdTStFNZp9RHDevDPu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"
                alt="tênis"
              />
            </td>
            <td>
              <strong>Tênis Nike</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>

      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,57</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;