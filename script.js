function filterValues() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let valueItems = document.getElementsByClassName('value-item');

    for (let i = 0; i < valueItems.length; i++) {
        let h2 = valueItems[i].getElementsByTagName('h2')[0];
        let p = valueItems[i].getElementsByTagName('p')[0];
        let txtValue = h2.textContent || h2.innerText;
        let pValue = p.textContent || p.innerText;
        
        if (txtValue.toLowerCase().indexOf(filter) > -1 || pValue.toLowerCase().indexOf(filter) > -1) {
            valueItems[i].style.display = "";
        } else {
            valueItems[i].style.display = "none";
        }
    }
}