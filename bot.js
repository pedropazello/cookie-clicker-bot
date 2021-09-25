function clickOnCookie(){
  $("#bigCookie").click()
  setTimeout(clickOnCookie,1)
}

function buyResources() {
  var cursor = $("#product0")
  var grandma = $("#product1")
  var farm = $("#product2")
  var mine = $("#product3")
  var factory = $("#product4")
  var bank = $("#product5")
  var temple = $("#product6")
  var wizardTower = $("#product7")
  var shipment = $("#product8")
  var alchemyLab = $("#product9")

  var productsEnabled = [
  ]

  productsEnabled.forEach(function (product) {
    product.click()
  })

  setTimeout(buyResources, 1000);
}

function clickOnRandomCookies() {
  if ($(".shimmer")) {
    $(".shimmer").click()
  }
  setTimeout(clickOnRandomCookies,1)
}

var concurrentClickers = 100


clickOnCookie()
buyResources()
clickOnRandomCookies()
