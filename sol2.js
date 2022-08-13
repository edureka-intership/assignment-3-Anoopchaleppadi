

const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  
  // a) 
  const total = Object.values(orderData).reduce((prev, next) => prev + next);  // Calculating the total of all key values 
  
  // b) 
  const headers = Object.keys(orderData);  // Computing all keys of the Object
  
  //c) 
  const response = headers.map((item, index) => {  
    return {
      'id': index + 1,
      'restaurant': 'Punjabi Tadka',
      'order': item,
      'order percentage': ((orderData[item] / total) * 100).toFixed(2)
    }
  })