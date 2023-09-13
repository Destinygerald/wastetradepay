function getCurrentUrl() {
    const current_location = window.location.href;

    console.log(current_location)

    const queries = current_location.split('?')[1];
    
    if (!queries.includes("&")) return;

    const query = queries.split('&');
    
    const queryObject = convertArrayToObject(query);
    
    const span = document.createElement('span');
    span.textContent = `${queryObject?.email} has received #${queryObject?.amount}`;

    const Text = document.querySelector('.container')
    Text.append(span);
}

function convertArrayToObject(arr) {
    let arrObj = {};

    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
        const subArr = arr[i].split('=');
        let newProp = subArr[0]
        arrObj = {...arrObj, [subArr[0]]: subArr[1] }
    }

    return(arrObj);
}

getCurrentUrl()