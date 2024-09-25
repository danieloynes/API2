url ="./api.json"
 
fetch(url)
  .then(response => response.json())
  .then(data => {
    const strawberry = data.find(item => item.name === 'Strawberry');
    const orange = data.find(item => item.name === 'Orange');
    const banana = data.find(item => item.name === 'Banana');
   
    console.log(`Strawberry protein: ${strawberry.nutritions.protein}`);
    console.log(`Orange calories: ${orange.nutritions.calories}`);
    console.log(`Banana sugar: ${banana.nutritions.sugar}`);
  })
  .catch(error => console.error('Error:', error));