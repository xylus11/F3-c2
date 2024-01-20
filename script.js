fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
.then(response => response.json())
.then(data => {
  // Process the JSON data here
  console.log(data);
})

  // Function to get the menu
async function getMenu() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
      const menu = await response.json();
      // Display menu items on the screen
      menu.forEach(item => {
        // Display item.name, item.description, item.price, etc.
      });
    } catch (error) {
      console.log('Error fetching menu:', error);
    }
  }
  
  // Function to take the order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Burger 1', 'Burger 2', 'Burger 3']; // Randomly selected burgers
        const order = {
          burgers: burgers
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  // Function for payment
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        resolve(orderStatus);
      }, 1000);
    });
  }
  
  // Function to display thank you message
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Main function to handle the restaurant tasks
  async function handleRestaurantTasks() {
    try {
      await getMenu(); // Get the menu on page load
  
      const order = await takeOrder(); // Take the order
  
      await orderPrep(); // Order preparation
  
      const paymentStatus = await payOrder(); // Payment
  
      if (paymentStatus.paid) {
        thankyouFnc(); // Display thank you message
      }
    } catch (error) {
      console.log('Error in handling restaurant tasks:', error);
    }
  }
  
  // Call the main function to start the restaurant tasks
  handleRestaurantTasks();
  