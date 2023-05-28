# @sayeed1999/data-protection

`@sayeed1999/data-protection` is a utility package that helps you hide sensitive properties within any javascript object regardless of depth. Which means is, you can have any level of complex javascript object in your project. You just pass the object as parameter into our predefined method and get the secured object as return value. Your sensative data gets never leaked to end-users.

We provide you our default set of sensative keywords that are enough to cover almost 90% of your business needs. If still you need to customize the list of sensative keywords, we give you that option.

Default list of sensative keywords that are used to find sensative properties in your object: ```{ "pass", "auth", "token", "secret", "pwd", "key" }``` Our predefined list is enough to cover almost all of your businesses. For example, `pass matches Password, passWord, UserPass`; `key matches JwtKey, ApiKey`; `secret matches ClientSecret`.

## Installation

```bash
npm install @sayeed1999/data-protection
```

## Usage

```javascript
const { hideSensitiveProperties } = require('@sayeed1999/data-protection');

const entity = {
  username: 'JohnDoe',
  password: 's3cr3t',
  addresses: [
  addresses: [
    {
      street: '123 Main St',
      secretKey: "zxczxcasdasdqw",
    },
    {
      street: '456 Main St',
      secretKey: "pqpqpqpqpqwww",
    }
  ],
  creditCard: {
    number: '1234 5678 9012 3456',
    cvv: '123',
    expiryDate: '12/23'
  }
};

const sensitiveKeywords = ['password', 'secret'];

// Use this code to hide sensative informations based on default set of sensative keywords.
// const hiddenEntity = hideSensitiveProperties(entity);

const hiddenEntity = hideSensitiveProperties(entity, sensitiveKeywords);

console.log(hiddenEntity);
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

## API

```javascript
hideSensitiveProperties(entity, sensitiveKeywords)
```
Recursively hides sensitive properties within the provided entity object based on the specified sensitiveKeywords.

`entity`: The object in which sensitive properties will be hidden.
`sensitiveKeywords`: An array of keywords used to identify sensitive properties.

Returns the modified entity object with sensitive properties set to null.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/sayeed1999/data-protection-npm-package).

## License
This library is licensed under the MIT License. See the [LICENSE](https://github.com/sayeed1999/data-protection-npm-package/blob/main/LICENSE) file for more details.

## Acknowledgements
This library was developed by [Md. Sayeed Rahman](https://www.linkedin.com/in/mdsayeedrahman1999/).
