function hideSensitiveProperties(entity, sensitiveKeywords) {
  hideSecretFieldsRecursively(entity, sensitiveKeywords);

  return entity;
}

function hideSecretFieldsRecursively(entity, sensitiveKeywords) {
  if (!entity || typeof entity !== "object") return;

  if (Array.isArray(entity)) {
    for (let i = 0; i < entity.length; i++) {
      hideSecretFieldsRecursively(entity[i], sensitiveKeywords);
    }
  } else {
    const properties = Object.keys(entity);

    for (let i = 0; i < properties.length; i++) {
      const propertyName = properties[i];
      const propertyValue = entity[propertyName];

      let isHidden = false;
      for (let j = 0; j < sensitiveKeywords.length; j++) {
        const secret = sensitiveKeywords[j];
        if (propertyName.toLowerCase().includes(secret.toLowerCase())) {
          entity[propertyName] = null;
          isHidden = true;
          break;
        }
      }

      if (isHidden) continue;

      hideSecretFieldsRecursively(propertyValue, sensitiveKeywords);
    }
  }
}

module.exports = {
  hideSensitiveProperties,
};
