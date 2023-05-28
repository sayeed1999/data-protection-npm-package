# @sayeed1999/data-protection

`@sayeed1999/data-protection` is a utility package that helps you hide sensitive properties within any JavaScript object, regardless of its depth. This ensures that sensitive data is never leaked to end-users.

## Installation

```bash
npm install @sayeed1999/data-protection
```

## Usage

```javascript
const { hideSensitiveProperties } = require("@sayeed1999/data-protection");

const entity = {
  username: "JohnDoe",
  password: "s3cr3t",
  addresses: [
    {
      street: "123 Main St",
      secretKey: "zxczxcasdasdqw",
    },
    {
      street: "456 Main St",
      secretKey: "pqpqpqpqpqwww",
    },
  ],
  creditCard: {
    number: "1234 5678 9012 3456",
    cvv: "123",
    expiryDate: "12/23",
  },
};

const safeEntity = hideSensitiveProperties(entity);

console.log(safeEntity);

/*
Output:
{
  username: 'JohnDoe',
  password: null,
  addresses: [
    {
      street: '123 Main St',
      secretKey: null,
    },
    {
      street: '456 Main St',
      secretKey: null,
    }
  ],
  creditCard: {
    number: '1234 5678 9012 3456',
    cvv: '123',
    expiryDate: '12/23'
  }
}
*/
```

The code snippet demonstrates how to use the hideSensitiveProperties function from the @sayeed1999/data-protection package. It starts by importing the function. Then, an example object called entity is defined, which contains sensitive properties like password and secretKey.

The hideSensitiveProperties function is called with the entity object as argument. The function returns a modified safeEntity object where the sensitive properties are set to null.

Finally, the safeEntity object is logged to the console, showing the result of hiding the sensitive properties.

## API

```javascript
hideSensitiveProperties(entity, sensitiveKeywords);
```

Recursively hides sensitive properties within the provided entity object based on the specified sensitiveKeywords.

`entity`: The object in which sensitive properties will be hidden.

`sensitiveKeywords`: (Optional property) An array of keywords used to identify sensitive properties.

Returns the modified entity object with sensitive properties set to null.

## Customization

By default, the package uses a set of sensitive keywords ({ "pass", "auth", "token", "secret", "pwd", "key" }) to identify sensitive properties. If you need to customize the list of sensitive keywords, simply provide your own array of keywords as the second parameter.

```javascript
// Use this code to hide sensative informations based on your custom set of sensative keywords.

const sensitiveKeywords = [
  "password",
  "secret",
  "count",
  "deleted",
  "created",
  "updated",
  "modified",
  "key",
  "token",
];
const securedEntity = hideSensitiveProperties(entity, sensitiveKeywords);
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/sayeed1999/data-protection-npm-package).

## License

This library is licensed under the MIT License. See the [LICENSE](https://github.com/sayeed1999/data-protection-npm-package/blob/main/LICENSE) file for more details.

## Acknowledgements

This library was developed by [Md. Sayeed Rahman](https://www.linkedin.com/in/mdsayeedrahman1999/).
