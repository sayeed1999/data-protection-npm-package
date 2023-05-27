# @sayeed1999/data-protection

`@sayeed1999/data-protection` npm package is a utility package that helps you hide sensitive properties within an object. It allows you to specify sensitive keywords and recursively hide properties that contain these keywords.

## Installation

```bash
npm install sensitive-property-hider
```

## Usage

```javascript
const hideSensitiveProperties = require('sensitive-property-hider');

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

## License

This project is licensed under the MIT License.
