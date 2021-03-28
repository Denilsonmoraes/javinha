function pesquisar() {
  var aNum = document.getElementById("aNum").value
  var bNum = document.getElementById("bNum").value
  var cNum = document.getElementById("cNum").value

  var result = document.getElementById("result")
  var result1 = document.getElementById("result1")
  var result2 = document.getElementById("result2")
  var res = document.getElementById("res")

  var res1 = document.getElementById("res1")

  var s = (parseInt(aNum)+parseInt(bNum)+parseInt(cNum))/2

  result.textContent = "s=(a+b+c)/2"

  result1.textContent = "s="+aNum+"+"+bNum+"+"+cNum

  result2.textContent = "s="+s

  res.textContent = "Aqui em baixo o resultado em cm²"

  res1.textContent = Math.sqrt(s*(s-aNum)*(s-bNum)*(s-cNum)).toFixed(2)+" cm²"


}

var pesquisa = document.getElementById("pesquisa")
pesquisa.addEventListener("click", pesquisar)
