//calls to start the page
curr_query();

//auto querying the api for new data (every 1 minute)
$(document).ready(() => setInterval("curr_query()", 60000));
