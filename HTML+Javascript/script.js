const submit = () => {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)

    let square1 = document.getElementById('square1')
    let square2 = document.getElementById('square2')
    let square3 = document.getElementById('square3')
    let num1 = document.createElement('div')
    let num2 = document.createElement('div')
    let num3 = document.createElement('div')

    let bigger
    let smaller
    let mean

    if (n1 > n2 && n1 > n3)
    {
        bigger = n1
    }

    if (n2 > n1 && n2 > n3)
    {
        bigger = n2
    }

    if (n3 > n2 && n3 > n1)
    {
        bigger = n3
    }

    num1.innerText = `${bigger}`

    if (n1 < n2 && n1 < n3)
    {
        smaller = n1
    }

    if (n2 < n1 && n2 < n3)
    {
        smaller = n2
    }

    if (n3 < n2 && n3 < n1)
    {
        smaller = n3
    }

    num2.innerText = `${smaller}`

    mean = (n1+n2+n3)/3

    num3.innerHTML = `${mean}`

    square1.appendChild(num1)
    square2.appendChild(num2)
    square3.appendChild(num3)
}