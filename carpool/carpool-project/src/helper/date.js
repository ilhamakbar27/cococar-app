export function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    // const [, day, month, year] = formattedDate.match(/(\d+).+(\w+).+(\d+)/);
  
    return formattedDate;
  }


  