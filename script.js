document.getElementById('findIntersection').addEventListener('click', () => {
    const list1Input = document.getElementById('list1').value;
    const list2Input = document.getElementById('list2').value;

    const list1 = list1Input.split(',').map(node => node.trim());
    const list2 = list2Input.split(',').map(node => node.trim());

    const intersection = findIntersection(list1, list2);
    const resultElement = document.getElementById('result');

    if (intersection !== null) {
        resultElement.textContent = `Intersection Point: ${intersection}`;
    } else {
        resultElement.textContent = 'No Intersection Point';
    }
});

function findIntersection(list1, list2) {
    const set1 = new Set(list1);
    for (const node of list2) {
        if (set1.has(node)) {
            return node;
        }
    }
    return null;
}
